import React from 'react';
import logoUrl from '../../assets/logo.png';
import './Logo.css';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return (
    <div className={`logo-container logo-${size}`}>
      <img src={logoUrl} alt="Espadañal Logo" className="logo-image" />
    </div>
  );
};
