import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Topic } from './types';
import { getReputationStars } from './types';

interface TopicsViewProps {
  topics: Topic[];
  isModerator: boolean;
  onModerate: (topic: Topic) => void;
}

const TopicsView = ({ topics, isModerator, onModerate }: TopicsViewProps) => {
  return (
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
            {topics.map((topic) => (
              <tr key={topic.id} className="hover:bg-muted transition-colors">
                <td className="border-2 border-border p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1">
                      <div className="font-bold text-primary text-lg mb-1 flex items-center gap-2">
                        {topic.status === 'pinned' && <Icon name="Pin" size={16} className="text-accent" />}
                        {topic.status === 'locked' && <Icon name="Lock" size={16} className="text-destructive" />}
                        {topic.title}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="User" size={14} />
                        {topic.author.name} {getReputationStars(topic.author.reputation)}
                        <Badge variant="secondary" className="ml-2">{topic.category}</Badge>
                      </div>
                    </div>
                    {isModerator && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-2"
                        onClick={() => onModerate(topic)}
                      >
                        <Icon name="MoreVertical" size={14} />
                      </Button>
                    )}
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
  );
};

export default TopicsView;
