import { AppBar, Avatar, Box, Button, Icon, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { listItemFunc } from "../../Data";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import { grey, orange, red } from "@mui/material/colors";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBG);
  return (
    <>
      <Box
        id="header"
        sx={
          !navbar
            ? {
                position: "fixed",
                left: "0",
                width: "100%",
                background: "transparent",
                boxShadow: 0,
                px: {xs: 2, md: 9},
                py: 2,
                transition: " all 0.5s ease-in-out",
                zIndex: 10000,
              }
            : {
                position: "fixed",
                left: "0",
                width: "100%",
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(6px)",
                boxShadow: 0,
                px: {xs: 2, md: 9},
                py: 1,
                color: "#121212",
                zIndex: 10000,
                boxShadow: "0 0.5px 12px 0 rgba(0,0,0,0.1)",
              }
        }
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            sx={{ background: "transparent", width: "75px", borderRadius: 0 }}
          >
            {!navbar ? (
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
                  fill="#fff"
                  d="M712 264h-58.815l-98.37-148.034V264H496V24h58.815l98.37 148.718V24H712v240zM801.265 70.838v48.547H880v45.128h-78.735v52.649H888V264H744V24h144v46.838h-86.735zM344.333 264c-22 0-42.222-5.118-60.666-15.355-18.223-10.236-32.778-24.478-43.667-42.726-10.667-18.47-16-39.165-16-62.086s5.333-43.505 16-61.752c10.889-18.248 25.444-32.49 43.667-42.726C302.111 29.118 322.333 24 344.333 24s42.111 5.118 60.334 15.355C423.111 49.59 437.556 63.833 448 82.08c10.667 18.247 16 38.831 16 61.752s-5.333 43.616-16 62.086c-10.667 18.248-25.111 32.49-43.333 42.726C386.444 258.882 366.333 264 344.333 264zm0-52.072c18.667 0 33.556-6.231 44.667-18.693 11.333-12.462 17-28.929 17-49.402 0-20.695-5.667-37.163-17-49.402-11.111-12.462-26-18.692-44.667-18.692-18.889 0-34 6.12-45.333 18.358-11.111 12.24-16.667 28.818-16.667 49.736 0 20.696 5.556 37.274 16.667 49.736 11.333 12.239 26.444 18.359 45.333 18.359zM89.71 216.137H192V264H24v-44.444L125.613 71.863H24V24h168v44.444L89.71 216.137z"
                ></path>
              </svg>
            ) : (
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
            )}
          </Avatar>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              ml: { lg: -20, md: 0 },
            }}
          >
            {listItemFunc().map((item, index) => (
              <Button
                sx={
                  !navbar
                    ? {
                        ":hover": {
                          color: "#ccc",
                          background: "transparent",
                        },
                        fontSize: "14px",
                        textTransform: "capitalize",
                        mx: 2,
                        background: "transparent",
                        color: "white",
                      }
                    : {
                        ":hover": {
                          background: "transparent",
                          opacity: "0.5",
                        },
                        fontSize: "14px",
                        textTransform: "capitalize",
                        mx: 2,
                        background: "transparent",
                        color: "#000",
                      }
                }
                disableRipple
                key={index}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              alignItems: "center",
            }}
          >
            <Icon sx={{ mx: 2 }} fontSize="small">
              <SearchIcon
                sx={
                  !navbar
                    ? {
                        ":hover": { color: "white", transform: "scale(1.03)" },
                        color: "#d8d8d8",
                        cursor: "pointer",
                      }
                    : {
                        ":hover": {
                          color: "#71706E",
                          transform: "scale(1.05)",
                        },
                        color: "#000",
                        cursor: "pointer",
                      }
                }
              />
            </Icon>
            <Icon sx={{ mx: 2, mr: 4 }}>
              <PublicIcon
                sx={
                  !navbar
                    ? {
                        ":hover": { color: "white", transform: "scale(1.03)" },
                        color: "#d8d8d8",
                        cursor: "pointer",
                      }
                    : {
                        ":hover": {
                          color: "#71706E",
                          transform: "scale(1.05)",
                        },
                        color: "#000",
                        cursor: "pointer",
                      }
                }
              />
            </Icon>

            <Button
              disableRipple
              sx={
                !navbar
                  ? {
                      mr: 1,
                      ":hover": {
                        bgColor: grey[600],
                        borderColor: "transparent",
                      },
                      border: 1,
                      borderColor: grey[600],
                      borderRadius: 2,
                      background: "transparent",
                      color: "white",
                      textTransform: "capitalize",
                      px: 2,
                    }
                  : {
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
                    }
              }
            >
              Join Us
            </Button>
            <Button
              disableRipple
              sx={{
                ":hover": {
                  bgcolor: red[700],
                },
                bgcolor: orange[900],
                color: "white",
                textTransform: "capitalize",
                borderRadius: 2,
                px: 2,
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}
