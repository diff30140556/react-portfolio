
import React from 'react';
import SubTitle from './SubTitle'
import Project from './Project'

const project = [
    {
        title: 'GearHub',
        appLink: 'https://serene-ridge-35528.herokuapp.com/',
        src: 'https://i.imgur.com/dmGGE2S.png',
        gitHub: 'https://github.com/diff30140556/GearHub'
    },
    {
        title: 'Tee Mates',
        appLink: 'https://lit-oasis-88637.herokuapp.com/',
        src: 'https://i.imgur.com/hXkzaXq.png',
        gitHub: 'https://github.com/diff30140556/TeeMates'
    },
    {
        title: 'Park Finder',
        appLink: 'https://diff30140556.github.io/Laguna-Beach-Project-/',
        src: 'https://i.imgur.com/5R3N0h2.png',
        gitHub: 'https://github.com/diff30140556/Laguna-Beach-Project-'
    },
    {
        title: 'Tech Blog',
        appLink: 'https://protected-badlands-49620.herokuapp.com/',
        src: 'https://i.imgur.com/DkUIxzF.png',
        gitHub: 'https://github.com/diff30140556/Tech_Blog'
    },
    {
        title: 'Code Quiz',
        appLink: 'https://diff30140556.github.io/code-quiz/',
        src: 'https://i.imgur.com/8iD1KyK.png',
        gitHub: 'https://github.com/diff30140556/code-quiz'
    },
    {
        title: 'Weather Dash',
        appLink: 'https://diff30140556.github.io/Weather-Dashboard/',
        src: 'https://i.imgur.com/UTtracb.png',
        gitHub: 'https://github.com/diff30140556/Weather-Dashboard'
    },
]

function Portfolio() {
    
    return (
        <SubTitle title={"Portfolio"}>
            <ul className="project-list d-flex justify-content-around flex-wrap">
                {project.map((project) => <Project project={project} key={project.title} />)}
            </ul>
        </SubTitle>
    );
}

export default Portfolio;