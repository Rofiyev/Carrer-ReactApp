import { Box, Grid, Typography } from "@mui/material";

const CategoriesCard = ({ data, index }) => {
  return (
    <Grid
      key={index}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      sx={{ height: "270px" }}
    >
      <Grid
        sx={{
          height: "100%",
          borderRadius: 3,
          py: 5,
          "&:hover": {
            boxShadow: "rgb(145 158 171 / 25%) -8px 8px 74px -4px",
            background: "#fff",
            borderColor: "transparent",
          },
          border: 1,
          borderColor: "rgba(145, 158, 171, 0.24)",
          px: 2,
        }}
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            display: "inline-block",
            backgroundColor: "currentcolor",
            mask: `url(${data.url}) no-repeat center/contain`,
            WebkitMask: `url(${data.url}) no-repeat center/contain`,
            background: "#555",
          }}
        ></Box>
        <Typography component="h3" variant="p" sx={{ mt: 3, color: "#212B36" }}>
          {data.title}
        </Typography>
        <Typography
          component="p"
          variant="span"
          sx={{
            mt: 1,
            fontWeight: "600",
            fontSize: "14px",
            color: "rgba(145, 158, 171, 0.8)",
          }}
        >
          10{`${index + 1}`} jobs
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CategoriesCard;
