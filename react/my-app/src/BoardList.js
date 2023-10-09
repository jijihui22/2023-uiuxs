import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
const submitTest = () => {
  Axios.get('http://localhost:4000/')
    .then(function (response) {
      // 성공 핸들링
      alert('연결 성공')
      console.log(response);
    })

}
class BoardList extends Component {
  render() {
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <div className='d-flex gap-3'>
          <Button variant="info" onclick={submitTest}>글쓰기</Button>
          <Button variant="secondary">수정</Button>
          <Button variant="danger">삭제</Button>
        </div>
      </>
    )
  }
}
export default BoardList;