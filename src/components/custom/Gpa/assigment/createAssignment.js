import React, { useEffect, useState, Fragment } from "react";
// import { useHistory } from "react-router-dom"
import Helmet from "react-helmet";
import { AssigmentCards } from "../cards/assigmentCard";
import { connect } from "react-redux";
import { fetchAssignments } from "../../../../Redux/actions/assignmentActions";
import { Header, SideBar } from "../../../Partials";
// import PuffLoader from "react-spinners/PuffLoader";
import { LoaderCard, InfoCard } from "../../Helpers";
import CreateAssignmentDialog from "./dialog";
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::

const CreateAssignment = ({ fetchAssignments, assigmentData, match }) => {
  // let history = useHistory()

  const [lessonId, setLessonId] = useState("");

  useEffect(() => {
    setLessonId(match.params.id);
    // document.getElementById("gpa").classList.add("active");
    fetchAssignments();
  }, [fetchAssignments, match.params.id]);

  const assignment = assigmentData.assignmentItems.filter(
    (item) => item.lessonId === lessonId
  );
  return (
    <React.Fragment>
      <Helmet>
        <title>Create Assignment</title>
      </Helmet>

      <Header />
      <SideBar />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="page-title">Create Assigment</h2>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <CreateAssignmentDialog lessonID={lessonId} />
                </div>
              </div>
            </div>
          </div>

          <section>
            <div className="row">
              {assigmentData.loading ? (
                <LoaderCard />
              ) : assigmentData.error ? (
                <InfoCard
                  error={`${assigmentData.error} Please check your network connection`}
                />
              ) : (
                <Fragment>
                  {assignment.length ? (
                    assignment.map((assignment) => (
                      <AssigmentCards
                        key={assignment.id}
                        question={assignment.question}
                        created={assignment.created}
                        // id={lessonCourse.id}
                      />
                    ))
                  ) : (
                    <InfoCard info="No assignment to display, please create new assignment" />
                  )}
                </Fragment>
              )}
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  assigmentData: state.assignments,
});

export default connect(mapStateToProps, { fetchAssignments })(CreateAssignment);
