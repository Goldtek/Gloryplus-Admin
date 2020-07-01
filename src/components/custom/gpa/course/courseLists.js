import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { fetchCourseLists } from "../../../../redux/actions/courseActions";
import { Header, SideBar, BreadCrumb, Footer } from "../../../partials";
import { Card } from "../cards/courseCard";

const ListCourses = ({ fetchCourseLists, courseData }) => {

  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
    fetchCourseLists();
  }, [fetchCourseLists]);

  let history = useHistory()
  return (
    <div className="page">
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />
        <div className="content-inner">
          <BreadCrumb title="GPA" crumb="Course List" />
          <div className="container-fluid">
            <section>
              <div className="card">
                <div className="card-header">
                  <Button variant="contained" href="dashboard/gpa/create" color="primary">
                    Create Course
                  </Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

                </div>
              </div>
              <div className="row">

                {courseData.loading ? (
                  <div className="col-md-4 col-lg-4 col-sm-12" style={{ margin: "0 auto" }}>
                    <div className="sweet-loading">
                      <PuffLoader
                        size={60}
                        color={"#123abc"}
                        loading={courseData.loading}
                      />
                  Please Wait...
                  </div>
                  </div>

                ) : courseData.error ? (
                  <h2>{courseData.error}</h2>
                ) : (
                      <Fragment>


                        {courseData.courseItems.length ? (

                          courseData.courseItems.map((course) => (
                            <Card
                              title={course.title}
                              created={course.created}
                              key={course.id}
                              id={course.id}
                              //    url={match.url}
                              //    courses={this.props.courses}
                              btnTitle="Lesson"
                            />))

                        ) : <div className="col-md-6 col-lg-3 col-sm-12" style={{ margin: "0 auto" }}>

                            <div className="card"><img src="img/alert/error.jpg" alt="info" className="card-img-top img-fluid" />
                              <div className="card-body">
                                <h5 className="card-title">INFO</h5>
                                <p className="card-text">NO COURSE HAS BEEN POSTED YET!</p>
                              </div>

                            </div>
                          </div>}

                      </Fragment>
                    )}
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );

}

ListCourses.propTypes = {
  fetchCourseLists: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  courseData: state.courses
});
export default connect(mapStateToProps, { fetchCourseLists })(ListCourses);
