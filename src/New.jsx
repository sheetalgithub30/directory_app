import React, { useState } from "react";

function New() {
  const [fill, setFill] = useState(false);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

   
  

  function handle(e){
    setDob(e.currentTarget.value);
    let age = Number(2024) - Number((e.currentTarget.value).split("-")[0]);
    console.log(dob)
    setAge(age)
  }

  function save() {
    console.log(name,dob,aadhar,mobile)
    if(name=="" ||dob=="" || aadhar=="" || mobile=="" ){
        alert("All Fields are mandatory");
        return;
    }
    if(aadhar.length !=12){
        alert("Not a valid Aadhar");
        return; 
    }
    if(mobile.length !=10){
        alert("Not a valid Mobile Number");
        return; 
    }
    let obj = {};
    obj.name = name;
    obj.dob = dob;
    obj.aadhar = aadhar;
    obj.mobile = mobile;
    obj.age = age;
    setData([...data, obj]);
    setFill(false);
     setName("");
     setDob("");
     setAadhar("");
     setMobile("");
     setAge("");
  }

  function del(index){
   let new_arr = [...data];
   setData(new_arr.filter((e,ind)=>{
    return ind!== index;
   }));
  }

  return (
    <div className="mx-11 border-2 border-black p-2">
      <span className="border-2 border-black py-1 px-9 ">Add New Person</span>
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

          {data &&
            data.map((e,index) => {
             return <tr>
                <td>{e.name}</td>
                <td>{e.dob}</td>
                <td>{e.aadhar}</td>
                <td>{e.mobile}</td>
                <td>{e.age}</td>
                <td><button onClick={()=>del(index)}>Delete</button></td>
              </tr>;
            })}
        </table>
        {fill ? (
          <div className="mt-5 p-2 bg-blue-900">
            <h2 className="text-center">Fill below form for New Entry</h2>
            <div className="flex justify-around items-center">
              <table id="info" className="w-full border-collapse">
                <tr className="p-1 ">
                  <td>
                    <input
                    required
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) =>{
                        handle(e)}}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Aadhar Number"
                      value={aadhar}
                      onChange={(e) => setAadhar(e.currentTarget.value)}
                    ></input>
                  </td>
                  <td>
                    <input
                      type="number"
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.currentTarget.value)}
                    ></input>
                  </td>
                  <td>
                    <input type="number" placeholder="Age" value={age}
                    disabled></input>
                  </td>
                  <td>
                    <button onClick={save}>Save</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}
        <button
          className="px-5 py-1 bg-blue-900 text-white rounded-xl absolute right-0 bottom-0"
          onClick={() => setFill(true)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default New;
