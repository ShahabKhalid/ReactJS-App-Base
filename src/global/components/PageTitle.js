import React from 'react';

import Colors from '../../global/Colors';

const defaultStyle = {
    color: `${Colors.BaseColors.white}`
}

const PageTitle = (props) => {
    return (
        <h1 style={defaultStyle}>{props.children}</h1>
    );
}

export default PageTitle