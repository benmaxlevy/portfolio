import { Image } from 'react-bootstrap';
import './About.css';

function About(props) {
    return(
        <div id={ props.id } className="About parallax">
                <div className={"aboutSection"}>
                        <div style={{width: "100%", textAlign: "center"}}>
                            <Image src="/ben1.jpeg" roundedCircle height={"200px"} width={"200px"}/>
                        </div>
                        <div>
                            <h2>About Benjamin Levy</h2>
                            <hr/>
                        </div>
                </div>
        </div>
    );
}

export default About;
