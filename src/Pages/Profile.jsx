import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Info from "../Components/Edit/Info";
import Education from "../Components/Edit/Education";
import Experience from "../Components/Edit/Experience";
import Skills from "../Components/Edit/Skills";

const ProfilePage = () => {

const currentUser = useSelector((state) => state.userReducer.currentUser)

return ( <div className="min-h-screen bg-slate-100 font-sans text-slate-900">

  {/* NAVBAR */}
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto bg-white rounded-b-xl shadow-sm">
    <div className="text-2xl font-bold text-blue-600 tracking-tight">
      Carrera
    </div>

    <div className="hidden md:flex space-x-8 font-medium text-slate-600">
      <a href="#about" className="hover:text-blue-600 transition">About</a>
      <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
      <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
    </div>

    <Link to="/home">
      <button className="bg-slate-100 px-6 py-2 rounded-full font-semibold hover:bg-slate-200 transition">
        Dashboard
      </button>
    </Link>
  </nav>


  <div className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">

    {/* PROFILE HEADER */}
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">

        <img
          className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
        />

        <div className="text-center sm:text-left">

          <h1 className="text-3xl font-extrabold text-slate-900">
            {currentUser?.name}
          </h1>

          <p className="text-lg text-slate-700 mt-1">
            {currentUser?.email}
          </p>

          <p className="text-md text-slate-500 mt-2">
            Kochi, Kerala
          </p>

        </div>

      </div>
    </section>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* LEFT MAIN CONTENT */}
      <div className="md:col-span-2 space-y-6">

        {/* ABOUT */}
        <section id="about" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              About
            </h2>
            <Info/>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Passionate developer interested in building modern web
            applications using React, Redux and modern UI frameworks.
          </p>

        </section>


        {/* EXPERIENCE */}
        <section id="experience" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Experience
            </h2>
            <Experience/>
          </div>

          <div className="space-y-6">

            <div className="flex items-start space-x-4">

              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt=""
              />

              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Frontend Developer
                </h3>

                <p className="text-slate-700">
                  ABC Technologies
                </p>

                <p className="text-slate-500 text-sm">
                  2023 – Present
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* EDUCATION */}
        <section id="education" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-2xl font-bold text-slate-900">
              Education
            </h2>

            <Education/>

          </div>

          <div className="space-y-4">

            <div className="flex items-start space-x-4">

              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://via.placeholder.com/150"
                alt=""
              />

              <div>

                <h3 className="font-bold text-lg text-slate-900">
                  BCA
                </h3>

                <p className="text-slate-700">
                  XYZ College
                </p>

                <p className="text-slate-500 text-sm">
                  2020 – 2023
                </p>

              </div>

            </div>

          </div>

        </section>

      </div>


      {/* RIGHT SIDEBAR */}
      <div className="md:col-span-1 space-y-6">

        {/* PERSONAL INFO */}
        <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="flex justify-between items-center mb-3">

            <h2 className="text-xl font-bold text-slate-900">
              Personal Info
            </h2>

            <Info/>

          </div>

          <div className="space-y-2 text-slate-700">

            <p>
              <span className="font-medium">Name:</span> {currentUser?.name}
            </p>

            <p>
              <span className="font-medium">Email:</span> {currentUser?.email}
            </p>

            <p>
              <span className="font-medium">Location:</span> Kochi
            </p>

          </div>

        </section>


        {/* SKILLS */}
        <section id="skills" className="bg-white rounded-xl shadow-lg p-6 sm:p-8">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-bold text-slate-900">
              Skills
            </h2>

            {/* <button className="text-sm border px-3 py-1 rounded-lg hover:bg-gray-100">
              Add
            </button> */}
            <Skills/>

          </div>

          <div className="flex flex-wrap gap-2">

            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              React
            </span>

            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              JavaScript
            </span>

            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              Redux
            </span>

          </div>

        </section>

      </div>

    </div>

  </div>
</div>


);
};

export default ProfilePage;
