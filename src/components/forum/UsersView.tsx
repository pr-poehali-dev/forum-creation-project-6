import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from './types';
import { getReputationStars } from './types';

interface UsersViewProps {
  users: User[];
}

const UsersView = ({ users }: UsersViewProps) => {
  return (
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
            {users.map((user, index) => (
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
  );
};

export default UsersView;
