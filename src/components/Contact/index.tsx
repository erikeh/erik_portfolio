import React, { ReactElement, useState } from 'react';
import axios from 'axios';
import { Scene } from 'react-scrollmagic';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../shared/components';
import * as s from './styles';

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

interface InputData {
  Name: string;
  Email: string;
  Message: string;
}

function Contact({ contactRef }: ContactProps): ReactElement {
  const [confirm, setConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (inputData: InputData) => {
    try {
      setIsSubmitting(true);
      const { Name, Email, Message } = inputData;
      await axios.post('/messageToEmail', {
        from: Email,
        name: Name,
        text: Message,
      });
      reset();
      showSubmitConfirmationText();
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const showSubmitConfirmationText = async () => {
    setConfirm(true);
    await new Promise((r) => setTimeout(r, 7000));
    setConfirm(false);
  };

  return (
    <s.AlignCenterWrapper ref={contactRef}>
      <Scene classToggle="show" triggerHook={0.8} reverse={false}>
        <s.ContactContainerCenter>
          <SectionHeader name={'CONTACT'} color={'#f1faee'} fontWeight={200} />
          <s.CTAMessage>
            Have any questions, or would be interested in my services?
          </s.CTAMessage>
          <s.ContactForm onSubmit={handleSubmit(handleSubmitForm)}>
            <s.ContactField
              placeholder="Name"
              {...register('Name', {
                required: {
                  value: true,
                  message: '* Please fill out this field',
                },
                maxLength: {
                  value: 80,
                  message: '* Name cannot exceed 80 characters',
                },
              })}
            />
            {errors.Name && (
              <s.ValidationError>{errors.Name.message}</s.ValidationError>
            )}
            <s.ContactField
              placeholder="Enter email"
              {...register('Email', {
                required: {
                  value: true,
                  message: '* Please fill out this field',
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: '* Please fill out with valid email',
                },
              })}
            />
            {errors.Email && (
              <s.ValidationError>{errors.Email.message}</s.ValidationError>
            )}
            <s.ContactMessageField
              placeholder="Your Message"
              {...register('Message', {
                required: {
                  value: true,
                  message:
                    '* Please fill out this field. Even a short message is okay!',
                },
              })}
            />
            {errors.Message && (
              <s.ValidationError>{errors.Message.message}</s.ValidationError>
            )}
            <AnimatePresence>
              {confirm && (
                <s.ConfirmationMessageWrapper>
                  <s.SubmitConfirmationMessage
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    Your message has been submitted. I will get back to you as
                    soon as possible!
                  </s.SubmitConfirmationMessage>
                </s.ConfirmationMessageWrapper>
              )}
            </AnimatePresence>
            <s.ContactButton
              type="submit"
              value={isSubmitting ? 'Submitting...' : 'Submit'}
              transition={{
                duration: 0.15,
              }}
              disabled={isSubmitting}
              whileHover={{
                backgroundColor: '#0c8ea9',
                transition: {
                  duration: 0.15,
                  type: 'tween',
                },
              }}
            />
          </s.ContactForm>
        </s.ContactContainerCenter>
      </Scene>
    </s.AlignCenterWrapper>
  );
}

export default Contact;
