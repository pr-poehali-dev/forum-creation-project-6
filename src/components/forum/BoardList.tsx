import { Board } from './types';

interface BoardListProps {
  boards: Board[];
  onSelectBoard: (boardId: string) => void;
}

const BoardList = ({ boards, onSelectBoard }: BoardListProps) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-card border border-border mb-4">
        <div className="bg-primary p-2 text-center">
          <h2 className="text-xl font-bold">Boards</h2>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {boards.map((board) => (
              <div
                key={board.id}
                onClick={() => onSelectBoard(board.id)}
                className="border border-border p-3 hover:bg-muted cursor-pointer"
              >
                <div className="flex items-start gap-2">
                  <span className="text-accent font-bold text-lg">/{board.id}/</span>
                  <div className="flex-1">
                    <div className="font-bold">{board.name}</div>
                    <div className="text-sm text-muted-foreground">{board.description}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {board.threads.toLocaleString()} threads
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground">
        <p>All trademarks and copyrights on this page are owned by their respective parties.</p>
        <p className="mt-1">Images uploaded are the responsibility of the Poster.</p>
      </div>
    </div>
  );
};

export default BoardList;
