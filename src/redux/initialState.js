export const filterInitialState = () => {
  const savedFilter = localStorage.getItem('filter');
  if (savedFilter !== null) {
    return JSON.parse(savedFilter);
  }
  return '';
};

export const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
