import ExternalLinkIcon from "../images/ExternalLinkIcon.svg";

import React from "react";

interface ExperienceProps {
  institutionLogo: string;
  beginDate: string;
  endDate: string;
  companyName: string;
  roleTitle: string;
  descriptions: string[];
  externalLinks: { link: string; name: string }[];
}

export const Experience: React.FC<ExperienceProps> = ({
  institutionLogo,
  beginDate,
  endDate,
  companyName,
  roleTitle,
  descriptions,
  externalLinks,
}) => {
  return (
    <article className="flex gap-4 items-start">
      <img
        src={institutionLogo}
        alt="Institution Logo"
        className="aspect-square rounded-full w-[48px]"
      />
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col items-start">
          <p className="text-xs text-dark-secondary-text font-light">
            {beginDate} - {endDate}
          </p>
          <h3 className="text-base text-dark-primary-text font-bold">
            {companyName}
          </h3>
          <p className="text-sm text-dark-secondary-text font-normal">
            {roleTitle}
          </p>
          <ul className="list-['•_'] list-inside flex flex-col items-start">
            {descriptions.map((description) => {
              return <li className="font-normal text-sm">{description}</li>;
            })}
          </ul>
        </div>
        {externalLinks.map((externalLink) => {
          return (
            <a
              href={externalLink.link}
              className="flex px-2 py-1 bg-white rounded-sm items-center gap-2"
            >
              <img
                src={ExternalLinkIcon}
                alt="External Link Icon"
                className="fill-black"
              />
              <p className="text-black text-xs font-medium">
                {externalLink.name}
              </p>
            </a>
          );
        })}
      </div>
    </article>
  );
};
