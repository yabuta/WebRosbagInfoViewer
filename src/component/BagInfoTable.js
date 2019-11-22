import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  tableWrapper: {
    margin: theme.spacing(6)
  },
  title: {
    margin: theme.spacing(2),
    textAlign: 'center'
  },
  expand: {
    maxWidth: '90%',
    margin: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  table: {
    maxWidth: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  tableExpand: {
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto'
  },
  tableHeaderCell: {
    whiteSpace: 'nowrap'
  }
}));

const BagInfoTable = props => {
  const { bagInfo } = props;
  const classes = useStyles();

  console.log(bagInfo);

  return (
    <div className={classes.root}>
      <div className={classes.tableWrapper}>
        <div className={classes.title}>
          <Typography component="h5">詳細</Typography>
        </div>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>項目</TableCell>
              <TableCell align="right">値</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                version
              </TableCell>
              <TableCell align="right">{bagInfo.version}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                duration
              </TableCell>
              <TableCell align="right">
                {bagInfo.duration.toFixed(2)}秒
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                start date
              </TableCell>
              <TableCell align="right">
                <div>{moment(bagInfo.start).format('YYYY/MM/DD HH:mm:ss')}</div>
                <div>unix time: {(bagInfo.start / 1000).toFixed(2)}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                end date
              </TableCell>
              <TableCell align="right">
                <div>{moment(bagInfo.end).format('YYYY/MM/DD HH:mm:ss')}</div>
                <div>unix time: {(bagInfo.end / 1000).toFixed(2)}</div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                size
              </TableCell>
              <TableCell align="right">{bagInfo.size}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                chunkNum
              </TableCell>
              <TableCell align="right">{bagInfo.chunkNum}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                messages
              </TableCell>
              <TableCell align="right">
                {bagInfo.messageCount.totalNum}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className={classes.expand}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={classes.title}>
                <Typography component="h5">タイプリスト</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.tableExpand}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableHeaderCell}
                    >
                      タイプ名
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    {Object.keys(bagInfo.types)
                      .sort()
                      .map(name => {
                        return (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              {name}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={classes.expand}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className={classes.title}>
                <Typography component="h5">トピック詳細</Typography>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className={classes.tableExpand}>
                <Table
                  aria-label="simple table"
                  className={classes.tableExpand}
                >
                  <TableHead>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableHeaderCell}
                    >
                      topic名
                    </TableCell>
                    <TableCell
                      align="right"
                      className={classes.tableHeaderCell}
                    >
                      メッセージ数
                    </TableCell>
                    <TableCell
                      align="right"
                      className={classes.tableHeaderCell}
                    >
                      型
                    </TableCell>
                  </TableHead>
                  <TableBody>
                    {Object.keys(bagInfo.messageCount.topics)
                      .sort()
                      .map(name => {
                        return (
                          <TableRow>
                            <TableCell component="th" scope="row">
                              {name}
                            </TableCell>
                            <TableCell align="right">
                              {bagInfo.messageCount.topics[name].count} msgs
                            </TableCell>
                            <TableCell align="right">
                              {bagInfo.messageCount.topics[name].datatype}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    </div>
  );
};

BagInfoTable.propTypes = {
  bagInfo: PropTypes.object.isRequired
};

export default BagInfoTable;
