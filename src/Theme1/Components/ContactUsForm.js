
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './components.scss'
import Mainbutton from './Buttons/Mainbutton';


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});


const ContactUsForm = () => {
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
     
      console.log(values);
    },
  });

  return (
    
    <div className='contactus--form'>
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div> : null}
      </div>

      <div>
        <label htmlFor="email">Email :</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div className='errors'>{formik.errors.email}</div> : null}
      </div>

      <div>
        <label htmlFor="password">Message :</label>
        <textarea rows={4} 
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        ></textarea>
        {formik.touched.password && formik.errors.password ? <div className='errors'>{formik.errors.password}</div> : null}
      </div>
<div className='form--button'>
<Mainbutton value='Submit' type='submit'/>
</div>
    
    </form>
    </div>
  );
};

export default ContactUsForm ;
