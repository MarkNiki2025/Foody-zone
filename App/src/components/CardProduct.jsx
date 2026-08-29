import {Card} from "react-bootstrap"

export default function CardProduct ({ data, BASE_URL }) {
    return (
        <Card className="d-flex flex-row rounded-4 card">
            <Card.Img src={BASE_URL + data?.image} alt={data?.name} className="imgCard"/>  
            <Card.Body>
                <Card.Title className="text-white">{data?.name}</Card.Title>
                <Card.Text className="text-white">
                    {data?.text}
                </Card.Text>
                <Card.Text className=" d-flex align-items-end justify-content-end text-white">
                    <p className="bg-danger text-white p-1 rounded-3 ">${data?.price.toFixed(2)}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}