"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, ShoppingCart, Search, FacebookOutlined } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, Phone, InstagramIcon } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Supplement", href: "#supplement" },
  { name: "Gallery", href: "#gallery" },
  { name: "Order", href: "#order" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact", color: "#32CD32" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
]


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={scrolling ? 4 : 0}
      sx={{
        bgcolor: scrolling ? "rgba(255, 255, 255, 0.9)" : "white",
        color: "text.primary",
        py: { xs: 1, md: 1 },
        transition: "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: { xs: 0, md: 1 } }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image src="/logo.png" alt="logo" width={80} height={40} style={{ maxWidth: "90%", height: "auto" }} />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: item.color || "text.primary",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    "&:hover": { color: "#32CD32" },
                  }}
                >
                  {item.name}
                </Button>
              ))}

              {/* Icons */}
              <IconButton sx={{ color: "text.primary" }}>
                <FacebookOutlined fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: "text.primary", position: "relative" }}>
                <InstagramIcon fontSize="small" />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 6,
                    height: 6,
                    bgcolor: "red",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>

              {/* Order Now Button */}
              {/* <Button
                variant="contained"
                sx={{
                  bgcolor: "#32CD32",
                  color: "white",
                  borderRadius: "50px",
                  px: 2,
                  py: 0.5,
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  "&:hover": { bgcolor: "#228B22" },
                }}
              >
                ORDER NOW
              </Button> */}
            </Box>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <IconButton edge="end" onClick={handleDrawerToggle} sx={{ color: "text.primary" }}>
              <MenuIcon fontSize="medium" />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80vw",
            maxWidth: "300px",
            bgcolor: "white",
            color: "text.primary",
            padding: "10px 0",
          },
        }}
      >
        <List sx={{ textAlign: "center" }}>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton component={Link} href={item.href} onClick={handleDrawerToggle}>
                <ListItemText primary={item.name} sx={{ color: item.color || "inherit" }} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#32CD32",
                color: "white",
                borderRadius: "50px",
                fontWeight: "bold",
                fontSize: "0.8rem",
                "&:hover": { bgcolor: "#228B22" },
              }}
              onClick={handleDrawerToggle}
            >
              ORDER NOW
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
