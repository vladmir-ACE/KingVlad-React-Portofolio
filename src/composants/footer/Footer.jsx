
import gmail from "../../assets/images/logo/gmail.png";
import mobile  from '../../assets/images/logo/mobile.png';


function Footer() {

    return (

        <div class="d-flex flex-wrap justify-content-center text-white bg-dark foot" id="contact">
            <div>
                <h1 class="text-center">Besoin d'un service de qualité? Contactez Moi &#128521;</h1>
                <h4 class="text-center"><img src={gmail} className="Icone"/>  :  vladgnouyaro@gmail.com</h4>
                <h4 class="text-center"> <img src={mobile} className="Icone"/>  :+228 93 54 75 86</h4>
            </div>
        </div>
    )
    
}
export default Footer;