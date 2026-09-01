import CardProduct from "./CardProduct";
import { Container,Row,Col } from "react-bootstrap";
export default function MainPart ({ dataAll, BASE_URL }) {
  return (
     <main className="main">
      <Container className="py-5 ">
        <Row className="g-4">
          {dataAll?.map((item) => (
            <Col key={item.id} xs={12} md={6} xl={4}>
              <CardProduct data={item} BASE_URL={BASE_URL} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
    )
}