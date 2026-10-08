// Data for the Learnly architecture map (nodes, edges and walkthroughs).
// Content from "learnly_architecture_map.html"; coordinates are in the SVG viewBox below.

export const VIEWBOX = [1000, 560]
export const H = 62

export const COLORS = { ui: '#ff6b86', cms: '#a78bfa', ai: '#f2b155', db: '#6ea8e0' }

export const LAYER = { ui: 'Client', cms: 'Backend · Directus', ai: 'AI services', db: 'Vector database' }

export const LEGEND = { ui: 'Clients', cms: 'Directus (backend)', ai: 'AI services', db: 'Vector database' }

export const CHIPS = { generate: 'Teacher generates flashcards', study: 'Student opens a deck' }

// Background lanes: [x, y, width, height, label]
export const LANES = [
  [8, 20, 230, 520, 'CLIENTS'],
  [252, 20, 270, 520, 'BACKEND · DIRECTUS 11'],
  [536, 20, 456, 520, 'AI · RAG'],
]

export const N = {
  teacher: { x: 20, y: 70, w: 206, layer: 'ui', label: 'Teacher', sub: 'Directus Studio', title: 'Teacher (Directus Studio)',
    file: 'Directus admin app', talks: 'Directus API',
    role: 'Teachers work directly in Directus: they upload the course PDF to a Deck, start the flashcard generation and approve every AI-generated card before students can see it.' },
  pwa: { x: 20, y: 250, w: 206, layer: 'ui', label: 'Student app', sub: 'Nuxt 4 PWA', title: 'Frontend: Nuxt 4 PWA',
    file: 'composables/useAuth.ts', talks: 'Directus, through its SDK (REST API + JWT)',
    role: 'The student app, built with Nuxt 4, Vue 3, Pinia, Dexie.js and Workbox. It talks to Directus through the REST API with a JWT, and keeps data locally in IndexedDB so it works offline.',
    code: `// useAuth.ts: login
const result = await $directus.login({
  email, password
})
// the SDK stores the JWT automatically` },
  directus: { x: 264, y: 70, w: 246, layer: 'cms', label: 'Directus 11 API', sub: 'REST · JWT · RBAC', title: 'Backend: Directus 11',
    file: 'composables/useDirectus.ts (client side)', talks: 'PostgreSQL, Redis, Flows',
    role: 'Headless CMS, REST API and automation Flows in one service, running on PostgreSQL with Redis. Teachers use it directly; the student app uses it through the SDK.',
    code: `// useDirectus.ts: fetch flashcards
await $directus.request(
  readItems('Flashcards', {
    filter: { deck_id: { _eq: deckId },
              status: { _eq: 'Published' } }
  })
)` },
  flows: { x: 264, y: 160, w: 246, layer: 'cms', label: 'Directus Flows', sub: 'on_deck_* · generate_flashcards', title: 'Directus Flows',
    file: 'on_deck_pdf_uploaded, on_deck_content_saved, generate_flashcards', talks: 'Extensions, Langflow (webhook)',
    role: 'Event-driven automations that orchestrate the pipeline: a PDF upload triggers text extraction, saved content triggers indexing, and the Generate button sends the deck to Langflow. A Run Script step then turns the returned JSON into flashcards.' },
  extract: { x: 264, y: 250, w: 246, layer: 'cms', label: 'extract-document-text', sub: 'custom extension · unpdf', title: 'Extension: extract-document-text',
    file: 'Directus extension', talks: 'AssetsService, the Deck item',
    role: 'A custom Directus extension that reads the uploaded file through AssetsService, extracts its text with unpdf and saves it into the Deck\'s content field.' },
  upsert: { x: 264, y: 340, w: 246, layer: 'cms', label: 'qdrant-upsert', sub: 'extension · 500-char chunks', title: 'Extension: qdrant-upsert',
    file: 'qdrant-upsert/api.ts', talks: 'Ollama, Qdrant',
    role: 'Splits the deck content into 500-character chunks with a 50-character overlap (RecursiveCharacterTextSplitter), gets an embedding for each chunk from Ollama and stores it in Qdrant.' },
  ollama: { x: 560, y: 250, w: 190, layer: 'ai', label: 'Ollama', sub: 'nomic-embed-text', title: 'Ollama: local embeddings',
    file: 'Docker container · port 11434', talks: 'qdrant-upsert, Langflow',
    role: 'Runs locally in Docker and turns each chunk, and each search query, into a 768-dimension vector with nomic-embed-text.',
    code: `// qdrant-upsert extension (api.ts)
const response = await ollamaClient.embed({
  model: env.EMBEDDINGS_MODEL,
  input: chunkText   // 500-char chunk
})
const vector = response.embeddings[0]
// vector.length === 768` },
  qdrant: { x: 560, y: 450, w: 190, layer: 'db', label: 'Qdrant', sub: 'collection Decks · 768d', title: 'Qdrant: vector database',
    file: 'collection: Decks', talks: 'qdrant-upsert, Langflow',
    role: 'Stores the chunk embeddings and runs semantic search with cosine distance. Every point carries the deck it belongs to in parent_id, which is what keeps decks from mixing.',
    code: `// collection: Decks, every point has:
{
  page_content: "SQL é uma linguagem...",
  metadata: {
    parent_id: "4",      // deck_id
    discipline_id: 10,
    type: "courses"
  }
}` },
  langflow: { x: 790, y: 160, w: 190, layer: 'ai', label: 'Langflow', sub: 'RAG flow · webhook', title: 'Langflow: RAG orchestrator',
    file: 'Langflow flow (Deck Context Filter, Parser)', talks: 'Directus Flows, Ollama, Qdrant, Groq',
    role: 'A visual pipeline that receives the deck_id, filters Qdrant to that deck, formats the chunks and sends them to Groq, returning JSON.',
    code: `// Directus webhook to Langflow
{
  "input_value": "gera flashcards sobre
    o deck (parent_id): {{read_deck.id}}",
  "tweaks": {
    "TextInput-YxwGV": {
      "input_value": "{{read_deck.id}}"
    }
  }
}` },
  groq: { x: 790, y: 340, w: 190, layer: 'ai', label: 'Groq', sub: 'llama-3.3-70b', title: 'Groq: external LLM',
    file: 'Groq API', talks: 'Langflow',
    role: 'Receives the formatted chunks and a prompt, and returns JSON with question and answer pairs.',
    code: `// system message sent to Groq
"És um assistente especializado em criar
flashcards pedagógicos. Responde APENAS
com JSON válido, sem markdown:
{\\"flashcards\\":[{\\"question\\":\\"...\\",
\\"answer\\":\\"...\\"}]}"` },
}

