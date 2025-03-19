import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps } = props;
    return(
        <div className={twMerge("size-14 rounded-2xl overflow-hidden inline-flex items-center justify-center border-4 border-blue-500 p-1 bg-neutral-300 text-xl text-neutral-900 font-medium", className)} {...otherProps}>{children}</div>
    )
}