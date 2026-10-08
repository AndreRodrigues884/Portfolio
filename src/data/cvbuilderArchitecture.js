// Data for the CV Builder architecture map (nodes, edges and walkthrough).
// Content from "cvbuilder_architecture_map.html"; coordinates are in the SVG viewBox below.

export const VIEWBOX = [1000, 530]
export const H = 62

export const COLORS = { ui: '#7dd3fc', api: '#f2b155', db: '#7cc96a', ext: '#ff6b86' }

export const LAYER = { ui: 'Frontend · Next.js', api: 'API routes · Vercel serverless', db: 'Supabase · PostgreSQL', ext: 'External service' }

export const LEGEND = { ui: 'Frontend', api: 'API routes', db: 'Supabase', ext: 'External services' }

export const CHIPS = { review: 'AI Review with a PDF upload' }

// Background lanes: [x, y, width, height, label]
export const LANES = [
  [8, 20, 224, 492, 'FRONTEND · NEXT.JS'],
  [246, 20, 236, 492, 'API ROUTES · VERCEL'],
  [496, 20, 236, 492, 'SUPABASE · POSTGRESQL'],
  [746, 20, 246, 492, 'EXTERNAL SERVICES'],
]

export const N = {
  client: { x: 20, y: 70, w: 200, layer: 'ui', label: 'Client components', sub: 'React · Zustand · lazy steps', title: 'React client components',
    file: 'Zustand store, lazy-loaded wizard steps', talks: 'API routes, through fetch()',
    role: 'The interactive part of the app: the CV wizard and the AI tools. State lives in a Zustand store, the profile is cached for 10 minutes, and each wizard step is lazy-loaded with Suspense.',
    code: `useCVStore() → { cvData, setStep }
useProfile()  → cache 10 min
dynamic(() => import('./step-personal'))` },
  server: { x: 20, y: 250, w: 200, layer: 'ui', label: 'Server components', sub: 'ISR 5 min · no hydration', title: 'Next.js server components',
    file: 'App Router pages', talks: 'Supabase',
    role: 'Rendered on the server on Vercel, with no client JavaScript and no hydration. Pages are regenerated at most every 5 minutes (ISR).',
    code: `export const revalidate = 300
const { data } = await supabase
  .from('profiles').select('full_name')
  .eq('id', user.id).single()` },
  middleware: { x: 258, y: 70, w: 212, layer: 'api', label: 'Middleware', sub: 'middleware.ts · JWT cookie', title: 'Auth middleware',
    file: 'middleware.ts', talks: 'Supabase Auth',
    role: 'Runs before the routes. It creates a Supabase server client, reads the JWT from the cookies (@supabase/ssr) and redirects to /login when there is no user.',
    code: `middleware.ts → createServerClient()
  → supabase.auth.getUser()
  → redirect('/login') if !user

src/lib/supabase/client.ts  ← browser
src/lib/supabase/server.ts  ← API routes` },
  ratelimit: { x: 258, y: 160, w: 212, layer: 'api', label: 'Auth + rate limit', sub: 'every AI route runs this first', title: 'Auth + rate limit',
    file: 'shared by every AI route', talks: 'Supabase Auth, rate_limits table',
    role: 'Every AI route starts by confirming the user and checking their quota in the rate_limits table, for example 10 requests per hour on AI Review. Over the limit, the route answers 429.',
    code: `const { user } = await supabase.auth.getUser()
const { allowed } = await checkRateLimit(
  user.id, '/api/ai/review'  // 10 req/hr
)` },
  parsepdf: { x: 258, y: 250, w: 212, layer: 'api', label: 'parse-pdf route', sub: 'POST /api/ai/parse-pdf', title: 'Route: POST /api/ai/parse-pdf',
    file: '/api/ai/parse-pdf', talks: 'Mistral OCR',
    role: 'Receives the uploaded PDF as FormData and sends it to Mistral OCR to get the CV text as markdown.' },
  review: { x: 258, y: 340, w: 212, layer: 'api', label: 'review route', sub: 'POST /api/ai/review', title: 'Route: POST /api/ai/review',
    file: '/api/ai/review', talks: 'AI cache, Groq',
    role: 'Runs the AI Review on the CV text. Before calling the model, it checks whether the same text was already reviewed.' },
  cache: { x: 258, y: 430, w: 212, layer: 'api', label: 'AI cache check', sub: 'text_hash → ai_reviews', title: 'AI cache check',
    file: 'getCachedReview', talks: 'ai_reviews table, Groq (only on a miss)',
    role: 'Hashes the CV text and looks it up in ai_reviews. A hit answers in about 493 ms without spending any Groq credits; a miss calls Groq and takes around 6 s.',
    code: `const hash = text.reduce((h, c) =>
  ((h << 5) - h) + c.charCodeAt(0)|0, 0)
const cached = await getCachedReview(
  user.id, cvText)  // → ai_reviews table` },
  auth: { x: 508, y: 70, w: 212, layer: 'db', label: 'Supabase Auth', sub: 'JWT cookies · @supabase/ssr', title: 'Supabase Auth',
    file: 'src/lib/supabase/client.ts, server.ts', talks: 'Middleware, API routes',
    role: 'Handles sign-in and issues the JWT kept in cookies through @supabase/ssr. There is one Supabase client for the browser and one for the API routes.' },
  tables: { x: 508, y: 160, w: 212, layer: 'db', label: 'PostgreSQL tables', sub: '14 tables · RLS · indexed', title: 'Core tables',
    file: 'Supabase (PostgreSQL)', talks: 'API routes, server components',
    role: 'Fourteen tables with Row Level Security enforced on all of them. Every foreign key and filter column is indexed, including text_hash, which powers the AI cache.',
    code: `profiles, cvs, cv_experiences
cv_education, cv_skills, cv_languages
cv_projects, cv_certifications
ai_reviews (+ text_hash for cache)
job_matches, career_plans
interview_sessions, interview_questions
job_applications, rate_limits

idx_cvs_user_id
idx_cv_experiences_cv_id
idx_ai_reviews_text_hash     ← cache
idx_rate_limits_user_id_endpoint
idx_job_applications_status` },
  puppeteer: { x: 758, y: 70, w: 222, layer: 'ext', label: 'Puppeteer', sub: 'CV data → PDF bytes', title: 'Puppeteer: PDF export',
    file: 'generateCVHtml', talks: 'The CV data',
    role: 'Turns the CV into a PDF: the CV data is rendered as HTML in a headless browser and printed as an A4 PDF.',
    code: `const browser = await puppeteer.launch(
  { headless: true,
    args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setContent(generateCVHtml(
  { cv, experiences, education,
    skills, languages }))
const pdf = await page.pdf(
  { format: 'A4', printBackground: true })` },
  mistral: { x: 758, y: 250, w: 222, layer: 'ext', label: 'Mistral OCR', sub: 'PDF → markdown', title: 'Mistral OCR',
    file: 'mistral-ocr-latest', talks: 'parse-pdf route',
    role: 'Extracts the text of an uploaded PDF as markdown, for about €0.001 per page. The file is deleted from Mistral after processing.',
    code: `const uploaded = await mistral.files.upload(
  { file: { fileName, content: buffer },
    purpose: 'ocr' })
const { url } = await mistral.files
  .getSignedUrl({ fileId: uploaded.id })
const result = await mistral.ocr.process({
  model: 'mistral-ocr-latest',
  document: { type: 'document_url', documentUrl: url }
})` },
  groq: { x: 758, y: 430, w: 222, layer: 'ext', label: 'Groq API', sub: 'LLaMA 3.3 70B', title: 'Groq API',
    file: 'llama-3.3-70b-versatile', talks: 'AI routes (only on a cache miss)',
    role: 'Runs LLaMA 3.3 70B for AI Review, Job Match, Interview Prep and Career Copilot, always asking for a JSON object back. Runs on the free tier (14.4k requests a day).',
    code: `const { choices } = await groq.chat
  .completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: reviewSystemPrompt },
      { role: 'user',   content: reviewUserPrompt(text, jobCtx) }
    ],
    response_format: { type: 'json_object' }
  })` },
}

