import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Contact(){
    return (
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: '18rem' }}>
        
          <Card.Body>
            <Card.Text style={{ marginBottom: '10px' }}>
              Phone: +1 (989)-876-9876
            </Card.Text>
            <Card.Text style={{ marginBottom: '10px' }}>
            Email: happypets@gmail.com
            </Card.Text>
            <Card.Text style={{ marginBottom: '10px' }}>
              Address: 1788 Brookline MA, 02445
            </Card.Text>
            <Button variant="primary">Find-Us</Button>
          </Card.Body>
        </Card>
        </div>
      );
}
export default Contact;