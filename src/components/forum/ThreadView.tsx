import { Thread, Post } from './types';
import { formatTime } from './types';

interface ThreadViewProps {
  thread: Thread | null;
  posts: Post[];
  onBack: () => void;
}

const ThreadView = ({ thread, posts, onBack }: ThreadViewProps) => {
  if (!thread) return null;

  const threadPosts = posts.filter(p => p.threadId === thread.id);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-4">
        <button onClick={onBack} className="text-sm hover:underline mb-2">← Back to board</button>
        <div className="bg-primary border border-border p-2 text-center">
          <h2 className="text-xl font-bold">/{thread.boardId}/ - {thread.subject}</h2>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-card border border-border p-3">
          <div className="flex gap-3">
            {thread.imageUrl && (
              <div>
                <img
                  src={thread.imageUrl}
                  alt="OP image"
                  className="max-w-[250px] border border-border"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="mb-2">
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
              <div className="text-sm whitespace-pre-wrap">
                {thread.content.split('\n').map((line, i) => (
                  <div key={i} className={line.startsWith('>') && !line.startsWith('>>') ? 'chan-greentext' : ''}>
                    {line.startsWith('>>') ? (
                      <span className="chan-quote">{line}</span>
                    ) : (
                      line
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {threadPosts.map((post) => (
          <div key={post.id} className="bg-card border border-border p-3 ml-8">
            <div className="flex gap-3">
              {post.imageUrl && (
                <div>
                  <img
                    src={post.imageUrl}
                    alt="Post image"
                    className="max-w-[200px] border border-border"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">
                    {post.author}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    {formatTime(post.timestamp)}
                  </span>
                  <span className="text-sm text-muted-foreground ml-2">
                    No.{thread.id}{post.id}
                  </span>
                </div>
                <div className="text-sm whitespace-pre-wrap">
                  {post.content.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('>') && !line.startsWith('>>') ? 'chan-greentext' : ''}>
                      {line.startsWith('>>') ? (
                        <span className="chan-quote">{line}</span>
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-card border border-border">
        <div className="text-sm text-muted-foreground text-center">
          [Post a Reply]
        </div>
      </div>
    </div>
  );
};

export default ThreadView;
