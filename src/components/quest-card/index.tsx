import { Checkbox } from '../ui/checkbox';

export type Quest = {
  title: string;
  description?: string;
  sort_order: number;
};

const QuestCard = async ({ quest }: { quest: Quest }) => {
  return (
    <div className="flex items-start gap-2 w-full border bg-background p-3">
      <Checkbox className="mt-1" />
      <div>{quest.title}</div>
    </div>
  );
};

export default QuestCard;
