import React from 'react';

import TextField from '@mui/material/TextField';

const ContactSearch = ({ value, onChange }) => {
  return (
    <TextField
      id="contacts-search"
      label="Search"
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
      type="search"
    />
  );
};

export default ContactSearch;
