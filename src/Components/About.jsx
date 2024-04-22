import React from "react";
import { TypeAnimation } from "react-type-animation";
import worker from "../Images/worker.png"

const About = () => {
  return (
    <>
      <section className="grid grid-cols-2" style={{ backgroundColor: "#c3eefa" }}>
        <div className="lg:py-10 lg:px-10">
          <h1 className="text-4xl">
            Hi, I'm <span className="font-semibold">Abdul-Afees</span>   <br/> <span> a </span>
            <span className="font-semibold">Fullstack Developer.</span>
          </h1>

          <h1 className="text-3xl mt-2 ">
            An expert in{" "}
            <TypeAnimation
              sequence={[

                "Javasript", 500,
                "React", 500,
                "CSS", 500,
                "Node JS", 500,
                "HTML", 500,
                "Firebase", 500,
                "Express", 500,
                "Mongo DB", 500,
                "Tailwind Css", 500,
                "Bootstrap Css", 500,

              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>

          <h1 className="text-2xl mt- font-semibold ">
            ⨀⨀⨀ About Me:
          </h1>
           <p>

           </p>
        </div>

        <div>
          <img src ={worker} width={500} />
        </div>
      </section>
    </>
  );
};

export default About;
