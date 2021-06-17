import './App.css';
import React, { useState } from 'react';
import Profile from './components/profile'
import DisplayLink from './components/displayLink'
import { Container, Row, Col } from 'reactstrap';

function App() {

  let [list, setList] = useState([])

  return(
    <Container className="mainContainer">
      <Row>
      <Col  sm="12" md="3">
      <Profile appData={(data) => setList(data)} name={'Lebron James'} img={'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxNjE3MTA0Mzg0OTU5NzQ2/lebron-james-lakers.jpg'}/>
      </Col>
      <Col  sm="12" md="9">
      <DisplayLink link={list} />  
      </Col>
      </Row>  
    </Container>
  )
}

export default App;
