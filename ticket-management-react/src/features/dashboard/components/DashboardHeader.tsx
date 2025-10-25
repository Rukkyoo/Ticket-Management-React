import { useNavigate } from "react-router-dom";
import { MdExitToApp } from "react-icons/md";
import { BsInbox } from "react-icons/bs";
import { useAuth } from "../../../hooks/useAuth";

export default function DashboardHeader() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="Ticket.png"
              alt="TicketFlow Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold text-gray-900">TicketFlow</span>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate("/tickets")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            <BsInbox size={18} />
            <span>Ticket Management</span>
          </button>

          <button
            onClick={logout}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <MdExitToApp size={18} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
