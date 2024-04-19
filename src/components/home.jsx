
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Beauty from './beauty';


const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigate('/beauty')
  }
// const logout=()=>{
//   dispatch({type:'SET_USER',payload:'user not found'});
//   Navigator('/beauty')
// }
  return (

    <>
    <div style={{color:'black',backgroundColor:"pink ",flexDirection:'row',width:'1550px',height:'100px'}}>
    <h1 style={{alignContent:'start',justifyContent:"initial",display:'flex',textAlign:"start"}}>EliteBeautyVault.com</h1>
    <div style={{display:'flex',justifyContent:'center',gap:'20px',alignItems:'centre'}}>
    <button style={{backgroundColor:'white',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}onClick={logout}>Home</button>
    <button style={{backgroundColor:'white',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}onClick={logout}>About Us</button>

    {/* <button style={{backgroundColor:'beige',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}onClick={beauty}>beauty</button> */}
    <button style={{backgroundColor:'white',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>Products</button>
    <button style={{backgroundColor:'white',width:'100px',height:'30px',padding:'10px',borderRadius:'30px'}}>Contact</button>

    </div>
    </div>
    <centre>
    <div style={{backgroundImage:`url(h.jpg)`,height:'800px',width:'1550px',backgroundSize:'cover',backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
    <div style={{alignItems:'center',display:'flex',justifyContent:"center",flexDirection:'row',width:'700px',height:'800px',flexDirection:"column"}}>
      <h1>LUXURY COSMETIC & BEAUTY PRODUCTS</h1>
      <div>THIS IS THE PLACE WHERE YOU WILL FIND</div>
    </div>
    </div>
    </centre>
    <div style={{marginLeft:'20px',justifyContent:'space-between',display:'flex',}}>
      <a>
        <h2>Monat</h2>
        <img src="t.jpg" style={{height:'300px',width:'300px',}} alt=''/>     
</a>

      <a>
<h2>Ph Beauty</h2>
<img src="ph.jpg" style={{height:'300px', width:"300px"}} alt=''/>
</a>
<a href="#" onClick={logout}>
<h2>Misolo</h2>
<img src="qm.jpg" style={{height:'300px', width:"300px"}} alt=''/>
</a>
<a >
<h2>Focallure</h2>
<img src="1.png" style={{height:'300px', width:"300px"}} alt=''/>
</a>
<a  >
<h2>M Cream</h2>
<img src="o.jpg" style={{height:'300px', width:"300px"}} alt=''/>
</a>
    </div>
    </>
  );
};

export default Home;

