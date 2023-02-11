import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const TopBanner = () => {
  return (
    <div
      style={{
        backgroundColor: "#E2F3DD",
        height: "100vh",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid container spacing={2} sx={{ mx: "auto", alignItems: "center" }}>
          <Grid item xs={12} sm={12} md={6} lg={5} sx={{ mx: "auto", px: 2 }}>
            <Typography
              variant=""
              sx={{
                lineHeight: "5rem",
                fontWeight: 700,
                color: "#1bab42",
                fontSize: { xs: "20px", md: "40px", lg: "60px" },
              }}
            >
              Hurry UP!!! Summer Sale is Ongoing
            </Typography>
            <Typography variant="h6">Enjoy 5% Off On Selected Items</Typography>
            <Typography variant="body1" sx={{ my: 3, color: "text.secondary" }}>
              This will be applicable untill products is in Stock
            </Typography>
            {/* <MyButton sx={{ my: 2 }}>Read More<DoubleArrowIcon /></MyButton> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={7} sx={{ mx: "auto", px: 2 }}>
            <img
              src="https://i.ibb.co/HFGQx6r/png-clipart-shopping-cart-graphy-grocery-store-supermarket-service-supermarket-removebg-preview.png"
              alt=""
              width="80%"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopBanner;
