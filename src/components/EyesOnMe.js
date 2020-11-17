import React from 'react';

// Code EyesOnMe Component Here
export default function EyesOnMe() {

    return (
        <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')} /> 
        )
}