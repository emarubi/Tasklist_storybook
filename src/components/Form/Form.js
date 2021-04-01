import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTaskFromInput }) => {
    const [value, setValue] = useState('');

    return(
        <form onSubmit={(event) => {
            // to avoid page refresh
            event.preventDefault();
            addTaskFromInput(value); // call the function from parent component
        }}
        >      
        <input 
            value={value}
            onChange={(event) => {
                // I get the value inserted by user from event.target.value
                setValue(event.target.value);
            }}
            className="form__input"
            type="text"
            placeholder="Add new task"
        />
    </form>
    );
};

Form.propTypes = {
    addTaskFromInput: PropTypes.func.isRequired,
};

export default Form;