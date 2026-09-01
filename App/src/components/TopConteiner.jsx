import { Button} from "react-bootstrap"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

function TopContainer ({ SearchFood, filterByCatagory }) {
    return (
        <header className="container-fluid p-3 d-flex flex-column align-items-center header">
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center container-xxl m-3 m-sm-4 mt-sm-5 align-items-sm-start justify-content-sm-between ">
                <div>
                    <img src="/logo.svg" alt="Logo" />
                </div>
                <div className="col-10 col-sm-3 mt-4 mt-sm-0 search-wrap">
                <input  placeholder="Search Food" className="form-control border-danger border-3 search-input" onChange={SearchFood} />
                </div>
            </div>
            <div className="d-flex flex-wrap gap-3 my-3 justify-content-center ">
                <Button variant="danger" onClick={() => filterByCatagory("All")}>
                    All
                </Button>
                <Button variant="danger" onClick={() => filterByCatagory("breakfast")}>
                    Breakfast
                </Button>
                <Button variant="danger" onClick={() => filterByCatagory("lunch")}>
                    Lunch
                </Button>
                <Button variant="danger" onClick={() => filterByCatagory("dinner")}>
                    Dinner
                </Button>
            </div>
        </header>
    )
}

export default TopContainer