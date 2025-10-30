export interface User {
  id: number;
  name: string;
  reputation: number;
  posts: number;
  joined: string;
}

export interface Post {
  id: number;
  threadId: number;
  author: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  replies?: number[];
}

export interface Thread {
  id: number;
  boardId: string;
  subject: string;
  author: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  replies: number;
  images: number;
  isPinned: boolean;
  isLocked: boolean;
}

export interface Board {
  id: string;
  name: string;
  description: string;
  threads: number;
  isNSFW: boolean;
}

export interface ModerationAction {
  id: number;
  action: string;
  moderator: string;
  target: string;
  timestamp: string;
  reason: string;
}

export const formatTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  return `${month}/${day}/${year}(${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()]})${hour}:${minute}:${second}`;
};
