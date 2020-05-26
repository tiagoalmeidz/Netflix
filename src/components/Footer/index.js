import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Footer() {
  return (
    <div>
      <span>
        Questions? <Link>Call 1-877-742-1335</Link>
      </span>
      <div className="footer-columns">
        <ul>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Investor Relations</Link>
          </li>
          <li>
            <Link>Ways to Watch</Link>
          </li>
          <li>
            <Link>Corporate Information</Link>
          </li>
          <li>
            <Link>Netflix Originals</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
