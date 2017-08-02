const counterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default: return state;
    }
}

const initState = {
    usersById: {
        'user-1': {
            id: 'user-1',
            first: 'Tom',
            last: 'Scott',
        },
        'user-2': {
            id: 'user-2',
            first: 'Dick',
            last: 'Wolf',
        },
        'user-3': {
            id: 'user-3',
            first: 'Harry',
            last: 'Scott',
        }
    },
    postsById: {
        'post-1': { id: 'post-1', author: 'user-1', title: 'Post 1' },
        'post-2': { id: 'post-2', author: 'user-2', title: 'Post 2' },
        'post-3': { id: 'post-3', author: 'user-3', title: 'Post 3' },
        'post-4': { id: 'post-4', author: 'user-1', title: 'Post 4' },
        'post-5': { id: 'post-5', author: 'user-2', title: 'Post 5' },
        'post-6': { id: 'post-6', author: 'user-3', title: 'Post 6' },
    }
    ,
    posts: [
        { id: 'post-1', author: 'user-1', title: 'Post 1' },
        { id: 'post-2', author: 'user-2', title: 'Post 2' },
        { id: 'post-3', author: 'user-3', title: 'Post 3' },
        { id: 'post-4', author: 'user-1', title: 'Post 4' },
        { id: 'post-5', author: 'user-2', title: 'Post 5' },
        { id: 'post-6', author: 'user-3', title: 'Post 6' },
    ],
    usersListing: [
        'user-1', 'user-2', 'user-3'
    ],
    postListing: ['post-1', 'post-2', 'post-3', 'post-4', 'post-5', 'post-6']
}
const exampleReducers = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: counterReducer(state.counter, action) };
        default: return state;
    }
}

export default exampleReducers