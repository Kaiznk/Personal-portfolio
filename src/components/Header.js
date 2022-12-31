// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Yanniel Triana" />

            <div className='header__content'>
                <h1>Hi, I'm Yanniel Triana</h1>
                <p>Blockchain/Flutter Developer</p>
                <a href='mailto: kaiznkinc@gmail.com' className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;