import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { CaseHero, Overview, CaseBody, Section, NextCase, P, Accent, Rows, Labeled, Phones } from "@/components/case/Case";

export const metadata: Metadata = {
  title: "Baby Sleep — Bohdan Chuprina",
  description: "Redesigning the paywall of an AI bedtime-story app. Paid conversion 1.4% → 11.7%.",
};

const I = "/img/babysleep/";

const nav = [
  { id: "tldr", title: "TL;DR" },
  { id: "problem", title: "Problem" },
  { id: "insight", title: "Key insight" },
  { id: "first-story", title: "First story" },
  { id: "soft-paywall", title: "Soft paywall" },
  { id: "hard-paywall", title: "Hard paywall" },
  { id: "parent-voice", title: "Parent voice" },
  { id: "result", title: "Result" },
];
const S = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const i = nav.findIndex((x) => x.id === id);
  return <Section id={id} n={i + 1} title={nav[i].title}>{children}</Section>;
};

export default function BabySleep() {
  return (
    <main>
      <CaseHero
        title="Baby Sleep"
        subtitle="Redesigning the paywall of an AI bedtime-story app"
        cover={`${I}cover.webp`} coverAlt="Baby Sleep: home, paywall and story screens" coverW={1280} coverH={640}
      />
      <Overview
        meta={[
          ["Role", "Product designer (solo)"],
          ["Timeline", "~2 days"],
          ["Platform", "iOS"],
          ["Tools", "Figma, Figma AI, Claude, Gemini"],
        ]}
        numbers={[
          { value: "1.4% → 11.7%", label: "paid conversion after the same approach went live", accent: true },
          { value: "10%", label: "the goal" },
          { value: "80%", label: "of users reached the paywall before" },
        ]}
      />

      <CaseBody nav={nav}>
        <S id="tldr">
          <P size="lead">
            80% of users reached the paywall, but only 1.4% subscribed. Parents were asked to pay <Accent>before they&apos;d heard a single story</Accent>. I moved the value before the paywall, gave hesitant parents a free path, and placed the hard paywall at the moment of highest motivation.
          </P>
        </S>

        <S id="problem">
          <P>80% of users completed onboarding and saw the paywall. Only 1.4% subscribed. Going through the flow screen by screen, I found four reasons:</P>
          <Rows items={[
            ["The paywall came before the product.", "It was screen 4, before a single story."],
            ["Features, not outcomes.", "“Unlimited story time” says nothing about a child falling asleep."],
            ["Broken trust.", "Wrong price labels, two trial lengths, two languages."],
            ["A tiny ✕ as the only way out.", "No free path for parents who needed proof."],
          ]} />
          <Phones
            size="s"
            items={[
              { src: `${I}before-1.webp`, alt: "Before: welcome screen", label: "01 Welcome" },
              { src: `${I}before-2.webp`, alt: "Before: unique story screen", label: "02 Unique story" },
              { src: `${I}before-3.webp`, alt: "Before: narrator screen", label: "03 Narrator" },
              { src: `${I}before-4.webp`, alt: "Before: paywall with swapped price labels, in Ukrainian", label: "04 Paywall", accent: true },
              { src: `${I}before-5.webp`, alt: "Before: home screen", label: "05 Home" },
            ]}
            note="Before: the paywall was the 4th screen, before a single story. Yearly and monthly labels were swapped, the trial said 14 days, and the UI mixed two languages."
          />
        </S>

        <S id="insight">
          <P size="big">Onboarding wasn&apos;t the bottleneck. The paywall was asking for money <Accent>before showing any value.</Accent></P>
          <P>What parents pay for is a calm bedtime, ideally in their own voice. That value can&apos;t be described on a paywall. It has to be heard first.</P>
        </S>

        <S id="first-story">
          <P>With 80% completing onboarding, cutting screens would optimize the wrong step. Instead, onboarding became the first story: a 3-step setup ends with a finished story starring the child, heard before any hard paywall.</P>
          <Phones items={[
            { src: `${I}story-1.webp`, alt: "Setup step 1: hero name, age and pronouns", label: "Step 1 · The hero" },
            { src: `${I}story-2.webp`, alt: "Setup step 2: choose tonight's adventure", label: "Step 2 · The adventure" },
            { src: `${I}story-3.webp`, alt: "The finished story: Lily and the Firefly Lantern", label: "The first story", accent: true },
          ]} />
        </S>

        <S id="soft-paywall">
          <Labeled items={[
            ["Problem", "Some parents buy on intent, others need proof first. A hidden ✕ only works for the first group."],
            ["Solution", "Yearly plan as the anchor ($4.17/month), a 7-day trial with a reminder, and a visible “Continue with 3 free stories”."],
            ["Rejected", "A 14-day trial, exit discounts, and a hard paywall at this point."],
          ]} />
          <Phones items={[
            { src: `${I}soft-before.webp`, alt: "Old paywall: feature list, swapped prices, tiny close button", label: "Before" },
            { src: `${I}soft-after.webp`, alt: "New soft paywall: outcomes, yearly anchor, continue with 3 free stories", label: "After", accent: true },
          ]} />
        </S>

        <S id="hard-paywall">
          <P>A free-stories counter is always visible on the Home screen. When the stories run out, the paywall speaks to what the parent already has: “Keep Lily&apos;s stories in your voice.” They pay to keep something, not to try something.</P>
          <Phones items={[
            { src: `${I}hard-home.webp`, alt: "Home with the free stories counter", label: "Home · free stories left" },
            { src: `${I}hard-paywall.webp`, alt: "Hard paywall: keep Lily's stories in your voice", label: "When stories run out", accent: true },
          ]} />
        </S>

        <S id="parent-voice">
          <P>After the first AI-narrated story, parents can record 30 seconds of their own voice for future stories.</P>
          <P size="s" muted>Next hypothesis — not in the live version yet.</P>
          <Phones items={[
            { src: `${I}voice-1.webp`, alt: "Prompt: want Lily to fall asleep to your voice?", label: "The offer" },
            { src: `${I}voice-2.webp`, alt: "Recording: read this aloud, 30 seconds", label: "Recording" },
            { src: `${I}voice-3.webp`, alt: "Recording done: sounds great", label: "Done" },
          ]} />
        </S>

        <S id="result">
          <div>
            <p className="t-display-xl accent reveal">1.4% → 11.7%</p>
            <p className="t-body-s muted" style={{ marginTop: 8 }}>paid conversion, against a 10% goal</p>
          </div>
          <P>The same approach is now live: story before payment, a soft paywall with a free path, and a hard paywall when the free stories end. All changes shipped together, so the lift belongs to the flow as a whole.</P>
        </S>
      </CaseBody>

      <NextCase slug="jobslab" />
      <Footer n={null} />
    </main>
  );
}
