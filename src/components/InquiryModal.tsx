
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

const InquiryModal = ({ isOpen, onClose, subject }: InquiryModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would send to backend
    alert(t('contact.messages.inquirySent'));
    onClose();
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{t('contact.inquiry.title')}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="inquiry-name">{t('contact.form.name')} *</Label>
            <Input
              id="inquiry-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="inquiry-email">{t('contact.form.email')} *</Label>
            <Input
              id="inquiry-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="inquiry-company">{t('contact.form.company')}</Label>
            <Input
              id="inquiry-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="inquiry-message">{t('contact.form.message')} *</Label>
            <Textarea
              id="inquiry-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1"
              placeholder={subject ? `${t('contact.inquiry.about')} ${subject}` : t('contact.inquiry.placeholder')}
            />
          </div>
          
          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t('common.cancel')}
            </Button>
            <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
              <Send className="mr-2 h-4 w-4" />
              {t('contact.inquiry.send')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InquiryModal;
