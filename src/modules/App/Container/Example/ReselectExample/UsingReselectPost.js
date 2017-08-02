import React from 'react';
import { createSelector } from 'reselect'
import { connect } from 'react-redux';

let count = 0;

class UsingReselectPost extends React.Component {
    render() {
        return (
            <div>
                <h3>With Reselect</h3>
                {this.props.posts.map(x =>
                    <li key={x.id}>
                        {`${x.title} - ${x.user.first} ${x.user.last}`}
                    </li>
                )}
                <h3>{`Posts render ${count}`}</h3>
            </div>
        );
    }
}

const getListing = createSelector(
    state => state.postsById,
    state => state.usersById,
    state => state.postListing,
    (posts, users, listing) => listing.map(id => {
        const post = posts[id];
        return { ...post, user: users[post.author] }
    })
);

const mapState = (state) => {
    return { posts: getListing(state.examples) };
};

export default connect(mapState)(UsingReselectPost);