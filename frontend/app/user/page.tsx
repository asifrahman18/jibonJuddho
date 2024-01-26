'use client'
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useContext } from 'react';

const HomePage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  return (
    (<div className="grid place-items-center min-h-screen text-6xl">
    {isAuthenticated && <p>Welcome {user.first_name}</p>}
    {!isAuthenticated && <p>You need to <Link href='signIn/'> sign in </Link> first</p>}
  </div>)
  )
}

export default HomePage
