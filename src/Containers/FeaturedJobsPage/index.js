import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { boxItemsFunc } from "../../Data";

export const FeaturedJobs = () => {
  return (
    <Grid maxWidth="xl" mt={20}>
      <Grid container lg={12} xl={12} sx={{ px: { xs: 2, md: 8 } }}>
        <Grid item lg={4} md={12}>
          <Typography
            sx={{
              color: "#7a8790",
              fontWeight: "bold",
              fontSize: "12px",
              mb: 3,
            }}
            component="h6"
            variant="h6"
          >
            FEATURED JOBS
          </Typography>
        </Grid>
        <Grid lg={8} md={12}>
          <Typography
            sx={{
              color: "#141a2d",
              fontWeight: "bold",
              fontSize: { xs: "1.3rem", md: "2rem" },
              mb: 3,
            }}
            component="h2"
            variant="h3"
          >
            Jobs available apply to Editorial Specialist, Account Manager, Human
            Resources Specialist and more!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        mt={7}
        sx={{px: {xs: 1, md: 7}}}
        spacing={2}
      >
        {boxItemsFunc().map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
            <Grid
              xs={12}
              sx={{
                boxShadow: "rgb(145 158 171 / 25%) -8px 8px 24px -4px",
                borderRadius: 5,
                py: 2,
                "&:hover": {
                  boxShadow: "rgb(145 158 171 / 25%) -8px 8px 74px -4px",
                },
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar
                  variant="rounded"
                  sx={{ borderRadius: 1 }}
                  src={item.url}
                />
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="MuiBox-root css-3fucft"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.49 7.49 0 0 0 22.45 4Z"
                    ></path>
                  </svg>
                </IconButton>
              </Box>
              <Box mt={3}>
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                  component="a"
                  variant="h5"
                >
                  {item.heading}
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography
                  sx={{
                    color: "#009dff",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  component="p"
                  variant="span"
                >
                  {item.info}
                </Typography>
              </Box>
              <Box mt={1} sx={{ display: "flex" }}>
                <Typography
                  component="span"
                  variant="span"
                  sx={{ mr: 1, color: "#7a8790" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="MuiBox-root css-l21hmw"
                    sx="[object Object]"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z"
                    ></path>
                  </svg>
                </Typography>
                <Typography
                  sx={{
                    color: "#7a8790",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                  component="p"
                  variant="span"
                >
                  {item.location}
                </Typography>
              </Box>
              <Box my={1} sx={{ display: "flex" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ mr: 1, color: "#7a8790", fontSize: "13px" }}
                >
                  {item.date}
                </Typography>
              </Box>
              <Divider />
              <Box my={1} sx={{ display: "flex" }}>
                <Container sx={{ display: "flex" }}>
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ color: "#7a8790", mr: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-q0bs1u"
                      sx="[object Object]"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75L23 4z"
                      ></path>
                    </svg>
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ mr: 1, color: "#7a8790", fontSize: "14px" }}
                  >
                    {item.iconsInfo_1}
                  </Typography>
                </Container>
                <Container sx={{ display: "flex" }}>
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ color: "#7a8790", mr: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-q0bs1u"
                      sx="[object Object]"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"
                      ></path>
                    </svg>
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ mr: 1, color: "#7a8790", fontSize: "14px" }}
                  >
                    {item.iconsInfo_2}
                  </Typography>
                </Container>
              </Box>
              <Box my={1} sx={{ display: "flex" }}>
                <Container sx={{ display: "flex" }}>
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ color: "#7a8790", mr: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-q0bs1u"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M2 22h28v2H2zm0 4h28v2H2zm22-16a2 2 0 1 0 2 2a2 2 0 0 0-2-2zm-8 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2zm-8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2Zm0-14H4v12h24Z"
                      ></path>
                    </svg>
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ mr: 1, color: "#7a8790", fontSize: "14px" }}
                  >
                    {item.iconsInfo_3}
                  </Typography>
                </Container>
                <Container sx={{ display: "flex" }}>
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ color: "#7a8790", mr: 1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-q0bs1u"
                      sx="[object Object]"
                      width="1em"
                      height="1em"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
                      ></path>
                    </svg>
                  </Typography>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ mr: 1, color: "#7a8790", fontSize: "14px" }}
                  >
                    {item.iconsInfo_4}
                  </Typography>
                </Container>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item lg={12} md={12} sm={12} sx={{ textAlign: "center" }} mt={10}>
        <Button
          disableRipple
          sx={{
            mr: 1,
            ":hover": {
              bgColor: grey[100],
              borderColor: grey[800],
            },
            border: 1,
            borderColor: grey[500],
            borderRadius: 2,
            background: "transparent",
            color: "#212b36",
            textTransform: "capitalize",
            px: 2,
          }}
        >
          View All Jobs
          <Typography component="span" variant="span" ml={1} mt={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="MuiBox-root css-1ktnz7v"
              sx="[object Object]"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="m28 16l-7-7l-1.414 1.414L24.172 15H4v2h20.172l-4.586 4.586L21 23l7-7z"
              ></path>
            </svg>
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
