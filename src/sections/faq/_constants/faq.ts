export interface FaqItem {
	question: string;
	answer: string;
}

export const faqItems: FaqItem[] = [ {
    question: "What services do you offer?",
    answer:
      "I provide end-to-end product development, including strategy, UX/UI design, full-stack engineering, MVP builds, and launch support."
  },
  {
    question: "How does your engagement process work?",
    answer:
      "I start with a short discovery call, define the scope together, outline a timeline, and begin with either a blueprint phase or direct development depending on the project."
  },
  {
    question: "What’s your typical project timeline?",
    answer:
      "Timelines vary by scope, but sprints usually run in 1–3 week cycles, and full MVPs are often completed within a few weeks."
  },
  {
    question: "How do you communicate during a project?",
    answer:
      "I keep clients updated through weekly summaries, async notes, and Loom walkthroughs for major milestones."
  },
  {
    question: "Do you offer fixed-scope or flexible engagements?",
    answer:
      "Both — smaller projects fit well into fixed packages, while ongoing builds work best under a monthly partnership model."
  },
  {
    question: "What tools and technologies do you use?",
    answer:
      "I work primarily with React, TypeScript, Node.js, Vite, Tailwind, and modern cloud infrastructure, with AI tools integrated where helpful."
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes — I offer optional support for QA, deployment, performance fixes, and small feature improvements."
  },
  {
    question: "How do you price projects?",
    answer:
      "Pricing depends on scope and complexity. I offer flat-rate packages for common builds and retainers for longer engagements."
  },
  {
    question: "What’s your background?",
    answer:
      "I’m a software engineer with a product-focused mindset, and I specialize in helping early-stage teams ship real products."
  },
  {
    question: "Why do you focus on end-to-end development?",
    answer:
      "I enjoy guiding ideas from concept to launch and believe the best products come from tightly aligned design and engineering."
  },
  {
    question: "How do you approach problem-solving?",
    answer:
      "I prioritize clarity first — understanding the goal, prototyping early, and iterating based on real user needs."
  },
  {
    question: "What types of projects excite you the most?",
    answer:
      "I love working on practical tools, MVPs, and any project where speed, clarity, and good UX matter."
  },
  {
    question: "What makes you different from other developers or studios?",
    answer:
      "I bring a mix of product strategy, business thinking, and full-stack engineering — not just code execution."
  },
  {
    question: "How do you stay current with new technologies?",
    answer:
      "I experiment with modern frameworks, follow industry updates, and integrate new tools—especially AI—where they add real value."
  },
  {
    question: "What are your values as an engineer?",
    answer:
      "I value clarity, maintainability, open collaboration, and building products that are genuinely useful."
  },
  {
    question: "What’s your philosophy around AI in products?",
    answer:
      "AI should enhance workflows and decision-making, not replace core functionality — it’s a muscle, not a gimmick."
  }
];

export const faqItemsMobile: FaqItem[] = [
	{
		question: "What projects fit here?",
		answer:
			"Describe the type of work you love doing and who its for so new leads know theyre in the right place.",
	},
	{
		question: "Whats the process?",
		answer:
			"Outline your workflow at a high level discovery, build, launch to show how organized you are.",
	},
	{
		question: "How fast can things ship?",
		answer:
			"Give a rough range for common engagements and call out what makes timelines move up or down.",
	},
	{
		question: "How do we collaborate?",
		answer:
			"List the tools you prefer and whether you plug into existing teams, handle communication async, or lead the project.",
	},
	{
		question: "What tools do you use?",
		answer:
			"Share your primary stack or platforms. People searching for a specialist will thank you.",
	},
	{
		question: "Are you available?",
		answer:
			"Let folks know if youre open for new work now, booking next quarter, or taking on limited engagements.",
	},
	{
		question: "How do you price projects?",
		answer:
			"Reference your preferred model (fixed scope, sprint-based, or retainers) and invite people to request a quote.",
	},
	{
		question: "Need something else?",
		answer:
			"Remind visitors they can always message you through the contact form for anything not covered here.",
	},
];
