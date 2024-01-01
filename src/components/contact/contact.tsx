import styles from "@/styles/contact.module.css";
import Title from "../core/title";
import { Col, Row } from "react-bootstrap";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Link from "next/link";
import Button from "../core/button";
import React, { FormEvent, useState } from "react";
import data from "@/config/data.json";

export default function Contact() {
  const { phone, emailID, address, addressLink } = data.contact;
  const [inputs, setInput] = useState({
    name: "",
    subject: "",
    email: "",
    content: "",
    error: "",
    success: false,
    loading: false,
  });
  const { name, subject, email, content, error, success, loading } = inputs;

  const handleChange =
    (name: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value;
      setInput({
        ...inputs,
        [name]: value,
        success: false,
        loading: false,
        error: "",
      });
    };
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form: HTMLFormElement = document.getElementById(
      "myForm"
    ) as HTMLFormElement;
    form.checkValidity();
    console.log(inputs);
    event.preventDefault();
    setInput({ ...inputs, error: "", loading: true });
    if (name === "") {
      setInput({
        ...inputs,
        error:
          "Whoops! Looks like you forgot to tell us your name. It's a required field, and we'd love to know what to call you!",
        loading: false,
      });
    } else if (email === "") {
      setInput({
        ...inputs,
        error:
          "Uh-oh! It looks like you missed something. Please enter your email ID; it's required for us to stay in touch.",
        loading: false,
      });
    } else if (subject === "") {
      setInput({
        ...inputs,
        error:
          "Oops! It seems you forgot to add a subject. Please provide a subject for your message.",
        loading: false,
      });
    } else if (content.length < 50) {
      const remainingCharacters = 50 - content.length;
      const errorMessage = `Your message is too short. Please add at least ${remainingCharacters} more character${
        remainingCharacters === 1 ? "" : "s"
      }.`;
      setInput({
        ...inputs,
        error: errorMessage,
        loading: false,
      });
    } else if (!isValidEmail(email)) {
      setInput({
        ...inputs,
        error:
          "Oops! The email ID you entered seems to be improper. Please try again.",
        loading: false,
      });
    } else {
      fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message: content }),
      }).then((data) => {
        if (data.status === 500) {
          const error = data.statusText;
          setInput({
            ...inputs,
            error: error,
            success: false,
            loading: false,
          });
        } else {
          setInput({
            ...inputs,
            error: "",
            success: true,
            name: "",
            email: "",
            subject: "",
            content: "",
            loading: false,
          });
        }
      });
    }
  };

  function isValidEmail(email: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailRegex);
  }

  const errorMessage = () => (
    <div className={styles.errorMessage}>
      <h6>{error}</h6>
    </div>
  );

  const successMessage = () => (
    <div className={styles.successMessage}>
      <h6>
        Your message has been sent successfully. We will get back to you as soon
        as possible. Thank you!
      </h6>
    </div>
  );
  return (
    <div className="containerMain">
      <Title title="Contact Me" />
      <Row>
        <Col md={6}>
          <div id="contact-form">
            <form onSubmit={onSubmit} id="myForm">
              <div className={styles.formField}>
                <label htmlFor="name">What should I call you? *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  minLength={3}
                  required={true}
                  placeholder="Please enter your name"
                  onChange={handleChange("name")}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="email">What is your email address? *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  required={true}
                  placeholder="Please enter a valid email address"
                  onChange={handleChange("email")}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="subject">What is this enquiry about? *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  minLength={3}
                  required={true}
                  placeholder="Please enter the enquiry subject"
                  onChange={handleChange("subject")}
                />
              </div>
              <div className={styles.formField}>
                <label htmlFor="message">Can you please elaborate? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={content}
                  minLength={50}
                  required={true}
                  placeholder="Please enter your message (50 characters minimum)"
                  onChange={handleChange("content")}
                  disabled={success || loading}
                />
              </div>
              {error && errorMessage()}
              {success && successMessage()}
              <div>
                <Button
                  text={
                    success
                      ? "Sent Successfully"
                      : loading
                      ? "Sending..."
                      : "Send Message"
                  }
                />
              </div>
            </form>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.contactInfoBlock}>
            <FiPhone className={styles.contactInfoBlockIcon} />
            <div className={styles.containerInfoBlockText}>
              <p>
                <strong>Phone</strong> <br />{" "}
                <Link href={"tel:" + phone}>{phone}</Link>
              </p>
            </div>
          </div>
          <div className={styles.contactInfoBlock}>
            <FiMail className={styles.contactInfoBlockIcon} />
            <div className={styles.containerInfoBlockText}>
              <p>
                <strong>Email</strong> <br />{" "}
                <Link href={"mailto:" + emailID}>{emailID}</Link>
              </p>
            </div>
          </div>
          <div className={styles.contactInfoBlock}>
            <FiMapPin className={styles.contactInfoBlockIcon} />
            <div className={styles.containerInfoBlockText}>
              <p>
                <strong>Address</strong> <br />
                <Link href={addressLink}>{address}</Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
