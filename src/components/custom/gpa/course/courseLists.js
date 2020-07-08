import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { fetchCourseLists } from "../../../../redux/actions/courseActions";
import { Header, SideBar, BreadCrumb, Footer } from "../../../partials";
import { Card } from "../cards/courseCard";
import { LoaderCard, InfoCard } from "../../_helpers"
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
                  <LoaderCard />

                ) : courseData.error ? (
                  <InfoCard error={courseData.error} />

                ) : (
                      <Fragment>
                        {courseData.courseItems.length ? (
                          courseData.courseItems.map((course) => (
                            <Card
                              title={course.title}
                              created={course.created}
                              key={course.id}
                              id={course.id}
                              btnTitle="Lesson"
                            />))

                        ) : <InfoCard info="No course available,please create a new course" />}

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
