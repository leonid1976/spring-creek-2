import { useRouter } from 'next/router'
import {useState} from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import comeSayGday from '../../public/images/come-say-gday-white.svg'
import footerBg from '../../public/images/Footer-4.jpeg'
import nexusLogo from '../../public/images/nexus-logo.svg'
import hubLogo from '../../public/images/hub-projects-white2.svg'

export const Footer: React.FC = () => {

  const router = useRouter()
  const [formValues, setFormValues] = useState({
    'first_name': '',
    'last_name': '',
    'email': '',
    'phone': '',
    'intrestedIn': '',
    'message': ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => {
      return {
        ...prev, 
        [event.target.name]: event.target.value,
      }
    })
  }

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.target as HTMLFormElement),
    // formDataObj = Object.fromEntries(formData.entries())

    try {
      await window.fetch("api/contact-form", {
        body: JSON.stringify(formValues),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
      }).then((response: any) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json()
      
      }).then(({message}) => {
        const form__response: HTMLElement | null = document.querySelector('footer .form__response')
        if (form__response) {
          form__response.classList.add('show')
          form__response.innerHTML = message;
          setFormValues({
            'first_name': '',
            'last_name': '',
            'email': '',
            'phone': '',
            'intrestedIn': 'I am interested in*',
            'message': ''
          });
          setTimeout(function(){
            form__response.classList.remove('show')
            form__response.innerHTML = '';
            router.push('/thank-you')
          }, 2000)  
        }
      })

    } catch(err) {
      console.log(err)
    }
  }  

  return (
    <footer id="register" className="footer">
      <div className="footer-wrap">
      <Image src={footerBg}  className='footer-bg' layout='fill' objectFit='cover' objectPosition='center' priority={true} alt="Footer image"/>
        <div className="form__wrap">
          <Image src={comeSayGday} alt="Come and say Gday" className="say-gday"/>
          <h2 className="form__heading mt-16">NEW RELEASE<br/>
            LAND FROM $189,000</h2>
          <div className="form__subheading">
            <span>REGISTER YOUR INTEREST NOW!</span><br/>
            Complete the form below or call Tony on 0409 482 482
          </div>

          <Form onSubmit={submitHandler}>
            <div className='flex-group'>
              <Form.Group className="w-48" controlId="first_name">
                <Form.Control 
                type="text" 
                name="first_name" 
                value={formValues.first_name}
                onChange={handleChange}
                required 
                placeholder="First Name*" />
              </Form.Group>

              <Form.Group className="w-48" controlId="last_name">
                <Form.Control 
                type="text" 
                name="last_name" 
                value={formValues.last_name}
                onChange={handleChange}
                required 
                placeholder="Last Name*" />
              </Form.Group>
            </div>            
            <div className='flex-group'>
              <Form.Group className="w-48" controlId="email">
                <Form.Control 
                type="email" 
                name="email" 
                value={formValues.email}
                onChange={handleChange}
                required 
                placeholder="Email*" />
              </Form.Group>

              <Form.Group className="w-48" controlId="tel">
                <Form.Control 
                type="tel" 
                name="phone" 
                value={formValues.phone}
                onChange={handleChange}
                required 
                placeholder="Phone*" />
              </Form.Group>
            </div>
            <div className='flex-group'>
              <Form.Group className="w-100" controlId="intrestedIn">
                <Form.Control 
                as="select" 
                value={formValues.intrestedIn}
                onChange={handleChange}
                required 
                name="intrestedIn">
                <option>I am interested in*</option>
                <option></option>
                <option value="Land">Land</option>
                <option value="House and Land">House &amp; Land</option>
                </Form.Control>
              </Form.Group>
            </div>     
            <div className='flex-group'>
              <Form.Group className="w-100" controlId="message">
                <Form.Control 
                type="textarea" 
                required 
                value={formValues.message}                
                onChange={handleChange}
                name="message" 
                placeholder="Message*" />
              </Form.Group>
            </div>                       
            <Button className="cta" variant="primary" type="submit">
              SEND ME MORE INFORMATION
            </Button>
            <div className="form__response"></div>
          </Form>

        </div> 
      </div>  

      <div className="footer-links">
          <span className="logo">
            <Image src={nexusLogo} alt="Nexus Logo" />
            <Image src={hubLogo} alt="The Property Hub Logo" />
            
            </span><br/>	 
            <a href="/disclamer/">DISCLAIMER</a>  &nbsp;•&nbsp;  <a href="/privacy-policy/">PRIVACY POLICY</a> <br/>
            COPYRIGHT 2021  &nbsp;•&nbsp; 
            
            WEBSITE BY 
            <Link href={"https://mama.com.au"} passHref>
            <a rel="noreferrer noopener" target="_blank">
              MAMA
            </a>
          </Link> 
            
        </div>    
    </footer>
  )
}