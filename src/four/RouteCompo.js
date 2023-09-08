import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
import { Route,Routes } from 'react-router-dom'
const RouteCompo = () => {
  return (
    <div>
    
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/> }/>
       <Route path='/editstudent' element={<EditStudent/>}/>
     </Routes>
    
    
    </div>
  )
}

export default RouteCompo
