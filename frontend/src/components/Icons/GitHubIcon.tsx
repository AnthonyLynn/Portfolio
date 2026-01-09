import { type IconProps } from "./Icon";

export const GitHubIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 13 14" className={`fill-none ${className}`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.1 11.29c-2.82.85-2.82-1.43-3.95-1.71M9.05 13v-2.2a2 2 0 0 0-.53-1.5c1.77-.2 3.63-.88 3.63-4 0-.79-.3-1.56-.85-2.13.26-.7.24-1.47-.05-2.15 0 0-.66-.2-2.2.84a7.5 7.5 0 0 0-3.95 0C3.56.82 2.9 1.02 2.9 1.02c-.3.68-.32 1.45-.06 2.15a3 3 0 0 0-.85 2.15c0 3.1 1.87 3.78 3.64 4a2 2 0 0 0-.53 1.47V13"
      />
    </svg>
  );
};
