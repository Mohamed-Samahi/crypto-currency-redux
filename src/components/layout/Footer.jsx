import React from 'react'

import { Typography, Space } from "antd";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Typography.Title
                style={{ color: "white", textAlign: "center", fontSize: "16px", fontWeight: "600", lineHeight: "1.5" }}
            >
                Cryptoverse <br />
                All Rights Reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
    )
}

export default Footer