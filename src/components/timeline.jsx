import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Analyst/Software Developer at Capgemini India
                          Pvt Ltd <span>July 2018-present</span>
                        </h2>
                        <p>
                          I am working as Software developer in Capgemini. I
                          have worked on couple of projects in this company.
                        </p>
                        <p>
                          <span>DSG :</span>It is E-commerce website. My major
                          part of the work has been into designing part and
                          enhancing sql queries. Participated in project
                          automation.
                        </p>
                        <p>
                          <span>General Electronics :</span>It is nuclear plant
                          related website. My responsibilities are to make
                          validations on JavaScript/JQuery and C#. Create and
                          provide deployment packages on GitHub
                          {/* I recently have joined the Juniper Networs as a
                          Software Developer-Intern in the DevOps team. My major
                          part of the work has been into the field of creating
                          sustainable and flexible CI/CD (Continuous Integration
                          & Continuous Development) pipelines which enables
                          developers at Juniper to do rapid development. I am
                          also exploring the role of container technology like
                          Docker and container-orchrastation technologies like
                          K8s, Swarm to create industry standard production
                          environments. */}
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Junior Software Developer at Konnect Consultancy
                          <span>Oct 2016- April 2018</span>
                        </h2>
                        <p>
                          This was my first job as a developer. Worked for UK
                          based CRM website where I have majorly worked on
                          design(UI) part. Independently worked on ASP.NET
                          modules.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education Details</h2>
                        <p>
                          I have completed my post graduation in Information
                          Technology from Mumbai University and passed with
                          second class. My school and higher secondary eduction
                          in science stream which I completed from my native
                          place.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
