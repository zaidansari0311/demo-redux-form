import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate("/");
  };
  const selector = useSelector((state) => state.registration.users);
//   console.log("data", selector);
  return (
    <div className="layout-content">
      <Navbar />
      <div className="org-container d-flex flex-column">
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <h3>Your Details</h3>
            <button onClick={moveBack} className="btn btn-outline-primary">
              Add User
            </button>
          </Card.Header>
          <Card.Body className="d-flex flex-row">
            <div className="d-grid col-6 p-3">
              <div className="d-flex flex-row p-3">
                <b>First Name :</b>
                <span className="mx-2">{selector.firstname}</span>
              </div>
              <div className="d-flex flex-row p-3">
                <b>Email :</b>
                <span className="mx-2">{selector.email}</span>
              </div>
              <div className="d-flex flex-row p-3">
                <b>DOB :</b>
                <span className="mx-2">{selector.date}</span>
              </div>
              <div className="d-flex flex-row p-3">
                <b>About :</b>
                <span className="mx-2">{selector.about}</span>
              </div>
            </div>
            <div className="d-grid col-6 p-3">
              <div className="d-flex flex-row p-3">
                <b>Last Name :</b>
                <span className="mx-2">{selector.lastname}</span>
              </div>
              <div className="d-flex flex-row p-3">
                <b>Gender :</b>
                <span className="mx-2">{selector.gender}</span>
              </div>
              <div className="d-flex flex-row p-3">
                <b>Qualification :</b>
                <span className="mx-2">{selector.qualification}</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
