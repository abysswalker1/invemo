'use client';
import {FC} from 'react';
import Section from '../../ui/section/Section';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {object, string, number} from 'yup';

import './contact.css';

const validationSchema = object().shape({
  username: string().required(),
  email: string().email().required(),
  phone: number().required(),
  textarea: string().required(),
});

const Contact: FC = () => {
  return (
    <Section title='Contact' id='contact'>
      <div className="contact">
        <Formik
          initialValues={{ username: '', email: '', phone: '', textarea: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form className="contact-form">
            <div className='contact-form__grid'>
              <Field type="text" id="username" name="username" placeholder='Username' className='contact-form__field'/>
            
              <Field type="email" id="email" name="email" placeholder='Email' className='contact-form__field'/>
            
              <Field type="text" id="phone" name="phone" placeholder='Phone' className='contact-form__field'/>
            
              <Field as="textarea" id="textarea" name="textarea" placeholder='Message' className='contact-form__field'/>
            </div>
            <div className="contact-form__bottom">
              <button className='contact-form__submit btn' type="submit">Send</button>
              <div className="contact-form__policy">By clicking on the «Send» button, you agree with the privacy and cookie policy</div>
            </div>
          </Form>
        </Formik>
      </div>
    </Section>
  );
};

export default Contact;