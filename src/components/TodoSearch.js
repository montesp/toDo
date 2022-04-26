import React, {useContext} from 'react';
import { TodoContext } from '../contexts/todoContext';

function TodoSearch (){
    const {
        searchValue,
        setSearchValue
    } = useContext(TodoContext);


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input
        className='TodoSearch'
        placeholder="Seach Task..."
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};