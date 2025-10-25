import { useNavigate, useLocation } from 'react-router-dom';
import { MdViewModule, MdBarChart } from 'react-icons/md';
import { BsInbox } from 'react-icons/bs';
import { MdSettingsApplications } from 'react-icons/md';

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export default function Sidebar({ activeItem = 'Dashboard', onNavigate }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: MdViewModule, path: '/dashboard' },
    { id: 'Ticket Management', label: 'Ticket Management', icon: BsInbox, path: '/tickets' },
    { id: 'Reports', label: 'Reports', icon: MdBarChart, path: '/reports' },
    { id: 'Settings', label: 'Settings', icon: MdSettingsApplications, path: '/settings' },
  ];
  
  const getActiveItem = () => {
    const currentPath = location.pathname;
    const item = menuItems.find(item => item.path === currentPath);
    return item?.id || activeItem;
  };
  
  const handleClick = (itemId: string, path: string) => {
    if (onNavigate) {
      onNavigate(itemId);
    } else {
      navigate(path);
    }
  };
  
  return (
    <aside className="w-72 bg-blue-50 min-h-screen p-6 border-r border-gray-200">
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Navigation
        </h3>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = getActiveItem() === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id, item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-100'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}