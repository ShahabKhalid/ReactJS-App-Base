import { connect } from 'react-redux';
import MembersPage from './MembersPage';
import {
  fetchMembers
} from './membersPage.actions';

const mapStateToProps = state => ({
  members: state.members.members,
  fetching: state.members.fetching,
  fetchSuccess: state.members.success
});

const mapDispatchToProps = dispatch => ({
  fetchMembers: () => dispatch(fetchMembers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MembersPage);
