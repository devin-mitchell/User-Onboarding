import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: lightblue;
    color: black;
    display: flex;
    justify-content: space-around;
    height: 30vh;
    
    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
    }

    .err {
        font-size: .8rem;
        opacity: .5;
        color: red;
    }
    
`

export default function Form({formValues, submit, change, disabled, errors}) {
    
    return (
        <>
        <Container>
            <form onSubmit={submit}>
            <div class='err' >{errors.name}</div>
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={change}
                    />
                </label>
                <div class='err' >{errors.email}</div>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={change}
                    />
                </label>
                <div class='err' >{errors.password}</div>
                <label>Password
                    <input 
                        type='text'
                        name='password'
                        value={formValues.password}
                        onChange={change}
                    />
                </label>
                <div class='err' >{errors.terms}</div>
                <label>Terms of Service
                    <input 
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={change}
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </form>
        </Container>
        
      
      </>
    )
}
