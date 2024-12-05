import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div style={{ backgroundColor: "#f1eded", height: "auto" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="bg-primary p-4 my-5"
            style={{ height: "500px", width: "300px" }}
          >
            <h2
              className="text-white my-3 text-start"
              style={{ fontSize: "28px" }}
            >
              Login
            </h2>
            <div
              className="text-white mt-4 lh-base fw-light text-start"
              style={{ fontSize: "18px", opacity: "0.8" }}
            >
              <p>
                Get access to your Orders, <br />
                Wishlist and Recommendations
              </p>
            </div>
            <img
              src="/google-my-business.jpg"
              alt="business image"
              className="text-center"
              style={{
                width: "170px",
                marginTop: "170px",
              }}
            />
          </div>
          <div
            className="bg-white mx-0 p-4 my-5"
            style={{ height: "500px", width: "450px" }}
          >
            <div className="text-start">
              <form>
                <input
                  type="text"
                  className="border-0 border-bottom my-3 w-100 form-control"
                  placeholder="Enter Email/Phone Number"
                />
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "rgb(135, 135, 135)",
                    marginTop: "30px",
                  }}
                >
                  By continuing, you agree to Ecom's Terms of Use and Privacy
                  Policy.
                </p>
                <button
                  type="submit"
                  className="border-0 w-100 p-3 mt-2 text-white"
                  style={{
                    backgroundColor: "orangered",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Request OTP
                </button>
              </form>
              <div className="d-flex justify-content-center" style={{marginTop:"240px"}}>

              <Link className="nav-link" to='/signup' style={{fontWeight:"500",fontSize:"14px",color:"rgb(40, 116, 240)"}}>New to Ecom? Create an account</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
