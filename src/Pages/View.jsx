import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { addToAppliedJobs } from "../Redux/slice/appliedSlice";

function View() {

  const dispatch=useDispatch()


const { id } = useParams()
const [job,setJob]=useState({})
const {appliedJobs}=useSelector(state=>state.appliedReducer)

useEffect(()=>{
  const allJobs=JSON.parse(localStorage.getItem("allJobs"))
  setJob(allJobs.find(item=>item.id==id))
},[])

// const { allJobs } = useSelector(state => state.jobReducer)

// const job = allJobs.find(item => item.id == id)

// if(!job){
// return <h2 className="text-center mt-10">Job not found</h2>
// }


const handleApplyJob=(job)=>{
  const existingJob=appliedJobs.find(item=>item.id==job.id)
  if(existingJob){
    alert("job already applied")
  }
  else{
    dispatch(addToAppliedJobs(job))
    alert("job applied")
  }
}

return (
<> <Header viewApplication />


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

            

              <span
                
                className="bg-gray-100 text-sm px-3 py-1 rounded"
              >
              </span>

            

          </div>

        </div>

        {/* Apply Button */}
        <div className="mt-8">

          <button onClick={()=>handleApplyJob(job)}  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
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
