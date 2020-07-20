import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchSermonList } from "Redux/actions/sermonActions";
import Button from '@material-ui/core/Button';
import { Header, SideBar, BreadCrumb, Footer } from "../../Partials";
import { SermonCard } from "./sermonCard";
import { LoaderCard, InfoCard } from "../Helpers"


const SermonList = ({ fetchSermonList, sermonData }) => {

  useEffect(() => {
    document.getElementById("sermon").classList.add("active");
    fetchSermonList();
  }, [fetchSermonList]);


  return (
    <div className="page">
      <Header />
      <div className="page-content d-flex align-items-stretch">
        <SideBar />
        <div className="content-inner">
          {/* <!-- Page Header--> */}
          <BreadCrumb title="Sermon" crumb="Sermon List" />
          <div className="container-fluid">
            <section>
              <div className="card">
                <div className="card-header">
                  <Button variant="contained" href="dashboard/sermon/create" color="primary">
                    Create Sermon
              </Button>

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
            </section>
          </div>
          <Footer />
        </div>
      </div>

    </div>
  );

}

SermonList.propTypes = {
  fetchSermonList: PropTypes.func.isRequired,
  sermonData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  sermonData: state.sermon
});
export default connect(mapStateToProps, { fetchSermonList })(SermonList);
