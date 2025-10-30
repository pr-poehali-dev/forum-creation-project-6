import { User, Topic, ModerationAction, ForumSection } from './types';

export const mockUsers: User[] = [
  { id: 1, name: 'Admin_2003', reputation: 5000, posts: 2341, joined: '2000-01-15' },
  { id: 2, name: 'WebMaster_99', reputation: 3420, posts: 1567, joined: '1999-03-22' },
  { id: 3, name: 'User_Moderator', reputation: 2890, posts: 987, joined: '2001-07-11' },
  { id: 4, name: 'Forum_Veteran', reputation: 1250, posts: 456, joined: '2002-11-03' },
];

export const forumSections: ForumSection[] = [
  { id: 1, name: 'Главная', description: 'Общие темы и новости форума', topics: 1234, posts: 12456, icon: 'Home' },
  { id: 2, name: 'Темы', description: 'Обсуждение интересных тем', topics: 3456, posts: 45678, icon: 'MessageSquare' },
  { id: 3, name: 'Правила', description: 'Правила форума и FAQ', topics: 12, posts: 89, icon: 'Shield' },
  { id: 4, name: 'FAQ', description: 'Часто задаваемые вопросы', topics: 45, posts: 234, icon: 'HelpCircle' },
  { id: 5, name: 'Участники', description: 'Список пользователей форума', topics: 0, posts: 0, icon: 'Users' },
  { id: 6, name: 'Поиск', description: 'Поиск по форуму', topics: 0, posts: 0, icon: 'Search' },
];

export const mockTopics: Topic[] = [
  {
    id: 1,
    title: 'Добро пожаловать на форум!',
    author: mockUsers[0],
    replies: 156,
    views: 2341,
    lastPost: '2024-10-30 14:23',
    category: 'Главная',
    status: 'pinned'
  },
  {
    id: 2,
    title: 'Как получить больше репутации?',
    author: mockUsers[1],
    replies: 87,
    views: 1234,
    lastPost: '2024-10-30 13:45',
    category: 'FAQ',
    status: 'active'
  },
  {
    id: 3,
    title: 'Правила форума - ОБЯЗАТЕЛЬНО К ПРОЧТЕНИЮ',
    author: mockUsers[0],
    replies: 23,
    views: 5678,
    lastPost: '2024-10-29 18:12',
    category: 'Правила',
    status: 'locked'
  },
];

export const mockModerationActions: ModerationAction[] = [
  {
    id: 1,
    action: 'Закрыта тема',
    moderator: 'Admin_2003',
    target: 'Правила форума',
    timestamp: '2024-10-29 18:00',
    reason: 'Нарушение правил п.3'
  },
  {
    id: 2,
    action: 'Бан пользователя',
    moderator: 'User_Moderator',
    target: 'Spammer_123',
    timestamp: '2024-10-30 10:15',
    reason: 'Спам'
  },
  {
    id: 3,
    action: 'Удалено сообщение',
    moderator: 'Admin_2003',
    target: 'Тема #234',
    timestamp: '2024-10-30 12:30',
    reason: 'Оскорбления'
  },
];
