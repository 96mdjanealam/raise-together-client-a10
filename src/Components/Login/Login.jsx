import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { AiFillGoogleSquare } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  // console.log(location);
  const navigate = useNavigate();
  const { signInWithGoogle, userLogin, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const notify = (errorMessage) => {
    toast.error(errorMessage, {
      position: "top-center",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
     
        notify(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 my-4">
        <h2 className="text-2xl font-semibold text-center pb-10">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered rounded-full "
              required
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
              className="btn btn-xs rounded-full absolute right-2 top-12"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye></FaEye>}
            </button>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-full">Login</button>
          </div>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-success mt-4 rounded-full"
        >
          <AiFillGoogleSquare className="text-3xl" />
          Sign In with Google
        </button>
        <p className="text-center font-semibold pt-10">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
