import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ChildHome(props){
    return(
    <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Img variant="top" src={props.image} style={{ height: '200px', objectFit: 'cover' }} />
  
        <Card.Body>
          <Card.Title> {props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
export default ChildHome;