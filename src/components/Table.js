import React, { useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Row from './Rows';
import { users } from './Users';


export default class Table extends React.Component {

  state = {
    usersArray: users.results,
    search: ""
  }
  onchange = e => {
    this.setState({search: e.target.value});
  }

  iconStyle = {
    width: "50px"
  }
  changeSort = event => {
    this.setState({key: event.target.name})
    if (this.state.sortType === 'asc') {
      this.setState({sortType:'dsc'})
    }
    else {
      this.setState({sortType:'asc'})
    }
  }

  render() {
    const {usersArray, sortType, key, search} = this.state;

    const filteredArrayOfUsers = usersArray.filter( user =>{
      return user.name.first.toLowerCase().indexOf( search.toLowerCase()) !== -1;
    })

    const sortedArray = filteredArrayOfUsers.sort((a, b) => {
      const isReversed = (sortType === 'asc') ? 1 : -1;

      switch(key) {
        case "first-name":
          return isReversed * a.name.first.localeCompare(b.name.first)
          break;
        
        case "last-name":
          return isReversed * a.name.last.localeCompare(b.name.last)
          break;    
        case "title":
          return isReversed * a.name.title.localeCompare(b.name.title)
          break; 
        case "phone":
          return isReversed * a.phone.localeCompare(b.phone)
          break; 
        case "email":
          return isReversed * a.email.localeCompare(b.email)
          break;           
      }

      
    } )

    
    return (
      <>
        <input type="text" placeholder="Search by first name" onChange={this.onchange}></input>
          <ReactBootstrap.Table striped bordered hover variant = "dark">
            
            <thead>
              <tr>
                <th>Photo</th>
                <th>Title </th>
                <th>First Name</th>
                <th>Last Name </th>
                <th>Phone Number </th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {sortedArray.map(user =>
              <Row user={user} />
            )}
            </tbody>
          </ReactBootstrap.Table>
      </>
    );
  }
}
