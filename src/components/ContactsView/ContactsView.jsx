import ContactsList from 'components/ContactsList/ContactsList';
import { ConfirmProvider } from 'material-ui-confirm';

export default function ContactsView() {
  return (
    <>
      <ConfirmProvider>
        <ContactsList />
      </ConfirmProvider>
    </>
  );
}
