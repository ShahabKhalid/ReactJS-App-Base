import React from 'react'
import PropTypes from 'prop-types'

import Colors from '../../global/Colors'

const defaultStyles = {
    backgroundColor: `${Colors.BaseColors.greenLight}`,
    padding: '10px',
    borderRadius: '30px',
    width: '100px',
    textAlign: 'center'
}

const Button = props => {
    const styles = {...defaultStyles, ...props.styles}
    return (
        <a
            style={styles}
        >
            {props.icon ? props.icon : null}
            {props.children}
        </a>
    )
}

Button.propTypes = {
    icon: PropTypes.node,
    children: PropTypes.node
}

export default Button