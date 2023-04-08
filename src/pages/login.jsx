import { useState } from 'react';
import { useRouter } from 'next/router';
import Circle1 from './../..//public/circle1.svg'
import Circle2 from './../..//public/circle1.svg'
import Circle3 from './../..//public/circle1.svg'
export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) =>{ 
    setUsername(e.target.value)
  };
  const handlePasswordChange = (e) =>{ setPassword(e.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://frontendtestapi.staging.fastjobs.io/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: 'include'
    });

    if (response.ok) {
      console.log(response)
      router.push('/table');
      const endpoint = "https://frontendtestapi.staging.fastjobs.io/auth/me";
      fetch(endpoint, {
        method: "GET",
        credentials: "include", 
      })
        .then((response) => {
          if (response.status === 200) {
            response.json().then((data) => {
              console.log(data); 
            });
          } else {
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Please check your username and password');
    }
  };

return (
  <div className="flex min-h-screen">
    <div className="w-2/3 bg-blue-600 p-8 relative">
      {/* content for the left 2/3 of the page goes here */}
      
    </div>
       <svg width="1000" height="1000" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
      <g filter="url(#filter0_d_1_1015)">
        <circle cx="262" cy="262" r="100" fill="#A5A6F6" fill-opacity="0.89" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_1_1015" x="0" y="0" width="524" height="524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="39" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_1015"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="46"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1015"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1015" result="shape"/>
        </filter>
      </defs>
    </svg>
       <svg width="2000" height="2000" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
      <g filter="url(#filter0_d_1_1015)">
        <circle cx="262" cy="262" r="100" fill="#A5A6F6" fill-opacity="0.62" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_1_1015" x="0" y="0" width="524" height="524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="39" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_1015"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="46"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1015"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1015" result="shape"/>
        </filter>
      </defs>
    </svg>
       <svg width="3000" height="3000" viewBox="0 0 524 524" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
      <g filter="url(#filter0_d_1_1015)">
        <circle cx="262" cy="262" r="100" fill="#A5A6F6" fill-opacity="0.35" shape-rendering="crispEdges"/>
      </g>
      <defs>
        <filter id="filter0_d_1_1015" x="0" y="0" width="524" height="524" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feMorphology radius="39" operator="erode" in="SourceAlpha" result="effect1_dropShadow_1_1015"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="46"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1015"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1015" result="shape"/>
        </filter>
      </defs>
    </svg>
    
    <div className="w-1/3 absolute h-full  left-2/3  bg-gray-900 p-8 flex justify-center items-center">
   
      <form onSubmit={handleSubmit} className="w-full">
        <h3 className="text-white font-poppins font-semibold text-2xl mb-6">Login to your account</h3>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white font-medium mb-2">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} className="w-full rounded-md py-2 px-3 bg-gray-800 text-white" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-medium mb-2">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="w-full rounded-md py-2 px-3 bg-gray-800 text-white" />
        </div>
        <button type="submit" className="bg-blue-200 text-dark py-2 px-3 rounded-md hover:bg-blue-300 transition-colors h-full w-full">Log in</button>
      </form>
    </div>
  </div>
);
}
