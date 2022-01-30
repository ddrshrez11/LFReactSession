import React, { Component } from "react";
import Component4 from "./component4";
export default class Component3 extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <h1>
                This text "{this.props.text}" <Component4 type="Class Based" />{" "}
            </h1>
        );
    }
}
