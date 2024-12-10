import React from "react";
import camera from "./camera.jpg";
import { Image } from "react-bootstrap";
import HomeContainer from './containers/HomeContainer';
import { Card, CardGroup, Button } from "react-bootstrap";
function ReactRedux() {
    return (
        <div className="App">
            <h1>React Redux Main Page</h1>
            <CardGroup>
                <Card className="d-flex justify-content-center align-items-center">
                    <Image src={camera} roundedCircle style={{ width: '500px', height: '500px' }} />
                    <Card.Body>
                        <Card.Title>Professional Camera</Card.Title>
                        <Card.Text>
                           Price:- $ 500
                        </Card.Text>
                        <Button variant="info">Add to cart</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <HomeContainer />
        </div>
    );
}

export default ReactRedux;