import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  count: number;
  change: number;
  timeframe: string;
  icon: ReactNode;
}

export default function StatCard({ title, count, change, timeframe, icon }: StatCardProps) {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-600">{title}</span>
        <div className="text-gray-400">
          {icon}
        </div>
      </div>
      
      <div className="mb-2">
        <h3 className="text-4xl font-bold text-gray-900">
          {count.toLocaleString()}
        </h3>
      </div>
      
      <div className="flex items-center gap-1">
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
        <span className="text-sm text-gray-500">{timeframe}</span>
      </div>
    </div>
  );
}