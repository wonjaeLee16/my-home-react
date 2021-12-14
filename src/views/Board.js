import { Col, Container, Row } from "react-bootstrap";
import Card from "components/Card";

export default function Board() {
  let boards = [
    {

    }, {

    }
  ];

  return (
    <Container>
      <Row>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
        <Col md="auto"><Card/></Col>
      </Row>
    </Container>
  )
}