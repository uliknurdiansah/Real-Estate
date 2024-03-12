import {Form, Button, Container, Row, Col} from 'react-bootstrap'

export default function Contact() {
    return (
      
        <section id="contact">
            <Container fluid className="bg-primary-subtle " style={{height:'100vh'}}>
          <div className='text-center py-3'><h1>Contact</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, cum!</p></div>
                <Container className="bg-secondary-subtle py-4">
      

            <Row >
              
              <Col>
                <div className='text-center pb-4'><h3>Lokasi</h3></div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.83290955355!2d106.83646465!3d-6.182313000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f436b8c94b07%3A0x6ea6d5398b7c82f6!2sCentral%20Jakarta%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1710076778037!5m2!1sen!2sid" className='w-100 h-50' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </Col>

              <Col >
              <div className='text-center pb-4'><h3>Kirim Pesan</h3></div>
              <Form>
                            
                            <Form.Group className="mb-3" controlId="forphon">
            <Form.Label>No. Telpon : </Form.Label>
            <Form.Control type="phon" placeholder="Masukan No. Telpon " />
        
          </Form.Group>
    
    
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address : </Form.Label>
            <Form.Control type="email" placeholder="Masukan Email" />
         
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Pesan : </Form.Label>
            <Form.Control as="textarea" placeholder="Silahkan Tulis pesan anda do sini..." />
          </Form.Group>
       
          <Button className="btn-secondary btn-outline-warning" href="#" type="submit">
            Kirim
          </Button>
        </Form>
              </Col>
             
      </Row>

                </Container>
              
</Container>
        </section>

  )
}
