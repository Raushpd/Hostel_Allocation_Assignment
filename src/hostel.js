import logo from './logo.svg';
import './App.css';
import SignInScreen from './signup';
import firebase from "firebase";
import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
//  import girls from '../public/img/girls.png';
import { Button, Radio, Space } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function Hostel(props) {

    return (
        <div >
            <h1 style={{ display:"flex", justifyContent:"center" }}>Choose a hostel</h1>
            {(props.location.gender == 'boys') ?
                <div >
                   
                        <Space style={{ display:"flex", justifyContent:"center", marginLeft:"10px",marginTop:"50px", gridTemplateColumns:"repeat(3,1fr)"}}>
                        <Link  to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B1" }} >    <Button type="primary" >B1</Button>  </Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B2" }} >      <Button type="primary">B2</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B3" }} >     <Button type="primary">B3</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B4" }} >     <Button type="primary">B4</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B5" }} >     <Button type="primary">B5</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"B6" }} >     <Button type="primary">B6</Button></Link>
                        </Space>
                   
                </div>
                : <div>
                    <Space style={{ display:"flex", justifyContent:"center", marginLeft:"10px",marginTop:"50px", gridTemplateColumns:"repeat(3,1fr)"}}>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G1" }} >    <Button type="primary" >G1</Button>  </Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G2" }} >      <Button type="primary">G2</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G3" }} >     <Button type="primary">G3</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G4" }} >     <Button type="primary">G4</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G5" }} >     <Button type="primary">G5</Button></Link>
                        <Link to={{ pathname: "/floors" ,gender:props.location.gender,hostel:"G6" }} >     <Button type="primary">G6</Button></Link>
                        </Space>
                </div>
            }
        </div>

    );

}
export default Hostel;