export const EDGES = [
  ['client', 'middleware'],
  ['middleware', 'ratelimit'], ['ratelimit', 'parsepdf'], ['parsepdf', 'review'], ['review', 'cache'],
  ['middleware', 'auth'], ['ratelimit', 'tables'], ['cache', 'tables'],
  ['parsepdf', 'mistral'], ['cache', 'groq'],
]

export const EDGE_LABELS = [
  { x: 506, y: 272, text: 'PDF → markdown' },
  { x: 506, y: 452, text: 'only on a cache miss' },
]

export const S = {
  review: { name: 'AI Review with a PDF upload', steps: [
    { at: 'client', title: 'The user uploads CV.pdf',
      text: 'The browser sends the file as FormData.',
      code: 'POST /api/ai/parse-pdf   (FormData: CV.pdf)' },
    { from: 'client', at: 'middleware', title: 'The middleware checks the session',
      text: 'The JWT cookie is read before any route runs. Without an authenticated user, the request is redirected to /login.' },
    { from: 'middleware', at: 'auth', title: 'Supabase confirms the user',
      text: 'supabase.auth.getUser() validates the token against Supabase Auth.' },
    { from: 'middleware', at: 'ratelimit', title: 'Rate limit check',
      text: 'parse-pdf allows 20 requests per hour. Over the limit, the route answers 429.' },
    { from: 'ratelimit', at: 'tables', title: 'Quota read from rate_limits',
      text: 'The counter for this user and endpoint lives in the rate_limits table, indexed by user and endpoint.' },
    { from: 'ratelimit', at: 'parsepdf', title: 'Allowed: the route takes the PDF',
      text: 'The parse-pdf route receives the uploaded file.' },
    { from: 'parsepdf', at: 'mistral', title: 'Mistral OCR extracts the text',
      text: 'The PDF is uploaded to Mistral, processed with mistral-ocr-latest and returned as markdown. The file is then deleted from Mistral.' },
    { from: 'mistral', at: 'review', title: 'The text goes to AI Review',
      text: 'The extracted text is sent to the review route.',
      code: 'POST /api/ai/review' },
    { from: 'review', at: 'cache', title: 'A hash of the CV text',
      text: 'The route hashes the text before calling any model.' },
    { from: 'cache', at: 'tables', title: 'Look it up in ai_reviews',
      text: 'The hash is searched in ai_reviews.text_hash, which has its own index.' },
    { from: 'tables', at: 'cache', title: 'Cache hit or miss',
      text: 'On a hit, the stored review comes back in about 493 ms and no Groq credits are spent. On a miss, the route calls Groq.' },
    { from: 'cache', at: 'groq', title: 'Groq analyses the CV',
      text: 'LLaMA 3.3 70B reviews the CV and returns a JSON object with the ATS score, strengths and keywords. This takes around 6 s.',
      code: '{ "ats_score": …, "strengths": […], "keywords": […] }' },
    { from: 'groq', at: 'tables', title: 'Saved for next time',
      text: 'The result is stored in ai_reviews together with its text_hash, so the same CV is answered from the cache next time.' },
    { from: 'cache', at: 'client', title: 'The review reaches the browser',
      text: 'The result is shown to the user. Zustand does not keep it, because it is a one-off result.' },
  ] },
}
