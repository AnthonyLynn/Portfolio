import { type IconProps } from "./Icon";

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 12 12" className={`fill-none ${className}`}>
      <path
        d="M4.33347 1.66667H3.13347C2.38673 1.66667 2.01308 1.66667 1.72787 1.81199C1.47698 1.93982 1.27315 2.14365 1.14533 2.39453C1 2.67975 1 3.05339 1 3.80013V8.8668C1 9.61353 1 9.98673 1.14533 10.2719C1.27315 10.5228 1.47698 10.727 1.72787 10.8548C2.0128 11 2.38599 11 3.13127 11H8.20207C8.94733 11 9.32 11 9.60493 10.8548C9.8558 10.727 10.0603 10.5226 10.1881 10.2717C10.3333 9.9868 10.3333 9.614 10.3333 8.86873V7.66667M11 4.33333V1M11 1H7.66667M11 1L6.33333 5.66667"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
