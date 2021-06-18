import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';


function Filter(props) {
   return (
    <FormGroup>
    <Label for="exampleSearch">Search</Label>

    <input
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

export default Filter;