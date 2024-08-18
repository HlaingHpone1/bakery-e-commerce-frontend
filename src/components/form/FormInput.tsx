import { ChangeEvent, FocusEvent } from "react";
import { Theme } from "@emotion/react";

import { Box, InputLabel, SxProps, TextField } from "@mui/material";

import RequiredStar from "./RequiredStar";

type FormInputProps<T> = {
  name: string;
  label: string;
  required?: boolean;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: T;
  error?: string;
  touch?: boolean;
  sx?: SxProps<Theme>;
};

const FormInput = <T,>({
  name,
  label,
  required = false,
  onBlur,
  onChange,
  value,
  error,
  touch,
  sx,
}: FormInputProps<T>) => {
  return (
    <Box>
      <InputLabel className="mb-1">
        {label}
        {required && <RequiredStar />}
      </InputLabel>
      <TextField
        variant="outlined"
        id={name}
        size="small"
        value={value}
        sx={{
          width: "100%",
          ...sx,
        }}
        autoComplete="off"
        name={name}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        error={!!error && touch}
        helperText={touch && error ? error : ""}
      />
    </Box>
  );
};

export default FormInput;
