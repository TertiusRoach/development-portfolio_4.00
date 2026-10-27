# **[Tra](https://docs.google.com/spreadsheets/d/1jOIurYeQ35Wca4VcsSZ5h1qp0LUPok5WbzI3hjFhzak/edit?gid=0#gid=0)[Log](https://docs.google.com/spreadsheets/d/1DhICUSo1Yh6UU1BN-rcXAzEdyUKjdcM_bu9thgOzngY/edit?gid=0#gid=0)[Fin](https://docs.google.com/spreadsheets/d/1OYBoeSTg3O0M1subaR3_sYkzcAKJjV9OE4Ks19639Pk/edit?gid=0#gid=0)** Characters

TraLogFin is tested with a cast of 18 people spread across two fully remote companies. Every one of them is a survival strategy under pressure: exploitation, rebellion, retreat, apathy or rigid order. I based them on the drama I lived through at a very toxic company, so if one of them reminds you of someone, that's not an accident.

They exist to break things. Every rule in [GUIDELINES.md](GUIDELINES.md) should be tested by at least one of these people trying to bend it.

---

## The Two Companies

**Voidspire Systems**, owned by **Jane Lester**. Fast, loud and impressive from the outside. It raises money like breathing and burns people at the same rate. Voidspire runs on friction: visionaries break systems, specialists patch them, and somebody always rewrites the story afterwards so it looks like the plan.

**Silverveil Logistics**, owned by **Hammad Dean**. Slower, quieter, and easy to underestimate. Hammad used to put out Jane's fires before he left to build the company he wished he'd worked for. Silverveil runs on loyalty, and loyalty always comes with a price tag somebody has to pay.

The two compete for the same clients and still can't function without each other. Three freelancers, **Dimitri**, **Daniel** and **Sipho**, work for both. They're the bridge, the leak and the alibi, depending on who you ask.

From the outside, Voidspire looks like the place to be. Spend a month inside both and you'd swap that around. Mostly.

---

## How to Read a Character

**The three toggles** come first, coloured the same way as the brand: **Vocation** for Track a Day, **Position** for Log a Ticket, **Occupation** for Find a Link (see [TOGGLES.md](TOGGLES.md)).

**The facts** come straight from [character-testing.pdf](../../assets/pdf-files/character-testing.pdf), and `source/modules/server/MongoDB/testing/TraLogFin.json` holds the same data for the code. If the two ever disagree, the PDF wins.

- **Bureau** is a job title the person chose. It gives no permissions.
- **Status** (Enabled, Pending, Blocked, Deleted) is only there to test the login screen. It has nothing to do with the three apps.

**Tests** lists the rules each character exists to poke, with the section numbers from [GUIDELINES.md](GUIDELINES.md).

**The lore** keeps coming back to three ideas:

| Idea                 | What it means                                                                 |
| -------------------- | ----------------------------------------------------------------------------- |
| **Effort Economy**   | How much energy someone gives the company, compared to what they get back     |
| **Output Integrity** | Whether the work is actually right, not just finished                         |
| **Ethical Geometry** | The angle between what's right, what's allowed, and what's written in a contract |

---

# Voidspire Systems

## **01.** Jane Lester

![jane-lester](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/jane-lester.png)

**Established · Manager · Specialist**

| Organization      | Bureau               | Paid | HoD | Country       | Status  |
| ----------------- | -------------------- | ---- | --- | ------------- | ------- |
| Voidspire Systems | Executive Governance | Yes  | Yes | United States | Enabled |

> Jane can raise ten million in a single video call and forget your name before it ends. She's the visionary chaos kind of CEO: brilliant, magnetic, and completely detached from what her ideas cost the people who have to build them. Profit isn't the point. Expansion is. She creates crises on purpose because calm feels like falling behind, and her perfectionism only ever points outward, at other people's work. She knows Hammad keeps his people and she doesn't. She'll never say it, but it eats at her.

