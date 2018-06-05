import api from '../../core/api';
import * as actions from './membersPage.actionCreators';

export const fetchMembers = id => dispatch => {
  dispatch(actions.membersFetchRequest());
  return api({
    method: 'get',
    url: `/members`
  })
    .then(response => {
      const { data } = response;
      dispatch(actions.membersFetchSuccess(data));
    })
    .catch(err => dispatch(actions.membersFetchError(err)));
};