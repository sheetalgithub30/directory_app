import React, { useEffect, useState } from "react";

function Retrieve() {
  const [data, setData] = useState("");
  const [aadhar, setAadhar] = useState("");
  const[result,setResult] = useState("");


  useEffect(() => {
    if (localStorage.getItem("user")) {
      let array = JSON.parse(localStorage.getItem("user"));
      setData(array);
    }
  }, []);


  function find(e){
    e.preventDefault();
    let new_arr =[...data];
     setResult(new_arr.find((e)=>{
      return e.aadhar == aadhar;
     }))

  }

  return (
    <div className="mx-11 border-2 border-black p-2  h-[75vh]">
      <span className="border-2 border-black py-1 px-9 ">
        Retrieve Information
      </span>
      <div className="m-11">
        <form onSubmit={find}>

        <input
          type="number"
          placeholder="Enter Aadhar Number"
          value={aadhar}
          onChange={(e) => setAadhar(e.currentTarget.value)}
          min="100000000000"
          max="999999999999"
          required
          className="border-2 p-2 m-1 w-72"
        ></input>
        <button
        type="submit"
         className="m-2 px-4 py-2 border-2 border-black bg-yellow-400 rounded-xl">
          Find
        </button>
                
        </form>
      </div>
      <div>
        {result ? (
          <>
            <div className="border-2 m-2 w-72 p-2">
               <p>Name : {result.name}</p>
               <p>Date of birth : {result.dob}</p>
               <p>Aadhar Number : {result.aadhar}</p>
               <p>Mobile Number : {result.mobile}</p>
               <p>Age : {result.age}</p>
            </div>
        
          </>
        ) : (
          <p className="text-center h-24 text-4xl">No Data !!!</p>
        )}
      </div>
    </div>
  );
}

export default Retrieve;
