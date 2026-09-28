// =========================================
// BLOG POSTS — Edit these or add new ones
// =========================================
export const posts = [{
        slug: "how-i-built-nova-labs",
        title: "How I Built Nova Labs from Scratch",
        excerpt: "The full journey of founding my first SaaS company — from idea to first line of code.",
        date: "Oct 2026",
        readTime: "8 min",
        category: "Startup",
        content: `
I still remember the exact moment I decided to start Nova Labs. It was 2 AM, I was debugging something random, and a thought hit me: "What if I built something that other developers actually need?"

## The Problem

Every developer I know wastes hours on the same problems. Setting up auth. Wiring up payments. Building admin dashboards. The boring stuff that has nothing to do with the product we actually want to build.

I wanted to fix that.

## Starting with a Plan

I spent two weeks just writing. No code. Notes on what developers actually need, what already exists, and what I could uniquely contribute.

By the end, I had a 20-page document that answered one question: What is the smallest possible thing I could build that would make one developer's life measurably easier?

## Building

Then I started coding. React on the frontend. Node.js on the backend. MongoDB for the database.

The first version was ugly. The second was better. The third — the one I have now — actually works.

## Lessons So Far

- Ship faster than feels comfortable.
- Talk to users, even if there aren't any yet.
- Consistency beats intensity.

## What's Next

I'm opening the waitlist soon. If you want to be an early tester, join the list.

This is the beginning. Not the end.
    `,
    },
    {
        slug: "5-react-patterns-i-use-every-day",
        title: "5 React Patterns I Use Every Day",
        excerpt: "The patterns that make my React code cleaner, faster, and easier to maintain.",
        date: "Sep 2026",
        readTime: "6 min",
        category: "React",
        content: `
After writing React for years, I've settled on a small set of patterns that I use constantly.

## 1. Custom Hooks for Everything Repeated

If I find myself writing the same useEffect + useState combo twice, it becomes a hook.

## 2. The Container / Presentational Split

Presentational components only care about how things look. Container components only care about the data.

## 3. One Source of Truth per State

If the same value lives in two useState calls, you have a bug waiting to happen.

## 4. Compound Components

Great for dropdowns, tabs, modals — anywhere the pieces belong together.

## 5. Memoize Expensive Calculations

useMemo and useCallback are not for preventing re-renders. They're for preventing expensive work.

These five patterns cover 90% of my day-to-day React.
    `,
    },
    {
        slug: "why-i-chose-mongodb-for-my-saas",
        title: "Why I Chose MongoDB for My SaaS",
        excerpt: "Comparing MongoDB, PostgreSQL, and MySQL for a bootstrapped SaaS.",
        date: "Aug 2026",
        readTime: "5 min",
        category: "Backend",
        content: `
Every SaaS founder faces the same question early on: what database do I pick? Here's why I went with MongoDB for Nova Labs.

## The Real Requirements

- Flexible schema (my product would evolve fast)
- Easy to scale horizontally
- Fast reads for dashboards
- Good developer experience with Node.js

## Why Not PostgreSQL?

PostgreSQL is excellent. But my early-stage product needed to change its schema every other week.

## Why MongoDB Won

- Schema-less documents
- Native JSON
- Mongoose ORM is a joy
- Atlas free tier

## What I'd Do Differently at Scale

If I hit millions of users, I'll probably migrate to PostgreSQL. But by then I'll have real data on what queries matter.

Until then — MongoDB.
    `,
    },
    {
        slug: "from-kenya-to-full-stack",
        title: "My Journey from Kenya to Full-Stack",
        excerpt: "A personal story about breaking into tech from East Africa.",
        date: "Jul 2026",
        readTime: "7 min",
        category: "Personal",
        content: `
I didn't grow up with a computer in my house. I didn't know any developers.

And yet here I am — building a SaaS company from Nairobi.

## The Beginning

My first exposure to code was an internet café in my neighborhood. The owner showed me how to open Notepad, type a few tags, and save it as .html.

That was the moment.

## The Long Middle

The next four years were messy. YouTube. Cheap Udemy courses. Three failed projects before finishing one.

The biggest challenge wasn't learning to code. It was believing I belonged.

## The Breakthrough

When I stopped trying to learn everything and started shipping small things, everything changed.

## Where I Am Now

I'm building Nova Labs. I'm mentoring two developers in my neighborhood.

If you're reading this from somewhere similar — you can do this.
    `,
    },
    {
        slug: "mern-stack-in-2026",
        title: "The MERN Stack in 2026: Still Worth Learning?",
        excerpt: "An honest look at whether the MERN stack is still the right choice.",
        date: "Jun 2026",
        readTime: "6 min",
        category: "Tech",
        content: `
Every year someone declares the MERN stack dead. Here's my honest take.

## What MERN Is

MongoDB, Express, React, Node.js.

## The Arguments Against

- React is too complex now.
- You should use Next.js.
- Go or Rust is the future.

## The Arguments For

- Millions of jobs still use it every day
- The fastest way to ship with one language
- The biggest community

## My Honest Take

If you're just starting out: learn MERN. It's the fastest path from zero to employable.

Then, once you're comfortable, branch out.

The MERN stack isn't the future. But it's a hell of a starting line.
    `,
    },
    {
        slug: "shipping-faster",
        title: "Shipping Faster with a Simple Process",
        excerpt: "How I structure my projects to go from idea to live app in days, not weeks.",
        date: "May 2026",
        readTime: "4 min",
        category: "Productivity",
        content: `
I've shipped more projects in the last year than in the previous three combined.

## 1. One Sentence First

Before I write code, I write one sentence: This app helps [person] do [thing] so they can [outcome].

## 2. Three Core Features

Not five. Not ten. Three.

## 3. Ship to Production on Day One

The first version I deploy is ugly. But it's live.

## 4. Use the Same Stack Every Time

React. Node. MongoDB. Tailwind. No more tech decisions.

## 5. Celebrate Small Wins

Every deploy is a small dopamine hit that keeps me going.

## The Result

The first project took three weeks. The last one took two days.
    `,
    },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);