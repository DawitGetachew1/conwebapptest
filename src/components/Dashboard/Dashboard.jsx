// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import { 
  Box, 
  CssBaseline, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  InputBase
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People,
  Settings,
  Extension,
  MoreVert,
  Search as SearchIcon,
  NotificationsNone,
  AccountCircle
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


const drawerWidth = 240;

const Dashboard = () => {
  const navigate = useNavigate();

  const orders = [
    { id: 'ORD-007', customer: 'Ekaterina Tankova', date: 'Mar 8, 2024', status: 'Pending' },
    { id: 'ORD-006', customer: 'Cao Yu', date: 'Mar 8, 2024', status: 'Delivered' },
    { id: 'ORD-004', customer: 'Alexa Richardson', date: 'Mar 8, 2024', status: 'Refunded' },
    { id: 'ORD-003', customer: 'Anje Keizer', date: 'Mar 8, 2024', status: 'Pending' },
    { id: 'ORD-002', customer: 'Clarke Gillebert', date: 'Mar 8, 2024', status: 'Delivered' },
    { id: 'ORD-001', customer: 'Adam Denisov', date: 'Mar 8, 2024', status: 'Delivered' },
  ];

  

  const menuItems = [
    { text: 'Overview', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Customers', icon: <People />, path: '/dashboard/customers' },
    { text: 'Contact', icon: <Extension />, path: '/dashboard/integrations' },
    { text: 'Orders', icon: <Settings />, path: '/dashboard/settings' },
    { text: 'Settings', icon: <Settings />, path: '/dashboard/settings' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Refunded':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: 'white',
          color: 'text.primary',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ 
              position: 'relative',
              backgroundColor: '#f4f6f8',
              borderRadius: 1,
              marginRight: 2,
              marginLeft: 0,
              width: '100%',
              maxWidth: '400px'
            }}>
              <Box sx={{ 
                padding: '0 12px',
                height: '100%',
                position: 'absolute',
                display: 'flex',
                alignItems: 'center'
              }}>
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </Box>
              <InputBase
                placeholder="Search..."
                sx={{
                  color: 'inherit',
                  padding: '8px 8px 8px 48px',
                  width: '100%'
                }}
              />
            </Box>
          </Box>
          <IconButton size="large" color="inherit">
            <NotificationsNone />
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1a2233',
            color: 'white',
            zIndex: (theme) => theme.zIndex.appBar + 1,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            Tiru Sera Dashboard
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={window.location.pathname === item.path}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          backgroundColor: '#f4f6f8', 
          minHeight: '100vh',
          marginTop: '64px'
        }}
      >
        <Box sx={{ display: 'flex', gap: 2 }}>
         

          <Paper sx={{ p: 2, flex: 1.5 }}>
            <Typography variant="h6" gutterBottom>
              Latest orders
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id} hover>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <Chip 
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;