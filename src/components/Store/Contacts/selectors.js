import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'components/Store/Filter/selector';

export const selectContact = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectUseContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    if (contacts && contacts.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return [];
  }
);
