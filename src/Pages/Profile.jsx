import React from "react";
import { useSelector } from "react-redux"
import Info from "../Components/Edit/Info";
import Education from "../Components/Edit/Education";
import Experience from "../Components/Edit/Experience";

function Profile() {
    const currentUser = useSelector((state) => state.userReducer.currentUser)

  return (
    <div className="bg-gray-100 min-h-screen p-8">

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* LEFT SECTION */}
        <div className="col-span-8 space-y-6">

          {/* Profile Header */}
          <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="profile"
              className="w-24 h-24 rounded-full"
            />

            <div>
              <h2 className="text-2xl font-semibold">{currentUser?.name}</h2>
              <p className="text-gray-500">{currentUser?.email}</p>
              <p className="text-gray-500">Location</p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Education</h3>
              <Education/>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">BCA</h4>
                <p className="text-gray-500">XYZ College</p>
                <p className="text-sm text-gray-400">2020 - 2023</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Work Experience</h3>
              <Experience/>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Frontend Developer</h4>
                <p className="text-gray-500">ABC Technologies</p>
                <p className="text-sm text-gray-400">2023 - Present</p>
              </div>
            </div>
          </div>

        </div>


        {/* RIGHT SECTION */}
        <div className="col-span-4 space-y-6">

          {/* Personal Info */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Personal Info</h3>
              
               <Info/>
            
            </div>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-medium">Gender:</span> Male</p>
              <p><span className="font-medium">Location:</span> Kochi</p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white shadow rounded-xl p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Skills</h3>
              <button className="text-sm border px-3 py-1 rounded-lg hover:bg-gray-100">
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                Redux
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;