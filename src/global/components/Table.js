import React, { Component } from 'react'
import startCase from 'lodash/startCase'

import Colors from '../Colors'

export default class Table extends Component {

    defaultStyles() {
        return {
            table: {
                backgroundColor: `${Colors.BaseColors.white}`,
                padding: '10px',
                width: '100%',
                borderSpacing: '0px'                
            },
            tr: index => ({
                backgroundColor: index % 2 === 0 ? `${Colors.BaseColors.grayLighter}` : `${Colors.BaseColors.grayLightest}`
            }),
            th: {
                padding: '10px 20px 10px 20px'
            },
            td: {
                textAlign: 'center',
                padding: '10px 20px 10px 20px'
            }
        }
    }


    getHeaders(data) {
        return data.length < 1 ? [] : Object.keys(data[0]);
    }

    renderHeaders(data, styles) {
        const headers = this.getHeaders(data)
        return (
            <tr>
                {
                    headers.map((head, index) => {
                        return <th key={index} style={styles.th}>{startCase(head)}</th>
                    })
                }
            </tr>
        )
    }

    renderData(data, styles, index) {
        return (
            <tr key={index} style={styles.tr(index)}>
                {
                    Object.values(data).map((value, _index) => {
                        return <td key={_index} style={styles.td}>{value}</td>
                    })
                }
            </tr>
        )
        
    }

    render() {
        const styles = this.defaultStyles()
        return (
            <table style={{...styles.table, ...this.props.styles}}>
            <tbody>
                {this.renderHeaders(this.props.data, styles)}
                {
                    this.props.data.map((data, index) => {
                        return this.renderData(data, styles, index)
                    })
                }
            </tbody>
            </table>
        )
    }
}