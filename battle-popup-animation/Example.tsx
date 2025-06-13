import React, { useState } from 'react';
import BattleModal from './BattleModal';
import SlotMachineCard from './SlotMachineCard';

// Sample app data for the demo
const sampleApps = [
  {
    id: '1',
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    url: 'https://chat.openai.com',
    description: 'AI-powered conversational assistant',
    upvotes: 1250,
    downvotes: 45
  },
  {
    id: '2',
    name: 'Notion',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    url: 'https://notion.so',
    description: 'All-in-one workspace for notes and collaboration',
    upvotes: 980,
    downvotes: 32
  },
  {
    id: '3',
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    url: 'https://figma.com',
    description: 'Collaborative design and prototyping tool',
    upvotes: 875,
    downvotes: 28
  },
  {
    id: '4',
    name: 'Spotify',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    url: 'https://spotify.com',
    description: 'Music streaming and podcast platform',
    upvotes: 1100,
    downvotes: 55
  },
  {
    id: '5',
    name: 'Discord',
    logo: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
    url: 'https://discord.com',
    description: 'Voice, video and text communication platform',
    upvotes: 920,
    downvotes: 41
  },
  {
    id: '6',
    name: 'Canva',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    url: 'https://canva.com',
    description: 'Easy-to-use design platform',
    upvotes: 780,
    downvotes: 35
  }
];

const BattleAnimationExample: React.FC = () => {
  const [isBattleOpen, setIsBattleOpen] = useState(false);
  const [isSlotDemo, setIsSlotDemo] = useState(false);
  const [selectedApps, setSelectedApps] = useState<Array<{ selected: any; other: any }>>([]);

  const handleAppSelect = (selectedApp: any, otherApp: any) => {
    setSelectedApps(prev => [...prev, { selected: selectedApp, other: otherApp }]);
    console.log('App selected:', selectedApp.name, 'vs', otherApp.name);
  };

  const handleSlotCardClick = (app: any) => {
    alert(`You clicked on ${app.name}!`);
  };

  const customAppCardRenderer = (app: any) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      gap: '12px',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      borderRadius: '12px',
      border: '2px solid #0ea5e9'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        overflow: 'hidden',
        background: '#f3f4f6'
      }}>
        <img 
          src={app.logo} 
          alt={`${app.name} logo`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          margin: '0 0 4px 0',
          fontSize: '16px',
          fontWeight: '600',
          color: '#0c4a6e'
        }}>
          {app.name}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#0369a1',
          lineHeight: '1.4'
        }}>
          {app.description}
        </p>
        <div style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#0284c7',
          fontWeight: '500'
        }}>
          ↑ {app.upvotes} ↓ {app.downvotes}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Inter, system-ui, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '24px',
        padding: '40px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '36px',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #14b8a6, #0891b2)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px'
        }}>
          Battle Popup Animation Demo
        </h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '18px',
          color: '#6b7280',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Experience the slot machine-style animations that transition between different apps in the battle popup interface.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {/* Battle Modal Demo */}
          <div style={{
            padding: '24px',
            background: '#f8fafc',
            borderRadius: '16px',
            border: '2px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '12px'
            }}>
              🏆 Full Battle Modal
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Complete battle experience with 3 rounds, spinning animations, and result screens.
            </p>
            <button
              onClick={() => setIsBattleOpen(true)}
              style={{
                width: '100%',
                padding: '12px 24px',
                background: '#14b8a6',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0d9488';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#14b8a6';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start Battle
            </button>
          </div>

          {/* Slot Machine Demo */}
          <div style={{
            padding: '24px',
            background: '#f8fafc',
            borderRadius: '16px',
            border: '2px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1e293b',
              marginBottom: '12px'
            }}>
              🎰 Slot Machine Card
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              marginBottom: '20px',
              lineHeight: '1.5'
            }}>
              Standalone spinning animation component with custom app card rendering.
            </p>
            <button
              onClick={() => setIsSlotDemo(!isSlotDemo)}
              style={{
                width: '100%',
                padding: '12px 24px',
                background: isSlotDemo ? '#ef4444' : '#0891b2',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isSlotDemo ? 'Stop Demo' : 'Start Slot Demo'}
            </button>
          </div>
        </div>

        {/* Slot Machine Demo Area */}
        {isSlotDemo && (
          <div style={{
            padding: '32px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '16px',
            marginBottom: '32px',
            border: '2px solid #f59e0b'
          }}>
            <h3 style={{
              textAlign: 'center',
              fontSize: '24px',
              fontWeight: '700',
              color: '#92400e',
              marginBottom: '24px'
            }}>
              Slot Machine Animation Demo
            </h3>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <SlotMachineCard
                allApps={sampleApps}
                targetApp={sampleApps[Math.floor(Math.random() * sampleApps.length)]}
                isSpinning={true}
                spinDuration={3000}
                onAppClick={handleSlotCardClick}
                renderAppCard={customAppCardRenderer}
              />
            </div>
            <p style={{
              textAlign: 'center',
              fontSize: '14px',
              color: '#a16207',
              marginTop: '16px'
            }}>
              Watch the apps spin and transition with custom styling!
            </p>
          </div>
        )}

        {/* Results Display */}
        {selectedApps.length > 0 && (
          <div style={{
            padding: '24px',
            background: '#ecfdf5',
            borderRadius: '16px',
            border: '2px solid #10b981'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#065f46',
              marginBottom: '16px'
            }}>
              🏆 Battle Results
            </h3>
            {selectedApps.map((result, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '12px',
                background: 'white',
                borderRadius: '12px',
                marginBottom: '8px'
              }}>
                <span style={{ fontSize: '14px', color: '#059669', fontWeight: '500' }}>
                  Round {index + 1}:
                </span>
                <strong style={{ color: '#065f46' }}>{result.selected.name}</strong>
                <span style={{ color: '#6b7280' }}>vs</span>
                <span style={{ color: '#6b7280' }}>{result.other.name}</span>
              </div>
            ))}
            <button
              onClick={() => setSelectedApps([])}
              style={{
                marginTop: '16px',
                padding: '8px 16px',
                background: '#10b981',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Clear Results
            </button>
          </div>
        )}

        {/* Usage Instructions */}
        <div style={{
          marginTop: '40px',
          padding: '24px',
          background: '#f1f5f9',
          borderRadius: '16px',
          border: '2px solid #cbd5e1'
        }}>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#334155',
            marginBottom: '16px'
          }}>
            📝 How to Use
          </h3>
          <ul style={{
            fontSize: '14px',
            color: '#475569',
            lineHeight: '1.6',
            margin: 0,
            paddingLeft: '20px'
          }}>
            <li><strong>BattleModal:</strong> Complete battle interface with multiple rounds</li>
            <li><strong>SlotMachineCard:</strong> Individual spinning card component</li>
            <li><strong>Custom Rendering:</strong> Pass your own app card component</li>
            <li><strong>Responsive:</strong> Works on mobile and desktop</li>
            <li><strong>Callbacks:</strong> Handle app selections and user interactions</li>
          </ul>
        </div>
      </div>

      {/* Battle Modal */}
      <BattleModal
        isOpen={isBattleOpen}
        onClose={() => setIsBattleOpen(false)}
        apps={sampleApps}
        onAppSelect={handleAppSelect}
        maxRounds={3}
        spinDuration={2500}
        title="App Battle Arena"
        subtitle="Which app do you prefer?"
      />
    </div>
  );
};

export default BattleAnimationExample; 