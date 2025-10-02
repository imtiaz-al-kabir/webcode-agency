import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f2f4f8]">
      <div className="fieldset  border-base-300 rounded-box w-xs border bg-white p-4">
        <div className="text-center text-xl">Please Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="label">Email</label>
          <input
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: "Invalid Email address",
              },
            })}
            type="email"
            className="input focus:outline-none "
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}

          <label className="label">Password</label>
          <input
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "Password Must be 8 characters",
              },
            })}
            type="password"
            className="input focus:outline-none"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}

          <input
            type="submit"
            value="Login"
            className="btn btn-primary mt-4 w-full focus:outline-none"
          />
        </form>
        <div className="text-center">
          <p className="text-gray-600">Or signin with</p>
          <div className="flex justify-center py-2 gap-4">
            <button className="flex items-center bg-red-500 text-xs font-bold px-2 py-2 rounded-lg text-white space-x-1 hover:bg-red-600 ">
              <FaGoogle />
              <span>Google</span>
            </button>
            <button className="flex items-center bg-black font-bold text-xs px-2 py-2 rounded-lg text-white space-x-1 hover:bg-red-600 ">
              <FaGithub />
              <span>Github</span>
            </button>
            <button className="flex items-center bg-blue-500 text-xs font-bold px-2 py-2 rounded-lg text-white space-x-1 hover:bg-blue-600 ">
              <FaGoogle />
              <span>Facebook</span>
            </button>
          </div>
          <p className="text-gray-600">
            Don't have an account? please {""}
            <Link className="text-blue-600 font-bold text-md" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
