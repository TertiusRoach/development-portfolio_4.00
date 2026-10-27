# TraLogFin — Application Guidelines

**Purpose:** The baseline rulebook for TraLogFin's account states, company membership, permissions, time tracking, and UI behaviour. Use it as the reference when implementing and testing the application. These rules define *what the application permits*, not how it must be coded.

## 1. Core principles

1. **Vocation defines the working relationship:** Freelancing or Established. One account cannot be a freelancer for one company and an established worker for another.
2. **Position defines the role:** Employee or Manager. A Manager is not automatically a Head of Department (HoD).
3. **HoD grants specific approval and company-link permissions:** only an Established Manager may be an HoD.
4. **Occupation changes the launch page, not the user's permissions:** Technician or Specialist.
5. **The company owner controls workers' Vocation, Position, and HoD status.** Managers cannot change other users' role settings.
6. **Paid and Ads are separate:** Paid is the owner's permanent company-ownership entitlement while the account is retained; Ads reflects the company's current monthly payment status.
7. **Company membership and clock-in determine company context.** Switching the displayed company must never grant permissions by itself.
8. **Promotions require acceptance; demotions are silent.** Invalid toggle combinations are corrected automatically.
9. **Keep historical records.** Removing a person, deleting a company, or deleting an owner's login must not erase archived work or ghost-hour records that the rules require retaining.
10. **When a rule is unclear, it leans toward the worker.** TraLogFin is built for the people doing the work, not the people paying for it. If two readings of a rule are both reasonable, apply the one that protects the employee or freelancer.

## 2. Account settings and toggles

### Vocation

- **Freelancing:** The person works for a company as an independent service provider. They may belong to multiple companies, but only as a freelancer.
- **Established:** The person works for one company only. They cannot maintain freelance memberships at other companies while Established.

Vocation is consistent across the account; it is not a separate setting for each company. The company owner is the only person who can change a worker's Vocation.

### Position

- **Employee:** Cannot be an HoD. Can request leave if Established, claim and solve tickets while clocked into a company, and browse that company's links while clocked in.
- **Manager:** Available only to Established users. Can assign tickets while clocked in. Other managerial powers depend on HoD status.

New company members default to **Employee**. The owner explicitly promotes a suitable Established worker to Manager. A Manager is not automatically an HoD.

### HoD

- **HoD: Yes** is valid only when Vocation is Established and Position is Manager.
- Employees and freelancers can never be HoDs.
- HoD is an additional permission, not a synonym for Manager.
- An owner may appoint multiple HoDs, including every eligible Manager in the company.
- Only the owner can change a worker's HoD status.

### Occupation

- **Technician:** Opens the company-links page by default.
- **Specialist:** Opens the personal-bookmarks page by default.

Users can switch Occupation themselves at any time. Occupation affects the default/launch page only; it does not grant or remove administrative rights. Personal bookmarks are private to the user. Company-link access is still subject to membership, active company context, and the rules in Section 7.

### Paid

- **Paid: Yes** represents the permanent entitlement to own a company while the account is retained.
- Establishing a company sets the owner to Paid: Yes and locks their Vocation, Position, and HoD as described in Section 3.
- Monthly payment lapses do **not** switch Paid off. They switch the company's Ads setting on.
- Ordinary workers do not need Paid: Yes to be members or to exercise permissions granted by their role.
- Paid is not a shortcut to a worker permission: member permissions depend on Vocation, Position, HoD, membership, and clock-in.

### Ads

Ads represents whether the company's current monthly payment is up to date:

- When the owner pays for the month, the company's Ads setting switches to **No** for the company and its members.
- When payment lapses, Ads switches to **Yes** for the company and its members.
- No debt accumulates for months in which the user saw advertisements; advertisements are the agreed consequence of unpaid use.
- For a freelancer belonging to multiple companies, the Ads setting follows the company currently clocked into.
- Standalone free users see advertisements by default. When there is no active company context, use Ads: Yes by default; an active company's setting applies when the user clocks in to that company.

Ads must not be switchable off by an ordinary company member. It follows the company's payment state, not the member's Occupation or role.

### Bureau

Bureau is a job title the user chooses for themselves (for example "Network Infrastructure"). It's there so people can describe what they do, nothing more. Bureau grants no permissions and does not group people into departments: an HoD approves Established Employees across the whole company, not only those who share their Bureau.

### Account status

