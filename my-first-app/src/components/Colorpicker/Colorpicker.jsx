import { Component } from 'react';
import { Container, Title, Option } from './ColorPicker.styled.jsx'
    
export class ColorPicker extends Component {

    state = {
        currentOpttionIdx: 0 
    }


    render() {
        return (
            <Container>
                <Title>Color Picker</Title>
                <div>
                    {this.props.options.map(option => {
                        return <Option key = {option.label} style={{backgroundColor: option.color}}>{option.label}</Option>
                    })}
                </div>
            </Container>
        )
    }
}

export default ColorPicker;