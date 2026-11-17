import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import {
  CaseHero, Overview, CaseBody, Section, NextCase, P, Accent, Rows, Labeled, Phones, Figure, Pair, CompareTable, ScreenGrid,
} from "@/components/case/Case";
import s from "@/components/case/case.module.css";

export const metadata: Metadata = {
  title: "FinMate — Bohdan Chuprina",
  description: "Tracking cash in a bank-synced finance app. Concept, usability-tested.",
  openGraph: { title: "FinMate — Bohdan Chuprina", description: "Tracking cash in a bank-synced finance app. Concept, usability-tested.", images: [{ url: "/og/finmate.jpg", width: 1200, height: 630 }] },
};

const I = "/img/finmate/";

const nav = [
  { id: "tldr", title: "TL;DR" },
  { id: "context", title: "Context" },
  { id: "problem", title: "Problem" },
  { id: "insight", title: "Key insight" },
  { id: "cash-wallet", title: "Cash Wallet" },
  { id: "ai-insights", title: "AI insights" },
  { id: "first-time", title: "First-time experience" },
  { id: "result", title: "Result" },
];
const S = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const i = nav.findIndex((x) => x.id === id);
  return <Section id={id} n={i + 1} title={nav[i].title}>{children}</Section>;
};
const scr = (items: [string, string][]) => items.map(([f, label]) => ({ src: `${I}${f}.webp`, label }));

const journeys = [
  { label: "Journey 01", title: "Onboarding and bank connection", meta: "11 screens", items: scr([
    ["j1-splash", "Splash"], ["j1-onb-1", "Onboarding 1"], ["j1-onb-2", "Onboarding 2"], ["j1-onb-3", "Onboarding 3"],
    ["j1-signup", "Sign up"], ["j1-connect", "Connect account"], ["j1-choose-bank", "Choose bank"], ["j1-permission", "Permission"],
    ["j1-connected", "Bank connected"], ["j1-max-offer", "MAX offer"], ["j1-conn-failed", "Connection failed"],
  ]) },
  { label: "Journey 02", title: "Everyday overview", meta: "5 screens", items: scr([
    ["j2-home", "Home"], ["j2-transactions", "Transactions"], ["j2-tx-details", "Transaction details"], ["j2-goals", "Goals"], ["j2-profile", "Profile"],
  ]) },
  { label: "Journey 03", title: "Cash Wallet", meta: "6 screens", items: scr([
    ["j3-add-expense", "Add expense"], ["j3-category", "Category picked"], ["j3-add-income", "Add income"], ["j3-amount", "Amount entered"],
    ["j3-scan", "Scan receipt"], ["j3-confirm", "Confirm transaction"],
  ]) },
  { label: "Journey 04", title: "Analytics and AI insights", meta: "4 screens", items: scr([
    ["j4-analytics", "Analytics"], ["j4-income-vs-exp", "Income vs expenses"], ["j4-feb-expenses", "February expenses"], ["j4-feb-income", "February income"],
  ]) },
];

