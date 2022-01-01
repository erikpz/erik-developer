import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { LanguageContext } from "../contexts/LanguageContext";

export const ExperienceSection = () => {
  const langContext = useContext(LanguageContext);
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
        sx={{ marginBottom: { xs: 3, sm: 9 } }}
      >
        {langContext.state.content.experienceSection.title}
      </Typography>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} sm={5} md={4}>
          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2015-2021
          </Typography>
          <Typography variant="h5">
            {
              langContext.state.content.experienceSection.education.engineer
                .title
            }
          </Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            {
              langContext.state.content.experienceSection.education.engineer
                .subtitle
            }
          </Typography>

          <Typography
            variant="subtitle2"
            sx={[(theme) => ({ marginTop: 3, color: theme.palette.grey[600] })]}
          >
            2011-2015
          </Typography>
          <Typography variant="h5">
            {
              langContext.state.content.experienceSection.education.highschool
                .title
            }
          </Typography>
          <Typography
            variant="subtitle1"
            sx={[(theme) => ({ color: theme.palette.grey[600] })]}
          >
            {
              langContext.state.content.experienceSection.education.highschool
                .subtitle
            }
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
          {langContext.state.content.experienceSection.experience.map(
            (e: any) => (
              <Box key={e.title + e.subtitle}>
                <Typography variant="h5">{e.title}</Typography>
                <Typography
                  variant="subtitle1"
                  sx={[(theme) => ({ color: theme.palette.grey[600] })]}
                >
                  {e.subtitle}
                </Typography>
              </Box>
            )
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
