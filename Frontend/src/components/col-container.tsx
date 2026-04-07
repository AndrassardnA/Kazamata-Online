import { Link } from "react-router-dom";
type Props = {
    icoSrc: string,
    imageSrc: string,
    title: string
    actionStr: string;
    destination: string;
}

function ColContainer(value: Props) {
    return (
        <Link to={value.destination} className="column-container" style={{ textDecoration: 'none' }}>
            <div className='blur-cont'>
                <img className="bg-img" src={value.imageSrc} alt="kep" />
                <div className='col-title'>
                    <img id='icon' src={value.icoSrc} alt="icon" />
                    <div>{value.title}</div>
                </div>
            </div>
            <div className='hover-text'>{value.actionStr}</div>
        </Link>
    )
}
export default ColContainer;