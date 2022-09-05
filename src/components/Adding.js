import React, { useState } from 'react'
import Inboxit from '../json/inbox.json';
import { connect } from 'react-redux';
import {Link,Route,Routes} from 'react-router-dom';
import Inbox from './Inbox';

function Adding (props) 
{
  const[subject,setSubject]=useState("");
  const[content,setContent]=useState("");

  
console.log(".....Adding is called ...........1")
// console.log(props.Addmessage);
  return (
    <> 
        <input placeholder='Add subject ..' onChange={(event)=>{setSubject(event.target.value)}}></input> 
         <input placeholder='Add message..' onChange={(event)=>{setContent(event.target.value)}}></input> 
         {/* <button onClick={ ()=>props.btnadd(subject,content) }>Send Email</button>  */}
         <button onClick={()=>props.dispatch({ type:"compose",payload:{subject:subject,content:content} })}>Send Email</button> 
      
    </>    
  )

  }

// const mapStateToProps=(state)=>{
//   console.log("mapSTatetoProps of Add is called ");
//   console.log(state);
//   return 
//   {
//     Addmessage :state.addit.inbox  
//   }
// }

const mapDispatchToProps=(dispatch)=>{

return {
  dispatch,
  // btnadd :(subject,content) =>dispatch({type:"compose",payload :sub :{subject},cont :{content}})
};
};


export default connect(mapDispatchToProps)(Adding) 

// export default Adding