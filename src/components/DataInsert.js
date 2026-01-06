import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const DataInsert = () => {
  const navigate=useNavigate()
  const [rno,setRno]=useState("")
   const [sname,setSname]=useState("")
    const [mark,setMark]=useState("")
     const [rank,setRank]=useState("")
     const [finres,setFiners]=useState([])

     const dis=(event)=>{
      if(event.target.id==="rno")
        setRno(event.target.value)
      if(event.target.id==="sname")
        setSname(event.target.value)
      if(event.target.id==="mark")
        setMark(event.target.value)
      if(event.target.id==="rank")
        setRank(event.target.value)
     }
     const result=()=>{
      const resjson={
        rno:rno,
        sname:sname,
        mark:mark,
        rank:rank
      }
      console.log("my json:",resjson)
      setFiners([resjson,...finres])
     }
  return (
    <div>
      <h1>Student Information - Insert/Save forms</h1>
      <br></br>
      <input type="text" id="rno" onChange={(ev)=>dis(ev) } value={rno} placeholder='enter roll number'></input><br></br>
      <input type="text" id="sname"onChange={(ev)=>dis(ev) }value={sname} placeholder='enter student name'></input><br></br>
      <input type="text" id="mark"onChange={(ev)=>dis(ev) }value={mark} placeholder='enter your mark'></input><br></br>
      <input type="text" id="rank"onChange={(ev)=>dis(ev) }value={rank} placeholder='enter your rank'></input><br></br>
      <button onClick={result}>Store to array</button>
      <button onClick={()=>navigate("/View")}>Go to View Component</button><br></br>
      <h1>Student result</h1>
      <hr size="2" color="blue"></hr>
      <br></br>
      {
      finres.map((item)=>
      <>
      Roll number: {item.rno}
      <br></br>
      Student Name:{item.sname}
      <br></br>
      Student Mark:{item.mark}
      <br></br>
      Student Rank:{item.rank}
      <hr size="2" color="blue" width="50%" align="left"></hr>
      

      </>

      )}
    </div>
  )
}

export default DataInsert
