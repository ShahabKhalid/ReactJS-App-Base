import React, { Component } from 'react';
import PropTypes from 'prop-types'

import MembersTable from './partials/MembersTable'
import {
    PageTitle,
    InputField
} from '../../global/Components';
import { FaSearch } from '../../global/Icons'

export default class MembersPage extends Component {

    componentDidMount() {
        this.props.fetchMembers()
    }

    defaultStyles() {
        return {
            headWrapper: {
                padding: '20px',
                display: 'flex'
            },
            searchField: {
                position: 'absolute',
                right: '20px',
                top: '43px'
            }
        }
    }

    render() {
        const styles = this.defaultStyles()
        return (
            <div>
                <div style={styles.headWrapper}>
                    <PageTitle>Members</PageTitle>
                    <InputField
                        placeholder='Search'
                        icon={<FaSearch />}
                        styles={styles.searchField}
                    />
                </div>
                <div>
                    <MembersTable data={this.props.members} fetching={this.props.fetching} fetchSuccess={this.props.fetchSuccess}/>
                </div>
            </div>
        );
    }
}

MembersPage.propTypes = {
    members: PropTypes.array,
    fetching: PropTypes.bool,
    fetchSuccess: PropTypes.bool
}