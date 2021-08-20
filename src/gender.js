import logo from './logo.svg';
import './App.css';
import SignInScreen from './signup';
import firebase from "firebase";
import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
//  import girls from '../public/img/girls.png';

const { Meta } = Card;
function Gender() {
    return (
        <>
       <h1 style={{ display:"flex", justifyContent:"center", marginTop:"40px"}}>Choose Your hostel</h1>
           
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"200px"}}>
              <Link to={{ pathname:"/hostel" ,gender:"girls"}} >
            <Card
                style={{ width: 300 }}
                cover={
                    <img style={{ width: "100%" }}
                        alt="girls hostel"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Girls-logo.svg/1920px-Girls-logo.svg.png"
                    />
                }
            >
                
             

            </Card >
            </Link>
            <Link to={{ pathname:"/hostel" ,gender:"boys"}} >
            <Card
                style={{ width: 300 }}
                cover={
                    <img style={{ width: "100%" }}
                        alt="boys hostel"
                        src="https://www.colourbox.com/preview/9276441-boys-word-written-with-white-chalk.jpg"
                    />
                }
            >
                


            </Card>
            </Link>
        </div >
        </>
    );

}
export default Gender;