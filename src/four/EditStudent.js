import React from "react";

import { useNavigate } from "react-router-dom";
const EditStudent = () => {
  const Navi = useNavigate();

  return (
    <>
      <form className="form">
        <div className="lform">
          <input type="text" id="name" placeholder="Name" name="Name" />
        </div>
        <div className="lform2">
          <input type="text" id="age" placeholder="Age" name="Age" />
        </div>
        <div className="lform3">
          <input type="text" id="course" placeholder="Course" name="Course" />
        </div>
        <div className="lform4">
          <input type="text" id="batch" placeholder="Batch" name="Batch" />
        </div>
        <button className="btn2" type="button" >
          Update Student
        </button>
        <button className="btn3" type="button" onClick={() => Navi("/student")}>
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditStudent;
