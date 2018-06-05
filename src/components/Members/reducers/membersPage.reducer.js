import {
    MEMBERS_FETCH_ERROR,
    MEMBERS_FETCH_REQUEST,
    MEMBERS_FETCH_SUCCESS
} from '../membersPage.actionTypes'

const initialState = {
    members: [],
    success: false,
    fetching: false
}

const membersStore = (state = initialState, action) => {
    switch(action.type ){
        case MEMBERS_FETCH_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case MEMBERS_FETCH_SUCCESS:            
            return {
                ...state,
                members: action.payload,
                fetching: false,
                success: true

            }
        case MEMBERS_FETCH_ERROR:
            return {
                ...state,
                fetching: false,
                success: false
            }
        default: return state
    }
}

export default membersStore;