Enabled, Pending, Blocked and Deleted belong to the login system, not to these rules:

- **Enabled:** the account can log in.
- **Pending:** the account needs attention, such as an unverified email or an unaccepted invitation.
- **Blocked:** six wrong email codes lock the login for one day. The company owner cannot block anyone.
- **Deleted:** the account itself was deleted. Being removed from a company is not a deletion; that person keeps their account and the product.

## 3. Valid toggle combinations

The following are the only valid Vocation / Position / HoD combinations:

| Vocation | Position | HoD | Valid? |
|---|---|---:|---|
| Freelancing | Employee | No | Yes |
| Freelancing | Employee | Yes | No |
| Freelancing | Manager | No | No |
| Freelancing | Manager | Yes | No |
| Established | Employee | No | Yes |
| Established | Employee | Yes | No |
| Established | Manager | No | Yes |
| Established | Manager | Yes | Yes |

**Automatic correction:** if a worker's Vocation changes to Freelancing, Position automatically becomes Employee and HoD becomes No. If Position changes from Manager to Employee, HoD automatically becomes No. The application must not preserve an invalid combination, even temporarily. These corrections are silent when they form part of a demotion.

Occupation may be either Technician or Specialist in any valid combination. Paid and Ads do not make an otherwise invalid role combination valid.

## 4. Default accounts and company ownership

### New account

A new, standalone account starts as:

- Vocation: **Freelancing**
- Position: **Employee**
- Occupation: **Technician** (user may change it)
- HoD: **No**
- Paid: **No**
- Ads: **Yes** by default

A standalone user can use personal bookmarks. Company resources remain unavailable until the user is a member of a company and, for clock-in-protected resources, has clocked in.

### Creating a company

After purchasing the owner entitlement and creating a company, the owner is set to:

- Vocation: **Established**
- Position: **Manager**
- HoD: **Yes**
- Paid: **Yes**
- Occupation: user-controlled (the onboarding default may be Specialist, but it remains changeable)

The owner's Vocation, Position, and HoD status are locked while they own the company. The owner is the highest authority in that company and cannot also join another company as a worker. One account may own **one company at a time**.

The owner's Occupation remains changeable because it controls only the launch page. If a person creates a company while they already belong to other companies as a freelancer, apply the Established-status double warning and typed confirmation before ending those other memberships. Do not complete company creation if the person does not confirm. The owner's own leave and overtime requests are automatically approved. The owner can use time tracking, tickets, and company resources without clocking in.

### Owner authority

The owner alone can:

- Add/remove company members and change their Vocation, Position, and HoD status.
- Promote a worker to Manager and explicitly choose whether that worker should be an HoD.
- Approve leave and overtime for any worker, including every Manager and HoD.
- Approve company-link changes submitted by non-HoD Managers.
- Manage the company's payment state and corresponding Ads state.
- Delete the company.

Managers and HoDs do not receive authority to change another person's role settings merely because they can assign tickets, edit company links, or approve employee requests.

## 5. Invitations, membership, promotions, and demotions

### Adding a member

1. The owner invites the person and selects the working relationship: Freelancing or Established.
2. Position defaults to Employee; HoD defaults to No. Occupation remains under the user's control.
3. The invited person must accept the company's terms/invitation before membership becomes active.
4. An Established worker can belong to only this one company. A freelancer can belong to multiple companies.

If an existing Established worker already belongs to another company, they cannot join a second company as Established. Their existing relationship must first end or be changed to Freelancing by the current company owner.

### Promotions

A promotion is a change that grants a higher role, a new approval power, or a more restrictive employment status. It requires the affected user to accept before the new state or permissions take effect. Until acceptance, the existing valid state and permissions remain unchanged.

Examples include:

- Freelancing → Established.
- Employee → Manager.
- HoD: No → HoD: Yes.

The owner must explicitly choose HoD: Yes or No when promoting a worker to Manager. Making the HoD toggle available does not automatically grant HoD status. If the owner proposes both Manager and HoD status at once, the user must accept the full proposed change before either new permission set becomes active.

#### Established-status confirmation

When changing a freelancer to Established, show a clear warning that they must forfeit their other freelance company memberships. Require a double warning and a typed confirmation from the affected user, followed by acceptance of the proposed change. Do not apply any part of the change until the user accepts. If they decline, they remain a freelancer with their existing memberships and permissions.

