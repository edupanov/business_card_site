import s from './PersonalInfo.module.scss';
import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MyPDF from './cv/Egor Dupanov CV.pdf';

const personalInfo = [
	{title: 'First Name: ', content: 'Egor'},
	{title: 'Last Name: ', content: 'Dupanov'},
	{title: 'Date of birth: ', content: '15 April 1986'},
	{title: 'English: ', content: 'Intermediate (in progress)'},
	{title: 'Address: ', content: 'Gomel, Belarus'},
	{title: 'Email: ', content: 'edupanov@gmail.com'},
	{title: 'Phone: ', content: '+375 29 696 25 74'},
	{title: 'Telegram: ', content: '@front_dev_gomel'},
]

export const PersonalInfo = () => {

	const info = personalInfo.map((el, index) => {
		return <li className={s.personalInfoItem} key={index}>
			<span className={s.title}>{el.title}</span>
			<span className={s.content}>{el.content}</span>
		</li>
	})
	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<div className={s.personalDesc}>
					From my experience I know very well what time means and how much it costs. Therefore, I am always focused on achieving the result within the agreed time frame. I'd like to find great team, where I will be able to realize my potential and apply my skills. I spend my free time attending online meetups, taking online courses, and improving my technical skills. I believe that being proactive is a key to success. I'm currently the founder of an existing family business
					<p className={s.subPersonalDesc}>Ready to consider project work and full-time employment. </p>
				</div>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						{info}
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a className={s.resumeLink}
					 href={MyPDF} download={'frontend_developer_Egor_Dupanov'}
					 target="_blank" rel="noopener noreferrer">Download CV</a>
			</div>
		</div>
	)
}
