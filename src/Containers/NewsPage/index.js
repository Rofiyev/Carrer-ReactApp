import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { newsDataFunc, newsDataFunc_2 } from "../../Data";

const NewsPage = () => {
  const product_1 = newsDataFunc();
  const product_2 = newsDataFunc_2();
  return (
    <Grid mt={40} sx={{ px: { xs: 1, md: 8 } }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          sx={{ flexDirection: { xs: "column"} }}
          display={"flex"}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "14px" }}
            component="span"
            variant="span"
          >
            BLOG
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#212b36",
              fontSize: { xs: "30px" },
            }}
            component="h3"
            variant="h3"
            my={3}
          >
            Read Our Lates News
          </Typography>
          <Typography
            width={"60%"}
            sx={{ letterSpacing: 0.5, fontWeight: 400, color: "#aaa" }}
          >
            Aenean vulputate eleifend tellus. Mauris turpis nunc, blandit et,
            volutpat molestie, porta ut, ligula.
          </Typography>
          <Box mt={2}>
            <Button
              disableRipple
              sx={{
                mr: 1,
                ":hover": {
                  background: "#FA311C",
                  color: "#fff",
                },
                border: 1,
                borderRadius: 2,
                background: "transparent",
                color: "#FA311C",
                textTransform: "capitalize",
                px: 2,
              }}
            >
              View All
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
        </Box>
      </Box>
      <Grid container spacing={2} mt={5}>
        <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
          <Grid
            sx={{
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                height: { lg: "120vh", md: "100vh", sm: "80vh", xs: "100vh" },
                width: "100%",
                borderRadius: 3,
                filter: "brightness(70%)",
              }}
              src="https://zone-assets-api.vercel.app/assets/images/career/career_1.jpg"
              variant="rounded"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "0%",
                left: "0%",
                width: "100%",
                height: "30%",
                zIndex: 10,
                pl: { xs: 2, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: grey[400],
                }}
                component={"p"}
                variant="span"
              >
                16 Mar 2020 ● 8 minutes read
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                component={"h4"}
                variant="h4"
                color={"white"}
                my={1}
              >
                The A - Z Of Event
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  color: grey[400],
                  width: { xs: "100%", md: "80%" },
                }}
                component={"p"}
                variant="p"
              >
                Pellentesque posuere. Phasellus a est. Suspendisse pulvinar,
                augue ac venenatis condimentum, sem libero volutpat nibh, nec
                pellentesque velit pede quis nunc.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item sm={12} xs={12} md={12} lg={6} xl={6}>
          <Box
            display={"flex"}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            {product_1.map((item) => (
              <Grid container gap={"30px"}>
                <Grid xl={12}>
                  <Grid px={1}>
                    <Avatar
                      sx={{ width: "100%", height: "20rem", borderRadius: 4 }}
                      variant="rounded"
                      src={item.url_1}
                    />
                    <Box mt={2} pl={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: grey[400],
                          mb: 1.5,
                        }}
                        component={"p"}
                        variant="span"
                      >
                        16 Mar 2020 ● 8 minutes read
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          ":hover": { textDecoration: "underline" },
                        }}
                        component={"a"}
                        variant="h6"
                        color={"#212b36"}
                        my={1}
                      >
                        {item.title_1}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid xl={12} px={1} mb={3}>
                    <Avatar
                      sx={{ width: "100%", height: "14rem", borderRadius: 4 }}
                      variant="rounded"
                      src={item.url_2}
                    />
                    <Box mt={2} pl={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: grey[400],
                          mb: 1.5,
                        }}
                        component={"p"}
                        variant="span"
                      >
                        16 Mar 2020 ● 8 minutes read
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          ":hover": { textDecoration: "underline" },
                        }}
                        component={"a"}
                        variant="h6"
                        color={"#212b36"}
                        my={1}
                      >
                        {item.title_2}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            {product_2.map((item) => (
              <Grid container gap={"30px"}>
                <Grid>
                  <Grid px={1}>
                    <Avatar
                      sx={{ width: "100%", height: "14rem", borderRadius: 4 }}
                      variant="rounded"
                      src={item.url_2}
                    />
                    <Box mt={2} pl={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: grey[400],
                          mb: 1.5,
                        }}
                        component={"p"}
                        variant="span"
                      >
                        16 Mar 2020 ● 8 minutes read
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          ":hover": { textDecoration: "underline" },
                        }}
                        component={"a"}
                        variant="h6"
                        color={"#212b36"}
                        my={1}
                      >
                        {item.title_2}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid>
                  <Grid px={1}>
                    <Avatar
                      sx={{ width: "100%", height: "20rem", borderRadius: 4 }}
                      variant="rounded"
                      src={item.url_1}
                    />
                    <Box mt={2} pl={1}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: grey[400],
                          mb: 1.5,
                        }}
                        component={"p"}
                        variant="span"
                      >
                        16 Mar 2020 ● 8 minutes read
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          ":hover": { textDecoration: "underline" },
                        }}
                        component={"a"}
                        variant="h6"
                        color={"#212b36"}
                        my={1}
                      >
                        {item.title_1}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewsPage;
