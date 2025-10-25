import { useState, useEffect } from 'react';
import { BsSearch, BsFunnel } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';
import Sidebar from '../features/dashboard/components/Sidebar';
import DashboardHeader from '../features/dashboard/components/DashboardHeader';
import Footer from '../components/layout/Footer';
import TicketCard from '../features/tickets/components/TicketCard';
import TicketForm from '../features/tickets/components/TicketForm';
import Modal from '../components/ui/Modal';
import DeleteConfirmationModal from '../features/tickets/components/DeleteConfirmationModal';
import Toast from '../components/ui/Toast';
import { useTickets } from '../hooks/useTickets';
import type { Ticket, CreateTicketFormData } from '../features/tickets/types';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function TicketManagement() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [deletingTicket, setDeletingTicket] = useState<Ticket | null>(null);
  const [viewingTicket, setViewingTicket] = useState<Ticket | null>(null);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'info' });
  
  const { createTicket, getTicket, updateTicket, deleteTicket, loading } = useTickets();

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ show: true, message, type });
  };

  const handleCreateTicket = async (data: CreateTicketFormData) => {
    try {
      const response = await createTicket(data);
      console.log('API Response:', response);

      const newTicket: Ticket = {
        id: Date.now().toString(), 
        name: data.name,
        description: data.description,
        status: data.status,
        priority: data.priority,
        assignee: '',
        tags: [] 
      };

      console.log('New ticket object:', newTicket);
      console.log('Current tickets before adding:', tickets);
      setTickets([newTicket, ...tickets]);
      console.log('Tickets after adding:', [newTicket, ...tickets]);
      showToast('Ticket created successfully', 'success');
    } catch (error: any) {
      console.error('Error creating ticket:', error);
      showToast(error.message || 'Failed to create ticket', 'error');
    }
  };

  const handleEditTicket = async (data: CreateTicketFormData) => {
    if (!editingTicket) return;

    try {
      const updatedTicket: Ticket = {
        ...editingTicket,
        name: data.name,
        description: data.description,
        status: data.status,
        priority: data.priority
      };

      setTickets(tickets.map(t => t.id === editingTicket.id ? updatedTicket : t));
      setEditingTicket(null);
      showToast('Ticket updated successfully', 'success');

      try {
        await updateTicket(editingTicket.name, data);
      } catch (apiError: any) {
        console.error('API update failed, but local state updated:', apiError);
      }
    } catch (error: any) {
      showToast(error.message || 'Failed to update ticket', 'error');
    }
  };

  const handleDeleteTicket = async () => {
    if (!deletingTicket) return;

    try {
      setTickets(tickets.filter(t => t.id !== deletingTicket.id));
      setDeletingTicket(null);
      showToast('Ticket deleted successfully', 'success');

      try {
        await deleteTicket(deletingTicket.name);
      } catch (apiError: any) {
        console.error('API delete failed, but local state updated:', apiError);
      }
    } catch (error: any) {
      showToast(error.message || 'Failed to delete ticket', 'error');
    }
  };

 const filteredTickets = tickets.filter(ticket => {
   const query = searchQuery.toLowerCase();
   return (
     ticket.name && ticket.name.toLowerCase().includes(query) ||
     ticket.id && ticket.id.toLowerCase().includes(query)
   );
 });

 useEffect(() => {
   const fetchViewingTicket = async () => {
     if (viewingTicket?.name && !viewingTicket.description) { 
       try {
         const fetchedTicket = await getTicket(viewingTicket.name);
         setViewingTicket(fetchedTicket);
       } catch (err: any) {
         showToast('Failed to fetch ticket details', 'error');
       }
     }
   };
   fetchViewingTicket();
 }, [viewingTicket?.name]);

 return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DashboardHeader />
      
      <div className="flex flex-1">
        <Sidebar activeItem="Ticket Management" />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Ticket Management</h1>
              <p className="text-gray-600">Create, review, update, and delete tickets</p>
            </div>
            
            {/* Search and Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 relative">
                <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by title or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                <BsFunnel size={18} />
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <MdAdd size={20} />
                <span>New Ticket</span>
              </button>
            </div>

            {/* Create Ticket Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Create Ticket</h2>
              <TicketForm onSubmit={handleCreateTicket} />
            </div>

            {/* Bulk Actions */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-900">Bulk Actions</span>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Change Status
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded transition-colors">
                  Reassign
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded transition-colors">
                  Delete
                </button>
                <span className="text-sm text-gray-500 ml-auto">
                  Select tickets below to apply bulk actions
                </span>
              </div>
            </div>

            {/* Tickets List */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">All Tickets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onEdit={setEditingTicket}
                    onView={setViewingTicket}
                    onDelete={setDeletingTicket}
                  />
                ))}
              </div>
              {filteredTickets.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No tickets found
                </div>
              )}
              {filteredTickets.length > 0 && (
                <div className="text-center py-8 text-gray-400 text-sm">
                  End of list
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
      
      <Footer />

      {/* Edit Modal */}
      {editingTicket && (
        <Modal
          isOpen={!!editingTicket}
          onClose={() => setEditingTicket(null)}
          title={`Edit Ticket #${editingTicket.id}`}
        >
          <TicketForm
            initialData={{
              name: editingTicket.name,
              description: editingTicket.description,
              status: editingTicket.status,
              priority: editingTicket.priority
            }}
            onSubmit={handleEditTicket}
            onCancel={() => setEditingTicket(null)}
            submitLabel="Save Changes"
            showCancel={true}
          />
        </Modal>
      )}

      {/* View Modal */}
      {viewingTicket && (
        <Modal
          isOpen={!!viewingTicket}
          onClose={() => setViewingTicket(null)}
          title={`Ticket #${viewingTicket.id}`}
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Title</h3>
              <p className="text-gray-700">{viewingTicket.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Description</h3>
              <p className="text-gray-700">{viewingTicket.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Priority</h3>
                <p className="text-gray-700">{viewingTicket.priority}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Status</h3>
                <p className="text-gray-700">{viewingTicket.status}</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Assignee</h3>
              <p className="text-gray-700">{viewingTicket.assignee}</p>
            </div>
            {viewingTicket.tags && viewingTicket.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {viewingTicket.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={!!deletingTicket}
        onClose={() => setDeletingTicket(null)}
        onConfirm={handleDeleteTicket}
        ticketName={deletingTicket?.name || ''}
        loading={loading}
      />

      {/* Toast Notification */}
      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
}