import React from 'react'
import { connect } from 'react-redux';

const Counter2 = (props) => {
    return (
        <div>
            <button onClick={props.plusHandle}>+</button>
            <h1>{props.tampilCount}</h1>
            <button onClick={props.minusHandle}>-</button>
        </div>
    )
}

const mapStateToProps = (a) => {
    return {
        tampilCount: a.count
    };
};

// DISPATCH SECARA LANGSUNG
const mapDispatchToProps = (dispatch) => {
    return {
        plusHandle: () => dispatch({ type: "INCREMENT" }),
        minusHandle: () => dispatch({ type: "DECREMENT" })
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(Counter2)
