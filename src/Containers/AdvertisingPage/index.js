import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AdvertisingPage = () => {
  return (
    <Grid mt={30} container display={"flex"} justifyContent={"center"}>
      <Grid
        item
        xs={11}
        sm={11}
        md={10}
        lg={10}
        xl={10}
        sx={{
          background: "rgba(250, 84, 28, 0.08)",
          borderRadius: 4,
          maxHeight: "450px",
          pl: { xs: 1, md: 8 },
          px: { xs: 3 },
          justifyContent: { xs: "center", md: "space-between" },
        }}
        display={"flex"}
        alignItems={"center"}
      >
        <Box py={4}>
          <Typography
            sx={{ fontWeight: 700, fontSize: { xs: "30px" } }}
            component={"h2"}
            variant="h3"
            color={"black"}
          >
            Download App
          </Typography>
          <Typography
            sx={{ fontWeight: 400 }}
            component={"p"}
            variant="p"
            color={"black"}
            width={"80%"}
            my={3}
          >
            Now finding the new job just got even easier with our new app!
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              disableElevation
              sx={{
                background: "black",
                ":hover": { background: "black" },
              }}
            >
              <Typography component={"span"} variant="span">
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  variant="square"
                  src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_app_store.svg"
                />
              </Typography>
              <Typography component={"div"}>
                <Typography
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontSize: "11px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  component={"span"}
                  color={"#aaa"}
                  variant="span"
                >
                  Download One The
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: 0.5,
                    textTransform: "capitalize",
                  }}
                  component={"h5"}
                  color={"#fff"}
                  variant="span"
                >
                  App Store
                </Typography>
              </Typography>
            </Button>
            <Button
              disableElevation
              sx={{
                background: "black",
                ":hover": { background: "black" },
              }}
            >
              <Typography component={"span"} variant="span">
                <Avatar
                  sx={{ width: "30px", height: "30px" }}
                  variant="square"
                  src="https://zone-assets-api.vercel.app/assets/icons/app-store/ic_google_play.svg"
                />
              </Typography>
              <Typography component={"div"}>
                <Typography
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontSize: "11px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                  component={"span"}
                  color={"#aaa"}
                  variant="span"
                >
                  Download One The
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    letterSpacing: 0.5,
                    textTransform: "capitalize",
                  }}
                  component={"h5"}
                  color={"#fff"}
                  variant="span"
                >
                  Play Store
                </Typography>
              </Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Avatar
            sx={{ height: "100vh", width: "100%" }}
            variant="square"
            src="https://zone-assets-api.vercel.app/assets/images/career/career_download_app.png"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdvertisingPage;
