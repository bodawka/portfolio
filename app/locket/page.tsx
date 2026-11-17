import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import { CaseHero, Overview, CaseBody, Section, NextCase, P, Accent, Rows, Labeled, Phones, Figure } from "@/components/case/Case";
import s from "@/components/case/case.module.css";

export const metadata: Metadata = {
  title: "Locket concept — Bohdan Chuprina",
  description: "Adding scrapbooking to a photo-widget app without a new tab. Unsolicited concept, not affiliated with Locket.",
};

const I = "/img/locket/";

const nav = [
  { id: "tldr", title: "TL;DR" },
  { id: "context", title: "Context" },
  { id: "problem", title: "Problem" },
  { id: "insight", title: "Key insight" },
  { id: "flows", title: "User flows" },
  { id: "entry", title: "Entry point" },
  { id: "tools", title: "Editor tools" },
  { id: "sharing", title: "Sharing and storage" },
  { id: "result", title: "Result" },
];
const S = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const i = nav.findIndex((x) => x.id === id);
  return <Section id={id} n={i + 1} title={nav[i].title}>{children}</Section>;
};

const flows = [
  { label: "Flow 01", title: "Create a page from the camera", meta: "6 steps", src: "flow1.svg", h: 330,
    alt: "Camera, Send to (choose Page), Editor, Send to, Your Pages, Sent on widgets. Leaving the editor asks: discard, save to draft or keep editing." },
  { label: "Flow 02", title: "Create a page from Memories", meta: "6 steps", src: "flow2.svg", h: 200,
    alt: "Memories, Pages tab, new or draft, Editor, Send to, Sent on widgets." },
  { label: "Flow 03", title: "Save a friend's page", meta: "5 steps", src: "flow3.svg", h: 180,
    alt: "Tap the widget, History, save it, Memories Pages tab or Download to Photos, Saved." },
];

