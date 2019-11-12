import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import moment from 'moment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'auto'
  },
  table: {
    minWidth: 650
  }
});

const BagInfoTable = props => {
  const { bagInfo } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
            <TableCell align="right">{bagInfo.duration.toFixed(2)}秒</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              start
            </TableCell>
            <TableCell align="right">
              {moment(bagInfo.start).format('YYYY/MM/DD HH:mm:ss')}:
              {bagInfo.start}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              end
            </TableCell>
            <TableCell align="right">
              {' '}
              {moment(bagInfo.end).format('YYYY/MM/DD HH:mm:ss')}:{bagInfo.end}
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
              types
            </TableCell>
            <TableCell align="right">
              {Object.keys(bagInfo.types).map(type => {
                return <div>{type}</div>;
              })}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              types
            </TableCell>
            <TableCell align="right">
              {Object.keys(bagInfo.messageCount.topics).map(topic => {
                const { datatype, count } = bagInfo.messageCount.topics[topic];
                return (
                  <div>
                    Topic: {topic} Datatype: {datatype} Count: {count}
                  </div>
                );
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

BagInfoTable.propTypes = {
  bagInfo: PropTypes.object.isRequired
};

export default BagInfoTable;
