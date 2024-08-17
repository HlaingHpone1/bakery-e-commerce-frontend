import { ChangeEvent, FocusEvent } from "react";

import { Box, InputLabel, SxProps, TextField } from "@mui/material";

import RequiredStar from "./RequiredStar";
import { Theme } from "@emotion/react";

type FormInputProps = {
  name: string;
  label: string;
  required?: boolean;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touch?: boolean;
  sx?: SxProps<Theme>;
};

const FormInput = ({
  name,
  label,
  required = false,
  onBlur,
  onChange,
  error,
  touch,
  sx,
}: FormInputProps) => {
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
