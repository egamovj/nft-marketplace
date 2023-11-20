import './collection.css'
import dog from '../../assets/images/dog.png';
import cat from '../../assets/images/cat.png';
import beer from '../../assets/images/beer.png';
import mrFox from '../../assets/images/mr-fox.png';
import mushroom from '../../assets/images/mushroom.png';
import mushroom1 from '../../assets/images/mushroom-1.png';
import mushroom2 from '../../assets/images/mushroom-2.png';
import shroomie from '../../assets/images/shroomie.png';
import disco from '../../assets/images/disco.png';
import disco1 from '../../assets/images/disco-1.png';
import disco2 from '../../assets/images/disco-2.png';
import beKind from '../../assets/images/bekind.png';


const Collection = () => {
    return (
        <>
            <section className="collection">
                <div className="collection-container">
                    <div className="collection__wrapper">
                        <div className="collection__wrapper-texts">
                            <h3>Trending Collection</h3>
                            <p>Checkout our weekly updated trending collection.</p>
                        </div>
                        <div className='collection__wrapper-contents'>
                            <div className="collection__wrapper-content">
                                <img src={dog} alt="DSGN Animals"/>
                                <div className='collection__wrapper-content--images'>
                                    <img src={cat} alt="DSGN Animals"/>
                                    <img src={beer} alt="DSGN Animals" />
                                    <span>1025+</span>
                                </div>
                                <p>DSGN Animals</p>
                                <div className='collection__wrapper-content--bottom'>
                                    <img src={mrFox} alt="MrFox"/>
                                    <span>MrFox</span>
                                </div>
                            </div>
                            <div className="collection__wrapper-content">
                                <img src={mushroom} alt="DSGN Animals"/>
                                <div className='collection__wrapper-content--images'>
                                    <img src={mushroom1} alt="DSGN Animals"/>
                                    <img src={mushroom2} alt="DSGN Animals" />
                                    <span>1025+</span>
                                </div>
                                <p>Magic Mushrooms</p>
                                <div className='collection__wrapper-content--bottom'>
                                    <img src={shroomie} alt="MrFox"/>
                                    <span>Shroomie</span>
                                </div>
                            </div>
                            <div className="collection__wrapper-content">
                                <img src={disco} alt="DSGN Animals"/>
                                <div className='collection__wrapper-content--images'>
                                    <img src={disco1} alt="DSGN Animals"/>
                                    <img src={disco2} alt="DSGN Animals" />
                                    <span>1025+</span>
                                </div>
                                <p>Disco Machines</p>
                                <div className='collection__wrapper-content--bottom'>
                                    <img src={beKind} alt="MrFox"/>
                                    <span>BeKind2Robots</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>    
    )
}

export default Collection;