import React from 'react'


const LectureThree = () => {
 let startTime=()=> {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      }

 let checkTime=(i)=> {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }

  return (
    <>
        <div className="text-center">
            
       <button id="txt" className='btn btn-warning btn-lg' onClick={startTime}>
       See Time🙄?
        </button>
        </div>


    </>
  )
}

export default LectureThree