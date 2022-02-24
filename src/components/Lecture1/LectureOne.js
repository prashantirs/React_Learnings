import React, {useEffect, useState} from 'react'
import './LectureOne.css'

// import './App.css';

const LectureOne = () => {

  useEffect(() => {
    console.log("Lecture 1 useEffect")
  },[])
  
     //useState Hook insode function
  let initial=0;
  const [num, setNum] = useState(initial)

  const handelClick=()=>{
    const cur=num+1;
      setNum(cur);

      //we can right html string with javascript using literals
      document.title = `Chat (${cur})`;

  }

  const handelReset=()=>{
    setNum(initial);
    document.title = `Chat (${initial})`;
  }

  return (
    <>
    <div className="text-center">
     <div className="btn btn-primary b mx-2"  onClick={handelReset}>Reset 😋</div>
     <div className="btn btn-primary b mx-2" id="click" onClick={handelClick}>Click Me {num}😀</div>
    </div>
    </>
  )
}

export default LectureOne