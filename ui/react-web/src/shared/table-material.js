/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Progress } from '../pages/entities/list';

const useStyles = makeStyles({
  table: {
    minWidth: 650,   
  },
  row: {
    height: '65px',
  }
});

export default function BasicTable ({ tableCells, rows, renderCol, keyField }) {
  const classes = useStyles();
  renderCol = renderCol || (() => undefined);

  return (
    <TableContainer component={Paper}>
      <Table size='small' className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            { tableCells.map(({ headline }, index) => (
              <TableCell key={index} align="right">{headline} <SortIcon /> </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) =>
            <TableRow className={classes.row} key={row[keyField]}>
              {tableCells.map(({ key }, colIndex) => 
                <Fragment key={key}>
                  <TableCell>
                    {renderCol(colIndex, row[tableCells[colIndex]?.key], rowIndex, row) || row[tableCells[colIndex]?.key]}
                  </TableCell>
                </Fragment>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SortIcon = () =>(
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="12" height="12" viewBox="0 0 401.998 401.998" xmlSpace="preserve">
    <g>
      <g>
        <path d="M73.092,164.452h255.813c4.949,0,9.233-1.807,12.848-5.424c3.613-3.616,5.427-7.898,5.427-12.847    c0-4.949-1.813-9.229-5.427-12.85L213.846,5.424C210.232,1.812,205.951,0,200.999,0s-9.233,1.812-12.85,5.424L60.242,133.331    c-3.617,3.617-5.424,7.901-5.424,12.85c0,4.948,1.807,9.231,5.424,12.847C63.863,162.645,68.144,164.452,73.092,164.452z"/>
        <path d="M328.905,237.549H73.092c-4.952,0-9.233,1.808-12.85,5.421c-3.617,3.617-5.424,7.898-5.424,12.847    c0,4.949,1.807,9.233,5.424,12.848L188.149,396.57c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428l127.907-127.906    c3.613-3.614,5.427-7.898,5.427-12.848c0-4.948-1.813-9.229-5.427-12.847C338.139,239.353,333.854,237.549,328.905,237.549z"/>
      </g>
    </g>
  </svg>
);
