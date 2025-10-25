import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdBalance, MdAccessTimeFilled, MdCheckCircleOutline } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import Sidebar from '../features/dashboard/components/Sidebar';
import DashboardHeader from '../features/dashboard/components/DashboardHeader';
import StatCard from '../features/dashboard/components/StatCard';
import RecentActivityTable from '../features/dashboard/components/RecentActivityTable';
import Footer from '../components/layout/Footer';
import { mockRootProps } from '../features/dashboard/dashboardMockData';

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { stats, recentActivity } = mockRootProps;
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleGoToTickets = () => {
    navigate('/tickets');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <Sidebar activeItem="Dashboard" />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Overview of your support performance today</p>
            </div>
            
            {/* Search Bar and Quick Action */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleGoToTickets}
                className="flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <BsArrowRight size={18} />
                <span>Go to Tickets</span>
              </button>
            </div>
            
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Total Tickets"
                count={stats.totalTickets.count}
                change={stats.totalTickets.change}
                timeframe={stats.totalTickets.timeframe}
                icon={<MdBalance size={24} />}
              />
              <StatCard
                title="Open Tickets"
                count={stats.openTickets.count}
                change={stats.openTickets.change}
                timeframe={stats.openTickets.timeframe}
                icon={<MdAccessTimeFilled size={24} />}
              />
              <StatCard
                title="Resolved Tickets"
                count={stats.resolvedTickets.count}
                change={stats.resolvedTickets.change}
                timeframe={stats.resolvedTickets.timeframe}
                icon={<MdCheckCircleOutline size={24} />}
              />
            </div>
            
            {/* Recent Activity */}
            <RecentActivityTable tickets={recentActivity} />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}