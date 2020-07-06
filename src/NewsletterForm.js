import React from 'react';

const NewsletterForm = () => {


    // 1. Create a variable reserved for the input field
    let inputField;
    // 2. Assign the variable to the input component
    // 3. Upon onClick event, alert the contents of the input field

    const registerEmail = () => {
        console.log(inputField.value)
    }

    return (
        <div className="input-group mb-3">
            <input type="text" 
                id="the-field"
                className="form-control" 
                placeholder="Recipient's email" 
                aria-label="Recipient's email" 
                aria-describedby="button-addon2" 
                ref={ 
                    (comp) => inputField = comp
                }
            />
            <div className="input-group-append">
                <button 
                    className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={registerEmail}
                >Button</button>
            </div>
        </div>
    )
};

export default NewsletterForm;