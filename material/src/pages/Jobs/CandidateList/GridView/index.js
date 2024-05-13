import React, { useState, useEffect, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Input, Row } from "reactstrap";
import Select from "react-select";
import { jobCandidates } from "../../../../common/data/appsJobs";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import Pagination from "../../../../Components/Common/Pagination";

const CandidateGrid = () => {
  const sortbyname = [
    {
      options: [
        { label: "All", value: "All" },
        { label: "Today", value: "Today" },
        { label: "Yesterday", value: "Yesterday" },
        { label: "Last 7 Days", value: "Last 7 Days" },
        { label: "Last 30 Days", value: "Last 30 Days" },
        { label: "Thise Month", value: "Thise Month" },
        { label: "Last Year", value: "Last Year" },
      ],
    },
  ];

  const [calendarGrid, setCalendarGrid] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  //pagination
  const perPageData = 20;
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;
  const currentdata = useMemo(() => jobCandidates?.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])

  useEffect(() => {
    setCalendarGrid(currentdata)
  }, [currentdata]);

  document.title =
    "Candidates Grid View | Velzon -  Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Grid View" pageTitle="Candidates Grid" />

          <Row className="g-4 mb-4">
            <Col sm="auto">
              <div>
                <Link to="#!" className="btn btn-primary">
                  <i className="ri-add-line align-bottom me-1"></i> Add
                  Candidate
                </Link>
              </div>
            </Col>
            <Col className="col-sm">
              <div className="d-md-flex justify-content-sm-end gap-2">
                <div className="search-box ms-md-2 flex-shrink-0 mb-3 mb-md-0">
                  <Input
                    type="text"
                    className="form-control"
                    id="searchJob"
                    autoComplete="off"
                    placeholder="Search for candidate name or designation..."
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>

                <Select
                  className="w-md"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.15)",
                    borderRadius: "5px",
                  }}
                  options={sortbyname}
                ></Select>
              </div>
            </Col>
          </Row>

          <Row className="gy-2 mb-2" id="candidate-list">
            {(calendarGrid || []).map((item, key) => (
              <Col xxl={3} md={6} key={key}>
                <Card>
                  <CardBody>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        {item.nickname ? (
                          <div className="avatar-lg rounded">
                            <div className="avatar-title border bg-light text-primary rounded text-uppercase fs-24">
                              {item.nickname}
                            </div>
                          </div>
                        ) : (
                          <div className="avatar-lg rounded">
                            <img
                              src={item.userImg}
                              alt=""
                              className="member-img img-fluid d-block rounded"
                            ></img>
                          </div>
                        )}
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <NavLink to="/pages-profile">
                          <h5 className="fs-16 mb-1">{item.candidateName}</h5>
                        </NavLink>
                        <p className="text-muted mb-2">{item.designation}</p>
                        <div className="d-flex flex-wrap gap-2 align-items-center">
                          <div className="badge text-bg-success">
                            <i className="mdi mdi-star me-1"></i>
                            {item.rating[0]}
                          </div>
                          <div className="text-muted">{item.rating[1]}</div>
                        </div>
                        <div className="d-flex gap-4 mt-2 text-muted">
                          <div>
                            <i className="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{" "}
                            {item.location}
                          </div>
                          <div>
                            <i className="ri-time-line text-primary me-1 align-bottom"></i>
                            {item.type === "Part Time" ? (
                              <span className="badge bg-danger-subtle text-danger">
                                {item.type}
                              </span>
                            ) : item.type === "Full Time" ? (
                              <span className="badge bg-success-subtle text-success">
                                {item.type}
                              </span>
                            ) : (
                              <span className="badge bg-secondary-subtle text-secondary">
                                {item.type}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>

          <Pagination
            perPageData={perPageData}
            data={jobCandidates}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />

        </Container>
      </div>
    </React.Fragment>
  );
};

export default CandidateGrid;
