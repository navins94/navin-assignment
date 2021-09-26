import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Checkbox from '@material-ui/core/Checkbox';
import { vines } from 'assets/data/Vines';
import editIcon from 'assets/images/edit.png';
import deleteIcon from 'assets/images/delete.png';
import { Typography, Box, Grid } from '@material-ui/core';

export default function CommonTable() {
	const classes = useStyles();

	const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
		const [isExpanded, setIsExpanded] = React.useState(false);

		return (
			<>
				<TableRow {...otherProps}>
					{children}
					<TableCell padding="checkbox">
						<IconButton onClick={() => setIsExpanded(!isExpanded)}>
							{isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
				</TableRow>
				{isExpanded && (
					<TableRow className={classes.expandedContainer}>
						<TableCell padding="checkbox" />
						{expandComponent}
					</TableRow>
				)}
			</>
		);
	};

	const ExpandedContent = (row) => {
		return (
			<TableCell colspan="8">
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					style={{
						borderBottom: '1px solid #FFF2EE',
						paddingBottom: 10,
						marginBottom: 10,
					}}
				>
					<Box>
						<Typography className={classes.productName}>
							{row.data.name}
						</Typography>
						<Box display="flex" justifyContent="space-between">
							<Typography className={classes.region}>
								<b>Region:</b>
								{row.data.country}
							</Typography>
							<Typography style={{ marginLeft: 20 }} className={classes.region}>
								<b>Vintage:</b>
								{row.data.vintage}
							</Typography>
						</Box>
					</Box>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Typography className={classes.viewButton}>View Wine</Typography>
						<IconButton aria-label="edit" component="span">
							<img src={editIcon} alt="edit" className={classes.icon} />
						</IconButton>
						<IconButton aria-label="delete" component="span">
							<img src={deleteIcon} alt="edit" className={classes.icon} />
						</IconButton>
					</Box>
				</Box>
				<Box>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<Typography>Rating</Typography>
							<Grid container spacing={2}>
								{row.data.ratingExpanded.map((rate, i) => (
									<Grid item xs={4}>
										<Typography className={classes.ratedByText}>
											{rate.ratedBy}
										</Typography>
										<span className={classes.ratings} key={i}>
											{rate.value}
										</span>
									</Grid>
								))}
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Typography>Stock</Typography>
							<Grid container spacing={2}>
								{row.data.stock.map((store, i) => (
									<Grid item xs={4}>
										<Typography className={classes.ratedByText}>
											{store.store}
										</Typography>
										<span className={classes.stock} key={i}>
											{store.value}
										</span>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</TableCell>
		);
	};

	const onSelectAllClick = (event) => {};

	return (
		<Paper className={classes.root}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell padding="checkbox">
							<Checkbox onChange={onSelectAllClick} />
						</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Rating</TableCell>
						<TableCell>Vintage</TableCell>
						<TableCell>Qty</TableCell>
						<TableCell>Volume</TableCell>
						<TableCell>Cost</TableCell>
						<TableCell>Price</TableCell>
						<TableCell padding="checkbox" />
					</TableRow>
				</TableHead>
				<TableBody>
					{vines.map((row, index) => (
						<ExpandableTableRow
							key={index}
							expandComponent={<ExpandedContent data={row} />}
						>
							<TableCell className="selectCheckbox" padding="checkbox">
								<Checkbox />
							</TableCell>
							<TableCell>
								<Box display="flex" alignItems="center">
									<img
										src={row.image}
										alt={row.name}
										className={classes.productIcon}
									/>
									<Box>
										<Typography className={classes.productName}>
											{row.name}
										</Typography>
										<Typography className={classes.region}>
											{row.country}
										</Typography>
									</Box>
								</Box>
							</TableCell>
							<TableCell>
								<Box>
									{row.rating.map((rate, i) => (
										<span className={classes.ratings} key={i}>
											{rate}
										</span>
									))}
								</Box>
							</TableCell>
							<TableCell>{row.vintage}</TableCell>
							<TableCell>{row.quantity}</TableCell>
							<TableCell>{row.volume}</TableCell>
							<TableCell>{row.cost}</TableCell>
							<TableCell>
								<Typography className={classes.price}>{row.price}</Typography>
							</TableCell>
						</ExpandableTableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			width: '100%',
			overflowX: 'auto',
			boxShadow: 'none',
			borderTop: '1px solid #ECF1F4',
			marginTop: 20,
			'& th': {
				color: '#485572',
				textTransform: 'uppercase',
				padding: '5px 10px',
			},
			'& td': {
				color: '#8C8CA1',
				paddingLeft: 10,
				fontSize: 14,
			},
		},
		table: {
			minWidth: 650,
		},
		productIcon: {
			width: 48,
			height: 48,
			borderRadius: 2,
			marginRight: 10,
		},
		productName: {
			color: '#262730',
			fontSize: 14,
		},
		region: {
			color: '#8C8CA1',
			fontSize: '12px',
			'& b': {
				color: '#000',
				marginRight: 5,
			},
		},
		price: {
			color: '#262730',
			fontSize: '12px',
		},
		ratings: {
			color: '#485572',
			background: '#f4f7ff',
			padding: '4px 7px',
			'&:first-child': {
				marginRight: 5,
			},
		},
		stock: {
			color: '#811434',
			background: '#FFF2EE',
			padding: '4px 7px',
			'&:first-child': {
				marginRight: 5,
			},
		},
		viewButton: {
			marginRight: 10,
			color: '#EF4859',
			textDecoration: 'underline',
		},
		icon: {
			width: 18,
		},
		ratedByText: {
			color: '#262730',
			fontSize: '14px',
			marginBottom: 5,
			marginTop: 5,
		},
		expandedContainer: {
			borderRight: '3px solid #ECF1F4',
			borderLeft: '2px solid #ECF1F4',
		},
	}),
);
