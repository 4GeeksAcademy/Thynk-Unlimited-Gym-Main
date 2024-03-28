import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://organic-xylophone-9r75wqpjvqj27p56-3001.app.github.dev', {
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
    <div className="newsletter d-flex flex-column">
      <h4>Subscribe to Our Newsletter</h4>
      <form onSubmit={handleSubmit}>
        <input className="m"
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleChange}
          required
  
        />
        <button className="btn btn-outline-warning mr-0" type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
