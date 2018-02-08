import React from 'react';
import Header from '../containers/Header';
import Example from './Example';
import {
    Alert
} from 'reactstrap';

export default class Sessions extends React.Component {
    render() {
        return (
            <div className="container">
            <Alert color="primary">
                การเชื่อมต่อทั้งหมด
            </Alert>
            </div>
        );
    }
}