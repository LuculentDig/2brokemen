import React, { Component} from 'react'
import {Jumbotron, Button} from 'react-bootstrap'
import pic from '../img/rich1.jpg';

export default class home extends Component {
    render() {
        return (
    
        <div>
            <Jumbotron>
                <h1>Not sure how to spend your money?</h1>
                <p>
                    We are two recent graudates from the best College in the World. During our times in school we
                    discovered that most college students have horrible financial managements. To put it simple: They don't know how to spend money!    
                </p>

                <p>Give us your money and we will show you how it's done!</p> 

                <p>
                    <Button variant="primary">Donate Via Bitcoin: 34Smu87MGU8acKZNqhGPwcHJfxv2RdapMC</Button>
                </p>
                <img
                    className="d-block w-50"
                    src={require('../img/rich1.jpg')}
                    alt="Third slide"
                />
            </Jumbotron>

        </div>

        )
    }
}
