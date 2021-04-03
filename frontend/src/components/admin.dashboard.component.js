import React from "react";
// const Members = (props)=>{
//     <tr>
//         <td>{props.members.username}</td>
//         // Add remaining props
//     </tr>
// }
function AdminDashBoard() {
  // constructor(props) {
  //     super(props);
  //    this.state = {members:[]};
  //   }

  // componentDidMount(){
  //     //get request from mongo database
  // }

  // memberList(){
  //     //return Member's List here
  // }

  return (
    <div>
      <h3>Members List</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Duration(Slot Number)</th>
            <th></th>
          </tr>
        </thead>
        {/* <tbody>{this.memberList()}</tbody> */}
      </table>
    </div>
  );
}

export default AdminDashBoard;
