import React from 'react';
import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

export default function PageTitle(props) {
	const classes = useStyles();
	return (
		<div className={classes.pageTitleContainer}>
			<Typography className={classes.heading} variant="h1" size="sm">
				{props.title}
			</Typography>
			{props.button && props.button}
		</div>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		pageTitleContainer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			marginBottom: theme.spacing(4),
		},
		heading: {
			fontSize: 18,
			color: '#8C8CA1',
		},
	}),
);
