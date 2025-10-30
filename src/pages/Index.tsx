import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface User {
  id: number;
  name: string;
  reputation: number;
  posts: number;
  joined: string;
}

interface Topic {
  id: number;
  title: string;
  author: User;
  replies: number;
  views: number;
  lastPost: string;
  category: string;
}

interface ForumSection {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  icon: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'Admin_2003', reputation: 5000, posts: 2341, joined: '2000-01-15' },
  { id: 2, name: 'WebMaster_99', reputation: 3420, posts: 1567, joined: '1999-03-22' },
  { id: 3, name: 'User_Moderator', reputation: 2890, posts: 987, joined: '2001-07-11' },
  { id: 4, name: 'Forum_Veteran', reputation: 1250, posts: 456, joined: '2002-11-03' },
];

const forumSections: ForumSection[] = [
  { id: 1, name: 'Главная', description: 'Общие темы и новости форума', topics: 1234, posts: 12456, icon: 'Home' },
  { id: 2, name: 'Темы', description: 'Обсуждение интересных тем', topics: 3456, posts: 45678, icon: 'MessageSquare' },
  { id: 3, name: 'Правила', description: 'Правила форума и FAQ', topics: 12, posts: 89, icon: 'Shield' },
  { id: 4, name: 'FAQ', description: 'Часто задаваемые вопросы', topics: 45, posts: 234, icon: 'HelpCircle' },
  { id: 5, name: 'Участники', description: 'Список пользователей форума', topics: 0, posts: 0, icon: 'Users' },
  { id: 6, name: 'Поиск', description: 'Поиск по форуму', topics: 0, posts: 0, icon: 'Search' },
];

const mockTopics: Topic[] = [
  {
    id: 1,
    title: 'Добро пожаловать на форум!',
    author: mockUsers[0],
    replies: 156,
    views: 2341,
    lastPost: '2024-10-30 14:23',
    category: 'Главная'
  },
  {
    id: 2,
    title: 'Как получить больше репутации?',
    author: mockUsers[1],
    replies: 87,
    views: 1234,
    lastPost: '2024-10-30 13:45',
    category: 'FAQ'
  },
  {
    id: 3,
    title: 'Правила форума - ОБЯЗАТЕЛЬНО К ПРОЧТЕНИЮ',
    author: mockUsers[0],
    replies: 23,
    views: 5678,
    lastPost: '2024-10-29 18:12',
    category: 'Правила'
  },
];

