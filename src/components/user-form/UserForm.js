import React from 'react'
import {Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  website: Yup.string()
  .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Invalid website'
  )
  .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const  UserForm=({user})=> {

  const onSubmit=()=>{

  };

  
const initialValues={
  name: user.name, 
  website: user.website,
  email: user.email, 
  phone: user.phone
}
  return (
    <Formik enableReinitialize initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
   {(formik)=>{
  
  return (
    <Form>
    <div>
        <Field
          v
          component={TextField}
          name="name"
          type="text"
          label="Name"
        />
      
 
        </div>
      <div>
        <Field
          component={TextField}
          name="website"
          type="text"
          label="Website"
        />
        </div>
      <div>
       <Field
          component={TextField}
          name="email"
          type="text"
          label="Email"
        />
        {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.name}</div>
       ) : null}
        </div>
      <div>
      <Field
          component={TextField}
          name="phone"
          type="text"
          label="Phone"
        />
        </div>


        
        <div>
        <button type="submit">כניסה</button>
        </div>

   </Form>
  )


   }}
 
  
   </Formik>
  );
}

export default UserForm;
