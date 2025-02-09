import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { CgSpinnerAlt } from "react-icons/cg";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signIn, signInWithGoogle, loading, setLoading, setUser } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
    } catch (err) {
      setLoading(false);
      setError(err?.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/", { replace: true });
    } catch (err) {
      setLoading(false);
      setError(err?.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-20 my-10 md:my-16 lg:my-20 justify-center items-center min-h-screen bg-white">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#00C982]/5 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" required placeholder="Enter Your Email Here" className="w-full px-3 py-2 input input-bordered focus:outline-[#00C982] text-gray-900" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm mb-2">Password</label>
              <input type="password" name="password" autoComplete="current-password" id="password" required placeholder="*******" className="w-full px-3 py-2 input input-bordered focus:outline-[#00C982] text-gray-900" />
            </div>
            {error && <p className="mb-2 text-red-500 text-sm">{error}</p>}
          </div>
          <div>
            <button type="submit" className="bg-[#00C982] hover:bg-[#009F66] w-full rounded-md py-3 text-white font-bold">
              {loading ? <CgSpinnerAlt className="animate-spin m-auto" /> : "Login"}
            </button>
          </div>
        </form>
        <div className="space-y-1 my-2">
          <button className="text-xs hover:underline hover:text-[#00C982] text-gray-400">Forgot password?</button>
        </div>
        <div onClick={handleGoogleSignIn} className="flex justify-center border-[#00C982] items-center space-x-2 border my-3 p-2 rounded-lg cursor-pointer">
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet? <Link to="/signup" className="hover:underline hover:text-[#00C982] font-bold text-gray-600">Sign up</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
