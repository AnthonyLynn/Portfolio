interface LocationIconProps {
  className: string;
}

export const LocationIcon: React.FC<LocationIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 11 14" className={`fill-none ${className}`}>
      <path
        d="M10 5.5C10 9.5 5.5 13 5.5 13C5.5 13 1 9.5 1 5.5C1 3 3 1 5.5 1C8 1 10 3 10 5.5Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5 7C6.32843 7 7 6.32843 7 5.5C7 4.67157 6.32843 4 5.5 4C4.67157 4 4 4.67157 4 5.5C4 6.32843 4.67157 7 5.5 7Z"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
