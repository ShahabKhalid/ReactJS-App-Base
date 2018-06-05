import React, { Component } from 'react'

import SideBar from './SideBar/SideBar'
import MembersPage from '../components/Members/membersPage.container'


class App extends Component {

  defaultStyles() {
    return {
      div: {
        position: 'absolute',
        top: '0',
        right: '0',
        height: '100%',
        width: '100%',
        padding: '0'
      },
      table: {
        height: '100%',
        width: '100%',
        borderSpacing: '0px',
      },
      tr: {
        verticalAlign: 'top'

      },
      td: {
        padding: '0',
      }
    }
  }

  render() {
    const styles = this.defaultStyles();
    return (
      <div className="App" style={styles.div}>
        <table style={styles.table}>
          <tbody>
            <tr style={styles.tr}>
              <td style={{...styles.td, width: '100px'}}>
                <SideBar />
              </td>
              <td style={styles.td}>
                <MembersPage />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
