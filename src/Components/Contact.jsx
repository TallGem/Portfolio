import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
const Contact = () => {
  return (

    <div className='grid lg:grid-cols-2 mx-5 px-10 my-10' >
      <div className='bg-green-600'>

        <h3 className='text text-2xl font-semibold'>
          ⪼⪼⪼ Contact:
        </h3>



      </div>
      

      <div className='bg-purple-500' >
        <div>
          <h1>Any place in your app it's going to work at a flash speed?</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className='text-blue-600 bg-orange-500'>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting} className='bg-red-500 outline-green-200' >
                  Submit'testing 4825'
                </button>
              </Form>
            )}
          </Formik>
          
          
        </div>
      </div>

    </div>
  )
}

export default Contact