import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    const { projects,auth,notifications } = this.props;    
    if(!auth.uid)
      return <Redirect to='/signin' />
    // Redirecting to the sigin page if the user is not logged in
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    auth:state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};


export default compose( // using compose since we have more than one higher order component
  connect(mapStateToProps),
  firestoreConnect([    // to connect the folllowing firebase collection to this component
    { collection:'projects', orderBy:['createdAt','desc'] },
    { collection: 'notifications',limit: 3, orderBy:['time','desc']}
  ])
  )(Dashboard)
  
  // compose -> to compose different store enhancers or two compose two different higher order components
  // export default connect(mapStateToProps, null)(Dashboard);