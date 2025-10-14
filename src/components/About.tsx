import LocationIcon from "../images/LocationIcon.svg";

import React from "react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex px-[40px] justify-center gap-[40px]">
      <div>
        <div>
          <div>
            <h1>Anthony Lynn</h1>
            <p>Software Engineer | Game Developer</p>
          </div>
          <div>
            <img src={LocationIcon} alt="LocationIcon" />
            <p>USA, Virginia</p>
          </div>
        </div>
        <div>
          <button>
            <p>Resume</p>
            <img src="" alt="" />
          </button>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <img src="" alt="" />
    </section>
  );
};
