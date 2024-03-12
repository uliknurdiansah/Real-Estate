import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import home1 from "../../assets/img/home1.jpg"
import home2 from "../../assets/img/home2.jpg"
import home3 from "../../assets/img/home3.jpg"
import home4 from "../../assets/img/home4.jpg"
import home5 from "../../assets/img/home5.jpg"
import home6 from "../../assets/img/home6.jpg"







const Galeri = () => {
    return (
        <section  id="galeri">
            <Container fluid className="bg-primary-subtle text-center"><h1 >Galeri</h1>
            
            
       <Container  >
       <Row className='py-4 d-flex justify-content-evenly row-gap-2'  >
                    <Col sm={12} md={6} lg={3}>
                            <Image src={home1} rounded style={{ width: '20rem' }} />      
                    </Col>
                    <Col sm={12} md={6} lg={3} >
                    <Image src={home2} rounded style={{ width: '20rem' }} />      
                    </Col>
                     <Col sm={12} md={6} lg={3} >           
                     <Image src={home3} rounded style={{ width: '20rem' }} />      
                         </Col>
                   
                    <Col sm={12} md={6} lg={3} >
                     <Image src={home4} rounded style={{ width: '20rem' }} />     
                    </Col>
                    <Col sm={12} md={6} lg={3} >
                    <Image src={home5} rounded style={{ width: '20rem' }} />     
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mb-2">
                    <Image src={home6} rounded style={{ width: '20rem' }} />     </Col>
      </Row>
       </Container>
            
            </Container>
        </section>
    );
}

export default Galeri;
