import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, DollarSign, Car, Navigation2, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ParkingDetails = ({ selectedParking }) => {
  const { toast } = useToast();

  if (!selectedParking) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-white rounded-xl shadow-sm border border-slate-200 p-6 h-[600px] flex items-center justify-center'
      >
        <div className='text-center'>
          <MapPin className='w-12 h-12 text-slate-300 mx-auto mb-3' />
          <p className='text-slate-500 font-medium'>Select a parking zone</p>
          <p className='text-sm text-slate-400 mt-1'>Click on a marker to view details</p>
        </div>
      </motion.div>
    );
  }

  const freeSpots = selectedParking.totalSpots - selectedParking.occupiedSpots;
  const availabilityPercentage = ((freeSpots / selectedParking.totalSpots) * 100).toFixed(0);
  const statusColor = availabilityPercentage > 50 ? 'text-green-600' : availabilityPercentage > 20 ? 'text-amber-600' : 'text-red-600';
  const statusBg = availabilityPercentage > 50 ? 'bg-green-50' : availabilityPercentage > 20 ? 'bg-amber-50' : 'bg-red-50';
  const statusBorder = availabilityPercentage > 50 ? 'border-green-200' : availabilityPercentage > 20 ? 'border-amber-200' : 'border-red-200';

  const handleGetDirections = () => {
    toast({
      title: "Opening directions",
      description: `Getting directions to ${selectedParking.name}...`
    });
  };

  const handleContact = () => {
    toast({
      title: "Contact information",
      description: `Phone: ${selectedParking.phone}`
    });
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={selectedParking.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className='bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden'
      >
        {/* Header */}
        <div className={`${statusBg} ${statusBorder} border-b p-6`}>
          <h2 className='text-xl font-bold text-slate-900 mb-2'>{selectedParking.name}</h2>
          <div className='flex items-center gap-2 text-slate-600'>
            <MapPin className='w-4 h-4' />
            <span className='text-sm'>{selectedParking.address}</span>
          </div>
        </div>

        {/* Availability Status */}
        <div className='p-6 border-b border-slate-200'>
          <div className='flex items-center justify-between mb-3'>
            <span className='text-sm font-medium text-slate-700'>Current Availability</span>
            <span className={`text-lg font-bold ${statusColor}`}>{availabilityPercentage}%</span>
          </div>
          <div className='w-full bg-slate-200 rounded-full h-3 overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${availabilityPercentage}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`h-full ${availabilityPercentage > 50 ? 'bg-green-500' : availabilityPercentage > 20 ? 'bg-amber-500' : 'bg-red-500'}`}
            />
          </div>
          <div className='flex items-center justify-between mt-3'>
            <span className='text-sm text-slate-600'>Free: {freeSpots}</span>
            <span className='text-sm text-slate-600'>Total: {selectedParking.totalSpots}</span>
          </div>
        </div>

        {/* Details */}
        <div className='p-6 space-y-4'>
          <div className='flex items-start gap-3'>
            <div className='bg-blue-50 p-2 rounded-lg'>
              <Car className='w-5 h-5 text-blue-600' />
            </div>
            <div>
              <p className='font-medium text-slate-900'>Parking Type</p>
              <p className='text-sm text-slate-600'>{selectedParking.type}</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='bg-purple-50 p-2 rounded-lg'>
              <Clock className='w-5 h-5 text-purple-600' />
            </div>
            <div>
              <p className='font-medium text-slate-900'>Operating Hours</p>
              <p className='text-sm text-slate-600'>{selectedParking.hours}</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='bg-green-50 p-2 rounded-lg'>
              <DollarSign className='w-5 h-5 text-green-600' />
            </div>
            <div>
              <p className='font-medium text-slate-900'>Pricing</p>
              <p className='text-sm text-slate-600'>{selectedParking.pricing}</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <div className='bg-amber-50 p-2 rounded-lg'>
              <Phone className='w-5 h-5 text-amber-600' />
            </div>
            <div>
              <p className='font-medium text-slate-900'>Contact</p>
              <p className='text-sm text-slate-600'>{selectedParking.phone}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className='p-6 bg-slate-50 space-y-2'>
          <Button 
            className='w-full bg-blue-600 hover:bg-blue-700 text-white'
            onClick={handleGetDirections}
          >
            <Navigation2 className='w-4 h-4 mr-2' />
            Get Directions
          </Button>
          <Button 
            variant='outline' 
            className='w-full'
            onClick={handleContact}
          >
            <Phone className='w-4 h-4 mr-2' />
            Contact
          </Button>
        </div>

        {/* Last Updated */}
        <div className='px-6 py-3 bg-slate-100 border-t border-slate-200'>
          <p className='text-xs text-slate-500 text-center'>
            Last updated: {selectedParking.lastUpdated}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ParkingDetails;