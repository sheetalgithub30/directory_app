import React, { useState } from "react";

function New() {
   const[fill,setFill] = useState(false);
  return (
    <div className="mx-11 border-2 border-black p-2">
      <span className="border-2 border-black p-1 ">Add New Person</span>
      <div className="mt-5 mx-2 relative h-[67vh]">
        <table className="w-full border-collapse ">
          <tr className="bg-blue-900 text-white">
            <th>Name</th>
            <th>Date of birth</th>
            <th>Aadhar Number</th>
            <th>Mobile Number</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          <tr>
            {/* <td>heelo</td>
            <td>jdsjk</td>
            <td>heelo</td>
            <td>jdsjk</td>
            <td>heelo</td>
            <td>heelo</td> */}
          </tr>
        </table>
        {fill ? 
        <div className="m-2 p-2 bg-blue-500">
            <h2 className="text-center">Fill below form for New Entry</h2>
            <div className="flex justify-around items-center">
            <table id="info" className="w-full border-collapse">
            <tr className="p-1 ">
            <td><input type="text" placeholder="Name"></input></td>
            <td><input type="date"></input></td>
            <td><input type="number" placeholder="Aadhar Number"></input></td>
            <td><input type="number" placeholder="Mobile Number"></input></td>
            <td><input type="number" placeholder="Age" disabled></input></td>
            <td><button>Save</button></td>
          </tr>
            </table>
                </div>
        </div>
        :
        <></>}
        <button className="px-5 py-1 bg-blue-900 text-white rounded-xl absolute right-0 bottom-0" onClick={()=>setFill(true)}>Add</button>
      </div>
    </div>
  );
}

export default New;