When accepted, the user becomes Established with the Position selected by the owner (Employee by default). Their other freelance memberships end; they cannot continue logging time for those companies, and an active clock-in to one of them ends at the moment of acceptance (see Section 8). Historical records remain archived. This transition must not leave a partial state where the user is Established but retains other company memberships.

### Demotions and status changes

Demotions apply silently; no acceptance prompt is required. Examples include:

- Established → Freelancing.
- Manager → Employee.
- HoD: Yes → HoD: No.

If an Established worker is changed to Freelancing, they remain a freelancer for that same company unless the owner separately removes them. They may then join other companies as a freelancer. Former memberships that ended when they became Established are not automatically restored.

If a status change makes the user ineligible for HoD, HoD automatically becomes No. If someone is removed from a company, that is a membership removal, not merely a demotion; apply Section 10.

## 6. Permission and approval matrix

Permissions below assume the person belongs to the relevant company. Unless stated otherwise, company operations and resources require an active clock-in for that company; the owner is exempt.

| Action | Freelancer Employee | Established Employee | Manager, HoD: No | Manager, HoD: Yes | Owner |
|---|---|---|---|---|---|
| Claim/solve tickets | Yes, clocked in | Yes, clocked in | Yes, clocked in | Yes, clocked in | Yes, no clock-in required |
| Assign tickets | No | No | Yes, clocked in | Yes, clocked in | Yes, no clock-in required |
| Browse company links | Yes, clocked in | Yes, clocked in | Yes, clocked in | Yes, clocked in | Yes, no clock-in required |
| Publish company-link changes directly | No | No | No | Yes, clocked in | Yes, no clock-in required |
| Submit a company-link change for approval | No | No | Yes; owner approval required | Not needed for direct changes | Can approve submissions |
| Be assigned tickets | Yes; must clock in to work on them | Yes | Yes | Yes | Yes |
| Request leave | No; freelancers invoice per solution (Section 9) | Yes | Yes | Yes | Owner's own request auto-approved |
| Approve Established employee leave/overtime | No | No | No | Yes | Yes |
| Approve a Manager's leave/overtime | No | No | No | No | Yes |
| Approve own leave/overtime | No | No | No | No | Yes, automatically |
| Change another user's Vocation, Position, or HoD | No | No | No | No | Yes |

### Approval hierarchy

- **Owner:** Approves Established employees, Managers, and HoDs. Owner requests for leave/overtime are automatically approved.
- **HoD:** May approve Established employees' leave and overtime. HoDs cannot approve a Manager's request, including another HoD's request.
- **Manager without HoD:** May assign tickets, but cannot approve leave/overtime or publish company-link changes directly. The owner approves that Manager's leave/overtime and link-change submissions.
- **Employee:** Can request leave if Established, but cannot approve requests.
- **Freelancer:** Does not submit leave for approval or accumulate ghost hours; invoices the company per solution (Section 9).

If an HoD loses HoD status while a request is waiting for them, responsibility moves to the remaining HoDs and the owner. The request itself is not affected.

Leave/overtime approvals do **not** require the approver to be clocked in. The owner is exempt from clock-in requirements for all company actions. Other operational actions and resources remain clock-in-protected.

## 7. Company links, personal bookmarks, and UI behaviour

### Default page

- Technician → company-links page.
- Specialist → personal-bookmarks page.

This is a launch-page preference only. It does not affect permissions. Users may change Occupation at any time; doing so must not grant HoD status or broaden access.

### Company-links access checks

Apply these checks in order:

1. **No company membership:** Company links are disabled. Show a message explaining that the user must start a company or be added to an organisation. Include a clickable guide to the company/payment process when they choose to start a company.
2. **Membership exists but no active clock-in:** Do not show company resources. Explain that they must clock in to access them, with a clickable button leading to the time tracker.
3. **Clocked into a company:** Show only the company links for the company currently clocked into, subject to its membership and permission rules.
4. **Freelancer in multiple companies:** The active clock-in determines which company's links are displayed. Switching company context must not provide access to a company where the user has no membership.
5. **Owner:** May access their own company's links without clocking in.

Personal bookmarks remain private and available independently of company membership or clock-in. Switching Occupation changes the default page, not the privacy of bookmarks or permissions for the company page.

### Editing company links

