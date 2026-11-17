import type { Metadata } from "next";
import Footer from "@/components/Footer";
import {
  CaseHero, Overview, CaseBody, Section, NextCase, P, Accent, Rows, Labeled, Figure, Pair, Diagram, BigNumber, Table, Quote,
} from "@/components/case/Case";
import s from "@/components/case/case.module.css";

export const metadata: Metadata = {
  title: "JobsLab — Bohdan Chuprina",
  description: "Speeding up recruiters' daily work in an ATS. 18 of 28 proposed changes shipped.",
  openGraph: { title: "JobsLab — Bohdan Chuprina", description: "Speeding up recruiters' daily work in an ATS. 18 of 28 proposed changes shipped.", images: [{ url: "/og/jobslab.jpg", width: 1200, height: 630 }] },
};

const I = "/img/jobslab/";

const nav = [
  { id: "tldr", title: "TL;DR" },
  { id: "context", title: "Context" },
  { id: "problem", title: "Problem" },
  { id: "insight", title: "Key insight" },
  { id: "card", title: "Candidate card" },
  { id: "stage", title: "Stage change" },
  { id: "scheduling", title: "Interview scheduling" },
  { id: "preparation", title: "Interview preparation" },
  { id: "navigation", title: "Navigation" },
  { id: "validation", title: "Validation" },
  { id: "result", title: "Result" },
];
const n = (id: string) => nav.findIndex((x) => x.id === id) + 1;
const S = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <Section id={id} n={n(id)} title={nav[n(id) - 1].title}>{children}</Section>
);

