import { PropsWithChildren } from "react";
import { cn } from '@/lib/utils'

export function TypographyH2({
  children,
  className,
}: { className?: string } & PropsWithChildren) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH1({
  children,
  className,
  style,
}: { className?: string, style?:any} & PropsWithChildren) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight",
        className,
        style={style}
      )}
    >
      {children}
    </h1>
  );
}