- Owner: may edit directly and is the **only** person who can approve changes submitted by non-HoD Managers.
- Manager + HoD: may publish company-link changes directly, subject to the clock-in rule. An HoD cannot approve a non-HoD Manager's submission.
- Manager without HoD: may submit a company-link change for owner approval. The proposal does not change published links until the owner approves it.
- Employee/freelancer: may browse links while clocked in, but cannot edit or submit company-link changes under this baseline.
- Paid status and Occupation do not determine who can edit links; role, HoD, membership, and clock-in do.

## 8. Time tracking and ticketing

### Time tracking and company context

- Freelancers who belong to multiple companies must select the company they are clocking into when logging time.
- A freelancer can be clocked into **one company at a time**. To switch, they clock out of the first company before clocking into the second; the application explains this instead of switching automatically.
- Established workers have one company and can log time only for that company.
- The company currently clocked into determines the active company context for company links and ticketing.
- A non-owner must be clocked into the relevant company for ticketing actions and company-resource access. This includes claiming, solving, and assigning tickets, and accessing company links.
- The owner is exempt from clock-in requirements and can log hours or use company resources without clocking in.
- A person cannot continue logging time for a company after membership ends.

### Clock-in cut-off

A clock-in can only exist while its membership exists. Whenever a membership ends, any active clock-in to that company ends at the same moment, and the time up to that moment is archived as worked time. This applies however the membership ends:

- The owner removes the member (Section 10).
- The company is deleted (Section 10).
- A freelancer accepts Established status and forfeits their other memberships (Section 5).

Changing from Established to Freelancing does **not** end the membership, so it does not cut off the clock-in.

### Ticket outcomes

- Claiming and solving require clock-in for the relevant company, except for the owner.
- Managers and HoDs may assign tickets while clocked in; the owner may assign without clocking in.
- Tickets may be assigned to any member of the company, freelancers included. Assigning doesn't require the assignee to be clocked in, but working on the ticket (claiming and solving) does.
- When a member is removed, their unresolved claimed tickets return to that company's pending pool. Completed tickets are archived.
- When the entire company is deleted, its tickets and company resources are archived as historical company records; there is no active pending pool for a deleted company.

## 9. Leave, overtime, and ghost hours

### Established workers

Established workers use the overtime tracker as a register of overtime. The ordinary contractual workday is not overtime and does not generate ghost hours. Leave and overtime follow the approval hierarchy in Section 6.

### Reviewing overtime

A reviewer (an HoD or the owner, per Section 6) has two choices for each overtime request:

- **Approve:** the hours count as approved overtime.
- **Reject:** the hours become ghost hours for both the employee and the reviewer.

A reviewer may split one request, for example approve two hours of a four-hour request and reject the other two. Only the rejected part becomes ghost hours.

### Overtime expiry

Overtime that nobody reviews doesn't wait forever. **Six months after the overtime was worked**, an unreviewed request expires. The clock starts on the day the overtime was worked and never restarts.

An expired request counts as rejected. Its hours become ghost hours for the employee **and the owner**, not for any HoD. The owner is the one who benefits from unpaid work, so ignoring a request can never be cheaper for them than answering it.

The six-month period is fixed for now. Country-specific periods are outside this baseline (Section 15).

### Freelancers

Freelancers are paid **per solution**, not per hour, because hourly billing is easy for an employer to exploit. A solution is any job the freelancer and the paying company agree on. If they agree on an hourly rate anyway, the freelancer simply does the maths.

- The price or rate is agreed **before** the work starts: the freelancer quotes, the company accepts, and only then does the work count as commissioned.
- The freelancer logs the time they were present at the company, online or offline (Section 12), and may include it on the invoice. Logged time is a record of attendance; it never changes the agreed price.
- Freelancers do not have leave approved by an HoD and do not accumulate ghost hours under this baseline.

### Ghost hours definition

**Ghost hours are an auditable record of overtime submitted by an Established worker and rejected by the responsible HoD or owner.** The rejected duration is added to both the submitting worker's and the rejecting person's ghost-hour totals. For example, rejecting four hours of overtime adds four ghost hours to each person's record. Ghost hours are separate from approved hours, actual logged working hours, ordinary contractual hours, and leave.

The records provide context for reviewing repeated patterns; they are not, by themselves, proof of misconduct. A rejection must retain enough history to identify the employee, the responsible reviewer, the disputed duration, the company, and the rejection/closure event.

If a member is removed while overtime is pending, close the pending submission as rejected and record the corresponding ghost hours against the employee and the owner who removed them. If the company is deleted while overtime is pending, treat the pending submission as rejected for this purpose and attribute the ghost hours to the employee and the owner. This record must survive company deletion and owner-account deletion.

