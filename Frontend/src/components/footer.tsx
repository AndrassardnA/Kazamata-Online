import { Link } from "react-router-dom";
import '../assets/styles/components/footer.css'

function Footer(){
    return(
        <footer>
            <div>
               <Link to={'/'}>Contact us</Link> 
            </div>
            <div>
              <Link to={'/'}>Support us</Link>  
            </div>
        </footer>
    );
}
export default Footer;