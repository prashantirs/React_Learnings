// rafce
import React, { useEffect } from "react";

let count=0;

const LectureTwo = () => {
  //useEffect will run after render of root element
  useEffect(() => {
    console.log("Lecture 2 useEffect");
    // [] it means it will run only once after rendering by anymeans like onclick or on sumbit
  });

  const handelClick=()=>{
      if(count%2===0)
      {

          document.getElementById("demo").innerHTML = Date();
          count++;
        }else{
            
            document.getElementById("demo").innerHTML = "Click upper button to see date";
            count++;
      }
  }

  return (
    <>
      <div className="text-center">
        <button type="button" className="btn btn-warning btn-lg" onClick={handelClick}>
          Learning UseEffect Hooks
        </button>
        <p id="demo" className="text-warning my-3">Click upper button to see date</p>
      </div>
    </>
  );
};

export default LectureTwo;
