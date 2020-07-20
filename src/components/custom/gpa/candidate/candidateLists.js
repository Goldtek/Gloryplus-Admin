import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"
import Button from '@material-ui/core/Button';
import { fetchCandidates } from "Redux/actions/candidateActions";
import { Header, SideBar, BreadCrumb, Footer } from "../../../Partials";
import { LoaderCard, InfoCard } from "../../Helpers"
import CandidateTables from "./CandidateTables"

const CandidateLists = ({ fetchCandidates, candidateData }) => {
    useEffect(() => {
        document.getElementById("gpa").classList.add("active");
        fetchCandidates();
    }, [fetchCandidates]);

    let history = useHistory()

    const candidates = candidateData.candidateItems.filter(el => el.gpa === true);
    // const candidates = candidateData.candidateItems.find(el => el.gpa === true)
    return (
        <div className="page">
            <Header />
            <Helmet>
                <title>GPA Candidates</title>
            </Helmet>
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

                        </section>
                        <div>
                            {/* <CandidateTables /> */}
                            {candidateData.loading ? (
                                <LoaderCard />

                            ) : candidateData.error ? (
                                <InfoCard error={candidateData.error} />

                            ) : (
                                        <Fragment>
                                            <CandidateTables candidates={candidates} />
                                        </Fragment>



                                    )}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );

}

CandidateLists.propTypes = {
    fetchCandidates: PropTypes.func.isRequired,
    candidateData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    candidateData: state.gpaCandidates
});

export default connect(mapStateToProps, { fetchCandidates })(CandidateLists);
