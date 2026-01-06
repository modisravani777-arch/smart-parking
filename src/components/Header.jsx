import React from 'react';
import { MapPin, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='bg-white border-b border-slate-200 shadow-sm'
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='bg-blue-600 p-2 rounded-lg'>
              <MapPin className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-slate-900'>Smart Parking Finder</h1>
              <p className='text-sm text-slate-600'>Real-time parking availability</p>
            </div>
          </div>
          <div className='hidden md:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg'>
            <Search className='w-4 h-4 text-slate-500' />
            <input 
              type='text' 
              placeholder='Search parking zones...' 
              className='bg-transparent border-none outline-none text-slate-700 placeholder-slate-500'
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;