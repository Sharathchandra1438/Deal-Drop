import React from 'react';

const CommunitySection = () => {
  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#eff6ff' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>
          Community Posts
        </h2>
        <h3 style={{ fontSize: '1.25rem', color: '#4b5563', textAlign: 'center', marginBottom: '2rem' }}>
          Looking for something?
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: 1,
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Old Town District - 1 day ago</span>
            </div>
            <h4 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.75rem' }}>
              Looking for childcare!
            </h4>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Dear neighbors, I am looking for a child-loving person who...
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: '#6b7280' }}>
              <span>💬 6</span>
              <span>👍 3</span>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            flex: 1,
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: '600', color: '#374151' }}>Nikolaivorstadt - 3 hours ago</span>
            </div>
            <h4 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '0.75rem' }}>
              Key found
            </h4>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Is anyone missing their key? I left it here on the...
            </p>
            <div style={{ display: 'flex', gap: '1rem', color: '#6b7280' }}>
              <span>💬 6</span>
              <span>👍 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