Pending leave requests closed by removal or company deletion are archived as rejected, but **do not** generate ghost hours. Ghost hours apply only to rejected overtime from Established workers, not freelancers or ordinary contractual working hours.

### Counting ghost hours

A person's ghost-hour total counts every ghost hour dated within the **last 24 months**, using the date of the rejection or expiry. Older records are kept but no longer counted. The total doesn't reset at the start of a year, so two years of transparency gives everyone room to prove their case and a fair redemption arc for past behaviour.

Ghost hours are permanent. Nobody can edit or delete them, not even the owner. If the people involved settle a dispute outside the application, the ghost hours stay: the agreement was to use the application, and the record shows what happened in it.

## 10. Removing members and deleting a company

### Removing an individual member

When the owner removes a member from a company:

- The person immediately loses that company's active membership and access to its company links/resources.
- An active clock-in to that company ends at the moment of removal; the time up to then is archived (Section 8).
- They cannot continue logging time for that company.
- Historical hours remain archived and viewable.
- Unresolved claimed tickets return to the company's pending pool; completed tickets are archived.
- Private bookmarks remain available to the user.
- Pending leave is archived as rejected and does not generate ghost hours.
- Pending overtime is closed as rejected and generates ghost hours under Section 9.
- Freelancers retain memberships in their other companies.
- An Established worker, who can have no other company membership, returns to the standalone baseline: Freelancing, Employee, HoD: No, with their previous Occupation retained.

### A worker deletes their own account

When a worker deletes their own account, treat it exactly like being removed from every company they belong to, all at the same moment:

- Every active clock-in ends at that moment, and the time up to it is archived (Section 8).
- Unresolved claimed tickets return to each company's pending pool; completed tickets are archived.
- Pending leave is archived as rejected and does not generate ghost hours.
- Pending overtime is closed as rejected and generates ghost hours for the worker and that company's owner (Section 9).
- Their personal bookmarks and login are deleted with the account.
- Historical hours, tickets and ghost-hour records stay archived with a historical reference to the former worker. That reference never allows a login or restores access.

An owner can't delete their account this way while they own a company. They do it through company deletion (below), which offers the keep-or-delete-account choice.

### Deleting the company

Company deletion ends the company relationship for all members and terminates all active clock-ins to that company. Archive the elapsed time through termination and preserve historical time records. Archive the deleted company's tickets and resources; remove active access to its company links.

Each member returns to the non-owner baseline: Freelancing, Employee, HoD: No, with Occupation retained. A freelancer's memberships in **other** companies remain intact. An Established member cannot have another company membership, so they return to a standalone freelancer state. Pending overtime is handled as specified in Section 9, and pending leave is archived as rejected without ghost hours.

The owner must receive a clear confirmation choice before deletion:

- **Keep my account/email:** Delete the company but retain the owner's account/email and Paid entitlement. The owner no longer has an active company and can return later.
- **Delete my account/email:** Explain clearly that the account and Paid entitlement will be deleted and payment will be required again to use paid services. If confirmed, delete the login account/email. Required historical employee, overtime, and ghost-hour records must still be retained in archived form, with a historical reference to the former owner; this reference must not enable login or restore access.

The owner cannot keep the company active after confirming deletion. Deletion must not erase employee history or any ghost-hour records required for accountability. Any return flow must follow the account/entitlement choice above.

## 11. Company payment and Ads lifecycle

- A company owner pays for each month of service.
- Successful payment sets the company's Ads to No for that month.
- When payment lapses, the company's Ads returns to Yes; the company remains operational and member roles/permissions do not change.
- The unpaid period does not create a debt for the time advertisements were shown.
- Paid remains Yes as the owner's permanent entitlement while the account is retained, even if monthly payment lapses.
- Deleting only the company does not automatically erase a retained owner's Paid entitlement. Choosing to delete the account/email deletes that entitlement and means payment is required again for paid services.
- Company members' Ads behaviour follows the company they are currently clocked into. Standalone free users see Ads by default.

## 12. Offline mode

TraLogFin works offline in two ways: fully, for people without an account, and read-only, for people with one. The technical side (IndexedDB, caching, syncing) lives in [TABLE.md](TABLE.md).

### Without an account

