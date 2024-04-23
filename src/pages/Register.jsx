import { useState } from "react";
import Select from "react-select";
const Register = () => {
  const [userData, setUserData] = useState({
    userFirstName: "",
    userLastName: "",
    username: "",
    password: "",
    userEmail: "",
    userTelephone: "",
    userAddress: "",
    userFaculty: "",
    userRole: "",
    userGender: "",
  });
  const [selectedGender, setSelectGender] = useState(null);
  const [selectedRole, setSelectRole] = useState(null);
  const options = [
    { value: "student", label: "Student" },
    { value: "teacher", label: "Teacher" },
  ];
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleGenderChange = (selectedOption) => {
    setSelectGender(selectedOption);
    console.log(selectedOption);
  };
  const handleRoleChange = (selectedOption) => {
    setSelectRole(selectedOption);
    console.log(selectedOption);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRegister = () => {};
  return (
    <div>
      <div className="border-4 mx-10 my-10  md:w-5/6 md:mx-auto md:my-10 border-[#06283D] rounded-xl ">
        <h1 className="text-white p-2 text-xl font-bold text-center leading-tight tracking-tight  md:text-2xl  border-b-2 border-[#06283D] bg-[#06283D] md:p-4">
          Register Teacher/Student
        </h1>
        <form
          className="space-y-4 md:space-y-6 w-full p-6 md:mx-auto md:w-5/6 "
          onSubmit={handleRegister}
        >
          <div className="mt-2 flex flex-col w-full md:mt-1 md:w-full md:flex md:flex-row">
            <div className="mb-1 w-full md:w-1/2 px-1">
              <label className="mb-2 md:text-lg font-medium text-gray-900 dark:text-white ">
                First Name
              </label>
              <input
                value={userData.userFirstName}
                onChange={handleInputChange}
                type="text"
                name="userFirstName"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="First Name"
                required=""
              />
            </div>
            <div className="mb-1 w-full md:w-1/2 px-1">
              <label className="mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Last Name
              </label>
              <input
                value={userData.userLastName}
                onChange={handleInputChange}
                type="text"
                name="userLastName"
                placeholder="Lastname"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>

          <div className="flex flex-col w-full md:mt-1 md:w-full md:flex md:flex-row md:gap-2">
            <div className="md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                value={userData.username}
                onChange={handleInputChange}
                type="text"
                name="username"
                placeholder="Username"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                value={userData.password}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col w-full md:mt-1 md:w-full md:flex md:flex-row md:gap-2">
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                value={userData.userEmail}
                onChange={handleInputChange}
                type="email"
                name="userEmail"
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Telephone
              </label>
              <input
                value={userData.userTelephone}
                onChange={handleInputChange}
                type="text"
                name="userTelephone"
                placeholder="Telephone"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col w-full md:mt-1 md:w-full md:flex md:flex-row md:gap-2">
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Address
              </label>
              <input
                value={userData.userAddress}
                onChange={handleInputChange}
                type="text"
                name="userAddress"
                placeholder="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Faculty
              </label>
              <input
                value={userData.userFaculty}
                onChange={handleInputChange}
                type="text"
                name="userFaculty"
                placeholder="Faculty Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
          </div>
          <div className="mt-1 md:mt-1 w-full flex gap-2">
            <div className="mt-1 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Role
              </label>
              <Select
                options={options}
                autoFocus={true}
                className="rounded-md"
                value={selectedRole}
                onChange={handleRoleChange}
              />
            </div>
            <div className="mt-2 md:mt-1 w-full">
              <label className="flex mb-2 md:text-lg font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <Select
                options={genderOptions}
                autoFocus={true}
                className="rounded-md"
                value={selectedGender}
                onChange={handleGenderChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <button
              className="mb-4 w-52 md:w-60 md:mb-5 bg-[#1363DF] hover:bg-[#FF9F9F] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
