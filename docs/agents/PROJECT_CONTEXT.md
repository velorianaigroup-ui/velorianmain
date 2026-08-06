# PROJECT_CONTEXT.md — Velorian AI Group Marketing Sites

**Read this before doing anything.** Every agent (AI/UI Engineer, QA, Research
Analyst, CI/CD Engineer) loads this file first, every session, whether it's
your first sign-on or your fiftieth. It is the single source of truth for
assets, rules, and reporting format. If anything in your own memory conflicts
with this file, this file wins — it is kept current; your memory of a past
session is not guaranteed to be.

---

## 0. ACTIVE FREEZE — 2026-07-29

**Do not push to `claude/init-velorian-website-yARbG` for any reason until
this notice is removed.** This branch is GitHub's default branch
(`origin/HEAD -> origin/claude/init-velorian-website-yARbG`), and Vercel
auto-deploys from it directly to production for multiple live
customer-facing domains, with **no staging gate in front of it**. Any push —
by any agent — goes live immediately, including seemingly harmless changes.

**Current status:** CI/CD Engineer has been asked to draft (not yet execute)
a plan for building real staging and reconfiguring which branch Vercel
treats as production. That plan requires Michael's review and explicit
approval before any Vercel/GitHub config changes are made — this is a
production-topology change, exactly what §3's approval gate exists for.

---

## 1. What this project is

Three marketing/consulting sites for Velorian AI Group:

| Site | Purpose | Live domain today | Also owned, not yet wired up |
|---|---|---|---|
| Parent company site | Brand hub, dark theme | velorian.ai (+ velorianai.com, both with `www.`) | — already fully wired, this is the pattern to replicate |
| 30-day consulting microsite | Rapid AI engagement offer | 30daystoai.com (+ `www.`) | 30days2ai.com |
| 60-day consulting microsite | Enterprise AI engagement offer | 60days2ai.com | 60daystoai.com (likely — needs verification) |

Michael confirmed (Namecheap, active through 2027/2028) that all six domain
variants — `30days2ai.com`, `30daystoai.com`, `60days2ai.com`,
`60daystoai.com`, `velorian.ai`, `velorianai.com` — are real, intentional
registrations, not typos. Each site should eventually have both of its
variants pointed at the same Vercel project, the way `velorian-website`
already does. Not urgent — this is a low-risk follow-up, not a blocker for
current staging/branch work.

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
| `~/velorianmain` | Yes — the only real git repo | GitHub org `velorianaigroup-ui`. Default branch is `claude/init-velorian-website-yARbG` — see §0, this is currently live production. Multiple stale `claude/*` branches also exist from past sessions with an old email typo (`ValorianAIGroup`) — do not resume work from those. |
| `~/30days2ai-microsite` | No — standalone folder | No Vercel project named `30days2ai-microsite` exists. The live 30-day site is actually served by the `velorianmain-x4ez` Vercel project (`prj_jpWaI1ZoLlGuaV6QouyCoEkTsNxr`, framework: vite) via `30daystoai.com`. This folder's `.vercel/project.json` mismatch (previously found pointing at `velorianmain`'s ID) is still unresolved — reconcile explicitly before deploying from here. |
| `~/60days2ai-microsite` | No — standalone folder | `.vercel/project.json` correctly points to its own `60days2ai-microsite` project (`prj_dRrm8gpYSyS7baf6oIliHXiixozd`). Note: its last production deployment was CLI-sourced (`"source": "cli"`), not triggered by a git push — no confirmed git Production Branch for this project as of last check. |

No GitHub MCP connector is available in this environment — git operations
happen via CLI (your sandboxed shell or Michael's interactive terminal for
anything requiring browser auth).

### Hosting
Vercel account: `michael-uprights-projects-7e93ca17` (team ID
`team_fzEyAaV00wNIvSazE6mFdY66`).

There are **4 Vercel projects** on this account. Domain-to-project mapping
below is confirmed via the Vercel **dashboard Domains tab directly**, per
project, on 2026-08-04/05 — **not** via the Vercel MCP connector or REST API
`domains`/`get_project` fields, which have a confirmed blind spot: a domain
whose live serving is currently controlled by a manual Instant Rollback pin
does not show up in those fields at all (see VEL-38 in Linear). An earlier
version of this table used the MCP-reported (empty) domain list for
`velorianmain` and wrongly concluded it served nothing — it does.

| Vercel project | Custom domains | Production Branch |
|---|---|---|
| `velorian-website` (`prj_nPzI6p0BTWdbrVX7LwN1HLsDQXSo`) | velorian.ai, velorianai.com, www.velorian.ai, www.velorianai.com | `claude/init-velorian-website-yARbG` |
| `velorianmain-x4ez` (`prj_jpWaI1ZoLlGuaV6QouyCoEkTsNxr`) | 30daystoai.com, www.30daystoai.com | `claude/init-velorian-website-yARbG` |
| `velorianmain` (`prj_fyildsnpjn2ZysUMhGcRhzCVVhqT`) | 30days2ai.com — dashboard-confirmed; manually Instant Rollback-pinned to deployment `a2c4ddb` since Feb 24 | **`frozen-do-not-use`** — repointed 2026-08-05, permanently (see below). Was `claude/init-velorian-website-yARbG` before that. |
| `60days2ai-microsite` (`prj_dRrm8gpYSyS7baf6oIliHXiixozd`) | 60days2ai.com | Not git-based — last deploy via CLI, no git Production Branch |

