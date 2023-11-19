import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, resetFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filters = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onChangeFilter = newFilter => dispatch(changeFilter(newFilter));
  const onResetFilter = () => dispatch(resetFilter());

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filters}
        onChange={evt => onChangeFilter(evt.target.value)}
      />
      <button onClick={onResetFilter}>Reset</button>
    </div>
  );
};
