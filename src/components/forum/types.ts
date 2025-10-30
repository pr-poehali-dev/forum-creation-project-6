export interface User {
  id: number;
  name: string;
  reputation: number;
  posts: number;
  joined: string;
}

export interface Topic {
  id: number;
  title: string;
  author: User;
  replies: number;
  views: number;
  lastPost: string;
  category: string;
  status: 'active' | 'locked' | 'pinned' | 'deleted';
}

export interface ModerationAction {
  id: number;
  action: string;
  moderator: string;
  target: string;
  timestamp: string;
  reason: string;
}

export interface ForumSection {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  icon: string;
}

export const getReputationStars = (reputation: number): string => {
  if (reputation >= 5000) return '⭐⭐⭐⭐⭐';
  if (reputation >= 3000) return '⭐⭐⭐⭐';
  if (reputation >= 1500) return '⭐⭐⭐';
  if (reputation >= 500) return '⭐⭐';
  return '⭐';
};
