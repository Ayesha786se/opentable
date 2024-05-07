import React from 'react'
import Header from './components/Header'

const RestrurantLayout = ({
    children,
    params
  }: Readonly<{
    children: React.ReactNode;
    params:{slug:string}
  }>) => {
  return (
  <> <Header slug={params.slug}/>
 
  <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
    {children}</div></>
  )
}

export default RestrurantLayout