Anyone can use TraLogFin without creating an account. Their personal time tracking and personal bookmarks are stored in the browser on their own device, and nothing goes to a server. Company features need a membership, so they stay unavailable. Only that person is affected, so there is nothing to misuse.

If they create an account later, their local data is uploaded into it. Only personal data exists at that point, so nothing needs to be checked.

> **Storage warning (show this to people without an account):** Chrome, Edge and Firefox keep your data until you clear it. Safari (iPhone, iPad and Mac) can delete a website's data after 7 days without a visit. On Safari, add TraLogFin to your Home Screen or Dock to keep it, or create a free account.

### With an account: the offline switch

1. **Offline mode is an account setting** that can only be switched on **while online**. At that moment the server records the time and the device.
2. **One device at a time.** Other devices cannot switch to offline mode until this device has reconnected and synced.
3. **Company data is read-only offline.** Company links, tickets, members and settings can be viewed from the cached copy (kept for up to one year, depending on the browser), but not changed.
4. **Your own clock-ins can be recorded offline,** and each one is labelled **offline**.
5. **The server always wins.** When the device reconnects, company data on the server takes priority over anything done offline.
6. **The warning comes first.** The switch only turns on after the user has read and confirmed the warning below.

### The offline warning

Shown before the switch turns on, word for word:

> **Before you go offline.** While you're offline, nobody can check your device, and that's exactly how people cheat. They change the clock on their device to log hours they never worked. They keep clocking in after they've been removed from a company. They record different hours on two devices. TraLogFin can't stop any of that while you're offline, so every hour you log offline is labelled as offline. Your HoD or the owner can reject offline overtime **without any ghost hours** for either of you. If you want your hours protected, stay online.

### Checks when the device reconnects

The server checks every offline entry before accepting it:

- It falls after the moment offline mode was switched on, and before the moment the device reconnected.
- It doesn't overlap another entry, offline or online.
- All offline entries together add up to no more time than actually passed.
- None of it falls after the membership ended (the clock-in cut-off in Section 8).

An entry that fails any check is dropped and never counts. An entry that passes keeps its **offline** label.

### What the offline label means

- **Overtime:** a reviewer may reject offline overtime without ghost hours for either person.
- **Ignoring it still counts:** offline overtime that nobody reviews expires after six months like any other overtime (Section 9), as ghost hours for the employee and the owner. The label allows a free *reject*, never a free *ignore*.
- **Freelancers:** offline attendance appears on the invoice with its label. It never changes the agreed price.

### Losing the connection

If the connection drops without the switch being on, only the time the server could see counts as confirmed. The server knows when it last heard from the device. Any time between that moment and the reconnect is labelled **offline**, with the same checks and the same meaning as above.

## 13. Non-negotiable invariants

Use these as backend and acceptance-test rules:

1. Freelancing always implies Employee and HoD: No.
2. HoD: Yes always implies Established + Manager.
3. No account can be both Freelancing for one company and Established for another.
4. An Established worker has at most one company membership; a freelancer may have multiple.
5. One account owns at most one company at a time; an active owner cannot join another company as a worker.
6. A company owner alone changes members' Vocation, Position, and HoD status.
7. A promotion never grants its new permissions before acceptance; a decline leaves the previous valid state intact.
8. A demotion is silent and immediately removes permissions that no longer apply.
9. Occupation never grants administrative access; it only changes the default page.
10. Non-owner ticket actions and company-resource access require clock-in to the relevant company.
11. Leave/overtime approval does not require clock-in. Only the owner can approve a Manager's or HoD's leave/overtime; the owner auto-approves their own requests.
12. Only the owner approves company-link proposals from non-HoD Managers. HoDs can publish their own company-link changes directly but cannot approve those proposals.
13. A freelancer's Ads state follows the active company context; Ads is not an account-wide permission toggle.
14. Removing a member or deleting a company removes current access but does not erase required historical records.
15. Ghost hours apply only to rejected Established-worker overtime and are recorded for both the employee and responsible reviewer/owner, as set out in Section 9.
16. A freelancer is clocked into at most one company at a time.
17. A clock-in never outlives its membership.
18. Unreviewed overtime expires six months after it was worked and becomes ghost hours for the employee and the owner.
19. Ghost hours can never be edited or deleted. Totals count the last 24 months.
20. Freelancers are paid per agreed solution; logged time is attendance and never changes the price.
21. Offline mode is switched on while online, on one device at a time. No offline entry counts without passing the server's checks, and company data on the server always wins.
22. A worker deleting their own account is treated as removal from every company at once. History stays; the login doesn't.

