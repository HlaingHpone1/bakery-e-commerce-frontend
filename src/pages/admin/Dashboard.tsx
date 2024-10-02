import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import {
  Person,
  ShoppingCart,
  Inventory,
  ArrowUpward,
  ArrowDownward,
  AttachMoney,
} from "@mui/icons-material";

import { Chart } from "react-google-charts";
import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../api/dashboardService";

type SalesData = {
  month: string;
  sales: number;
};

type UserData = {
  month: string;
  newUsers: number;
};

type ChartData = [string, number][];

const Dashboard = () => {
  const dashboardData = {
    newUsers: 10,
    totalUsers: 1000,
    monthlyOrders: 50,
    totalOrders: 5000,
    monthlySales: 3000,
    totalSales: 52000,
    totalProducts: 111,
    userGrowth: 111,
    orderGrowth: -111,
    salesGrowth: 111,
  };

  const { data, isLoading } = useQuery({
    queryKey: ["dashboards-data"],
    queryFn: async () =>
      await getDashboardData().then((response) => {
        if (response.data.code === 200) {
          return response.data.data;
        }
      }),
  });

  // Helpers for arrow indicators
  const renderGrowthIndicator = (growth: number) =>
    growth > 0 ? (
      <ArrowUpward style={{ color: "green" }} />
    ) : (
      <ArrowDownward style={{ color: "red" }} />
    );

  const salesDataObject: SalesData[] = [
    { month: "January", sales: 12000 },
    { month: "February", sales: 15000 },
    { month: "March", sales: 18000 },
    { month: "April", sales: 13000 },
    { month: "May", sales: 16000 },
    { month: "June", sales: 19000 },
    { month: "July", sales: 14000 },
    { month: "August", sales: 17500 },
    { month: "September", sales: 20000 },
    { month: "October", sales: 22000 },
    { month: "November", sales: 25000 },
    { month: "December", sales: 28000 },
  ];

  const userDataObject: UserData[] = [
    { month: "January", newUsers: 300 },
    { month: "February", newUsers: 400 },
    { month: "March", newUsers: 450 },
    { month: "April", newUsers: 350 },
    { month: "May", newUsers: 380 },
    { month: "June", newUsers: 470 },
    { month: "July", newUsers: 420 },
    { month: "August", newUsers: 500 },
    { month: "September", newUsers: 550 },
    { month: "October", newUsers: 600 },
    { month: "November", newUsers: 680 },
    { month: "December", newUsers: 750 },
  ];
  const formatChartData = (data: (SalesData | UserData)[]): ChartData => {
    return data.map(
      (item) =>
        [
          item.month,
          "sales" in item ? item.sales : item.newUsers, // Ensure number type for value
        ] as [string, number]
    ); // Assert tuple type
  };

  const formattedSalesData = formatChartData(salesDataObject);
  const formattedUserData = formatChartData(userDataObject);

  const salesOptions = {
    title: "Monthly Sales Report",
    hAxis: {
      title: "Month",
    },
    vAxis: {
      title: "Sales ($)",
      minValue: 0,
    },
    chartArea: { width: "70%", height: "70%" },
    colors: ["#1E88E5"],
  };

  const userOptions = {
    title: "Monthly New Users Report",
    hAxis: {
      title: "Month",
    },
    vAxis: {
      title: "New Users",
      minValue: 0,
    },
    chartArea: { width: "70%", height: "70%" },
    colors: ["#43A047"],
  };

  return (
    <>
      <Grid container spacing={4} alignItems="stretch">
        {/* New Users & Total Users */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">New Users </Typography>
                {renderGrowthIndicator(data?.user_condition)}
              </Box>
              <Box display="flex" alignItems="center">
                <Person fontSize="large" style={{ marginRight: "8px" }} />
                <Typography variant="h4">{data?.new_users}</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography color="textSecondary">
                  Total Users: {data?.total_users}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Monthly Orders & Total Orders */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">Orders</Typography>
                {renderGrowthIndicator(data?.order_condition)}
              </Box>
              <Box display="flex" alignItems="center">
                <ShoppingCart fontSize="large" style={{ marginRight: "8px" }} />
                <Typography variant="h4">{data?.new_orders}</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography color="textSecondary">
                  Total Orders: {data?.total_orders}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">Sales Revenue </Typography>
                {renderGrowthIndicator(data?.sale_condition)}
              </Box>
              <Box display="flex" alignItems="center">
                <AttachMoney fontSize="large" style={{ marginRight: "8px" }} />
                <Typography variant="h4">{data?.total_sales}</Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography color="textSecondary">
                  Total Sales: ${data?.total_sales}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Products */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6">Total Products</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Inventory fontSize="large" style={{ marginRight: "8px" }} />
                <Typography variant="h4">{data?.total_products}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container mt={5}>
        <Grid item lg={6} md={12} xs={12}>
          <Chart
            chartType="ColumnChart"
            className="flex-1"
            width="100%"
            height="400px"
            data={[["Month", "Sales"], ...formattedSalesData]}
            options={salesOptions}
          />
        </Grid>

        <Grid item lg={6} md={12} xs={12}>
          <Chart
            chartType="ColumnChart"
            className="flex-1"
            width="100%"
            height="400px"
            data={[["Month", "New Users"], ...formattedUserData]}
            options={userOptions}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
