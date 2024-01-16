import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from 'components/Store/Contacts/contactsSlice';
import { filterReducer } from 'components/Store/Contacts/filterSlice';

const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
