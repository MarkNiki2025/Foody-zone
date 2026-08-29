import CardProduct from "./CardProduct";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function MainPart ({ dataAll, BASE_URL }) {
    return (
        <main className="main">
            <Row>
                <Col  md={8} className="offset-md-2">
                <Row className="g-4">
                    {dataAll?.map((item) => (
                        <Col key={item.id} sm={4}>
                            <CardProduct data={item} BASE_URL={BASE_URL} />
                        </Col>
                    ))}
                </Row>
                </Col>
            </Row>
        </main>
    )
}