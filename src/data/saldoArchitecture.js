// Data for the Saldo architecture map (nodes, edges and request walkthroughs).
// Extracted from "Saldo Architecture Map.html"; coordinates are in the SVG viewBox (1000 x 625).

export const LAYER = {ng:"Angular · browser", net:"Network", sp:"Spring Boot · server", err:"Spring Boot · error path", db:"Database"};
export const N = {
  router:{x:20,y:70,w:210,layer:"ng",label:"Router + guards",sub:"app.routes.ts · guards",file:"app.routes.ts, core/auth/auth.guards.ts",title:"Angular Router and guards",
    role:"Maps the URL in the address bar to a component without reloading the page. Before a page opens, guards decide if it may: authGuard sends you to /login when there is no session, adminGuard keeps non-admins out of /utilizadores. Guards only improve the experience; the backend still checks every request.",
    talks:"Components (creates them), AuthService",
    code:`{ path: 'faturas/:id',
  loadComponent: () => import('./features/invoices/invoice-detail/invoice-detail')
    .then(m => m.InvoiceDetail) }

export const authGuard: CanActivateFn = () =>
  inject(AuthService).hasValidSession()
    ? true
    : inject(Router).createUrlTree(['/login']);`},
  component:{x:20,y:160,w:210,layer:"ng",label:"Component",sub:"invoice-detail.ts · .html",file:"features/invoices/invoice-detail/",title:"Angular component",
    role:"One piece of the screen: a TypeScript class with state, plus an HTML template. State lives in signals; when a signal changes, the template re-renders on its own. It handles what the user sees and clicks. It holds no business rules and never talks to the database.",
    talks:"Its template, the Angular service, dialogs, Router",
    code:`protected readonly invoice = signal<Invoice | null>(null);

issue(invoice: Invoice) {
  this.service.issue(invoice.id).subscribe({
    next: updated => this.invoice.set(updated),  // screen updates
    error: e => this.notifications.error(errorMessage(e)),
  });
}`},
  service_ng:{x:20,y:250,w:210,layer:"ng",label:"Angular service",sub:"invoice.service.ts",file:"features/invoices/invoice.service.ts",title:"Angular service (HttpClient)",
    role:"The client of your API, with one method per endpoint. A singleton (providedIn: 'root') injected with inject(). HttpClient returns an Observable, a promise of a future response, and nothing is sent until someone calls subscribe().",
    talks:"HttpClient, which passes every request through the interceptor",
    code:`@Injectable({ providedIn: 'root' })
export class InvoiceService {
  private readonly http = inject(HttpClient);

  issue(id: number): Observable<Invoice> {
    return this.http.post<Invoice>(\`/api/invoices/\${id}/issue\`, null);
  }
}`},
  interceptor:{x:20,y:340,w:210,layer:"ng",label:"Auth interceptor",sub:"auth.interceptor.ts",file:"core/auth/auth.interceptor.ts",title:"HTTP interceptor",
    role:"A function every HTTP request passes through, going out and coming back. Going out, it clones the request and adds Authorization: Bearer <token>. Coming back, a 401 means the token expired or was tampered with, so it ends the session and sends the user to /login.",
    talks:"AuthService (token in localStorage), the network",
    code:`export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.token();
  const authorized = token
    ? req.clone({ setHeaders: { Authorization: \`Bearer \${token}\` } })
    : req;
  return next(authorized).pipe(catchError(err => {
    if (err.status === 401) auth.logout();
    return throwError(() => err);
  }));
};`},
  nginx:{x:270,y:340,w:130,layer:"net",label:"nginx proxy",sub:"nginx.conf",file:"frontend/nginx.conf (dev: proxy.conf.json)",title:"Reverse proxy",
    role:"The browser only talks to one address. nginx serves the compiled Angular files and forwards every /api request to the backend container. In development, ng serve does the same with proxy.conf.json. Same origin for everything means no CORS problems.",
    talks:"The browser in, Spring Boot on backend:8080 out",
    code:`location /api/ {
    proxy_pass http://backend:8080;
}
location / {
    try_files $uri $uri/ /index.html;  # Angular routes survive a refresh
}`},
  security:{x:440,y:70,w:210,layer:"sp",label:"Security filter chain",sub:"SecurityConfig.java",file:"config/SecurityConfig.java",title:"Spring Security filter chain",
    role:"Runs before any controller. It reads the Authorization header, verifies the JWT signature with the secret key and checks the expiry, then applies the access rules in order. A rejected request never reaches your code: 401 means \"who are you?\", 403 means \"you may not\".",
    talks:"JwtDecoder, the exception handler (401/403), the controller if allowed",
    code:`.authorizeHttpRequests(auth -> auth
    .requestMatchers(POST, "/api/auth/login").permitAll()
    .requestMatchers(POST, "/api/invoices/*/cancel").hasRole("ADMIN")
    .anyRequest().authenticated())
.oauth2ResourceServer(o -> o.jwt(...))`},
  controller:{x:440,y:160,w:210,layer:"sp",label:"Controller",sub:"InvoiceController.java",file:"invoice/InvoiceController.java",title:"@RestController",
    role:"The HTTP door of the backend. It maps URL + verb to a method, turns the JSON body into a request DTO (Jackson), runs @Valid, calls the service, and returns a response DTO that Jackson turns back into JSON. No business rules, no repository.",
    talks:"The service only, and the DTOs",
    code:`@RestController
@RequestMapping("/api/invoices")
public class InvoiceController {
    @PostMapping("/{id}/issue")
    public InvoiceResponse issue(@PathVariable Long id) {
        return service.issue(id);
    }
}`},
  service_sp:{x:440,y:250,w:210,layer:"sp",label:"Service",sub:"InvoiceService.java",file:"invoice/InvoiceService.java",title:"@Service + @Transactional",
    role:"Runs one use case inside a database transaction: load what is needed, let the entities apply their rules, save. If anything throws, everything rolls back. It receives its collaborators through the constructor; Spring creates and wires them at startup.",
    talks:"Repositories, InvoiceNumberGenerator, entities, DTOs",
    code:`@Transactional
public InvoiceResponse issue(Long id) {
    Invoice invoice = getOrThrow(id);
    LocalDate today = LocalDate.now(LISBON);
    invoice.ensureCanBeIssued(today);
    int number = numberGenerator.next("FT", today.getYear()); // FOR UPDATE
    invoice.issue("FT", today.getYear(), number, today);
    invoiceRepository.flush();
    return InvoiceResponse.from(invoice);
}`},
  entity:{x:440,y:340,w:210,layer:"sp",label:"Entity (domain)",sub:"Invoice.java",file:"invoice/domain/Invoice.java, InvoiceLine.java",title:"Entity with business rules",
    role:"A Java object mapped to a table row by Hibernate, and the keeper of its own rules: only drafts change, totals are always recalculated, the lifecycle moves only through issue(), markAsPaid() and cancel(). Without setters there is no way around the rules.",
    talks:"Nobody: it is plain Java. Hibernate persists it.",
    code:`public void issue(String series, int year, int seq, LocalDate date) {
    ensureCanBeIssued(date);              // must be DRAFT, with lines
    this.number = String.format("%s %d/%04d", series, year, seq);
    this.clientName = client.getName();   // snapshot of the client
    this.status = InvoiceStatus.ISSUED;
}`},
  repository:{x:440,y:430,w:210,layer:"sp",label:"Repository + Hibernate",sub:"InvoiceRepository.java",file:"invoice/InvoiceRepository.java",title:"Spring Data JPA repository",
    role:"An interface; Spring Data writes the implementation. Hibernate turns calls into SQL and rows into entities. Inside a transaction it watches loaded entities, so a changed field becomes an UPDATE at commit without save(). @Version adds \"AND version = ?\" to stop double clicks.",
    talks:"PostgreSQL, through JDBC and the Hikari connection pool",
    code:`public interface InvoiceRepository
        extends JpaRepository<Invoice, Long>, JpaSpecificationExecutor<Invoice> {

    @EntityGraph(attributePaths = {"client", "lines"})  // one JOIN, no N+1
    Optional<Invoice> findWithDetailsById(Long id);
}`},
  handler:{x:670,y:160,w:150,layer:"err",label:"Exception handler",sub:"GlobalException…",file:"common/GlobalExceptionHandler.java",title:"@RestControllerAdvice",
    role:"One place that turns exceptions into HTTP answers in the same ProblemDetail format: validation 400 with an errors map, not found 404, duplicate or constraint 409, business rule 422, security 401/403. Services throw domain exceptions and never think about HTTP.",
    talks:"Called by Spring when a filter, controller or service throws",
    code:`@ExceptionHandler(BusinessRuleException.class)
public ProblemDetail handleBusinessRule(BusinessRuleException ex) {
    var p = ProblemDetail.forStatusAndDetail(
        HttpStatusCode.valueOf(422), ex.getMessage());
    p.setTitle("Regra de negócio violada");
    return p;
}`},
  postgres:{x:855,y:430,w:135,layer:"db",label:"PostgreSQL",sub:"tables · locks",file:"Docker container faturacao-db",title:"PostgreSQL",
    role:"Stores the data and is the last line of defence: UNIQUE, CHECK and foreign keys reject bad data even if the Java code had a bug. Row locks (SELECT … FOR UPDATE) queue concurrent invoice issues, so numbers never repeat.",
    talks:"Hibernate (JDBC), Flyway, DBeaver",
    code:`SELECT * FROM invoice_series
 WHERE prefix = 'FT' AND fiscal_year = 2026
   FOR UPDATE;      -- other issuers wait here until commit`},
  flyway:{x:855,y:530,w:135,layer:"db",label:"Flyway",sub:"V1 … V12",file:"src/main/resources/db/migration",title:"Flyway migrations",
    role:"At startup, before Hibernate, Flyway compares db/migration with the flyway_schema_history table and runs each new file once. The schema evolves by adding files, never by editing old ones. Hibernate then only validates (ddl-auto: validate).",
    talks:"PostgreSQL",
    code:`V7__create_invoices.sql
V8__invoice_issuing.sql
V11__create_users.sql
V12__dashboard_indexes.sql`},
};
export const H = 62;
export const EDGES = [["router","component"],["component","service_ng"],["service_ng","interceptor"],["interceptor","nginx"],["nginx","security"],
  ["security","controller"],["controller","service_sp"],["service_sp","entity"],["entity","repository"],["repository","postgres"],["flyway","postgres"],
  ["controller","handler",1],["security","handler",1]];