**Why `velorianmain` was disconnected (2026-08-05):** it tracked the same
shared branch as the other two git-linked projects, but builds a different,
older, stale copy of the app living at the **repo root**
(`rootDirectory: null`) — not the `velorian-website/` subfolder that real
fixes have been landing in since VEL-39. Every push to the shared branch
rebuilt this stale root app on `velorianmain` too, regardless of relevance,
risking its manually-pinned `30days2ai.com` domain getting caught up in
that push's fallout — which is what happened in the incident documented in
VEL-40 (2026-08-04). Fix: created an inert branch, `frozen-do-not-use`
(branched off `claude/init-velorian-website-yARbG`, never intended to
receive commits — see history for exact push/verify steps), and repointed
`velorianmain`'s Production Branch setting to it via the dashboard.
`velorianmain` still receives harmless Preview builds on shared-branch
pushes (Vercel previews any connected branch by default), but these can
never promote to production since the configured Production Branch is now
a dead branch — confirmed empirically: the push that shipped `f912180`
triggered a Preview-only (`target: null`) build on `velorianmain` that
changed nothing.

Only **two** projects now deploy from `claude/init-velorian-website-yARbG`
to production: `velorian-website` and `velorianmain-x4ez`. `velorianmain`
is intentionally isolated — do not re-point its Production Branch back to
the shared branch without redoing the analysis in VEL-38/VEL-40 first.

**Root Directory confirmed for `velorianmain` (2026-08-06):** its build
logs show package name `velorian-website@0.1.0` — same as the actual
`velorian-website` subfolder — which briefly looked like the same
Root-Directory-mismatch bug found on `velorianmain-x4ez` the same day.
It isn't. Direct comparison (`cat package.json` at repo root vs.
`cat velorian-website/package.json`) confirms **both files independently
have `"name": "velorian-website"`** — a historical naming leftover, not
a shared build path. `velorianmain` genuinely builds the **repo root**,
a distinct codebase from the `velorian-website/` subfolder. The pinned
deployment `a2c4ddb`'s own commit message — *"Sync 30days2ai-microsite
with root"* — confirms the repo root was deliberately the 30-day codebase
at that point in history; it just hasn't been touched since, while all of
the day's active work landed in `velorian-website/` instead. If this
tension resurfaces on any other project, check `package.json` `"name"`
on both sides before assuming a Root Directory bug — matching package
names are not proof of a shared build path.

**Shipping new content to `velorianmain` / the 30-day domains:** the
normal flow (push → `staging` → merge → auto-deploy) cannot reach
`velorianmain` anymore, by design — see the disconnection above. Documented
process instead, mirroring the pattern `60days2ai-microsite` already uses
(`"source": "cli"`, no git Production Branch):

1. Edit the repo-**root** source files directly (not `velorian-website/` —
   that ships to a different domain entirely).
2. From `~/velorianmain` (already linked to `prj_fyildsnpjn2ZysUMhGcRhzCVVhqT`
   via `.vercel/project.json`), run `vercel deploy --prod`. Because
   `velorianmain` has "Auto-assign Custom Production Domains" **off**
   (see VEL-38), this does **not** go live automatically — it creates a
   deployment with its own preview URL, current pin untouched. Review it
   there first, same role a staging URL would normally play.
3. Only once reviewed: `vercel promote <deployment-id-or-url>` — this is
   the actual traffic-moving step, replacing the `a2c4ddb` pin with the
   new deployment. Same approval gate as any other production change;
   step 2 isn't one, step 3 is.

**Not independently verified by CI/CD Engineer (2026-08-06):** every CLI
write attempt this session (`vercel deploy --prod`, `vercel project
inspect`, `vercel rollback` after a certain point) has failed with
`Error: The specified scope does not exist`, tried against both the team
ID and the team slug — this session's Vercel token has lost working
access to this team scope, for both CLI and raw REST API calls (which
separately 403 with a SAML re-auth requirement). The process above is
documented from Vercel's own CLI docs and the account's existing
`60days2ai-microsite` precedent, not confirmed working end-to-end by an
agent in this session. **Michael will need to run steps 2–3 himself** in
his own terminal until a working token is available.

Vercel MCP connector (read-only: `list_projects`, `get_project`,
`list_deployments`, `get_deployment`, `get_deployment_events`, `list_teams`,
docs search) is available for checking deployment/branch state without CLI
auth. Actual deploys (`vercel --prod`, env var changes) still require the
CLI, authenticated via `vercel login` in an **interactive** terminal (not
available inside a sandboxed agent shell — ask Michael to run it in his own
terminal if needed).

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
   should be deployed anywhere except a Vercel Preview URL for review. See
   §0 — the current default branch is already live production, so this is
   not a theoretical risk.
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
- A Vercel project's **name** does not reliably indicate which domain it
  serves — `velorianmain` sounds like it should be the parent site but has
  no custom domain at all, while `velorian-website` is the one actually
  serving velorian.ai. Always confirm via the `domains`/alias list on the
  project or deployment, not the project name.
- A repo's GitHub default branch (`origin/HEAD`) can silently double as
  Vercel's Production Branch even if nobody explicitly configured it that
  way. Check `git branch -a` for the `origin/HEAD ->` line, not just
  whatever branch naming conventions suggest.
- A Vercel project can track the same shared branch as other projects while
  building a completely different, unrelated app from it (e.g., a stale
  copy at the repo root vs. the real one in a subfolder). A push aimed at
  one project can still trigger a real rebuild on another project you
  weren't thinking about at all — and if that project has a manually-pinned
  Instant Rollback protecting a live domain, that rebuild can jeopardize it
  (see VEL-40, 2026-08-04). Before any push to a shared branch, check every
  project tracking that branch, not just the one you intend to affect.
