
import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/action";

const Counter = (props) => (
    <main>
        <button onClick={props.increment}>+</button>
        <h1>{props.tampilCount}</h1>
        <button onClick={props.decrement} disabled={props.tampilCount <= 0}>‒</button>
    </main>
);

const mapStateToProps = b => ({
    tampilCount: b.count
});

// DISPATCH SECARA TIDAK LANGSUNG
const mapDispatchToProps = {
    ...actions
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);