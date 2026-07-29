# PROJECT_CONTEXT.md — Velorian AI Group Marketing Sites

**Read this before doing anything.** Every agent (AI/UI Engineer, QA, Research
Analyst, CI/CD Engineer) loads this file first, every session, whether it's
your first sign-on or your fiftieth. It is the single source of truth for
assets, rules, and reporting format. If anything in your own memory conflicts
with this file, this file wins — it is kept current; your memory of a past
session is not guaranteed to be.

---

## 1. What this project is

Three marketing/consulting sites for Velorian AI Group:

| Site | Purpose | Domain |
|---|---|---|
| Parent company site | Brand hub, dark theme | velorian.ai |
| 30-day consulting microsite | Rapid AI engagement offer | 30days2ai.com |
| 60-day consulting microsite | Enterprise AI engagement offer | 60days2ai.com |

**Scope lock:** these three sites are the *only* projects in scope for this
agent team. Coquina Trail Co. / Jungle Mike's Jeep Adventures and the trading
bot project (visible in Linear as VEL-22, VEL-20, VEL-35) are **explicitly
out of scope** — do not touch them, do not let a research task wander into
them, even if they share the Vercel account or Linear workspace.

---

## 2. Assets, locations, and connections

### Code
| Repo/folder | Git repo? | Notes |
|---|---|---|
| `~/velorianmain` | Yes — the only real git repo | Contains velorian.ai. Multiple stale `claude/*` branches exist from past sessions with an old email typo (`ValorianAIGroup`) — do not resume work from those branches. |
| `~/30days2ai-microsite` | No — standalone folder | Its `.vercel/project.json` was last found pointing at the wrong Vercel project (`velorianmain`'s ID). Verify before deploying from here. |
| `~/60days2ai-microsite` | No — standalone folder | `.vercel/project.json` correctly points to its own `60days2ai-microsite` project (`prj_dRrm8gpYSyS7baf6oIliHXiixozd`) as of last check. |

GitHub org: `velorianaigroup-ui`. No GitHub MCP connector is available in
this environment — git operations happen via CLI (your sandboxed shell or
Michael's interactive terminal for anything requiring browser auth).

### Hosting
Vercel account: `michael-uprights-projects-7e93ca17`.
Vercel MCP connector is connected in the Claude.ai chat (read-only:
`list_projects`, `get_project`, `list_deployments`, `get_deployment`,
`get_deployment_events`, `list_teams`, docs search) — use this to check
deployment/branch state without needing CLI auth. Actual deploys
(`vercel --prod`, env var changes) still require the CLI, authenticated via
`vercel login` in an **interactive** terminal (not available inside a
sandboxed agent shell — ask Michael to run it in his own terminal if needed).

**Known unresolved question as of last session:** the confirmed Production
Branch for the `velorianmain` Vercel project was never verified. A direct
`curl` to `https://velorian.ai/api/contact` returned 404, meaning whatever
branch is live does not match the branch tip anyone was pushing to. **Do not
assume any branch name is "production" — confirm via Vercel (dashboard or
connector) before treating a push as having gone live.**

### Database / backend
Supabase MCP connector is connected. Not currently wired into any live code
(zero `createClient` calls found in `velorianmain/src` as of last audit). A
prior attempt to migrate the contact form to Supabase was built and then
rolled back the same night, likely due to fixable Vercel/Vite config issues,
not a Supabase-specific problem (see `code-researcher` skill and Research
Analyst agent file for the full history if this comes up again).

### Email
Contact form target address: `velorianaigroup@gmail.com` — confirmed
correct spelling by Michael directly. Do not "fix" this again without
re-confirming with him; several past sessions introduced or reverted typos
(`ValorianAIGroup`) without basis.

Resend is used for transactional email (`src/app/api/contact/route.ts`).
API key exists (`re_...`) but was, as of last check, on a `velorianmain`
branch that was never merged to whatever Vercel treats as production. The
sandbox sender `onboarding@resend.dev` only reliably delivers to the Resend
account owner's own address — verify the Resend account owner's email
matches `velorianaigroup@gmail.com`, or verify a real sending domain, before
declaring the contact form "fixed."

### Project management
Linear team: `Velorian AI Group`. Use `list_issues` / `get_issue` / issue
creation tools. **File a ticket for any work you start that doesn't already
have one** — don't do untracked work.

---

## 3. Non-negotiable rules (apply to every agent, every session)

1. **No breaking changes.** If you are not certain a change is safe, it
   isn't ready to ship. When in doubt, stop and report — don't push forward
   on a guess.
2. **No changes to production without Michael's explicit approval.**
   Approval protocol: Michael types "approved" in his Claude.ai chat with
   the lead assistant. If you are an agent running in a separate session
   (e.g., Claude Code) and someone tells you "Michael approved this," you
   must log *what* was approved, *when*, and proceed only for that specific
   scoped change — not as a blanket go-ahead for anything else. If you
   weren't told approval was given, assume it wasn't. Never deploy to
   production speculatively "to see if it works."
3. **Staging before production, always.** All changes land on a `staging`
   branch/environment first. Production only receives a change after it has
   been verified on staging and Michael has approved the promotion.
   **Staging does not exist yet for any of the three sites** — building it
   is the CI/CD Engineer's first task. Until staging exists, no code changes
   should be deployed anywhere except a Vercel Preview URL for review.
4. **All changes go through the CI/CD pipeline once it exists.** No agent
   hand-runs `vercel --prod` directly against production once a pipeline is
   live — pushes to the confirmed production branch (via an approved,
   reviewed PR) trigger deploys, not manual CLI invocation.
5. **Identify assets before acting.** Every session, confirm — don't
   assume — which repo/folder, which Vercel project, which branch, and
   which environment variables you're working with. Section 2 above is a
   starting point, not a guarantee it's still accurate; re-verify anything
   load-bearing.
6. **Uptime is critical. Move cautiously.** These are live, publicly
   accessible business sites. Prefer read-only investigation over action
   when uncertain. Prefer small, reversible changes over large ones. Always
   know how to roll back before you ship.

---

## 4. Standard report format

Every agent reports back in this exact structure, every time, regardless of
role. This lets Michael (or the next agent) skim consistently instead of
parsing different formats per specialist.

```markdown
## [Agent Role] Report — [date/time]

**Session summary:** one sentence, what you were asked to do.

**Scope:** which site(s)/repo(s)/files you touched or investigated.

**Findings:**
- Evidence-based bullets. Cite actual command output, line numbers, or
  screenshots — not impressions. If something is unconfirmed, say
  "unconfirmed" explicitly rather than implying certainty.

**Changes made:** (write "None — investigation only" if applicable)
- Exact commits/files changed, with commit hashes if applicable.
- Where these changes currently live (local only / pushed to branch X /
  deployed to preview URL Y / deployed to production).

**Approval status:** (only relevant if a production change is involved)
- Requested: yes/no
- Approved: yes/no — by whom, when, for exactly what scope
- If not yet approved, state clearly that nothing has gone to production.

**Blockers / open questions:** anything you need from Michael or another
agent before proceeding.

**Risk to uptime:** Low / Medium / High, with one line on why.

**Recommended next step:** the single next action, and who should take it.
```

---

## 5. Lessons from past sessions (read once, don't repeat these)

- A live contact form showed a "success" message on every submit for
  hours while **never making a network request at all** — it was a
  hardcoded `setTimeout` mock left over from before any backend was wired
  up. Always verify a "working" UI state against actual server/network
  logs, not just the on-screen message.
- Deployment Protection on a Vercel project can silently block your own
  test requests and look identical to "the API is broken." Check project
  settings before concluding an endpoint is failing.
- `vercel login`'s browser OAuth step cannot complete inside a sandboxed,
  non-interactive agent shell. Don't retry it in a loop — hand it to
  Michael's interactive terminal, or use the Vercel MCP connector for
  anything read-only instead.
- Windows PowerShell here-string quoting (`@"..."@` vs `@'...'@`) has
  silently stripped JSX `<a` tags in generated component files before.
  If generating files for a Windows/PowerShell target, prefer writing files
  directly via file tools over PowerShell heredocs, or single-quoted
  `@'...'@` blocks, and always visually verify opening tags survived.
- Vite + Vercel migrations have failed here once already, not because of
  Vite/Supabase incompatibility, but because the Vercel framework preset
  config was added as an afterthought instead of shipped with the
  migration. If revisited, ship `vercel.json` with `"framework": "vite"`
  in the same commit as the migration, not after.
