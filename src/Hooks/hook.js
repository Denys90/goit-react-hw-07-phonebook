import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContact,
  selectFilter,
} from 'components/Store/Contacts/selectors';

import { setFilter } from 'components/Store/Contacts/filterSlice';
import * as operations from 'components/Store/Contacts/operations';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const fetchAllContacts = useCallback(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const addContact = useCallback(
    contact => {
      dispatch(operations.addContact(contact));
    },
    [dispatch]
  );

  const removeContact = useCallback(
    id => {
      dispatch(operations.deleteContact(id));
    },
    [dispatch]
  );

  const filterContacts = value => dispatch(setFilter(value));

  return {
    contacts,
    filter,
    setFilter,
    fetchAllContacts,
    addContact,
    removeContact,
    filterContacts,
  };
};