export const EDGES = [
  ['teacher', 'directus'], ['pwa', 'directus'],
  ['directus', 'flows'], ['flows', 'extract'], ['extract', 'upsert'],
  ['upsert', 'ollama'], ['upsert', 'qdrant'], ['ollama', 'qdrant'],
  ['flows', 'langflow'], ['langflow', 'ollama'], ['langflow', 'qdrant'], ['langflow', 'groq'],
]

export const EDGE_LABELS = [
  { x: 30, y: 240, text: 'REST API + JWT' },
  { x: 580, y: 184, text: 'webhook (deck_id)' },
  { x: 560, y: 432, text: 'cosine search' },
]

export const S = {
  generate: { name: 'Teacher generates flashcards from a PDF', steps: [
    { from: 'teacher', at: 'flows', title: 'The teacher uploads a PDF',
      text: 'The PDF goes into the pdf_ field of a Deck in Directus. The on_deck_pdf_uploaded flow fires.' },
    { from: 'flows', at: 'extract', title: 'Text extraction',
      text: 'The extract-document-text extension reads the file through AssetsService, extracts the text with unpdf and saves it into the Deck\'s content field.' },
    { from: 'flows', at: 'upsert', title: 'Content saved, indexing starts',
      text: 'The on_deck_content_saved flow detects the change to content and calls upsert_qdrant. RecursiveCharacterTextSplitter splits the text into 500-character chunks with a 50-character overlap.' },
    { from: 'upsert', at: 'ollama', title: 'Each chunk becomes a vector',
      text: 'Ollama receives each chunk and returns a vector of 768 numbers with nomic-embed-text.',
      code: 'PDF (binary) → plain text (unpdf)\n  → chunks (500 chars) → vectors 768d (Ollama)' },
    { from: 'upsert', at: 'qdrant', title: 'Stored in Qdrant',
      text: 'Qdrant stores each point with its parent_id (the deck), discipline_id and page_content.' },
    { from: 'teacher', at: 'flows', title: 'The teacher clicks "Gerar Flashcards"',
      text: 'The generate_flashcards flow fires and reads the deck.' },
    { from: 'flows', at: 'langflow', title: 'The deck goes to Langflow',
      text: 'The flow sends the deck_id to Langflow through a webhook.' },
    { from: 'langflow', at: 'ollama', title: 'The query becomes an embedding',
      text: 'Inside Langflow, the Deck Context Filter builds the filter parent_id = deck_id, and Ollama turns the query into an embedding.' },
    { from: 'langflow', at: 'qdrant', title: 'Only this deck\'s chunks come back',
      text: 'Qdrant runs the search with the parent_id filter and returns the chunks of the right deck, so content from different decks never mixes.' },
    { from: 'langflow', at: 'groq', title: 'Groq writes the flashcards',
      text: 'The Parser formats the chunks and Groq (llama-3.3-70b) returns JSON with question and answer pairs.',
      code: '{"flashcards":[{"question":"...","answer":"..."}]}' },
    { from: 'langflow', at: 'flows', title: 'Flashcards saved as pending',
      text: 'The create_flashcards Run Script parses the JSON, and save_flashcards creates the records in Flashcards.',
      code: '{ status: "pending", generated_by_ai: true }' },
    { from: 'teacher', at: 'directus', title: 'The teacher approves',
      text: 'Each flashcard is reviewed in Directus. Approved cards change to status: Published.' },
    { from: 'directus', at: 'pwa', title: 'Students see the published cards',
      text: 'The student app only requests published flashcards.',
      code: 'GET /items/Flashcards?filter[status][_eq]=Published' },
  ] },
  study: { name: 'Student opens a deck · REST API + JWT', steps: [
    { at: 'pwa', title: 'The student logs in',
      text: 'useAuth calls $directus.login with email and password. The Directus SDK stores the JWT automatically.' },
    { from: 'pwa', at: 'directus', title: 'The app asks for the deck\'s flashcards',
      text: 'useDirectus sends readItems(\'Flashcards\') filtered by deck and by status Published, with the JWT attached.' },
    { from: 'directus', at: 'pwa', title: 'JSON back to the app',
      text: 'Directus answers with the published flashcards as JSON.' },
    { at: 'pwa', title: 'Ready to study, even offline',
      text: 'The cards are kept locally with Dexie.js (IndexedDB), so review sessions keep working without a connection and sync when it returns.' },
  ] },
}
