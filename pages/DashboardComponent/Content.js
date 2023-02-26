import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.scss';
import  Table  from '../table/Table';
import DataFetch from '../table/DataFetch';
function Content(props) {
  const [profile, setProfile] = useState(false);

  const {openSidebar} = props

  const onProfileHandler = () =>{
    setProfile(false)
  }

  return (
    <>
      <div className='container-fluid' onClick ={onProfileHandler} >
        <div className='row'>
          <div className='col-lg-4 p-3'>
            <Table />
          </div>
          <div className='col-lg-4'>
            <DataFetch />
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default Content