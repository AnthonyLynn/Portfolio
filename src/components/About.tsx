import LocationIcon from "../images/LocationIcon.svg";
import FileDownloadIcon from "../images/FileDownloadIcon.svg";
import LinkedInIcon from "../images/LinkedInIcon.svg";
import GithubIcon from "../images/GithubIcon.svg";
import MailIcon from "../images/MailIcon.svg";
import ProfilePicture from "../images/ProfilePicture.png";

import React from "react";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <section className="flex py-12 justify-center gap-10">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-1">
          <div>
            <h1 className="font-bold text-4xl">Anthony Lynn</h1>
            <p className="font-bold text-lg">
              Software Engineer | Game Developer
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/Shrt4vb5u3qmSd7X9"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <img src={LocationIcon} alt="Location Icon" />
            <p className="text-dark-secondary-text font-regular text-sm">
              USA, Virginia
            </p>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href=""
            download="AnthonyLynnResume"
            className="flex border border-dark-tertiary-background px-2 py-1 rounded-sm
           gap-2"
          >
            <p className="text-xs font-normal leading-none">Resume</p>
            <img
              src={FileDownloadIcon}
              alt="File Download Icon"
              className="h-[12px]"
            />
          </a>
          <a href="https://www.linkedin.com/in/anthony-w-lynn" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="">
            <img src={GithubIcon} alt="Github Icon" />
          </a>
          <a href="">
            <img src={MailIcon} alt="Mail Icon" />
          </a>
        </div>
      </div>
      <img src={ProfilePicture} alt="Profile Picture" className="rounded-md" />
    </section>
  );
};
