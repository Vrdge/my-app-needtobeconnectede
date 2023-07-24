import React from 'react';
import { Form, Field, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classes from './Forimk.module.css'
const DisplayingErrorMessagesSchema = Yup.object().shape({
    password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    // .matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,"8 Characters, Uppercase, Lowercase, Number and Special Case Character"), 
  email: Yup.string().email('Please Enter Valid email').required('Required'),
});
function showPass() {
  var x = document.getElementById("glg");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}




export const Sanasar = (props) => (
  <Formik 
    initialValues={{ email: '', password: '', rememberMe: '' }}
    validationSchema={DisplayingErrorMessagesSchema}
    onSubmit={(values,actions ) => {
      let {email, password, rememberMe} = values;
      setTimeout(() => {
        props.Login(email, password)
        actions.resetForm()
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (




      <div   className = {classes.glgl}>
        
        <form onSubmit={handleSubmit}>
          <div className={classes.innerWrapper}>
            <div className={classes.inputWrapper}>
              <input className={errors.email ?classes.inputerror:''} placeholder='email' type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email}
              />
              {errors.email ?<ErrorMessage name='email'/>:''}

              <input id='glg'className={errors.password ?classes.inputerror:''} placeholder='password' type="password" autoComplete='on' name="password" onChange={handleChange} onBlur={handleBlur} value={values.password}
              />
              {errors.password ?<ErrorMessage name='password'/>:''}
              

            </div>
            <div className={classes.button}>
              <button  type="submit" disabled={isSubmitting}>Submit</button>
            </div>
            <input placeholder='rememberMe' type="checkbox" name="rememberMe" onChange={handleChange} onBlur={handleBlur}
            />
            <input  type="checkbox" name="show Password" onClick={showPass} onChange={handleChange} onBlur={handleBlur}
            />
          </div>
        </form>
      </div>
    )}
  </Formik>
);

