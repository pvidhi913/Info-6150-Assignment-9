import Card from 'react-bootstrap/Card'


function ChildAbout(props){
    return(
        <div style={{ display: 'inline-block', justifyContent: 'space-between' }}>
        <Card style={{ width: '18rem', height: '500px' }}>
        {/* <Card.Img variant="top" src={props.image} /> */}
        <Card.Img variant="top" src={props.image}  style={{ height: '200px', objectFit: 'cover' }}
  />
  
        <Card.Body>
          <Card.Title> {props.title}</Card.Title>
          <Card.Text>
          {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
          
        );
}
export default ChildAbout;