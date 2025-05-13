import React from 'react';
// import Intercom from '@intercom/messenger-js-sdk';

export default function IntercomMessenger( user) {
  // Intercom({
  //   app_id: 'qq1skuwt',
  //   user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  //   name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  //   email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  //   created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
  // });

  return <div>
    <a href="https://discord.com/invite/Vkacbf7jZp" 
   target="_blank" 
   rel="noopener noreferrer"
   class="group fixed bottom-12 md:bottom-6 right-6  bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300"
   aria-label="Join us on Discord">
  <svg class="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-110" 
       aria-hidden="true" 
       xmlns="http://www.w3.org/2000/svg" 
       viewBox="0 0 24 24" 
       fill="currentColor">
    <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
  </svg>
</a>

  </div>;
}

