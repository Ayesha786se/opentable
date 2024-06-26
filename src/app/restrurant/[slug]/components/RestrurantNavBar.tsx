import Link from 'next/link'
import React from 'react'

const RestrurantNavBar = ({slug}:{slug:string}) => {
  return (
    <nav className="flex text-reg border-b pb-2">
          <Link href={`/restrurant/${slug}`} className="mr-7"> Overview </Link>
          <Link href={`/restrurant/${slug}/menu`} className="mr-7"> Menu </Link>
        </nav>
  )
}

export default RestrurantNavBar