import { useState, useEffect } from 'react';

export const useParkingData = () => {
  const [parkingZones, setParkingZones] = useState([]);

  useEffect(() => {
    // Simulated parking data for New York City
    const initialData = [
      {
        id: 1,
        name: 'Central Park South Garage',
        address: '160 Central Park S, New York, NY 10019',
        latitude: 40.7664,
        longitude: -73.9794,
        totalSpots: 250,
        occupiedSpots: 180,
        type: 'Multi-level Garage',
        hours: '24/7',
        pricing: '$8/hour, $50/day',
        phone: '(212) 555-0101',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 2,
        name: 'Times Square Parking',
        address: '234 W 42nd St, New York, NY 10036',
        latitude: 40.7580,
        longitude: -73.9855,
        totalSpots: 180,
        occupiedSpots: 165,
        type: 'Underground Garage',
        hours: '24/7',
        pricing: '$12/hour, $65/day',
        phone: '(212) 555-0102',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 3,
        name: 'Broadway Plaza Parking',
        address: '1633 Broadway, New York, NY 10019',
        latitude: 40.7614,
        longitude: -73.9833,
        totalSpots: 320,
        occupiedSpots: 120,
        type: 'Multi-level Garage',
        hours: '6:00 AM - 12:00 AM',
        pricing: '$10/hour, $55/day',
        phone: '(212) 555-0103',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 4,
        name: 'Hudson Yards Parking',
        address: '500 W 33rd St, New York, NY 10001',
        latitude: 40.7536,
        longitude: -74.0014,
        totalSpots: 450,
        occupiedSpots: 220,
        type: 'Underground Garage',
        hours: '24/7',
        pricing: '$9/hour, $48/day',
        phone: '(212) 555-0104',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 5,
        name: 'Chelsea Market Garage',
        address: '75 9th Ave, New York, NY 10011',
        latitude: 40.7425,
        longitude: -74.0060,
        totalSpots: 200,
        occupiedSpots: 85,
        type: 'Multi-level Garage',
        hours: '7:00 AM - 11:00 PM',
        pricing: '$7/hour, $42/day',
        phone: '(212) 555-0105',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 6,
        name: 'Greenwich Village Parking',
        address: '123 W 4th St, New York, NY 10012',
        latitude: 40.7323,
        longitude: -74.0026,
        totalSpots: 150,
        occupiedSpots: 135,
        type: 'Surface Lot',
        hours: '24/7',
        pricing: '$6/hour, $40/day',
        phone: '(212) 555-0106',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 7,
        name: 'SoHo Parking Facility',
        address: '456 Spring St, New York, NY 10012',
        latitude: 40.7255,
        longitude: -74.0035,
        totalSpots: 175,
        occupiedSpots: 50,
        type: 'Underground Garage',
        hours: '24/7',
        pricing: '$8/hour, $45/day',
        phone: '(212) 555-0107',
        lastUpdated: new Date().toLocaleTimeString()
      },
      {
        id: 8,
        name: 'Financial District Garage',
        address: '89 Wall St, New York, NY 10005',
        latitude: 40.7074,
        longitude: -74.0088,
        totalSpots: 280,
        occupiedSpots: 245,
        type: 'Multi-level Garage',
        hours: '24/7',
        pricing: '$11/hour, $60/day',
        phone: '(212) 555-0108',
        lastUpdated: new Date().toLocaleTimeString()
      }
    ];

    setParkingZones(initialData);

    // Simulate real-time updates every 10 seconds
    const interval = setInterval(() => {
      setParkingZones(prevZones => 
        prevZones.map(zone => {
          // Random change in occupancy (-5 to +5 spots)
          const change = Math.floor(Math.random() * 11) - 5;
          const newOccupied = Math.max(0, Math.min(zone.totalSpots, zone.occupiedSpots + change));
          
          return {
            ...zone,
            occupiedSpots: newOccupied,
            lastUpdated: new Date().toLocaleTimeString()
          };
        })
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return { parkingZones };
};