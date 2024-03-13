import React from "react";

export const Footer = () => (
  <footer
    className="footer mt-auto py-3 text-center"
    style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      height: "60px",
      backgroundColor: "transparent",
      color: "white",
      textAlign: "center",
      lineHeight: "60px",
    }}
  >
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
    </p>
  </footer>
);
