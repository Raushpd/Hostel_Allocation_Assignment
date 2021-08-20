import logo from './logo.svg';
import './App.css';
import SignInScreen from './signup';
import firebase from "firebase";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar, message, Dropdown } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
//  import girls from '../public/img/girls.png';
import { Button, Radio, Space, Menu } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Select from 'react-select';


function handleMenuClick(e) {
    return (
        <h3>Book Room</h3>
    );

}





function Floor(props) {

    const [show, setShow] = useState(false);
    const [info, setInfo] = useState({ "gender": props.location.gender, "hostel": props.location.hostel, "room_no": 0 });
    return (
        <>
       <h3 style={{ display:"flex", justifyContent:"center", marginTop:"40px"}}>Choose Your Floor</h3>

        <div>
            <div>
                <select id="dropdown" style={{ display: "flex", justifyContent: "center", marginTop: "1px", marginLeft: "750px" }}>


                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "10px", marginTop: "50px", gridTemplateColumns: "repeat(3,1fr)" }}>

                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 1, "hostel": props.location.hostel }) }}>1</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 2, "hostel": props.location.hostel }) }}>2</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 3, "hostel": props.location.hostel }) }}>3</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 4, "hostel": props.location.hostel }) }}>4</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 5, "hostel": props.location.hostel }) }}>5</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 6, "hostel": props.location.hostel }) }}>6</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 7, "hostel": props.location.hostel }) }}>7</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 8, "hostel": props.location.hostel }) }}>8</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 9, "hostel": props.location.hostel }) }}>9</button>
                <button type="primary" onClick={() => { setShow(true); setInfo({ "room_no": 10, "hostel": props.location.hostel }) }}>10</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "10px", marginTop: "50px"}}>
                <Link to={{ pathname: "/final", info: info }} >
                    {


                        <button >
                            {show ? <h3>Book Room</h3> : null}</button>

                    }
                </Link>
            </div>

        </div>
        </>
    );
}

export default Floor;