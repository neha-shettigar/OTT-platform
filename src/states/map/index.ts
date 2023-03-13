import { connect } from 'react-redux';
// import { addBookmark, removeBookmark } from '../actions';
import { signInSuccess, signOut } from '../auth';

import Login from '../../components/Login';

const mapStateToProps = (state: any) => ({
  bookmarks: state.bookmarks,
  authenticated: state.auth.authenticated,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  signInSuccess: (data: any) => dispatch(signInSuccess(data)),
  signOut: () => dispatch(signOut()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(BookMarks);
export default connect(mapStateToProps, mapDispatchToProps)(Login);

// import { connect } from 'react-redux';
// import { addBookmark, removeBookmark } from '../actions';
// import BookMarks from '../../components/BookMarks';

// const mapStateToProps = (state: any) => ({
//   bookmarks: state.bookmarks,
// });

// const mapDispatchToProps = {
//   addBookmark,
//   removeBookmark,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BookMarks);
