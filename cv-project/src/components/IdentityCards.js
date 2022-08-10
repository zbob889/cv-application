import React from 'react';

export default function IdentityCards(props){

    let [contact, changeContact] = React.useState({
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
      });
    
    let [buttonState, changeButtonState] = React.useState('Save');

    function clickButton(){
        if(buttonState === 'Edit'){
            //switch to editing mode

            changeButtonState('Save');
        } else if(buttonState === 'Save'){
            //switch to display mode
            saveValues();
            changeButtonState('Edit');
        }
    };

    function saveValues(){
        let newFirstName = document.getElementById('firstName').value;
        let newLastName = document.getElementById('lastName').value;
        let newEmail = document.getElementById('email').value;
        let newPhoneNumber = document.getElementById('phoneNumber').value;

        changeContact({
            firstName: newFirstName,
            lastName: newLastName,
            email: newEmail,
            phoneNumber: newPhoneNumber,
        });
    };

    const displayMode = (
        <div className='identityDisplay'>
            <p>Name: {contact.firstName} {contact.lastName}</p>
            <p>Email: {contact.email}</p>
            <p>Phone Number: {contact.phoneNumber}</p>
        </div>
    );

    const editMode = (
        <div className='identityEdit'>
            <input type="text" defaultValue={contact.firstName} id='firstName' />
            <input type="text" defaultValue={contact.lastName} id='lastName' />
            <input type="text" defaultValue={contact.email} id='email' />
            <input type="text" defaultValue={contact.phoneNumber} id='phoneNumber' />
        </div>
    );

    let currentMode = buttonState === 'Edit' ? displayMode : editMode;

    return(
        <div className="identity">
            {currentMode}
            <button onClick={clickButton}>{buttonState}</button>
        </div>
    )
}