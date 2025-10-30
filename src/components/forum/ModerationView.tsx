import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Topic, ModerationAction } from './types';

interface ModerationViewProps {
  topics: Topic[];
  moderationActions: ModerationAction[];
}

const ModerationView = ({ topics, moderationActions }: ModerationViewProps) => {
  return (
    <div className="space-y-4">
      <Card className="border-4 border-primary p-0 overflow-hidden">
        <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
          <h2 className="text-xl font-bold">Панель модерации</h2>
        </div>
        <div className="p-4 bg-card space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="border-2 border-border p-4 text-center">
              <div className="text-3xl font-bold text-primary">{topics.filter(t => t.status === 'active').length}</div>
              <div className="text-sm text-muted-foreground mt-1">Активные темы</div>
            </Card>
            <Card className="border-2 border-border p-4 text-center">
              <div className="text-3xl font-bold text-accent">{topics.filter(t => t.status === 'pinned').length}</div>
              <div className="text-sm text-muted-foreground mt-1">Закреплено</div>
            </Card>
            <Card className="border-2 border-border p-4 text-center">
              <div className="text-3xl font-bold text-destructive">{topics.filter(t => t.status === 'locked').length}</div>
              <div className="text-sm text-muted-foreground mt-1">Заблокировано</div>
            </Card>
            <Card className="border-2 border-border p-4 text-center">
              <div className="text-3xl font-bold text-muted-foreground">12</div>
              <div className="text-sm text-muted-foreground mt-1">Жалобы</div>
            </Card>
          </div>
        </div>
      </Card>

      <Card className="border-4 border-primary p-0 overflow-hidden">
        <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
          <h2 className="text-xl font-bold">История действий</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-muted">
              <tr>
                <th className="border-2 border-border p-3 text-left font-bold">Действие</th>
                <th className="border-2 border-border p-3 text-left font-bold">Модератор</th>
                <th className="border-2 border-border p-3 text-left font-bold">Цель</th>
                <th className="border-2 border-border p-3 text-left font-bold">Причина</th>
                <th className="border-2 border-border p-3 text-left font-bold w-40">Время</th>
              </tr>
            </thead>
            <tbody className="bg-card">
              {moderationActions.map((action) => (
                <tr key={action.id} className="hover:bg-muted transition-colors">
                  <td className="border-2 border-border p-3">
                    <Badge variant="outline">{action.action}</Badge>
                  </td>
                  <td className="border-2 border-border p-3 font-bold text-primary">{action.moderator}</td>
                  <td className="border-2 border-border p-3">{action.target}</td>
                  <td className="border-2 border-border p-3 text-sm text-muted-foreground">{action.reason}</td>
                  <td className="border-2 border-border p-3 text-sm">{action.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="border-4 border-primary p-0 overflow-hidden">
        <div className="bg-primary text-primary-foreground p-3 border-b-4 border-primary">
          <h2 className="text-xl font-bold">Быстрые действия</h2>
        </div>
        <div className="p-4 bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button variant="outline" className="border-2 h-auto py-4 flex flex-col gap-2">
              <Icon name="Ban" size={24} />
              <span className="font-bold">Забанить пользователя</span>
            </Button>
            <Button variant="outline" className="border-2 h-auto py-4 flex flex-col gap-2">
              <Icon name="Trash2" size={24} />
              <span className="font-bold">Удалить спам</span>
            </Button>
            <Button variant="outline" className="border-2 h-auto py-4 flex flex-col gap-2">
              <Icon name="AlertTriangle" size={24} />
              <span className="font-bold">Проверить жалобы</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ModerationView;
