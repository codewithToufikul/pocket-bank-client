import { useState } from "react";
import logo from "../../assets/logo.png";

const Register = () => {
    const [passErr, setPassErr] = useState('');
    
    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const password = form.password.value;

        if (!/^\d{4}$/.test(password)) {
            setPassErr('Password must be a 4-digit number');
            return;
        }
        setPassErr('');
        console.log({ name, email, number, password });
    };

    return (
        <div>
            <div className="text-gray-900 flex items-center mt-12 justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="flex justify-center">
                            <img src={logo} className="w-[200px]" alt="Logo" />
                        </div>
                        <div className="mt-12 flex flex-col items-center">
                            <div className="w-full flex-1 mt-8">
                                <form onSubmit={handleRegistration} className="mx-auto max-w-xs">
                                    <input
                                        className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                    <input
                                        className="w-full px-8 py-4 mb-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
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
                                    <p className="text-red-500">{passErr}</p>
                                    <button className="mt-5 text-lg tracking-wide font-semibold bg-green-400 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        Register
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