- **Loves:** disruptive pitches, the sound of her own voice in an all-hands call, the myth of the 80-hour week.
- **Hates:** process, quarterly reports, anyone who asks for leave or a raise.
- **Good at:** charisma, funding, strategic ruthlessness, spotting an opportunity before anyone else.
- **Falls apart when:** things go quiet. Boredom is the one thing she can't fundraise her way out of.
- **Wants:** a company so big that its success justifies all the damage, after the fact.
- **Tests:** Never clocks in and still sees everything (owner exemption, §4 and §6). Her own overtime approves itself (§6). Forgets the monthly payment because billing is boring, so Ads switch on while nobody's role changes (§11). Threatens to delete Voidspire and start over, which forces the keep-or-delete-account choice (§10).

## **02.** Malik Tremaine Carter

![malik-tremaine-carter](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/malik-tremaine-carter.png)

**Established · Manager · Specialist**

| Organization      | Bureau                                    | Paid | HoD | Country | Status  |
| ----------------- | ----------------------------------------- | ---- | --- | ------- | ------- |
| Voidspire Systems | Service Coordination & Technical Delivery | No   | Yes | Canada  | Enabled |

> Malik started as the analyst who built Jane's dashboards and ended up as the HoD who reads them. He knows more about Voidspire's real inefficiencies than anyone, and he's ruthlessly objective about all of it. People are variables to him, and variables get optimised. He's polite, soft-spoken and genuinely helpful in a meeting. He also worked out early that rejecting overtime puts ghost hours on his own record, while letting a request quietly expire puts them on Jane's. He has never rejected a single request. Make of that what you will.

- **Loves:** clean data, elegant pivot tables, being the only one who knows the truth.
- **Hates:** messy inputs, being asked to "spin" the numbers, meetings where he isn't needed.
- **Good at:** automation, data visualisation, reading a system for its loopholes.
- **Falls apart when:** he has to deliver bad news face to face, without a chart to hide behind.
- **Wants:** a portfolio impressive enough to leave and consult for whoever pays the most, Silverveil included.
- **Tests:** Lets overtime expire instead of rejecting it, so the ghost hours land on the employee and Jane, never on him (§9). Tries to approve Conrad's overtime and can't, because only the owner approves a Manager (§6). Tries to approve Conrad's link proposal and can't either (§7).

## **03.** Dimitri Lewis

![dimitri-lewis](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/dimitri-lewis.png)

**Freelancing · Employee · Specialist**

| Organization | Bureau                         | Paid | HoD | Country | Status  |
| ------------ | ------------------------------ | ---- | --- | ------- | ------- |
| Both         | Applied Research & Prototyping | No   | No  | Greece  | Enabled |

> Dimitri is the pragmatic outlier, the "you" character. He prototypes for both companies, delivers exactly what was agreed, and spends the rest of his day on his own software, the one that's going to set him free. His work is so good that nobody questions how little of it they see. Being paid per solution instead of per hour suits him perfectly: the price is agreed upfront, the work is done, and nobody gets to measure his worth by how long his status light stays green. Simplicity isn't his style. It's his boundary.

- **Loves:** elegant solutions, silent concentration, a second monitor nobody else can see.
- **Hates:** small talk, Jane's "quick favours", any request that comes with a meeting attached.
- **Good at:** learning new tech overnight, keeping his two lives perfectly separate.
- **Falls apart when:** someone asks him to pretend he cares about the mission statement.
- **Wants:** to take as much value (money, security, time) as he can for as little energy as possible, and fund his escape.
- **Tests:** Is a freelancer in both companies who tries to clock into Silverveil while still clocked into Voidspire, and gets told to clock out first (§8). Invoices per solution with his attendance attached (§9). Switches to offline mode on the ferry, but only after the warning and while still online, and only on one device (§12).

## **04.** Dale Sutton

![dale-sutton](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/dale-sutton.png)

**Established · Employee · Technician**

| Organization      | Bureau                 | Paid | HoD | Country | Status  |
| ----------------- | ---------------------- | ---- | --- | ------- | ------- |
| Voidspire Systems | Network Infrastructure | No   | No  | Germany | Enabled |

> Dale is a company man who secretly loves routine. He isn't brilliant and he knows it, but he's utterly dependable: every update, every patch, every boring maintenance window that keeps Voidspire's network alive. He believes Output Integrity comes from following the process, not from heroics, and he's usually right. He's the institutional memory nobody thanks until he's on leave. Voidspire doesn't deserve him, and the worst part is that he'd never think to say so.

