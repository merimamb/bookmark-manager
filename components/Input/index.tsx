import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  isLoading?: boolean;
  children?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input
      ref={ref}
      className={clsx("border-2 border-neutral-200 h-12 rounded", className)}
      {...rest}
    />
  );
});

export default Input;
