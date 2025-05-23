'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';  // Importing the user icon

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  }

  return (
    <nav className="navbar px-4 py-3 flex justify-between items-center">
      <div>
        <Link href="/" className="text-xl font-bold text-white">
          Screen<span className="text-accent">Sense</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {currentUser ? (
          <>

            {/* Profile Icon */}
            <Link
              href="/profile"
              className="p-2 rounded-full hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 transition-colors"
            >
              <FaUserCircle size={24} />
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-sm rounded-md bg-transparent hover:bg-red-900 text-red-500 hover:text-red-100 border border-red-700 transition-colors"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link 
              href="/login"
              className="px-3 py-1.5 text-sm rounded-md bg-transparent hover:bg-primary/20 text-white border border-primary/50 transition-colors"
            >
              Login
            </Link>
            <Link 
              href="/signup"
              className="px-3 py-1.5 text-sm rounded-md bg-primary hover:bg-primary-hover text-white transition-colors"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
