import * as Types from './membersPage.actionTypes';

export const membersFetchRequest = () => ({
  type: Types.MEMBERS_FETCH_REQUEST
});

export const membersFetchSuccess = (payload) => ({
    type: Types.MEMBERS_FETCH_SUCCESS,
    payload
});

export const membersFetchError = (err) => ({
    type: Types.MEMBERS_FETCH_ERROR,
    err
});
  