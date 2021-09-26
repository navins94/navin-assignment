import React, { useState, useEffect } from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Avatar,
	Box,
	Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import dashboardIcon from 'assets/images/dashboard.png';
import inventoryIcon from 'assets/images/inventory.png';
import ordersIcon from 'assets/images/orders.png';
import customersIcon from 'assets/images/customers.png';
import reportsIcon from 'assets/images/reports.png';
import settingsIcon from 'assets/images/settings.png';
import footerLogo from 'assets/images/footerLogo.png';

// context
import {
	useLayoutState,
	useLayoutDispatch,
	toggleSidebar,
} from 'context/LayoutContext';

const structure = [
	{ id: 0, label: 'Dashboard', link: '/app', icon: dashboardIcon },
	{ id: 2, label: 'Inventory', link: '/app', icon: inventoryIcon },
	{ id: 2, label: 'Orders', link: '/app', icon: ordersIcon },
	{ id: 2, label: 'Customers', link: '/app', icon: customersIcon },
	{ id: 2, label: 'Reports', link: '/app', icon: reportsIcon },
	{ id: 2, label: 'Settings', link: '/app', icon: settingsIcon },
];

const drawerWidth = 250;

function Sidebar({ location }) {
	const classes = useStyles();
	const theme = useTheme();
	const { isSidebarOpened } = useLayoutState();
	const layoutDispatch = useLayoutDispatch();
	const [isPermanent, setPermanent] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(function () {
		window.addEventListener('resize', handleWindowWidthChange);
		handleWindowWidthChange();
		return function cleanup() {
			window.removeEventListener('resize', handleWindowWidthChange);
		};
	});

	const handleWindowWidthChange = () => {
		var windowWidth = window.innerWidth;
		var breakpointWidth = theme.breakpoints.values.md;
		var isSmallScreen = windowWidth < breakpointWidth;

		if (isSmallScreen && isPermanent) {
			setPermanent(false);
		} else if (!isSmallScreen && !isPermanent) {
			setPermanent(true);
		}
	};

	return (
		<Drawer
			variant={isPermanent ? 'permanent' : 'temporary'}
			className={classNames(classes.drawer, {
				[classes.drawerOpen]: isSidebarOpened,
				[classes.drawerClose]: !isSidebarOpened,
			})}
			classes={{
				paper: classNames({
					[classes.drawerOpen]: isSidebarOpened,
					[classes.drawerClose]: !isSidebarOpened,
				}),
			}}
			open={isSidebarOpened}
		>
			<div className={classes.toolbar} />
			<div className={classes.mobileBackButton}>
				<IconButton onClick={() => toggleSidebar(layoutDispatch)}>
					<ArrowBackIcon
						classes={{
							root: classNames(classes.headerIcon, classes.headerIconCollapse),
						}}
					/>
				</IconButton>
			</div>
			<Box className={classes.wrapper}>
				<List className={classes.sidebarList}>
					{structure.map((link, index) => (
						<ListItem
							key={index}
							button
							component={link && Link}
							to={link}
							className={classes.link}
							classes={{
								root: classnames(classes.linkRoot, {
									[classes.linkActive]: index === 0,
								}),
							}}
							disableRipple
						>
							<ListItemIcon className={classnames(classes.linkIcon)}>
								<Avatar src={link.icon} className={classes.icon} />
							</ListItemIcon>
							<ListItemText
								classes={{
									primary: classnames(classes.linkText),
								}}
								primary={link.label}
							/>
						</ListItem>
					))}
				</List>
				<Box className={classes.copyright}>
					<img
						src={footerLogo}
						alt="footer-logo"
						className={classes.footerLogo}
					/>
					<Typography className={classes.copyrightText}>
						© 2020 CorkOwl, All Rights Reserved.
					</Typography>
					<Box className={classes.collapseIconContainer}>
						<ArrowBackIcon
							style={{ color: '#fff' }}
							classes={{
								root: classNames(classes.collapseIcon),
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Drawer>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		wrapper: {
			height: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column',
		},
		menuButton: {
			marginLeft: 12,
			marginRight: 36,
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
		},
		drawerOpen: {
			width: drawerWidth,
			height: '100%',
			overflowY: 'initial',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		drawerClose: {
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			overflowX: 'hidden',
			width: theme.spacing(7) + 40,
			[theme.breakpoints.down('sm')]: {
				width: drawerWidth,
			},
		},
		toolbar: {
			...theme.mixins.toolbar,
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		mobileBackButton: {
			marginTop: theme.spacing(0.5),
			marginLeft: 18,
			[theme.breakpoints.only('sm')]: {
				marginTop: theme.spacing(0.625),
			},
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		icon: {
			width: 24,
			height: 24,
		},
		linkIcon: {
			minWidth: 40,
		},
		linkRoot: {
			paddingTop: 10,
			paddingBottom: 10,
		},
		linkActive: {
			color: '#811434',
			background: '#F7F1F3',
			borderRight: '3px solid',
			borderRightColor: '#811434',
		},
		sidebarList: {
			paddingTop: 0,
		},
		copyright: {
			padding: '10px 20px',
			textAlign: 'left',
			marginBottom: 10,
			position: 'relative',
		},
		footerLogo: {
			width: 100,
			marginBottom: 10,
		},
		copyrightText: {
			fontSize: 12,
			color: '#8C8CA1',
		},
		collapseIconContainer: {
			background: '#EF4859',
			width: 30,
			height: 30,
			borderRadius: '50%',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			right: -15,
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'pointer',
		},
		collapseIcon: {},
	}),
);

export default Sidebar;
