import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return {
          backgroundColor: '#15291d',
          textColor: '#ffffff',
          dotColor: '#22c55e',
        };
      case 'building':
        return {
          backgroundColor: '#2e191a',
          textColor: '#ffffff',
          dotColor: '#f91616',
        };
      default:
        return {
          backgroundColor: '#6b7280',
          textColor: '#ffffff',
          dotColor: '#22c55e',
        };
    }
  };

  const style = getStatusStyle(status);

  return (
    <span
      className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {status && (
        <span
          className="w-2 h-2 rounded-full mr-1"
          style={{ backgroundColor: style.dotColor }}
        ></span>
      )}
      {status || 'Unknown'}
    </span>
  );
};

export default StatusBadge;
