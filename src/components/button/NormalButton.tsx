import { Theme } from "@emotion/react";
import { SvgIconComponent } from "@mui/icons-material";
import { Button, SxProps } from "@mui/material";

type ButtonProps = {
  text: string;
  type: "contained" | "outlined" | "text";
  sx?: SxProps<Theme>;
  icon?: SvgIconComponent;
  onClick?: () => void;
};

const NormalButton = ({ text, type, sx, icon: Icon, onClick }: ButtonProps) => {
  return (
    <Button
      variant={type}
      type="submit"
      sx={{
        letterSpacing: "1px",
        textTransform: "capitalize",

        color: "#fff",

        display: "block",

        ...sx,
      }}
      onClick={onClick}
    >
      {Icon && <Icon fontSize="small" />} {text}
    </Button>
  );
};

export default NormalButton;
