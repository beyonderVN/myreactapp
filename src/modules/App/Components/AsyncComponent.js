import React, { Component } from 'react';

export default function asyncComponent(importComponent, renderLoading) {

    class AsyncComponent extends Component {
        state = {
            component: null,
        }

        async componentDidMount() {
            const { default: component } = await importComponent();

            new Promise(resolve => setTimeout(() => {
                this.setState({
                    component: component
                });
            }
                , 500));

        }

        render() {
            const C = this.state.component;

            return C
                ? <C {...this.props} />
                : renderLoading ? renderLoading() : <div>loading...</div>
        }
    }

    return (renderLoading) => { return <AsyncComponent renderLoading={renderLoading} /> };
}