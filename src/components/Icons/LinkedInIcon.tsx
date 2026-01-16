import { type IconProps } from "./Icon";

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 14 14" className={`fill-none ${className}`}>
      <path
        strokeWidth="1.5"
        d="M3.33 1.25a1.95 1.95 0 0 1 1.4 3.32h.4v8.18H1.54V4.57h.39a1.95 1.95 0 0 1 1.4-3.32"
      />
      <path
        strokeWidth="1.5"
        d="M9.66 4.4q1.85 0 2.67 1.27c.48.77.57 1.75.57 2.67v4.41H9.32v-4l-.01-.54a1 1 0 0 0-.07-.36q-.05-.1-.06-.09l-.04-.01L9 7.73a1 1 0 0 0-.28.05.2.2 0 0 0-.09.1q-.11.2-.12.82v4.05H4.92V4.57h3.5v.08q.54-.24 1.24-.25"
      />
    </svg>
  );
};
