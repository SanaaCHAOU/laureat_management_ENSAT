import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import ph2 from '../../assets/img/ensat1.jpg';
import ph3 from '../../assets/img/ensat2.jpg';
import ph4 from '../../assets/img/ensat3.jpg';

class Carousel1 extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph4}
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph2}
      alt="First slide"
    />

  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src={ph3}
      alt="First slide"
    />
 
  </Carousel.Item>
</Carousel>
                
            </div>
        );
    }
}

export default Carousel1;