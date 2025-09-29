
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface EbookModalProps {
  isOpen: boolean;
  onClose: () => void;
  ebook: {
    titleKey: string;
    descriptionKey: string;
    price: string;
    image: string;
    featured?: boolean;
  };
}

const EbookModal = ({ isOpen, onClose, ebook }: EbookModalProps) => {
  const { t } = useLanguage();

  const handlePurchase = () => {
    // This would integrate with payment system
    alert(t('resources.messages.purchaseRedirect'));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{t(ebook.titleKey)}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={ebook.image}
              alt={t(ebook.titleKey)}
              className="w-full rounded-lg shadow-lg"
            />
            {ebook.featured && (
              <Badge className="mt-2 bg-green-600">
                {t('resources.badges.featured')}
              </Badge>
            )}
          </div>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">
              {t(ebook.descriptionKey)}
            </p>
            
            <div className="space-y-2">
              <h4 className="font-semibold">{t('resources.modal.whatYouGet')}</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />{t('resources.modal.benefit1')}</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />{t('resources.modal.benefit2')}</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />{t('resources.modal.benefit3')}</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-600" />{t('resources.modal.benefit4')}</li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{t('resources.modal.rating')}</span>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-green-600">{ebook.price}</span>
                <Badge variant="outline">{t('resources.modal.instantDownload')}</Badge>
              </div>
              
              <Button 
                onClick={handlePurchase}
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5" />
                {ebook.price === 'Free' ? t('resources.buttons.downloadFree') : t('resources.buttons.purchaseNow')}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EbookModal;
