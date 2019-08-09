import React, { useEffect, useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

const LoginForm = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([{
        username: "Your name",
        password: "password"}])

    useEffect(()=>{
    console.log('infinite looping?')
    if(status){
        setUsers([...users, status])
    }
    }, [status])

    return(
    <div className="App">
    <Form className='ui form'>
        <Field className='field' type='text' name='username' placeholder='UserName'/>
        {touched.username && errors.username && <p>{errors.username}</p>}

        <Field className='field' type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
       
        <button className='ui button' type='submit'>Submit</button>
    </Form>

    <div class="ui link cards">
    {users.map(user => {
      return ( 
        <div class="card">
        <div class="content">
          <div class="header" key={user.id}>{user.name}</div>
          <div class="description" key={user.id}>{user.password}</div>
        </div>
        </div>
      )})}
      </div>
    </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .required('Name is required'),
        password: Yup.string()
        .min(6, 'Password must be 6 characters or longer')
        .required('Password is required'),
    }),


    handleSubmit(values, { resetForm, setErrors, setSubmitting, setStatus }) {
          axios
            .post("http://localhost:5000/api/register", values)
            .then(res => {
              console.log(res);
              resetForm();
              setSubmitting(false);
              setStatus(res.data);
            })
            .catch(err => {
              console.log(err);
              setSubmitting(false);
            });
      }
})(LoginForm);

export default FormikLoginForm;