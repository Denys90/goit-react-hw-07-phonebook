import React from 'react';
import Input from '../Styled/Input.styled';
import { useContacts } from 'Hooks/hook';

function Filter() {
  const { filter, filterContacts } = useContacts();
  return (
    <Input
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => filterContacts(e.target.value)}
    />
  );
}

export default Filter;
