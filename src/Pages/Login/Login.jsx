import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import useUsersLoad from "../../Hooks/useUserLoad";
import toast, { Toaster } from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const [users] = useUsersLoad()
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const number = form.number.value.toString();
    const password = form.password.value.toString();
  
    const isUser = users.find(user => user.number.toString() === number && user.password.toString() === password);
  
    if (!isUser) {
      toast.error('Please enter a valid number and password');
    } else {
      toast.success('Login successful!');
      navigate('/');
      const userInfo = { email: isUser.email };
            axiosPublic.post("/jwt", userInfo)
              .then(res => {
                if (res.data.token) {
                  localStorage.setItem('access-token', res.data.token);
                }
              })
              .catch(error => {
                console.error('Failed to store the token:', error);
              });
    }
  };
  return (
    <div>
      <div className="text-gray-900 flex items-center mt-12 justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex justify-center">
              <img src={logo} className="w-[200px]" alt="Logo" />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleLogin} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="number"
                    name="number"
                    placeholder="Mobile Number"
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    name="password"
                    placeholder="PIN"
                  />
                  <button className="mt-5 text-lg tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    Login
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    I agree to abide by
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Terms of Service
                    </a>
                    and its
                    <a
                      href="#"
                      className="border-b border-gray-500 border-dotted"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Login;
