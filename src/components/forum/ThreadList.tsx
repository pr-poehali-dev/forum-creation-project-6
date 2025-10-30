import { Thread } from './types';
import { formatTime } from './types';
import Icon from '@/components/ui/icon';

interface ThreadListProps {
  threads: Thread[];
  boardId: string;
  onSelectThread: (threadId: number) => void;
  onBack: () => void;
}

const ThreadList = ({ threads, boardId, onSelectThread, onBack }: ThreadListProps) => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-4">
        <button onClick={onBack} className="text-sm hover:underline mb-2">← Back to boards</button>
        <div className="bg-primary border border-border p-2 text-center">
          <h2 className="text-2xl font-bold">/{boardId}/</h2>
        </div>
      </div>

      <div className="space-y-4">
        {threads.filter(t => t.boardId === boardId).map((thread) => (
          <div
            key={thread.id}
            className="bg-card border border-border hover:shadow-sm cursor-pointer"
            onClick={() => onSelectThread(thread.id)}
          >
            <div className="p-3">
              <div className="flex gap-3">
                {thread.imageUrl && (
                  <img
                    src={thread.imageUrl}
                    alt="Thread image"
                    className="w-32 h-32 object-cover border border-border"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    {thread.isPinned && (
                      <Icon name="Pin" size={14} className="text-accent mt-1" />
                    )}
                    {thread.isLocked && (
                      <Icon name="Lock" size={14} className="text-destructive mt-1" />
                    )}
                    <div>
                      <span className="font-bold text-accent">{thread.subject}</span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {thread.author}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {formatTime(thread.timestamp)}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        No.{thread.id}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm whitespace-pre-wrap">
                    {thread.content.split('\n').map((line, i) => (
                      <div key={i} className={line.startsWith('>') ? 'chan-greentext' : ''}>
                        {line}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                    <span>R: {thread.replies}</span>
                    <span>I: {thread.images}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreadList;