- **Loves:** checklists, clean network maps, the feeling of a ticket closing properly.
- **Hates:** vague bug reports, people who skip the documentation, emergencies that were scheduled by someone else.
- **Good at:** patience, method, remembering how everything was set up and why.
- **Falls apart when:** a problem doesn't match any procedure he's ever written.
- **Wants:** to reach retirement without ever having to manage a crisis or make a big decision.
- **Tests:** Forgets to clock out every second Friday, so his default clock-out time fills the gap (Clocking Logic in CONTAINERS.md). His normal workday never counts as overtime (§9). As a Technician he opens on company links, which stay hidden until he clocks in (§7).

## **05.** Dr. Alaric Voss

![alaric-voss](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/alaric-voss.png)

**Established · Employee · Specialist**

| Organization      | Bureau                     | Paid | HoD | Country      | Status  |
| ----------------- | -------------------------- | ---- | --- | ------------ | ------- |
| Voidspire Systems | Cybersecurity & Compliance | No   | No  | South Africa | Pending |

> Dr. Voss was hired for prestige, not people. A data scientist turned security specialist, he answers only the tickets complex enough to interest him and reports only to Jane, which makes him her favourite tool for going around Malik. Jane promised him the HoD toggle when he joined. It never came. He tells everyone it's a formality anyway. He's obsessed with Output Integrity to the point where nothing else exists, and he's genuinely brilliant, which is exactly what makes him so hard to work with.

- **Loves:** pure mathematics, impenetrable encryption, classical music on noise-cancelling headphones.
- **Hates:** simplification, explaining his work in plain language, sloppy data from anyone at all.
- **Good at:** seeing long-term risks nobody else sees, absolute discretion.
- **Falls apart when:** someone asks a simple question he can't answer without admitting he doesn't know.
- **Wants:** to prove his academic theories work in the real world, with the company as his private laboratory.
- **Tests:** Wants HoD as an Employee. Jane tries to give it to him without making him Manager, and the system refuses the invalid combination (§3). If she makes him Manager with HoD, nothing changes until he accepts (§5). Stuck on Pending at the login screen.

## **06.** Conrad Guy

![conrad-guy](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/conrad-guy.png)

**Established · Manager · Specialist**

| Organization      | Bureau                        | Paid | HoD | Country        | Status  |
| ----------------- | ----------------------------- | ---- | --- | -------------- | ------- |
| Voidspire Systems | Systems Operations Management | No   | No  | United Kingdom | Enabled |

> Conrad is the one trying to bring order to Jane's chaos, and he'll tell you so. He believes Voidspire could run like a machine if people would just use the forms he spent months building. It's a noble fight, until you notice that every form puts one more decision through Conrad. He's a Manager without HoD status, so his link changes need the owner's approval. He submits them anyway, dozens a week, each one a perfectly formatted reminder that he's still waiting for the title. Bureaucratic excellence is a moral good to him. So is being needed.

- **Loves:** colour-coded folders, perfectly aligned documents, a request submitted in the correct format.
- **Hates:** late expense claims, ad-hoc fixes, anyone who goes around him instead of through him.
- **Good at:** planning, budgeting, building systems that actually work.
- **Falls apart when:** emotions enter the room, or the plan changes without a form.
- **Wants:** to make the company run correctly, with himself at the centre of "correctly".
- **Tests:** Is a Manager without HoD, so every link change he submits waits for Jane, and no HoD can approve it for her (§7). His own overtime can only be approved by Jane (§6). He can assign tickets but never approve leave (§6).

## **07.** Daniel Meyers

![daniel-meyers](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/daniel-meyers.png)

**Freelancing · Employee · Technician**

| Organization | Bureau                                       | Paid | HoD | Country | Status  |
| ------------ | -------------------------------------------- | ---- | --- | ------- | ------- |
| Both         | Technical Documentation & Knowledge Services | No   | No  | Ireland | Pending |

> Daniel writes documentation for both companies and design work for himself. He's a master of the minimum effort that keeps the contracts coming. Under hourly billing he was untouchable: a page that took twenty minutes went on the invoice as two hours, and nobody could prove otherwise. Per-solution pricing changed that overnight, and he's been quietly irritated ever since. He's charming, fast and genuinely good with words. He just uses them to look busier than he is.

