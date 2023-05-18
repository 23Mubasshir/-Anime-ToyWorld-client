import img from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";


const SignIn = () => {


// -----Regualar Sign In-----
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

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
              <h1 className="text-5xl font-bold text-center">Sign In</h1>
              <form onSubmit={handleSignIn}>
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
                     Don't have an account ?{" "}
                      <Link className="text-orange-500" to="/sign-up">
                        Sign Up
                      </Link>
                    </p>
                  </label>
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
                <button className="btn btn-primary btn-block">
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

export default SignIn;
