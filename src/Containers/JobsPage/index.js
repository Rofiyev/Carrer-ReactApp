import { Grid, Typography, Box, Button } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React from "react";
import { jobPageCardDataFunc } from "../../Data";

export default function JonsPage() {
  return (
    <Grid container maxWidth="xl" pt={15}>
      <Grid container xl={12} lg={12} md={12} sm={12}>
        <Grid item sx={{ textAlign: "center" }} sm={12} md={12} lg={12}>
          <Typography
            sx={{
              color: "#7a8790",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "12px",
              mb: 3,
            }}
            component="h6"
            variant="h6"
          >
            FOR CANDIDATES
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", color: "#212b36", textAlign: "center" }}
            component="h2"
            variant="h3"
          >
            Explore Thousands of Jobs
          </Typography>
          <Typography
            sx={{
              color: "#7a8790",
              textAlign: "center",
              mt: 3,
              letterSpacing: 1,
            }}
            component="p"
            variant="span"
          >
            Donec mi odio, faucibus at, scelerisque quis, convallis in, <br />
            nisi. Morbi mattis ullamcorper velit.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        {jobPageCardDataFunc().map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4} mt={10}>
            <Typography
              sx={{
                width: "80px",
                height: "80px",
                display: "block",
                backgroundColor: "currentcolor",
                mask: `url(${item.url}) no-repeat center/contain`,
                WebkitMask: `url(${item.url}) no-repeat center/contain`,
                mx: "auto",
                color: "#FA541C",
              }}
              component="span"
              variant="div"
            />
            <Typography
              component="div"
              variant="span"
              sx={{
                color: "#7a8790",
                fontWeight: "bold",
                fontSize: "12px",
                textAlign: "center",
                my: 4,
              }}
            >
              {item.info}
            </Typography>
            <Typography
              sx={{
                display: "block",
                color: "#212b36",
                fontWeight: "500",
                textAlign: "center",
              }}
              component="h5"
              variant="h5"
            >
              {item.heading}
            </Typography>
            <Typography
              mt={1}
              sx={{ textAlign: "center", color: "#7a8790", fontSize: "15px" }}
              component="p"
              variant="p"
            >
              {item.desc}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ textAlign: "center" }}
        mt={10}
      >
        <Button
          disableRipple
          sx={{
            ":hover": {
              bgcolor: red[700],
            },
            bgcolor: orange[900],
            color: "white",
            textTransform: "capitalize",
            borderRadius: 1,
            px: 2,
          }}
        >
          <Typography component="span" variant="span" mr={1} mt={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="MuiBox-root css-0"
              width="1rem"
              height="1rem"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="m11 18l1.41 1.41L15 16.83V29h2V16.83l2.59 2.58L21 18l-5-5l-5 5z"
              ></path>
              <path
                fill="currentColor"
                d="M23.5 22H23v-2h.5a4.5 4.5 0 0 0 .36-9H23l-.1-.82a7 7 0 0 0-13.88 0L9 11h-.86a4.5 4.5 0 0 0 .36 9H9v2h-.5A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22Z"
              ></path>
            </svg>
          </Typography>
          Upload Your CV
        </Button>
      </Grid>
    </Grid>
  );
}
