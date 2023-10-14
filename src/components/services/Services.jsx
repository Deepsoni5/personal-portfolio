import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What i offer?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Showcasing user-centered design expertise.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Our design process prioritizes user needs and feedback.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our clients have experienced tangible business growth through
                our UI/UX design.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>We leverage cutting-edge design tools and technologies</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                With extensive experience across various industries, we
                understand the unique challenges
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Frontend Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our frontend development services encompass creating responsive
                websites
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Explore our collection of successful frontend development
                projects,
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>We provide clean, efficience and cross-platform code</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We harness a wide array of cutting-edge technologies and
                frameworks,
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                We understand the unique demands and nuances of each industry.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Reach out to us today to discuss your project requirements and
                let us create a dynamic, responsive.
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our backend development team is dedicated to building robust and
                scalable digital infrastructures.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Explore our portfolio of successful backend development
                projects.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our Expertise development process emphasizes clean, maintainable
                code.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Our commitment to innovation drives us to explore the latest
                trends and advancements in backend development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Looking to build a powerful and scalable backend infrastructure
                for your digital applications? Contact us today to discuss your
                project.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
