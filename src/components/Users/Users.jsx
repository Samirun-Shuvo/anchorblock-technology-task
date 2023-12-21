import { useState } from "react";
import checkBox from "../../assets/images/Checkbox.png";
import { useEffect } from "react";
import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPen } from "react-icons/lu";
import Pagination from "../Pagination/Pagination";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [paginationData, setPaginationData] = useState({
    activePage: 1,
    perPage: 6,
    total: 1,
  });

  const token = localStorage.getItem("token");

  const fetchData = (activePage) => {
    axios.get(`https://reqres.in/api/users?page=${activePage}`).then((res) => {
      setAllUsers(res?.data?.data);
      setPaginationData({
        activePage: res.data.page,
        perPage: res.data.per_page,
        total: res.data.total,
      });
    });
  };

  useEffect(() => {
    fetchData(paginationData.activePage);
  }, [token]);

  console.log(allUsers);

  const handleDelete = (id) => {
    const remainingUser = allUsers?.filter((user) => user.id !== id);
     setAllUsers(remainingUser);
  };

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex justify-between p-5">
        <h3 className="text-[#101828] text-2xl font-medium ">Users</h3>
        <div className="flex gap-3">
          <button className="border border-[#D0D5DD] rounded-lg px-4 py-[10px] flex items-center gap-2 shadow">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clipPath="url(#clip0_1_54)">
                  <path
                    d="M13.3333 13.3334L9.99997 10M9.99997 10L6.66663 13.3334M9.99997 10V17.5M16.9916 15.325C17.8044 14.8819 18.4465 14.1808 18.8165 13.3322C19.1866 12.4837 19.2635 11.5361 19.0351 10.6389C18.8068 9.74182 18.2862 8.94629 17.5555 8.3779C16.8248 7.80951 15.9257 7.50064 15 7.50003H13.95C13.6977 6.5244 13.2276 5.61864 12.5749 4.85085C11.9222 4.08307 11.104 3.47324 10.1817 3.0672C9.25943 2.66116 8.25709 2.46949 7.25006 2.5066C6.24304 2.5437 5.25752 2.80861 4.36761 3.28142C3.47771 3.75422 2.70656 4.42261 2.11215 5.23635C1.51774 6.05008 1.11554 6.98797 0.935783 7.97952C0.756025 8.97107 0.803388 9.99047 1.07431 10.9611C1.34523 11.9317 1.83267 12.8282 2.49997 13.5834"
                    stroke="#344054"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_54">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>{" "}
            <span>Import</span>
          </button>
          <button className="border border-[#7F56D9] bg-[#7F56D9] rounded-lg px-4 py-[10px] shadow text-[#FFF]">
            <span className="text-xl">+</span> Add user
          </button>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-[#F9FAFB] ">
            <td className="w-[25%]">
              <div className="flex items-center gap-3 px-[24px] py-[12px]">
                <img src={checkBox} alt="" />
                <span>User Info</span>{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 3.33337V12.6667M8 12.6667L12.6667 8.00004M8 12.6667L3.33333 8.00004"
                      stroke="#667085"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </td>
            <td className="w-[25%]">About</td>
            <td className="w-[25%]">Status</td>
            <td className="w-[25%]"></td>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user) => (
            <tr key={user?.id}>
              <td>
                <div className="px-[24px] py-[12px] flex items-center gap-2">
                  <input
                    className="rounded-full h-5 w-5 cursor-pointer bg-red-100 border-red-300 text-red-600 focus:ring-red-200"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <img
                    className="h-10 w-10 rounded-[200px]"
                    src={user?.avatar}
                    alt=""
                  />
                  <div>
                    <h5 className="text-[#101828] text-sm font-medium">
                      {user?.first_name} {user?.last_name}
                    </h5>
                    <p className="text-[#667085] text-sm font-normal">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <h5 className="text-[#101828] text-sm font-normal">
                    About of User
                  </h5>
                  <p className="text-[#667085] text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </td>
              <td>
                <span className="bg-[#ECFDF3] px-2 py-[2px] rounded-[16px] text-[#027A48] font-medium text-[12px]">
                  Customer
                </span>{" "}
              </td>
              <td>
                <div className="flex items-center gap-5">
                  <button onClick={() => handleDelete(user.id)}>
                    <RiDeleteBinLine />
                  </button>

                  <LuPen />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        paginationData={paginationData}
        setPaginationData={setPaginationData}
        fetchData={fetchData}
      />
    </div>
  );
};

export default Users;
