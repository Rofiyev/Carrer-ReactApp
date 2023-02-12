import { Box, Button, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { connectionsDataFunc } from "../../Data";

const ConnectionPage = () => {
  return (
    <Grid
      container
      sx={{ position: "relative", width: "100%", height: "90%", mt: 10 }}
    >
      <Grid
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "5%",
            top: "50%",
            width: "50%",
            height: "100%",
            transform: "translateY(-50%)",
            backgroundColor: "currentcolor",
            mask: "url(https://zone-assets-api.vercel.app/assets/illustrations/illustration_map.svg) center no-repeat",
            WebkitMask:
              "url(https://zone-assets-api.vercel.app/assets/illustrations/illustration_map.svg) center no-repeat",
            background: "#919EAB",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            left: "5%",
            top: "30%",
            width: "50%",
            height: "100%",
          }}
        >
          <Typography
            component={"h2"}
            variant="h3"
            sx={{ fontWeight: "bold", color: "#141a2d", lineHeight: "4rem" }}
          >
            Global <br /> Connections
          </Typography>
          <Typography
            component={"p"}
            variant="p"
            my={3}
            width={"60%"}
            sx={{ fontWeight: "bold", color: "#637381" }}
          >
            Vestibulum fringilla pede sit amet augue. Nam adipiscing. Nulla
            neque dolor, sagittis eget, iaculis quis.
          </Typography>
          <Button
            // disableRipple
            sx={{
              mr: 1,
              ":hover": {
                background: "#FA311C",
              },
              border: 1,
              borderRadius: 2,
              background: "#FA541C",
              color: "#fff",
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
        </Box>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={12}
        lg={7}
        display={"flex"}
        gap={"20px"}
        sx={{
          position: "absolute",
          right: "18%",
          top: "65%",
          transform: "translateY(-50%)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {connectionsDataFunc().map((item, index) => (
          <Grid
            key={index}
            md={12}
            sm={12}
            xs={12}
            sx={{
              borderRadius: 5,
              border: 0,
              height: "400px",
              width: "1100px",
              background: "red",
              position: "relative",
              top: "40%",
              left: "40%",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "rgb(145 158 171 / 25%) -8px 8px 74px -4px",
              background: `url(${item.url}) center center no-repeat`,
              backgroundSize: "cover",
              transition: "0.7s ease-in",
              ":hover": {
                backgroundSize: "175%",
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "#fff",
                border: 0.5,
                borderColor: "#ccc",
                textAlign: "center",
                py: 1.5,
              }}
            >
              <Typography
                sx={{ fontSize: "18px", color: "#141a2d" }}
                component={"h5"}
                variant="span"
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", color: "#7a8390", fontWeight: "600" }}
                component={"p"}
                variant="span"
              >
                10{`${index + 1}`} Jobs
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ConnectionPage;
