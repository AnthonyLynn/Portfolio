import { type IconProps } from "./Icon";

export const ChatIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 37 33" className={className}>
      <path d="M30.6739 0H5.41304C2.34565 0 6.34341e-08 2.34251 0 5.4058V19.8213C0 22.7044 2.34565 25.2271 5.41304 25.2271H23.4565L30.6739 32.4348V25.2271C33.7413 25.2271 36.087 22.7044 36.087 19.8213V5.4058C36.087 2.34251 33.7413 0 30.6739 0Z" />
    </svg>
  );
};
