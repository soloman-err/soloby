import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { googleSignIn, githubSignIn, emailPassSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

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
        form.reset();
        navigate(from);
        Swal.fire(
          "Permission Granted!",
          "You logged in successfully!",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  // Google sign in:
  const handleGoogleSignIn = async () => {
    try {
      googleSignIn().then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
        Swal.fire("Permission Granted!", "You can explore more!", "success");
      });
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  // GitHub sign in:
  const handleGithubSignIn = async () => {
    try {
      githubSignIn().then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
        Swal.fire("Permission Granted!", "You clicked the button!", "success");
      });
    } catch (err) {
      console.log(err);
      setError(err.message);
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

            {/* Error display */}
            <div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
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
