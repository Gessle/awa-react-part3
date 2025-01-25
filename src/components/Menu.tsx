import React from 'react'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Menu = () => {
    const {t, i18n} = useTranslation()
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">{t("Home")}</Link> <Link to="/about">{t("About")}</Link> <Link to="/use-effect-demo">{t("UseEffect Demo")}</Link> <Link to="/posts">{t("Posts")}</Link> <Link to="/comments">{t("Comments")}</Link>
            <button onClick={()=>changeLanguage("fi")}>FI</button>
            <button onClick={()=>changeLanguage("en")}>EN</button>
            
            </Typography>
            </Toolbar>
      </AppBar>
    </Box>
    )
}

export default function App () {
    return (
        <Suspense fallback="loading...">
            <Menu />
        </Suspense>
    )
}