export default function FinMate() {
  return (
    <main>
      <CaseHero
        title="FinMate"
        subtitle="Tracking cash in a bank-synced finance app"
        cover={`${I}cover.webp`} coverAlt="FinMate: analytics, home with Cash Wallet, and receipt scan" coverW={1280} coverH={640}
      />
      <Overview meta={[
        ["Role", "Product designer (solo)"],
        ["Timeline", "4 weeks · 2026"],
        ["Platform", "iOS · Mobile"],
        ["Research", "Survey · usability tests"],
      ]} />

      <CaseBody nav={nav}>
        <S id="tldr">
          <P size="lead">
            People track money in their bank app, but it can&apos;t see cash or other banks. Dedicated apps still make cash a manual chore. I designed a Cash Wallet that <Accent>turns an ATM withdrawal into a tracked balance</Accent>, and AI insight cards that explain spending instead of adding charts.
          </P>
        </S>

        <S id="context">
          <P>Solo concept project, 4 weeks. It started with something I kept seeing around me: people who couldn&apos;t tell how much they had spent over a week or a month, let alone plan the next one.</P>
          <P>I left shared budgets out of the first version: only 2 of 18 people found them useful. Investment tracking and subscriptions were postponed to keep the core loop simple.</P>
        </S>

        <S id="problem">
          <P>I surveyed 18 people about how they track money and what they need from it.</P>
          <Rows items={[
            ["10 of 18", "track their money in a bank app."],
            ["4 of 18", "don't use anything at all, and 4 more only keep notes."],
            ["1 of 18", "uses a dedicated finance app."],
          ]} />
          <P>A bank app shows one bank and card payments only. It can&apos;t see cash or money in other banks. Copilot, Monarch and Wallet solve multi-account sync, but all three still treat cash as a manual account.</P>
          <div className={s.diagram}>
            <p className="t-mono-cap muted">Raw survey results · Google Forms · 18 responses</p>
            <Pair>
              <Figure src={`${I}survey-1.webp`} alt="Survey chart: how people track their finances" w={416} h={416} />
              <Figure src={`${I}survey-2.webp`} alt="Survey chart: which features people want" w={416} h={416} />
            </Pair>
          </div>
          <CompareTable
            caption="Competitor snapshot · 3 apps"
            cols={["Monarch", "Copilot", "Wallet"]}
            rows={[
              { feature: "Bank account sync", marks: ["yes", "yes", "yes"] },
              { feature: "Savings goals", marks: ["yes", "yes", "yes"] },
              { feature: "AI insights", marks: ["partial", "yes", "no"] },
              { feature: "Cash tracking", marks: ["no", "no", "partial"], gap: "Market gap" },
              { feature: "Receipt scanning", marks: ["no", "yes", "yes"] },
              { feature: "Forecasting", marks: ["no", "yes", "partial"] },
            ]}
          />
        </S>

        <S id="insight">
          <P size="big">The real competitor isn&apos;t another finance app. It&apos;s <Accent>the bank app people already have.</Accent></P>
          <P>A new app only earns its place if it shows what the bank app can&apos;t, with zero extra effort.</P>
        </S>

        <S id="cash-wallet">
          <Labeled items={[
            ["Problem", "Cash is exactly what a bank app can't see. But logging it by hand is the effort people won't spend: the most common barriers in the survey were no habit and too much manual work."],
            ["Solution", "FinMate connects to bank accounts with read-only access. When it detects an ATM withdrawal, it adds that amount to the Cash Wallet automatically. The user only fills in where the cash went: scan a receipt or add it manually."],
            ["Rejected", "A plain manual cash account, the pattern all three competitors use, puts the full burden on memory. Starting from the withdrawal means the app already knows how much cash exists."],
          ]} />
          <P>Cash breaks in predictable ways, so I also designed the edge cases: empty wallet, unlogged spending, sync errors and recovery.</P>
          <Phones size="s4" items={[
            { src: `${I}cash-home.webp`, alt: "Home with the Cash Wallet balance", label: "Home · Cash Wallet", accent: true },
            { src: `${I}cash-scan.webp`, alt: "Receipt scan", label: "Receipt scan" },
            { src: `${I}cash-confirm.webp`, alt: "Confirm the scanned transaction", label: "Confirm transaction" },
            { src: `${I}cash-manual.webp`, alt: "Manual cash entry", label: "Manual entry" },
          ]} />
        </S>

        <S id="ai-insights">
          <P>People want to understand where their money goes, yet analytics and charts were among the least wanted features. So instead of more charts, FinMate shows insight cards in plain language, like “You spend more on Fridays than on any other day.” Users choose in settings which insights they want to see.</P>
          <P>The cards show, they don&apos;t advise. FinMate never acts on the user&apos;s money and doesn&apos;t tell them what to cut, which keeps the product clear of financial advice and keeps the user in control.</P>
          <Phones items={[
            { src: `${I}ai-analytics.webp`, alt: "Analytics overview", label: "Analytics" },
            { src: `${I}ai-income.webp`, alt: "Income vs expenses with an AI insight card", label: "Income vs expenses · insight", accent: true },
            { src: `${I}ai-monthly.webp`, alt: "Monthly expenses with an AI insight card", label: "Monthly expenses · insight", accent: true },
          ]} />
        </S>

        <S id="first-time">
          <P>The bank app needs zero setup, and 17 of 18 people call simplicity important. An app that opens on an empty dashboard and asks the user to start logging loses to the app they already have.</P>
          <P>So connecting the first bank imports its full transaction history, and the overview is complete from the first minute. FinMate also reuses patterns people know from their bank app: what&apos;s new is the content, not the way to navigate it.</P>
          <Phones items={[
            { src: `${I}first-connect.webp`, alt: "Connect account", label: "Connect account" },
            { src: `${I}first-bank.webp`, alt: "Choose bank", label: "Choose bank" },
            { src: `${I}first-permission.webp`, alt: "Read-only permission", label: "Permission" },
          ]} />
        </S>

        <S id="result">
          <P>FinMate is a concept, so nothing here was measured at scale. I tested the prototype with survey participants on three tasks: log an expense, add income manually, and find and understand an insight. Everyone completed the tasks.</P>
          <P>One participant kept tapping where there was no control, so I added the button exactly there. In the second round, the flow went through without issues.</P>
          <P size="s" muted>Every screen is designed and connected into journeys, so the prototype can go straight to development.</P>
          <div className={s.diagram}>
            <p className="t-mono-cap muted">Full screen map · 26 screens · 4 journeys</p>
            <Accordion items={journeys.map((j) => ({ label: j.label, title: j.title, meta: j.meta, body: <ScreenGrid items={j.items} /> }))} />
          </div>
        </S>
      </CaseBody>

      <NextCase slug="locket" />
      <Footer n={null} />
    </main>
  );
}
