import React, { Component } from 'react'

import Colors from '../Colors'

export default class InputField extends Component {
    
    defaultStyles() {
        return {
            input: {
                height: '20px',
                padding: '5px'
            },
            icon: {
                position: 'absolute',
                right: '10px',
                top:'6px',
                width: '20px',
                height: '20px',
                color: `${Colors.BaseColors.gray}`
            }
        }
    }

    onChange() {
        this.props.onChange(this.input.value);
    }
    
    render() {
        const styles = this.defaultStyles();
        return (
            <span style={this.props.styles}>
                <input                                         
                    placeholder={this.props.placeholder ? this.props.placeholder : ''}
                    style={{...styles.input, ...this.props.inputStyles}}
                    value={this.props.value}
                    ref={r => this.input = r}
                    onChange={this.onChange.bind(this)}  
                    type={this.props.type ? this.props.type : 'text'} 
                    min={this.props.min}
                    max={this.props.max}                
                />
                {this.props.icon ? <span style={styles.icon}>{this.props.icon}</span> : null}
            </span>
        )
    }
}