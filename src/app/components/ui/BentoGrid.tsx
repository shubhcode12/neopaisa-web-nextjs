import { cn } from "../../utils/cn";
import Image from "next/image";

const truncateText = (text : any, limit: number) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  uid,
  title,
  description,
  category,
  image,
}: {
  className?: string;
  uid?:  string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  category?: string | React.ReactNode;
  image?: string;
}) => {
  return (
    <div key={uid}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {image && (
        <div className="w-full h-48 relative">
          <Image
            src={image}
            alt={title as string}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </div>
      )}
      <div className="flex flex-col space-y-2">
        {category && (
          <div className="text-sm font-medium text-blue-500 dark:text-blue-400">
            {category}
          </div>
        )}
        {title && (
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg">
            {title}
          </div>
        )}
        {description && (
          <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
            {truncateText(description , 10)}
          </div>
        )}
      </div>
    </div>
  );
};
