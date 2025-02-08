import { useAuth0 } from "@auth0/auth0-react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Account</h2>
        
        <button 
          onClick={() => loginWithRedirect({ screen_hint: "signup" })} 
          className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow">
          <span>Sign Up with Auth0</span>
        </button>
      </div>
    </div>
  );
};

export default Signup;
