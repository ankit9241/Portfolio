import React from 'react';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusStyle = (status: string) => {
    const s = status?.toLowerCase() || '';
    if (s.includes('completed')) {
      return {
        backgroundColor: '#15291d',
        textColor: '#ffffff',
        dotColor: '#22c55e',
      };
    }
    if (s.includes('building') || s.includes('progress')) {
      return {
        backgroundColor: '#2e191a',
        textColor: '#ffffff',
        dotColor: '#f91616',
      };
    }
    return {
      backgroundColor: '#2A2A2A',
      textColor: '#ffffff',
      dotColor: '#22c55e',
    };
  };

  const style = getStatusStyle(status);

  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold whitespace-nowrap tracking-wide"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      {status && (
        <span
          className="w-1.5 h-1.5 rounded-full mr-1.5 shrink-0"
          style={{ backgroundColor: style.dotColor }}
        ></span>
      )}
      {status || 'Unknown'}
    </span>
  );
};

export default StatusBadge;
