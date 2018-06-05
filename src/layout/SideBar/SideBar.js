import React, { Component } from 'react'
import Colors from '../../global/Colors'

import { 
    TiWorldOutline,
    FaQuestionCircleO,
    MdAccountCircle
 } from '../../global/Icons';

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navClicked: 0
        }
        this.changeNavPage = this.changeNavPage.bind(this)
    }

    defaultStyles() {
        return {
            div: {
                position: 'absolute',
                height: '100%',
                width: '100px',
                textAlign: 'center',
                boxShadow: `1px 5px 10px 1px ${Colors.BaseColors.gray}`,
                backgroundColor: `${Colors.BaseColors.orange}`
            },
            barItemWrapper: {
                paddingTop: '20px'
            },
            logo: {
                width: '40px',
                height: '40px'
            },
            hr: {
                width: '70px'
            },
            dp: {
                width: '50px',
                height: '50px'
            },
            navIconsWrapper: {
                padding: '20px 0px 0px 0px',
                display: 'flex',
                flexDirection: 'column',
                margin: '0 30%'
            },
            faQuestionCircleO: isClicked => ({
                width: '30px',
                height: '30px',
                color: isClicked ? `${Colors.BaseColors.orange}` : `${Colors.BaseColors.white}`,
                backgroundColor: isClicked ? `${Colors.BaseColors.white}` : null,
                padding: '6px',
                marginBottom: '20px',
                borderRadius: '15px 15px 15px 15px',
                cursor: 'pointer'
            })
        }
    }

    changeNavPage(id) {
        this.setState(() => {
            return { 
                navClicked: id 
            }
        })
    }

    render() {

        const styles = this.defaultStyles();
        const navLinks = ['Home', 'About Us', 'Portfolio', 'Contact Us', 'Careers'];
        return (
            <div style={styles.div}>
                <div style={styles.barItemWrapper}>
                    <TiWorldOutline style={styles.logo}/>
                    <hr style={styles.hr}/>
                    <MdAccountCircle style={styles.dp} />
                    <hr style={styles.hr}/>
                    <div style={styles.navIconsWrapper}>
                        {
                            navLinks.map((linkName, index) => {
                                return <span key={index} title={linkName}>
                                        <FaQuestionCircleO style={styles.faQuestionCircleO(this.state.navClicked === index)} onClick={() => this.changeNavPage(index)}/> 
                                    </span>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar