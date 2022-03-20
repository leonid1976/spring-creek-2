import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'
import {Navbar, Nav, Button} from 'react-bootstrap';
import logo from '../../public/images/sc-logo-orange.svg'
import invitationImage from '../../public/images/come-say-gday-white.svg'
import facebookIcon from '../../public/images/facebook-f.svg'
import instagramIcon from '../../public/images/Insta.svg'



// type SelectCallback = {
//   eventKey: string | null,
//   e: React.SyntheticEvent<unknown>,
// }

export const Menu: React.FC = () => {



  const [key, setKey] = useState<string>('1');

  const handleSelect = (  eventKey: any ,
    e: React.SyntheticEvent<unknown>,) => {
      setKey(eventKey);
  };

  const handleLogo = (event: React.MouseEvent<HTMLAnchorElement> ) => {
      setKey('1');
  };

  const handleCollapse = () => {

    let screenWidth = Math.max(window.screen.width, window.innerWidth)
    let nav: HTMLElement | null = document.querySelector(".navbar-collapse");
    let btn: HTMLElement | null = document.querySelector(".navbar-toggler");

    if(btn && screenWidth < 992) {
      btn.click()
    }
  };


  return (
    <Navbar className="p-0" bg="transparent" expand="lg">
      <Navbar.Brand>
        <Link href={"/"} passHref>
          <a onClick={handleLogo} className='Navbar__logo'>
          <Image src={logo} width={225} height={120} alt="Spring Creek Logo"/>
          </a>
        </Link>
      </Navbar.Brand>
      <div className='navbar__invitation'>
        <Image src={invitationImage} layout="fixed" width={163} alt="Come say G'day"/>
      </div>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      

      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={key}  defaultActiveKey="1" onSelect={handleSelect}>
            <Link href={'/'} passHref><Nav.Link eventKey="1" className="nav_first-item" onClick={handleCollapse}>HOME</Nav.Link></Link>
            <Link href={'/lifestyle'} passHref><Nav.Link eventKey="2" onClick={handleCollapse}>LIFESTYLE</Nav.Link></Link>
            <Link href={'/land-for-sale'} passHref><Nav.Link eventKey="3" onClick={handleCollapse}>LAND FOR SALE</Nav.Link></Link>
            <Link href={'/house-and-land'} passHref><Nav.Link eventKey="4" onClick={handleCollapse}>HOUSE &amp; LAND</Nav.Link></Link>
            <Link href={'/news-and-events'} passHref><Nav.Link eventKey="5" onClick={handleCollapse}>NEWS &amp; EVENTS</Nav.Link></Link>
            <Link href={'/building-information'} passHref><Nav.Link eventKey="6" onClick={handleCollapse}>BUILDING INFORMATION</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="primary" href="#register">REGISTER YOUR INTEREST</Button> 
    </Navbar>
  )
}
