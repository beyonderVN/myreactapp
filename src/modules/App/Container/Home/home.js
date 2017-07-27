import React from 'react'
import { connect } from 'react-redux'
import WorkExperience from '../WorkExperience';
const Home = ({ children}) => {

    return (
        <div className="main-content w3-row-padding">
            <WorkExperience/>
            <WorkExperience/>
            <WorkExperience/>
        </div>
    )

}

export default Home