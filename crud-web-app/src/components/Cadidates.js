import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./../actions/candidate";

const Candidates = (props) => {
  // const [(state), set(state)] = useState(initialState);

  //UseEffect has a callback function that is called everytime the state changes
  useEffect(() => {
    props.fetchAllCandidates();
  }, []); //componentDidMount

  return <div>Candidates</div>;
};

//Connect parameter
const mapStateToProps = (state) => ({
  candidateList: state.Candidate.list,
});

const mapActionToProps = {
  fetchAllCandidates: actions.fetchAll,
};

//Connect is a function that returns another function as the parameter (in case, the component)
export default connect(mapStateToProps, mapActionToProps)(Candidates);
