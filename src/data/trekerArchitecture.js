// Data for the Treker architecture map (nodes, edges and walkthroughs).
// Content from the treker "Mapa de Arquitetura" generated from the repository on 2026-10-12;
// code excerpts are summarised copies of the real files. Coordinates are in the SVG viewBox below.

export const VIEWBOX = [1000, 700]
export const H = 62

export const COLORS = { ui: '#7dd3fc', next: '#c4b5fd', lib: '#f2b155', db: '#7cc96a' }

export const LAYER = { ui: 'Browser · Client Components', next: 'Next.js 16 · server', lib: 'lib/ · no UI', db: 'Supabase · Postgres + RLS' }

export const LEGEND = { ui: 'Client Components', next: 'Next.js server', lib: 'lib/ (validation, derive)', db: 'Supabase' }

export const CHIPS = { pr: 'Save a session that beats a PR', expired: 'Session expired', invalid: 'Validation failed' }

// Background lanes: [x, y, width, height, label]
export const LANES = [
  [8, 20, 240, 660, 'BROWSER'],
  [262, 20, 476, 660, 'NEXT.JS 16 · VERCEL'],
  [752, 20, 240, 660, 'SUPABASE'],
]

export const N = {
  card: { x: 20, y: 70, w: 216, layer: 'ui', label: 'ExerciseCard', sub: 'the "OK" button of a set', title: 'ExerciseCard',
    file: 'src/components/gym/exercise-card.tsx', talks: 'WorkoutSessionProvider',
    role: 'Confirms one set. It validates weight and reps locally and writes them to the session context. No network request.',
    code: `function handleConfirm() {
  ...
  setPendingSet(exercise.id, activeSet, {
    weightKg: parsedWeight,
    reps: parsedReps,
    executionType: "straight",
    difficulty,
  });
  setActiveSet(null);
}` },
  session: { x: 20, y: 160, w: 216, layer: 'ui', label: 'WorkoutSessionProvider', sub: 'staged sets · localStorage', title: 'WorkoutSessionProvider',
    file: 'src/components/gym/session-context.tsx', talks: 'ExerciseCard, SaveSessionButton, localStorage',
    role: 'A React Context that collects the staged sets in memory and mirrors them to localStorage for 7 days, so they survive a mobile tab being discarded. While sets are unsaved, WorkoutGuardProvider warns before leaving the page.',
    code: `const setPendingSet = useCallback(
  (exerciseId, setNumber, data) => {
    setPending((prev) => ({ ...prev, [keyFor(exerciseId, setNumber)]: data }));
  },
  [],
);
// a separate effect writes { savedAt, pending } to localStorage` },
  savebtn: { x: 20, y: 250, w: 216, layer: 'ui', label: 'SaveSessionButton', sub: 'useActionState', title: 'SaveSessionButton',
    file: 'src/components/gym/save-session-button.tsx', talks: 'saveSessionAction',
    role: 'Submits the form to saveSessionAction through useActionState, clears the staging on success and opens the achievements modal by comparing the new state during render (not in a useEffect, by a project lint rule).',
    code: `const [state, formAction, isPending] = useActionState(
  async (prevState, formData) => {
    const result = await saveSessionAction(muscleGroup, pending, prevState, formData);
    if (result?.status === "success") clearPending();
    return result;
  },
  null,
);
if (state !== lastState) {
  setLastState(state);
  setShowAchievements(state?.status === "success" && (state.prs?.length ?? 0) > 0);
}` },

  proxy: { x: 274, y: 70, w: 216, layer: 'next', label: 'proxy.ts', sub: 'updateSession on every request', title: 'proxy.ts and updateSession',
    file: 'src/proxy.ts, src/lib/supabase/middleware.ts', talks: 'Supabase Auth',
    role: 'In Next.js 16 the old middleware.ts is called proxy.ts. It runs before any page or Server Action and calls supabase.auth.getUser(), which validates the token against the Auth server (not just the cookie) and rewrites the cookies on the response.',
    code: `export async function proxy(request: NextRequest) {
  return updateSession(request);
}

// lib/supabase/middleware.ts
// getUser() must run here: getSession() would trust
// the cookie without revalidating it with Supabase Auth.
await supabase.auth.getUser();
return supabaseResponse;` },
  page: { x: 274, y: 160, w: 216, layer: 'next', label: 'Gym page', sub: 'gym/[muscleGroup]/page.tsx', title: 'Server Component: gym/[muscleGroup]',
    file: 'src/app/dashboard/gym/[muscleGroup]/page.tsx', talks: 'queries, WorkoutSessionProvider',
    role: 'Entry point of a workout. It checks the user and that the gym modality is active, loads routines and exercises, and mounts the WorkoutSessionProvider. Heavy charts stream in their own Suspense boundary.',
    code: `const user = await getCurrentUser();
if (!user) redirect("/login");

const profile = await getProfile(user.id);
if (!profile?.modalities.includes("gym")) redirect("/dashboard");

return (
  <WorkoutSessionProvider userId={user.id} scopeKey={group} ...>
    <SaveSessionButton muscleGroup={group} />
    <Suspense fallback={...}><RoutineCharts ... /></Suspense>
  </WorkoutSessionProvider>
);` },
  queries: { x: 274, y: 250, w: 216, layer: 'lib', label: 'queries.ts', sub: 'React cache() per request', title: 'Queries and the server client',
    file: 'src/lib/supabase/queries.ts, src/lib/supabase/server.ts', talks: 'Supabase',
    role: 'React cache() dedupes repeated calls within one request, so layout.tsx and page.tsx can both call getCurrentUser() without a second round-trip. The server client is created per request from its cookies, never as a singleton.',
    code: `export const getCurrentUser = cache(async () => {
  const supabase = await createClient();
  // safe to use getSession() here: proxy.ts already called
  // getUser() (validated by the server) for this request.
  const { data } = await supabase.auth.getSession();
  return data.session?.user ?? null;
});` },
  action: { x: 274, y: 340, w: 216, layer: 'next', label: 'saveSessionAction', sub: 'lib/actions/gym.ts', title: 'Server Action: saveSessionAction',
    file: 'src/lib/actions/gym.ts', talks: 'Supabase, Zod schema, derive',
    role: 'The heart of the PR flow and, like every Server Action, the only way to write to the database. It validates every staged set with Zod, detects personal records by comparing against the history as it was before this save, writes the sets, and only then records the PRs (best-effort).',
    code: `const priorBestByExercise = new Map<string, number>();
for (const s of allSets) {
  if (!isPrEligible(s.exercise_id) || s.weight_kg == null) continue;
  const oneRm = estimatedOneRepMax(s.weight_kg, s.reps);
  if (oneRm > (priorBestByExercise.get(s.exercise_id) ?? 0)) {
    priorBestByExercise.set(s.exercise_id, oneRm);
  }
}
// ... same calculation for bestNewByExercise (this save only) ...

// --- nothing is written until here: everything above was reads ---
const { error } = await supabase.from("exercise_sets").upsert(
  rows.map((row) => ({ ...row, user_id: user.id })),
  { onConflict: "exercise_id,session_date,set_number" },
);
if (error) return { status: "error", message: error.message };` },
  achv: { x: 274, y: 430, w: 216, layer: 'next', label: 'Achievements page', sub: 'dashboard/achievements', title: 'Server Component: achievements',
    file: 'src/app/dashboard/achievements/page.tsx', talks: 'exercise_prs',
    role: 'Shows PRs and volume milestones. Each section (gym, running, swimming) runs in its own Suspense boundary and can be filtered by modality on the client, without reloading.',
    code: `async function PrHistorySection({ userId }) {
  const [allPrs, exercises] = await Promise.all([
    getExercisePrs(userId),
    getAllExercises(userId),
  ]);
  // "current bests board": the latest row per exercise is always
  // the best, because a row is only inserted when it beats the last one.
  const prs = latestPrPerExercise(allPrs);
  ...
}` },
  zod: { x: 510, y: 520, w: 216, layer: 'lib', label: 'setLogSchema', sub: 'lib/validation/gym.ts · Zod', title: 'Validation with Zod',
    file: 'src/lib/validation/gym.ts', talks: 'saveSessionAction',
    role: 'The single source of truth for what a valid set looks like: the same rule that rejects a malicious request also catches a UI bug.',
    code: `export const setLogSchema = z.object({
  exerciseId: z.string().uuid(),
  setNumber: z.coerce.number().int().min(1),
  weightKg: z.number().min(0).max(1000).nullable(),
  reps: z.coerce.number().int().min(0).max(600),
  executionType: z.enum(executionTypeValues),
  difficulty: z.enum(difficultyValues),
});` },
  derive: { x: 510, y: 610, w: 216, layer: 'lib', label: 'estimatedOneRepMax', sub: 'lib/gym/derive.ts · pure', title: '1RM calculation (pure function)',
    file: 'src/lib/gym/derive.ts', talks: 'Nothing: pure function, no I/O',
    role: 'The Epley formula estimates the one-rep max from any weight × reps. A pure function with no I/O, fully testable.',
    code: `export function estimatedOneRepMax(weightKg: number, reps: number): number {
  if (reps <= 0) return 0;
  return weightKg * (1 + reps / 30);
}` },

  auth: { x: 764, y: 70, w: 216, layer: 'db', label: 'Supabase Auth', sub: 'getUser() · cookies', title: 'Supabase Auth',
    file: 'Supabase project', talks: 'proxy.ts, Server Actions',
    role: 'Validates the session token. proxy.ts revalidates it on every request, and saveSessionAction checks it again before writing anything.' },
  exercises: { x: 764, y: 250, w: 216, layer: 'db', label: 'exercises', sub: 'muscle_group enum', title: 'Table: exercises',
    file: 'supabase/migrations/20260909020000_gym.sql', talks: 'Server Components, saveSessionAction',
    role: 'An exercise configured by the user: name, target sets and reps, and whether it tracks load. muscle_group is a fixed enum.',
    code: `create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  muscle_group public.muscle_group not null,
  name text not null,
  sets int not null check (sets > 0),
  tracks_load boolean not null default true,
  updated_at timestamptz not null default now()
);` },
  sets: { x: 764, y: 340, w: 216, layer: 'db', label: 'exercise_sets', sub: 'unique key · idempotent upsert', title: 'Table: exercise_sets',
    file: 'supabase/migrations/20260909020000_gym.sql', talks: 'saveSessionAction',
    role: 'One saved set. The unique key makes "Save session" an idempotent upsert instead of an ever-growing log. A shared set_updated_at trigger keeps updated_at correct, and RLS only lets each user touch their own rows.',
    code: `create table public.exercise_sets (
  ...
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  session_date date not null default current_date,
  set_number int not null check (set_number > 0),
  weight_kg numeric(6, 2),
  reps int not null check (reps >= 0),
  unique (exercise_id, session_date, set_number)
);` },
  prs: { x: 764, y: 430, w: 216, layer: 'db', label: 'exercise_prs', sub: 'append-only · RLS', title: 'Table: exercise_prs (append-only)',
    file: 'supabase/migrations/20260918000000_achievements.sql', talks: 'saveSessionAction, achievements page',
    role: 'The permanent history of personal records. There are select and insert policies (auth.uid() = user_id) but no update policy, so a PR can never be edited once recorded: any UPDATE affects 0 rows.',
    code: `create table public.exercise_prs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  exercise_id uuid not null references public.exercises (id) on delete cascade,
  session_date date not null,
  weight_kg numeric(6, 2) not null,
  reps integer not null,
  one_rep_max numeric(7, 2) not null,
  created_at timestamptz not null default now()
);` },
}

