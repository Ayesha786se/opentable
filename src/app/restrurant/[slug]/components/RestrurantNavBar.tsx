import Link from 'next/link'
import React from 'react'

const RestrurantNavBar = () => {
  return (
    <nav className="flex text-reg border-b pb-2">
          <Link href="/restrurant/cnf" className="mr-7"> Overview </Link>
          <Link href="/restrurant/cnf/menu" className="mr-7"> Menu </Link>
        </nav>
  )
}

export default RestrurantNavBar