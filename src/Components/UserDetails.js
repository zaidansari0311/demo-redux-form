import React from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addUser } from "../Actions/RegisterationActions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset();
    navigate("/profile");
    // console.log(data);
  };

  return (
    <div className="layout-content">
      <Navbar />
      <div className="org-container d-flex flex-column">
        {/* <header className="header d-flex flex-column">Header</header> */}
        <div className="card">
          <div className="card-body">
            <h2 className="d-flex justify-content-center">Fill the form</h2>
            <hr />

            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="form-label">
                  <b>First Name:</b>
                </label>
                <input
                  className="form-control"
                  placeholder="Your First Name"
                  onKeyPress={(event) => {
                    if (!/[A-Za-z\s]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  {...register("firstname", { required: true })}
                />
                {errors.firstname && (
                  <span className="error">First name is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>Last Name:</b>
                </label>
                <input
                  className="form-control"
                  placeholder="Your Last Name"
                  onKeyPress={(event) => {
                    if (!/[A-Za-z\s]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && (
                  <span className="error">Last name is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>Email:</b>
                </label>
                <input
                  className="form-control"
                  placeholder="Your email address"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="error">Email address is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>Gender:</b>
                </label>
                <label>
                  <input
                    className="form-check-input mx-2"
                    type="radio"
                    value="Male"
                    {...register("gender")}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    className="form-check-input mx-2"
                    type="radio"
                    value="Female"
                    {...register("gender")}
                  />{" "}
                  Female
                </label>
                {errors.gender && (
                  <span className="error">Choose is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>Date of birth:</b>
                </label>
                <input
                  className="form-control"
                  type="date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="error">Date of birth is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>Qualification:</b>
                </label>
                <select
                  className="form-control"
                  {...register("qualification", { required: true })}
                >
                  <option value="">Select</option>
                  <option value="10th">10th</option>
                  <option value="12th">12th</option>
                  <option value="Bachelor">Bachelor</option>
                  <option value="Master">Master</option>
                </select>
                {errors.qualification && (
                  <span className="error">Qualification is required</span>
                )}
              </div>

              <div>
                <label className="form-label">
                  <b>About:</b>
                </label>
                <input
                  className="form-control"
                  placeholder="Yourself"
                  onKeyPress={(event) => {
                    if (!/[A-Za-z\s]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  {...register("about", { required: true })}
                />
                {errors.about && (
                  <span className="error">About is required</span>
                )}
              </div>

              <input type="submit" className="btn btn-primary my-2" />
            </form>
          </div>
        </div>
        {/* <footer className="footer">footer</footer> */}
      </div>
    </div>
  );
};

export default UserDetails;
