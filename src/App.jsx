import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ParkingMap from './components/ParkingMap';
import ParkingDetails from './components/ParkingDetails';
import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import { Toaster } from './components/ui/toaster';

function App() {
  const [selectedParking, setSelectedParking] = useState(null);

  return (
    <>
      <Helmet>
        <title>Smart Parking Finder - Real-time Parking Availability Dashboard</title>
        <meta name="description" content="Find available parking spots in real-time with our smart parking finder dashboard. View parking locations, availability status, and detailed information for city parking zones." />
      </Helmet>
      <div className='min-h-screen bg-slate-50'>
        <Header />
        <main className='container mx-auto px-4 py-6 space-y-6'>
          <StatsOverview />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>
              <ParkingMap 
                selectedParking={selectedParking}
                onSelectParking={setSelectedParking}
              />
            </div>
            <div>
              <ParkingDetails selectedParking={selectedParking} />
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;
