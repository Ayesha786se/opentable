import React from 'react'

const RestrurantTitle = ({title}:{title:string}) => {
  return (
    <div className="mt-4 border-b pb-6 ">
          <h1 className="font-bold text-6xl">{title} </h1>
        </div>
  )
}

export default RestrurantTitle