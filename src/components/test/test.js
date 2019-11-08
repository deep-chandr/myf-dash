import React , {Component} from 'react';
import './test.scss';
import Alert from 'react-bootstrap/Alert';

class TestComponent extends Component{
    constructor(props){
        super(props);

    }


    render(){
        return <div className="test-wrapper">
            'hello bug'
            {
                [
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    ].map((variant, idx) => (
                    <Alert key={idx} variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                    ))
            }
        </div>;
    }
}

export default TestComponent;