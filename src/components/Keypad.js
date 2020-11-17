// Code Keypad Component Here
import React from 'react';
export default function Keypad() {
    
    return (
        <input type="password" onKeyUp={() => console.log('Entering password...')} />
    )
}