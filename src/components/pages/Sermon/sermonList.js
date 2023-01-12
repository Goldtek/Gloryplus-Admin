import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { fetchSermonList } from "../../../redux/actions";
import Button from '@material-ui/core/Button';
import { Header, SideBar } from "../../partials";
import { SermonCard } from "./sermonCard";
import { LoaderCard, InfoCard } from "../Helpers"


const SermonList = ({ fetchSermonList, sermonData }) => {

  useEffect(() => {
    // document.getElementById("sermon").classList.add("active");
    fetchSermonList();
  }, [fetchSermonList]);


  return (
    <React.Fragment>
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />

          <div className="content-inner">
            <div className="page-content">

          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="#">Sermon List</a></li>
                  </ol>
                </nav>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <Button variant="contained" href="dashboard/sermon/create" color="primary">
                      Create Sermon
                </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {sermonData.loading ? (
                <LoaderCard />

              ) : sermonData.error ? (
                <InfoCard error={sermonData.error + " " + "Please check your connection"} />

              ) : (
                    <Fragment>
                      {sermonData.sermonItems.length ? (
                        sermonData.sermonItems.map(({ sermontitle, coverimg, preview, sermontype }) => (
                          <SermonCard title={sermontitle} coverimg={coverimg} src={preview} sermontype={sermontype} />
                        ))

                      ) : <InfoCard info="No assignment to display, please create new assignment" />}

                    </Fragment>
                  )}
            </div>
          </div>

        </div>
          </div>
        </div>
    </React.Fragment>
  );

}

SermonList.propTypes = {
  fetchSermonList: PropTypes.func.isRequired,
  sermonData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sermonData: state.sermon
});
export default connect(mapStateToProps, {  })(SermonList);
