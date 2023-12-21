import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("https://reqres.in/api/register", data)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate('/users');
        }
      })
      .catch((err) => console.log(err.response.data.error));
  };

  return (
    <div className="h-[100vh] flex items-center">
      <div className="card bg-[#FFF] border border-[#EEE] rounded-2xl shadow-xl min-w-[444px] mx-auto pb-4 ">
        <form
          className="card-body flex flex-col  gap-[52px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-[22px]">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="44"
                viewBox="0 0 51 44"
                fill="none"
              >
                <g clipPath="url(#clip0_15_14)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50.4409 25.3835L48.5224 22.7586H49.7084C50.027 22.7582 50.32 22.6066 50.4725 22.3633C50.6251 22.12 50.613 21.8236 50.4409 21.5903L39.3394 6.41794C39.181 6.19923 38.9039 6.06725 38.6068 6.06897H11.9735C11.6764 6.06725 11.3993 6.19923 11.2409 6.41794L0.139364 21.5903C-0.0326872 21.8236 -0.044801 22.12 0.107767 22.3633C0.260336 22.6066 0.553299 22.7582 0.871911 22.7586H2.05794L0.139364 25.3835C-0.0326872 25.6167 -0.044801 25.9131 0.107767 26.1564C0.260336 26.3997 0.553299 26.5513 0.871911 26.5517H2.05794L0.139364 29.1766C-0.0326872 29.4098 -0.044801 29.7062 0.107767 29.9495C0.260336 30.1928 0.553299 30.3444 0.871911 30.3448H2.05794L0.139364 32.9697C-0.0326872 33.2029 -0.044801 33.4993 0.107767 33.7426C0.260336 33.9859 0.553299 34.1375 0.871911 34.1379H2.05794L0.139364 36.7628C-0.0326872 36.996 -0.044801 37.2924 0.107767 37.5357C0.260336 37.779 0.553299 37.9306 0.871911 37.931H49.7084C50.027 37.9306 50.32 37.779 50.4725 37.5357C50.6251 37.2924 50.613 36.996 50.4409 36.7628L48.5224 34.1379H49.7084C50.027 34.1375 50.32 33.9859 50.4725 33.7426C50.6251 33.4993 50.613 33.2029 50.4409 32.9697L48.5224 30.3448H49.7084C50.027 30.3444 50.32 30.1928 50.4725 29.9495C50.6251 29.7062 50.613 29.4098 50.4409 29.1766L48.5224 26.5517H49.7084C50.027 26.5513 50.32 26.3997 50.4725 26.1564C50.6251 25.9131 50.613 25.6167 50.4409 25.3835Z"
                    fill="#9E7AF4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.985 11.8072C11.6671 11.8068 11.3746 11.656 11.2216 11.4135C11.0686 11.1711 11.0795 10.8754 11.2499 10.6419L12.6731 8.69606C12.8333 8.4772 13.1109 8.34471 13.4091 8.34482H17.4416C17.9233 8.34482 18.3137 8.68446 18.3137 9.10344C18.3137 9.52241 17.9233 9.86206 17.4416 9.86206H13.8879L12.7219 11.4552C12.5618 11.6745 12.2838 11.8074 11.985 11.8072Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.7084 26.5517H0.871911C0.553299 26.5513 0.260336 26.3997 0.107767 26.1564C-0.044801 25.9131 -0.0326872 25.6167 0.139364 25.3835L2.05794 22.7586H48.5224L50.4409 25.3835C50.613 25.6167 50.6251 25.9131 50.4725 26.1564C50.32 26.3997 50.027 26.5513 49.7084 26.5517Z"
                    fill="#7F56E0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.7084 30.3448H0.871911C0.553299 30.3444 0.260336 30.1928 0.107767 29.9495C-0.044801 29.7062 -0.0326872 29.4098 0.139364 29.1766L2.05794 26.5517H48.5224L50.4409 29.1766C50.613 29.4098 50.6251 29.7062 50.4725 29.9495C50.32 30.1928 50.027 30.3444 49.7084 30.3448Z"
                    fill="#6941C6"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.7084 34.1379H0.871911C0.553299 34.1375 0.260336 33.9859 0.107767 33.7426C-0.044801 33.4993 -0.0326872 33.2029 0.139364 32.9696L2.05794 30.3448H48.5224L50.4409 32.9696C50.613 33.2029 50.6251 33.4993 50.4725 33.7426C50.32 33.9859 50.027 34.1375 49.7084 34.1379Z"
                    fill="#8056E0"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M49.7084 37.931H0.871911C0.553299 37.9306 0.260336 37.779 0.107767 37.5357C-0.044801 37.2924 -0.0326872 36.996 0.139364 36.7628L2.05794 34.1379H48.5224L50.4409 36.7628C50.613 36.996 50.6251 37.2924 50.4725 37.5357C50.32 37.779 50.027 37.9306 49.7084 37.931Z"
                    fill="#6941C6"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_14">
                    <rect width="50.5806" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="text-[#4E5D78] text-[28px] font-bold">Stack</h2>
            </div>
            <div>
              <h3 className="text-[#404040] text-xl font-semibold">
                Sign up to join with Stack
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#344054] text-sm font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="px-[14px] py-[10px] border border-[#FDA29B] bg-[#FFF] rounded-lg focus:outline-none focus:ring-[#FEE4E2] focus:ring-4"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#344054] text-sm font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="px-[14px] py-[10px] border border-[#D6BBFB] bg-[#FFF] rounded-lg focus:outline-none focus:ring-[#F4EBFF] focus:ring-4"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="form-control">
              <button className="bg-[#6941C6] border border-[#6941C6] rounded-lg px-[18px] py-[10px] shadow-sm text-[#FFF] font-semibold leading-6">
                Sign Up
              </button>
            </div>
            <p>
              <span className="text-[#B0B7C3] text-base font-medium">
                Already have an account?
              </span>{" "}
              <Link to="/signIn">
                <span className="text-[#377DFF] text-base font-medium">
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
