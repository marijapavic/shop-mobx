import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <button>About us</button>
        <button>Shipping</button>
        <button>FAQ</button>
        <button>Contact</button>
      </div>
      <div className="footer-social">
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaXTwitter />
        </button>
      </div>
    </div>
  );
};

export default Footer;
