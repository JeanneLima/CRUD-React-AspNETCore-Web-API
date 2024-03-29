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
  ButtonGroup,
  Button,
  withStyles,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import CandidateForm from "./CadidateForm";
import { useToasts } from "react-toast-notifications";

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
  const [currentId, setCurrentId] = useState(0);

  //UseEffect has a callback function that is called everytime the state changes
  useEffect(() => {
    props.fetchAllCandidates();
  }, [props]); //componentDidMount

  //Toast messages
  const { addToast } = useToasts();

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?"))
      props.deleteCandidates(id, () =>
        addToast("Deleted sucessfully.", { appearance: "info" })
      );
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid container>
        <Grid item xs={6}>
          <CandidateForm {...{ currentId, setCurrentId }} />
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
                      <ButtonGroup variant="text">
                        <Button>
                          <EditIcon
                            color="primary"
                            onClick={() => {
                              setCurrentId(record.id);
                            }}
                          />
                        </Button>
                        <Button>
                          <DeleteIcon
                            color="secondary"
                            onClick={() => {
                              onDelete(record.id);
                            }}
                          />
                        </Button>
                      </ButtonGroup>
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

//Connect parameters
const mapStateToProps = (state) => ({
  candidateList: state.Candidate.list,
});

const mapActionToProps = {
  fetchAllCandidates: actions.fetchAll,
  deleteCandidates: actions.Delete,
};

//Connect is a function that returns another function as the parameter (in case, the component)
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Candidates));

// fullName: "Lucia Hernandez",
// mobile: "21990000000",
// email: "lucia.hernandez@gmail.com",
// age: "43",
// bloodGroup: "A+",
// address: "Rua Estevão Silva, 20, Cachambi - RJ, Rio de Janeiro - 20770-460"
