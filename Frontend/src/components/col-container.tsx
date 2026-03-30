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
        <Link to={'/'} className="column-container" style={{ textDecoration: 'none' }}>
            <div id='blur-cont'>
                <img src={value.imageSrc} alt="kep" />
                <div id='col-title'>
                    <img id='icon' src={value.icoSrc} alt="icon" />
                    <div>{value.title}</div>
                </div>
            </div>
            <div id='hover-text'>{value.actionStr}</div>
        </Link>
    )
}
export default ColContainer;