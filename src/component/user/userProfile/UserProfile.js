import {Tabs} from "antd";
import React, { Children } from "react";
import Profile from ".Profile";

const UserProfile = () => {
    const tabsItem = [
        {
            label: "Profile",
            key : 1,
            children : <Profile/>, 
        },
        {
            label: "Activity",
            key: 2,
            children : "Content of Tab 2",
        }
    ];

    return (
        <div>
            <div>
                <Tabs tabPosition="left" items={tabsItem}/>
            </div>
        </div>
    )
}

export default UserProfile;