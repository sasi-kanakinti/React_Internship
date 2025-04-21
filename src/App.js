import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';


function getpassword(length,uppercase,lowercase,specialchar,number){
const up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const low="abcdefghijklmnopqrstuvwxyz"
const spl="!@#$%^&*()-_=+\|[]{};:/?.>"
const num="0123456789"

let combined="";

if(uppercase) combined+=up;

if(lowercase) combined+=low;

if(specialchar) combined+=spl;

if(number) combined+=num;


let final_password="";
for (let index = 0; index <length; index++) {

  const index_rand=Math.floor(Math.random()*combined.length);
  const random_char=combined[index_rand];
  final_password+=random_char;  
}

return final_password;
}

function App() {
  const min_password_length=8;
  const max_password_length=48;
  const [passwordLen,setPasswordLen]=useState("10");
  const[uppercase,setuppercase]=useState(true);
  const[lowercase,setlowercase]=useState(true);
  const[specialchar,setspecialchar]=useState(true);
  const[number,setnumber]=useState(true);

  const password=getpassword(parseInt(passwordLen),uppercase,lowercase,specialchar,number);
  return (
    <div className='main-panel'>
    <div className='panel'> 
    <div className='slider'> 
    <input className='ip-box' 
    type='number'
    min={min_password_length}
    max={max_password_length}
    value={passwordLen}onChange={(e)=>setPasswordLen(e.target.value)}
    />
    <input
    type="range"
    min={min_password_length}
    max={max_password_length}
    value={passwordLen}onChange={(e)=>setPasswordLen(e.target.valueAsNumber)}
    />
    </div>
     <div className='mylabels'>
      <label>
        <input disabled
        checked={uppercase}
        type='checkbox' />
       
        Uppercase
      </label>

      <label>
        <input
         checked={lowercase}
        type='checkbox' onChange={(e)=>setlowercase(e.target.checked)}/>
        
        Lowercase
      </label>

      <label>
        <input
         checked={specialchar}
        type='checkbox' onChange={(e)=>setspecialchar(e.target.checked)}/>
         
        Special Characters
      </label>

      <label>
        <input
         checked={number}
        type='checkbox' onChange={(e)=>setnumber(e.target.checked)}/>
        
        Numbers
      </label>
    </div>
    </div>
    <div className='displaypass'> 
<input className='pass-input'
value={password}
/>
<div className='btns'> 


<button className='copy-btn'
onClick={()=>{
  navigator.clipboard.writeText(password);
  toast.success("Copied to clipboard!", {
    position: "top-center",
    autoClose: 2500, // Disappears after 3 seconds
  });
 
}}
>Copy</button>
<button className='re-btn'
onClick={()=>{ 
  toast.success("New Password Successfully Generated!", {
    position: "top-center",
    autoClose: 1000, 
  });
  const password2=getpassword(parseInt(passwordLen),uppercase,lowercase,specialchar,number)
document.querySelector(".pass-input").value=password2;

}}

>Regenerate</button>
</div>
<ToastContainer/>
 <div className='heading'>
      <h2>Password Generator by Surya Sharma</h2>
    </div>
    </div>
   
    </div>
  
  );
}

export default App;
