import React from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const CertificationBadge = ({ title }) => {
  return (
    <Badge variant="secondary" className="px-4 py-2 text-sm font-medium flex items-center space-x-2">
      <CheckCircle2 className="w-4 h-4 text-primary" />
      <span>{title}</span>
    </Badge>
  );
};

export default CertificationBadge;