import CardTitle from "react-bootstrap/esm/CardTitle";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Job(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '30px' }}>
          <h1>We are Hiring!!!!</h1>
             <Card style={{ width: '18rem', marginTop: '20px' }}>
          <Card.Body>
          <CardTitle> Front Desk Manager</CardTitle>
            <Card.Text style={{ marginBottom: '10px' }}>
          Minimum  1-2years of experience is required. No qualification restriction. 
            </Card.Text> 
            <CardTitle>Grooming Expert</CardTitle>
            <Card.Text style={{ marginBottom: '10px' }}>
          Should know how to manage and understand pets and able to intract easily. 
            </Card.Text>
            <Button variant="primary">Find More</Button>
          </Card.Body>
        </Card>
        </div>
    )
}
export default Job;