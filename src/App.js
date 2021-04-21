import React, { useState, useEffect } from 'react'
import Form from './Form';
import * as Yup from 'yup';
import axios from 'axios';



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('pls pls pls tell me ur name!'),
  email: Yup
    .string()
    .email('I like real emails ok?'),
  password: Yup
    .string()
    .required('use a secret password')
    .min(6, 'not long enough, pls make password at least 6 characters'),
  terms: Yup
    .boolean()
    .oneOf([true], 'we require your full consent'),
})

function App() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [users, setUsers] = useState([])
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      password: '',
      terms: '',
    })

    const setFormErrors = (name, value) => {
      Yup.reach(schema, name).validate(value)
        .then(() => {
          setErrors({...errors, [name]: ''})
        })
        .catch(err => {
          setErrors({...errors, [name]: err.errors[0]})
        })
    }

   useEffect(() => {
     schema.isValid(formValues).then(valid => {setDisabled(!valid)})
   }, [formValues])
   

    const change = evt => {
        const {type, name, value, checked} = evt.target;
        const valueOrChecked = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueOrChecked})
        setFormErrors(name, valueOrChecked)
    }

    const submit = evt => {
        evt.preventDefault()
        const newUser = {
            name: formValues.name,
            email: formValues.email,
            password: formValues.password,
            terms: formValues.terms,
        }
        axios.post(`https://reqres.in/api/users`, newUser)
          .then(res => {
            setUsers([...users, newUser])
            setFormValues(initialFormValues)   
            
          })
          .catch(err => {
            debugger
          })
       
    }


  return (
    <>
      <h1>howdy</h1>
      
      <Form 
        submit={submit}
        change={change}
        formValues={formValues}
        disabled={disabled}
        errors={errors}
        /> 
      <div>
        {users.map((user, index) => {
          return(
          <div key={index}>{user.name}</div>
          )
        })}
      </div>
    </>
  );
}

export default App;
