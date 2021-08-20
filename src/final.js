import logo from './logo.svg';
import './App.css';
import SignInScreen from './signup';
import firebase from "firebase";
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar, message, Dropdown } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
//  import girls from '../public/img/girls.png';
import { Button, Radio, Space, Menu } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Select from 'react-select';
import Hostel from './hostel';


function Final(props){
    return(
        <div style={{ alignItems: "center", marginTop: "50px"}}>
            <h1 style={{textAlign:"center"}}>Success</h1>
            <h2 style={{textAlign:"center"}}>Your room is book successfully</h2>
            <h2 style={{textAlign:"center"}}>Your Room details are as follows:</h2>
            <h3 style={{textAlign:"center"}}>Hostel No. {props.location.info.hostel}</h3>
            <h3 style={{textAlign:"center"}}>Room No. {props.location.info.room_no} </h3>
        </div>
    );
}

export default Final;