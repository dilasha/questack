import QuestCard from '@/components/quest-card';
import { createClient } from '@/utils/supabase/server';
import { Plus } from 'lucide-react';

type QuestProps = {
  id: number;
  title: string;
  description: string;
  starts_at: string;
  ends_at: string;
  frequency: string;
  resets_at: string;
  created_at: string;
  sort_order: number;
};

type PhaseProps = {
  id: number;
  title: string;
  created_at: string;
  sort_order: number;
  quest: Array<QuestProps>;
};

type BulletinProps = {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
  phase: Array<PhaseProps>;
};

const BulletinPage = async ({ params }: { params: { id: number } }) => {
  const supabase = createClient();

  const { data } = await supabase
    .from('bulletin')
    .select('*, phase(*, quest(*))')
    .eq('id', params.id)
    .single();

  const bulletin: BulletinProps = data;

  return (
    <div className="overflow-x-scroll">
      <h1>{bulletin.title}</h1>
      <div className="flex gap-4">
        {bulletin.phase?.map((phase) => (
          <div
            key={`phase-${phase.id}`}
            className="w-72 border bg-muted p-2 flex flex-col gap-4"
          >
            <div className="font-bold">{phase.title}</div>
            {phase?.quest?.map((quest) => (
              <QuestCard key={quest.id} quest={quest} />
            ))}
            <div className="flex gap-1">
              <Plus /> Add quest
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletinPage;