export const EDGES = [
  ['card', 'session'], ['session', 'savebtn'], ['page', 'session'],
  ['proxy', 'page'], ['page', 'queries'], ['savebtn', 'action'], ['action', 'achv'],
  ['proxy', 'auth'], ['queries', 'auth'],
  ['action', 'exercises'], ['action', 'sets'], ['action', 'prs'], ['achv', 'prs'],
  ['action', 'zod'], ['action', 'derive'],
]

export const EDGE_LABELS = [
  { x: 528, y: 92, text: 'getUser() on every request' },
  { x: 640, y: 362, text: 'anon key + RLS' },
]

export const RULES = {
  title: 'Where each rule lives',
  headers: ['Rule', 'Browser (helps the user)', 'Server and Postgres (decide)'],
  intro: 'There is no authorisation layer of its own: the browser improves the experience, Zod validates in the Server Action, and Postgres enforces ownership through Row Level Security.',
  rows: [
    ['Set values', '<code>ExerciseCard</code> checks weight and reps before staging', '<code>setLogSchema</code> (Zod) in <code>saveSessionAction</code>, all-or-nothing'],
    ['Ownership', 'Only the user\'s own data is shown', 'RLS on every table: <code>auth.uid() = user_id</code>'],
    ['PR history', 'The achievements modal celebrates a new PR', '<code>exercise_prs</code> is append-only: no update policy'],
    ['Unsaved work', '<code>WorkoutGuardProvider</code> warns before leaving; localStorage backup', 'Nothing is written until "Save session"'],
  ],
  outro: 'Every write goes through a Server Action, and RLS is the last line of defence even if a check upstream were ever skipped.',
}

