//import PropTypes from 'prop-types';

import { useDispatch, useSelector} from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import {selectStatusFilter} from 'redux/selectors';
 
import { Label, Input } from './Filter.styled';



export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);    
  
  const filterContact = (e) => {

    dispatch(setStatusFilter(e.currentTarget.value.trim()))
  }

  return (
    <Label>
      Find contacts by name
      <Input
        
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={filterContact}
        
      />
    </Label>
  );
};

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     filterContact: PropTypes.func.isRequired,
// };