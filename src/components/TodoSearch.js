import React from 'react';

function TodoSearch (props){

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
    }

    return (
            <input
            className='TodoSearch'
            placeholder="Seach Task..."
            onChange={onSearchValueChange}
            />
    );
}

export {TodoSearch};