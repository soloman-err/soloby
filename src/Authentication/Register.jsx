import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoURL.value;
    console.log(name, email, password, photoUrl);

    // try {
    //   await createUser(email, password).then((result) => {
    //     const user = result.user;
    //     console.log(user);
    //     Swal.fire("Account Created!", "Welcome to soloby!", "success");
    //   });
    // } catch (err) {
    //   console.log(err);
    //   setError(err.message);
    //   try {
    //     // Firebase authentication code that throws the error
    //   } catch (error) {
    //     let errorMessage;

    //     if (error.code === "auth/email-already-in-use") {
    //       errorMessage = error.message.split("/")[1].trim();
    //     } else {
    //       errorMessage = error.message;
    //     }

    //     Swal.fire({
    //       title: errorMessage,
    //       icon: "error",
    //       confirmButtonText: "Okay",
    //     });
    //   }
    // }

    try {
      await createUser(email, password).then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Account Created!", "Welcome to soloby!", "success");
      });
    } catch (err) {
      console.log(err);
      setError(err.message);

      let errorMessage;

      if (err.code === "auth/email-already-in-use") {
        errorMessage = err.message.split("/")[1].trim().slice(0, -2);
      } else {
        errorMessage = err.message;
      }

      Swal.fire({
        title: errorMessage,
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  };
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form onSubmit={handleCreateUser} className="card-body">
            <h1 className="font-bold text-center text-xl">Please Register!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="https://profile-image.jpg"
                className="input input-bordered"
                required
              />
            </div>

            {/* Error display */}
            <div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
            <small>
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
