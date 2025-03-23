import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-light text-dark mt-5">
      <div className="container py-4">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Swiggy One</a></li>
              <li><a href="#">Swiggy Instamart</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Ride With Us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="col-md-3">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-3 text-center">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="mx-2"><FaFacebook size={24} /></a>
              <a href="#" className="mx-2"><FaInstagram size={24} /></a>
              <a href="#" className="mx-2"><FaTwitter size={24} /></a>
              <a href="#" className="mx-2"><FaLinkedin size={24} /></a>
              <a href="#" className="mx-2"><FaPinterest size={24} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-dark text-center text-white py-2">
        <p className="mb-0">For a better experience, download the app now</p>
        <div className="d-flex justify-content-center mt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            width="150"
            className="mx-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge.svg"
            alt="App Store"
            width="135"
            className="mx-2"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
