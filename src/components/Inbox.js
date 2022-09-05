import { useState ,useEffect} from "react";
import React from 'react'
import Navbar from '../Components1/Navbar'
import { connect } from 'react-redux';
// import {Provider} from 'react-redux'
import store from '../redux/store';
import Adding from './Adding';
import {Route,Routes, Link} from 'react-router-dom';
import NewInbox from "./NewInbox";
import Inboxit from '../json/inbox.json';
import buttonReducer from "../redux/ButtonReducer";


// import Aman from './aman';

function Inbox(props)
{ 

  const [data,setData]=useState([]);

  console.log(props.inboxMessages,"useEffect is called ");
  useEffect(()=>{
    if(props.inboxMessages){
      setData(props.inboxMessages)
    }
  },[props.inboxMessages]);


  return (
    <>
    <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col" className='contentwala'>Content</th>     
    </tr>
  </thead>


  {
    data.map((inbox,index)=>{    
        return(
        <div key={inbox.mId}>
                <table class="table table-striped">
  <tbody>
    <tr>
      <th scope="row">{inbox.subject}</th>
      <td> <i>{inbox.content}</i> </td>
      <button className='fnbtn' onClick={()=>props.btnspam(index)}>Spam</button>
      {/* <button className='fnbtn' onClick={()=>props.btndelete(index)}>Delete</button> */}
      <button className='fnbtn' onClick={()=>props.btnstar(index)}>Star</button>
      <button className='fnbtn'  onClick={()=>props.btnremove(index)}>Remove</button>    
     </tr>
  </tbody>
</table> 
        </div>
        
        );
      })
    } 


<Routes>
{/* <Route path='/aman' element={<Aman/>}/> */}
    <Route path='/NewInbox' element={<NewInbox/>}/>
  {/* <Route path ='/add' element ={<Adding/>}/> */}
</Routes>

    <button className='fnbtn'><Link style={{color:"white"}} to="/Adding">Compose Email</Link></button>
    </>
  ) 
}

//state is coming here 
const mapStateToProps=(state)=>{ 
 console.log('......mapStatetoProps is called ',state.inbox)
console.log(state);
  return {
    inboxMessages:state.button.inbox
    // inboxMessages:null
    }
  }
  
  //action will be dispatch , one's it gets checked from above .

  const mapDispatchToProps=(dispatch)=>{
    console.log("******mapDispactchToProps is called")
  return {

    btnspam : (index)=>dispatch({type:"spam",payload:index}),
    btndelete : (index)=>dispatch({type:"delete",payload:index}),
    btnstar : (index)=>dispatch({type:"star",payload:index}),
    btnremove : (index)=>dispatch({type:"remove",payload:index}),
    
   }

  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Inbox)

