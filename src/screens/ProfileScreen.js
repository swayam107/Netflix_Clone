import React, { useEffect, useState } from 'react'
import "./ProfileScreen.css"
import Nav from '../components/Nav'
import PlansScreen from './PlansScreen'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import { auth } from "../firebase1";


function ProfileScreen() {

  const user = useSelector(selectUser)

  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
  }, []);

  return (
    <div className='profilescreen'>
        <Nav />
        <div className='profileScreen_body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen_info'>
                <img 
                    src='images/my_avatar_n.jpg'
                />
                <div className='profileScreen_details'>
                  <h2>{user.email}</h2>
                  {/* <h2>samal@gmail.com</h2> */}
                  <div className='profileScreen_plans'>
                    {/* <PlansScreen /> */}
                    <h2>Plans (Current Plan: premium)</h2>
                    <p>Renewal date: {currentDate} </p>
                    <table>
                      <tr className='tr'>
                        <td>Netflix Basic<br/>480p</td>
                        <td><button className='profileScreen_subscribe'>Subscribe</button></td>
                      </tr>
                      <tr>
                        <td>Netflix Standard<br/>1080p</td>
                        <td><button className='profileScreen_subscribe'>Subscribe</button></td>
                      </tr>
                      <tr>
                        <td>Netflix Premium<br/>4k+HDR</td>
                        <td><button className='profileScreen_currentPkg'>Current Package</button></td>
                      </tr>
                    </table>
                    <button onClick={() => auth.signOut()} className='profileScreen_signOut'>Sign Out</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen