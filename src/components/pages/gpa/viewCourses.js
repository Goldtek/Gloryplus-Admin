import React, { useEffect, useState, Fragment } from "react";
import { Helmet } from "react-helmet";
import { handleError } from "../../util";
import { Header, SideBar, PageHeaderTitle, Footer, firestore } from "../../partials";
import { CourseCard } from "./courseCard";
import { Card } from "./cards/courseCard";
import { LoaderCard, InfoCard } from "../Helpers";

// import Content from "../main";
const ViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.getElementById("gpa").classList.add("active");
    fetchCourseLists();
  },[]);

   const fetchCourseLists = async () => {
    console.log('fetch courses');
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



    return (
      <div className="page">
        <Helmet>
          <title>course list</title>
        </Helmet>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            {/* <!-- Page Header--> */}
            <PageHeaderTitle title="GloryPlus International Academy" currpg="Course List" />
            <div className="container-fluid">
              {/* <!-- end row--> */}
              <section>
                <div class="card">
                  <div class="card-header">
                    <h4>Course List</h4>
                  </div>
                </div>
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
                        image={course.img}
                      />
                    ))
                  ) : (
                    <InfoCard info="No course available,please create a new course" />
                  )}
                </Fragment>
              )}
            </div>
              </section>

              {/* <!-- end row--> */}
            </div>
            <Footer />
          </div>
        </div>
        {/* CLOSE SIDE BAR */}
      </div>
    );
  }


export default ViewCourses;