## 14. Suggested character and state tests

Use the existing story setup as a repeatable test fixture: **Jane Lester** owns **Voidspire Systems** and is characterised by opportunism, detachment, and perfectionism; **Hammad Dean** owns **Silverveil Logistics** and is characterised by Machiavellianism, loyalty, and protectiveness. Both companies are fully remote, compete with one another, and still need each other. Their fictional business traits do not change the permission rules. Use the 18-character cast in [CHARACTERS.md](CHARACTERS.md) to test combinations and transitions across both companies.

At minimum, test the following:

- Each valid and invalid Vocation / Position / HoD combination in Section 3.
- An employee promotion to Manager with HoD explicitly set to No, and then separately to Yes.
- A promotion declined: no status, membership, or permissions change.
- A freelancer accepting Established status: typed confirmation, other freelance memberships forfeited, one company retained, and old company access removed.
- An Established worker attempting to join a second company: blocked until their prior relationship ends or they become a freelancer.
- A Manager demoted to Employee: HoD automatically becomes No and approval/link-editing permissions disappear immediately.
- A person removed from one of multiple freelance companies: other company memberships and private bookmarks remain intact.
- Company links requested with no membership, with membership but no clock-in, and while clocked into each of two different companies.
- A non-HoD Manager submits a company-link change: it remains unpublished until the owner approves it; an HoD cannot approve it.
- A HoD's direct company-link change is available without owner approval, subject to clock-in.
- Ticket claim, solve, and assignment with and without clock-in; verify that only the owner bypasses this requirement.
- Employee, non-HoD Manager, HoD, and owner leave/overtime approvals, including the owner auto-approval rule.
- Rejected overtime: exact duration recorded for both employee and responsible reviewer; no ghost hours for ordinary hours, leave, or freelancer activity.
- Pending overtime when a member/company is removed/deleted: close as rejected and preserve ghost-hour history.
- Company payment paid/lapsed: Ads changes without changing roles or permissions; a freelancer sees each company's Ads state when clocked into it.
- Company deletion: clock-ins terminate, records archive, freelance memberships in other companies survive, and the owner's account-retention choice produces the correct Paid outcome.
- Owner-account deletion: archived employee/ghost-hour records remain available for historical accountability without retaining a login-capable account.
- A freelancer clocked into one company tries to clock into the other: refused with an explanation until they clock out.
- A member removed, a company deleted, and a freelancer forfeiting memberships while clocked in: each clock-in ends at that moment and the time up to it is archived. A change from Established to Freelancing leaves the clock-in running.
- A Manager assigns a ticket to a freelancer who isn't clocked in: the assignment works, but claiming and solving wait for a clock-in.
- An overtime request split into approved and rejected hours: only the rejected hours become ghost hours.
- Overtime nobody reviews: on the day six months after it was worked, it expires as ghost hours for the employee and the owner, and no HoD.
- An HoD demoted while a request waits for them: the remaining HoDs and the owner can still review it.
- Ghost hours dated 25 months ago: still stored, no longer counted in the total. No role can edit or delete a ghost hour.
- Offline mode: switching on while offline is refused; a second device can't switch on; entries outside the window, overlapping, adding up to more time than passed, or after removal are dropped; passing offline overtime can be rejected without ghost hours, but expires into ghost hours if ignored.
- A dropped connection while clocked in: time after the server's last contact is labelled offline.
- A person without an account creates one: their local personal data uploads into the new account.
- A worker deletes their own account while clocked in, with claimed tickets, pending leave and pending overtime: everything resolves exactly as if they were removed from every company, and their history stays archived without a usable login.

## 15. Explicitly outside this baseline

Company mergers and ownership transfers require their own rules. The current constraint is one company per owner account; workers can move to a transferred/merged company only under the agreed merger process and company-name agreement. Do not infer extra transfer, merger, or multi-owner permissions from the ordinary membership rules.

These are planned, but not part of the rules yet:

- **Unpaid solutions:** a permanent record for freelancers whose agreed solutions go unpaid, counted with the same 24-month window as ghost hours.
- **Country-specific overtime expiry:** the six-month expiry may later follow each country's labour laws.

---

**Guiding rule:** Every permission must be justified by an explicit valid state, company membership, and—where required—an active clock-in. Every state change must preserve those constraints automatically, without leaving partial permissions or deleting required history.
