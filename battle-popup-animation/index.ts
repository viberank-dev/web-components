// Export all components
export { default as SlotMachineCard } from './SlotMachineCard';
export { default as BattleModal } from './BattleModal';
export { default as BattleAnimationExample } from './Example';

// Export CSS (you'll need to import these in your main app)
// import './SlotMachineCard.css';
// import './BattleModal.css';

// Type definitions
export interface App {
  id: string;
  name: string;
  logo: string;
  url: string;
  description?: string;
  upvotes?: number;
  downvotes?: number;
  [key: string]: any;
}

export interface SlotMachineCardProps {
  allApps: App[];
  targetApp: App | null;
  isSpinning: boolean;
  spinDuration?: number;
  className?: string;
  onAppClick?: (app: App) => void;
  renderAppCard?: (app: App) => React.ReactNode;
}

export interface BattleModalProps {
  isOpen: boolean;
  onClose: () => void;
  apps: App[];
  onAppSelect?: (selectedApp: App, otherApp: App) => void;
  maxRounds?: number;
  spinDuration?: number;
  title?: string;
  subtitle?: string;
} 