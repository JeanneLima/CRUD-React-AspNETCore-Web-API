import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/candidate";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  withStyles,
} from "@material-ui/core";
import CandidateForm from "./CadidateForm";

const styles = (theme) => ({
  root: {
    "& .MuiTableCell-head": {
      fontSize: "1.25rem",
    },
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
});

//props.classes
//const [classes, ...props] = props
//const {clases, props} = props

const Candidates = ({ classes, ...props }) => {
  // const [(state), set(state)] = useState(initialState);

  //UseEffect has a callback function that is called everytime the state changes
  useEffect(() => {
    props.fetchAllCandidates();
  }, []); //componentDidMount

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <CandidateForm />
        </Grid>
        <Grid item xs={6}>
          <TableContainer>
            <Table>
              <TableHead className={classes.root}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Blood Group</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.candidateList.map((record, index) => {
                  return (
                    <TableRow key={index} hover>
                      <TableCell>{record.fullName}</TableCell>
                      <TableCell>{record.mobile}</TableCell>
                      <TableCell>{record.bloodGroup}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Paper>
  );
};

//Connect parameter
const mapStateToProps = (state) => ({
  candidateList: state.Candidate.list,
});

const mapActionToProps = {
  fetchAllCandidates: actions.fetchAll,
};

//Connect is a function that returns another function as the parameter (in case, the component)
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Candidates));
