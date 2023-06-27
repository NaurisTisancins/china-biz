import { FormEvent, useState } from 'react';
import SubmitButton from '../buttons/SubmitButton';
import emailjs from 'emailjs-com';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

function ContactForm() {
  const [state, setState] = useState({
    email: '',
    name: '',
    message: '',
  });

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setState({ ...state, [event.target.id]: value });
  };

  function sendEmail(form: HTMLFormElement) {
    emailjs.sendForm(
      process.env.EMAIL_SERVICE_ID as string,
      process.env.EMAIL_TEMPLATE_ID as string,
      form,
      process.env.EMAIL_PUBLIC_KEY
    );
  }

  function resetInputs() {
    setState({ email: '', name: '', message: '' });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendEmail(e.target as HTMLFormElement);
    resetInputs();
  }

  return (
    <div className="contact-us-container">
      <h1 className="secondary-title-1">Contact Us</h1>
      <form className="contact-form" onSubmit={onSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email_from"
          value={state.email}
          id="email"
          className="email_from"
          placeholder="email@example.com"
          onChange={onFieldChange}
        />
        <label htmlFor="email">Full Name:</label>
        <input
          type="text"
          name="name_from"
          value={state.name}
          id="name"
          className="name_from"
          placeholder="John Doe"
          onChange={onFieldChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          value={state.message}
          id="message"
          className="message_box"
          onChange={onFieldChange}
        ></textarea>
        <SubmitButton text="Send" />
      </form>
    </div>
  );
}

export default ContactForm;
