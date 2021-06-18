import React, { useEffect, useRef, useState } from 'react';
import { Container, Table } from 'reactstrap';
import './displayLink.css'
// import Filter from './filter'
import { FormGroup, Label, Input } from 'reactstrap';


function Filter(props) {
  return (
   <FormGroup>
   <Label for="exampleSearch">Search</Label>

   <Input
     type="text"
     name="search"
     id="exampleSearch"
     placeholder="search placeholder"
     value={props.searchFilter}
     // onChange={handleChange}
     onChange={props.handleFilter}
   />
   </FormGroup>
   )
}


function DisplayLink(props) {

  const [searchFilter, setSearchFilter] = useState("")

  function handleFilter(event) {
    setSearchFilter(event.target.value)
  }

  let filterlist = props.link.filter((x)=>{
    console.log(x.url.split('/'))
    return x.url.toLowerCase().includes(searchFilter.toLowerCase())
  })

  console.log(filterlist)
  // const lessThanThree = filter.length < 3 && <div>hello less than 3</div>
  // {filter.length >= 3 && <div>hello less than 3</div>}


    return (
      <Container>
       <Container fluid className="title">
         <h1 className="display-3">Links for Sharing</h1>
       </Container>
       <Filter searchFilter={searchFilter} handleFilter={handleFilter} />
       <Table className='table'>
         <thead>
             <tr>
             <th>#</th>
             <th>URL</th>
             </tr>
         </thead>
         <tbody>
            { filterlist.map((data, index) => {
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