import React from "react";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import styles from '../../styles/Email.module.css'

const SERVICE_ID = "service_1ta3avf";
const TEMPLATE_ID = "template_w2e1gwi";
const USER_ID = "4LJqLX-93A0k_7HtI";

export const Email = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado exitosamente",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Error, intentelo de nuevo...",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
          className={styles.form}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </div>
  );
};

