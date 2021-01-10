import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload; //adding value to the comment
            comment.id = state.comments.length; //assign id based on number of comments
            return {...state, comments: state.comments.concat(comment)};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};