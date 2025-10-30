import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ForumSidebarProps {
  onlineUsers: number;
}

const ForumSidebar = ({ onlineUsers }: ForumSidebarProps) => {
  return (
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
  );
};

export default ForumSidebar;
