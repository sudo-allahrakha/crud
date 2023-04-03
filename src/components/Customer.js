import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
function GridAutoSizingExample() {
    return (

        <Card>
                  <Card.Body>
        <Form>
            <Row className="align-items-center">
                <Col xs="auto">
                    <Form.Select aria-label="Default select example">
                        <option>...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>

                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Jane Doe"
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Contact
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="+92 307 7441748"
                    />
                </Col>


                <Col xs="auto">
                    <Button type="submit" className='mb-2'>
                        New Customer
                    </Button>
                </Col>
            </Row>
        </Form>
        </Card.Body>
        </Card>
    );
}

export default GridAutoSizingExample;