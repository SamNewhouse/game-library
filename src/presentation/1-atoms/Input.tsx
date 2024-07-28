import { ChangeEventHandler, FC, HTMLInputTypeAttribute, memo } from "react";

interface Props {
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({ className, type, placeholder, value, onChange }) => {
  return (
    <>
      <input
        className={`flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-9 w-full max-w-sm${className ? " " + className : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default memo<Props>(Input);
