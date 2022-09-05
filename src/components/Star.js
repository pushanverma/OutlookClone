import React from 'react'
import Inboxit from '../json/inbox.json';
import Spamit from '../json/spam.json'

function Star() {
  return (
    <>
<thead>
    <tr>
      <th scope="col">Subject </th>
      <th scope="col" className='contentwala'>Content</th>    
     
    </tr>
   
  </thead>

      { Inboxit.filter( (inboxstatus) => inboxstatus.status=="star").map( (filterstatus) =>( 
        <div >
                <table class="table table-striped">
        <tbody>
    <tr>
      <th scope="row">{filterstatus.subject} </th>
      <td>   <i>{filterstatus.content}</i> </td> 
    </tr>
  </tbody> 
  </table> 
            </div> 
     
     ) 
     )
     }
    </>
  )
}

export default Star