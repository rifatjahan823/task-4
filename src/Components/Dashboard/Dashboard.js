
import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,faBroom } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
    <div className='container py-5'>
     {/* --------------------for mobile tablet-------------   */}
     <div className='d-block d-lg-none'>
        <div className='row align-items-start'>
   <div className='col-12 my-3'>
   <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {/* <!-- Sidebar content here --> */}
            <li className='list-unstyled pb-4'> <CustomLink  to="logo">Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-4'> <CustomLink  to="flat">Flat & Minimalist Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-4'> <CustomLink  to="moscot">Mascot Logo Design </CustomLink ></li>
            <li className='list-unstyled pb-4'> <CustomLink  to="bisiness">Bisiness Card And Stationary </CustomLink ></li>
            {/* ---------------Fiyer Design T-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-4 me-1'> <CustomLink to="fiyer">Fiyer Design</CustomLink> </li>
               <li className='list-unstyled mb-4'> <CustomLink to="tshirt">T-shart Design</CustomLink> </li>
              </div>
            {/* ---------------Data EntryT-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-4 me-1'> <CustomLink to="dataentry">Data Entry</CustomLink> </li>
               <li className='list-unstyled mb-4'> <CustomLink to="digital">Digital Marketing</CustomLink> </li>
              </div>
              <li className='list-unstyled mb-4'> <CustomLink  to="photo">Photo Background Remove </CustomLink ></li>
              <li className='list-unstyled mb-4'> <CustomLink  to="ux">Ui/ UX Design </CustomLink ></li>
              <li className='list-unstyled '> <CustomLink  to="website">Website Design & Deveiopment </CustomLink ></li>
        </Offcanvas.Body>
      </Offcanvas>
  </div>

    <div className='col-12'>
    <Outlet></Outlet>
    </div>
     </div>
        </div>

     {/* --------------------for mobile tablet-------------   */}

    <div className='d-none d-lg-block'>  
      <div className='row align-items-start'>
        <div className='col-4'>
            <div className='border pb-4 ' >
             <div className='row border-bottom pt-3 mb-4 px-3' style={{margin:"0 0px"}}>
                <div className='col-6'>
                    <hp><FontAwesomeIcon icon={faCaretDown} /> Filter</hp>
                </div>
                <div className='col-6 text-end '>
                  <p><FontAwesomeIcon icon={faBroom} /> Clear </p>
                </div>
              </div> 
            <li className='list-unstyled pb-4 ps-4'> <CustomLink  to="logo">Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-4 ps-4'> <CustomLink  to="flat">Flat & Minimalist Logo Design</CustomLink ></li>
            <li className='list-unstyled pb-4 ps-4'> <CustomLink  to="moscot">Mascot Logo Design </CustomLink ></li>
            <li className='list-unstyled pb-4 ps-4'> <CustomLink  to="bisiness">Bisiness Card And Stationary </CustomLink ></li>
            {/* ---------------Fiyer Design T-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-4 me-1 ps-4'> <CustomLink to="fiyer">Fiyer Design</CustomLink> </li>
               <li className='list-unstyled mb-4 ps-4'> <CustomLink to="tshirt">T-shart Design</CustomLink> </li>
              </div>
            {/* ---------------Data EntryT-shart Design------------ */}
              <div className='d-flex'>
              <li className='list-unstyled mb-4 me-1 ps-4'> <CustomLink to="dataentry">Data Entry</CustomLink> </li>
               <li className='list-unstyled mb-4 ps-4'> <CustomLink to="digital">Digital Marketing</CustomLink> </li>
              </div>
              <li className='list-unstyled mb-4 ps-4'> <CustomLink  to="photo">Photo Background Remove </CustomLink ></li>
              <li className='list-unstyled mb-4 ps-4'> <CustomLink  to="ux">Ui/ UX Design </CustomLink ></li>
              <li className='list-unstyled  ps-4'> <CustomLink  to="website">Website Design & Deveiopment </CustomLink ></li>
            </div>
        </div>
      <div className='col-8'>
          <h1 className='text-center mb-4' style={{background:"#196F3D",color:"white",padding:'10px 0'}}>PORTFOLIO</h1>
          <Outlet></Outlet>
    </div>
      </div>
    </div>
     </div>
    );
};

export default Dashboard;