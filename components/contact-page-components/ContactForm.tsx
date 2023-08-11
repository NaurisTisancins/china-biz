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

  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onFieldChange = (event: any) => {
    let value = event.target.value;
    if (event.target.type === 'checkbox') {
      value = event.target.checked;
    }

    setState({ ...state, [event.target.id]: value });
  };

  function sendEmail(form: HTMLFormElement) {
    console.log(process.env.EMAIL_TEMPLATE_ID);
    return (
      emailjs
        .sendForm(
          process.env.EMAIL_SERVICE_ID as string,
          process.env.EMAIL_TEMPLATE_ID as string,

          form,
          process.env.EMAIL_PUBLIC_KEY
        )
        .then((response) =>
          response.status === 200
            ? setSuccess(true)
            : response.status === 400 && setEmailError(true)
        ),
      (error: { text: any }) => console.log(error)
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
        <div className="input-field-container flex flex-col">
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
        </div>
        <div className="input-field-container flex flex-col">
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
        </div>
        <div className="input-field-container flex flex-col">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            value={state.message}
            id="message"
            className="message_box"
            onChange={onFieldChange}
          ></textarea>
        </div>
        <SubmitButton text="Send" />
        {success === true ? (
          <div className="success-message border-2 rounded-lg border-green-200 bg-green-50 text-green-500">
            Email sent successfully
          </div>
        ) : (
          emailError === true && (
            <div className="success-message border-2 rounded-lg border-red-200 bg-red-50 text-red-500">
              Email not sent Error
            </div>
          )
        )}
      </form>
    </div>
  );
}

export default ContactForm;
