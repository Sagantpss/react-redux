import React from 'react';
import camera from "../images/camera.jpg";
import addTocart from "../images/addTocart.png";
import { Image, Stack } from "react-bootstrap";
import { Card, CardGroup, Button } from "react-bootstrap";
function ReactreduxHome(props) {
    console.log("Home Props", props);
    return (
        <div>
            <h1>React Redux Home Page</h1>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">First item</div>
                <div className="p-2 ms-auto">Second item</div>
                <div className="vr" />
                <div className="p-2">
                    Cart
                    <Image src={addTocart} style={{ width: '50px', height: '50px' }} />
                </div>
            </Stack>
            <CardGroup>
                <Card className="d-flex justify-content-center align-items-center">
                    <Image src={camera} roundedCircle style={{ width: '500px', height: '500px' }} />
                    <Card.Body>
                        <Card.Title>Professional Camera</Card.Title>
                        <Card.Text>
                            Price:- $ 500.00
                        </Card.Text>
                        <Button variant="info"
                            onClick={() =>
                                props.addToCartHandler({ price: 500, name: "Professional Camera" })}
                        >Add to cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default ReactreduxHome;