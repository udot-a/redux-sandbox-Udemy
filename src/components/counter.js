import React from 'react';
import {connect} from "react-redux";
import "../style.css";
import * as actions from "../actions";
import {bindActionCreators} from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={() => rnd(Math.floor(Math.random()*25))}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    );
};
const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
// const mapDispatchToProps = {
//     inc,
//     dec,
//     rnd
// }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);