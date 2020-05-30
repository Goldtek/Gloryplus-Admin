import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { fetchCourseLists } from "../../../redux/actions/courseActions";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle } from "../../partials";
import { CourseCard } from "./courseCard";

// import Content from "../main";
class ViewCourses extends React.Component {
  // useEffect(() => {
  //   document.getElementById("gpa").classList.add("active");
  // });

  componentDidMount() {
    document.getElementById("gpa").classList.add("active");

    this.props.fetchCourseLists();
  }
  render() {
    return (
      <div className="page">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        {/* HEADER PART */}
        <Header />
        {/* CLOSE HEADER PART */}

        {/* SIDER BAR PART */}
        <div className="page-content d-flex align-items-stretch">
          <SideBar />

          <div className="content-inner">
            {/* <!-- Page Header--> */}
            <PageHeaderTitle title="GPA" currpg="List Course" />
            <div className="container-fluid">
              {/* <!-- end row--> */}
              <h4 className="mt-5 mb-4">GPA Courses</h4>
              <div className="row">
                {this.props.courses.map((course) => (
                  <CourseCard
                    title={course.title}
                    created={course.created}
                    key={course.id}
                  />
                ))}
              </div>
              {/* <!-- end row--> */}
            </div>
          </div>
        </div>
        {/* CLOSE SIDE BAR */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses.coursesItems,
});
export default connect(mapStateToProps, { fetchCourseLists })(ViewCourses);