- **Loves:** clean typography, his own autonomy, the anonymity of working from home.
- **Hates:** archiving old documents, anything that needs creativity he can't reuse elsewhere, being measured.
- **Good at:** typing fast, juggling two workloads, sounding thorough.
- **Falls apart when:** someone actually reads what he wrote.
- **Wants:** to use both companies' money as the launchpad for his own creative career.
- **Tests:** Is a freelancer in both companies who winds his laptop clock back during offline mode. Entries outside the offline window, overlapping, or adding up to more time than passed are dropped on sync (§12). His invoices are per solution now, so padded hours change nothing (§9). Stuck on Pending at the login screen.

## **08.** Ms. Kady Deacon

![kady-deacon](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/kady-deacon.png)

**Established · Employee · Specialist**

| Organization      | Bureau                     | Paid | HoD | Country   | Status  |
| ----------------- | -------------------------- | ---- | --- | --------- | ------- |
| Voidspire Systems | Software Quality Assurance | No   | No  | Australia | Blocked |

> Kady is Voidspire's memory and its quiet conscience. She tests the software, and she tests the people too, predicting problems long before they ship. She practises what she calls "ethical gossip": using what she knows about the company's politics to steer her colleagues away from obvious management traps. She protects other people's Effort Economy before her own. She also holds grudges like a vault and doesn't always pick the right fights, especially with Conrad, whom she can't bring herself to challenge directly.

- **Loves:** catching a bug before anyone else, a quiet private chat that saves someone's week.
- **Hates:** pointless drama, people wasting her time, Conrad's forms.
- **Good at:** emotional intelligence, forecasting conflict, soft power.
- **Falls apart when:** someone she protected turns out not to have deserved it.
- **Wants:** to keep order and shelter for the people she thinks are worth it.
- **Tests:** Submits leave that any HoD may approve (§6). As a Specialist she opens on her private bookmarks, which nobody else can see (§7). Typed the email code wrong six times while testing the login, so she's Blocked for a day.

## **09.** Seamus O'Donnell

![seamus-odonnell](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/seamus-odonnell.png)

**Established · Employee · Technician**

| Organization      | Bureau                             | Paid | HoD | Country | Status  |
| ----------------- | ---------------------------------- | ---- | --- | ------- | ------- |
| Voidspire Systems | Platform Reliability & Maintenance | No   | No  | Japan   | Deleted |

> Seamus keeps the servers running, and that's all he wants anyone to know about him. He's grizzled, blunt, and believes every problem can be solved with patience and a clear head. He has deliberately built an "out of sight, out of mind" reputation, which is exactly why Jane's chaos barely touches his platform. He has no title and doesn't want one, but anyone working nights on his systems gets his protection whether they asked for it or not. He won't fake an emergency, and he won't let anyone fake one on his watch.

- **Loves:** quiet uptime, tools that last, a monitoring dashboard with nothing to report.
- **Hates:** "emergencies" caused by bad planning, cheap infrastructure, managers telling him how to fix things.
- **Good at:** deep practical knowledge, unshakeable calm, guarding his colleagues' time.
- **Falls apart when:** he's forced into a new tool he didn't choose. He still keeps a handwritten log.
- **Wants:** a platform that's safe and working, and enough silence to prove his work is essential.
- **Tests:** Works nights on a flaky connection. When it drops while he's clocked in, only the time the server saw is confirmed and the rest is labelled offline (§12). His account was deleted mid-shift, so his clock-in ended at that moment and his hours stay archived (§10).

---

# Silverveil Logistics

## **10.** Hammad Dean

![hammad-dean](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/hammad-dean.png)

**Established · Manager · Technician**

| Organization         | Bureau                     | Paid | HoD | Country              | Status  |
| -------------------- | -------------------------- | ---- | --- | -------------------- | ------- |
| Silverveil Logistics | Logistics Executive Office | Yes  | Yes | United Arab Emirates | Enabled |

> Hammad used to be Jane's firefighter-in-chief, the human shield between her ideas and everyone who had to build them. He burnt out, walked away, and built Silverveil to be the company he wished he'd worked for. He's loyal and fiercely protective, and he's also Machiavellian when he needs to be. He plays the long game, knows exactly which of Jane's people are unhappy, and never forgets a favour or a slight. His people trust him completely. His competitors are right not to.

