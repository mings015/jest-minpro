/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const Avatar = ({ className, imageUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className={cn(
        'h-16 w-16 rounded-full border-2 border-border dark:border-darkBorder bg-cover bg-center',
        className
      )}
    ></div>
  );
};

export default Avatar;