import { Theme } from "@emotion/react";
import { Link } from "react-router-dom";

import { Button, SxProps } from "@mui/material";

type ButtonProps = {
  type: "contained" | "outlined" | "text";
  link: string;
  sx?: SxProps<Theme>;
};

const CancelButton = ({ type, link, sx }: ButtonProps) => {
  return (
    <Link to={link}>
      <Button
        variant={type}
        type="submit"
        sx={{
          letterSpacing: "1px",
          textTransform: "capitalize",

          color: "#fff",
          bgcolor: "secondary.main",

          ":hover": {
            bgcolor: "secondary.light",
          },

          display: "block",

          ...sx,
        }}
      >
        Cancel
      </Button>
    </Link>
  );
};

export default CancelButton;
