/* eslint-disable no-unused-vars */
import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Designer from './Designer'

const Skills = () => {
	return (
		<section
			className="skills section"
			id="skills"
		>
			<h2 className="section__title">Skills</h2>
			<span className="section__subtitle">My technical level</span>

			<div className="skills__container container grid">
				<Frontend />
				<Designer />
			</div>
		</section>
	)
}

export default Skills
