import React from 'react';
import List from '../Styled/List.styled';
import { MdDeleteForever } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { selectUseContacts } from 'components/Store/Contacts/selectors';
import { useContacts } from 'Hooks/hook';

function ContactList() {
  const filteredContacts = useSelector(selectUseContacts);
  const { removeContact } = useContacts();
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => removeContact(id)}>
            <MdDeleteForever />
          </button>
        </li>
      ))}
    </List>
  );
}

export default ContactList;
