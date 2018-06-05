import { combineReducers } from 'redux'

import members from '../../components/Members/reducers/membersPage.reducer'

const reducers = combineReducers({
    members
    // others reducers here
})

const rootReducer = (state, action) => {
    return reducers(state, action)
}

export default rootReducer