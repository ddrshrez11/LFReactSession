import React, { Component } from "react";
export default class Component4 extends Component {
    constructor(props) {
        super();
    }
    render() {
        return <em>is passed as props in {this.props.type} component.</em>;
    }
}
