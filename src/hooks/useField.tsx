import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";

interface useFieldProps {
  type: HTMLInputTypeAttribute;
}

export default function useField({ type }: useFieldProps) {
  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    onChange,
    type,
  };
}
