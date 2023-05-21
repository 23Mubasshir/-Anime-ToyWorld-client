import { Link } from "react-router-dom";
import img from "../../assets/images/logo.png";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext, useState} from "react";
import useTitle from "../../Hooks/useTitle";

const SignUp = () => {
  useTitle('Anime ToyWorld | Sign Up');
  const { createUser, signInWithGoogle, userProfileUpdating } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //  < ----- Regular Sign-Up ----->
  const handleSignUp = (event) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, photo, password);
    if (password.length < 6) {
      setError("Password has to be least 6 characters");
      return;
    }
    //  < ----- Create User ----->
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setError("");
        setSuccess("User has been Created Successfully");
        userProfileUpdating(createdUser, name, photo);
        form.reset();
        window. location. reload(false);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  //  < ----- Google Sign-up ----->
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        // console.log(loggedUser);
        setError("");
        setSuccess("User has been Created Successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 py-6 lg:mr-20">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="Your Photo URL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="Password"
                    placeholder="Your Password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <p>
                      Already have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-in">
                        Sign In
                      </Link>
                    </p>
                  </label>
                  {/* <-----Error and Success message-----> */}
                  <p
                    className=" text-green-400 font-bold
                  "
                  >
                    {success}
                  </p>
                  <p className="text-red-400  font-bold">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              {/* -----Google Sign In */}
              <div className="">
                <h1 className="text-center pt-3">OR</h1>
                <h1 className="pb-3 text-neutral-500">Sign Up with </h1>
                <button
                  onClick={handleGoogleSignUp}
                  className="btn btn-primary btn-block"
                >
                  <FaGoogle />
                  <span className="mx-2"> Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
