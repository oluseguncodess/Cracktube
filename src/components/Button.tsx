import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"],{
    variants: {
        varient: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            dark: ["bg-secondary-dark", "bg-secondary-dark-hover", "text-secondary"]
        },
         sizes: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"]
         }
    },
    defaultVariants: {
        varient: "default",
        sizes: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

function Button({varient, sizes, className, ...props}: ButtonProps) {
    return <button {...props} 
    className={twMerge(buttonStyles({varient, sizes}), className)}></button>;
}

export default Button;