import { Grid, IconButton, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box } from "@mui/system";

const CustomerPage = () => {
  const [value, setValue] = useState(5);
  return (
    <Grid container display={"flex"} pt={20} justifyContent={"center"}>
      <Grid>
        <Typography
        textAlign={'center'}
          sx={{ color: "#13192e", fontWeight: "bold", fontSize:{xs: '30px'} }}
          component={"h3"}
          variant="h3"
        >
          What Our Customer Say
        </Typography>
        <Typography textAlign={"center"} mt={4}>
          <Rating name="read-only" value={value} readOnly />
        </Typography>
        <Typography
          sx={{ lineHeight: 1.75, fontWeight: "400", fontSize: "20px" }}
          textAlign={"center"}
          component={"p"}
          variant="p"
          mt={2}
        >
          Amazing experience i love it a lot. Thanks to the team  that
          dreams come true, great! I appreciate there attitude and
          approach.
        </Typography>
        <Typography
          sx={{ fontWeight: "800", fontSize: "20px" }}
          textAlign={"center"}
          component={"h5"}
          variant="h5"
          mt={4}
        >
          Jayvion Simon
        </Typography>
        <Typography
          sx={{
            lineHeight: 1.75,
            fontWeight: "500",
            fontSize: "14px",
            color: "#aaa",
            letterSpacing: 0.8,
          }}
          textAlign={"center"}
          component={"p"}
          variant="p"
        >
          UX Disigner
        </Typography>
        <Box mt={2} sx={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
          <IconButton
            variant="rounded"
            sx={{ borderRadius: "50%", height: "40px", width: "40px" }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            variant="rounded"
            sx={{ borderRadius: "50%", height: "40px", width: "40px" }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CustomerPage;
