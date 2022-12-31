// Import Assets
import flutter from '../assets/flutter.png';
import nft_marketplace from '../assets/nft_marketplace.png';
import disney_token from '../assets/disney_pictures.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Flutter</h3>
                    <img src={flutter} alt="FLutter" />
                    <p>CalisthAnyWhere is a guide app for Calishtenics training. It is built with the Dart programming language. Released on May 11, 2021.
                    </p>

                    <a href="https://www.apklis.cu/application/com.application.kaiznkinc.calistenico" target="_blank" className="button">Site</a>
                    <a href="https://github.com/Kaiznk/calisthanywhere_flutter" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src={nft_marketplace} alt="NFT Marketplace" />
                    <p>NFT Marketplace like OpenSea. You can create, sell and buy NFTs like in big companies. It is 
                        made with the JavaScript and Solidity programming languages.
                    </p>

                    <a href="https://github.com/Kaiznk/nft_marketplace" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Disney Token</h3>
                    <img src={disney_token} alt="Disney Token" />
                    <p>This project creates a token for Disney's amusement park. With this token people can use the attractions and buy food.
                    </p>

                    <a href="https://github.com/Kaiznk/disney_token" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;