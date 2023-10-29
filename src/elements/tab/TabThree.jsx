import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [

    {
        image: '03',
        bigImage: '/assets/images/portfolio/dp-portfolio-03.jpg',
        category: 'Programming',
        title: 'Hard at work'
    },
    {
        image: 'prog2',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog2.jpg',
        category: 'Programming',
        title: 'myBobcat - a student information app',
        buttonText: 'View App Store',
        buttonLink: 'https://apps.apple.com/us/app/bhhs-mybobcat/id6462968639'
    },
    {
        image: 'prog9',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog9.jpg',
        category: 'Programming',
        title: 'myBobcat - events page',
        buttonText: 'View Play Store',
        buttonLink: 'https://play.google.com/store/apps/details?id=com.blaksky.myBobcat&hl=en_US&gl=US'
    },
    {
        image: 'prog3',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog3.jpg',
        category: 'Programming',
        title: 'A student\'s work with AI'
    },
    {
        image: 'prog4',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog4.jpg',
        category: 'Programming',
        title: 'A self-developed TCP socket server in C++',
        buttonText: 'View GitHub',
        buttonLink: 'https://github.com/benmaxlevy/basic_socket_server'
    },
    {
        image: 'prog5',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog5.jpg',
        category: 'Programming',
        title: 'A flight instruction website developed for a client'
    },
    {
        image: 'prog6',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog6.jpg',
        category: '3D Printing',
        title: 'Upgrading a motherboard and stepper drivers'
    },
    {
        image: 'prog7',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog7.jpg',
        category: '3D Printing',
        title: 'The final result of the upgrades'
    },
    {
        image: 'prog8',
        bigImage: '/assets/images/portfolio/dp-portfolio-prog8.jpg',
        category: 'Computers',
        title: 'My current self-built computer'
    },


]


const TabTwo = [
    {
        image: 'asr3',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr3.jpg',
        category: 'Obtaining a science research mentor',
        title: 'Beginning the research journey'
    },
    {
        image: 'asr6',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr6.jpg',
        category: 'Science research mentor',
        title: 'Working with professionals to make a difference',
        buttonText: 'View First Abstract',
        buttonLink: 'https://drive.google.com/file/d/1B8N4bjYJrK1tqb7uqq8vvBmVp9hib1wb/view?usp=sharing'
    },
    {
        image: 'asr4',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr4.jpg',
        category: 'Regeneron Westchester Science & Engineering Fair',
        title: 'Setting up to present my research',
        buttonText: 'View Second Abstract',
        buttonLink: 'https://drive.google.com/file/d/1ICw3NV2D7Mvg-rAfs4Oc_4Cwu_nVGlZB/view?usp=sharing'
    },
    {
        image: 'asr2',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr2.jpg',
        category: 'Regeneron Westchester Science & Engineering Fair',
        title: 'Advocating for positive change with research'
    },
    {
        image: 'asr1',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr1.jpg',
        category: 'The Fab 5',
        title: 'Making our symposiums shine'
    },
    {
        image: 'asr5',
        bigImage: '/assets/images/portfolio/dp-portfolio-asr5.jpg',
        category: 'The Fab 5',
        title: 'The day of the symposium'
    },

]

const TabThree = [
    {
        image: 'cap1',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap1.jpg',
        category: 'Color guard',
        title: 'Representing CAP during the Frosty Day parade',
        buttonText: 'View Website',
        buttonLink: 'https://gocivilairpatrol.com'
    },
    {
        image: 'cap8',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap8.jpg',
        category: 'Color guard',
        title: 'Honoring a beloved commander'
    },
    {
        image: 'cap2',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap2.jpg',
        category: 'Encampment',
        title: 'Celebrating the end of a week filled with learning'
    },
    {
        image: 'cap3',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap3.jpg',
        category: 'Encampment',
        title: 'Reflecting on a great week'
    },
    {
        image: 'cap4',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap4.jpg',
        category: 'Encampment',
        title: 'Touring a C-5 Galaxy'
    },
    {
        image: 'cap5',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap5.jpg',
        category: 'Encampment',
        title: 'Being the guidon bearer for my flight'
    },
    {
        image: 'cap7',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap7.jpg',
        category: 'Encampment',
        title: 'Bonding with fellow cadets'
    },
    {
        image: 'cap9',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap9.jpg',
        category: 'Encampment',
        title: 'Looking back on a week full of collaboration'
    },
    {
        image: 'cap6',
        bigImage: '/assets/images/portfolio/dp-portfolio-cap6.jpg',
        category: 'Learning to fly',
        title: 'Taking the controls of a Cessna 182'
    },
]

