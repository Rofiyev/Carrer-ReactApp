import { Avatar, Grid, Typography } from "@mui/material";

const SlideCard = ({ index, data }) => {
  return (
    <Grid key={index} item xs={12} sm={6} md={4} lg={2} sx={{ height: "250px" }}>
      <Grid
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          borderRadius: 3,
          py: 5,
          "&:hover": {
            boxShadow: "rgb(145 158 171 / 25%) -8px 8px 74px -4px",
            background: "#fff",
          },
          px: 2,
          height: '100%'
        }}
      >
        <Avatar
          sx={{ width: "60px", height: "60px" }}
          src={data.url}
          variant="rounded"
        />
        <Typography
          sx={{
            fontSize: "14px",
            mt: 1,
            color: "#7a8790",
            fontWeight: "500",
          }}
          component="p"
          variant="p"
        >
          {data.description}
        </Typography>
        <Typography
          sx={{
            mt: 1,
            fontSize: "16px",
            color: "#212b36",
            fontWeight: "600",
            textAlign: "center",
          }}
          component="h3"
          variant="h6"
        >
          {data.title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SlideCard;
