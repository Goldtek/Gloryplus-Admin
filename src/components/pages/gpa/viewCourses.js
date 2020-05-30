import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { fetchCourseLists } from "../../../redux/actions/courseActions";
// import { Link } from "react-router-dom";
import { Header, SideBar, PageHeaderTitle, Footer } from "../../partials";
import { CourseCard } from "./courseCard";

// import Content from "../main";
class ViewCourses extends React.Component {
  static propTypes = {
    fetchCourseLists: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
  };
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
            <PageHeaderTitle title="GPA" currpg="Course List" />
            <div className="container-fluid">
              {/* <!-- end row--> */}
              <section>
                <div class="card">
                  <div class="card-header">
                    <h4>Course List</h4>
                  </div>
                </div>
                <div className="row">
                  {this.props.courses.map((course) => (
                    <CourseCard
                      title={course.title}
                      created={course.created}
                      key={course.id}
                    />
                  ))}
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
}

const mapStateToProps = (state) => ({
  courses: state.courses.coursesItems,
});
export default connect(mapStateToProps, { fetchCourseLists })(ViewCourses);
