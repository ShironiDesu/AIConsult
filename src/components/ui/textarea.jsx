import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="footer_textarea__wrapper">
      <textarea
        {...props}
        placeholder=" "
        className={cn(
          "flex min-h-[121px] w-full border border-[rgba(255,255,255,0.04)] rounded-[12px]  text-[rgba(255,255,255,1)] backdrop-blur-48 shadow-[inset_0px_108px_132px_0px_rgba(79,58,137,0.25)] bg-[rgba(79,58,137,0.25)] pt-5 pb-20 px-6 text-[18px] font-normal ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
      />
      <label className="pointer-events-none text-sm text-[rgba(255,255,255,1)]  font-normal opacity-[0.64] absolute">
        {props.placeholder}
      </label>
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
