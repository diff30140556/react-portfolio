import React from 'react';
import SubTitle from './SubTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function About() {
    return (
        <SubTitle title={"Resume"}>
            <h4>Download My <a href="#">Resume</a></h4>
            <h5>Front End Skills:</h5>
            <ul className="skill-list glass-blur">
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>React.js</li>
                <li>WebPack</li>
                <li>RWD</li>
                <li>jQuery</li>
                <li>Handlebars</li>
                <li>AJAX</li>
                <li>PWA</li>
                <li>Service Worker</li>
            </ul>
            <h5>Back End Skills:</h5>
            <ul className="skill-list glass-blur">
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>ODM/ORM</li>
                <li>GraphQL</li>
                <li>Unit Test</li>
            </ul>
        </SubTitle>
    );
}

export default About;