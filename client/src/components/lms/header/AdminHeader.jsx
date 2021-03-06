import React from 'react';
import Logo from '../../assets/images/logo.png';
import './AdminHeader.scss';
import * as AiIcons from 'react-icons/all';
import Profile from '../../assets/images/logo.png';

export default function AdminHeader() {
    return (
        <div>
            <div className="admin-header">
                <div className="header">
                    <div className="left">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="right">
                        <div className="messages">
                            <div className="icon">
                                <AiIcons.BsChatDots />
                            </div>
                            <div className="notify">
                                <div className="in-notify">
                                </div>
                            </div>
                        </div>
                        <div className="notifications">
                            <div className="icon">
                                <AiIcons.IoNotificationsOutline />
                            </div>
                            <div className="notify">
                                <div className="in-notify">
                                </div>
                            </div>
                        </div>
                        <div className="profile">
                            <div className="icon">
                                <img src={Profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
