import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ReactPhoneInput from 'react-phone-input-material-ui';
import { useConfirm } from 'material-ui-confirm';
import PropTypes from 'prop-types';
import {
  useCreateContactMutation,
  useEditContactMutation,
} from 'redux/contacts/contacts-reducer';

const theme = createTheme();

function AddEditContactForm({
  addedContacts,
  onClose,
  contactIdToEdit = null,
}) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const [createContact, { isCreating }] = useCreateContactMutation();
  const [editContact, { isEditing }] = useEditContactMutation();

  const confirmDialog = useConfirm();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setContact(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    if (contactIdToEdit) {
      setContact(addedContacts.find(contact => contact.id === contactIdToEdit));
    }
  }, [contactIdToEdit, addedContacts]);

  const onNumberChange = value => {
    setContact(prevState => {
      return { ...prevState, number: value };
    });
  };

  const nameAlreadyExist = (contacts, nameToAdd) => {
    return contacts.find(
      contact => contact.name.toLowerCase() === nameToAdd.toLowerCase()
    );
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contact.name.length === 0 || contact.number.length === 0) {
      confirmDialog({
        title: `Fields "Name" or "Number" can't be empty!`,
        description: `Type "Name" and "Number" to relevant fields!`,
        cancellationText: '',
      }).catch(() => {});
      return;
    }
    if (contactIdToEdit) {
      editContact({
        id: contactIdToEdit,
        ...contact,
      }).then(_ => {
        onClose();
        reset();
      });
    } else {
      if (!nameAlreadyExist(addedContacts, contact.name)) {
        createContact(contact).then(_ => {
          onClose();
          reset();
        });
      } else {
        confirmDialog({
          title: `Oh no!`,
          description: `Name ${contact.name} already exists in your phone book`,
          cancellationText: '',
        }).catch(() => {});
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {contactIdToEdit ? 'Edit contact' : 'Add new contact'}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Name"
              autoFocus
              value={contact.name}
              onChange={handleChange}
            />
            <ReactPhoneInput
              required
              value={contact.number}
              onChange={onNumberChange} // passed function receives the phone value
              component={TextField}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isEditing || isCreating}
              sx={{ mt: 3, mb: 2 }}
            >
              {contactIdToEdit ? 'Save changes' : 'Add'}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default AddEditContactForm;

AddEditContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactIdToEdit: PropTypes.string,
};
