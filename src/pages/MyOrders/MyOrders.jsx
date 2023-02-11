import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orderedProducts, setOrderedProducts] = useState([]);
  useEffect(() => {
    const url = `https://click-bangla-server.vercel.app/orders?email=${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderedProducts(data));
  }, [user?.email]);

  const cancelNotify = () => {
    toast.success("Order Cancel Successfully!!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleCancelOrder = (id) => {
    const url = `https://click-bangla-server.vercel.app/orders/${id}`;
    const proceed = window.confirm("Are you want to cancel this order");
    if (proceed) {
      axios.delete(url).then((res) => {
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          cancelNotify();
          const remainingOrders = orderedProducts?.filter(
            (product) => product._id !== id
          );
          setOrderedProducts(remainingOrders);
        }
      });
    }
  };
  return (
    <div>
      <Container>
        <Typography
          variant="h5"
          sx={{ mx: "auto", my: 5, textAlign: "center" }}
        >
          My Orders
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ py: 2 }}>
              <Grid container sx={{ mx: "auto" }}>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Customer Name</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Product</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Image</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Total Price</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">Order Status</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6"> Delete</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          {orderedProducts?.map((product) => (
            <Grid item xs={12} key={product?._id}>
              <Paper elevation={1} sx={{ py: 1 }}>
                <Grid container sx={{ mx: "auto" }}>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body">
                      {product?.customerName}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {product?.orderedProduct?.map((singleProduct, p_id) => (
                        <p key={p_id} variant="body">
                          {singleProduct.name}
                        </p>
                      ))}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      {product?.orderedProduct?.map((singleProduct, p_id) => (
                        <Box>
                          <img src={singleProduct?.image} alt="" width="50px" />
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body">
                      {product?.totalAmount} Tk
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body">
                      {product?.orderStatus}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    lg={2}
                    sx={{
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => handleCancelOrder(product?._id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyOrders;
