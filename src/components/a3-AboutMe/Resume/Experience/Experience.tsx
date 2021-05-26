import React from 'react';
import s from './Experience.module.scss'
import {v1} from 'uuid';


const experience = [
	{
		id: v1(),
		company: 'https://it-incubator.by/React-online.html',
		title: 'Front-end (React/Redux/Typescript)',
		description: 'IT-incubator, 2020'
	},
	{
		id: v1(),
		company: 'https://rollingscopes.com/',
		title: 'JavaScript / Front-end',
		description: 'The Rolling Scopes School, 2020'
	},
	{
		id: v1(),
		company: 'http://www.i-bteu.by/',
		title: 'Bachelor degree in economics',
		description: 'Belarusian State University, School of Business and Management, 2009'
	},
]

export const Experience = () => {

	const experienceList = experience.map(exp => {
		return <li key={exp.id} className={s.expItem}>
			<p className={s.expHeading}>{exp.title}</p>
			<a className={s.expLink} href={exp.company} target="_blank">{exp.description}</a>
		</li>

	})
	return (
		<div className={`${s.expBox} ${s.animation}`}>
			<div className={s.expBoxTitle}>
				<h3 className={s.expTitle}>Education</h3>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}
