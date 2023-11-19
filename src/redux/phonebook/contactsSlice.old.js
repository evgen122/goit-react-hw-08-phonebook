import { createSlice, nanoid } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.push({ ...action.payload, id: nanoid() });
      localStorage.setItem('setContacts', JSON.stringify(state));
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('setContacts', JSON.stringify(state));
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
