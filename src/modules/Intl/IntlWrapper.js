import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

export const IntlWrapper = (props) => {
    return (
        <IntlProvider {...props.intl} >
            {props.children}
        </IntlProvider>
    );
}

export default connect(
    (store) => {
        return {
            intl: store.intl || 'en',
        }
    }
)(IntlWrapper);