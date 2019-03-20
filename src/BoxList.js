import React, { Component } from 'react';
import Box from './Box.js';
import './BoxList.css'

class BoxList extends Component {
    static defaultProps = {
        numBoxes: 16,
        colorsVocab: ['blue',
            'green',
            'red',
            'orange',
            'black',
            'yellow',
            'purple',
            'brown']
    };
    constructor(props) {
        super(props);
        let arr = Array.from({ length: this.props.numBoxes });
        this.state = { boxes: arr.map(this.getRandomColor.bind(this)) };

        this.changeBox = this.changeBox.bind(this);
    }


    changeBox(evt) {
        let boxIndex = Math.floor(Math.random() * this.state.boxes.length);

        this.setState(st => ({
            boxes: st.boxes.map((box, i) => (i === boxIndex ? this.getRandomColor() : box))
            })
        );
    }


    getRandomColor() {
        return this.props.colorsVocab[Math.floor(Math.random() * this.props.colorsVocab.length)];
    }
    render() {
        return (
            <div>
                <div className="BoxList">
                    {this.state.boxes.map(b => <Box color={b} />)}
                </div>

                <button className="btn" onClick={this.changeBox} >Generate!</button>
            </div>
        )
    }

}

export default BoxList;