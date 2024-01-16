import React from 'react';
import FormS from '../Styled/FormS.styled';
import { nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useContacts } from 'Hooks/hook';
import { selectUseContacts } from 'components/Store/Contacts/selectors';

function Form() {
  const { addContact } = useContacts();
  const contacts = useSelector(selectUseContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    const existingName =
      contacts &&
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
    if (existingName) {
      toast.error(`${newContact.name} is already in contacts!`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      addContact(newContact);
      toast.success('The contact is added to the phone book!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    e.target.reset();
  };

  return (
    <FormS onSubmit={handleSubmit}>
      <label htmlFor="Name">
        Name
        <input type="text" name="name" id="Name" required />
      </label>
      <label>
        Number
        <input type="tel" name="number" id="number" required />
      </label>
      <button type="submit">Add Contact</button>
    </FormS>
  );
}

export default Form;
