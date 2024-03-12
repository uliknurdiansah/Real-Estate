
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import Person1 from '../../assets/img/person1.jpg'
import Person2 from '../../assets/img/person2.jpg'
import Person3 from '../../assets/img/person3.jpg'
import Person4 from '../../assets/img/person4.jpg'


 function Testimonial() {
  return (
      <section  id="testimoni">
          
          <Container fluid className=' bg-primary-subtle' >
              
      <div  className='py-3 text-center'>  <h1>Testimonial</h1>
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo aperiam esse accusamus.</p></div>
          <Container className="d-flex py-3  justify-content-evenly"  >
 
          

          <Row>
            
            <Col sm={12} md={6} lg={3} className="mb-2">
            <Card >
                    
                      
                    <div className="d-flex py-2 justify-content-center" >
                      <Image src={Person1} roundedCircle style={{ width: '10rem' }}></Image></div>
                      
              <Card.Body >
                <Card.Title className='text-center' >Person 1</Card.Title>
                <Card.Text>
                  "Some quick example text to build on the card title and make up the
                  bulk of the card's content".
                </Card.Text>
               
              </Card.Body>
                      </Card>
            </Col >
            <Col sm={12}  md={6} lg={3} className="mb-2">
            <Card>
                  
                <div className="d-flex py-2 justify-content-center" >
                  <Image src={Person2} roundedCircle style={{ width: '10rem' }}></Image></div>
      <Card.Body>
        <Card.Title className='text-center'>Person 3</Card.Title>
        <Card.Text>
          "Some quick example text to build on the card title and make up the
          bulk of the card's content"
        </Card.Text>
        
      </Card.Body>
          </Card>
            </Col>
            <Col sm={12}  md={6} lg={3} className="mb-2" >
            <Card>
                  
                <div className="d-flex py-2 justify-content-center" >
                  <Image src={Person3} roundedCircle style={{ width: '10rem' }}></Image></div>
      <Card.Body>
        <Card.Title className='text-center'>Person 3</Card.Title>
        <Card.Text>
          "Some quick example text to build on the card title and make up the
          bulk of the card's content"
        </Card.Text>
        
      </Card.Body>
          </Card>
            </Col>
            <Col sm={12} md={6} lg={3} className="mb-2">
            <Card >
                  
                  <div className="d-flex py-2 justify-content-center" > <Image  src={Person4} roundedCircle style={{ width: '10rem' }}></Image></div>
      <Card.Body>
        <Card.Title className='text-center'>Person 3</Card.Title>
        <Card.Text>
          "Some quick example text to build on the card title and make up the
          bulk of the card's content"
        </Card.Text>
        
      </Card.Body>
          </Card>
            </Col>


    </Row>


                 
              
 
              

          
       



            
              

</Container>
</Container>
</section>
  )
}


export default Testimonial;