const TabFour = [
    {
        image: '02',
        bigImage: '/assets/images/portfolio/dp-portfolio-02.jpg',
        category: 'BBPVW Varsity Swim Team',
        title: 'A true swimming family'
    },
    {
        image: 'athletics3',
        bigImage: '/assets/images/portfolio/dp-portfolio-athletics3.jpg',
        category: 'Telemark Skiing',
        title: 'Skiing the slopes, one turn at a time'
    },
    {
        image: '01',
        bigImage: '/assets/images/portfolio/dp-portfolio-01.jpg',
        category: 'Telemark Skiing',
        title: 'Bonding with my father over skiing'
    },

    {
        image: 'athletics4',
        bigImage: '/assets/images/portfolio/dp-portfolio-athletics4.jpg',
        category: 'Telemark Skiing',
        title: 'Becoming a better telemark skier'
    },
    {
        image: 'athletics5',
        bigImage: '/assets/images/portfolio/dp-portfolio-athletics5.jpg',
        category: 'Marlins Club Swim Team',
        title: 'Blasting off the block'
    },
    {
        image: 'athletics6',
        bigImage: '/assets/images/portfolio/dp-portfolio-athletics6.jpg',
        category: 'Marlins Club Swim Team',
        title: 'Improving my technique'
    },
]

const TabFive = [

    {
        image: 'sam1',
        bigImage: '/assets/images/portfolio/dp-portfolio-sam1.jpg',
        category: 'Samaritans Hope',
        title: 'Meeting the senior training manager',
        buttonText: 'View Website',
        buttonLink: 'https://samaritanshope.org'

    },
    {
        image: 'sam3',
        bigImage: '/assets/images/portfolio/dp-portfolio-sam3.jpg',
        category: 'Samaritans Hope',
        title: 'Seeing Samaritans staff in person',

    },
    {
        image: 'sam2',
        bigImage: '/assets/images/portfolio/dp-portfolio-sam2.jpg',
        category: 'Samaritans Hope',
        title: 'Running for suicide prevention',

    },

]

class TabStyleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            tab5: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, tab2, tab3, tab4, tab5, isOpen } = this.state;
        return (
            <div>
                <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab><span>Technology</span></Tab>
                                    <Tab><span>Authentic Science Research</span></Tab>
                                    <Tab><span>Civil Air Patrol</span></Tab>
                                    <Tab><span>Athletics</span></Tab>
                                    <Tab><span>Samaritans Hope</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>

                    <TabPanel className="row row--35">
                        {TabOne.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                        prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { (value.buttonText && value.buttonLink) ?
                                        (<a target="_blank" style={{marginRight: 5, marginBottom: 5}} className="rn-button-style--2 btn-primary-color"  href={`${value.buttonLink}`}>{value.buttonText}</a>)
                                        : (<></>)
                                    }
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabTwo.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabTwo[tab2].bigImage}
                                        nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                        prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab2: (tab2 + 1) % TabTwo.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab2: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { (value.buttonText && value.buttonLink) ?
                                        (<a target="_blank" style={{marginRight: 5, marginBottom: 5}} className="rn-button-style--2 btn-primary-color"  href={`${value.buttonLink}`}>{value.buttonText}</a>)
                                         : (<></>)
                                    }
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabThree.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabThree[tab3].bigImage}
                                        nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                        prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab3: (tab3 + 1) % TabThree.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab3: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { (value.buttonText && value.buttonLink) ?
                                        (<a target="_blank" style={{marginRight: 5, marginBottom: 5}} className="rn-button-style--2 btn-primary-color"  href={`${value.buttonLink}`}>{value.buttonText}</a>)
                                        : (<></>)
                                    }
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFour.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFour[tab4].bigImage}
                                        nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                                        prevSrc={TabFour[(tab4 + TabFour.length - 1) % TabFour.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab4: (tab4 + 1) % TabFour.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab4: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { (value.buttonText && value.buttonLink) ?
                                        (<a target="_blank" style={{marginRight: 5, marginBottom: 5}} className="rn-button-style--2 btn-primary-color"  href={`${value.buttonLink}`}>{value.buttonText}</a>)
                                        : (<></>)
                                    }
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFive.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFive[tab5].bigImage}
                                        nextSrc={TabFive[(tab5 + 1) % TabFive.length]}
                                        prevSrc={TabFive[(tab5 + TabFive.length - 1) % TabFive.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                            this.setState({
                                                tab4: (tab5 + TabFive.length - 1) % TabFive.length,
                                            })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab5: (tab5 + 1) % TabFive.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab5: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href="#portfolio-details">
                                                        <img src={`/assets/images/portfolio/dp-portfolio-${value.image}.jpg`} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    { (value.buttonText && value.buttonLink) ?
                                        (<a target="_blank" style={{marginRight: 5, marginBottom: 5}} className="rn-button-style--2 btn-primary-color"  href={`${value.buttonLink}`}>{value.buttonText}</a>)
                                        : (<></>)
                                    }
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                </Tabs>
            </div>
        )
    }
}


export default TabStyleThree
