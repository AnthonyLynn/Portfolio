interface ArrowIconProps {
  className: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 19 22" className={className}>
      <path d="M19 11L0 22L3.8 11L0 0L19 11Z" />
    </svg>
  );
};
