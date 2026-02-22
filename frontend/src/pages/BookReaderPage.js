import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, ChevronLeft, ChevronRight, Menu, X, Home,
  ArrowUp, List, ExternalLink
} from 'lucide-react';

// Book metadata
const bookInfo = {
  title: 'OnPoint Authority',
  subtitle: 'Building Sellable Business Systems Through Engineered Authority',
  author: 'Tessa Shepard',
  copyright: '© 2026 Tessa Shepard. All rights reserved.',
  publisher: 'OnPoint Authority Systems, Inc.'
};

// Chapter data with full content
const chapters = [
  {
    id: 'intro',
    number: 0,
    title: 'Introduction',
    content: `Most businesses never become sellable.

Not because they fail to generate revenue, but because they fail to engineer authority.

This book reveals the system that separates founder-dependent businesses from institutional-grade assets. It is the result of decades of experience building, selling, and analyzing businesses across multiple industries.

Authority is not influence. It is not reputation. It is not personal brand.

Authority is the systematic architecture of control, certification, and governance that allows a business to scale without its founder.

The OnPoint Authority System provides the blueprint for engineering this architecture. Each chapter builds on the last, creating a complete framework for transforming expertise into enterprise-grade intellectual property.

This is not theory. This is operational doctrine.`
  },
  {
    id: 'chapter-1',
    number: 1,
    title: 'Defining Authority',
    subtitle: 'The Foundation of Engineered Systems',
    content: `Authority is not influence. This is the first and most critical distinction that determines whether your business can be sold. Influence operates through persuasion. It requires constant presence, ongoing engagement, and personal charisma. When the influencer stops showing up, the influence disappears. Think of any celebrity-backed business—the moment the celebrity exits, the value collapses.

Authority operates through structure. It exists independent of any single person. It enforces compliance through systems, not personality. When properly engineered, authority persists regardless of who's present. Research from Harvard Business School's corporate governance studies demonstrates that businesses with codified authority structures command 3-5x higher valuation multiples than those dependent on founder relationships. This isn't opinion—it's quantifiable market data that private equity firms use daily.

**The Authority vs Influence Framework**

Most business owners confuse these concepts because they often overlap in early stages. A founder builds influence through expertise, then mistakes that influence for authority. The market sees through this immediately during due diligence. Consider two consulting firms, both generating $2M in annual revenue:

**Firm A:** Founder-led, built on personal reputation, clients come for the founder's expertise. When the founder takes vacation, revenue stops. The CRM shows all client relationships mapped to one person. No documented processes exist beyond "how the founder does it."

**Firm B:** System-led, built on certification standards, clients come for the methodology. When the founder takes vacation, revenue continues. The CRM shows relationships distributed across the system. Every process is documented, tested, and transferable.

Buyers discount Firm A by 40-60% because they're buying a person, not a system. Firm B commands premium multiples because they're buying transferable authority. The revenue is identical, but the valuation differs by millions.

**Informal vs Engineered Authority**

The second critical distinction: authority can emerge organically (informal) or be deliberately designed (engineered). Informal authority develops naturally through experience and reputation. It's valuable but not scalable or transferable. Most professional services firms operate here. The authority exists, but it's tied to individuals, not systems.

**Characteristics of informal authority:**
• Emerges organically from expertise
• Personality-dependent
• Undocumented decision processes
• Inconsistent enforcement
• Not legally defensible
• Low valuation multiples (2-4x EBITDA)

**Engineered authority** is architected deliberately. It includes certification gates, licensing terms, governance structures, and enforcement mechanisms. This is what creates institutional value.

**Characteristics of engineered authority:**
• Deliberately designed systems
• System-dependent, not personality-dependent
• Fully documented governance
• Systematic enforcement protocols
• Legally defensible framework
• Premium valuation multiples (8-15x EBITDA)

MIT Sloan research on business systems demonstrates that engineered authority systems reduce founder dependency by 70-80% while maintaining or improving operational performance. The system becomes more reliable than any individual—because individuals have bad days, take vacations, get sick, and eventually exit. Systems don't.

**Why This Matters for Your Business**

If your business value is tied to your personal reputation, you don't have authority—you have influence. And influence has a shelf life measured in attention spans and personal energy levels. The market prices this difference with brutal precision:

**Influence-based businesses: 2-4x EBITDA multiples**
Buyers see: Founder dependency, relationship risk, knowledge concentration, operational fragility

**Authority-based businesses: 8-15x EBITDA multiples**
Buyers see: Transferable systems, distributed knowledge, scalable operations, institutional resilience

That's not a small difference. On a $2M EBITDA business, that's the difference between a $6M exit and a $20M exit. Same revenue, same profit, entirely different outcome based on how authority is structured.

**The Path Forward**

The path forward isn't to build more influence. Every LinkedIn post, podcast appearance, and speaking engagement builds influence—and influence is valuable for lead generation. But it's not valuable for exit valuation.

The path forward is to engineer authority systems that work without you. To build the structures that make your expertise transferable, your operations replicable, and your governance systematic. That's what the remaining chapters detail: the specific architecture of engineered authority systems that command premium valuations.`,
    diagrams: ['01_Founder_Dependency_Loop.png']
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'Authority ≠ Experience',
    subtitle: 'Why Expertise Alone Fails to Create Value',
    content: `The most common mistake in professional services: assuming experience equals authority. It doesn't.

Experience is personal. It accumulates in individuals through years of work, pattern recognition, and skill development. It's valuable but not transferable. When the experienced person leaves, the experience goes with them.

Authority is systemic. It exists in structures, processes, and governance frameworks. When properly built, authority survives individual departure. It transfers with ownership because it's embedded in the business, not the person.

Research from Stanford Graduate School of Business shows that 73% of professional services firms fail to transfer successfully to new ownership specifically because they conflate expertise with authority. The buyers walk away during due diligence when they realize they're buying a person, not a system.

**The Experience Trap**

Consider the typical consulting firm trajectory:

**Year 1-5:** Founder builds personal reputation through excellent client work. Revenue grows based on founder's expertise and relationships. Clients tell their peers: "You have to work with Sarah—she's amazing."

**Year 6-10:** Founder tries to scale by hiring talented consultants. New hires are skilled but lack the founder's track record. Clients still ask for the founder. The founder becomes a bottleneck, working 70-hour weeks while the team sits partially utilized.

**Year 11-15:** Founder, exhausted, attempts exit. Discovers the business is worth far less than expected because it's entirely founder-dependent. Every revenue stream traces back to the founder's relationships. Every delivery methodology lives in the founder's head. The buyer's offer reflects this harsh reality.

This pattern repeats across industries: law, consulting, coaching, advisory services, technical expertise, creative services. The formula is identical: experience ≠ authority = low valuation.

**Why Buyers Discount Experience-Based Businesses**

Private equity and strategic acquirers use specific frameworks to assess business risk. One key metric: **founder dependency coefficient**. This measures what percentage of revenue, relationships, and operations require the founder's direct involvement.

**The calculation:**
• Revenue concentration: % of revenue from founder-sourced relationships
• Relationship ownership: % of client relationships the founder personally manages
• Knowledge concentration: % of critical processes that exist only in founder's expertise
• Decision authority: % of significant decisions requiring founder approval

**Above 30% dependency triggers automatic valuation discounts of 40-70%.**

Why such brutal discounts? Because experience doesn't transfer reliably:
• A surgeon's 20 years of experience can't be downloaded to a new hire
• A consultant's client relationships can't be systematically replicated
• A coach's intuitive pattern recognition can't be taught in a manual

But authority CAN transfer. When authority is embedded in systems—certification standards, licensing agreements, governance protocols, documented methodologies—it moves with ownership. The buyer isn't hoping the founder's magic rubs off on new hires. They're buying tested systems that produce consistent results.

**Authority Failure Modes**

Even when founders recognize the need for authority systems, they often fail in four predictable ways. Understanding these failure modes is critical because each leads to the same outcome: valuation discount.

**Failure Mode 1: No Enforcement**
Standards exist on paper but aren't applied in practice. The company has a beautiful operations manual that nobody follows. Certification requirements that aren't actually enforced. Policies that get ignored when convenient.

What buyers see: Authority theater. Systems that look good in a pitch deck but don't function in reality. During due diligence, they interview employees and discover the manual is just a document.

Valuation impact: 40-50% discount. The structure exists but doesn't function, which is often worse than having no structure at all—it signals organizational dysfunction.

**Failure Mode 2: Inconsistent Application**
Rules are enforced selectively based on relationships, not violations. The founder's favorite clients get exceptions. Certain team members bypass processes because "they know what they're doing." Standards bend for convenience.

What buyers see: Weak governance. If the founder won't enforce their own rules consistently, the system can't survive without them. This signals that authority is still personal, just dressed up as systematic.

Valuation impact: 35-45% discount. Worse than no enforcement because it demonstrates the founder knows what's needed but lacks the discipline to execute.

**Failure Mode 3: Overcentralization**
Authority exists but can't be delegated. The founder remains the sole decision-maker on significant issues. Board exists but is advisory-only. No distributed decision rights.

What buyers see: A different kind of founder dependency. The systems exist, but the founder is still the bottleneck. Scalability is impossible because every important decision flows through one person.

Valuation impact: 30-40% discount. Better than pure personality-based authority, but still fundamentally limited by founder bandwidth.

**Failure Mode 4: No Governance**
No systematic oversight or accountability structures. No board. No documented decision rights. No audit processes. The founder operates with complete autonomy.

What buyers see: Risk. What happens when decisions go wrong? Who provides oversight? How are standards maintained? The absence of governance means no checks on authority, which creates unlimited downside risk.

Valuation impact: 50-60% discount. Lack of governance is a red flag that suggests other foundational problems.

**Building Authority That Buyers Value**

The solution isn't to accumulate more experience. Twenty years of experience repeated twelve times isn't better than twenty years of experience—it's the same experience, just older.

The solution is to architect authority systems that operate independent of any individual's expertise. This requires five foundational elements:

**1. Codified Standards**
Document exactly what constitutes acceptable performance. Not vague guidelines—specific, measurable standards that can be objectively assessed. These standards define quality independent of who delivers it.

**2. Certification Systems**
Create gates that credential others to operate within the system. Certification isn't just training—it's a formal evaluation that someone meets the documented standards. This creates scarcity and control.

**3. Licensing Frameworks**
Grant controlled authority to operate under the system's brand and standards. Licensing isn't permission—it's a formal grant of authority with defined scope, duration, and terms. It creates ongoing oversight.

**4. Governance Structures**
Establish who has decision authority over what. Board composition, decision rights mapping, escalation protocols. Governance is what makes authority systematic rather than personal.

**5. Enforcement Mechanisms**
Build the systems that maintain standards through audits, reviews, and escalation processes up to and including license revocation. Enforcement is what makes authority real, not theoretical.

When these five elements exist and function, buyers stop seeing a person. They start seeing a system. And systems command premium valuations because they work without the founder.`,
    diagrams: ['02_Transferability_Gap_Chart.png', '01_Founder_Dependency_Loop.png']
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'Certification Systems',
    subtitle: 'Building the Gate',
    content: `Certification creates scarcity. In a world where everyone claims expertise, certification is the filter that determines who qualifies and who doesn't. This isn't about education. It's about control.

**The Certification Gate Model**

Every authority system needs a gate—a point where access is controlled, standards are enforced, and qualification is verified. Without this gate, you don't have authority. You have an open system where anyone can claim association. The certification gate serves three critical functions:

**Function 1: Quality Control**
It ensures everyone operating under your system meets documented standards. This protects your brand and creates consistency.

**Function 2: Scarcity Creation**
Not everyone gets through. This scarcity is what makes certification valuable. If everyone passes, certification is meaningless.

**Function 3: Revenue Generation**
Certification creates a natural monetization point. People pay to access the system, and that payment funds the infrastructure that maintains standards.

**Authority Qualification Funnel**

Research from professional certification bodies (CPA, CFA, PMP) shows that effective certification systems follow a consistent funnel structure with predictable drop-off rates:

**Stage 1: Awareness (100% of prospects)**
Anyone can learn about your system. This is public information—your methodology, your standards, your value proposition. No barriers to entry.

**Stage 2: Education (60-70% proceed)**
Formal training that teaches your methodology. Some people self-select out when they realize the commitment required. Others complete training but don't proceed to certification.

**Stage 3: Certification Exam (30-40% of educated)**
Formal assessment that proves competency. Pass rates should be 60-75% on first attempt. Too high means standards are too low. Too low means training is inadequate.

**Stage 4: Licensed Operation (80-90% of certified)**
Not everyone who passes certification chooses to operate as a licensed practitioner. Some want credential only. Those who proceed represent your active operator network.

Net result: 15-25% of initial prospects become licensed operators. This isn't failure—it's filtration. The funnel creates scarcity, which creates value.

**Certification Economics**

The franchise industry provides clear data on certification system ROI:

• **Initial Certification Fee:** $2,000-$15,000 per operator
  Covers: curriculum development, exam administration, quality assurance, initial training

• **Recertification Requirements:** Annual or biannual
  Ensures: continued competency, knowledge of updates, ongoing system engagement

• **Additional Revenue:** Continuing education, advanced certifications, specialty credentials

A certification system with 100 active operators generating $5,000 average certification revenue creates $500,000 in recurring, high-margin income. Cost to deliver: $150,000-$200,000. Net margin: 60-70%.

But the real value isn't the direct revenue. It's the control. Certification gives you the authority to say "You're qualified to represent this system" or "You're not." That's institutional power.

**Designing Certification That Works**

Ineffective certification is worse than no certification—it signals weak standards. Effective certification requires:

**1. Documented Competency Standards**
Exactly what someone must know and demonstrate to qualify. Not vague—specific, measurable, objective.

**2. Valid Assessment Method**
Tests that actually measure the documented standards. Many certifications test knowledge when they should test application. The exam must match what certified practitioners actually do.

**3. Defensible Pass/Fail Criteria**
Clear scoring rubrics that produce consistent results regardless of who scores. This protects against bias claims and ensures fairness.

**4. Recertification Requirements**
Standards evolve. Certified practitioners must stay current. Annual or biannual recertification ensures the credential remains meaningful.

**5. Revocation Process**
What happens when someone violates standards? Certification without revocation authority is not real authority.

When these elements exist, certification becomes the foundation of your authority system. It's the gate that controls who's in and who's out. And that control is what buyers pay for.`,
    diagrams: ['03_Authority_Governance_Stack.png', '15_Certification_Gate_Architecture.png']
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'Licensing & Enforcement',
    subtitle: 'Control Through System Design',
    content: `Licensing is not permission. This distinction determines whether you have authority or just goodwill. Permission is informal, revocable arbitrarily, and creates no ongoing obligations. Licensing is formal, revocable only for cause, and creates systematic oversight relationships.

**Licensing vs Permission Framework**

Compare two scenarios:

**Scenario A: Permission-Based**
"You can use our methodology if you follow our guidelines."

What this creates:
• No formal relationship
• No ongoing oversight
• No recourse for violations
• No recurring revenue
• Weak legal standing
• Low business value

**Scenario B: License-Based**
"You are granted authority to operate under our system subject to these terms, ongoing compliance requirements, and governance oversight."

What this creates:
• Formal contractual relationship
• Systematic oversight
• Clear violation consequences
• Recurring license fees
• Strong legal framework
• High business value

The difference isn't just legal terminology. It's fundamental architecture. Licensing creates the structure that makes authority systematic and transferable.

**The Legal Architecture of Licensing**

Franchise law provides the tested framework. While you may not be creating a traditional franchise, the licensing architecture is identical:

**License Agreement Components:**

1. **Grant of Rights**: Specific authority granted (use of IP, methodology, brand marks)
2. **Scope Definition**: Territory, industry, duration, exclusivity terms
3. **Performance Standards**: Measurable obligations licensee must meet
4. **Compliance Requirements**: Audits, reporting, quality assurance processes
5. **Financial Terms**: Fees, payment schedule, adjustment mechanisms
6. **Term and Renewal**: Duration, renewal conditions, non-renewal rights
7. **Termination Provisions**: When and how license can be revoked
8. **Post-Termination Obligations**: What happens after license ends

This isn't optional legal language. This is the architecture that makes authority enforceable.

**Enforcement Escalation Loop**

Authority without enforcement is theater. The market sees through this instantly during due diligence. Effective enforcement follows a documented escalation path:

**Level 1: Informal Correction** (Minor violations)
Private conversation, guidance provided, no formal record. Most issues resolve here.

**Level 2: Written Warning** (Repeated minor or single moderate violation)
Formal notice documenting the issue and required corrective action. Creates paper trail.

**Level 3: Probation** (Serious violation or pattern of moderate violations)
License status changes to probationary. Additional oversight, reporting requirements, timeline for resolution.

**Level 4: Suspension** (Severe violation or failed probation)
License temporarily suspended. No operations under system brand. Must remediate and apply for reinstatement.

**Level 5: Revocation** (Egregious violation or repeated severe issues)
Permanent license termination. All rights to use system, brand, methodology revoked. Post-termination obligations begin.

The presence of this escalation path—documented, followed consistently—is what makes authority real. Buyers don't just look for the documents. They check enforcement history.

**Licensing Revenue Model**

Licensing creates recurring revenue through multiple streams:

• **Initial License Fee: $10,000-$50,000**
  One-time payment for system access, initial training, setup support.

• **Annual License Fee: $5,000-$25,000**
  Ongoing payment for right to operate under system.

• **Revenue Share: 3-7% of operator revenue**
  Aligns incentives—system owner benefits when operators succeed.

• **Compliance Fees: $1,000-$5,000 annual**
  Covers audits, quality assurance, system updates, ongoing support.

A licensing system with 50 operators at $15,000 annual fees generates $750,000 recurring revenue. Add revenue share on $25M total operator revenue at 5% = $1.25M. Total system revenue: $2M+ from licensing alone. Margins: 70-85% after compliance costs.

**Why Buyers Pay Premiums for Licensing Systems**

Private equity loves licensing models. Why?

1. **Recurring Revenue**: Predictable, contracted income that renews annually
2. **Capital Efficiency**: No inventory, limited overhead, scales without linear cost increase
3. **Network Effects**: More operators = more value = more attractive to new operators
4. **Defensibility**: Licensed operators are contractually committed, can't easily switch
5. **Transferability**: System operates through governance, not founder relationships

A $2M EBITDA licensing business commands 10-15x multiples. A $2M EBITDA consulting business commands 3-5x multiples. The difference: systematized authority vs personal expertise.`,
    diagrams: ['04_Charter_Certification_License_Flow.png', '16_Revocation_Trigger_Flow.png', '10_Recurring_Enforcement_Cycle.png']
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'Governance Architecture',
    subtitle: 'Where Authority Lives',
    content: `Governance is not management. This confusion kills exits. Management executes within boundaries. Governance sets the boundaries. Management works IN the system. Governance works ON the system. The distinction determines whether your authority is personal or institutional.

**Governance vs Management**

Most founders do both—and that's the problem. When the same person sets strategy AND executes tactics, authority centralizes. The business becomes founder-dependent by design.

**Management decisions:**
• Client engagement approach
• Hiring for open positions
• Project resource allocation
• Operational problem solving
• Day-to-day execution

**Governance decisions:**
• System-wide standards
• Certification requirements
• License terms and conditions
• Enforcement policy
• Strategic direction

Management decisions can be delegated to employees. Governance decisions require formal authority structure. When founders try to do both, they create a bottleneck. When founders ONLY do management, they haven't built authority. When founders build governance structures that make decisions independent of their daily involvement, they've created transferable authority.

**Decision Rights Map**

Effective governance requires clear decision rights mapping. Who has authority to decide what? The RACI framework adapted for authority systems:

• **Responsible (R)**: Does the work
• **Accountable (A)**: Has decision authority
• **Consulted (C)**: Input sought before decision
• **Informed (I)**: Notified after decision

**Example: New Certification Standard**
• R: Curriculum team develops standard
• A: Certification Board approves standard
• C: Current certified operators provide input
• I: All certified operators notified of change

**Example: License Revocation**
• R: Compliance team investigates violation
• A: Governance Board makes revocation decision
• C: Legal counsel reviews process
• I: All licensed operators see outcome (privacy-appropriate)

Without this mapping, decisions default to "whoever is available" or "the founder." That's not governance—that's chaos dressed up as flexibility.

**Board Structure for Authority Systems**

The board isn't advisory. It's the governance authority. This is where institutional authority lives.

**Optimal board composition (3-5 members total):**
• Founder (1 seat) - provides continuity, industry knowledge
• Independent operators (1-2 seats) - represent licensee interests
• External experts (1-2 seats) - provide oversight, industry expertise

**NOT on the board:**
• Employees (creates conflicts)
• Family members (lacks independence)
• Investors only interested in financial return (misaligned incentives)

**Board authority:**
• Approve certification standards
• Review and approve license terms
• Oversee enforcement decisions
• Set strategic direction
• Hire/fire executive director

**Board does NOT:**
• Manage daily operations
• Make client decisions
• Hire/manage staff
• Execute marketing

The board is the system's ultimate authority. When structured properly, it operates independent of founder presence.

**Why Governance Creates Value**

Research from corporate governance studies shows clear correlation between governance quality and valuation multiples:

**Weak governance indicators:**
• No formal board
• Founder-only decision making
• Unclear authority structure
• Informal oversight
• **Valuation: 2-4x EBITDA**

**Strong governance indicators:**
• Independent board
• Documented decision rights
• Systematic oversight
• Regular governance meetings
• **Valuation: 8-12x EBITDA**

The difference: Buyers trust systems more than people. Strong governance signals that the business operates through institutional processes, not founder heroics.

**Building Governance That Buyers Value**

Governance can't be bolted on at exit. It must be functioning for 12-24 months minimum to have credibility. Buyers check:
• Board meeting minutes
• Decision documentation
• Governance policy adherence
• Independence verification

**Year 1: Establish Structure**
• Form board with independent members
• Document decision rights
• Create governance policies
• Hold monthly meetings

**Year 2: Build Track Record**
• Document significant decisions
• Demonstrate board authority
• Show founder appropriate restraint
• Create governance reporting

**Year 3: Prove Independence**
• Board makes decisions without founder presence
• Documented cases of board overruling founder
• Systematic governance processes functioning
• Ready for due diligence

By Year 3, buyers see a system, not a founder. That's when premium valuations become possible.`,
    diagrams: ['08_Governance_Control_Matrix.png', '12_Board_Oversight_Model.png']
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Authority Transfer',
    subtitle: 'Founder Exit Without System Collapse',
    content: `Most businesses collapse when founders exit. Not immediately—that would be obvious. The collapse happens slowly, invisibly, over 12-24 months. Clients start leaving. Not because service quality declined, but because the relationship was with the founder, not the firm. Key employees depart. They joined to work with the founder, not the system. Revenue declines. New business stopped coming because the founder was the rainmaker.

Research from the Family Business Institute shows that only 30% of family businesses survive to the second generation. For professional services firms, the number is worse: 15-20% successfully transfer to non-family buyers. The reason isn't operational failure. It's authority failure. The business was built on founder authority that couldn't transfer.

**The Authority Substitution Model**

Authority can transfer, but only when it's been deliberately substituted from personal to institutional before exit. This isn't a switch that flips. It's a gradual transition that takes 12-36 months.

**Phase 1: Founder as Authority (Months 0-6)**
Starting point: 100% of authority decisions flow through founder.

During this phase:
• Document every decision the founder makes
• Identify which decisions require founder expertise vs founder title
• Create decision matrices showing authority type
• Build the governance board (if not already present)

Key metric: Founder involvement in decisions. Baseline should be 80-100% at start.

**Phase 2: Founder + System (Months 6-12)**
The founder begins delegating authority to systems while remaining involved. Split becomes roughly 60% founder / 40% system.

During this phase:
• Transfer certification decisions to Certification Board
• Delegate routine enforcement to Compliance Committee
• Move standard-setting to documented processes
• Founder retains veto rights but rarely uses them

Key metric: System-based decisions should reach 40% by end of Phase 2.

**Phase 3: System + Founder (Months 12-24)**
The system becomes primary authority, with founder as oversight. Split becomes 40% founder / 60% system.

During this phase:
• System handles 60%+ of decisions without founder involvement
• Founder role shifts from decision-maker to advisor
• Board authority expands to include founder oversight
• Strategic decisions move to governance structures

Key metric: Founder should be unnecessary for operational decisions.

**Phase 4: System as Authority (Months 24-36)**
System operates independently. Founder involvement drops to 10-20%, purely strategic or advisory.

During this phase:
• 80%+ of decisions happen through governance
• Founder exit has no operational impact
• Authority is fully institutional
• Business is sellable at premium multiples

Key metric: Run a 30-day test where founder is completely unavailable. If business functions normally, transfer is complete.

**Why Most Transfers Fail**

Stanford research on business succession identifies four primary failure modes:

**Failure Mode 1: Too Fast**
Founder attempts to transfer authority in 6-12 months. System isn't mature enough. Timeline error: Authority transfer requires 24-36 months minimum.

**Failure Mode 2: Incomplete Transfer**
Founder transfers operational authority but retains all strategic authority. Authority error: Strategic authority must transfer to governance board.

**Failure Mode 3: No Measurement**
Transfer happens without metrics. No tracking of founder involvement percentages. Metric error: "Feels like it's working" isn't a transferability metric.

**Failure Mode 4: Cultural Resistance**
Organization culture is "founder as hero." Team members constantly escalate to founder even when systems exist. Cultural error: Culture must shift from "founder decides" to "system decides."

**Building Transfer-Ready Authority**

Authority that can transfer has five specific characteristics:

1. **Documented Decision Rights** - Every significant decision type has documented authority assignment.
2. **Functioning Governance** - Board meets regularly, makes real decisions, has documented disagreements with founder.
3. **Distributed Relationships** - No more than 30% of client relationships owned by founder.
4. **Systematic Enforcement** - Compliance and quality control happen through systems, not founder intervention.
5. **Operational Independence** - Business operates during founder absence.

**Valuation Impact of Transfer Readiness**

PE firms assess transfer readiness explicitly:

**Low Risk (90%+ transferable):**
• Documented governance
• Operating without founder for 12+ months
• Distributed relationships
• **Valuation: 10-15x EBITDA**

**Medium Risk (60-80% transferable):**
• Governance exists but recent
• Founder still involved in operations
• **Valuation: 6-9x EBITDA**

**High Risk (<50% transferable):**
• Weak or no governance
• Founder-dependent operations
• **Valuation: 3-5x EBITDA**

Same EBITDA, different transferability, 3-5x difference in valuation.`,
    diagrams: ['11_Transfer_Survival_Map.png', '13_Post-Founder_Continuity_Flow.png', '17_Authority_Enforcement_Logic.png']
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'Revenue Architecture',
    subtitle: 'Monetizing Authority Systems',
    content: `Revenue from authority differs fundamentally from service revenue. Understanding this difference determines whether you build a practice or a platform.

Service revenue trades time for money. Authority revenue trades systems for money.
Service revenue scales linearly. Authority revenue scales exponentially.
Service revenue dies with founder exit. Authority revenue survives succession.

Research from SaaS Capital shows that recurring revenue businesses command 8-12x EBITDA multiples while project-based businesses get 2-4x. The difference: predictability, scalability, and transferability.

**Services vs Authority Revenue**

Two consulting firms, identical annual revenue of $2M:

**Firm A: Services Revenue Model**
• Client projects: $1.8M (90%)
• Workshops/training: $200K (10%)
• Revenue requires active delivery
• Linear scaling (more revenue = more work)
• **Valuation: $4-6M (2-3x EBITDA)**

**Firm B: Authority Revenue Model**
• Licensing fees: $1.0M (50%)
• Certification revenue: $400K (20%)
• Renewal fees: $300K (15%)
• Compliance/audit fees: $200K (10%)
• Education/content: $100K (5%)
• Revenue requires authority maintenance, not active delivery
• Exponential scaling
• **Valuation: $16-24M (8-12x EBITDA)**

Same $2M revenue, 4x different valuation based on revenue architecture.

**The Authority Revenue Stack**

Authority systems create revenue through four layers:

**Layer 1: Education Revenue (Bottom)**
• Book sales: $20-35 per copy
• Course access: $500-2,000 per student
• Workshop tickets: $1,000-5,000 per attendee
• Margins: 30-50%
• Purpose: Lead generation and brand building

**Layer 2: Certification Revenue**
• Initial certification: $2,000-15,000 per candidate
• Recertification: $500-3,000 annually
• Advanced certifications: $5,000-25,000
• Margins: 50-70%
• Purpose: Gate control and quality assurance

**Layer 3: Licensing Revenue (Core)**
• Initial license fee: $10,000-50,000
• Annual license renewal: $5,000-25,000
• Territory expansion: $10,000-30,000 per territory
• Margins: 70-85%
• Purpose: Primary monetization of authority system

**Layer 4: Governance Revenue (Top)**
• Compliance fees: $1,000-5,000 per operator annually
• Audit fees: $2,000-10,000 per audit
• System updates: $500-2,000 per operator annually
• Margins: 85-95%
• Purpose: System maintenance and enforcement

**The Revenue Stack in Practice**

Authority system with 50 licensed operators:

**Education Layer:** $535,000 | Margin: 40% = $214,000 profit
**Certification Layer:** $725,000 | Margin: 60% = $435,000 profit
**Licensing Layer:** $1,000,000 | Margin: 80% = $800,000 profit
**Governance Layer:** $275,000 | Margin: 90% = $247,500 profit

**Combined Revenue: $2,535,000**
**Combined Profit: $1,696,500**
**Overall Margin: 67%**

Compare to services firm with same revenue but 25% margins = $633,750 profit. Authority revenue architecture produces 2.7x the profit on the same revenue.

**The Licensing Renewal Loop**

The most valuable characteristic of authority revenue: systematic renewal. Service revenue must be re-sold constantly. Authority revenue renews automatically unless operator violates terms.

**Key Metrics:**
• Renewal rate target: 90-95%
• Below 85%: System problems (too strict or poor value)
• Above 98%: Enforcement problems (too lenient)

The renewal loop creates predictable revenue. If you have 50 operators with 90% renewal rate, you know 45 will renew. That's $675,000 in committed revenue before you sell a single new license.

**Why Authority Revenue Creates Value**

Buyers pay premiums for authority revenue because it has five characteristics service revenue lacks:

1. **Predictability** - 90%+ renewal rates create revenue visibility
2. **Scalability** - Adding operators doesn't require linear cost increase
3. **Transferability** - Revenue comes from system, not founder
4. **Defensibility** - Licensed operators have switching costs
5. **Margin Expansion** - As operator count grows, margins improve

These characteristics justify 8-15x EBITDA multiples vs 2-4x for service businesses.`,
    diagrams: ['05_Authority_Revenue_Engine.png', '06_Cohort_Retention_Structure.png', '09_License_Scope_Hierarchy.png']
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Valuation Impact',
    subtitle: 'Why Authority Commands Premium Multiples',
    content: `Buyers pay for certainty. Everything about business valuation reduces to a single question: How certain am I that this business will continue to generate these returns after I own it?

Informal authority creates uncertainty. The business might collapse when the founder leaves.
Systematic authority eliminates uncertainty. The business will function because systems don't depend on individuals.

This certainty gap explains why identical businesses with identical revenue and identical EBITDA can have 3-5x different valuations.

**The Risk Discount Framework**

Private equity firms use explicit risk frameworks to adjust valuations:

**Baseline Valuation (Zero Risk):** 12-15x EBITDA

**Risk-Adjusted Discounts:**

• **Founder Dependency Risk: -30 to -50%**
  If revenue stops when founder leaves: -50% discount
  If operations continue normally: 0% discount

• **Relationship Concentration Risk: -20 to -40%**
  >50% would leave without founder: -40% discount
  <10% would leave: 0% discount

• **Process Documentation Risk: -15 to -30%**
  Undocumented processes: -30% discount
  Fully documented and tested: 0% discount

• **Governance Quality Risk: -10 to -25%**
  No governance structure: -25% discount
  Strong independent governance: 0% discount

• **Enforcement System Risk: -10 to -20%**
  No enforcement: -20% discount
  Proven enforcement system: 0% discount

**The Math of Authority Valuation**

Two businesses, identical $2M EBITDA:

**Business A: Informal Authority**
Baseline: 12x multiple = $24M
Total risk discounts: ~$18-20M
**Actual valuation: $4-6M (2-3x EBITDA)**

**Business B: Engineered Authority**
Baseline: 12x multiple = $24M
Total risk discounts: ~$1-2M
**Actual valuation: $20-24M (10-12x EBITDA)**

Same EBITDA. 4-6x different valuation. The difference: authority architecture.

**Authority Transferability Spectrum**

**Level 1: Personal Authority (Not Transferable)**
• Founder's reputation and relationships
• Undocumented expertise
• **Valuation: 2-3x EBITDA**

**Level 2: Documented Authority (Partially Transferable)**
• Processes documented
• Some governance structure
• **Valuation: 4-6x EBITDA**

**Level 3: Systematic Authority (Mostly Transferable)**
• Certification systems operational
• Active governance board
• **Valuation: 7-9x EBITDA**

**Level 4: Institutional Authority (Fully Transferable)**
• Complete authority systems
• Independent governance
• **Valuation: 10-15x EBITDA**

**Multiple Expansion Ladder**

The path from 3x to 15x EBITDA:

**Step 1: Services Baseline (3x)** - Pure consulting, founder-dependent
**Step 2: Documented Systems (5x)** - Processes documented, some recurring revenue
**Step 3: Certification Added (7x)** - Quality standards enforced
**Step 4: Licensing Active (10x)** - 10+ licensed operators, strong governance
**Step 5: Institutional Grade (12-15x)** - Network of 25+ operators, complete transferability

Each step requires 12-24 months of consistent execution. The climb from 3x to 15x takes 3-5 years of systematic authority building.

**What Buyers Actually Buy**

When buyers acquire authority systems, they're buying:

• The certification system (will produce qualified operators without you)
• The licensing framework (will control operator behavior without you)
• The governance structure (will make decisions without you)
• The enforcement system (will maintain standards without you)
• The operator network (will generate revenue without you)
• The brand (will attract new operators without you)

Every element works without you. That's why they pay premium multiples.`,
    diagrams: ['14_Authority_Enterprise_OS.png', '18_Audit_Escalation_Ladder.png']
  },
  {
    id: 'chapter-9',
    number: 9,
    title: 'Post-Founder Continuity',
    subtitle: 'Systems That Survive Succession',
    content: `Most businesses fail succession because they confuse presence with function. The founder is present, things function, therefore presence must cause function. This logic error destroys billions in business value annually.

**The Post-Founder Test**

One question reveals whether your business has real authority: "What breaks if you disappear for 30 days starting tomorrow?"

Be honest. Don't answer what you hope would happen. Answer what would actually break.

• If the answer is "nothing breaks"—your business has authority.
• If the answer is "several things break but can be fixed"—your business has partial authority.
• If the answer is "everything breaks"—you have a job, not a business.

Research from Exit Planning Institute shows that 88% of owners expect to sell their business for retirement funding. Yet only 20% actually complete successful exits. The primary failure: post-founder viability.

**The Four-Phase Transition Model**

**Phase 1: Founder as System (Months 0-6)**
The founder IS the system. All authority flows through founder presence.
• Founder involvement: 90-100% of decisions
• Transfer readiness: 0%

**Phase 2: Founder + System (Months 6-18)**
Authority begins distributing to systems while founder remains active.
• Founder involvement: 50-70% of decisions
• Transfer readiness: 30-40%

**Phase 3: System + Founder (Months 18-30)**
Systems become primary authority with founder as oversight.
• Founder involvement: 20-40% of decisions
• Transfer readiness: 60-75%

**Phase 4: System as Authority (Months 30+)**
Systems operate independently. Founder involvement becomes truly optional.
• Founder involvement: 0-20% of decisions
• Transfer readiness: 85-95%

**Culture as System**

One of the trickiest succession elements: culture. Founders often say "our culture won't survive without me." Usually true—because the culture is founder-dependent, not system-embedded.

**Founder-Dependent Culture:**
• Values are "what founder values"
• Standards are "what founder accepts"
• Behavior is "what founder models"
This culture dies with founder exit.

**System-Embedded Culture:**
• Values are documented and taught in certification
• Standards are codified and enforced systematically
• Behavior is defined in governance policies
This culture survives founder exit because it lives in systems, not in founder behavior.

**Exit Optionality Map**

Authority systems create multiple exit pathways:

**Option 1: Full Sale to PE or Strategic**
• Typical multiple: 8-15x EBITDA
• Best for: Founders wanting complete exit

**Option 2: Operator Network Expansion**
• Typical income: 3-7% of network revenue
• Best for: Founders wanting recurring income without operations

**Option 3: Franchise Conversion**
• Typical income: Initial fees + ongoing royalties
• Best for: Proven systems with strong brand

**Option 4: Spin-Off + Retained Governance**
• Typical value: Equity stake + governance fees
• Best for: Founders wanting partial involvement

**Option 5: Public Markets (IPO)**
• Typical valuation: 15-25x EBITDA
• Best for: Large authority systems ($10M+ revenue)

**The 30-Day Test**

The ultimate proof of post-founder continuity: the 30-day absence test.

Founder becomes completely unavailable for 30 days. No contact. No emergency calls. No "quick questions." Actually gone.

During this period:
• Business operates normally or it doesn't
• Decisions get made or they don't
• Quality is maintained or it isn't
• Standards are enforced or they aren't

If business functions normally during 30-day absence, you have authority. If crisis occurs requiring founder, you have dependency.

Run this test before attempting to sell. Buyers will effectively run the same test during due diligence.`,
    diagrams: ['07_Platform_Permission_Model.png', '13_Post-Founder_Continuity_Flow.png']
  },
  {
    id: 'chapter-10',
    number: 10,
    title: 'Authority as Asset',
    subtitle: 'The Sellable System',
    content: `Authority is not infrastructure. This final distinction determines whether you build an expensive tool or a valuable asset.

Infrastructure enables operations. Everyone needs it. No one pays premium multiples for it. Your CRM, accounting system, project management tools—these are infrastructure. Necessary but not valuable.

Authority creates competitive advantage. Not everyone has it. Buyers pay premium multiples specifically for it. Your certification system, licensing framework, governance structure—these create authority. Valuable because defensible.

**Infrastructure vs Competitive Advantage**

**Infrastructure Investments:**
• Examples: Website, CRM, accounting system, office space
• Can be replicated easily
• No competitive differentiation
• Valuation impact: Zero to minimal

**Authority Investments:**
• Examples: Certification system, licensing framework, governance board
• Difficult to replicate (time, expertise, track record)
• Meaningful differentiation
• Valuation impact: 3-5x multiple difference

**The Key Question:** "Can competitors replicate this easily?"
If yes → infrastructure (necessary but not valuable)
If no → competitive advantage (valuable)

**The Complete Authority Architecture**

What you've built by following this system:

**Foundation Layer: Standards & Certification**
Purpose: Control who qualifies
Value creation: Gate control. You determine who's in/out.

**Structure Layer: Licensing & Enforcement**
Purpose: Control how they operate
Value creation: Ongoing control. Creates recurring revenue.

**Authority Layer: Governance**
Purpose: Control who decides what
Value creation: Institutional permanence. Creates transferability.

**Revenue Layer: Monetization**
Purpose: Convert authority to income
Value creation: Multiple revenue streams with 60-85% margins.

All four layers working together = Authority System = Sellable Asset

**The Replication Barrier Model**

What prevents competitors from copying your authority system?

**Barrier 1: Time** - Building credible authority takes 24-36 months minimum
**Barrier 2: Expertise** - Requires specialized legal, assessment, governance knowledge
**Barrier 3: Trust** - Accumulates slowly through consistent performance
**Barrier 4: Network Effects** - More operators = stronger brand = better operators apply
**Barrier 5: Legal Protection** - Trademarks, copyrights, licensed IP, trade secrets

Combined Effect: These five barriers create a moat that takes competitors 5-7 years to cross.

**The Transformation**

You start with expertise (worth 2-3x EBITDA).
You end with authority (worth 10-15x EBITDA).
The difference (3-5x on the multiple) = $6-20M on a $2M EBITDA business.

That's the value of architected authority.

**Your Path Forward**

You now understand what buyers pay premiums for:
• Not expertise → Authority
• Not relationships → Systems
• Not reputation → Architecture
• Not personality → Governance

You know the timeline:
• Year 1: Build foundation (Cert + License + Governance)
• Year 2: Prove systems (Test independence, show renewals)
• Year 3: Scale operations (Grow network, increase margins)
• Year 4-5: Achieve independence (Complete transfer, maximize value)

The question is not whether your expertise has value. The question is whether your business can capture and transfer that value without you.

That's what authority architecture solves.

Now it's your turn to build yours.`,
    diagrams: ['14_Authority_Enterprise_OS.png', '11_Transfer_Survival_Map.png']
  },
  {
    id: 'about',
    number: 99,
    title: 'About Tessa Shepard',
    content: `I build businesses that function without the founder.

For over a decade, I've worked at the intersection of strategy, infrastructure, and authority, helping experts and operators transform founder-dependent businesses into structured, scalable, and transferable assets.

My work is not about visibility, virality, or content volume. It's about leverage.

I specialize in designing authority-led business systems—frameworks where positioning, operations, and monetization are engineered to work together, so the business continues to perform with or without daily founder involvement.

Through OnPoint Authority Systems, I advise on:
• Authority positioning that compounds over time
• Infrastructure that replaces hustle with systems
• Business models designed for longevity, licensing, or exit

I am known for simplifying complexity, eliminating inefficiencies, and building structures that make a business valuable beyond the individual.

My clients are not beginners. They are experts, consultants, and operators who already have demand—but want a business that:
• Scales cleanly
• Operates predictably
• Holds value independently of them

I don't teach content. I don't sell tactics. I build the underlying architecture that turns expertise into an enterprise.`
  }
];

