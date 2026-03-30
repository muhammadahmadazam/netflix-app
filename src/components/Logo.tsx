import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`} style={{ textDecoration: "none" }}>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          fontSize: { xs: 24, sm: 28 },
          lineHeight: 1,
          fontWeight: 800,
          letterSpacing: "0.08em",
          color: "#e50914",
          ...sx,
        }}
      >
        AWSFlix
      </Box>
    </RouterLink>
  );
}
