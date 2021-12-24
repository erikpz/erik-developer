import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";

export const ProgressBar = () => {
  const barRef = useRef<any>();

  const doProgress = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barRef.current.style.width = scrolled + "%";
  };

  useEffect(() => {
    window.addEventListener("scroll", doProgress);
    return () => window.removeEventListener("scroll", doProgress);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "5px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <Box
        ref={barRef}
        sx={(theme) => ({
          zIndex: 55,
          height: "100%",
          backgroundColor: theme.palette.text.primary,
          width: "0%",
        })}
      ></Box>
    </Box>
  );
};

export default ProgressBar;
