import React from 'react';
import List from '../Styled/List.styled';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectUseContacts } from 'components/Store/Contacts/selectors';
import { useContacts } from 'Hooks/hook';
import { toast } from 'react-toastify';

function ContactList() {
  const filteredContacts = useSelector(selectUseContacts);
  const { removeContact } = useContacts();

  const handleRemoveContact = (id, e) => {
    removeContact(id);
    toast.success(`Contact deleted successfully!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => handleRemoveContact(id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
