import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects and Achievements</Title>
        <Desc>
          I have Worked on diverse data analytics projects, leveraging tools like Python, SQL, Power BI, and Tableau to analyze data, create visualizations and deliver actionable insights.. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
        {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>PROJECT</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>PROJECT</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ACHIEVEMENT</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>ACHIEVEMENT</ToggleButton>
          }
         
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects