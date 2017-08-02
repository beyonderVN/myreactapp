import React from 'react';
import Posts from './Posts';
import Counter from './Counter';
import UsingReselectPost from './UsingReselectPost';

class ReselectExample extends React.Component {
    render() {
        return (
            <div className="w3-container w3-card-2 w3-white w3-margin-bottom">

                <h1>Reselect Redux</h1>
                <hr />
                <Posts />
                <hr />
                <UsingReselectPost />
                <hr />
                <Counter />
            </div>
        );
    }
}

export default ReselectExample;