export const S = {
  pr: { name: 'Save a session that beats a PR · Bench Press', steps: [
    { at: 'card', title: 'Confirm the set ("OK")',
      text: 'The user enters 82.5 kg × 5 reps and taps OK. handleConfirm() validates locally and calls setPendingSet: the set only lives in React Context, no network yet.',
      code: `setPendingSet("ex_bench_press", 3, {
  weightKg: 82.5, reps: 5, executionType: "straight", difficulty: "hard",
});` },
    { from: 'card', at: 'session', title: 'Backed up in localStorage',
      text: 'An effect mirrors the new pending map to localStorage, so the sets survive a mobile tab being discarded from memory.',
      code: `// key: treker:pending-session:<userId>:chest
{ "savedAt": 1760000000000,
  "pending": { "ex_bench_press:3": { "weightKg": 82.5, "reps": 5, ... } } }` },
    { from: 'session', at: 'savebtn', title: 'Click "Save session"',
      text: 'The button submits the form, which invokes the Server Action through useActionState. The request carries the browser\'s session cookies.',
      code: `<form id="save-session-form" action={formAction}>
  <button type="submit">Save session</button>
</form>` },
    { from: 'proxy', at: 'auth', title: 'Session validated before the page',
      text: 'Before the Server Action runs, proxy.ts had already run on the navigation request and called supabase.auth.getUser(): the session is fresh.' },
    { from: 'savebtn', at: 'action', title: 'The Server Action runs',
      text: 'saveSessionAction receives the map of sets staged in the browser.' },
    { from: 'action', at: 'auth', title: 'Authenticated user',
      text: 'The action checks the user again before doing anything else.',
      code: `const { data: { user } } = await supabase.auth.getUser();
if (!user) return { status: "error", message: "Not authenticated." };` },
    { from: 'action', at: 'sets', title: 'Read the whole history',
      text: 'In parallel, it loads this muscle group\'s exercises and the user\'s entire set history, because PRs are global, not per muscle group.',
      code: `const [{ data: groupExercises }, allExercises, allSets] = await Promise.all([
  supabase.from("exercises").select("id")
    .eq("user_id", user.id).eq("muscle_group", muscleGroup),
  getAllExercises(user.id),
  getAllExerciseSets(user.id),
]);` },
    { from: 'action', at: 'zod', title: 'Validate every staged set',
      text: 'Each entry of the pending map goes through setLogSchema.safeParse. This set (82.5 kg × 5) passes.' },
    { from: 'action', at: 'derive', title: 'Compare before vs. after',
      text: 'For Bench Press, the previous best was 80 kg × 5, an estimated 1RM of 93.3 kg (Epley). The new set gives 96.25 kg, so it goes into prRows and prsAchieved.',
      code: `const oneRm = estimatedOneRepMax(82.5, 5); // 82.5 * (1 + 5/30) = 96.25
// 96.25 > 93.3 (previous record) → a new PR` },
    { from: 'action', at: 'sets', title: 'Write the sets (upsert)',
      text: 'The actual write. onConflict makes resending the same set (a double click, for example) update instead of duplicate.',
      code: `INSERT INTO exercise_sets (user_id, exercise_id, session_date, set_number, weight_kg, reps, ...)
VALUES ('u_123', 'ex_bench_press', '2026-10-12', 3, 82.5, 5, ...)
ON CONFLICT (exercise_id, session_date, set_number)
DO UPDATE SET weight_kg = EXCLUDED.weight_kg, reps = EXCLUDED.reps;
-- RLS insert policy checks auth.uid() = user_id → passes` },
    { from: 'action', at: 'prs', title: 'Record the PR (best-effort)',
      text: 'It only runs because the sets were saved without error. A failure here does not turn the save into an error for the user.',
      code: `INSERT INTO exercise_prs (user_id, exercise_id, session_date, weight_kg, reps, one_rep_max)
VALUES ('u_123', 'ex_bench_press', '2026-10-12', 82.5, 5, 96.25);` },
    { from: 'action', at: 'achv', title: 'revalidatePath',
      text: 'The gym page and the achievements page are marked as stale, so their next render reads fresh data.',
      code: `revalidatePath(\`/dashboard/gym/\${muscleGroup}\`);
revalidatePath("/dashboard/achievements");` },
    { from: 'action', at: 'savebtn', title: 'The achievement modal opens',
      text: 'Back in the browser, useActionState receives the new state. The component detects the change during render, clears the staging and opens the AchievementsModal.',
      code: `return {
  status: "success",
  prs: [{ exerciseName: "Bench Press", weightKg: 82.5, reps: 5, oneRepMax: 96.25 }],
};
// → "🎉 Bench Press — 82.5kg × 5 (1RM est. 96.3kg)"` },
    { from: 'achv', at: 'prs', title: 'The next visit to Achievements',
      text: 'Thanks to revalidatePath, getExercisePrs already returns the new row, and latestPrPerExercise shows it as the new current best for Bench Press.' },
  ] },
  expired: { name: 'Session expired before "Save session"', steps: [
    { from: 'proxy', at: 'auth', title: 'Valid when the page loaded',
      text: 'getUser() ran on the page\'s navigation request, but the refresh token can be revoked afterwards: a logout on another device, or it simply expired.' },
    { from: 'savebtn', at: 'action', title: 'getUser() returns null',
      text: 'The action stops before any write: no sets and no PRs are saved.',
      code: `const { data: { user } } = await supabase.auth.getUser();
if (!user) return { status: "error", message: "Not authenticated." };
// no row is written` },
    { from: 'action', at: 'savebtn', title: 'The error is shown, nothing is lost',
      text: 'The pending map in memory and localStorage is not cleared, because clearPending() only runs on success. The user signs in again and retries.',
      code: `{state?.status === "error" && (
  <p role="alert" className="text-red-400">{state.message}</p>
)}` },
  ] },
  invalid: { name: 'Validation failed · stale or impossible data', steps: [
    { from: 'savebtn', at: 'action', title: 'Stale exercises are skipped',
      text: 'If an exercise was deleted in another tab or device after the page loaded, its sets are dropped instead of aborting the whole save.',
      code: `const validExerciseIds = new Set((groupExercises ?? []).map((e) => e.id));
...
if (!validExerciseIds.has(exerciseId)) {
  staleCount++;
  continue; // skip this set, don't abort the save
}` },
    { from: 'action', at: 'zod', title: 'Impossible data fails the parse',
      text: 'For example reps: -1, corrupted in localStorage, breaks z.coerce.number().int().min(0). The whole action stops: no set from this save is written, not even the valid ones.',
      code: `const parsed = setLogSchema.safeParse({ exerciseId, setNumber, weightKg, reps: -1, ... });
if (!parsed.success) {
  return { status: "error", message: parsed.error.issues[0].message };
}
// all-or-nothing, never partial` },
    { from: 'action', at: 'sets', title: 'RLS, the last line of defence',
      text: 'Even if validation were ever bypassed, Postgres protects the data: an insert with another account\'s user_id is rejected.',
      code: `create policy "Users can insert their own exercise sets"
  on public.exercise_sets for insert
  with check (auth.uid() = user_id);` },
  ] },
}
