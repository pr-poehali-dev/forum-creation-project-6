import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import ForumHeader from '@/components/forum/ForumHeader';
import ForumSidebar from '@/components/forum/ForumSidebar';
import HomeView from '@/components/forum/HomeView';
import TopicsView from '@/components/forum/TopicsView';
import UsersView from '@/components/forum/UsersView';
import ModerationView from '@/components/forum/ModerationView';
import ModerationDialog from '@/components/forum/ModerationDialog';
import { Topic } from '@/components/forum/types';
import { mockUsers, forumSections, mockTopics, mockModerationActions } from '@/components/forum/mockData';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'topics' | 'users' | 'moderation'>('home');
  const [onlineUsers] = useState(42);
  const [isModerator] = useState(true);
  const [showModDialog, setShowModDialog] = useState(false);
  const [modAction, setModAction] = useState<'lock' | 'pin' | 'delete' | 'ban' | 'warn'>('lock');
  const [modReason, setModReason] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topics, setTopics] = useState(mockTopics);
  const { toast } = useToast();

  const handleModerate = (topic: Topic) => {
    setSelectedTopic(topic);
    setShowModDialog(true);
  };

  const handleApplyModeration = () => {
    if (selectedTopic && modReason) {
      const updatedTopics = topics.map(t => {
        if (t.id === selectedTopic.id) {
          if (modAction === 'lock') return { ...t, status: 'locked' as const };
          if (modAction === 'pin') return { ...t, status: 'pinned' as const };
          if (modAction === 'delete') return { ...t, status: 'deleted' as const };
        }
        return t;
      }).filter(t => t.status !== 'deleted');
      setTopics(updatedTopics);
      toast({
        title: 'Действие выполнено',
        description: `${modAction === 'lock' ? 'Тема закрыта' : modAction === 'pin' ? 'Тема закреплена' : 'Тема удалена'}`,
      });
      setShowModDialog(false);
      setModReason('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ForumHeader />

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex gap-2 mb-4 flex-wrap">
          <Button 
            variant={currentView === 'home' ? 'default' : 'outline'}
            onClick={() => setCurrentView('home')}
            className="border-2"
          >
            <Icon name="Home" size={16} className="mr-1" />
            Главная
          </Button>
          <Button 
            variant={currentView === 'topics' ? 'default' : 'outline'}
            onClick={() => setCurrentView('topics')}
            className="border-2"
          >
            <Icon name="MessageSquare" size={16} className="mr-1" />
            Темы
          </Button>
          <Button 
            variant={currentView === 'users' ? 'default' : 'outline'}
            onClick={() => setCurrentView('users')}
            className="border-2"
          >
            <Icon name="Users" size={16} className="mr-1" />
            Участники
          </Button>
          {isModerator && (
            <Button 
              variant={currentView === 'moderation' ? 'default' : 'outline'}
              onClick={() => setCurrentView('moderation')}
              className="border-2 ml-auto"
            >
              <Icon name="Shield" size={16} className="mr-1" />
              Модерация
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            {currentView === 'home' && <HomeView sections={forumSections} />}
            {currentView === 'topics' && (
              <TopicsView 
                topics={topics} 
                isModerator={isModerator}
                onModerate={handleModerate}
              />
            )}
            {currentView === 'users' && <UsersView users={mockUsers} />}
            {currentView === 'moderation' && (
              <ModerationView 
                topics={topics}
                moderationActions={mockModerationActions}
              />
            )}
          </div>

          <ForumSidebar onlineUsers={onlineUsers} />
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground border-t-2 border-border pt-4">
          <p>Powered by RETRO FORUM ENGINE v1.0 © 2024</p>
          <p className="mt-1">
            <a href="#" className="text-primary hover:underline">Правила</a> •{' '}
            <a href="#" className="text-primary hover:underline">FAQ</a> •{' '}
            <a href="#" className="text-primary hover:underline">Контакты</a>
          </p>
        </div>
      </div>

      <ModerationDialog
        open={showModDialog}
        onOpenChange={setShowModDialog}
        selectedTopic={selectedTopic}
        modAction={modAction}
        modReason={modReason}
        onActionChange={setModAction}
        onReasonChange={setModReason}
        onApply={handleApplyModeration}
      />
    </div>
  );
};

export default Index;