- **Loves:** coffee, one uninterrupted hour, watching his team leave on time.
- **Hates:** meetings that should have been emails, the word "innovation", Jane's weekend messages, which still arrive.
- **Good at:** staying calm under pressure, diagnosing anything, political chess.
- **Falls apart when:** he has to delegate. He still carries too much himself.
- **Wants:** to prove that a company can be loyal to its people and still win.
- **Tests:** Never clocks in (owner exemption, §4). Promoted Tasneem to Manager and explicitly chose HoD: Yes, and promoted Elliot with HoD: No (§5). Offered Zuberi Established status, which needed the double warning and typed confirmation (§5). Removed a contractor mid-shift, and the clock-in ended at that moment (§8, §10).

## **11.** Tasneem Kemp

![tasneem-kemp](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/tasneem-kemp.png)

**Established · Manager · Technician**

| Organization         | Bureau                         | Paid | HoD | Country | Status  |
| -------------------- | ------------------------------ | ---- | --- | ------- | ------- |
| Silverveil Logistics | Fleet Technology & Maintenance | No   | Yes | India   | Enabled |

> Tasneem is the ambitious one. She arrived with an engineering degree and a list of everything reactive about Silverveil's fleet systems, and Hammad, instead of feeling threatened, made her an HoD. Now she schedules maintenance before things break and approves overtime like she's reading evidence: carefully, and on time. She can come across as idealistic or arrogant, because she trusts data over gut feeling, and sometimes the gut was right. But no request on her desk has ever expired.

- **Loves:** predictive models, detailed asset tracking, a plan that survives contact with reality.
- **Hates:** "fix it when it breaks", waste, decisions made on vibes.
- **Good at:** documentation, energy, turning a broken system into a working one.
- **Falls apart when:** the problem has no data, only experience she doesn't have yet.
- **Wants:** to modernise a system that works on habit, believing order and fairness are the same thing.
- **Tests:** Approves two hours of a four-hour overtime request and rejects the other two; only those two become ghost hours (§9). Can't approve Elliot's overtime, because he's a Manager (§6). Publishes link changes directly while clocked in (§7).

## **12.** Elliot Crane

![elliot-crane](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/elliot-crane.png)

**Established · Manager · Specialist**

| Organization         | Bureau                         | Paid | HoD | Country   | Status  |
| -------------------- | ------------------------------ | ---- | --- | --------- | ------- |
| Silverveil Logistics | Operational Systems Management | No   | No  | Singapore | Enabled |

> Elliot sees work as a battle, and he wants everyone to see him fighting it. He measures success by noise: the most calls, the longest hours, the most tickets assigned before lunch. He's a gifted motivator, and his speeches genuinely move people. He's also the reason they're tired. He can assign tickets but can't approve anything, so he assigns relentlessly, as if being busy were the same as being in charge. Every interaction is a negotiation for resources, and every quiet colleague is a suspect.

- **Loves:** loud calls, shared spreadsheets everyone can see him editing, the phrase "all hands on deck".
- **Hates:** quiet teams, anything that looks like laziness to him, asking for help.
- **Good at:** motivation, deadlines, rallying a team that's already exhausted.
- **Falls apart when:** the crisis ends and nobody needs a hero.
- **Wants:** to be recognised as the company's hardest-working martyr.
- **Tests:** Assigns tickets to Sipho while Sipho isn't clocked in. The assignment works, but the work waits for a clock-in (§8). Can't approve anything as a Manager without HoD (§6). Hammad rejected his overtime once, and the ghost hours went to both of them (§9).

## **13.** Sipho Dlamini

![sipho-dlamini](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/sipho-dlamini.png)

**Freelancing · Employee · Technician**

| Organization | Bureau                               | Paid | HoD | Country | Status  |
| ------------ | ------------------------------------ | ---- | --- | ------- | ------- |
| Both         | Cross-Company Infrastructure Support | No   | No  | Kenya   | Blocked |

