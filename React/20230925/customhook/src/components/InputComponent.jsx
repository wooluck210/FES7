import React, { useState } from 'react';
import useInput from '../Hook/useInput';

function InputComponent() {
    const [value, setValue] = useInput('');
    // function onChange(e) {
    //     setValue(e.target.value);
    // }
    return (
        <>
            <input type="text" onChange={setValue}/>
            <div>
                {value}
            </div>
        </>
    )
}

export default InputComponent;