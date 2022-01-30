import React from "react";
import Component2 from "./component2";

function Component1(props) {
    return (
        <h2>
            This text "{props.text}" is <Component2 type="Functional" />
        </h2>
    );
}

// export default class component1 extends Component {}

export default Component1;
