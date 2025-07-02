import React from 'react';

interface Props {
  title: string;
  link: string;
  height: string;
  description: string;
}

export const EmbedWidget: React.FC<Props> = ({ title, link, height,description}) => {
  return (
    <div style={{
      height,
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      padding: '24px',
      maxWidth: '600px',
      fontFamily: 'Segoe UI, sans-serif',
      margin: '0 auto',
      border: '1px solid #ddd',
      boxSizing: 'border-box',
    }}>
      <h2 style={{ marginBottom: '16px', fontSize: '24px', color: '#333' }}>{title}</h2>
      <p style={{
        fontSize: '16px',
        color: '#555',
        lineHeight: 1.6,
        fontWeight: 400,
      }}>
       {description}
      </p>
      <a href={link} target="_blank" style={{
        display: 'inline-block',
        marginTop: '16px',
        color: '#007bff',
        textDecoration: 'none',
        fontWeight: 500,
      }}>
        {link}
      </a>
    </div>
  );
};
