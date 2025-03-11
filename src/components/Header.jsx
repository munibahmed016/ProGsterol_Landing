"use client"

import { useState } from "react"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
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
} from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "white", color: "text.primary" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between", py: 1 }}>
          {/* Logo */}
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              color: "#6366f1",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
           
          </Typography> */}

          <Image
            src="/3z_bio.svg"
            alt="logo"
            width={100}
            height={100}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: "text.primary",
                    "&:hover": { color: "#6366f1" },
                    fontSize: "0.9rem",
                  }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#6366f1",
                  color: "white",
                  borderRadius: "50px",
                  px: 3,
                  "&:hover": { bgcolor: "#4f46e5" },
                }}
              >
                GET STARTED
              </Button>
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ "& .MuiDrawer-paper": { width: 240 } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton component={Link} href={item.href}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#6366f1",
                color: "white",
                borderRadius: "50px",
                "&:hover": { bgcolor: "#4f46e5" },
              }}
            >
              GET STARTED
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}