export const S = {
  issue:{name:"Issue an invoice · POST /api/invoices/42/issue", steps:[
    {at:"component",title:"The user clicks Emitir",text:"InvoiceDetail shows a confirmation dialog. When confirmed, it calls the Angular service and subscribes, which is what actually sends the request."},
    {from:"component",at:"service_ng",title:"The service builds the request",text:"invoiceService.issue(42) returns an Observable for POST /api/invoices/42/issue. The subscribe() in the component triggers it."},
    {from:"service_ng",at:"interceptor",title:"The interceptor adds the token",text:"The request is cloned with the JWT saved at login.",code:"POST /api/invoices/42/issue\nAuthorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZXMiOlsiVVNFUiJdfQ.Xk3…"},
    {from:"interceptor",at:"nginx",title:"Out of the browser, into the proxy",text:"The browser sends the request to its own origin. nginx sees /api and forwards it to backend:8080."},
    {from:"nginx",at:"security",title:"Spring Security checks the JWT",text:"Signature valid, not expired, user id 1 with role USER. Issuing is allowed for any authenticated user, so the request continues. Your own code has not run yet."},
    {from:"security",at:"controller",title:"The controller receives it",text:"Spring finds the method mapped to POST /{id}/issue, converts \"42\" to a Long, and calls service.issue(42)."},
    {from:"controller",at:"service_sp",title:"A transaction opens",text:"Because of @Transactional, everything from here until the method returns commits together or not at all."},
    {from:"service_sp",at:"repository",title:"Load the invoice",text:"findWithDetailsById(42) uses @EntityGraph to fetch the invoice, its client and its lines in one query."},
    {from:"repository",at:"postgres",title:"SQL runs in PostgreSQL",text:"Hibernate generated the SQL and borrowed a connection from the Hikari pool.",code:"select i.*, c.*, l.* from invoices i\n  join clients c on c.id = i.client_id\n  left join invoice_lines l on l.invoice_id = i.id\n where i.id = ?"},
    {from:"postgres",at:"entity",title:"The entity checks its rules",text:"invoice.ensureCanBeIssued(today): it must be a DRAFT, have at least one line, and its due date cannot be before today. Any failure throws BusinessRuleException and nothing is saved."},
    {from:"entity",at:"postgres",title:"Reserve the next number, with a lock",text:"InvoiceNumberGenerator locks the FT 2026 counter row. A second user issuing at the same moment waits here until this transaction commits.",code:"select … from invoice_series\n where prefix = 'FT' and fiscal_year = 2026\n for update;      -- last_number 41 → 42"},
    {from:"postgres",at:"entity",title:"The invoice is issued",text:"invoice.issue(...) sets the number FT 2026/0042, the issue date, a snapshot of the client's name and address, and the status ISSUED."},
    {from:"entity",at:"repository",title:"Flush and commit",text:"Dirty checking turns the changed fields into UPDATEs. The version check stops a double click. Commit releases the lock on the counter.",code:"update invoices set number=?, status='ISSUED', …, version=6\n where id=42 and version=5;\nupdate invoice_series set last_number=42 where id=1;"},
    {from:"repository",at:"controller",title:"Entity becomes a response DTO",text:"InvoiceResponse.from(invoice) copies only what the screen needs. Jackson writes it as JSON with status 200.",code:"{\n  \"id\": 42,\n  \"number\": \"FT 2026/0042\",\n  \"status\": \"ISSUED\",\n  \"total\": 553.50, …\n}"},
    {from:"controller",at:"nginx",title:"Back through the proxy",text:"nginx passes the response to the browser."},
    {from:"nginx",at:"interceptor",title:"The interceptor lets it through",text:"Status 200, so there is nothing to handle. The response continues to whoever subscribed."},
    {from:"interceptor",at:"component",title:"The signal changes, the screen updates",text:"next: updated => this.invoice.set(updated). The template reacts: the badge turns to Emitida, the number appears, and the buttons switch to Marcar como paga and Anular. No page reload."},
  ]},
  list:{name:"Open the invoice list · GET /api/invoices",steps:[
    {at:"router",title:"The URL becomes a page",text:"You click Faturas. The router matches /faturas inside the Shell, authGuard confirms there is a session, and InvoiceList's code is downloaded the first time (lazy loading)."},
    {from:"router",at:"component",title:"The component reacts to its filters",text:"filters.valueChanges waits 300 ms after you stop typing (debounceTime), then switchMap cancels any older request still in flight."},
    {from:"component",at:"service_ng",title:"Filters become query parameters",text:"Only filled-in filters are added, using the immutable HttpParams.",code:"GET /api/invoices?status=ISSUED&page=0&size=20&sort=createdAt,desc"},
    {from:"service_ng",at:"interceptor",title:"Token attached",text:"Same as every request: Authorization: Bearer …"},
    {from:"interceptor",at:"nginx",title:"Forwarded to the backend",text:"/api goes to backend:8080."},
    {from:"nginx",at:"security",title:"Authenticated, allowed",text:"Any valid user may list invoices."},
    {from:"security",at:"controller",title:"Parameters become objects",text:"Each @RequestParam is converted (status=ISSUED becomes the enum) and Spring builds a Pageable from page, size and sort. They go into an InvoiceFilter record."},
    {from:"controller",at:"service_sp",title:"Rules for listing",text:"The sort field is checked against an allow-list (a 422 if someone sends sort=clientNif). The filters become a JPA Specification that builds the WHERE clause."},
    {from:"service_sp",at:"repository",title:"One page, not the whole table",text:"findAll(spec, pageable) with @EntityGraph on the client, so the 20 rows come with their clients in one query."},
    {from:"repository",at:"postgres",title:"Two queries",text:"One for the rows of this page, one to count the total for the paginator.",code:"select … from invoices i join clients c …\n where i.status = ? order by i.created_at desc\n offset 0 rows fetch first 20 rows only;\nselect count(i.id) from invoices i where i.status = ?;"},
    {from:"postgres",at:"controller",title:"A page response",text:"Each invoice becomes a light InvoiceSummaryResponse, overdue days calculated against today, wrapped in a PageResponse.",code:"{ \"content\": [ … 20 rows … ],\n  \"page\": 0, \"size\": 20,\n  \"totalElements\": 71, \"totalPages\": 4 }"},
    {from:"controller",at:"interceptor",title:"Back to the browser",text:"Through nginx and the interceptor, unchanged."},
    {from:"interceptor",at:"component",title:"Table and paginator update",text:"page.set(response). The table rows, status badges and \"1–20 de 71\" all come from that one signal."},
  ]},
  validation:{name:"Save a draft with quantity 0 · 400",steps:[
    {at:"component",title:"The form sends a bad line",text:"The quantity field has a browser validator too, but the backend is the real guarantee. Say a line goes out with quantity 0.0001, which only the backend rejects.",code:"{ \"clientId\": 1, \"dueDate\": \"2026-11-30\",\n  \"lines\": [ { \"productId\": 1, \"quantity\": 0.0001 } ] }"},
    {from:"component",at:"interceptor",title:"Through the service and interceptor",text:"POST /api/invoices with the token attached."},
    {from:"interceptor",at:"security",title:"Authenticated",text:"Through nginx; the JWT is valid, so the request continues."},
    {from:"security",at:"controller",title:"@Valid fails before the method runs",text:"Jackson builds an InvoiceRequest, then @Valid cascades into each InvoiceLineRequest. @Digits(fraction = 3) fails on lines[0].quantity. The controller method never starts, so the service and database are untouched."},
    {from:"controller",at:"handler",title:"Turned into a 400",text:"MethodArgumentNotValidException reaches the handler, which builds a ProblemDetail with an errors map keyed by field path.",code:"{\n  \"status\": 400,\n  \"title\": \"Dados inválidos\",\n  \"errors\": {\n    \"lines[0].quantity\": \"A quantidade pode ter no máximo 3 casas decimais\"\n  }\n}"},
    {from:"handler",at:"interceptor",title:"Not a 401, so the session stays",text:"The interceptor only acts on 401. It rethrows the error to the component."},
    {from:"interceptor",at:"component",title:"The error lands on the exact field",text:"applyServerErrors converts lines[0].quantity into lines.0.quantity, finds that control in the FormArray and marks it invalid. The first line's quantity turns red with the backend's message."},
  ]},
  expired:{name:"Token expired · 401",steps:[
    {at:"component",title:"A page asks for data",text:"The dashboard loads with httpResource, nine hours after login. The token was valid for eight."},
    {from:"component",at:"interceptor",title:"The old token goes out",text:"The interceptor attaches whatever token is stored. (The AuthService also checks the expiry locally, but suppose the clock or storage disagrees.)"},
    {from:"interceptor",at:"security",title:"JwtDecoder rejects it",text:"The exp claim is in the past. Spring Security stops the request in the filter chain. No controller, service or SQL runs."},
    {from:"security",at:"handler",title:"401 in the usual format",text:"The authentication entry point hands the exception to GlobalExceptionHandler, so even security errors look like every other API error.",code:"{ \"status\": 401, \"title\": \"Não autenticado\",\n  \"detail\": \"Autenticação necessária: envie um token válido …\" }"},
    {from:"handler",at:"interceptor",title:"The interceptor ends the session",text:"catchError sees status 401: it clears localStorage and asks the router for /login."},
    {from:"interceptor",at:"router",title:"Back to the login page",text:"The router opens /login, outside the Shell. After signing in again, a fresh token is issued and everything works."},
  ]},
};

