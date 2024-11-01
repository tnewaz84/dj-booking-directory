import React from 'react';
import { DJ } from '../types/dj';
import { StarIcon } from '@heroicons/react/20/solid';

interface DJCardProps {
  dj: DJ;
}

export default function DJCard({ dj }: DJCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium text-gray-900">{dj.name}</h3>
        <div className="mt-2 text-sm text-gray-500">
          <p>{dj.location.city}, {dj.location.state}</p>
          <p className="mt-1">{dj.specialties.join(', ')}</p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`${
                    i < Math.floor(dj.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-200'
                  } h-5 w-5 flex-shrink-0`}
                />
              ))}
            </div>
            <p className="ml-2 text-sm text-gray-500">{dj.rating} stars</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            {dj.yearsInBusiness} years in business
          </span>
          <span className="text-sm font-medium text-gray-900">
            {dj.priceRange}
          </span>
        </div>
        <div className="mt-4">
          <a
            href={dj.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}