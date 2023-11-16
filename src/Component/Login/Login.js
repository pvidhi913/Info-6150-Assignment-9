import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Login(){
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        //${email} 

        const requestBody = {
            email: email, // This is where the email variable is used
            password:password 
        };
      const response = await axios.post('http://localhost:5000/user/authenticate',requestBody);
      if (response.data.authenticated) {
        navigate('/home'); // Redirect to home page
      } else {
        
        setResult('Authentication failed. Please check your credentials.'); // Set error message
      }
    } catch (error) {
      // Handle errors from the server or network issues
      setResult('An error occurred while trying to authenticate. Please try again.');
      // You can also use error.response or error.request for more detailed error handling
    }
  };
    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '20px',marginTop: '20px',  backgroundColor: 'grey', padding: '20px', borderRadius: '8px', color:"white" }}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <Form.Label className="text-muted">
      {/* We'll never share your email with anyone else. */}
    </Form.Label>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Text className="text-muted">{result}</Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      );
}
export default Login;