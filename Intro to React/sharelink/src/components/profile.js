import React, { useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, 
} from 'reactstrap';
import {ModalButton} from './modals';


function Profile(props) {

let [count, setCount] = useState(0);
let [dataList, setDataList] = useState([]);

useEffect(() => {
  props.appData(dataList)
  setCount(dataList.length)
}, [dataList])

return (
  <div className='cardcontainer'>
  <Card>
  <CardImg top width="100%" src={props.img} alt="Card image cap" />
  <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>{count} shared links</CardText>
            <ModalButton getlink={(data) => setDataList((preVal) => [...preVal, data])} buttonLabel='Add Link'/>
  </CardBody>
  </Card>
  </div>
)
}

export default Profile;