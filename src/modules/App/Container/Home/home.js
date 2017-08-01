import React from 'react'
import { connect } from 'react-redux'
import WorkExperience from '../WorkExperience';
import Education from '../Education';


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