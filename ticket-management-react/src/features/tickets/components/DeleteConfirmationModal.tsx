import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  ticketName: string;
  loading?: boolean;
}

export default function DeleteConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  ticketName,
  loading = false 
}: DeleteConfirmationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Ticket" maxWidth="max-w-md">
      <div className="space-y-4">
        <p className="text-gray-700">
          Are you sure you want to delete <span className="font-semibold">"{ticketName}"</span>?
        </p>
        <p className="text-sm text-gray-500">
          This action cannot be undone.
        </p>

        <div className="flex items-center gap-3 pt-4">
          <Button 
            type="button" 
            variant="secondary" 
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Deleting...' : 'Confirm Delete'}
          </button>
        </div>
      </div>
    </Modal>
  );
}