import { Container, Image, Row, Col} from "react-bootstrap";
import Abaute1 from "../../assets/img/abaute.jpg"
const Abaute = () => {
    return (
        <section  id="abaut" >
        
            <Container fluid className="bg-primary-subtle text-center "  >
                <Container>
                <div className="text-center pt-3">
                    <h1>Abaute</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, aliquam.</p>
                </div>
                <Row className="py-4 d-flex row-gap-2" >
                        <Col sm={12} lg={6}>
                            
                            <div><Image src={Abaute1} rounded style={{ width: '350px' }} />
                            </div>
                    </Col>
                   <Col sm={12} lg={6} className="py-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt porro neque veniam alias dignissimos recusandae modi suscipit minus maxime aspernatur sunt voluptas voluptatem repellendus cumque, nemo similique? Eum, error at labore sequi repellendus ducimus, inventore voluptas harum mia et tempora quos in cupiditate corporis, aut vel magni ea aliquam illum maxime. Suscipit impedit sapiente,. Officia minus harum quasi magni odit quis! Vel odio fuga dolorem neque!</p>
                        <p>soluta beatae commodi aliquam? Consequatur repellendus possimus, animi earum suscipit architecto qui a non velit expedita magni accusamus, reiciendis quidem voluptatibus dolores ratione enim et praesentium corrupti nisi incidunt eveniet ipsum facere aliquam. Cumque reprehenderit culpa dolores atque, recusandae animi quibusdam doloribus voluptate ipsam facere numquam nobis adipisci velit ollitrepellat </p>
                    </Col>

                </Row>
       </Container>
                
      </Container> 
        </section>
    )
}
export default Abaute; 