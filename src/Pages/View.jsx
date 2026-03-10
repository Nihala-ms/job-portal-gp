import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function View() {

const { id } = useParams()

const { allJobs } = useSelector(state => state.jobReducer)

const job = allJobs.find(item => item.id == id)

// if(!job){
// return <h2 className="text-center mt-10">Job not found</h2>
// }

return (
<> <Header />


  <div className="bg-gray-100 min-h-screen p-6">

    <div className="max-w-4xl mx-auto">

      <div className="bg-white rounded-xl shadow p-6">

        {/* Job Header */}
        <div className="flex gap-4 items-center">

          <img
            src={job.companyLogo}
            alt=""
            className="w-16 h-16 rounded-lg object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">{job.jobTitle}</h1>
            <p className="text-gray-600">
              {job.company} • {job.experienceRequired}
            </p>
            <p className="text-gray-500 text-sm">{job.salary}</p>
          </div>

        </div>

        <hr className="my-5" />

        {/* Description */}
        <div>

          <h2 className="font-bold text-lg mb-2">
            Job Description
          </h2>

          <p className="text-gray-600 leading-relaxed">
            {job.jobDescription}
          </p>

        </div>

        {/* Skills */}
        <div className="mt-6">

          <h2 className="font-bold text-lg mb-3">
            Required Skills
          </h2>

          <div className="flex flex-wrap gap-2">

            {job.skillsRequired.map(skill => (

              <span
                key={skill}
                className="bg-gray-100 text-sm px-3 py-1 rounded"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        {/* Apply Button */}
        <div className="mt-8">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Apply Now
          </button>

        </div>

      </div>

    </div>

  </div>

  <Footer />
</>


);
}

export default View;
