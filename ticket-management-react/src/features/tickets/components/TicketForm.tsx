import { useState } from 'react';
import Button from '../../../components/ui/Button';
import { TicketStatus, TicketPriority } from '../enums';
import type { CreateTicketFormData, ValidationError } from '../types';

interface TicketFormProps {
  initialData?: CreateTicketFormData;
  onSubmit: (data: CreateTicketFormData) => void;
  onCancel?: () => void;
  submitLabel?: string;
  showCancel?: boolean;
}

export default function TicketForm({ 
  initialData, 
  onSubmit, 
  onCancel, 
  submitLabel = 'Create Ticket',
  showCancel = false 
}: TicketFormProps) {
  const [formData, setFormData] = useState<CreateTicketFormData>(
    initialData || {
      name: '',
      description: '',
      status: TicketStatus.OPEN,
      priority: TicketPriority.MEDIUM,
    }
  );

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const validateForm = (): boolean => {
    const newErrors: ValidationError[] = [];

    if (!formData.name.trim()) {
      newErrors.push({ field: 'name', message: 'Title is required' });
    }

    if (!formData.status) {
      newErrors.push({ field: 'status', message: 'Status is required' });
    }

    if (formData.description && formData.description.length < 10) {
      newErrors.push({ field: 'description', message: 'Description must be at least 10 characters' });
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData); 
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      description: '',
      status: TicketStatus.OPEN,
      priority: TicketPriority.MEDIUM,
    });
    setErrors([]);
  };

  const getFieldError = (field: string) => {
    return errors.find(err => err.field === field)?.message;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
          Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2.5 border ${getFieldError('name') ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          placeholder="Enter concise, descriptive title"
        />
        {getFieldError('name') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('name')}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className={`w-full px-4 py-2.5 border ${getFieldError('description') ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          placeholder="Describe the issue, steps to reproduce, expected vs actual"
        />
        {getFieldError('description') && (
          <p className="mt-1 text-sm text-red-600">{getFieldError('description')}</p>
        )}
      </div>

      {/* Priority and Status Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Priority */}
        <div>
          <label htmlFor="priority" className="block text-sm font-semibold text-gray-900 mb-2">
            Priority
          </label>
          <select
            id="priority"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as TicketPriority })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value={TicketPriority.HIGH}>High</option>
            <option value={TicketPriority.MEDIUM}>Medium</option>
            <option value={TicketPriority.LOW}>Low</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-semibold text-gray-900 mb-2">
            Status <span className="text-red-500">*</span>
          </label>
          <select
            id="status"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as TicketStatus })}
            className={`w-full px-4 py-2.5 border ${getFieldError('status') ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          >
            <option value={TicketStatus.OPEN}>Open</option>
            <option value={TicketStatus.IN_PROGRESS}>In Progress</option>
            <option value={TicketStatus.CLOSED}>Closed</option>
          </select>
          {getFieldError('status') && (
            <p className="mt-1 text-sm text-red-600">{getFieldError('status')}</p>
          )}
        </div>
      </div>

      {/* Error Summary */}
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
          Please fix the errors above before submitting.
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <Button type="submit" variant="primary">
          {submitLabel}
        </Button>
        {showCancel ? (
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
        ) : (
          <Button type="button" variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        )}
      </div>
    </form>
  );
}