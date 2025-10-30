import Icon from '@/components/ui/icon';

const ForumHeader = () => {
  return (
    <div className="border-4 border-primary bg-primary text-primary-foreground py-3 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-wider flex items-center gap-2">
          <Icon name="MessageCircle" size={32} />
          РЕТРО ФОРУМ
        </h1>
        <p className="text-sm mt-1 opacity-90">Добро пожаловать в эпоху ранних форумов!</p>
      </div>
    </div>
  );
};

export default ForumHeader;
