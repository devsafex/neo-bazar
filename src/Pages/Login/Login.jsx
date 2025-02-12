import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CgSpinnerAlt } from "react-icons/cg";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import ForgetPass from "../../components/Modal/ForgetPass";

const Login = () => {
  const {
    signIn,
    signInWithGoogle,
    loading,
    setLoading,
    setUser,
    resetPassword,
  } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [size, setSize] = useState(null);
  const [email, setEmail] = useState("");
  const handleOpen = (value) => setSize(value);
  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
      setSize(null); // Close modal after success
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await signIn(email, password);
      setUser(res?.user);
      navigate("/", { replace: true });
      toast.success("Successfully logged in.", {
        style: {
          border: "1px solid #00C982",
          padding: "16px",
          color: "#00C982",
        },
        iconTheme: {
          primary: "#00C982",
          secondary: "#FFFAEE",
        },
      });
    } catch (err) {
      setLoading(false);
      setError(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/", { replace: true });
      toast.success("Successfully logged in.", {
        style: {
          border: "1px solid #00C982",
          padding: "16px",
          color: "#00C982",
        },
        iconTheme: {
          primary: "#00C982",
          secondary: "#FFFAEE",
        },
      });
    } catch (err) {
      setLoading(false);
      setError(err?.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-20 my-10 md:my-16  justify-center items-center  ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#00C982]/5 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border border-slate-200 focus:outline-[#00C982] text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border border-slate-200 focus:outline-[#00C982] text-gray-900"
              />
            </div>
            {error && <p className="mb-2 text-red-500 text-sm">{error}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#00C982] hover:bg-[#009F66] w-full rounded-md py-3 text-white cursor-pointer font-bold"
            >
              {loading ? (
                <CgSpinnerAlt className="animate-spin m-auto" />
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
        <div className="space-y-1 my-2">
          <button
            onClick={() => handleOpen("md")}
            className="text-xs hover:underline hover:text-[#00C982] text-gray-400"
          >
            Forgot password?
          </button>
          <ForgetPass
          handleReset={handleReset}
          loading={loading}
          size={size}
          email={email}
          setEmail={setEmail}
          handleOpen={handleOpen}
        ></ForgetPass>
        </div>
       
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center border-slate-200 items-center space-x-2 border my-3 p-2 rounded-lg cursor-pointer"
        >
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-500">
          Not registered?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-[#00C982] font-medium text-black"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
