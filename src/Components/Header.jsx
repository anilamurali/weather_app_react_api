import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light style={{background:'rgba(14, 0, 104, 1)'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
            className='rounded-circle border border-3 border-light'
              src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif'
              height='55'
              alt=''
              loading='lazy'
            />
            <h2 className="text-light ms-3 mt-3">Wheather App</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header