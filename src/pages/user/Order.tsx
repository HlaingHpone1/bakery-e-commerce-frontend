import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getOrderByUserId } from "../../api/OrderService";
import { Cancel, CheckCircle, Error, Pending } from "@mui/icons-material";

import dayjs from "dayjs";

const Order = () => {
  const { data } = useQuery({
    queryKey: ["order-list"],
    queryFn: async () =>
      await getOrderByUserId().then((response) => response.data.data),
  });

  const canCancelOrder = (orderDate: string) => {
    const now = dayjs();
    const orderTime = dayjs(orderDate);
    const diffInHours = now.diff(orderTime, "hour");
    return diffInHours < 1; // Returns true if the order is within 1 hour
  };

  // Function to handle order cancellation
  const handleCancelOrder = (orderId: number) => {
    // API call to cancel the order (Replace with actual API call)
    console.log(`Order with ID: ${orderId} is canceled.`);
    // You can add an actual API call to your backend here to cancel the order
  };

  const getStatusIcon = (status: number) => {
    switch (status) {
      case 1: // Pending
        return <Pending color="warning" />;
      case 2: // Success
        return <CheckCircle color="success" />;
      case 3: // Canceled
        return <Cancel color="error" />;
      case 4: // Denied
        return <Error color="error" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Paper sx={{ p: 2 }}>
        <Typography
          variant="h4"
          component="h1"
          fontFamily="Roboto Slab"
          fontWeight={700}
        >
          Order List
        </Typography>
        {data?.map((order: OrderHistory) => {
          const orderCancelable = canCancelOrder(order.order_date);
          return (
            <Card key={order.id} sx={{ marginBottom: 4, padding: 2 }}>
              <CardContent>
                {/* Order Header */}
                <Typography variant="h5" component="div" gutterBottom>
                  Order Code: {order.order_code}
                </Typography>
                <Box display="flex" alignItems="center" gap={1}>
                  {getStatusIcon(order.status)}
                  <Typography variant="subtitle1" color="text.secondary">
                    Status:{" "}
                    {(() => {
                      switch (order.status) {
                        case 1:
                          return "Pending";
                        case 2:
                          return "Success";
                        case 3:
                          return "Canceled";
                        case 4:
                          return "Denied";
                        default:
                          return "Unknown";
                      }
                    })()}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" color="text.secondary">
                  User: {order.user_name}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Payment Type: {order.payment_type}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Total Price: ${order.total_price}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Order Date:{" "}
                  {dayjs(order.order_date).format("YYYY-MM-DD HH:mm:ss")}
                </Typography>

                {/* Cancel Order Button */}
                {order.status === 1 && orderCancelable ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleCancelOrder(order.id)}
                    sx={{ mt: 2 }}
                  >
                    Cancel Order
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    disabled
                    sx={{ mt: 2 }}
                  >
                    Cancel Order (Unavailable)
                  </Button>
                )}

                {/* Divider */}
                <Divider sx={{ my: 2 }} />

                {/* Order Details */}
                <Typography variant="h6" component="div">
                  Order Details:
                </Typography>

                <Grid container spacing={2}>
                  {order.order_details.map((detail) => (
                    <Grid item xs={12} md={6} lg={4} key={detail.product_id}>
                      <Card sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                          component="img"
                          sx={{
                            width: 80,
                            height: 80,
                            objectFit: "cover",
                            marginRight: 2,
                          }}
                          src={detail.product_image_url}
                          alt={detail.product_name}
                        />
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Typography variant="subtitle1">
                            {detail.product_name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Quantity: {detail.qty}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Price: ${detail.price}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total: ${detail.total}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          );
        })}
      </Paper>
    </>
  );
};

export default Order;
