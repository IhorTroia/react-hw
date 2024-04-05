import Carousel from 'react-bootstrap/Carousel';
import bellImg from '../bellamy2004.jpg'

function MyCarousel() {
    return (
        <Carousel style={{ width: '500px', margin: '0px auto'}}>
            <Carousel.Item>
                <img width={'100%'} height={'100%'} src={bellImg} alt='...'/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={'100%'} height={'100%'} src={bellImg} alt='...'/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={'100%'} height={'100%'} src={bellImg} alt='...'/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;