import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('API ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        console.log('Successfully subscribed!');
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <div className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Newsletter;
