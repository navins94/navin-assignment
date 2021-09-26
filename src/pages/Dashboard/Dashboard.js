import React from 'react';
import { Grid, Divider, Typography, Button, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import CachedIcon from '@material-ui/icons/Cached';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import orderImage from 'assets/images/order.png';
import cancelledImage from 'assets/images/cancelled.png';
import transitImage from 'assets/images/transit.png';
import fullfieldImage from 'assets/images/fullfield.png';
import riseImage from 'assets/images/rise.png';

// Components
import PageTitle from 'components/PageTitle/PageTitle';
import Widget from 'components/Widget/Widget';
import LineChart from 'components/Charts/LineChart/LineChart';
import Table from 'components/Table/Table';

export default function Dashboard() {
	const classes = useStyles();
	return (
		<>
			<PageTitle
				title="Overview"
				button={
					<Button
						className={classes.addButton}
						variant="contained"
						startIcon={<ControlPointIcon />}
					>
						Add new wine
					</Button>
				}
			/>
			<Grid container spacing={4}>
				<Grid item lg={3} md={4} sm={6} xs={12}>
					<Widget
						title="Open orders"
						count="239"
						image={orderImage}
						shadowClass={classes.open}
					/>
				</Grid>
				<Grid item lg={3} md={8} sm={6} xs={12}>
					<Widget
						title="Orders in transit"
						count="126"
						image={transitImage}
						shadowClass={classes.transit}
					/>
				</Grid>
				<Grid item lg={3} md={8} sm={6} xs={12}>
					<Widget
						title="Fulfilled orders"
						count="1254"
						image={fullfieldImage}
						shadowClass={classes.fullfield}
					/>
				</Grid>
				<Grid item lg={3} md={4} sm={6} xs={12}>
					<Widget
						title="Cancelled orders"
						count="34"
						image={cancelledImage}
						shadowClass={classes.cancelled}
					/>
				</Grid>
			</Grid>
			<Box className={classes.salesContainer}>
				<Typography variant="h4" className={classes.title}>
					Sales Detail
				</Typography>
				<Box className={classes.salesWrapper}>
					<Box
						display="flex"
						width="100%"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography variant="h4" className={classes.overviewTitle}>
								Total Sales Overview
							</Typography>
							<Typography variant="body1" className={classes.date}>
								7 - 13 Aug, 2020
							</Typography>
						</Box>
						<Box display="flex" alignItems="center">
							<Button
								className={classes.refreshButton}
								variant="text"
								startIcon={<CachedIcon />}
							>
								Refresh Metrics
							</Button>
							<Box display="flex" alignItems="center">
								<Typography variant="body2" className={classes.filterText}>
									Filter by
								</Typography>
								<Divider
									orientation="vertical"
									flexItem
									className={classes.divider}
								/>
								<Button
									className={classes.filterButton}
									variant="text"
									endIcon={<KeyboardArrowDownIcon />}
								>
									This Week
								</Button>
							</Box>
						</Box>
					</Box>
					<Box className={classes.chartContainer}>
						<Divider className={classes.horizontalDivider} />
						<Box style={{ marginTop: 20 }}>
							<Grid container spacing={2}>
								<Grid item xs={9} style={{ borderRight: '1px solid #FFF2EE' }}>
									<Box
										display="flex"
										width="100%"
										justifyContent="space-between"
										style={{ marginBottom: 20 }}
									>
										<Box>
											<Typography variant="h2" className={classes.saleAmount}>
												$74729.00
											</Typography>
											<Typography
												variant="body1"
												className={classes.growthText}
											>
												<img
													src={riseImage}
													alt="rise"
													className={classes.riseIcon}
												/>
												+21% from last week
											</Typography>
										</Box>
										<Box>
											<Typography variant="h5" className={classes.compareText}>
												<img
													src={riseImage}
													alt="rise"
													className={classes.riseIcon}
												/>
												Highest revenue since 2 weeks ago
											</Typography>
										</Box>
									</Box>
									<LineChart />
								</Grid>
								<Grid item xs={3}>
									<Typography variant="h2" className={classes.profitTitle}>
										Total Profit
									</Typography>
									<Typography variant="h2" className={classes.profitTotalText}>
										$12545.00
									</Typography>
									<Typography variant="body1" className={classes.growthText}>
										<img
											src={riseImage}
											alt="rise"
											className={classes.riseIcon}
										/>
										+21% from last week
									</Typography>
									<Box style={{ marginTop: 20 }}>
										<Typography variant="h2" className={classes.soldText}>
											Total Products Sold
										</Typography>
										<Typography variant="body1" className={classes.soldAmount}>
											329
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
				<Box className={classes.inventoryContainer}>
					<Typography variant="h4" className={classes.title}>
						Inventory
					</Typography>
					<Box>
						<Table />
					</Box>
				</Box>
			</Box>
		</>
	);
}

const useStyles = makeStyles((theme) =>
	createStyles({
		addButton: {
			color: '#fff',
			background: '#EF4859',
		},
		open: {
			boxShadow: '0px -2px 0px #FFAA2C, 0px 2px 11px rgba(0, 0, 0, 0.06)',
		},
		transit: {
			boxShadow: '0px -2px 0px #2C67FF, 0px 2px 11px rgba(242, 242, 242, 0.5)',
		},
		fullfield: {
			boxShadow: '0px -2px 0px #00CF3A, 0px 2px 11px rgba(242, 242, 242, 0.5)',
		},
		cancelled: {
			boxShadow: '0px -2px 0px #FF1C1C, 0px 2px 11px rgba(242, 242, 242, 0.5)',
		},
		salesContainer: {
			marginTop: 30,
		},
		title: {
			fontSize: 16,
			color: '#262730',
			textAlign: 'left',
		},
		salesWrapper: {
			marginTop: 20,
			padding: 20,
			border: '1px solid #FFF2EE',
			borderRadius: 4,
		},
		overviewTitle: {
			fontSize: 14,
			textAlign: 'left',
			color: '#262730',
		},
		date: {
			fontSize: 12,
			textAlign: 'left',
			color: '#868686',
		},
		refreshButton: {
			color: '#485572',
			textTransform: 'capitalize',
			marginRight: 15,
		},
		filterText: {
			color: '#8C8CA1',
		},
		divider: {
			marginLeft: 5,
			height: 20,
			alignSelf: 'auto',
			backgroundColor: '#8C8CA1',
		},
		chartContainer: {
			marginTop: 20,
		},
		horizontalDivider: {
			backgroundColor: '#FFF2EE',
		},
		riseIcon: {
			width: 20,
			marginRight: 10,
		},
		saleAmount: {
			fontSize: 24,
			textAlign: 'left',
			marginBottom: 5,
		},
		growthText: {
			color: '#2FCA72',
			textAlign: 'left',
		},
		compareText: {
			fontSize: 14,
			color: '#262730',
		},
		profitTitle: {
			fontSize: 16,
			color: '#8C8CA1',
			textAlign: 'left',
		},
		profitTotalText: {
			marginTop: 10,
			marginBottom: 5,
			fontSize: 24,
			color: '#811434',
			textAlign: 'left',
		},
		soldText: {
			fontSize: 16,
			color: '#8C8CA1',
			textAlign: 'left',
		},
		soldAmount: {
			fontSize: 18,
			textAlign: 'left',
			marginTop: 5,
		},
		inventoryContainer: {
			marginTop: 20,
		},
	}),
);
