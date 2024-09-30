import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

const BulletinsPage = async () => {
  const supabase = createClient();
  const { data: bulletins } = await supabase.from('bulletin').select('*');

  return (
    <div>
      <h1>Bulletin boards</h1>
      <div className="grid grid-cols-4 gap-4">
        {bulletins?.map((bulletin) => (
          <Link
            className="flex max-h-32"
            key={bulletin.id}
            href={`/bulletin/${bulletin.id}`}
          >
            <div className="p-5 border border-solid hover:border-primary">
              <div title={bulletin.title} className="font-bold line-clamp-1">
                {bulletin.title}
              </div>
              <div className="mt-2 line-clamp-2">{bulletin.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BulletinsPage;
