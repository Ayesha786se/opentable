import React from 'react'

const Header = ({slug}:{slug:string}) => {
  const renderTitle=()=>{
  const slugArray=slug.split('-')
  slugArray[slugArray.length-1]=`(${ slugArray[slugArray.length-1]})`
  return slugArray.join(' ')
  }

 
  return (
    <div className="h-96 overflow-hidden">
    <div
      className="bg-center bg-pink-600 h-full flex justify-center items-center"
    >
      <h1 className="text-7xl text-white capitalize text-shadow text-center">
       {renderTitle()}
      </h1>
    </div>
  </div>
  )
}

export default Header