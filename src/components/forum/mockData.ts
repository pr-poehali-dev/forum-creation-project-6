import { Board, Thread, Post, ModerationAction } from './types';

export const mockBoards: Board[] = [
  { id: 'b', name: 'Random', description: 'Случайные темы', threads: 8234, isNSFW: false },
  { id: 'g', name: 'Technology', description: 'Технологии', threads: 4521, isNSFW: false },
  { id: 'v', name: 'Video Games', description: 'Видеоигры', threads: 9876, isNSFW: false },
  { id: 'a', name: 'Anime & Manga', description: 'Аниме и манга', threads: 6543, isNSFW: false },
  { id: 'pol', name: 'Politics', description: 'Политика', threads: 12341, isNSFW: false },
  { id: 'sci', name: 'Science & Math', description: 'Наука и математика', threads: 2345, isNSFW: false },
];

export const mockThreads: Thread[] = [
  {
    id: 123456789,
    boardId: 'b',
    subject: 'Добро пожаловать на борду',
    author: 'Anonymous',
    timestamp: '2024-10-30T14:23:00',
    content: 'Это первый тред на борде /b/\n\n>будь вежлив\n>соблюдай правила\n>не спамь',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=250&h=250&fit=crop',
    replies: 156,
    images: 23,
    isPinned: true,
    isLocked: false
  },
  {
    id: 123456790,
    boardId: 'b',
    subject: 'Тред про котиков',
    author: 'Anonymous',
    timestamp: '2024-10-30T13:45:00',
    content: 'Постим котиков',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=250&h=250&fit=crop',
    replies: 87,
    images: 45,
    isPinned: false,
    isLocked: false
  },
  {
    id: 123456791,
    boardId: 'g',
    subject: 'Какой дистрибутив Linux лучший?',
    author: 'Anonymous',
    timestamp: '2024-10-30T12:30:00',
    content: '>arch\n>btw',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=250&h=250&fit=crop',
    replies: 234,
    images: 12,
    isPinned: false,
    isLocked: false
  },
  {
    id: 123456792,
    boardId: 'v',
    subject: 'Какая игра года?',
    author: 'Anonymous',
    timestamp: '2024-10-30T11:15:00',
    content: 'Обсуждаем GOTY 2024',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=250&h=250&fit=crop',
    replies: 178,
    images: 34,
    isPinned: false,
    isLocked: false
  },
];

export const mockPosts: Post[] = [
  {
    id: 1,
    threadId: 123456789,
    author: 'Anonymous',
    timestamp: '2024-10-30T14:25:00',
    content: '>>123456789\nОтличный тред, спасибо OP',
  },
  {
    id: 2,
    threadId: 123456789,
    author: 'Anonymous',
    timestamp: '2024-10-30T14:27:00',
    content: '>зеленый текст\n>mfw',
    imageUrl: 'https://images.unsplash.com/photo-1551847812-c7c0b0b0b3b0?w=250&h=250&fit=crop',
  },
  {
    id: 3,
    threadId: 123456789,
    author: 'Anonymous',
    timestamp: '2024-10-30T14:30:00',
    content: '>>2\nkek',
  },
];

export const mockModerationActions: ModerationAction[] = [
  {
    id: 1,
    action: 'Удален тред',
    moderator: 'Janitor',
    target: 'Thread #12345',
    timestamp: '2024-10-29 18:00',
    reason: 'Спам'
  },
  {
    id: 2,
    action: 'Бан',
    moderator: 'Moderator',
    target: '192.168.1.1',
    timestamp: '2024-10-30 10:15',
    reason: 'Нарушение правил #3'
  },
  {
    id: 3,
    action: 'Удален пост',
    moderator: 'Janitor',
    target: 'Post #67890',
    timestamp: '2024-10-30 12:30',
    reason: 'Офтоп'
  },
];
