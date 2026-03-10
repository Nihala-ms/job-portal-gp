import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../Redux/slice/jobSlice'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'



function Home() {

  const { allJobs } = useSelector(state => state.jobReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  function timeAgo(dateString) {
    const now = new Date();
    const posted = new Date(dateString);
    const diff = now - posted;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  }
 
 const currentUser = useSelector((state) => state.userReducer.currentUser)
 
  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen p-6">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

          {/* LEFT PROFILE CARD */}
          <div className="col-span-3 hidden lg:block">

            <div className="bg-white rounded-xl shadow p-5">

              <div className="flex flex-col items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://i.pravatar.cc/150"
                  alt=""
                />

                <h3 className="font-bold mt-3 text-lg">{currentUser?.name}</h3>
                <p className="text-sm text-gray-500">{currentUser?.email}</p>
              </div>

              <hr className="my-4" />

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Profile views</span>
                  <span className="font-bold text-blue-600">25</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Connections</span>
                  <span className="font-bold text-blue-600">120</span>
                </div>

              </div>

            </div>

          </div>


          {/* CENTER JOB FEED */}
          <div className="col-span-12 lg:col-span-6 space-y-5">

            {allJobs.length > 0 && allJobs.map(job => (

              <div key={job.id} className="bg-white rounded-xl shadow p-5 hover:shadow-md transition">

                <div className="flex gap-4">

                  <img
                    className="w-14 h-14 rounded-lg object-cover"
                    src={job.companyLogo}
                    alt=""
                  />

                  <div className="flex-1">

                    <h3 className="font-bold text-lg">{job.jobTitle}</h3>

                    <p className="text-sm text-gray-600">
                      {job.company} • {job.experienceRequired}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      {job.salary}
                    </p>

                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {job.jobDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {job.skillsRequired.map(skill => (

                        <span
                          key={skill}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                    <div className="flex justify-between items-center mt-4">

                      <span className="text-xs text-gray-400">
                        {timeAgo(job.postedAt)}
                      </span>
<Link to={`/view/${job.id}`}>

                      <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-700">
                        View Job
                      </button>
                      </Link>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* RIGHT SIDE PANEL */}
          <div className="col-span-3 hidden lg:block">

            <div className="bg-white rounded-xl shadow p-5">

              <h3 className="font-bold mb-3">Trending Jobs</h3>

              <ul className="space-y-3 text-sm">

                <li className="hover:text-blue-600 cursor-pointer">
                  React Developer
                </li>

                <li className="hover:text-blue-600 cursor-pointer">
                  UI/UX Designer
                </li>

                <li className="hover:text-blue-600 cursor-pointer">
                  Backend Developer
                </li>

                <li className="hover:text-blue-600 cursor-pointer">
                  Full Stack Developer
                </li>

              </ul>

            </div>

          </div>

        </div>
        <Footer/>

      </div>
      
    </>
  )

}

export default Home