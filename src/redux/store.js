import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebook/contactsSlice';
import { filterReducer } from './phonebook/filterSlice';

export const store = configureStore({
  reducer: { filter: filterReducer, contacts: contactsReducer },
});