> Sipho keeps both companies' infrastructure alive and his own repair business growing on the side. He's the master of the quick, invisible fix: the outage that never happened, the part he sourced from somewhere nobody else would think to look. He gives exactly what was agreed and not a minute more, and he's honest about it, which is more than most can say. Per-solution pricing finally pays him for the fixes nobody saw. He doesn't do teams, and he doesn't trust new initiatives. Somehow, everyone still calls him first.

- **Loves:** simple mechanical solutions, predictable machines, working alone.
- **Hates:** paperwork, uniforms of any kind, small talk with management.
- **Good at:** electrical and mechanical work, time management, finding rare parts.
- **Falls apart when:** a job needs a committee.
- **Wants:** to build his own financial future, with both companies as his tools.
- **Tests:** Is a freelancer in both companies who receives tickets from Elliot while clocked out (§8). Can only be clocked into one company at a time (§8). No leave, no ghost hours, just per-solution invoices (§9). Blocked at the login screen.

## **14.** Zuberi Thorne

![zuberi-thorne](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/zuberi-thorne.png)

**Established · Employee · Technician**

| Organization         | Bureau                          | Paid | HoD | Country | Status  |
| -------------------- | ------------------------------- | ---- | --- | ------- | ------- |
| Silverveil Logistics | Data Integration & API Services | No   | No  | Brazil  | Enabled |

> Zuberi spent his career as a contractor: in fast, out faster, no strings. He kept every company at arm's length because every company had given him a reason to. Hammad offered him Established status, with the double warning and the typed confirmation, and for the first time in his life Zuberi typed it. He still works like a contractor: clear scope, clean handover, no free work "for the experience". But he stays now. He hasn't fully worked out why.

- **Loves:** clearly defined requirements, a finished integration, terms that mean what they say.
- **Hates:** scope creep, vague requests from Elliot, being asked to work for free.
- **Good at:** rapid deployment, negotiation, carrying no emotional baggage into a project.
- **Falls apart when:** a promise is broken. He leaves first and explains later.
- **Wants:** a professional life with no bad deals in it, and maybe, quietly, a place to belong.
- **Tests:** Accepted Established status while still freelancing for another company. That membership ended on acceptance, and his clock-in there was cut off at the same moment (§5, §8). Can't join a second company as Established (§5).

## **15.** Nyra Solari

![nyra-solari](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/nyra-solari.png)

**Established · Employee · Specialist**

| Organization         | Bureau                   | Paid | HoD | Country | Status  |
| -------------------- | ------------------------ | ---- | --- | ------- | ------- |
| Silverveil Logistics | Application Architecture | No   | No  | China   | Deleted |

> Nyra designs the structure everything else is built on, and she does it before anyone else has started, which is exactly why nobody notices. Her guides, templates and architecture diagrams are the reason Silverveil's systems survive Elliot's last-minute changes. She protects Output Integrity before the work begins, not after it breaks. She often feels invisible, because her best work is the disaster that never happens. You only notice her when she stops.

- **Loves:** clean diagrams, precise metrics, the quiet satisfaction of a flawless workflow.
- **Hates:** last-minute changes, vague requirements, any shortcut around the agreed design.
- **Good at:** attention to detail, clear writing, turning complexity into something people can follow.
- **Falls apart when:** the situation is high-pressure and has no structure at all.
- **Wants:** to prove that good systems, not heroic effort, are what actually keep a company alive.
- **Tests:** Keeps the best-organised personal bookmarks in the company, and they stay private even from Hammad (§7). Deleted her account with leave still pending: it was archived as rejected, without ghost hours (§10).

## **16.** Victor Langston

![victor-langston](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/victor-langston.png)

**Established · Employee · Technician**

| Organization         | Bureau            | Paid | HoD | Country     | Status  |
| -------------------- | ----------------- | ---- | --- | ----------- | ------- |
| Silverveil Logistics | Endpoint Services | No   | No  | Netherlands | Pending |

> Victor has been around longer than anyone, and he has the stories to prove it. He's warm, funny, and the first to welcome a new hire. He's also mastered disengaged fulfilment: exactly what's asked, no more, no less, with just enough institutional knowledge to stay impossible to replace. He knows every unwritten rule, and he uses them like a toll booth. Need something done fast? He'll remember an old procedure that makes it slow. The young ones adore him for about three months.