const getReputationStars = (reputation: number): string => {
  if (reputation >= 5000) return '⭐⭐⭐⭐⭐';
  if (reputation >= 3000) return '⭐⭐⭐⭐';
  if (reputation >= 1500) return '⭐⭐⭐';
  if (reputation >= 500) return '⭐⭐';
  return '⭐';
};

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'topics' | 'users'>('home');
  const [onlineUsers] = useState(42);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-4 border-primary bg-primary text-primary-foreground py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold tracking-wider flex items-center gap-2">
            <Icon name="MessageCircle" size={32} />
            РЕТРО ФОРУМ
          </h1>
          <p className="text-sm mt-1 opacity-90">Добро пожаловать в эпоху ранних форумов!</p>
        </div>
      </div>

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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            {currentView === 'home' && (
              <Card className="border-4 border-primary p-0 overflow-hidden">
                <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
                  <h2 className="text-xl font-bold">Разделы форума</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border-2 border-border p-3 text-left font-bold">Раздел</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-24">Темы</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-24">Сообщения</th>
                      </tr>
                    </thead>
                    <tbody className="bg-card">
                      {forumSections.map((section) => (
                        <tr key={section.id} className="hover:bg-muted transition-colors cursor-pointer">
                          <td className="border-2 border-border p-3">
                            <div className="flex items-start gap-3">
                              <Icon name={section.icon as any} size={24} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <div className="font-bold text-primary text-lg">{section.name}</div>
                                <div className="text-sm text-muted-foreground">{section.description}</div>
                              </div>
                            </div>
                          </td>
                          <td className="border-2 border-border p-3 text-center font-bold">{section.topics}</td>
                          <td className="border-2 border-border p-3 text-center font-bold">{section.posts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {currentView === 'topics' && (
              <Card className="border-4 border-primary p-0 overflow-hidden">
                <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
                  <h2 className="text-xl font-bold">Последние темы</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border-2 border-border p-3 text-left font-bold">Тема</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-24">Ответы</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-24">Просмотры</th>
                        <th className="border-2 border-border p-3 text-left font-bold w-40">Последнее</th>
                      </tr>
                    </thead>
                    <tbody className="bg-card">
                      {mockTopics.map((topic) => (
                        <tr key={topic.id} className="hover:bg-muted transition-colors cursor-pointer">
                          <td className="border-2 border-border p-3">
                            <div className="font-bold text-primary text-lg mb-1">{topic.title}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <Icon name="User" size={14} />
                              {topic.author.name} {getReputationStars(topic.author.reputation)}
                              <Badge variant="secondary" className="ml-2">{topic.category}</Badge>
                            </div>
                          </td>
                          <td className="border-2 border-border p-3 text-center font-bold">{topic.replies}</td>
                          <td className="border-2 border-border p-3 text-center font-bold">{topic.views}</td>
                          <td className="border-2 border-border p-3 text-sm">{topic.lastPost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {currentView === 'users' && (
              <Card className="border-4 border-primary p-0 overflow-hidden">
                <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
                  <h2 className="text-xl font-bold">ТОП участников</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead className="bg-muted">
                      <tr>
                        <th className="border-2 border-border p-3 text-left font-bold">Пользователь</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-32">Репутация</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-24">Сообщений</th>
                        <th className="border-2 border-border p-3 text-center font-bold w-32">Зарег.</th>
                      </tr>
                    </thead>
                    <tbody className="bg-card">
                      {mockUsers.map((user, index) => (
                        <tr key={user.id} className="hover:bg-muted transition-colors">
                          <td className="border-2 border-border p-3">
                            <div className="flex items-center gap-3">
                              <Badge variant="default" className="w-8 h-8 rounded-full flex items-center justify-center">
                                #{index + 1}
                              </Badge>
                              <div>
                                <div className="font-bold text-primary text-lg">{user.name}</div>
                                <div className="text-xl">{getReputationStars(user.reputation)}</div>
                              </div>
                            </div>
                          </td>
                          <td className="border-2 border-border p-3 text-center">
                            <div className="font-bold text-lg text-accent">{user.reputation}</div>
                          </td>
                          <td className="border-2 border-border p-3 text-center font-bold">{user.posts}</td>
                          <td className="border-2 border-border p-3 text-center text-sm">{user.joined}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1">
            <Card className="border-4 border-primary p-0 overflow-hidden mb-4">
              <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
                <h3 className="font-bold">Статистика</h3>
              </div>
              <div className="p-4 bg-card space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Онлайн:</span>
                  <Badge variant="default" className="font-bold">{onlineUsers}</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Всего тем:</span>
                  <span className="font-bold">4,747</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Сообщений:</span>
                  <span className="font-bold">58,457</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-sm">Участников:</span>
                  <span className="font-bold">1,234</span>
                </div>
              </div>
            </Card>

            <Card className="border-4 border-primary p-0 overflow-hidden">
              <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
                <h3 className="font-bold">Новости</h3>
              </div>
              <div className="p-4 bg-card space-y-3 text-sm">
                <div>
                  <div className="font-bold text-primary">30.10.2024</div>
                  <div>Добавлена система рейтингов! ⭐</div>
                </div>
                <Separator />
                <div>
                  <div className="font-bold text-primary">29.10.2024</div>
                  <div>Новый дизайн форума запущен</div>
                </div>
                <Separator />
                <div>
                  <div className="font-bold text-primary">28.10.2024</div>
                  <div>Обновлены правила форума</div>
                </div>
              </div>
            </Card>
          </div>
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
    </div>
  );
};

export default Index;
