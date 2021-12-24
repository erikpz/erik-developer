import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export const ExperienceSection = () => {
  return (
    <Box
      sx={[
        (theme) => ({
          [theme.breakpoints.down("sm")]: { textAlign: "center" },
        }),
      ]}
    >
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        Educación y Experiencia
      </Typography>
      <Grid container justifyContent="space-evenly" >
        <Grid item xs={12} sm={5} md={4}>
          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2015-2021
          </Typography>
          <Typography variant="h5">
            Ingeniería en Sistemas Computacionales
          </Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            Escuela Superior de Cómputo - IPN
          </Typography>

          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2011-2015
          </Typography>
          <Typography variant="h5">Técnico en Computación</Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            Centro de Estudios Científicos y Tecnológicos 8 - IPN
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          sx={[(theme) => ({ [theme.breakpoints.down("sm")]: { order: -1 } })]}
        >
          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2020-2021
          </Typography>
          <Typography variant="h5">Desarrollador FrontEnd</Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            Ka&apos;an Technologies, Ciudad de México
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
