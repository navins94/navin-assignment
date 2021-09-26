import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

export default function Widget({ title, image, shadowClass, count }) {
	const classes = useStyles();
	return (
		<>
			<Box>
				<Paper
					className={classnames(classes.paper, {
						[shadowClass]: shadowClass,
					})}
				>
					<Box
						display="flex"
						width="100%"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography className={classes.widgetTitle} variant="h4">
							{title}
						</Typography>
						<img src={image} alt="order" className={classes.widgetIcon} />
					</Box>
					<Typography className={classes.widgetcount} variant="h5">
						{count}
					</Typography>
				</Paper>
			</Box>
		</>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		widgetTitle: {
			fontSize: 14,
			color: '#8C8CA1',
			textAlign: 'left',
		},
		widgetcount: {
			fontSize: 16,
			textAlign: 'left',
		},
		paper: {
			padding: '15px 10px',
		},
		widgetIcon: {
			width: 25,
		},
	}),
);
