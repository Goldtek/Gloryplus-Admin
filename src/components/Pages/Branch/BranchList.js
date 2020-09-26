import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header, SideBar, Breadcrumb } from "../../Partials";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BranchTable from "./Table/BranchListTable";
import { fetchBranchList } from "../../../Redux/actions/branchActions";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "440",
  },
  typo: {
    fontSize: "1rem",
  },
  appBar: {
    padding: "10px",
  },
  progress: {
    // margin: theme.spacing(1) * 2,
    margin: "auto",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "10vh",
  },
}));
const BranchList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const churchBranches = useSelector((state) => state.branches);

  useEffect(() => {
    dispatch(fetchBranchList());
    return () => {
      dispatch(fetchBranchList());
    };
  }, [dispatch]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Create Branch</title>
      </Helmet>
      <Header />
      <SideBar />

      {/* CLOSE SIDE BAR */}

      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <Breadcrumb crumbItem={"Branch"} crumb={"Create Branch"} />
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Button
                    variant="contained"
                    href="dashboard/branch/create"
                    color="primary"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Create Branches
                  </Button>{" "}
                  <Button variant="contained" color="secondary">
                    Back
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              {/* Branch Table:::::::::::::::::::::::::::::::::: */}

              {churchBranches.loading ? (
                <div className={classes.loader}>
                  {" "}
                  <CircularProgress className={classes.progress} size={60} />
                  <Typography color="inherit" className="flexs={12}pacer">
                    Loading...
                  </Typography>
                </div>
              ) : (
                <BranchTable branches={churchBranches.branchItems} />
              )}
              {/* Branch Table:::::::::::::::::::::::::::::::::: */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BranchList;
