import { AccountCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const SingleTestimonial = ({ review }) => {
  return (
    <div style={{ margin: "15px" }}>
      <Card>
        <CardContent>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              flexDirection: { xs: "column", md: "row", lg: "row" },
            }}
          >
            <Grid item xs={12} md={4} lg={4}>
              {review.customerImage ? (
                <img
                  src={review?.customerImage}
                  alt=""
                  width="50px"
                  style={{
                    margin: "auto",
                    border: "3px solid #1BAB42",
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <AccountCircle style={{ fontSize: "60px", color: "#1BAB42" }} />
              )}
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Box
                sx={
                  {
                    //   pt: 2,
                    //   display: "flex",
                    //   justifyContent: "center",
                    //   alignItems: "center",
                    //   flexDirection: "column",
                  }
                }
              >
                <Typography variant="body1" sx={{ color: "#1BAB42", pb: 2 }}>
                  {review?.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#000000", opacity: "70%" }}
                >
                  {review?.review}
                </Typography>
                <Rating
                  name="read-only"
                  value={review?.rating}
                  readOnly
                  sx={{ my: 2 }}
                />
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleTestimonial;
