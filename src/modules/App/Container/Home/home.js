import React from 'react'
import { connect } from 'react-redux'
import WorkExperience from '../WorkExperience';
import Education from '../Education';
import Content from '../Content';

const Home = ({ children }) => {

    return (
        <div>
            <WorkExperience />
            <Education />
            <WorkExperience />
        </div>
    )

}

export default Home