import React, { useState } from 'react';

const UserForm = (props) => {
    const [personInfo, setPersonInfo] = useState ({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handlePersonInfo = e => {
        setPersonInfo({...personInfo, [e.target.name] : e.target.value})
    }

    const createPersonInfo = e => {
        e.preventDefault()
    }
    
    return (
        <div>
            <form onSubmit = {createPersonInfo}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" onChange={handlePersonInfo}></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handlePersonInfo}></input>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handlePersonInfo}></input>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handlePersonInfo}></input>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handlePersonInfo}></input>
            </form>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {personInfo.firstName}</p>
                <p>Last Name: {personInfo.lastName}</p>
                <p>Email: {personInfo.email}</p>
                <p>Password: {personInfo.password}</p>
                <p>Confirm Password: {personInfo.confirmPassword}</p>
            </div>
        </div>
    )
}
export default UserForm
