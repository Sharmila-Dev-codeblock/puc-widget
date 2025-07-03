import React, { useState } from 'react';

interface Props {
  title: string;
  link: string;
  shortDescription: string;
  description: string;
}

export const EmbedWidget: React.FC<Props> = ({ title, link, description , shortDescription }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      style={{
        height: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        maxWidth: '600px',
        fontFamily: 'Segoe UI, sans-serif',
        margin: '0 auto',
        boxSizing: 'border-box',
      }}
    >
      {/* Top row: short desc left, title right */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '12px',
      }}>
        <div style={{ fontSize: '14px', color: '#666', maxWidth: '60%' }}>
          {shortDescription}
        </div>
        <h2 style={{ fontSize: '20px', color: '#222', margin: 0, textAlign: 'right' }}>
          {title}
        </h2>
      </div>

      {/* Toggle Button */}
      <div style={{ textAlign: 'right', marginBottom: showMore ? '10px' : '0' }}>
        <button
          onClick={() => setShowMore(prev => !prev)}
          style={{
            padding: '6px 12px',
            fontSize: '13px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>

      {/* Full Description */}
      {showMore && (
        <>
          <p style={{ fontSize: '15px', color: '#444', marginTop: '10px' }}>
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: '10px',
              color: '#007bff',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            {link}
          </a>
        </>
      )}
    </div>
  );
};
