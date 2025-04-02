import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {

  type Destination = {
    id: number;
    name: string;
  };

  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json() as { destinations: Destination[] };
        setDestinations(data.destinations);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  return (
    <div className="p-8">
      <h1>My Travel Planner</h1>
      <ul>
        {destinations.map((destination) => (
          <li className="text-xl font-bold" key={destination.id}>
            <span>
            {destination.name}
            </span>
            <Link href={`/destinations/${destination.id}`} className="ml-4 bg-red-500 text-yellow-500 rounded">
              View Details
            </Link>
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white rounded px-4 py-2">
        add new destination
      </button>
    </div>
  );
}
