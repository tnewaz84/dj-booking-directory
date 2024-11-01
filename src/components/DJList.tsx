import React from 'react';
import { DJ } from '../types/dj';
import DJCard from './DJCard';

interface DJListProps {
  djs: DJ[];
}

export default function DJList({ djs }: DJListProps) {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {djs.map((dj) => (
        <DJCard key={dj.id} dj={dj} />
      ))}
    </div>
  );
}