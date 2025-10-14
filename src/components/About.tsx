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
    <section className="flex pb-[40px] pt-[82px] justify-center gap-[40px] text-dark-primary-text font-roboto">
      <div className="flex flex-col gap-[40px]">
        <div className="flex flex-col gap-[5px]">
          <div>
            <h1 className="font-bold text-[36px] m-[0px] leading-[42px]">
              Anthony Lynn
            </h1>
            <p className="font-bold text-[20px] leading-[23px]">
              Software Engineer | Game Developer
            </p>
          </div>
          <div className="flex gap-[5px]">
            <img src={LocationIcon} alt="Location Icon" />
            <p className="text-dark-secondary-text font-regular text-[14px] leading-[16px]">
              USA, Virginia
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="flex border border-dark-tertiary-background px-[10px] py-[5px] rounded-[5px] gap-[10px] text-[12px] font-medium">
            <p>Resume</p>
            <img src={FileDownloadIcon} alt="File Download Icon" />
          </button>
          <a href="">
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
      <img
        src={ProfilePicture}
        alt="Profile Picture"
        className="rounded-[8px]"
      />
    </section>
  );
};
