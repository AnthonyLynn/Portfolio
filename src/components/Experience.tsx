import { ExternalLinkIcon } from "./Icons/ExternalLinkIcon";
import { uuidv4 } from "../lib/utils/idGenerator";

import React from "react";
import Image from "next/image";

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
    <li className="relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 sm:items-start pt-8 sm:p-0 border-t-base-tertiary border-t first:border-t-0 sm:border-t-0 box-border">
      <Image
        src={institutionLogo}
        alt="Institution Logo"
        width="48"
        height="48"
        className="absolute -top-6.5 sm:static aspect-square rounded-full w-12 border border-base-tertiary stroke-out box-content"
      />
      <div className="flex flex-col gap-2 items-center sm:items-start">
        <div className="flex flex-col gap-2 sm:gap-0 items-center sm:items-start">
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-xs text-text-secondary font-light">
              {beginDate} - {endDate}
            </p>
            <h3 className="text-base font-bold">{companyName}</h3>
            <p className="text-sm text-text-secondary">{roleTitle}</p>
          </div>
          <ul className="list-none sm:list-['•_'] flex flex-col gap-1 sm:gap-0 items-center sm:items-start px-2">
            {descriptions.map((description) => {
              return (
                <li
                  className="font-normal text-sm text-center sm:text-left"
                  key={uuidv4()}
                >
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
        {externalLinks.map((externalLink) => {
          return (
            <a
              href={externalLink.link}
              className="flex px-2 py-1 bg-text-primary rounded-sm items-center gap-2 hover:bg-text-secondary"
              key={uuidv4()}
            >
              <ExternalLinkIcon className="stroke-text-tertiary h-2.5" />
              <p className="text-text-tertiary text-xs font-medium">
                {externalLink.name}
              </p>
            </a>
          );
        })}
      </div>
    </li>
  );
};
