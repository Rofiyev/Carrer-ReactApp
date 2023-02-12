import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";

const GetJobsPage = () => {
  return (
    <Grid container display={"flex"} justifyContent={"center"}>
      <Grid textAlign={"center"}>
        <Typography
          sx={{ fontWeight: "bold", fontSize: { xs: "30px" } }}
          color={"white"}
          component={"h2"}
          variant="h2"
        >
          Get The Right Job For You
        </Typography>
        <Typography
          sx={{ fontWeight: "500",}}
          color={"white"}
          component={"p"}
          variant="p"
          my={3}
        >
          Subscribe to get updated on latest and relevant career opportunities
        </Typography>
        <TextField
          sx={{
            "& fieldset": { border: "none" },
            bgcolor: "white",
            borderRadius: 2,
            maxWidth: "500px",
            minWidth: "350px",
            position: "relative",
          }}
          variant="outlined"
          id="outlined-required"
          disableUnderline={false}
          defaultValue=""
          autoFocus
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  disableRipple
                  sx={{
                    position: "absolute",
                    right: "0",
                    ":hover": {
                      bgcolor: red[700],
                    },
                    bgcolor: orange[900],
                    color: "white",
                    textTransform: "capitalize",
                    py: 2,
                    px: 4,
                  }}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GetJobsPage;
