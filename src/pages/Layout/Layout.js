import React from 'react';
import classnames from 'classnames';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useLayoutState } from 'context/LayoutContext';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import Dashboard from 'pages/Dashboard/Dashboard';

export default function Layout() {
	const classes = useStyles();
	const layoutState = useLayoutState();

	return (
		<>
			<Header />
			<Sidebar />
			<div
				className={classnames(classes.content, {
					[classes.contentShift]: layoutState.isSidebarOpened,
				})}
			>
				<Dashboard />
			</div>
		</>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			maxWidth: '100vw',
			overflowX: 'hidden',
		},
		content: {
			flexGrow: 1,
			padding: '24px 30px',
			width: `calc(100vw - 250px)`,
			minHeight: '100vh',
			marginTop: 65,
		},
		contentShift: {
			width: `calc(100vw - ${250 + theme.spacing(6)}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
	}),
);
