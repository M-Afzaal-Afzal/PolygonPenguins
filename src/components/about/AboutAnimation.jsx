import React, {useState} from "react";
import Social from "../Social";
// import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
// import Awards from "../award/AwardsAnimation";
// import toadCycle from '../../assets/ToadCycle.mp4';
// import ReactPlayer from 'react-player'
import '../../assets/scss/youtubeVideo.scss';
import Collapsible from 'react-collapsible';
import '../../assets/scss/Faq.scss';
// import YoutubeEmbed from "../YouTubeEmbed";
import randomPenguins from '../../assets/randompenguins.gif';
import '../../assets/scss/mint.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const About = () => {

    const [selectedValue,setSelectedValue] = useState(1);

    const dropdownOptions = [
        { value: 1, label: '1 - PolygonPenguin' },
        { value: 2, label: '2 - PolygonPenguin' },
        { value: 3, label: '3 - PolygonPenguin' },
        { value: 5, label: '5 - PolygonPenguin' },
        { value: 10, label: '10 - PolygonPenguin' },
        { value: 20, label: '20 - PolygonPenguin' },
    ];

    const questions = [
        {
            id: 1,
            question: 'What network does PolygonPenguins operate on?',
            ans: 'PolygonPenguins runs on the legendary Polygon network.'
        },
        {
            id: 2,
            question: 'What does PolygonPenguins provide for users?',
            ans: `PolygonPenguins triples as your NFT collectible, digital key to exclusive IGLOO access, raffles and much more!`
        },
        {
            id: 3,
            question: 'How can I purchase a PolygonPenguin?',
            ans: `Head over to the Mint tab to mint a random PolygonPenguin.Once minting has started, secondary market sales will take place immediately on Opensea, and others such as Lootex coming soon.`
        },

    ]

    return (
        <>
            <section className="section theme-light dark-bg">

                <div className="container">

                    <div id="faq" className="row align-items-center justify-content-center">
                        <div
                            className="col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        {/*todo add the video there*/}
                                        {/*<video autoPlay loop muted playsInline className="img-fluid">*/}
                                        {/*    <source src={toadCycle} type="video/mp4"/>*/}
                                        {/*</video>*/}
                                        <img src={randomPenguins} alt="about image"/>
                                    </div>

                                    <Social/>

                                    {/* End social icon */}
                                </div>
                                {/* End img */}
                                <div className="info">
                                    {/*<p>Ux/Ui Designer</p>*/}
                                    {/*<h3>Nairobi Gadot</h3>*/}
                                </div>
                                {/* End info */}
                            </div>
                            {/* End about-me */}
                        </div>
                        {/* End col */}

                        <div
                            className="col-lg-7 ml-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                        >
                            <div className="about-info">
                                <div className="title">
                                    <h3>FAQ</h3>
                                </div>
                                <div className="about-text">
                                    {/*  todo add the faq there*/}

                                    {
                                        questions.map(({question, ans, id}) => (
                                            <Collapsible key={id} triggerTagName={'div'}
                                                         trigger={question}
                                            >
                                                <p>
                                                    {ans}
                                                </p>

                                            </Collapsible>
                                        ))
                                    }

                                    {/*  <p>*/}
                                    {/*    I'm a Freelancer Front-end Developer with over 3 years of*/}
                                    {/*    experience. I'm from San Francisco. I code and create web*/}
                                    {/*    elements for amazing people around the world. I like work*/}
                                    {/*    with new people. New people new Experiences.*/}
                                    {/*  </p>*/}
                                    {/*  <p>*/}
                                    {/*    I'm a Freelancer Front-end Developer with over 3 years of*/}
                                    {/*    experience. I'm from San Francisco. I code and create web*/}
                                    {/*    elements for amazing people around the world. I like work*/}
                                    {/*    with new people. New people new Experiences.*/}
                                    {/*  </p>*/}
                                </div>
                                {/*<div className="info-list">*/}
                                {/*  <div className="row">*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*      <ul>*/}
                                {/*        <li>*/}
                                {/*          <label>Name: </label>*/}
                                {/*          <span>Nairobi Gadot</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Birthday: </label>*/}
                                {/*          <span>4th April 1994</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Age: </label>*/}
                                {/*          <span>26 years</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Address: </label>*/}
                                {/*          <span>San Francisco</span>*/}
                                {/*        </li>*/}
                                {/*      </ul>*/}
                                {/*    </div>*/}
                                {/*    <div className="col-sm-6">*/}
                                {/*      <ul>*/}
                                {/*        <li>*/}
                                {/*          <label>Phone: </label>*/}
                                {/*          <span>(+38) 469 2344 2364</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Email: </label>*/}
                                {/*          <span>info@domainname.com</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Skype: </label>*/}
                                {/*          <span>nairob.40</span>*/}
                                {/*        </li>*/}
                                {/*        <li>*/}
                                {/*          <label>Freelance: </label>*/}
                                {/*          <span>Available</span>*/}
                                {/*        </li>*/}
                                {/*      </ul>*/}
                                {/*    </div>*/}
                                {/*  </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        {/* End col */}
                    </div>

                    {/*separated */}

                    <div
                        className="separated"
                        style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "img/border-dark.png"
                            })`,
                        }}
                    />

                    {/*End separated */}

                    {/* Section for mint*/}

                    <div id={'mint'} className={`shadow mx-auto rounded mint-container`}>
                        <div className={`row  align-items-center`}>

                            <div className={'p-4 col-sm-12 col-md-6'}>
                                <img className={`rounded-circle`}
                                     src={process.env.PUBLIC_URL + "img/slider/home-banner.jpg"} alt="Penguin"/>
                            </div>

                            <div className={'p-4 col-sm-12 col-md-6'}>
                                <h4>
                                    PolygonPenguins Minted
                                </h4>
                                <button className={`my-2 btn btn-secondary`}>
                                    182 / 8,888
                                </button>
                            </div>
                        </div>

                        <div className={`p-4 row align-items-center`}>

                            <div className={`col-sm-12 col-md-6 my-2`}>
                                <Dropdown
                                    options={dropdownOptions}
                                    onChange={(data) => {
                                        setSelectedValue(data.value);
                                        console.log(data);
                                    }}
                                    value={dropdownOptions[0]}
                                    placeholder="Select an option"
                                />
                            </div>

                            <div className={`col-sm-12 col-md-6`}>
                                <div style={{
                                    background: '#0d6efd',

                                }} className={`btn my-2 btn-success`}>
                                    MINT A RANDOM PENGUIN
                                </div>
                            </div>

                        </div>

                        <div className={`p-4 pt-0 row`}>
                            <h3 style={{
                                color: 'rgb(130, 79, 226)',
                            }}>
                                MINT FEE : {selectedValue * 35}
                            </h3>
                        </div>

                    </div>

                    {/*<div id={'videos'} className="title">*/}
                    {/*    <h3>Featured Video</h3>*/}
                    {/*</div>*/}

                    {/*    Video Section   */}
                    {/*<div*/}
                    {/*    // className={'player-wrapper'}*/}
                    {/*>*/}
                    {/*    /!*<ReactPlayer*!/*/}
                    {/*    /!*    width="100%"*!/*/}
                    {/*    /!*    // className="react-player"*!/*/}
                    {/*    /!*             url='https://youtu.be/N1a5SFmOglA'*!/*/}
                    {/*/>*/}
                    {/*    <YoutubeEmbed embedId={'N1a5SFmOglA'}/>*/}
                    {/*</div>*/}
                    {/*<Awards />*/}
                    {/* End Awards */}


                    {/* separated */}
                    <div
                        className="separated"
                        style={{
                            backgroundImage: `url(${
                                process.env.PUBLIC_URL + "img/border-dark.png"
                            })`,
                        }}
                    />
                    {/* End separated */}

                    <div id={'team'} className="title">
                        <h3>Team</h3>
                    </div>

                    <Services/>

                    {/* separated */}
                    {/*<div*/}
                    {/*    className="separated"*/}
                    {/*    style={{*/}
                    {/*        backgroundImage: `url(${*/}
                    {/*            process.env.PUBLIC_URL + "img/border-dark.png"*/}
                    {/*        })`,*/}
                    {/*    }}*/}
                    {/*></div>*/}
                    {/* End separated */}

                    {/*<div className="title">*/}
                    {/*    <h3>Additional Content</h3>*/}
                    {/*</div>*/}

                    {/*<Testimonials/>*/}
                    {/* End Testimonaial */}


                    {/* End .row */}

                </div>
            </section>
        </>
    );
};

export default About;
