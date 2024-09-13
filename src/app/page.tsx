import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="bg-slate-500 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/aima pic.jpeg" alt="" width="384" height="512"/>
    <div className="pt-6 text- space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          Home page. This is a home page of my website. You can check
          any information from this page about me website.
        
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-600 dark:text-sky-400">
          Aima Iftikhar 
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page