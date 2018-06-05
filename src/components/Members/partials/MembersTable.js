import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    Table,
    Button,
    InputField
} from '../../../global/Components'
import {
    FaPlusCircle,
    FaFileTextO,
    FaSearch,
    MdAccountCircle
} from '../../../global/Icons'
import { CircleLoader } from '../../../global/Spinners'
import Colors from '../../../global/Colors'

export default class MembersTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            startEntryIndex: 0,
            showingEntries: 5,
            currentPage: 1,
            searchName: ''
        }
        this.onChangeEntries = this.onChangeEntries.bind(this)
        this.getDataToShow = this.getDataToShow.bind(this)
        this.pagesLink = this.pagesLink.bind(this)
        this.changePage = this.changePage.bind(this)
        this.onChangeSearchName = this.onChangeSearchName.bind(this)
        this.getCustomData = this.getCustomData.bind(this)
    }

    defaultStyles() {
        return {
            tableWrapper: {

            },
            tableInnerWrapper: {
                backgroundColor: `${Colors.BaseColors.white}`,
                width: '90%',
                margin: '2% auto',
                boxShadow: `1px 5px 10px 1px ${Colors.BaseColors.gray}`,
                minHeight: '210px'
            },
            tableHead: {
                padding: '20px',
                paddingBottom: '10px',
                display: 'flex',
                flexDirection: 'row'
            },
            tableHeadLeft: {
                display: 'flex',
                flexDirection: 'row'
            },
            tableHeadRight: {
                position: 'absolute',
                right: '120px',
            },
            buttonsWrapper: {
                display: 'flex',
                flexDirection: 'row',
                position: 'relative',
                top: '20px'
            },
            table: {
                width: '98%',
                margin: '0 auto'
            },
            heading: {
                marginRight: '20px',
                cursor: 'pointer'
            },
            csvButton: {
                marginRight: '20px',
                cursor: 'pointer',
                width: '200px',
                backgroundColor: `${Colors.BaseColors.orange}`,
                color: `${Colors.BaseColors.white}`
            },
            addButton: {
                marginRight: '20px',
                cursor: 'pointer',
                width: '200px',
                backgroundColor: `${Colors.BaseColors.blueOpaque}`,
                color: `${Colors.BaseColors.white}`
            },
            headingInActive: {
                color: `${Colors.BaseColors.grayLight}`
            },
            icon: {
                color: `${Colors.BaseColors.white}`,
                width: '25px',
                padding: '0px 5px 0px 5px'
            },
            entriesField: {
                span: {
                    paddingLeft: '5px',
                    paddingRight: '5px'
                },
                input: {
                    width: '50px'
                }
            },
            paging: {
                padding: '5px 5px 5px 5px',
                borderRadius: '0px 0px 10px 10px',
                cursor: 'pointer'
            },
            currentPage: {
                backgroundColor: `${Colors.BaseColors.black}`,
                color: `${Colors.BaseColors.white}`
            },
            link: {
                padding: '5px 5px 5px 5px',
                cursor: 'pointer'
            },
            linkDisable: {
                color: `${Colors.BaseColors.gray}`
            },
            notifyError: {
                width: '90%',
                padding: '10px',
                margin: '0 auto',
                backgroundColor: `${Colors.BaseColors.redDark}`,
                color: `${Colors.BaseColors.white}`,
                fontWeight: 'bold',
                borderRadius: '15px 15px 15px 15px'
            },
            spinnerWrapper: {
                width: '10%',
                margin: '0 auto'
            },
            accountIcon: {
                width: '25px',
                height: '25px'
            }
        }
    }

    onChangeSearchName(name) {
        this.setState(() => {
            return {
                searchName: name.toLowerCase()
            }
        })
    }

    onChangeEntries(value) {
        this.setState(() => {
            return {
                showingEntries: parseInt(value, 10),
                currentPage: 1,
                startEntryIndex: 0
            }
        })
    }

    changePage(page) {
        this.setState((prevState) => {
            return {
                currentPage: page,
                startEntryIndex: (page - 1) * prevState.showingEntries
            }
        })
    }

    getFilteredData() {
        return this.getCustomData().map(_data => {
            if(_data.member.toLowerCase().includes(this.state.searchName)) {
                return _data
            }
        }).filter(function(d) { return d !== undefined })
    }

    getDataToShow() {
        return this.getFilteredData().slice(this.state.startEntryIndex, this.state.startEntryIndex + this.state.showingEntries)
    }

    pagesLink(dataCount, pagesCount, styles) {
        let pagesLinkArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesLinkArray.push(i)
        }

        return (
            <span>
            {
                pagesLinkArray.map((page, index) => {
                    const pageNavStyle = this.state.currentPage === page ? {...styles.paging, ...styles.currentPage} : styles.paging
                    return <a onClick={() => this.changePage(page)} style={pageNavStyle} key={index}>{page}</a>
                })
            }
            </span>
        )
    }

    renderPagesNav(dataCount, styles) {
        const pagesCount = Math.ceil(dataCount / this.state.showingEntries)
        const linkStyle = this.state.currentPage === 1 ? {...styles.link, ...styles.linkDisable} : styles.link
        const endLinkStyle = this.state.currentPage === pagesCount ? {...styles.link, ...styles.linkDisable} : styles.link
        return (
            <span>
                <a style={linkStyle} onClick={() => this.state.currentPage !== 1 ? this.changePage(1) : null}>First</a>
                <a style={linkStyle} onClick={() => this.state.currentPage !== 1 ? this.changePage(this.state.currentPage - 1) :  null}>Previous</a>
                <span>{this.pagesLink(dataCount, pagesCount, styles)}</span>
                <a style={endLinkStyle} onClick={() => this.state.currentPage !== pagesCount ? this.changePage(this.state.currentPage + 1) :  null}>Next</a>
                <a style={endLinkStyle} onClick={() => this.state.currentPage !== pagesCount ? this.changePage(pagesCount) :  null}>Last</a>
            </span>
        )
    }

    getCustomData() {
        const customData = this.props.data.map(d => {
            return {
                '': <MdAccountCircle style={this.defaultStyles().accountIcon}/>,
                ...d
            }
        })
        return [...customData]
    }

    render() {
        const styles = this.defaultStyles()
        const dataLength = this.getFilteredData().length

        return (
            <div style={styles.tableWrapper}>
                <div style={styles.tableInnerWrapper}>
                    <div style={styles.tableHead}>
                        <div style={styles.tableHeadLeft}>
                            <h1 style={styles.heading}>
                                Indivisuals
                            </h1>
                            <h1 style={{...styles.heading, ...styles.headingInActive}}>
                                Business
                            </h1>
                        </div>
                        <div style={styles.tableHeadRight}>
                            <div style={styles.buttonsWrapper}>
                                <Button
                                    icon={<FaPlusCircle style={styles.icon}/>}
                                    styles={styles.addButton}
                                >
                                    Add Single Member
                                </Button>
                                <Button
                                    icon={<FaFileTextO style={styles.icon} />}
                                    styles={styles.csvButton}
                                >
                                    Add From CSV
                                </Button>
                            </div>
                        </div>
                    </div>
                    { 
                        this.props.fetching ? <div style={styles.spinnerWrapper}><CircleLoader /></div> :
                        <div>
                            {!this.props.fetchSuccess ? 
                                <div style={styles.tableHead}>
                                    <span style={styles.notifyError}>Can't fetch members at the moment</span>
                                </div>
                                :                    
                                <div>
                                    <div style={styles.tableHead}>
                                        <div style={styles.tableHeadLeft}>
                                            <span>
                                                Show
                                                <InputField
                                                    type='number'
                                                    styles={styles.entriesField.span}
                                                    inputStyles={styles.entriesField.input}
                                                    value={this.state.showingEntries}
                                                    onChange={value => this.onChangeEntries(value)}
                                                    min={1}
                                                    max={50}
                                                />
                                                entries
                                            </span>
                                        </div>
                                        <div style={styles.tableHeadRight}>
                                            <InputField
                                                placeholder='Search Member'
                                                icon={<FaSearch />}
                                                styles={styles.searchField}
                                                onChange={value => this.onChangeSearchName(value)}
                                            />
                                        </div>
                                    </div>
                                    <Table styles={styles.table} data={this.getDataToShow()} />
                                    <div style={styles.tableHead}>
                                        <div style={styles.tableHeadLeft}>
                                            <span>
                                                Showing {this.state.startEntryIndex + 1} to {this.state.startEntryIndex + this.state.showingEntries > dataLength ? dataLength : this.state.startEntryIndex + this.state.showingEntries} of {dataLength} entries
                                            </span>
                                        </div>
                                        <div style={styles.tableHeadRight}>
                                            {this.renderPagesNav(dataLength, styles)}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

MembersTable.propTypes = {
    data: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetchSuccess: PropTypes.bool.isRequired
}
