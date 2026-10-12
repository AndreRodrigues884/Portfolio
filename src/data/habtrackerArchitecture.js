// Data for the HabTracker architecture map (nodes, edges and walkthroughs).
// Built from the project's README and its folder structure (no source code), so nodes
// describe layers and folders rather than specific files.

export const VIEWBOX = [1000, 560]
export const H = 62

export const COLORS = { app: '#61dafb', api: '#f2b155', store: '#ff6b86', db: '#7cc96a' }

export const LAYER = { app: 'Mobile app · React Native', api: 'Backend · Node.js + Express', store: 'Storage', db: 'Database' }

export const LEGEND = { app: 'Mobile app', api: 'Backend API', store: 'File & local storage', db: 'Database' }

export const CHIPS = { complete: 'Complete a habit', login: 'Sign in · JWT', avatar: 'Upload an avatar' }

// Background lanes: [x, y, width, height, label]
export const LANES = [
  [8, 20, 250, 520, 'MOBILE APP · REACT NATIVE + EXPO'],
  [272, 20, 470, 520, 'BACKEND · NODE.JS + EXPRESS'],
  [756, 20, 236, 520, 'DATABASE'],
]

export const N = {
  nav: { x: 20, y: 70, w: 226, layer: 'app', label: 'Navigation', sub: 'routes/ · React Navigation', title: 'Navigation (React Navigation)',
    file: 'frontend/routes/', talks: 'Screens',
    role: 'Maps the app\'s screens with React Navigation and decides which one is shown, from onboarding to the daily tracking and profile screens.' },
  screens: { x: 20, y: 160, w: 226, layer: 'app', label: 'Screens', sub: 'screens/ + components/', title: 'Screens and components',
    file: 'frontend/screens/, frontend/components/', talks: 'Contexts and hooks',
    role: 'What the user sees and taps: onboarding, habit creation with categories, one-tap daily tracking, progress charts, achievements and profile. Screens are built from reusable components and styled from styles/.' },
  state: { x: 20, y: 250, w: 226, layer: 'app', label: 'Contexts + hooks', sub: 'contexts/ · hooks/', title: 'Contexts and custom hooks',
    file: 'frontend/contexts/, frontend/hooks/', talks: 'Screens, API services',
    role: 'React contexts hold the state several screens share, and custom hooks package the logic screens reuse, so a screen asks a hook for data instead of calling the API directly. Shared shapes are typed in types/ with TypeScript.' },
  api: { x: 20, y: 340, w: 226, layer: 'app', label: 'API services', sub: 'services/ · HTTP client', title: 'API services (HTTP client)',
    file: 'frontend/services/', talks: 'The backend API, local storage',
    role: 'The single place where the app talks to the backend over HTTP, sending the JWT with each request and handling the refresh token when a session needs renewing.' },
  storage: { x: 20, y: 430, w: 226, layer: 'store', label: 'AsyncStorage', sub: 'local persistence', title: 'AsyncStorage (on the device)',
    file: 'device storage', talks: 'API services',
    role: 'Keeps data on the device so the app stays usable offline and syncs with the backend when the connection returns.' },

  routes: { x: 284, y: 70, w: 212, layer: 'api', label: 'Routes', sub: 'routes/ · Express routers', title: 'Express routes',
    file: 'backend/routes/', talks: 'Middlewares, controllers',
    role: 'Map each URL and HTTP verb to its controller, grouped by feature: authentication, habits, profile and achievements.' },
  middlewares: { x: 284, y: 160, w: 212, layer: 'api', label: 'Middlewares', sub: 'JWT · rate limit · Multer', title: 'Middlewares',
    file: 'backend/middlewares/', talks: 'Routes, controllers, uploads',
    role: 'Run before the controller: verify the JWT, apply rate limiting and account protection, and handle file uploads with Multer. A request that fails here never reaches the business logic.' },
  controllers: { x: 284, y: 250, w: 212, layer: 'api', label: 'Controllers', sub: 'controllers/ · request handlers', title: 'Controllers',
    file: 'backend/controllers/', talks: 'Services',
    role: 'Read the request, validate it, call the right service and send the JSON response, with consistent error handling.' },
  services: { x: 284, y: 340, w: 212, layer: 'api', label: 'Services', sub: 'services/ · business logic', title: 'Services (business logic)',
    file: 'backend/services/, backend/utils/', talks: 'Models',
    role: 'Where the rules live: completing a habit updates the streak, awards XP, levels the user up and unlocks achievements automatically.' },
  models: { x: 284, y: 430, w: 212, layer: 'api', label: 'Models', sub: 'models/ + enums/', title: 'Data models',
    file: 'backend/models/, backend/enums/', talks: 'MongoDB',
    role: 'Define the shape of every document (users, habits, completions, achievements), with enums for fixed values such as the habit categories (Health, Productivity, Learning, Social, Creativity, Lifestyle) and frequencies.' },
  uploads: { x: 540, y: 160, w: 190, layer: 'store', label: 'Avatar files', sub: 'uploads/avatars · Multer', title: 'Uploaded avatars',
    file: 'backend/uploads/avatars/', talks: 'Middlewares (Multer)',
    role: 'Avatar images uploaded through Multer are stored on the server in uploads/avatars. Achievement and category icons are served from public/icons.' },

  mongodb: { x: 768, y: 430, w: 212, layer: 'db', label: 'MongoDB', sub: 'NoSQL database', title: 'MongoDB',
    file: 'database', talks: 'Models',
    role: 'Stores users, habits, completion history, XP, levels and achievements as documents.' },
}

