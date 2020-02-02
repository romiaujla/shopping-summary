import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

class Subtotal extends Component {
    
    static defaultProps = {
        price: 0.0,
    }

    render() { 
        return (
            <Row className='show-grid'>
                <Col md={6}>Subtotal</Col>
                <Col md={6}> {`$${this.props.price}`} </Col>
            </Row>
        );
    }
}

Subtotal.propTypes = {
    price: PropTypes.number.isRequired,
}
 
export default Subtotal;