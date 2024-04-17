import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <>
      <section className="" style={{ backgroundColor: "#c3eefa" }}>
        <div className="lg:px-10 lg:py-10 grid mx-5">
          <h1 className="text-4xl">
            Hi, I'm <span className="font-bold">Abdul-Afees</span>, <br />
            <span>a Fullstack Developer.</span>
          </h1>

          <h1 className="text-3xl mt-2">
            An expert in{" "}
            <TypeAnimation
              sequence={[
                "Javasript",500,

                "React",500,

                "CSS",500,

                "Node JS",500,

                "HTML",500,

                "Firebase", 500,

                "Express",500,

                "Mongo DB", 500,

                "Tailwind Css",500,

                "Bootstrap Css",500,
              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>
        </div>
      </section>
    </>
  );
};

export default About;
