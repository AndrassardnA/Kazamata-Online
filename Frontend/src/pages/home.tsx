import '../assets/styles/pages/home.css'
import ColContainer from '../components/col-container'
import tanulasImg from '../assets/images/tanulas.png'
import kalandImg from '../assets/images/kaland.png'
import irasImg from '../assets/images/iras.png'
import bookIco from '../assets/icons/book_ribbon_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import swordIco from '../assets/icons/swords_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'
import writeIco from '../assets/icons/history_edu_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'

import szurke from '../assets/images/Xszurke.png'
import lila from '../assets/images/Xlila.png'
function Home() {
    return (
        <div id="home-container">
            <ColContainer
                icoSrc={bookIco}
                imageSrc={lila}
                title="Learn Dungeon Online"
                actionStr='LEARN'
                destination='/learn'
            />
            <ColContainer
                icoSrc={swordIco}
                imageSrc={lila}
                title="Venture through storys"
                actionStr='PLAY'
                destination='/play'
            />
            <ColContainer
                icoSrc={writeIco}
                imageSrc={lila}
                title="Write your own adventure"
                actionStr='WRITE'
                destination='/write'
            />
        </div>

    );
}
export default Home;