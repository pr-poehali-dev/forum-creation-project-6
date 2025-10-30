import { useState } from 'react';
import ForumHeader from '@/components/forum/ForumHeader';
import BoardList from '@/components/forum/BoardList';
import ThreadList from '@/components/forum/ThreadList';
import ThreadView from '@/components/forum/ThreadView';
import { mockBoards, mockThreads, mockPosts } from '@/components/forum/mockData';
import { Thread } from '@/components/forum/types';

type View = 'boards' | 'threads' | 'thread';

const Index = () => {
  const [currentView, setCurrentView] = useState<View>('boards');
  const [selectedBoard, setSelectedBoard] = useState<string>('');
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);

  const handleSelectBoard = (boardId: string) => {
    setSelectedBoard(boardId);
    setCurrentView('threads');
  };

  const handleSelectThread = (threadId: number) => {
    const thread = mockThreads.find(t => t.id === threadId) || null;
    setSelectedThread(thread);
    setCurrentView('thread');
  };

  const handleBackToBoards = () => {
    setCurrentView('boards');
    setSelectedBoard('');
  };

  const handleBackToThreads = () => {
    setCurrentView('threads');
    setSelectedThread(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader />
      
      {currentView === 'boards' && (
        <BoardList 
          boards={mockBoards}
          onSelectBoard={handleSelectBoard}
        />
      )}

      {currentView === 'threads' && (
        <ThreadList
          threads={mockThreads}
          boardId={selectedBoard}
          onSelectThread={handleSelectThread}
          onBack={handleBackToBoards}
        />
      )}

      {currentView === 'thread' && (
        <ThreadView
          thread={selectedThread}
          posts={mockPosts}
          onBack={handleBackToThreads}
        />
      )}
    </div>
  );
};

export default Index;
