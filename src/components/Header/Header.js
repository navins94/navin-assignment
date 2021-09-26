import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
	Toolbar,
	Box,
	Avatar,
	Typography,
	Menu,
	MenuItem,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from 'assets/images/logo.png';
import userimg from 'assets/images/userImage.png';
import { styled, alpha } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/NotificationsNone';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#fff',
	'&:hover': {
		backgroundColor: '#fff',
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: '8px 8px 8px calc(1em + 32px)',
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		color: '#000',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '35ch',
		},
	},
}));

export default function Header() {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Box className={classes.logoContainer}>
					<img src={logo} alt="Kitty Katty!" className={classes.logo} />
				</Box>
				<Search>
					<SearchIconWrapper>
						<SearchIcon style={{ color: '#8C8CA1' }} />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search wines, customers here..."
						inputProps={{ 'aria-label': 'search' }}
					/>
				</Search>
				<Box sx={{ flexGrow: 1 }} />
				<Box>
					<IconButton
						color="inherit"
						aria-haspopup="true"
						aria-controls="mail-menu"
						className={classes.headerMenuButton}
					>
						<NotificationsIcon style={{ color: '#fff' }} />
					</IconButton>
				</Box>
				<Button
					aria-label="menu"
					color="inherit"
					aria-controls="profile-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<Box
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Typography
							style={{
								marginRight: 10,
							}}
						>
							Nicholas D.
						</Typography>
						<Avatar
							src={userimg}
							alt={userimg}
							style={{
								width: '30px',
								height: '30px',
							}}
						/>
						<KeyboardArrowDownIcon
							style={{
								marginLeft: 10,
							}}
						/>
					</Box>
				</Button>
				<Menu
					id="profile-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					className={classes.menuContainer}
				>
					<MenuItem onClick={handleClose}>
						<Avatar
							style={{
								width: '35px',
								height: '35px',
							}}
						/>
						<Box
							style={{
								marginLeft: 10,
							}}
						>
							My account
						</Box>
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
}

const useStyles = makeStyles((Theme) =>
	createStyles({
		appBar: {
			flexGrow: 1,
			backgroundColor: '#811434',
			width: '100vw',
			zIndex: Theme.zIndex.drawer + 1,
			transition: Theme.transitions.create(['margin'], {
				easing: Theme.transitions.easing.sharp,
				duration: Theme.transitions.duration.leavingScreen,
			}),
		},
		menuButton: {
			marginRight: Theme.spacing(2),
		},
		title: {
			flexGrow: 1,
			textAlign: 'center',
		},
		logo: {
			maxWidth: 135,
			marginRight: '10px',
		},
		logoContainer: {
			width: 250,
			display: 'flex',
		},
		menuContainer: {
			width: '250px',
			right: 0,
			top: '50px !important',
		},
	}),
);
