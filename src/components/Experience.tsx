import { ExternalLinkIcon } from "./Icons/ExternalLinkIcon";

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
        className="aspect-square rounded-full w-12 border border-base-tertiary stroke-out box-content"
      />
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col items-start">
          <p className="text-xs text-text-secondary font-light">
            {beginDate} - {endDate}
          </p>
          <h3 className="text-base font-bold">{companyName}</h3>
          <p className="text-sm text-text-secondary">{roleTitle}</p>
          <ul className="list-['•_'] flex flex-col items-start">
            {descriptions.map((description) => {
              return <li className="font-normal text-sm">{description}</li>;
            })}
          </ul>
        </div>
        {externalLinks.map((externalLink) => {
          return (
            <a
              href={externalLink.link}
              className="flex px-2 py-1 bg-text-primary rounded-sm items-center gap-2 hover:bg-text-secondary"
            >
              <ExternalLinkIcon className="stroke-text-tertiary h-2.5" />
              <p className="text-text-tertiary text-xs font-medium">
                {externalLink.name}
              </p>
            </a>
          );
        })}
      </div>
    </article>
  );
};
