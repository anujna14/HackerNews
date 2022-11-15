import React from "react";
// import classes from "./Footer.module.css";
import { FooterConstants } from "../../Constants/string.constant";
import Search from "./Search";
function Footer() {
  return (
    <footer>
      <p>
        <a href="https://news.ycombinator.com/newsguidelines.html" target="_blank" rel="noreferrer">
          {FooterConstants.Guidelines}
        </a>
        <span>|</span>
        <a href="https://news.ycombinator.com/newsfaq.html" target="_blank" rel="noreferrer">
          {FooterConstants.FAQ}
        </a>
        <span>|</span>{" "}
        <a href="https://news.ycombinator.com/lists" target="_blank" rel="noreferrer">
          {FooterConstants.Lists}
        </a>
        <span>|</span>{" "}
        <a href="https://github.com/HackerNews/API" target="_blank" rel="noreferrer">
          {FooterConstants.API}
        </a>
        <span>|</span>{" "}
        <a href="https://news.ycombinator.com/security.html" target="_blank" rel="noreferrer">
          {FooterConstants.Security}
        </a>
        <span>|</span>{" "}
        <a href="http://www.ycombinator.com/legal/" target="_blank" rel="noreferrer">
          {" "}
          {FooterConstants.Legal}
        </a>
        <span>|</span>{" "}
        <a href="http://www.ycombinator.com/apply/" target="_blank" rel="noreferrer">
          {" "}
          {FooterConstants.ApplyToYC}
        </a>
        <span>|</span>{" "}
        <a href="mailto:hn@ycombinator.com" target="_blank" rel="noreferrer">
          {FooterConstants.Contact}
        </a>
      </p>
      <div>
        <Search />
      </div>
    </footer>
  );
}

export default Footer;
