import '../assets/styles/pages/home.css'
import ColContainer from '../components/col-container'
import tanulasImg from '../assets/images/tanulas.png'
import kalandImg from '../assets/images/kaland.png'
import irasImg from '../assets/images/iras.png'
import bookIco from '../assets/icons/book_ribbon_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import swordIco from '../assets/icons/swords_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import writeIco from '../assets/icons/history_edu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
function Home() {
    return (
        <div id="home-container">
            <ColContainer
                icoSrc={bookIco}
                imageSrc={tanulasImg}
                title="Learn Dungeon Online"
                actionStr='LEARN'
                destination='/'
            />
            <ColContainer
                icoSrc={swordIco}
                imageSrc={kalandImg}
                title="Venture trough storys"
                actionStr='PLAY'
                destination='/'
            />
            <ColContainer
                icoSrc={writeIco}
                imageSrc={irasImg}
                title="Write your own adventure"
                actionStr='WRITE'
                destination='/'
            />
        </div>

    );
}
export default Home;