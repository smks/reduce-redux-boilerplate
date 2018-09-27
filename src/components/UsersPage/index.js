import { connect } from 'react-redux';
import UsersPage, { mapStateToProps, mapDispatchToProps } from './UsersPage';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersPage);