const BookReaderPage = () => {
  const [activeChapter, setActiveChapter] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check for chapter hash in URL
    const hash = location.hash.replace('#', '');
    if (hash && chapters.find(c => c.id === hash)) {
      setActiveChapter(hash);
    }
  }, [location]);

  const currentChapter = chapters.find(c => c.id === activeChapter) || chapters[0];
  const currentIndex = chapters.findIndex(c => c.id === activeChapter);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToChapter = (chapterId) => {
    setActiveChapter(chapterId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', `#${chapterId}`);
  };

  // Format content with proper paragraphs and styling
  const formatContent = (content) => {
    if (!content) return null;
    
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((para, index) => {
      // Check if it's a heading (starts with **)
      if (para.startsWith('**') && para.endsWith('**')) {
        const headingText = para.replace(/\*\*/g, '');
        return (
          <h3 key={index} className="text-xl font-bold text-[#0B1C3E] mt-8 mb-4" style={{ fontFamily: 'Libre Baskerville, serif' }}>
            {headingText}
          </h3>
        );
      }
      
      // Check if it's a subheading
      if (para.startsWith('**')) {
        const parts = para.split('**');
        return (
          <div key={index} className="mt-6 mb-3">
            {parts.map((part, i) => 
              i % 2 === 1 ? (
                <h4 key={i} className="text-lg font-semibold text-[#0B1C3E] inline">{part}</h4>
              ) : (
                <span key={i} className="text-[#374151]">{part}</span>
              )
            )}
          </div>
        );
      }
      
      // Bullet points
      if (para.includes('\n•') || para.startsWith('•')) {
        const lines = para.split('\n');
        return (
          <ul key={index} className="list-none space-y-2 my-4 ml-4">
            {lines.map((line, i) => {
              if (line.startsWith('•')) {
                const bulletContent = line.substring(1).trim();
                // Check for bold text within bullet
                if (bulletContent.includes('**')) {
                  const parts = bulletContent.split('**');
                  return (
                    <li key={i} className="flex items-start gap-2 text-[#374151]">
                      <span className="text-[#C5A059] mt-1">•</span>
                      <span>
                        {parts.map((part, j) => 
                          j % 2 === 1 ? <strong key={j} className="text-[#0B1C3E]">{part}</strong> : part
                        )}
                      </span>
                    </li>
                  );
                }
                return (
                  <li key={i} className="flex items-start gap-2 text-[#374151]">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span>{bulletContent}</span>
                  </li>
                );
              }
              return <span key={i}>{line}</span>;
            })}
          </ul>
        );
      }
      
      // Regular paragraph with possible bold text
      if (para.includes('**')) {
        const parts = para.split('**');
        return (
          <p key={index} className="text-[#374151] leading-relaxed mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-[#0B1C3E]">{part}</strong> : part
            )}
          </p>
        );
      }
      
      return (
        <p key={index} className="text-[#374151] leading-relaxed mb-4">
          {para}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C3E] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors lg:hidden"
              data-testid="toggle-sidebar"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <BookOpen className="w-6 h-6 text-[#C5A059]" />
              <span className="font-semibold hidden sm:inline">OnPoint Authority</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Link 
              to="/systems-book" 
              className="text-sm text-white/70 hover:text-white flex items-center gap-1 transition-colors"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Systems Book</span>
            </Link>
            <Link 
              to="/" 
              className="text-sm text-white/70 hover:text-white flex items-center gap-1 transition-colors ml-4"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-white border-r border-gray-200 overflow-y-auto transition-transform z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6">
            <h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Contents</h2>
            <nav className="space-y-1">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => navigateToChapter(chapter.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeChapter === chapter.id
                      ? 'bg-[#0B1C3E] text-white'
                      : 'text-[#374151] hover:bg-[#F3F4F6]'
                  }`}
                  data-testid={`chapter-nav-${chapter.id}`}
                >
                  <span className="font-medium">
                    {chapter.number === 0 ? '' : chapter.number === 99 ? '' : `Chapter ${chapter.number}: `}
                    {chapter.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <article className="max-w-3xl mx-auto px-6 py-12">
            {/* Chapter Header */}
            <header className="mb-12 pb-8 border-b border-gray-200">
              {currentChapter.number > 0 && currentChapter.number < 99 && (
                <p className="text-[#C5A059] text-sm font-medium mb-2">
                  Chapter {currentChapter.number}
                </p>
              )}
              <h1 className="text-4xl font-bold text-[#0B1C3E] mb-3" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                {currentChapter.title}
              </h1>
              {currentChapter.subtitle && (
                <p className="text-xl text-[#6B7280] italic">
                  {currentChapter.subtitle}
                </p>
              )}
            </header>

            {/* Chapter Content */}
            <div className="prose prose-lg max-w-none" style={{ fontFamily: 'Georgia, serif' }}>
              {formatContent(currentChapter.content)}
            </div>

            {/* Chapter Diagrams */}
            {currentChapter.diagrams && currentChapter.diagrams.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-[#0B1C3E] mb-6" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Key Diagrams
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentChapter.diagrams.map((diagram, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={`/images/diagrams/${diagram}`} 
                        alt={diagram.replace('.png', '').replace(/_/g, ' ')}
                        className="w-full h-auto"
                      />
                      <p className="p-3 text-xs text-[#6B7280] text-center border-t border-gray-100">
                        {diagram.replace(/^\d+_/, '').replace('.png', '').replace(/_/g, ' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Chapter Navigation */}
            <nav className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
              {prevChapter ? (
                <button
                  onClick={() => navigateToChapter(prevChapter.id)}
                  className="flex items-center gap-2 text-[#0B1C3E] hover:text-[#C5A059] transition-colors"
                  data-testid="prev-chapter"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <div className="text-left">
                    <p className="text-xs text-[#6B7280]">Previous</p>
                    <p className="font-medium">{prevChapter.title}</p>
                  </div>
                </button>
              ) : <div />}
              
              {nextChapter ? (
                <button
                  onClick={() => navigateToChapter(nextChapter.id)}
                  className="flex items-center gap-2 text-[#0B1C3E] hover:text-[#C5A059] transition-colors text-right"
                  data-testid="next-chapter"
                >
                  <div>
                    <p className="text-xs text-[#6B7280]">Next</p>
                    <p className="font-medium">{nextChapter.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : <div />}
            </nav>
          </article>

          {/* Footer */}
          <footer className="bg-[#0B1C3E] text-white py-8 mt-16">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <p className="text-sm text-white/60">{bookInfo.copyright}</p>
              <p className="text-sm text-white/60 mt-1">{bookInfo.publisher}</p>
              <div className="mt-4 flex justify-center gap-4">
                <Link to="/systems-book" className="text-sm text-[#C5A059] hover:underline flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" />
                  Systems Book Documentation
                </Link>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-[#0B1C3E] text-white rounded-full shadow-lg hover:bg-[#C5A059] transition-colors z-50"
          data-testid="scroll-to-top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default BookReaderPage;
