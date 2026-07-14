import React, { useState } from 'react'

const Web = () => {

    // Your State
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: ""
});

// Your optimized function
const handleChange = (e) => {
  console.log(e.target);
  
  const { name, value } = e.target;
  
  setFormData(prev => ({
    ...prev,
    [name]: value // [name] uses the value of the 'name' attribute as the key
  }));
};

// Your JSX

  return (
 <div className='text-black border border-black flex flex-col p-4 gap-3'>
<input className='border border-black px-3 py-2' name="name" onChange={handleChange} value={formData.name} />
<input className='border border-black px-3 py-2' name="email" onChange={handleChange} value={formData.email} />
<input className='border border-black px-3 py-2' name="password" onChange={handleChange} value={formData.password} />
<div className='w-full max-w-xl rounded-lg overflow-hidden border border-black'>
  <video
    className='w-full h-auto'
    controls
    preload='metadata'
    playsInline
  >
    <source src='https://video5.xhpingcdn.com/key=FVk+oXzRcU9K+Oj4ilQfTQ,end=1783321200,limit=3/data=27.97.92.204-dvp/referer=force,.xhcdn.com,.xhamster46.desi/speed=0/029/995/050/480p.h264.mp4' type='video/mp4' />
    Your browser does not support the video tag.
  </video>
</div>
</div>
  ) 
}

export default Web