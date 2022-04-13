# evForm
Evaluate forms with validations and easy implementation.
Lightweight, customizable and without dependencies

## Implementation

Add an ``ID`` to the form

``<form id="myForm">``

Add to each input some of the following classes

``require``

``email``

``phone``

``number``

``postalCode``

``letters``

Add an event onclick to button

``document.getElementById("btnSend").onclick = function(e){``

``registerValidate('form','btnSend') .then(function (){``

``if(evForm.getErrors() === 0) {``

``document.getElementById("form").submit(); }``

``})``

``.catch(err => console.log(err)) e.preventDefault(); }``

The class ``registerValidate`` receives 2 parameters, the first is the ID of the form and the second is the ID of the button

## Customization

You can add to the evForm object in the evaluate property an array with the following structure:

``evForm.evaluates.push({``

        name: 'phone',
        
        msg: 'Ingresa un número telefónico',
        
        evaluate: function (input){
        
            let value = input.value
            
            let pattern=new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
            
            if (!pattern.test(value)){
            
                input.value = value.replace(/[A-Za-z\s]+/g,'')
                
                return true
                
            }
            
            return false
            
        }
        
    })
   
   try to use regular expressions to evaluate, the evaluate field should return true if it does not pass validation, otherwise it should return false
   
