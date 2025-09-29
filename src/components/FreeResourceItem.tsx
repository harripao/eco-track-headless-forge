
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FreeResourceItemProps {
  resourceKey: string;
  onResourceClick: (resourceKey: string) => void;
}

const FreeResourceItem = ({ resourceKey, onResourceClick }: FreeResourceItemProps) => {
  const { t } = useLanguage();

  // Fallback text mapping for resource keys
  const getResourceText = (key: string) => {
    const fallbacks = {
      'resources.free.guide1': 'Sustainable Business Practices Guide',
      'resources.free.template1': 'Carbon Footprint Calculator Template',
      'resources.free.checklist1': 'Green Office Checklist',
      'resources.free.worksheet1': 'Sustainability Goal Setting Worksheet'
    };
    return t(key) !== key ? t(key) : fallbacks[key] || key;
  };

  return (
    <div 
      className="flex items-center space-x-3 bg-white p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onResourceClick(resourceKey)}
    >
      <FileText className="h-5 w-5 text-green-600" />
      <span className="text-muted-foreground flex-1">{getResourceText(resourceKey)}</span>
      <Button 
        size="sm" 
        variant="ghost"
        onClick={(e) => {
          e.stopPropagation();
          onResourceClick(resourceKey);
        }}
      >
        <ExternalLink className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default FreeResourceItem;
