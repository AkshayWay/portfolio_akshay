import React, { Component } from "react";

export default class Sidebar extends Component {
  constructor() {
    super();

    var today = new Date(),
      Currentdate = today.getFullYear();

    this.state = {
      date: Currentdate
    };
  }
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside
            id="colorlib-aside"
            className="border js-fullheight"
            style={{ height: "auto" }}
          >
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage: "url(images/Akshay_Wayangankar_logo.jpg)"
                }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Akshay Wayangankar</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> hi@akshaywayangankar.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  {/* <li>
                    <a href="#" data-nav-section="projects">
                      Projects
                    </a>
                  </li> */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/akshay.waingankar.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://twitter.com/ddbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/akshay_wayangankar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/akshay-wayangankar-527bb7b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.quora.com/profile/Akshay-Wayangankar-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-quora" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  &copy;
                  {this.state.date} All rights reserved
                  <br /> Made with <i class="icon-heart" aria-hidden="true"></i>
                  . Thanks{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>{" "}
                  for inspiration
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
