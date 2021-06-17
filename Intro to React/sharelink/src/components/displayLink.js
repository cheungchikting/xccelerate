import React from 'react';
import { Container, Table } from 'reactstrap';
import './displayLink.css'


function DisplayLink(props) {

   return (
       <Container>

        <Container fluid className="title">
          <h1 className="display-3">Links for Sharing</h1>
        </Container>

        <Table className='table'>
          <thead>
              <tr>
              <th>#</th>
              <th>URL</th>
              </tr>
          </thead>
          <tbody>
             { props.link.map((data, index) => {
                return (
             <tr>     
             <th scope="row">{index + 1}</th>
             <td><a key={index} href={data.url}>{data.url}</a></td>
             </tr>
               )
             })}
          </tbody>
         </Table>

       </Container>
    )
}

export default DisplayLink;