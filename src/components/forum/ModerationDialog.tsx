import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Topic } from './types';

interface ModerationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTopic: Topic | null;
  modAction: 'lock' | 'pin' | 'delete' | 'ban' | 'warn';
  modReason: string;
  onActionChange: (action: 'lock' | 'pin' | 'delete' | 'ban' | 'warn') => void;
  onReasonChange: (reason: string) => void;
  onApply: () => void;
}

const ModerationDialog = ({
  open,
  onOpenChange,
  selectedTopic,
  modAction,
  modReason,
  onActionChange,
  onReasonChange,
  onApply,
}: ModerationDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-4 border-primary">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Действия модератора</DialogTitle>
          <DialogDescription>
            Тема: {selectedTopic?.title}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-bold mb-2 block">Действие:</label>
            <Select value={modAction} onValueChange={(v: any) => onActionChange(v)}>
              <SelectTrigger className="border-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lock">🔒 Закрыть тему</SelectItem>
                <SelectItem value="pin">📌 Закрепить тему</SelectItem>
                <SelectItem value="delete">🗑️ Удалить тему</SelectItem>
                <SelectItem value="ban">⛔ Забанить автора</SelectItem>
                <SelectItem value="warn">⚠️ Предупредить автора</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-bold mb-2 block">Причина:</label>
            <Textarea
              placeholder="Укажите причину действия..."
              value={modReason}
              onChange={(e) => onReasonChange(e.target.value)}
              className="border-2 min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-2">
            Отмена
          </Button>
          <Button onClick={onApply} className="border-2">
            Применить
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModerationDialog;
