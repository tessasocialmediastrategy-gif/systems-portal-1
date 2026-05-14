import React, { useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

export const ImageLightbox = ({ src, alt, open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(3,3,3,0.96)' }}
      onClick={onClose}
      data-testid="image-lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
        aria-label="Close zoom"
        data-testid="image-lightbox-close"
      >
        <X className="w-5 h-5" />
      </button>
      <div className="absolute top-5 left-5 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/40">
        <ZoomIn className="w-3.5 h-3.5" />
        Zoomed View · Esc to close
      </div>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        style={{ boxShadow: '0 0 80px -20px rgba(57,255,20,0.25)' }}
        onClick={(e) => e.stopPropagation()}
        data-testid="image-lightbox-img"
      />
    </div>
  );
};
