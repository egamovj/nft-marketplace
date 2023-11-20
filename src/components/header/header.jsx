import './header.css';
import logo from '../../assets/images/icons/logo.svg';
import user from '../../assets/images/icons/user.svg';
import rocket from '../../assets/images/icons/rocket-launch.svg'
import highlighted from '../../assets/images/header-img.png';
import animakid from '../../assets/images/animakid.png';

const Header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div className="container">
                        <div className='navbar'>
                            <a href="./index.html"><img className='navbar__logo' src={logo} alt="Logo"/></a>
                            <ul className='navbar__menu'>
                                <li className='navbar__menu-list'>
                                    <a className='navbar__menu-link' href="./index.html">Marketplace</a>
                                </li>
                                <li className='navbar__menu-list'>
                                    <a className='navbar__menu-link' href="./index.html">Rankings</a>
                                </li>
                                <li className='navbar__menu-list'>
                                    <a className='navbar__menu-link' href="./index.html">Connect a wallet</a>
                                </li>
                                <button className='btn'><img src={user} alt="User icon"/>Sign Up</button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className='hero'>
                    <div className="header-container">
                        <div className='hero__wrapper'>
                            <div className='hero__wrapper-left'>
                                <h1>Discover <br/> digital art & Collect NFTs</h1>
                                <p>NFT marketplace UI created with Anima for <br /> Figma. Collect, buy and sell art from more <br /> than 20k NFT artists.</p>
                                <button className='btn'><img src={rocket} alt="Rocket Launch" />Get Started</button>
                                <div className='hero__wrapper-left--bottom'>
                                    <div>
                                        <span>240k+</span>
                                        <p>Total Sale</p>
                                    </div>
                                    <div>
                                        <span>100k+</span>
                                        <p>Auctions</p>
                                    </div>
                                    <div>
                                        <span>240k+</span>
                                        <p>Artists</p>
                                    </div>
                                </div>
                            </div>
                            <div className='hero__wrapper-right'>
                                <img src={highlighted} alt="Highlighted NFT"/>
                                <div className='hero__wrapper-right--texts'>
                                    <h3>Space Walking</h3>
                                    <div>
                                        <img src={animakid} alt="Animakid" />
                                        <span>Animakid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;