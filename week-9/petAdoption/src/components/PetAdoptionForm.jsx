import React, { useState } from "react";
import TableData from "./TableData";

const PetAdoptionForm = ({TableData}) => {
  const [petname,setPetname]=useState("");
  const [type,setType]=useState("Dog");
  const [name,setName]=useState("");
  const [breed,setBreed]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [submitted,setSubmitted]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setSubmitted(true);
  }

  const formData={
    petname,
    type,
    breed,
    name,
    email,
    phone,
  }

  return (
    <div style={{backgroundColor:"FFD09B",padding:"20px"}}>
      {!submitted ?(
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Pet Name
            <br />
            <input type="text" value={petname} onChange={(e)=>setPetname(e.target.value)} placeholder="Pet Name" />
          </label>
        </div>
        <div>
          <label>
            Pet type
            <br />
            <select onChange={(e)=>setType(e.target.value)}>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Breed
            <br />
            <input type="text" value={breed} onChange={(e)=>setBreed(e.target.value)} placeholder="breed" />
          </label>
        </div>
        <div>
          <label>
            Your Name
            <br />
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Name" />
          </label>
        </div>
        <div>
          <label>
            Email
            <br />
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="your email" />
          </label>
        </div>
        <div>
          <label>
            Phone
            <br />
            <input type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="phone" />
          </label>
        </div>
        <div>
          <button style={{ cursor: "pointer" }}>Submit</button>
        </div>
      </form>
      ):(
        <TableData data={formData}/>
      )}
    </div>
  );
};

export default PetAdoptionForm;
