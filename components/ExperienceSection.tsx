import React from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";

export const ExperienceSection = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        align="center"
        variant="h2"
        sx={{ marginBottom: { xs: 5, sm: 9 } }}
      >
        Educación y Experiencia
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
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
            sx={[(theme) => ({ marginTop: 4, color: theme.palette.grey[600] })]}
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
        <Grid item xs={12} sm={6}>
          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2020-2021
          </Typography>
          <Typography variant="h5">Desarrollador FronEnd</Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            Ka'an Technologies, Ciudad de México
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
