import React, { Component } from "react";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
        console.log("increment");
    };
    handleDecrement = () => {
        if (this.state.counter !== 0) {
            this.setState({
                counter: this.state.counter - 1,
            });
        }
        console.log("decrement");
    };

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h2>
                    <button onClick={this.handleDecrement}> - </button>
                    <strong> {this.state.counter} </strong>
                    <button onClick={this.handleIncrement}> + </button>
                </h2>
            </div>
        );
    }
}
