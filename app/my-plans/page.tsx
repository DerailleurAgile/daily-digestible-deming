// Page to list all reading plans the user has started
import fs from 'fs';
import path from 'path';
import MyPlansList from '@/components/MyPlansList';

async function loadPlans() {
  const base = path.join(process.cwd(), 'content', 'reading-plans');
  try {
    const slugs = await fs.promises.readdir(base, { withFileTypes: true });
    const plans = await Promise.all(
      slugs
        .filter((d) => d.isDirectory())
        .map(async (d) => {
          const metaPath = path.join(base, d.name, 'metadata.json');
          try {
            const raw = await fs.promises.readFile(metaPath, 'utf-8');
            const json = JSON.parse(raw);
            return { slug: d.name, ...json };
          } catch {
            return null;
          }
        })
    );
    return plans.filter(Boolean);
  } catch {
    return [];
  }
}

export default async function MyPlansPage() {
  const plans = await loadPlans();
  return (
    <main className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl mb-6">My Study Plans</h1>
        <MyPlansList plans={plans} />
      </div>
    </main>
  );
}