export const VIEWBOX = [1000, 625]

export const COLORS = { ng: '#ff6b86', net: '#9aa6b4', sp: '#7cc96a', err: '#f29a55', db: '#6ea8e0' }

export const LEGEND = { ng: 'Angular (browser)', net: 'Network / proxy', sp: 'Spring Boot (server)', err: 'Error path', db: 'Database' }

export const CHIPS = { issue: 'Issue an invoice · POST', list: 'Open the invoice list · GET', validation: 'Bad quantity · 400', expired: 'Token expired · 401' }

// Background lanes: [x, y, width, height, label]
export const LANES = [
  [8, 20, 232, 410, 'BROWSER · ANGULAR'],
  [252, 20, 166, 410, 'NETWORK'],
  [425, 20, 410, 510, 'SERVER · SPRING BOOT'],
  [845, 20, 150, 595, 'DATABASE'],
]

export const EDGE_LABELS = [
  { x: 262, y: 330, text: 'HTTP + JSON' },
  { x: 700, y: 452, text: 'JDBC (Hikari pool)' },
]

// The two cycles every feature repeats. `text` and `note` contain trusted inline HTML (<code>, <b>).
export const CYCLES = [
  {
    layer: 'sp',
    title: 'Spring Boot: one request',
    sub: 'From the moment the HTTP request arrives until the JSON leaves.',
    stages: [
      { name: 'Security filter', file: 'config/SecurityConfig.java', text: 'Runs before any application code. Reads the <code>Bearer</code> token, works out who the user is and checks the role (deleting is ADMIN only).', fail: '401 / 403' },
      { name: 'Controller', file: 'InvoiceController.java', text: 'Turns the JSON into a DTO and, with <code>@Valid</code>, checks the <b>format</b>: required fields, quantity above zero. No business logic: it hands over to the service.', fail: '400 with the field' },
      { name: 'Service', file: 'InvoiceService.java', text: 'The coordinator. Opens the transaction (<code>@Transactional</code>), loads what it needs (client, products) and decides the order of operations.', fail: 'not found → 404' },
      { name: 'Entity', file: 'invoice/domain/Invoice.java', text: 'Holds the <b>business rules</b>: is this allowed right now? <code>invoice.issue()</code> refuses an invoice that was already issued.', fail: 'rule broken → 422' },
      { name: 'Repository', file: 'InvoiceRepository.java', layer: 'db', text: 'Reads from and writes to PostgreSQL. Only the interface is written by hand; Spring Data generates the SQL.', fail: 'conflict → 409' },
      { name: 'Response', text: 'The service maps the entity to <code>InvoiceResponse</code>, the transaction commits and the controller returns 200 or 201 with the JSON.' },
    ],
    note: '<b>At any stage: GlobalExceptionHandler.</b> If something throws, it catches the exception and turns it into a <code>ProblemDetail</code> with the right status.',
  },
  {
    layer: 'ng',
    title: 'Angular: opening a page',
    sub: 'From the click on "Faturas" in the menu until the table is on screen.',
    stages: [
      { name: 'Router', file: 'app.routes.ts', text: 'Finds the route <code>/invoices</code> inside the Shell (side menu and top bar).' },
      { name: 'Guard', file: 'core/auth/auth.guards.ts', text: '<code>authGuard</code> checks there is a session; <code>adminGuard</code> checks the role for admin pages.', fail: 'no session → /login' },
      { name: 'Lazy load', text: '<code>loadComponent</code> downloads the page\'s code only the first time it is opened.' },
      { name: 'Component', file: 'invoice-list.ts + .html + .scss', text: 'Gets the services it needs with <code>inject()</code> and holds the <b>screen logic</b>: what to show, which buttons appear.' },
      { name: 'Service', file: 'invoice.service.ts', text: 'Talks to the API with <code>HttpClient</code> / <code>httpResource</code>. Services that keep signals, like <code>AuthService</code> with the current user, act as the app\'s store.' },
      { name: 'Interceptor', file: 'core/auth/auth.interceptor.ts', layer: 'net', text: 'Adds <code>Authorization: Bearer …</code> to every request, which then goes to Spring Boot.', fail: '401 → logout' },
      { name: 'Signals → view', text: 'The response updates a signal and the template redraws itself with <code>@if</code> / <code>@for</code>. The screen is never refreshed by hand.' },
    ],
    note: '<b>On an error,</b> <code>ApiError</code> reads the <code>ProblemDetail</code>: a 400 is marked on the exact form field, a 422 appears as a message.',
  },
]

export const RULES = {
  intro: 'Angular has screen logic, which is a copy for a better experience. The real rule lives in Java, because anyone can call the API directly and skip the frontend.',
  rows: [
    ['Issue button', 'Only shown with <code>@if (status === \'DRAFT\')</code>', '<code>invoice.issue()</code> refuses anything else → 422'],
    ['Quantity', 'Form validator shows the error while typing', 'Bean Validation on the DTO (<code>@Valid</code>) → 400'],
    ['Totals', 'Live preview in integer cents', 'Official value with <code>BigDecimal</code> and <code>HALF_UP</code>'],
    ['Admin pages', '<code>adminGuard</code> hides the page', '<code>SecurityFilterChain</code> blocks the endpoint → 403'],
  ],
  outro: 'If they ever disagree, the backend wins. The frontend just shows what the API answered.',
}
