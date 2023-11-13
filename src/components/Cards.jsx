import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({data}) {

    const {Title,Poster,Plot} = data


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Plot}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;