import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = () => {
    useEffect(() => {
        fetchPosts();
    }, []);

    return <div>Posts</div>;
};

/* const mapStateToProps = (state) => {
    return {

    }
} */

export default connect(null, { fetchPosts })(PostList);
