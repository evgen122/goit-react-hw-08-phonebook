import { ItemContact } from 'components/ItemContact/ItemContact';
import { ItemList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const filters = contacts;
  return (
    <ul>
      {filters.map(i => (
        <ItemList key={i.id}>
          <ItemContact item={i} />
        </ItemList>
      ))}
    </ul>
  );
};
