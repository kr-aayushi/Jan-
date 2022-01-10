import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'AAYUSHI'
        }
        console.log('Life cycle constructor A')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('Lifecycle a componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('Lifecycle A shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log('Lifecycle A getSnapshotBeforeUpdate')
    }
    componentDidUpdate()
    render() {
        console.log(' LIFECYCLE A RENDER Method')
        return (
            <div>
                LIFECYCLE A

                <LifecycleB />
            </div>
        )
    }
}
export default LifecycleA;

