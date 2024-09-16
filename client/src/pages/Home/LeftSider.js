import React from 'react'

function LeftSider() {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-3 sm:flex-row'>
            <i class="ri-facebook-circle-line text-gray-600 text-xl"></i>
            <i class="ri-mail-line text-gray-600 text-xl"></i>
            <a href='https://www.instagram.com/abhinav_gopinadh_?igsh=YWE1MzNvdWNkcmg4'>
              <i class="ri-instagram-line text-gray-600 text-xl"></i>
            </a>
            <a href='https://www.linkedin.com/in/abhinavkg123?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <i class="ri-linkedin-box-line text-gray-600 text-xl"></i>
            </a>
            <i class="ri-github-line text-gray-600 text-xl"></i>
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'>

        </div>
    </div>
    </div>
  )
}

export default LeftSider