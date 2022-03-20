import {Menu} from '../Menu/Menu'
import Link from 'next/link'
import Image from 'next/image'
import facebookIcon from '../../public/images/facebook-f.svg'
import instagramIcon from '../../public/images/Insta.svg'

export const Header: React.FC = () => {
  return (
    <header>
      <Menu/>
      <div className="navbar__bottom">
        <div className="navbar__inv">
					Call Tony on:<br/>
					<a className="phone" href="tel:0409482482">0409 482 482</a><br/>
					Or visit us at: 50 Telemon St,<br/>
					Beaudesert, Qld, 4285<br/>
					(By Appointment only)
        </div>	
				<div className="navbar__socials">
          
          <Link href={"https://www.facebook.com/springcreekestate/"} passHref>
            <a className='navbar__social' rel="noreferrer noopener" target="_blank">
              <Image src={facebookIcon} alt="Facebook link"/>
            </a>
          </Link>

          <Link href={"https://www.instagram.com/springcreekbeaudesert/"} passHref>
            <a className='navbar__social' rel="noreferrer noopener" target="_blank">
              <Image src={instagramIcon} alt="Facebook link"/>
            </a>
          </Link> 

				</div>
			</div>

    </header>
  )
}