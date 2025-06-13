import React, { useState, useEffect } from 'react';
import SlotMachineCard from './SlotMachineCard';
import './BattleModal.css';

// Define basic App interface - adjust to match your app structure
interface App {
  id: string;
  name: string;
  logo: string;
  url: string;
  description?: string;
  upvotes?: number;
  downvotes?: number;
  [key: string]: any;
}

interface BattleModalProps {
  isOpen: boolean;
  onClose: () => void;
  apps: App[];
  onAppSelect?: (selectedApp: App, otherApp: App) => void;
  maxRounds?: number;
  spinDuration?: number;
  title?: string;
  subtitle?: string;
}

const BattleModal: React.FC<BattleModalProps> = ({
  isOpen,
  onClose,
  apps,
  onAppSelect,
  maxRounds = 3,
  spinDuration = 2500,
  title = "Battle of the Apps",
  subtitle = "Which app is better?"
}) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentPair, setCurrentPair] = useState<[App, App] | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [roundResults, setRoundResults] = useState<Array<{
    selectedApp: App;
    otherApp: App;
    selectedIndex: number;
  }>>([]);

  // Generate random pair of apps
  const generateAppPair = () => {
    if (apps.length < 2) return null;
    
    let app1: App, app2: App;
    let attempts = 0;
    
    do {
      app1 = apps[Math.floor(Math.random() * apps.length)];
      app2 = apps[Math.floor(Math.random() * apps.length)];
      attempts++;
    } while (app1.id === app2.id && attempts < apps.length * 2);

    // Fallback if we can't find different apps
    if (app1.id === app2.id && apps.length > 1) {
      const distinctApps = Array.from(new Set(apps.map(a => a.id)))
        .map(id => apps.find(a => a.id === id)!)
        .filter(Boolean);
      
      if (distinctApps.length >= 2) {
        app1 = distinctApps[0];
        app2 = distinctApps[1];
      } else {
        app1 = apps[0];
        app2 = apps[apps.length > 1 ? 1 : 0];
      }
    }

    return [app1, app2] as [App, App];
  };

  // Start new round
  useEffect(() => {
    if (isOpen && currentRound <= maxRounds && apps.length >= 2) {
      setIsSpinning(true);
      setCurrentPair(null);
      setSelectedIndex(null);
      setShowResult(false);
      
      const newPair = generateAppPair();
      setCurrentPair(newPair);
      
      const timer = setTimeout(() => {
        setIsSpinning(false);
      }, spinDuration);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, currentRound, apps, maxRounds, spinDuration]);

  // Handle app selection
  const handleAppSelect = (index: number) => {
    if (isSpinning || !currentPair) return;
    
    const selectedApp = currentPair[index];
    const otherApp = currentPair[index === 0 ? 1 : 0];
    
    setSelectedIndex(index);
    
    // Store result
    const result = {
      selectedApp,
      otherApp,
      selectedIndex: index
    };
    
    setRoundResults(prev => [...prev, result]);
    
    // Call parent callback
    if (onAppSelect) {
      onAppSelect(selectedApp, otherApp);
    }
    
    // Show result screen
    setTimeout(() => {
      setShowResult(true);
    }, 800);
  };

  // Continue to next round or finish
  const handleContinue = () => {
    if (currentRound < maxRounds) {
      setCurrentRound(prev => prev + 1);
    } else {
      // Battle finished
      setShowResult(false);
      setCurrentRound(1);
      setRoundResults([]);
      onClose();
    }
  };

  // Reset and play again
  const handlePlayAgain = () => {
    setCurrentRound(1);
    setRoundResults([]);
    setShowResult(false);
    setSelectedIndex(null);
    setCurrentPair(null);
  };

  if (!isOpen) {
    return null;
  }

  const renderBattleScreen = () => {
    const [app1, app2] = currentPair || [null, null];
    
    return (
      <div className="battle-content">
        {isSpinning && (
          <p className="spinning-text">
            Choosing apps for battle...
          </p>
        )}
        
        <h2 className={`battle-title ${isSpinning ? 'spinning' : ''}`}>
          {isSpinning ? 'Spinning...' : subtitle}
        </h2>
        
        <p className="round-indicator">
          Round {currentRound} of {maxRounds}
        </p>
        
        <div className="battle-arena">
          {/* Left App */}
          <div className="battle-side">
            <SlotMachineCard
              allApps={apps}
              targetApp={app1}
              isSpinning={isSpinning}
              spinDuration={spinDuration}
              className={selectedIndex === 0 ? 'selected' : ''}
            />
            <button
              onClick={() => handleAppSelect(0)}
              disabled={isSpinning || !app1}
              className={`select-button ${
                isSpinning || !app1 ? 'disabled' : 
                selectedIndex === 0 ? 'selected' : 'active'
              }`}
            >
              Choose Left
            </button>
          </div>
          
          {/* VS Divider */}
          <div className="vs-divider">
            <span className="vs-text">VS</span>
          </div>
          
          {/* Right App */}
          <div className="battle-side">
            <SlotMachineCard
              allApps={apps}
              targetApp={app2}
              isSpinning={isSpinning}
              spinDuration={spinDuration}
              className={selectedIndex === 1 ? 'selected' : ''}
            />
            <button
              onClick={() => handleAppSelect(1)}
              disabled={isSpinning || !app2}
              className={`select-button ${
                isSpinning || !app2 ? 'disabled' : 
                selectedIndex === 1 ? 'selected' : 'active'
              }`}
            >
              Choose Right
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderResultScreen = () => {
    const latestResult = roundResults[roundResults.length - 1];
    if (!latestResult) return null;

    const { selectedApp, otherApp } = latestResult;
    
    return (
      <div className="result-content">
        <div className="result-header">
          <h2 className="result-title">Great Choice! 🎉</h2>
          <p className="result-subtitle">
            You chose {selectedApp.name}!
          </p>
        </div>
        
        <div className="result-comparison">
          <div className="result-app selected">
            <img src={selectedApp.logo} alt={selectedApp.name} />
            <h3>{selectedApp.name}</h3>
            <span className="winner-badge">Winner</span>
          </div>
          
          <div className="vs-small">VS</div>
          
          <div className="result-app">
            <img src={otherApp.logo} alt={otherApp.name} />
            <h3>{otherApp.name}</h3>
          </div>
        </div>
        
        <div className="result-actions">
          {currentRound < maxRounds ? (
            <button onClick={handleContinue} className="continue-button">
              Next Round
            </button>
          ) : (
            <>
              <button onClick={handlePlayAgain} className="play-again-button">
                Play Again
              </button>
              <button onClick={onClose} className="finish-button">
                Finish
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="battle-modal-overlay" onClick={onClose}>
      <div className="battle-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        
        <div className="modal-header">
          <h1 className="modal-title">{title}</h1>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentRound / maxRounds) * 100}%` }}
            />
          </div>
        </div>
        
        <div className="modal-body">
          {showResult ? renderResultScreen() : renderBattleScreen()}
        </div>
      </div>
    </div>
  );
};

export default BattleModal; 