import React from 'react';

const Register = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "url('/foodmap.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay for opacity */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for opacity effect
        }}
      ></div>

      {/* Centered Form */}
      <div
        className="card p-4"
        style={{
          width: "350px",
          background: "rgba(255, 255, 255, 0.85)", // Opaque white background
          zIndex: 1, // Place above overlay
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-3">Register</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input type="text" className="form-control" id="userName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" />
            <div id="emailHelp" className="form-text">
              We'll never share your email.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
