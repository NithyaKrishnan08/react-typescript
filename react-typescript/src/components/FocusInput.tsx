import { useRef } from "react";

const FocusInput = () => {
  const name = useRef<HTMLInputElement>(null);

  const focusInput = () => (
    name.current?.focus()
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        ref={name}
      />
      <button onClick={focusInput}>Click to focus input</button>
    </div>
  );
};

export default FocusInput;
