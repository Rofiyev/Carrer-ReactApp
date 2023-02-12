import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { orange, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerDataFunc } from "../../Data";

const socials = [
  <FacebookIcon sx={{ color: orange[600] }} />,
  <InstagramIcon sx={{ color: orange[600] }} />,
  <LinkedInIcon sx={{ color: orange[600] }} />,
  <TwitterIcon sx={{ color: orange[600] }} />,
];
const text = ["Documentation", "Changelog", "Contributing"];

const Footer = () => {
  const data = footerDataFunc();
  return (
    <>
      <Grid container sx={{ px: { xs: 1, md: 4, lg: 9 } }} mt={10}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Avatar
            sx={{ background: "transparent", width: "75px", borderRadius: 0 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg "
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 1080 288"
            >
              <ellipse
                cx="996"
                cy="204"
                fill="#FA541C"
                rx="60"
                ry="60"
              ></ellipse>
              <path
                fill="#000"
                d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
              ></path>
            </svg>
          </Avatar>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#7a8390",
              width: "65%",
              letterSpacing: 0.5,
              my: 3,
            }}
          >
            The starting point for your next project based on easy-to-customize
            Material-UI © helps you build apps faster and better.
          </Typography>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
              component={"p"}
              variant="span"
            >
              Socials
            </Typography>
            {socials.map((item, index) => (
              <IconButton key={index}>{item}</IconButton>
            ))}
          </Box>
          <Box mt={3} mb={3}>
            <Typography
              sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
              component={"p"}
              variant="span"
            >
              Documentation
            </Typography>
            <Box mt={1} display={"flex"} flexDirection={"column"}>
              {text.map((item, index) => (
                <Typography
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                    color: "#7a8390",
                  }}
                  key={index}
                  component={"a"}
                  variant="p"
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Box mt={4}>
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Let’s stay in touch
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#7a8390",
                  width: "65%",
                  letterSpacing: 0.5,
                  mt: 1,
                }}
              >
                Ubscribe to our newsletter to receive latest articles to your
                inbox weekly.
              </Typography>
            </Box>
            <Box mt={4}>
              <TextField
                sx={{
                  "& fieldset": { border: "none" },
                  bgcolor: "#f6f7f8",
                  borderRadius: 2,
                  width: "350px",
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
                          ":hover": {
                            bgcolor: red[700],
                          },
                          bgcolor: orange[900],
                          color: "white",
                          textTransform: "capitalize",
                          py: 1,
                          px: 2,
                        }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box mt={6}>
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Apps
              </Typography>
              <Box mt={2} sx={{ display: "flex", gap: "20px" }}>
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Grid
              sm={6}
              md={6}
              lg={4}
              display={"flex"}
              flexDirection={"column"}
              mb={2}
            >
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Marketing
              </Typography>
              {data.Marketing.map((item, i) => (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#7a8390",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      my: 0.5,
                    }}
                    component={"a"}
                    variant="p"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
              <br />
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Travel
              </Typography>
              {data.Travel.map((item, i) => (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#7a8390",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      my: 0.5,
                    }}
                    component={"a"}
                    variant="p"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid
              sm={6}
              md={6}
              lg={4}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Career
              </Typography>
              {data.Career.map((item, i) => (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#7a8390",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      my: 0.5,
                    }}
                    component={"a"}
                    variant="p"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
              <br />
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                E-Learning
              </Typography>
              {data.E_Learning.map((item, i) => (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#7a8390",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      my: 0.5,
                    }}
                    component={"a"}
                    variant="p"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid
              sm={6}
              md={6}
              lg={4}
              display={"flex"}
              flexDirection={"column"}
            >
              <Typography
                sx={{ fontWeight: "bold", mt: 1, fontSize: "18px" }}
                component={"p"}
                variant="span"
              >
                Common
              </Typography>
              {data.Common.map((item, i) => (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      color: "#7a8390",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      my: 0.5,
                    }}
                    component={"a"}
                    variant="p"
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 5 }} />
      <Box
        sx={{
          px: { xs: 1, md: 6 },
          flexDirection: { xs: "column", sm: "row" },
        }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#7a8390",
            letterSpacing: 0.5,
            mt: 1,
          }}
        >
          © 2021. All rights reserved
        </Typography>
        <Box display={"flex"} sx={{ gap: "20px" }}>
          <Typography
            sx={{
              mt: 1,
              fontSize: "14px",
              color: "#7a8390",
              letterSpacing: 0.5,
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            component={"a"}
            variant="p"
          >
            Help Center
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontSize: "14px",
              color: "#7a8390",
              letterSpacing: 0.5,
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            component={"a"}
            variant="p"
          >
            Terms of Service
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
