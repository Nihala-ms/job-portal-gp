import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../Redux/slice/jobSlice'


function Home() {

  const { allJobs } = useSelector(state => state.jobReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])
  // time ago function
  function timeAgo(dateString) {
    const now = new Date();
    const posted = new Date(dateString);
    const diff = now - posted;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  }
  return (
    <>

<div className="w-full flex flex-col items-start justify-start text-left min-h-screen">
      {/* <JobCard/> */}
     <div className="w-full">
     <Header />
  </div>

     
 

      {allJobs.length > 0 ?
        allJobs.map(job => (<div  key={job.id} className="w-full max-w-5xl bg-white border border-gray-200 rounded-xl p-5 hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center gap-6">

          {/* 1. Logo Section */}
          <div className="flex-shrink-0">

            <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 overflow-hidden">
              <img src={job.companyLogo} alt="Company Logo" className="object-cover" />
            </div>

          </div>

          {/* 2. Main Info: Title, Company, JD */}
          <div className="flex-grow min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-lg font-bold text-gray-900 truncate tracking-tight">
                {job.jobTitle}
              </h3>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                {job.workMode}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-2">
              <span className="text-blue-600 font-semibold">{job.company}</span>
              <span>•</span>
              <span>{job.experienceRequired}</span>
              <span>•</span>
              <span>{job.salary}</span>
            </div>

            <p className="text-gray-500 text-sm line-clamp-1 max-w-2xl">
              {job.jobDescription}
            </p>
          </div>

          {/* 3. Skills (Hidden on small mobile, visible on tablet+) */}
          <div className="hidden lg:flex flex-wrap gap-2 w-48 justify-center">
            {job.skillsRequired.map((skill) => (
              <span key={skill} className="text-[11px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded border border-gray-200">
                {skill}
              </span>
            ))}
          </div>

          {/* 4. Action Section */}
          <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:min-w-[120px] border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{timeAgo(job.postedAt)}</span>
            <button className="ml-auto md:ml-0 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-sm">
              View Job
            </button>
          </div>

        </div>)) : null}

    </div>
   
   
     </>
  )
}

export default Home
