import {Button, Card} from "react-bootstrap"

export default function CardProduct ({ data}) {
    return (
        <Card className="d-flex flex-row align-items-center rounded-4 gradient mt-2" >
            <Card.Img src={data?.image} alt={data?.name} className="imgCard"/>  
            <Card.Body>
                <Card.Title className="text-white">{data?.name}</Card.Title>
                <Card.Text className="text-white">
                    {data?.text}
                </Card.Text>
                <Card.Text className=" d-flex align-items-end justify-content-end text-white">
                    <Button className="price rounded-3" variant="danger">${data?.price.toFixed(2)}</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}