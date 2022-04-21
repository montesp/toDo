import react from 'react';

function TodoList (props){
    return (
        <section className='card-container'>
            <ul className='element'>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};