import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyles = cva(["transition-colors"],{
    variants: {
        varient: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"]
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

function Button({varient, sizes, ...props}: ButtonProps) {
    return <button {...props} className={buttonStyles({varient, sizes})}></button>;
}

export default Button;