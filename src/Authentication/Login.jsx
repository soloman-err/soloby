import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { googleSignIn, githubSignIn, emailPassSignIn } =
    useContext(AuthContext);

  // Sign in with email & pass:
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    emailPassSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Google sign in:
  const handleGoogleSignIn = async () => {
    try {
      googleSignIn().then((result) => {
        const user = result.user;
        console.log(user);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // GitHub sign in:
  const handleGithubSignIn = async () => {
    try {
      githubSignIn().then((result) => {
        const user = result.user;
        console.log(user);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card pb-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="font-bold text-center text-xl">Please Login!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button onClick={emailPassSignIn} className="btn btn-primary">
                Login
              </button>
            </div>
            <small>
              Don't have an account? <Link to="/register">Register</Link>
            </small>
          </form>
          <div className="flex justify-center gap-2">
            <button onClick={handleGoogleSignIn} className="btn btn-outline">
              Google
            </button>
            <button onClick={handleGithubSignIn} className="btn">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
