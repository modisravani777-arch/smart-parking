import React from 'react';
import { motion } from 'framer-motion';
import { Car, CheckCircle, XCircle, TrendingUp } from 'lucide-react';
import { useParkingData } from '@/hooks/useParkingData';

const StatsOverview = () => {
  const { parkingZones } = useParkingData();

  const totalSpots = parkingZones.reduce((sum, zone) => sum + zone.totalSpots, 0);
  const occupiedSpots = parkingZones.reduce((sum, zone) => sum + zone.occupiedSpots, 0);
  const freeSpots = totalSpots - occupiedSpots;
  const averageOccupancy = ((occupiedSpots / totalSpots) * 100).toFixed(1);

  const stats = [
    {
      icon: Car,
      label: 'Total Parking Spots',
      value: totalSpots,
      color: 'bg-blue-500',
      textColor: 'text-blue-600'
    },
    {
      icon: CheckCircle,
      label: 'Available Spots',
      value: freeSpots,
      color: 'bg-green-500',
      textColor: 'text-green-600'
    },
    {
      icon: XCircle,
      label: 'Occupied Spots',
      value: occupiedSpots,
      color: 'bg-red-500',
      textColor: 'text-red-600'
    },
    {
      icon: TrendingUp,
      label: 'Average Occupancy',
      value: `${averageOccupancy}%`,
      color: 'bg-purple-500',
      textColor: 'text-purple-600'
    }
  ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className='bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow'
        >
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm text-slate-600 font-medium'>{stat.label}</p>
              <p className={`text-3xl font-bold mt-2 ${stat.textColor}`}>{stat.value}</p>
            </div>
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className='w-6 h-6 text-white' />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;