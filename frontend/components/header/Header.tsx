import './Header.scss';
import lekab from './images/lekab-white.svg';
export default function Header() {
    return (
        <>
            <header className='app-header'>
                <img className='lekab-logo' src={lekab} alt="Lekab"/>
            </header>
        </>
    );
}