export default function Locket() {
  return (
    <main>
      <CaseHero
        title={<>Locket <span className="serif">concept</span></>}
        subtitle="Adding scrapbooking to a photo-widget app"
        badge="Unsolicited concept · not affiliated with Locket"
        cover={`${I}cover.webp`} coverAlt="Locket concept: page background editor, page on the home-screen widget, Memories with Pages" coverW={1280} coverH={640}
      />
      <Overview meta={[
        ["Role", "Product designer (solo)"],
        ["Timeline", "5–6 days"],
        ["Platform", "iOS · Mobile"],
        ["Scope", "Unsolicited feature concept"],
      ]} />

      <CaseBody nav={nav}>
        <S id="tldr">
          <P size="lead">
            Locket is built around seconds: snap a photo, send it, and it lands on a friend&apos;s home screen. Scrapbooking takes minutes. In this concept, it fits in without a new tab or a new button, because every surface in Locket is a 1:1 square — so <Accent>a scrapbook page is just another Locket.</Accent>
          </P>
        </S>

        <S id="context">
          <P>A concept feature for Locket: users build collage pages from their own photos, cut objects out, decorate the page and send it to friends. The constraint that shaped everything: it&apos;s a secondary feature, and the app can&apos;t get heavier because of it.</P>
          <P>I did it solo: an audit of the current app, competitor analysis, user flows, wireframes and hi-fi screens on components rebuilt in Locket&apos;s style.</P>
        </S>

        <S id="problem">
          <P>People use Locket because it&apos;s fast. You take a photo, send it, and a second later it&apos;s on a friend&apos;s widget. Scrapbooking works the other way around: minutes of hands-on work. Drop a full collage editor into the app, and it starts competing with the one action Locket exists for.</P>
          <P>So before designing anything, I mapped the current app screen by screen and marked every place where a new entry point would pull attention away from the camera. Most of them would.</P>
          <Figure src={`${I}audit.webp`} alt="Audit of the current Locket app: every screen, with possible entry points marked" w={856} h={719} caption="Audit of the current app · entry points marked" zoom />
        </S>

        <S id="insight">
          <P size="big">A scrapbook page is <Accent>the same square as a photo.</Accent></P>
          <P>The camera, the widget, History and Memories all live in the same 1:1 square. A scrapbook page uses the same canvas, so it needs no new screens or templates. It&apos;s sent from the same Send to screen, reaches the same friends and lands on the widget exactly like a regular Locket.</P>
          <P>Free-form and vertical pages, the way Canva and Zinnia do it, would have meant new display variants across the whole app, and none of them fits on a widget.</P>
          <Phones items={[
            { src: `${I}widget-photo.webp`, alt: "A regular Locket photo on the home-screen widget", label: "Regular Locket on widget" },
            { src: `${I}widget-page.webp`, alt: "A scrapbook page on the same widget", label: "Page on widget", accent: true },
          ]} />
        </S>

        <S id="flows">
          <P>Before drawing screens, I mapped where pages would live: made from the camera, made from Memories and saved from a friend. Every path runs through screens people already know.</P>
          <Accordion items={flows.map((f) => ({
            label: f.label, title: f.title, meta: f.meta,
            body: (
              <div className={s.diagram}>
                <div className={s.scroller}><img src={`${I}${f.src}`} alt={f.alt} width={856} height={f.h} loading="lazy" /></div>
                <span className={`t-mono-cap muted ${s.swipe}`} aria-hidden>Swipe →</span>
              </div>
            ),
          }))} />
        </S>

        <S id="entry">
          <Labeled items={[
            ["Problem", "Any new button on the send screen competes with Send."],
            ["Solution", "Instead of adding a button, I gave an existing one a new job: the Captions button now opens the scrapbook editor. Captions didn't disappear — they still swipe across the photo and live inside the editor as the Text tool."],
            ["Trade-off", "Someone tapping the button out of habit lands in the editor instead of the captions sheet. That's why captions stay one swipe or one tool away."],
          ]} />
          <Phones items={[
            { src: `${I}entry-camera.webp`, alt: "Locket camera", label: "Camera" },
            { src: `${I}entry-send.webp`, alt: "Send to screen, Captions button now opens the editor", label: "Send to", accent: true },
            { src: `${I}entry-editor.webp`, alt: "Scrapbook editor", label: "Editor" },
          ]} />
        </S>

        <S id="tools">
          <P>Collage apps put dozens of tools on one screen. Locket&apos;s whole interface is a couple of buttons, so I kept only what makes a page feel like a paper scrapbook. Each tool opens as a sheet above the canvas, so the page never leaves the screen.</P>
          <Rows items={[
            ["Add", "pulls photos you've already taken in Locket or from your gallery."],
            ["Cutout", "cuts an object out of a photo with one tap."],
            ["Decor", "adds tape, paper scraps and stickers — the things that make it look handmade."],
            ["Text", "uses Locket's own caption styles, plus a handwritten font."],
            ["Background", "sets the mood with paper texture, a color or your own photo."],
          ]} />
          <P>Layers, brushes and templates are a natural next step for people who love the feature. For a first version, they would have turned a quick page into a design tool.</P>
          <Phones items={[
            { src: `${I}tool-cutout.webp`, alt: "Cutout tool", label: "Cutout" },
            { src: `${I}tool-decor.webp`, alt: "Decor tool with tape and stickers", label: "Decor" },
            { src: `${I}tool-background.webp`, alt: "Background tool with paper textures", label: "Background" },
          ]} />
        </S>

        <S id="sharing">
          <P>A feed with followers would have turned Locket into Instagram, so pages travel the way photos already do. Send a page to All, and it lands on every friend&apos;s widget and in History on the home screen. Friends only, the 20-friend limit stays.</P>
          <P>Pages also get a home in Memories: a new Pages tab, placed last after Rollcalls and Lockets so it doesn&apos;t shift tabs people already know. Drafts live there too, so you can start a page, leave, and finish it later.</P>
          <Phones items={[
            { src: `${I}share-memories.webp`, alt: "Memories with the new Pages tab", label: "Memories · Pages", accent: true },
            { src: `${I}share-drafts.webp`, alt: "Drafts with discard option", label: "Drafts / Discard" },
            { src: `${I}share-send.webp`, alt: "Sending a page to friends", label: "Send page" },
          ]} />
        </S>

        <S id="result">
          <P>This is a concept, so there&apos;s no data on real behavior. What I can measure now: the shortest path from taking a photo to a sent page is 4 taps (photo, scrapbook, Done, Send), against 2 for a regular photo — and there are zero new elements in the bottom navigation or on the send screen.</P>
          <P>After launch, I&apos;d watch three things (projected): the share of sends that are pages, how often people come back to drafts, and one guardrail — regular photo sends shouldn&apos;t drop. If they do, scrapbooking is eating the core product.</P>
        </S>
      </CaseBody>

      <NextCase slug="baby-sleep" />
      <Footer n={null} />
    </main>
  );
}