- **Loves:** long lunches, logging off exactly on time, reminiscing about how things used to be.
- **Hates:** new software, ambitious newcomers, any project that crosses more than one team.
- **Good at:** institutional memory, internal politics, knowing where every body is buried.
- **Falls apart when:** a system makes his knowledge searchable.
- **Wants:** to reach retirement having spent as little energy as humanly possible.
- **Tests:** Still talks about overtime that was rejected 25 months ago. It's still on record, but it no longer counts in his total (§9). Stuck on Pending at the login screen.

## **17.** Danish Copeland

![danish-copeland](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/danish-copeland.png)

**Established · Employee · Specialist**

| Organization         | Bureau                  | Paid | HoD | Country | Status  |
| -------------------- | ----------------------- | ---- | --- | ------- | ------- |
| Silverveil Logistics | Human Resources Systems | No   | No  | Sweden  | Blocked |

> Danish builds the HR systems: the policies, the onboarding flows, the wellness surveys. Every one of them is beautifully worded and quietly airtight. He came from a company like Voidspire, where his job was to keep the lawsuits away and the smiles on, and he never quite stopped. He lives in the gap of Ethical Geometry, between what's fair and what's merely defensible, and he's very good at making the second sound like the first. People love his workshops. Read his policies twice.

- **Loves:** bulletproof contracts, confidential agreements, a high-energy training session.
- **Hates:** legal risk, emotional employees, anyone who takes the word "wellness" seriously.
- **Good at:** policy language, public speaking, negotiation.
- **Falls apart when:** someone asks him what he actually believes.
- **Wants:** to protect the company from lawsuits and revolt, and to keep the machine turning, whoever it runs over.
- **Tests:** Drafts a policy to wipe ghost hours once a dispute is settled outside the app. The system won't allow it, not even for the owner (§9). Blocked at the login screen.

## **18.** Aelin Darrow

![aelin-darrow](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/aelin-darrow.png)

**Established · Employee · Specialist**

| Organization         | Bureau              | Paid | HoD | Country     | Status  |
| -------------------- | ------------------- | ---- | --- | ----------- | ------- |
| Silverveil Logistics | Workflow Automation | No   | No  | New Zealand | Deleted |

> Aelin automates workflows, and she's brilliant at it. She's also brilliant at making the numbers look right. She understands that her job is less about efficiency and more about managing how efficiency looks to the people above her. Her reports are flawless, her dashboards are green, and her automations quietly smooth away anything that would make a metric look bad. She resolves conflict by blurring it until nobody remembers what it was about. Everyone thinks she's on their side. That's the job.

- **Loves:** perfectly formatted reports, strategic alliances, moving a deadline without anyone noticing.
- **Hates:** emotional managers, surprise meetings, teams that won't follow her workflow.
- **Good at:** politics, communication, conflict resolution (often by confusion).
- **Falls apart when:** someone asks for the raw data instead of the dashboard.
- **Wants:** perfect balance between what leadership imagines and what's actually happening.
- **Tests:** Declined Hammad's offer to make her a Manager, because managers get measured. Declining left her role and permissions exactly as they were (§5). Deleted her account with overtime still pending: it closed as rejected, as ghost hours for her and Hammad (§10).

---

## **19.** Randomize Character

![randomize-character](https://raw.githubusercontent.com/TertiusRoach/development-portfolio_4.00/refs/heads/main/source/assets/png-files/archive-images/tralogfin-application/demonstration/original/radomize-character.png)

**Freelancing / Established · Employee / Manager · Technician / Specialist**

| Organization                              | Bureau    | Paid     | HoD      | Country | Status                               |
| ----------------------------------------- | --------- | -------- | -------- | ------- | ------------------------------------ |
| Voidspire Systems / Silverveil Logistics  | Randomize | Yes / No | Yes / No | From IP | Enabled / Pending / Blocked / Deleted |

> Randomize isn't a person. It's a button that picks one of the 18 characters above, so testers don't always reach for the same favourite. It can roll anyone, but only valid combinations, because the 18 are already valid. The country comes from the visitor's IP address. In `TraLogFin.json`, its record is the complete one: every field the app and the login system use, so the shape of a full record lives in one place.

> **Note:** the image file is named `radomize-character.png`, with the typo. The link above matches the file as it is.