export const EDGES = [
  ['nav', 'screens'], ['screens', 'state'], ['state', 'api'], ['api', 'storage'],
  ['api', 'routes'],
  ['routes', 'middlewares'], ['middlewares', 'controllers'], ['controllers', 'services'], ['services', 'models'],
  ['middlewares', 'uploads'], ['models', 'mongodb'],
]

export const EDGE_LABELS = [
  { x: 30, y: 332, text: 'REST + JSON · JWT' },
  { x: 506, y: 452, text: 'read / write documents' },
]

export const S = {
  complete: { name: 'Complete a habit · one tap', steps: [
    { at: 'screens', title: 'The user taps a habit',
      text: 'On the daily tracking screen, completing a habit is a single tap with instant feedback.' },
    { from: 'screens', at: 'state', title: 'A hook handles the action',
      text: 'The screen calls a custom hook, which updates the shared state and asks the API services to save the completion.' },
    { from: 'state', at: 'api', title: 'An authenticated request',
      text: 'The API services send the request to the backend with the user\'s JWT attached.' },
    { from: 'api', at: 'routes', title: 'Express matches the route',
      text: 'The habits router maps the URL and verb to the right controller.' },
    { from: 'routes', at: 'middlewares', title: 'Token and rate limit checked',
      text: 'The JWT is verified and the rate limit applied. A missing or invalid token stops the request here.' },
    { from: 'middlewares', at: 'controllers', title: 'The controller takes over',
      text: 'The habits controller validates the request and hands it to the service.' },
    { from: 'controllers', at: 'services', title: 'XP, streaks and achievements',
      text: 'The service records the completion, updates the streak, awards XP, checks for a level-up and unlocks any achievement the user has just earned.' },
    { from: 'services', at: 'models', title: 'The models shape the data',
      text: 'The changes go through the data models: the habit, its completion history and the user\'s XP and achievements.' },
    { from: 'models', at: 'mongodb', title: 'Saved in MongoDB',
      text: 'The documents are written to the database.' },
    { from: 'controllers', at: 'api', title: 'JSON back to the app',
      text: 'The controller answers with the updated habit, XP, level and any new achievement.' },
    { from: 'api', at: 'state', title: 'The reward appears',
      text: 'The shared state updates and the screen shows the new streak and XP, with an animation when a level or badge is unlocked.' },
  ] },
  login: { name: 'Sign in · JWT with refresh tokens', steps: [
    { at: 'screens', title: 'The user signs in',
      text: 'The login screen sends the credentials through the auth context.' },
    { from: 'state', at: 'api', title: 'Credentials go to the API',
      text: 'The API services post the email and password to the backend.' },
    { from: 'api', at: 'routes', title: 'The auth route',
      text: 'The auth router sends the request to its controller.' },
    { from: 'routes', at: 'middlewares', title: 'Account protection',
      text: 'Rate limiting protects the login from repeated attempts.' },
    { from: 'middlewares', at: 'controllers', title: 'Credentials checked',
      text: 'The auth controller asks the service to verify the user.' },
    { from: 'controllers', at: 'services', title: 'Tokens issued',
      text: 'The service checks the credentials against the stored user and issues an access token and a refresh token.' },
    { from: 'services', at: 'mongodb', title: 'The user is looked up',
      text: 'The user document is read from MongoDB through the models.' },
    { from: 'controllers', at: 'api', title: 'Tokens back to the app',
      text: 'The app receives the tokens. From now on every request carries the access token, and the refresh token renews the session when it expires.' },
    { from: 'api', at: 'storage', title: 'The session stays on the device',
      text: 'The session is kept locally, so the user stays signed in between launches.' },
  ] },
  avatar: { name: 'Upload an avatar · Multer', steps: [
    { at: 'screens', title: 'The user picks a photo',
      text: 'On the profile screen, the user chooses a new avatar.' },
    { from: 'screens', at: 'state', title: 'A hook prepares the upload',
      text: 'The profile screen passes the image to a hook, which asks the API services to upload it.' },
    { from: 'state', at: 'api', title: 'Sent as a file upload',
      text: 'The API services send the image to the profile endpoint as a multipart upload, with the JWT.' },
    { from: 'api', at: 'routes', title: 'The profile route',
      text: 'The profile router maps the request to its controller.' },
    { from: 'routes', at: 'middlewares', title: 'Authenticated, then Multer',
      text: 'After the JWT check, Multer reads the uploaded file.' },
    { from: 'middlewares', at: 'uploads', title: 'The file is stored',
      text: 'Multer saves the image in uploads/avatars on the server.' },
    { from: 'middlewares', at: 'controllers', title: 'The controller updates the profile',
      text: 'With the file saved, the profile controller asks the service to update the user.' },
    { from: 'services', at: 'mongodb', title: 'The avatar path is saved',
      text: 'The user document is updated with the new avatar in MongoDB.' },
    { from: 'controllers', at: 'api', title: 'The new avatar appears',
      text: 'The app receives the updated profile and shows the new avatar.' },
  ] },
}
