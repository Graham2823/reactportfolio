import React from 'react';
import { Card } from 'react-bootstrap';

const ProjectCard = ({name, link, image, languages, description}) => {
	return (
		<Card className='projectCard'>
			<h1>{name}</h1>
			<a href={link}>
				<img src={image} alt={name} />
			</a>
            {languages && languages.map((language)=>(
                <span className='languages'>{language}</span>
            ))}
            <p>{description}</p>
		</Card>
	);
};

export default ProjectCard;
