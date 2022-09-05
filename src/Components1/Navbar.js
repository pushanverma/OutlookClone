import React from 'react'
import Inbox from '../components/Inbox'
import Spam from '../components/Spam'
import Deleted from '../components/Deleted'
import Home from '../components/Home'
import Star from '../components/Star'
import NewInbox from '../components/NewInbox'
import {Link,Route,Routes} from 'react-router-dom';
import Adding from '../components/Adding'

function Navbar() {
  return (
   <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary navi">
  <a className="navbar-brand" href="#" ><Link to="/Home" style={{color:"white"}}>Microsoft OutLook</Link> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="">
        <Link to="/Home"style={{color:"white"}}>Home</Link> 
         <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href=""><Link to="/Inbox"style={{color:"white"}}>Inbox</Link></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#"> <Link  to="/Spam">Spam Mails</Link></a>
          {/* <a className="dropdown-item" href="#"> <Link to="/Deleted">Deleted Mails</Link>  </a> */}
          <a className="dropdown-item" href="#"> <Link to="/Star">Star Marked</Link> </a>
          {/* <a className="dropdown-item" href="#"> <Link to="/NewInbox">New Inbox</Link> </a> */}

        </div>

      </li>
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Inbox' element={<Inbox/>}/>
    <Route path='/Spam' element={<Spam/>}/>
    <Route path='/Deleted' element={<Deleted/>}/>
    <Route path='/Star' element={<Star/>}/>
    <Route path='/NewInbox' element={<NewInbox/>}/>
    <Route path='/Adding' element={<Adding/>}/>
    
</Routes>


   </>
  )
}

export default Navbar
