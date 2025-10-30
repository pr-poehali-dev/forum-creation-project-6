const ForumHeader = () => {
  return (
    <div className="border-b border-border bg-card py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">
            <span className="text-accent">4</span>chan
          </h1>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">News</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Rules</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ForumHeader;
