import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Typed from 'react-typed'

const Header = () =>{
    return(
        <div className="header-wrapper">
            <div className='main-info'>
                <h1>Web development and website promotions</h1>
                <Typed
                    className='typed-text'
                    strings={['Front-End Design', 'Web Development', 'Facebook Ads SMM', 'Google Ads']} 
                    typeSpeed={50}
                    backSpeed={30}
                    loop
                />
                <a href="#" className='btn-main-offer'>contact us</a>
            </div>
        </div>
    )
}

export default Header