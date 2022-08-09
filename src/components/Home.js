import Typewriter from 'typewriter-effect';
import './Home.css';

function Home(props) {
    return(
        <div id={props.id} className="Home parallax">
            <div className="message">
                <h1>Benjamin Max Levy</h1>
                <Typewriter id="typewriter"
                    options={{
                        strings: ['Avid Student', 'Software Engineer', 'Data Scientist', 'Machine Learning Enthusiast', 'Science Lover'],
                        autoStart: true,
                        loop: true,
                        cursor: '_',
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
