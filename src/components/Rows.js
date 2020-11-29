import React, { Component } from 'react';

function Row({user}) {
  return (
    <>
    <tr>
        <th><img src={user.picture.medium}></img></th>
        <th>{user.name.title}</th>
        <th>{user.name.first}</th>
        <th>{user.name.last}</th>
        <th>{user.phone}</th>
        <th>{user.email}</th>
    </tr>
    </>
  )
}

export default Row;
