import React from 'react'
import { useState } from "react";

function Info() {
     const [open, setOpen] = useState(false);
  return (
    <div>
         {/* Toggle button */}
      <button
        onClick={() => setOpen(true)}
        className="text-white bg-blue-600 px-1 py-1 rounded"
      >
        Edit
      </button>

       {/* Modal */}
      {open && (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black/50">
          <div className="bg-white p-6 rounded w-[400px]">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-medium">Edit personal information</h3>
              <button onClick={() => setOpen(false)}>X</button>
            </div>

            {/* Body */}
            <form className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="name"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Email"
                className="w-full border p-2 rounded"
              />

               <input
                type="text"
                placeholder="location"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                placeholder="Gender"
                className="w-full border p-2 rounded"
              />

              

              <div className="flex justify-between pt-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Update
                </button>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
      
    </div>
  )
}

export default Info
