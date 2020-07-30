import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import PuffLoader from "react-spinners/PuffLoader";
import Button from '@material-ui/core/Button';
import { fetchCourseLists } from "../../../../Redux/actions/courseActions";
import { Header, SideBar, BreadCrumb, Footer } from "../../../Partials";
import { Card } from "../cards/courseCard";
import { LoaderCard, InfoCard } from "../../Helpers"
import { Helmet } from 'react-helmet';
const CourseLists = ({ fetchCourseLists, courseData }) => {

  useEffect(() => {
    // document.getElementById("gpa").classList.add("active");
    fetchCourseLists();
  }, [fetchCourseLists]);

  let history = useHistory()
  return (
    <React.Fragment>
      <Helmet><title>Course List</title></Helmet>
      <Header />
      <SideBar />
      <div className="page-content">

        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#">Course List</a></li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button variant="contained" href="dashboard/gpa/create" color="primary" style={{ textDecoration: 'none', color: 'white' }}>
                    Create Course
          </Button>
                  {" "}
                  <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
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
          </div>

        </div>

      </div>

    </React.Fragment>
  );

}

CourseLists.propTypes = {
  fetchCourseLists: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  courseData: state.courses
});
export default connect(mapStateToProps, { fetchCourseLists })(CourseLists);
