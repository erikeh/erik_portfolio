import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';
import screen from '../../media/mediaQueries';
import { SubHeader } from '../shared/components';

const ContactContainerCenter = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  flex: 0 1 600px;
`;

const CTAMessage = styled.h3`
  color: #f1faee;
  padding-bottom: 1.4em;
`;

const ContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  /* width: 30em; */
`;

const ContactField = styled.input`
  background-color: #21212c;
  color: #f1faee;
  border: none;
  height: 2.5em;
  margin-bottom: 3px;
  padding: 1.4em 1em;
`;

const ContactMessageField = styled.textarea`
  background-color: #21212c;
  color: #f1faee;
  border: none;
  margin: 0;
  width: 40em;
  height: 10em;
  padding: 1em 1em;
`;

const ContactButton = styled(motion.button)`
  cursor: pointer;
  font-size: 15px;
  font-weight: 100;
  background-color: #005f73;
  color: #f1faee;
  border-radius: 4px;
  border: none;
  width: 170px;
  height: 45px;
  margin-top: 50px;
  padding: 8px;
  ${screen.small`
    margin-left: 0;
    width: 40%;
    font-size: 0.8em;
    height: 38px;
    margin-top: 40px;
  `}
`;

interface ContactProps {}

function Contact({}: ContactProps): ReactElement {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmitForm = async () => {
    try {
      await axios.post('/messageToEmail', {
        from: email,
        name,
        text: message,
      });
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <ContactContainerCenter>
      <SubHeader subHeader={'Contact'} color={'#f1faee'} />
      <CTAMessage>
        Have any questions, or would be interested in my services?
      </CTAMessage>
      <ContactForm>
        <ContactField
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ContactField
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactMessageField
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </ContactForm>

      <ContactButton
        transition={{
          duration: 0.15,
        }}
        whileHover={{
          backgroundColor: '#0c8ea9',
          transition: {
            duration: 0.15,
            type: 'tween',
          },
        }}
        onClick={handleSubmitForm}
      >
        Submit
      </ContactButton>
    </ContactContainerCenter>
  );
}

export default Contact;
