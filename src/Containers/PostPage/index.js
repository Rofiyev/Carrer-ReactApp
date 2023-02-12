import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const JobsPage = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ px: { xs: 1, md: 8 } }}
      display={"flex"}
      alignItems={"center"}
    >
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <Typography
          component={"span"}
          variant="span"
          sx={{ color: "#fa541c", fontSize: "12px", fontWeight: "bold" }}
        >
          FOR RECRUITERS
        </Typography>
        <Typography
          component={"h2"}
          variant="h3"
          my={3}
          sx={{ color: "#fff", fontWeight: "bold", fontSize: { xs: "35px" } }}
        >
          Do You Have A <br /> Position To Post Job?
        </Typography>
        <Typography
          component={"p"}
          variant="p"
          my={3}
          sx={{
            color: "#f2f3f5",
            fontWeight: "bold",
            width: { xs: "100%", md: "76%" },
            letterSpacing: "0.5px",
          }}
        >
          Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
          Morbi mattis ullamcorper velit.
        </Typography>
        <Button
          disableRipple
          sx={{
            ":hover": {
              background: "#FA311C",
            },
            borderRadius: 2,
            background: "#FA541C",
            color: "#fff",
            textTransform: "capitalize",
            px: 2,
          }}
        >
          <Typography component="span" variant="span" mr={1} mt={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              ariaHidden="true"
              role="img"
              width="1.2m"
              height="1.2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z"
              ></path>
              <path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"></path>
            </svg>
          </Typography>
          Post A Job
        </Button>
      </Grid>
      <Grid
        item
        sx={{
          display: {
            sm: "none",
            xs: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
        xs={12}
        sm={12}
        md={12}
        lg={6}
        xl={6}
      >
        <Avatar
          sx={{ width: "35rem", height: "35rem" }}
          variant="square"
          src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_recruitment.svg"
        />
      </Grid>
    </Grid>
  );
};

export default JobsPage;
