import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ForumSection } from './types';

interface HomeViewProps {
  sections: ForumSection[];
}

const HomeView = ({ sections }: HomeViewProps) => {
  return (
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
            {sections.map((section) => (
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
  );
};

export default HomeView;