export default function JobsLab() {
  return (
    <main>
      <CaseHero
        title="JobsLab"
        subtitle="Speeding up recruiters' daily work in an ATS"
        cover={`${I}cover.webp`} coverAlt="JobsLab ATS pipeline after the redesign" coverW={1280} coverH={640}
      />
      <Overview
        meta={[
          ["Role", "Product designer (solo)"],
          ["Timeline", "7 weeks · Mar–Apr 2026"],
          ["Platform", "Web · ATS"],
          ["Research", "Audit · 5 interviews · 7 workflows · usability test"],
        ]}
        numbers={[
          { value: "18 of 28", label: "proposed changes shipped by the JobsLab team", accent: true },
          { value: "13 → 7", label: "steps to schedule an interview" },
          { value: "5", label: "client agencies use the shipped version" },
        ]}
      />

      <CaseBody nav={nav}>
        <S id="tldr">
          <P size="lead">
            Recruiters at a staffing agency kept core work in Google Drive, Google Calendar and Excel, even though JobsLab already had most of what they needed. I redesigned the four moments where people left the ATS, and the team shipped <Accent>18 of my 28 proposed changes</Accent>.
          </P>
        </S>

        <S id="context">
          <P>I used JobsLab daily as a recruiter at HR Unit. For my first month, I avoided it: the interface was hard to read, and colleagues showed me workarounds faster than the product showed me features. Later I realised this wasn&apos;t a beginner problem. Experienced colleagues had simply built better workarounds.</P>
          <P>Competitor ATS platforms aren&apos;t open for testing, so I reconstructed their workflows from documentation, video walkthroughs and screenshots shared by recruiters. Two constraints shaped the design most: more real use of the system without a large engineering cost, and existing users keeping their muscle memory.</P>
          <P size="s" muted>Scope: the recruiter pipeline inside the ATS module. HRM, CRM and analytics were out of scope.</P>
        </S>

        <S id="problem">
          <P>The audit and interviews kept pointing to the same pattern: people left the ATS at exactly the moments it needed them.</P>
          <Rows items={[
            ["Interviews were created twice.", "Recruiters scheduled in Google Calendar, then copied the meeting link back into the ATS by hand."],
            ["Contacting a candidate meant copy-paste.", "Phone numbers sat behind up to three nested views, then went into Telegram manually."],
            ["Moving a candidate sent them an email.", "Notification settings were hidden, so recruiters hesitated to update stages, and the pipeline went stale."],
            ["Feedback was optional and hidden.", "Rejection reasons stayed on the default value, and managers counted results in Excel."],
          ]} />
          <P>For the business, every workaround removed data from the system. An ATS without reliable data can&apos;t support reporting, and reporting is a large part of why agencies pay for one.</P>
          <Figure src={`${I}pipeline-before.webp`} alt="The old JobsLab pipeline: dense columns of candidate cards and a filter panel" w={856} h={425} caption="JobsLab pipeline before the redesign" />
        </S>

        <S id="insight">
          <P size="big">Most fixes already existed in the product. <Accent>They were just hidden.</Accent></P>
          <P>Interview scheduling, filters to hide rejected candidates, notification settings, the full candidate profile — all of it sat behind context menus, separate pages or settings. Beginners used only 10–20% of the system. Competitor research confirmed it: JobsLab&apos;s feature set was comparable to Hurma and CleverStaff, and the gap with Workable was in workflow design, not functionality.</P>
          <P size="s" muted>“Some features are there, but they&apos;re difficult to find unless someone shows you.” — interview participant</P>
          <P>So the principle became: surface before you build. Connect what already exists to the moment the recruiter needs it.</P>
        </S>

        <S id="card">
          <P>The pipeline card showed a name and little else. To check salary, phone or CV, recruiters opened up to three nested views, and some didn&apos;t know the full profile existed.</P>
          <P>I turned the card into a snapshot: expected salary, contacts with one-click copy, CV, social links, and a single contact button that opens Telegram, a call or email. Only what recruiters check before opening a profile made it onto the card — density kills scanning on a busy stage.</P>
          <P>Checking contacts now takes zero profile opens, and contacting a candidate goes from 8 steps to 5. The team shipped the contacts, social links and contact button; salary and CV on the card weren&apos;t adopted.</P>
          <Pair>
            <Figure src={`${I}card-before.webp`} alt="Candidate card before: name and email only" w={416} h={300} caption="Before · name and email only" />
            <Figure src={`${I}card-after.webp`} alt="Candidate card after: salary, phone with copy button, social links" w={416} h={300} caption="After · salary, contacts with copy, socials" />
          </Pair>
        </S>

        <S id="stage">
          <Labeled items={[
            ["Problem", "Every drag between stages emailed the candidate, including the custom stages recruiters created just for themselves. After closing a vacancy, recruiters tidied the pipeline for the records, and rejected candidates got emails that looked like they were back in the running. So people stopped moving cards, and the pipeline went stale."],
            ["Solution", "The kanban board stays, because everyone already knew it. I made it more usable and separated notifications from moving: a card can go to any stage silently, and the recruiter decides with a toggle when the candidate should hear about it. After an interview, an Add feedback window opens on its own, and feedback can be requested from an interviewer in one step."],
            ["Trade-off", "Candidates no longer get an automatic update on every move, so a recruiter has to choose to notify them. For custom stages that is the point. For the moments that matter, the reject dialog asks for a reason and offers to send the email right there."],
            ["Shipped", "The notification toggle, the required rejection reason, automatic archiving and the feedback windows. Interview feedback stayed optional."],
          ]} />
          <Figure src={`${I}pipeline-drag.webp`} alt="Redesigned pipeline: a candidate card being dragged between stages" w={856} h={617} caption="Drag-and-drop between stages, as before" />
          <Figure src={`${I}add-feedback.webp`} alt="Add feedback dialog with recommendation, stage and feedback field" w={416} h={512} caption="Add feedback · opens after the interview" maxW={416} />
        </S>

        <S id="scheduling">
          <P>Scheduling took 13 steps across the ATS and Google Calendar. It lived in a three-dot menu and only worked once the candidate was already on the Interview stage.</P>
          <P>Scheduling is a consequence of the stage change, not a separate task, so moving a candidate to Interview now opens it right away. The recruiter picks a date and an interviewer, and the system generates the meeting link and adds it to the calendar. 13 steps → 7, two tools → one. Both changes shipped.</P>
          <Pair>
            <div>
              <BigNumber value="13" label="steps before · ATS + Google Calendar" />
              <BigNumber value="7" label="steps after · everything inside the ATS" accent />
              <p className="t-body-s" style={{ marginTop: 24 }}>Moving a candidate to the Interview stage opens this form right away. Date, interviewer and agenda in one step; the meeting link and calendar event are generated.</p>
            </div>
            <Figure src={`${I}setup-interview.webp`} alt="Set up interview form: applicant, date and time, meeting link, interviewers, agenda" w={416} h={636} caption="Set up interview · opens on stage change" />
          </Pair>
        </S>

        <S id="preparation">
          <P>Before an interview, recruiters jumped between the ATS, a brief in Google Docs, an interview script in another file and the candidate&apos;s CV: 9 steps across 3 tools.</P>
          <P>Each vacancy now has a Files tab, so the brief, notes and interview script sit next to the candidate. 6 steps, one tool. Files per vacancy and the preparation workspace shipped.</P>
          <Diagram label="Current flow · 9 steps, 3 tools" src={`${I}flow-current.webp`} alt="Current flow: Open ATS, Jobs, Select vacancy, Job description, Brief in Google Docs, Script in a separate file, Find candidate, Profile, Resume, Ready" w={856} h={184} />
          <Diagram label="Improved flow · 6 steps, 1 tool" src={`${I}flow-improved.webp`} alt="Improved flow: Open ATS, Jobs, Select vacancy, Files tab, Profile, CV and feedback, Ready" w={856} h={56} />
          <Figure src={`${I}files-tab.webp`} alt="Files tab inside a vacancy with brief, interview and other sections" w={856} h={628} caption="Files tab inside a vacancy" />
        </S>

        <S id="navigation">
          <P>Pipeline was a separate section, even though users reached it through Jobs anyway. Candidates could be added from four places, and only one allowed uploading a CV in the same step.</P>
          <P>I moved Pipeline inside each Job, consolidated candidates into one database, and added a global Create button with Add Candidate as its primary action. A full navigation rebuild was off the table because of the relearning cost. All four changes shipped.</P>
          <Pair>
            <Figure src={`${I}ia-existing.webp`} alt="Existing information architecture: Jobs, Active Applicants, Pipeline, Candidate Database, Analytics, ATS Settings, Sourcing" w={416} h={891} />
            <Figure src={`${I}ia-redesigned.webp`} alt="Redesigned information architecture: Pipeline inside Jobs, one Candidate Database, new Quick Create and Tips" w={416} h={1056} />
          </Pair>
        </S>

        <S id="validation">
          <P>I tested the prototype with participants from the interview group. They already knew the old system, which helped me compare but also biased the results toward familiarity.</P>
          <P size="s" muted>4 think-aloud sessions with recruiters who use an ATS every day, same clickable prototype and tasks. 2 sessions were recorded; the table below comes from those.</P>
          <Table
            caption="Usability test · recorded sessions"
            head={["Task", "Participant 1", "Participant 2"]}
            rows={[
              { task: "Find a candidate in a vacancy", cells: [{ text: "Done" }, { text: "Struggled, then done", tone: "muted" }] },
              { task: "Copy a candidate’s contacts", cells: [{ text: "Looked for a copy icon", tone: "muted" }, { text: "Looked for a copy icon", tone: "muted" }] },
              { task: "Clone a vacancy", cells: [{ text: "Done" }, { text: "Done" }] },
              { task: "Create a similar vacancy", cells: [{ text: "—", tone: "muted" }, { text: "Unclear label", tone: "muted" }] },
              { task: "Reject with a reason", cells: [{ text: "Done, wants email toggle" }, { text: "—", tone: "muted" }] },
              { task: "Find vacancy files for interview prep", cells: [{ text: "Not found", tone: "accent" }, { text: "Done" }] },
              { task: "Copy the vacancy link", cells: [{ text: "Slow, icon not recognised", tone: "muted" }, { text: "—", tone: "muted" }] },
            ]}
          />
          <Quote text="“Honestly, I never used it. It’s a useless thing.”" by="Participant 1, about the old global pipeline" />
          <Quote text="“My colleagues don’t always get around to sending a rejection. A send-email toggle right here would help.”" by="Participant 1" />
        </S>

        <S id="result">
          <div>
            <p className="t-display-xl accent reveal">18 of 28</p>
            <p className="t-body-s muted" style={{ marginTop: 8 }}>proposed changes shipped by the JobsLab team</p>
          </div>
          <Rows items={[
            ["Candidate card", "contacts with one-click copy, social links, contact button"],
            ["Pipeline", "notification toggle, required rejection reason, archive"],
            ["Interviews", "scheduling on stage change, calendar integration"],
            ["Communication", "emails from the recruiter's address, editable templates"],
            ["Navigation", "Pipeline inside Jobs, one candidate database, global Create"],
            ["Workspace", "Jobs table, files per vacancy, interview preparation workspace"],
          ]} />
          <P>What they didn&apos;t take is just as useful: mandatory interview feedback, the single stage-change step, salary on the card and the manager dashboard. Next I&apos;d want to see the share of interviews now scheduled inside the ATS.</P>
          <div className={s.diagram}>
            <p className="t-mono-cap muted">Also designed</p>
            <Pair>
              <Figure src={`${I}jobs-table.webp`} alt="Jobs table view with status, client and responsible columns" w={416} h={300} caption="Jobs table" />
              <Figure src={`${I}tips.webp`} alt="Contextual tip for new users over the pipeline" w={416} h={300} caption="Tips for new users" />
            </Pair>
          </div>
        </S>
      </CaseBody>

      <NextCase slug="finmate" />
      <Footer n={null} />
    </main>
  );
}
