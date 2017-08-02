import React from 'react';
import { createSelector } from 'reselect'
import { connect } from 'react-redux';

let count = 0;

class Posts extends React.Component {
    render() {
        console.log(`Posts render ${++count}`);
        return (
            <div>
                <h3>Without Reselect</h3>
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
    const postsById = state.examples.postsById
    const usersById = state.examples.usersById
    const postListing = state.examples.postListing
    const post = postListing.map(id => {
        const post = postsById[id];
        return { ...post, user: usersById[post.author] }
    })
    // tra ve doi tuong moi nen se bi render lai
    return {
        posts: postListing.map(id => {
            const post = postsById[id];
            return { ...post, user: usersById[post.author] }
        })
    }

};

export default connect(mapState)(Posts);