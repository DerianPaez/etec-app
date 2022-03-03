import React, { useState } from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'
import ContactInfoItem from './ContactInfoItem'
import { contactInfo } from '../../data/contactInfo.data'
import { theme } from '../../theme'

const ContactFormStyled = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "form"
    "info";
  gap: 30px;
  width: 100%;
  padding: 30px 20px;
  margin-top: 40px;
  box-shadow: 0px 4px 53px 0px #0000004D;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  .contact-title {
    font-size: 2.2em;
    text-align: center;
    grid-area: title;
    color: ${theme.colors.primary};

    @media (min-width: 768px) {
      font-size: 2.5em;
      text-align: left;
    }
  }

  .contact-form {
    display: grid;
    grid-template-areas:
      "name"
      "phone"
      "email"
      "message"
      "button";
    grid-area: form;
    gap: 20px;

    .input-name { grid-area: name; }
    .input-phone { grid-area: phone; }
    .input-email { grid-area: email; }
    .input-message { grid-area: message; }

    .contact-button {
      grid-area: button;
      margin-top: 10px;
    }

    @media (min-width: 768px) {
      grid-template-areas:
      "name phone"
      "email email"
      "message message"
      "button .";
    }
  }

  .contact-info {
    grid-area: info;
    display: grid;
    gap: 10px;

    .grid-left, .grid-right {
      display: grid;
      gap: 10px
    }

    .contact-info-grid {
      display: grid;
      grid-template-areas:
        "left"
        "right";
      gap: 10px;

      @media (min-width: 768px) {
        grid-template-areas:
          "left right";

        .item-right {
          flex-direction: row-reverse;
        }
      }

      @media (min-width: 1024px) {
        border-left: 1px solid ${theme.colors.stroke};
        padding-left: 30px;
        grid-template-areas:
          "left"
          "right";

        .item-right {
          flex-direction: row;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 45px 40px;
  }

  @media (min-width: 1024px) {
    padding: 45px 40px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "title title"
      "form info";
  }
`

const ContactForm = () => {
  const initialValues = { name: '', phone: '', email: '', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string().required('Obligatorio'),
    phone: Yup.string().min(9).max(10).required('Obligatorio'),
    email: Yup.string(),
    message: Yup.string().required('Obligatorio')
  })
  const [serverState, setServerState] = useState()
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  }
  const onSubmit = (values, actions) => {
    console.log(values)
    // axios({
    //   method: "POST",
    //   url: "https://formspree.io/f/xgedvqje",
    //   data: values
    // })
    //   .then(() => {
    //     actions.setSubmitting(false);
    //     actions.resetForm();
    //     handleServerResponse(true, "Thanks!");
    //   })
    //   .catch(error => {
    //     actions.setSubmitting(false);
    //     handleServerResponse(false, error.response.data.error);
    //   })
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <>
      <ContactFormStyled>
        <h1 className="contact-title">Contáctanos</h1>

        <form onSubmit={formik.handleSubmit} className="contact-form">
          <Input
            label="Nombre"
            id="name"
            name="name"
            type="text"
            className="input-name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
          <Input
            label="Celular"
            id="phone"
            name="phone"
            type="text"
            className="input-phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            error={formik.errors.phone}
            touched={formik.touched.phone}
          />
          <Input
            label="Correo electrónico"
            id="email"
            name="email"
            type="email"
            className="input-email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <Textarea
            label="Mensaje"
            id="message"
            name="message"
            type="text"
            className="input-message"
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
            touched={formik.touched.message}
          />
          <Button className="contact-button" type="submit" >Enviar</Button>
        </form>

        <div className="contact-info">
          <h3 className="contact-info-title">Info</h3>

          <div className="contact-info-grid">
            <div className="grid-left">
              <ContactInfoItem
                className="item-left"
                icon={contactInfo.location.icon}
                text={contactInfo.location.text}
                url={contactInfo.location.url}
              />
              <ContactInfoItem
                className="item-left"
                icon={contactInfo.phone.icon}
                text={contactInfo.phone.text}
                url={contactInfo.phone.url}
              />
            </div>
            <div className="grid-right">
              <ContactInfoItem
                className="item-right"
                icon={contactInfo.mail.icon}
                text={contactInfo.mail.text}
                url={contactInfo.mail.url}
              />
              <ContactInfoItem
                className="item-right"
                icon={contactInfo.horary.icon}
                text={contactInfo.horary.text}
              />
            </div>
          </div>
        </div>
      </ContactFormStyled>
    </>
  )
}

export default ContactForm
