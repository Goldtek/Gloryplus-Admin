import React, { useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet"
import Button from '@material-ui/core/Button';
import { fetchCandidates } from "Redux/actions/candidateActions";
import { Header, SideBar } from "../../../Partials";
import { LoaderCard, InfoCard } from "../../Helpers"
import CandidateTables from "./CandidateTables"

const CandidateLists = ({ fetchCandidates, candidateData }) => {
    useEffect(() => {
        // document.getElementById("gpa").classList.add("active");
        fetchCandidates();
    }, [fetchCandidates]);

    let history = useHistory()

    const candidates = candidateData.candidateItems.filter(el => el.gpa === true);
    // const candidates = candidateData.candidateItems.find(el => el.gpa === true)
    return (
        <React.Fragment>
            <Helmet>
                <title>GPA Candidates</title>
            </Helmet>
            <Header />
            <SideBar />
            <div className="page-content">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/dashboard/">Dashboard</a></li>
                                    <li className="breadcrumb-item"><a href="#">Candidates </a></li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <Button variant="contained" href="dashboard/gpa/create" color="primary">
                                        Create Course
                            </Button>
                                    {" "}
                                    <Button onClick={() => history.goBack()} variant="contained" color="secondary">Back</Button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">

                            <h5 className="card-title">GPA Candidates</h5>
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
                </div>

            </div>

        </React.Fragment>
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
