import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <h6>About</h6>
            <p className="tj">
            Coin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of coins is carried out collectively by the network. Coin is open-source; its design is public, nobody owns or controls coin and everyone can take part. Through many of its unique properties, coin allows exciting uses that could not be covered by any previous payment system.
            </p>
          </div>

          <div className="col-xs-6 col-md-2">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/blockchain">Blockchain</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/bud.jak.5/"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="a">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://www.instagram.com/jakcnbn/"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://steamcommunity.com/profiles/76561198437392317/"
                >
                  <i className="fa fa-steam"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
