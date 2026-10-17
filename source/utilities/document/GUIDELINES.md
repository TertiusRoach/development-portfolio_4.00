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

When accepted, the user becomes Established with the Position selected by the owner (Employee by default). Their other freelance memberships end; they cannot continue logging time for those companies. Historical records remain archived. This transition must not leave a partial state where the user is Established but retains other company memberships.

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
| Request leave | No; use the freelancer invoicing workflow | Yes | Yes | Yes | Owner's own request auto-approved |
| Approve Established employee leave/overtime | No | No | No | Yes | Yes |
| Approve a Manager's leave/overtime | No | No | No | No | Yes |
| Approve own leave/overtime | No | No | No | No | Yes, automatically |
| Change another user's Vocation, Position, or HoD | No | No | No | No | Yes |

### Approval hierarchy

- **Owner:** Approves Established employees, Managers, and HoDs. Owner requests for leave/overtime are automatically approved.
- **HoD:** May approve Established employees' leave and overtime. HoDs cannot approve a Manager's request, including another HoD's request.
- **Manager without HoD:** May assign tickets, but cannot approve leave/overtime or publish company-link changes directly. The owner approves that Manager's leave/overtime and link-change submissions.
- **Employee:** Can request leave if Established, but cannot approve requests.
- **Freelancer:** Does not submit leave for approval or accumulate ghost hours; uses the invoicing workflow to report hours worked.

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
- Established workers have one company and can log time only for that company.
- The company currently clocked into determines the active company context for company links and ticketing.
- A non-owner must be clocked into the relevant company for ticketing actions and company-resource access. This includes claiming, solving, and assigning tickets, and accessing company links.
- The owner is exempt from clock-in requirements and can log hours or use company resources without clocking in.
- A person cannot continue logging time for a company after membership ends.

### Ticket outcomes

- Claiming and solving require clock-in for the relevant company, except for the owner.
- Managers and HoDs may assign tickets while clocked in; the owner may assign without clocking in.
- When a member is removed, their unresolved claimed tickets return to that company's pending pool. Completed tickets are archived.
- When the entire company is deleted, its tickets and company resources are archived as historical company records; there is no active pending pool for a deleted company.

## 9. Leave, overtime, and ghost hours

### Established workers

Established workers use the overtime tracker as a register of overtime. The ordinary contractual workday is not overtime and does not generate ghost hours. Leave and overtime follow the approval hierarchy in Section 6.

### Freelancers

Freelancers use the tracker as an invoicing record for hours worked. The freelancer workflow uses an alternative invoice-client selection rather than an approved-leave workflow. Freelancers can tell the company how much time they worked, but they do not have leave approved by an HoD and do not accumulate ghost hours under this baseline.

### Ghost hours definition

**Ghost hours are an auditable record of overtime submitted by an Established worker and rejected by the responsible HoD or owner.** The rejected duration is added to both the submitting worker's and the rejecting person's ghost-hour totals. For example, rejecting four hours of overtime adds four ghost hours to each person's record. Ghost hours are separate from approved hours, actual logged working hours, ordinary contractual hours, and leave.

The records provide context for reviewing repeated patterns; they are not, by themselves, proof of misconduct. A rejection must retain enough history to identify the employee, the responsible reviewer, the disputed duration, the company, and the rejection/closure event.

If a member is removed while overtime is pending, close the pending submission as rejected and record the corresponding ghost hours against the employee and the owner who removed them. If the company is deleted while overtime is pending, treat the pending submission as rejected for this purpose and attribute the ghost hours to the employee and the owner. This record must survive company deletion and owner-account deletion.

Pending leave requests closed by removal or company deletion are archived as rejected, but **do not** generate ghost hours. Ghost hours apply only to rejected overtime from Established workers, not freelancers or ordinary contractual working hours.

## 10. Removing members and deleting a company

### Removing an individual member

When the owner removes a member from a company:

- The person immediately loses that company's active membership and access to its company links/resources.
- They cannot continue logging time for that company.
- Historical hours remain archived and viewable.
- Unresolved claimed tickets return to the company's pending pool; completed tickets are archived.
- Private bookmarks remain available to the user.
- Pending leave is archived as rejected and does not generate ghost hours.
- Pending overtime is closed as rejected and generates ghost hours under Section 9.
- Freelancers retain memberships in their other companies.
- An Established worker, who can have no other company membership, returns to the standalone baseline: Freelancing, Employee, HoD: No, with their previous Occupation retained.

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

## 12. Non-negotiable invariants

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

## 13. Suggested character and state tests

Use the existing story setup as a repeatable test fixture: **Jane Lester** owns **Voidspire Systems** and is characterised by opportunism, detachment, and perfectionism; **Hammad Dean** owns **Silverveil Logistics** and is characterised by Machiavellianism, loyalty, and protectiveness. Both companies are fully remote, compete with one another, and still need each other. Their fictional business traits do not change the permission rules. Use the 18-character cast to test combinations and transitions across both companies.

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

## 14. Explicitly outside this baseline

Company mergers and ownership transfers require their own rules. The current constraint is one company per owner account; workers can move to a transferred/merged company only under the agreed merger process and company-name agreement. Do not infer extra transfer, merger, or multi-owner permissions from the ordinary membership rules.

---

**Guiding rule:** Every permission must be justified by an explicit valid state, company membership, and—where required—an active clock-in. Every state change must preserve those constraints automatically, without leaving partial permissions or deleting required history.
