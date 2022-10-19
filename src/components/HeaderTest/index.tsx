import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import { Link as Anchor } from 'react-scroll'
import MenuIcon from "@material-ui/icons/Menu";
import logoImg from '../../assets/logo.png';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ContainerHeader } from "./styles";

const headersData = [
    {
        className: "aNav",
        to: "aboutMe",
        spy: true,
        smooth: true,
        offset: -325,
        duration: 1000,
        label: 'Sobre Mim'
    },
    {
        className: "aNav",
        to: "mySkills",
        spy: true,
        smooth: true,
        offset: -275,
        duration: 1000,
        label: 'Minhas Skills'
    },
    {
        className: "aNav",
        to: "projects",
        spy: true,
        smooth: true,
        offset: -200,
        duration: 1000,
        label: 'Projetos'
    },
    {
        className: "aNav",
        to: "contact",
        spy: true,
        smooth: true,
        offset: -150,
        duration: 1000,
        label: 'Contato'
    },

];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function HeaderTest() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{femmecubatorLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map((item) => {
            return (
                <Anchor
                    {...{
                        className: item.className,
                        to: item.to,
                        spy: item.spy,
                        smooth: item.smooth,
                        offset: item.offset,
                        duration: item.duration,
                    }}
                >
                    <MenuItem>  {item.label}</MenuItem>

                </Anchor>

            );
        });
    };

    const femmecubatorLogo = (
        <Anchor to="home" spy={true} smooth={true}
            offset={-325} duration={1000}>
            <img src={logoImg} alt="logo" />
        </Anchor>
    );

    const getMenuButtons = () => {
        return headersData.map((item) => {
            return (
                <Anchor
                    {...{
                        className: item.className,
                        to: item.to,
                        spy: item.spy,
                        smooth: item.smooth,
                        offset: item.offset,
                        duration: item.duration,
                    }}
                >
                    {item.label}
                </Anchor>
            );
        });
    };

    return (
        <header>
            <ContainerHeader>
                <AppBar className={header}>
                    {mobileView ? displayMobile() : displayDesktop()}
                </AppBar>
            </ContainerHeader>
        </header>
    );
}