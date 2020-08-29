// import React, { Component } from "react";
// import { connect } from "react-redux";
// import * as axios from "axios";

// class UsersContainer extends Component {
//   componentDidMount() {
//     axios.get("").then((response) => {
//       this.props.setUsers(response.data.items);
//     });
//   }

//   render() {
//     return (
//       <>
//         <Users users={this.props.users} />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//   };
// };

// export default connect(mapStateToProps, {
//   setUsers,
// })(UsersContainer);
