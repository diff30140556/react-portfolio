import React from 'react';
import SubTitle from './SubTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function About() {
    return (
        <SubTitle title={"About Me"}>
            <div className="avatar">
                <img className='avatarImg' src="https://i.imgur.com/WAyHmNF.png" alt="avatar" />
            </div>
            <div className="about-me-paragraph">
                <p>
                    Hi, this is Ben. I'm a versatile full stack developer with a passion for creating innovative and intuitive web applications. I have extensive experience working with front-end technologies, as well as server-side frameworks like Node.js. I enjoy working collaboratively with teams to solve complex problems and implement elegant solutions. When I'm not coding, you can find me reading up on the latest tech trends or exploring the great outdoors.
                </p>
                <p>I'm a full stack developer who loves basketball, hiking, and music. When I'm not coding, I enjoy perfecting my jump shot on the basketball court, hitting the trails for a hike, or discovering new music artists.</p>
            </div>
            <div className="social-account">
                <ul className="account-list">
                    <li>
                        <a className='social-icon' href="https://github.com/diff30140556" target='_blank'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a className='social-icon' href="https://www.linkedin.com/in/ben-hu-267209137/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                </ul>
            </div>
        </SubTitle>
    );
}

export default About;