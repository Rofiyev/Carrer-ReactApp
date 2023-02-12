import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ClientsDataFunc } from "../../Data";

const ClienstsPage = () => {
  return (
    <Box textAlign={"center"} pt={15} sx={{ px: { xs: 1, md: 8 } }}>
      <Typography
        sx={{ color: "#13192e", fontWeight: "bold", fontSize: { xs: "35px" } }}
        component={"h3"}
        variant="h3"
      >
        Our Clients
      </Typography>
      <Typography
        sx={{ color: "#aaa", letterSpacing: 0.8 }}
        component={"p"}
        variant="p"
        mt={2}
      >
        Curabitur a felis in nunc fringilla tristique. Fusce egestas elit <br />{" "}
        eget lorem. Etiam vitae tortor.
      </Typography>
      <Grid container mt={10} spacing={2} justifyContent="center">
        {ClientsDataFunc().map((item, index) => (
          <Grid key={index} item xs={6} sm={4} md={3} lg={2} xl={2}>
            <Grid
              p={1}
              sx={{
                border: "1px solid rgba(145, 158, 171, 0.24)",
                borderRadius: 4,
              }}
            >
              <Avatar
                variant="square"
                sx={{ width: "100%", height: "100%" }}
                src={item}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClienstsPage;
