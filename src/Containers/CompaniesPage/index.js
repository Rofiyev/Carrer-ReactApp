import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CategoriesCard from "../../Components/CategoriesCard";
import SlideCard from "../../Components/SlideCard";
import { categoreisCardFunc, sliderCardsFunc } from "../../Data";
const CompaniesPage = () => {
  return (
    <>
      <Grid pt={10} item md={12} lg={12} xl={12} sx={{ textAlign: "center" }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{
            color: "#212b36",
            fontWeight: "bold",
            fontSize: { xs: "35px" },
          }}
        >
          Top Companies
        </Typography>
      </Grid>
      <Grid container mt={7} spacing={1} sx={{ justifyContent: "center" }}>
        {sliderCardsFunc().map((item, index) => (
          <SlideCard data={item} index={index} />
        ))}
      </Grid>
      <Grid
        pt={10}
        item
        md={12}
        lg={12}
        xl={12}
        mt={5}
        sx={{ textAlign: "center" }}
      >
        <Typography
          component="h2"
          variant="h3"
          sx={{
            color: "#212b36",
            fontWeight: "bold",
            fontSize: { xs: "35px" },
          }}
        >
          Hot Categories
        </Typography>
      </Grid>
      <Grid container mt={7} spacing={3} px={8} justifyContent="center">
        {categoreisCardFunc().map((item, index) => (
          <CategoriesCard key={index} data={item} index={index} />
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
          View All Categories
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
    </>
  );
};

export default CompaniesPage;
