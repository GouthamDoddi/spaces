import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        overflow: 'visible',
      },
    tabs: {
        height: 'max-content',
        width: '75%',
        overflow: 'inherit',
      },
    buttons: {
        overflow: 'visible',
        marginLeft: '18%',
      },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [];
  const tabPanel = [];

  for (let n = 0; n < props.noOfTabs ; n++) {
      console.log(props.noOfTabs)
      tabs.push(<Tab label={`Item ${n}`} {...a11yProps(n)} />)
      tabPanel.push(<TabPanel value={value} index={n}>
        { props.buttons[n] }
      </TabPanel>)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor={'secondary'}
      >
        {
            [...Array(props.noOfTabs)].map((x, i) => <Tab className={classes.buttons} key={i} label={props.buttons[i]} {...a11yProps(i)} />)
        }
      </Tabs>
        {
            [...Array(props.noOfTabs)].map((x, i) => <TabPanel key={i} value={value} index={i}>
            {props.pages[i]}
          </TabPanel>)
        }
    </div>
  );
}
