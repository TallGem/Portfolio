import React from "react";
import { TypeAnimation } from "react-type-animation";
import worker from "../Images/worker2.png";
import { Link } from "react-scroll";

const About = () => {
  const hrStyle = {
    backgroundColor: 'black',
    height: '1px',
    border: 'none',


  };


  return (
    <div style={{ backgroundColor: "#c3eefa" }}>
      <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-5 mb-10 pt-24">
        <div className="lg:py-10 lg:px-10  ">
          <h1 className="text-4xl">
            Hi, I'm{" "}
            <span className="font-semibold" style={{ color: "#0e5ddd" }}>
              Abdul-Afees
            </span>{" "},
            <br /> <span> a </span>
            <span className="font-semibold" style={{ color: "#0e5ddd" }}>
              Fullstack Developer.
            </span>
          </h1>

          <h1 className="text-3xl mt-2 ">
            An expert in{" "}
            <TypeAnimation
              sequence={[
                "Javasript",
                500,
                "React",
                500,
                "CSS",
                500,
                "Node JS",
                500,
                "HTML",
                500,
                "Firebase",
                500,
                "Tailwind Css",
                500,
                "Express",
                500,
                "Mongo DB",
                500,
              
                "Bootstrap Css",
                500,
              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>

          <h1 className="text-2xl mt-10 font-semibold ">⪼⪼⪼ About Me:</h1>
          <p className="text-base font-medium">
            I am a highly motivated and detail-oriented fullstack developer with
            years of experience in developing responsive websites and
            applications. I've honed my skills in HTML, CSS, JavaScript, and
            various frameworks like React and Angular, allowing me to bring
            ideas to life in the digital realm.
          </p>

          <p className="text-base font-medium mt-2 mb-8">
            Beyond coding, I'm a firm believer in continuous learning. I stay
            up-to-date with the latest trends and technologies in web
            development to ensure that my work remains at the forefront of
            industry standards.
          </p>

          <span className="">
            <Link
              className="p-3 rounded me-5 font-semibold "
              style={{ backgroundColor: "#f9c5bd" }}
            >
              See my Project
            </Link>
            <a
              href=""
              className="p-3 rounded font-semibold"
              style={{ backgroundColor: "#0e5ddd" }}
            >
              Downlaod CV
            </a>
          </span>
        </div>

        <div>
          <img src={worker} className="img-fluid" width={500} />
        </div>
      </section>
      <hr style={hrStyle} />
    </div>
  );
};

export default About;
