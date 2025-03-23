import React from 'react';

const Login = () => {
  return (
    <div class="container d-flex justify-content-center align-items-center vh-100">
      <div class="row shadow-lg rounded overflow-hidden w-75">
        
        {/* Left Side: Image */}
        <div class="col-md-6 d-none d-md-block p-0">
          <img src="/deliveryimg.jpg" class="img-fluid h-100 w-100" alt="Login" />
        </div>

        {/* Right Side: Your Existing Login Form */}
        <div class="col-md-6 p-5 bg-light">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary w-100">Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Login;
