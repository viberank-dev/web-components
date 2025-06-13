import React, { useState, useEffect, useMemo } from 'react';
import './SlotMachineCard.css';

// Define basic App interface - adjust to match your app structure
interface App {
  id: string;
  name: string;
  logo: string;
  url: string;
  description?: string;
  [key: string]: any;
}

interface SlotMachineCardProps {
  allApps: App[];
  targetApp: App | null;
  isSpinning: boolean;
  spinDuration?: number;
  className?: string;
  onAppClick?: (app: App) => void;
  renderAppCard?: (app: App) => React.ReactNode;
}

const SlotMachineCard: React.FC<SlotMachineCardProps> = ({
  allApps,
  targetApp,
  isSpinning,
  spinDuration = 2000,
  className = '',
  onAppClick,
  renderAppCard
}) => {
  const [displayedApp, setDisplayedApp] = useState<App | null>(targetApp);
  const [isVisuallySpinning, setIsVisuallySpinning] = useState(false);
  const [justLanded, setJustLanded] = useState(false);

  // Shuffle apps for the spinning effect
  const shuffledApps = useMemo(() => {
    if (!allApps || allApps.length === 0) return [];
    return [...allApps].sort(() => Math.random() - 0.5);
  }, [allApps]);

  // Main animation effect
  useEffect(() => {
    if (isSpinning && shuffledApps.length > 0) {
      setIsVisuallySpinning(true);
      setJustLanded(false);
      setDisplayedApp(shuffledApps[0]);
      
      let spinInterval: NodeJS.Timeout;
      let currentIndex = 0;
      let interval = 150; // Starting speed (ms)
      const minInterval = 50; // Max speed (ms)
      const speedIncrease = 10; // How much to speed up each iteration
      
      // Recursive function to cycle through apps with increasing speed
      const updateApp = () => {
        currentIndex = (currentIndex + 1) % shuffledApps.length;
        setDisplayedApp(shuffledApps[currentIndex]);
        
        // Gradually increase speed
        if (interval > minInterval) {
          interval -= speedIncrease;
          if (interval < minInterval) interval = minInterval;
        }
        
        spinInterval = setTimeout(updateApp, interval);
      };
      
      // Start the spinning animation
      spinInterval = setTimeout(updateApp, interval);
      
      // Stop spinning and show final app
      const timeoutId = setTimeout(() => {
        clearTimeout(spinInterval);
        if (targetApp) {
          setDisplayedApp(targetApp);
        }
        setIsVisuallySpinning(false);
        setJustLanded(true);
        
        // Remove landing effect after fade-in
        setTimeout(() => setJustLanded(false), 500);
      }, spinDuration);
      
      return () => {
        clearTimeout(spinInterval);
        clearTimeout(timeoutId);
        setIsVisuallySpinning(false);
        setJustLanded(false);
      };
    } else if (!isSpinning && targetApp) {
      setDisplayedApp(targetApp);
      setIsVisuallySpinning(false);
      setJustLanded(true);
      setTimeout(() => setJustLanded(false), 500);
    }
  }, [isSpinning, targetApp, shuffledApps, spinDuration]);

  // Default app card renderer
  const defaultAppCardRenderer = (app: App) => (
    <div className="default-app-card">
      <div className="app-logo">
        <img src={app.logo} alt={`${app.name} logo`} />
      </div>
      <div className="app-info">
        <h3 className="app-name">{app.name}</h3>
        {app.description && (
          <p className="app-description">{app.description}</p>
        )}
      </div>
    </div>
  );

  // Loading state
  if (!displayedApp && !isVisuallySpinning) {
    return (
      <div className={`slot-machine-card slot-loading ${className}`}>
        <div className="loading-placeholder">Loading...</div>
      </div>
    );
  }

  if (!displayedApp && isVisuallySpinning && shuffledApps.length === 0) {
    return (
      <div className={`slot-machine-card slot-empty ${className}`}>
        <div className="empty-state">No Apps Available</div>
      </div>
    );
  }

  const appToRender = displayedApp || (shuffledApps.length > 0 ? shuffledApps[0] : null);
  
  if (!appToRender) {
    return (
      <div className={`slot-machine-card slot-loading ${className}`}>
        <div className="loading-placeholder">Loading...</div>
      </div>
    );
  }

  // CSS classes for different states
  const cardClasses = `
    slot-machine-card
    slot-outer
    ${isVisuallySpinning ? 'slot-spinning' : ''}
    ${justLanded ? 'slot-landed' : ''}
    ${className}
  `.trim();

  const handleCardClick = () => {
    if (!isVisuallySpinning && appToRender && onAppClick) {
      onAppClick(appToRender);
    }
  };

  return (
    <div className={cardClasses} onClick={handleCardClick}>
      <div className={`slot-content ${!isVisuallySpinning ? 'clickable' : ''}`}>
        {renderAppCard ? renderAppCard(appToRender) : defaultAppCardRenderer(appToRender)}
      </div>
      
      {/* Visual effects overlay */}
      {isVisuallySpinning && (
        <>
          <div className="slot-glow"></div>
          <div className="slot-overlay"></div>
        </>
      )}
    </div>
  );
};

export default SlotMachineCard; 