
import { Container, Button, Card, Row, Col } from "react-bootstrap";

const Hero = () => {
    return (
        
            <section  id="home">
            <Container fluid className="width" >
          <Container fluid className=" bg-success p-2 text-white bg-opacity-50" >
           <Container>   <Row className="text-warning  " >
        <Col sm={12}  className="mt-sm-2 mt-md-4 " ><h2>Perum Lestari</h2></Col>
        <Col sm={7} ><h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4></Col>
            <Col sm={6}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, impedit dicta reprehenderit assumenda harum id amet quam doloribus alias nihil, non magnam ipsum neque repellat est cupiditate voluptatem hic molestiae.</p></Col>
            
            <Col sm={12} className='mb-5 mt-4'>   <Button className="btn-secondary btn-outline-warning mb-2">Yuk Order Sekarang!!!</Button></Col>
      </Row></Container>
         
          
   
                  {/* className="pt-5 md=w-50 text-warning" > */}
                    
                       
                 
                </Container>  


          

            </Container>  
            <Container fluid className="bg-primary-subtle"  >

                <h2 className="text-center py-2">Services</h2>
                <Container className="pb-5" >
            <Row  className="d-flex justify-content-lg-between" >
              
              <Col sm={12} md={4}  className="mb-2"   >
              <Card >
                <i className="bi bi-cash-stack icon text-center"></i>
      <Card.Body>
        <Card.Title className="text-center">Harga Terjangkau</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>
              </Col>
              <Col sm={12} md={4} className="mb-2" >
              <Card >
      <i class="bi bi-geo-alt-fill icon text-center"></i>
                             
      <Card.Body>
        <Card.Title className="text-center">Lokasi Starategis</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
                    </Card>
              </Col>
              <Col sm={12} md={4} className="mb-2" >
              <Card  >
               <i class="bi bi-hand-thumbs-up-fill icon text-center"></i>
      <Card.Body>
        <Card.Title className="text-center">Nyaman, Asri Dan Aman</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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

export default Hero;