import React, { useEffect, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
// import PuffLoader from "react-spinners/PuffLoader";
import Button from "@material-ui/core/Button";

import { Header, SideBar, firestore } from "../../partials";
import { Card } from "./cards/courseCard";
import { LoaderCard, InfoCard } from "../Helpers";
import { handleError } from "../../util";

const CourseLists = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
     document.getElementById("gpa").classList.add("active");
     fetchCourseLists();
  }, []);

  const fetchCourseLists = async () => {
    await firestore.collection('courses')
    .onSnapshot((querySnapshot) => {
      const results = [];
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });
      console.log('results', results)
      setCourses(results);
      setLoading(false);
    }, handleError);
  }

  let history = useHistory();
  return (
    <React.Fragment>
      <Helmet>
        <title>Course List</title>
      </Helmet>
      <Header />
      <SideBar />
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/dashboard/">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Course List</a>
                  </li>
                </ol>
              </nav>
            </div>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    variant="contained"
                    href="dashboard/gpa/create"
                    color="primary"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Create Lesson
                  </Button>{" "}
                  <Button
                    onClick={() => history.goBack()}
                    variant="contained"
                    color="secondary"
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              {isLoading ? (
                <LoaderCard />
              ) : courses.error ? (
                <InfoCard error={courses.error} />
              ) : (
                <Fragment>
                  {courses.length ? (
                    courses.map((course) => (
                      <Card
                        title={course.title}
                        created={course.created}
                        key={course.id}
                        id={course.id}
                        btnTitle="Lesson"
                      />
                    ))
                  ) : (
                    <InfoCard info="No course available,please create a new course" />
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default CourseLists;
