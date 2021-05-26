import React, {CSSProperties, FC} from 'react';
import s from './Projects.module.scss';
import bg from './projectCover/bg.jpg'
import {v1} from 'uuid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ProjectType = {
	title?: string
	content?: string
	style?: CSSProperties | undefined
}
const project = [
	{id: v1(), heading: 'Singolo', demo: 'https://edupanov.github.io/singolo/', github: 'https://github.com/edupanov/singolo', image: bg},
	{id: v1(), heading: 'English for kids', demo: 'https://edupanov.github.io/English_for_kids/', github: 'https://github.com/edupanov/English_for_kids', image: bg},
	{id: v1(), heading: 'Exchange', demo: 'https://edupanov.github.io/WoWExchange.github.io/', github: 'https://github.com/edupanov/WoWExchange.github.io', image: bg},
]


export const Projects: FC<ProjectType> = ({title, content, style}) => {


	const projects = project.map(project => {
		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>
							<FontAwesomeIcon icon={faEye} className={s.icon} />
							<a href={project.demo} className={s.link} target="_blank">Demo</a>
						</span>
						<span className={s.info}>
							<FontAwesomeIcon icon={faGithub} className={s.icon}/>
							<a href={project.github} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
		</div>
	})


	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}
