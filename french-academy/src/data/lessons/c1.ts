import type { Lesson } from '../../types';

export const c1Lessons: Lesson[] = [
  {
    id: 'c1-l1', levelId: 'c1', order: 1,
    title: 'Plus-que-parfait',
    subtitle: 'The past of the past — what had happened before',
    duration: '55 min',
    objectives: ['Form plus-que-parfait', 'Use it in complex narratives', 'Combine with passé composé and imparfait'],
    sections: [
      { type: 'intro', title: 'The Pluperfect', content: `The **plus-que-parfait** (pluperfect) describes an action completed BEFORE another past action.\n\n**Formation:** imparfait of avoir/être + past participle\n- *J'avais mangé quand il est arrivé.* — I had eaten when he arrived.\n- *Elle était partie avant mon appel.* — She had left before my call.` },
      { type: 'grammar', title: 'Timeline in Narratives', content: `When telling stories with multiple past events:\n1. **Plus-que-parfait** — earliest action (had done)\n2. **Passé composé** — main event (did)\n3. **Imparfait** — background/ongoing (was doing)\n\n*Il pleuvait (imp.) quand je suis sorti (pc). J'avais oublié (pqp) mon parapluie.*` },
      { type: 'summary', title: 'Summary', content: `✓ Imparfait avoir/être + past participle\n✓ Action completed before another past action\n✓ Agreement rules same as passé composé` },
    ],
    vocabulary: [
      { french: 'plus-que-parfait', english: 'pluperfect tense' },
      { french: 'avant', english: 'before' },
      { french: 'déjà', english: 'already' },
      { french: 'auparavant', english: 'previously' },
    ],
    quiz: [
      { id: 'c1-l1-q1', type: 'fill-blank', question: 'J\'___ (finir) mes devoirs quand tu es appelé.', correctAnswer: 'avais fini', explanation: 'Plus-que-parfait: avais + past participle.' },
      { id: 'c1-l1-q2', type: 'multiple-choice', question: 'Plus-que-parfait describes:', options: ['Future action', 'Action before another past action', 'Present habit', 'Hypothetical'], correctAnswer: 'Action before another past action', explanation: 'Pluperfect = had done (before something else in the past).' },
    ],
  },
  {
    id: 'c1-l2', levelId: 'c1', order: 2,
    title: 'Advanced Subjunctive',
    subtitle: 'Master all subjunctive tenses and nuances',
    duration: '60 min',
    objectives: ['Use passé subjunctive', 'Know subjunctive vs indicative after triggers', 'Handle literary subjunctive forms'],
    sections: [
      { type: 'grammar', title: 'Passé Subjunctive', content: `**Formation:** present subjunctive of avoir/être + past participle\n- *Je suis content qu'il **ait réussi**.* (I'm glad he succeeded.)\n- *Il faut que tu **sois parti** avant midi.*` },
      { type: 'grammar', title: 'Indicative vs Subjunctive', content: `**Indicative** (certainty/facts):\n- *Je sais qu'il **est** intelligent.*\n- *Il est évident que...*\n\n**Subjunctive** (doubt/subjectivity):\n- *Je doute qu'il **soit** intelligent.*\n- *Il est possible que...*\n\n**Same trigger, different mood:**\n- *Je pense qu'il **vient**.* (I think — indicative, affirmation)\n- *Je ne pense pas qu'il **vienne**.* (I don't think — subjunctive, negated opinion)` },
      { type: 'grammar', title: 'Fixed Subjunctive Expressions', content: `Always subjunctive: *à condition que, à moins que, avant que, bien que, pour que, sans que, quoique, à fin que*\n\nAlways indicative after: *parce que, puisque, car, étant donné que*` },
      { type: 'summary', title: 'Summary', content: `✓ Passé subjunctive = subjunctive avoir/être + participle\n✓ Affirmative opinion → indicative; negative/doubt → subjunctive\n✓ Learn fixed expressions` },
    ],
    vocabulary: [
      { french: 'douter', english: 'to doubt' },
      { french: 'à moins que', english: 'unless' },
      { french: 'quoique', english: 'although' },
      { french: 'sans que', english: 'without (conjunction)' },
    ],
    quiz: [
      { id: 'c1-l2-q1', type: 'fill-blank', question: 'Je doute qu\'il ___ (pouvoir) venir.', correctAnswer: 'puisse', explanation: 'Doubt triggers subjunctive: puisse.' },
      { id: 'c1-l2-q2', type: 'multiple-choice', question: 'Je pense qu\'il ___ (indicative).', options: ['vienne', 'vient', 'viendrait', 'vint'], correctAnswer: 'vient', explanation: 'Affirmative opinion → indicative.' },
    ],
  },
  {
    id: 'c1-l3', levelId: 'c1', order: 3,
    title: 'Passive Voice & Causative Faire',
    subtitle: 'Advanced sentence structures',
    duration: '55 min',
    objectives: ['Form passive voice correctly', 'Use causative faire + infinitive', 'Choose active vs passive appropriately'],
    sections: [
      { type: 'grammar', title: 'Passive Voice', content: `**être + past participle** (agrees with subject)\n- Active: *Le chat mange la souris.*\n- Passive: *La souris est mangée par le chat.*\n\n**Agent** introduced by *par* or *de*:\n- *Ce livre est écrit par Victor Hugo.*\n- *Il est aimé de tous.* (beloved by all)` },
      { type: 'grammar', title: 'Causative Faire', content: `**faire + infinitive** = to have something done / make someone do\n- *Je fais réparer ma voiture.* (I'm having my car repaired.)\n- *Elle fait manger les enfants.* (She makes the children eat.)\n\n**Se faire + infinitive** = to get/have done to oneself\n- *Il s'est fait couper les cheveux.* (He got his hair cut.)` },
      { type: 'summary', title: 'Summary', content: `✓ Passive: être + participle (+ par/de agent)\n✓ Causative: faire + infinitive\n✓ Se faire for reflexive causative` },
    ],
    vocabulary: [
      { french: 'passif', english: 'passive voice', gender: 'm' },
      { french: 'agent', english: 'agent (doer)', gender: 'm' },
      { french: 'faire + infinitif', english: 'causative construction' },
    ],
    quiz: [
      { id: 'c1-l3-q1', type: 'translation', question: 'Passive: "The letter is written by Marie" (écrire):', correctAnswer: 'La lettre est écrite par Marie', explanation: 'Être + past participle + par agent.' },
      { id: 'c1-l3-q2', type: 'fill-blank', question: 'Je fais ___ (réparer) mon ordinateur.', correctAnswer: 'réparer', explanation: 'Faire + infinitive: faire réparer.' },
    ],
  },
  {
    id: 'c1-l4', levelId: 'c1', order: 4,
    title: 'Conditional Perfect & Si Clauses',
    subtitle: 'Hypothetical past and complex conditions',
    duration: '55 min',
    objectives: ['Form conditionnel passé', 'Master all three si clause types', 'Express regrets and hypotheticals'],
    sections: [
      { type: 'grammar', title: 'Conditionnel Passé', content: `**Conditional of avoir/être + past participle**\n- *J'aurais aimé venir.* (I would have liked to come.)\n- *Elle serait arrivée à l'heure.* (She would have arrived on time.)` },
      { type: 'grammar', title: 'Three Types of Si Clauses', content: `| Type | Si clause | Result | Example |\n|------|-----------|--------|--------|\n| 1. Real | present | present/future/imperative | *Si tu viens, je serai content.* |\n| 2. Unreal present | imparfait | conditional | *Si j'avais de l'argent, je voyagerais.* |\n| 3. Unreal past | plus-que-parfait | conditionnel passé | *Si j'avais su, je serais venu.* |\n\n**Regrets:** *Si seulement j'avais écouté!* (If only I had listened!)` },
      { type: 'summary', title: 'Summary', content: `✓ Conditionnel passé = conditional avoir/être + participle\n✓ Si + imparfait → conditional (unreal now)\n✓ Si + pqp → conditionnel passé (unreal past)` },
    ],
    vocabulary: [
      { french: 'conditionnel passé', english: 'past conditional' },
      { french: 'si seulement', english: 'if only' },
      { french: 'hypothèse', english: 'hypothesis', gender: 'f' },
    ],
    quiz: [
      { id: 'c1-l4-q1', type: 'fill-blank', question: 'Si j\'avais su, je ___ (venir, conditionnel passé).', correctAnswer: 'serais venu', explanation: 'Si + pqp → conditionnel passé with être verb.' },
      { id: 'c1-l4-q2', type: 'multiple-choice', question: 'Unreal present hypothesis uses:', options: ['Si + present → future', 'Si + imparfait → conditional', 'Si + pqp → cond. passé', 'Si + subjunctive'], correctAnswer: 'Si + imparfait → conditional', explanation: 'Type 2 si clauses: imparfait + conditional.' },
    ],
  },
  {
    id: 'c1-l5', levelId: 'c1', order: 5,
    title: 'Idiomatic Expressions & Colloquial French',
    subtitle: 'Sound like a native speaker',
    duration: '50 min',
    objectives: ['Master common idiomatic expressions', 'Understand register (formal/informal)', 'Use filler words and discourse markers naturally'],
    sections: [
      { type: 'vocabulary', title: 'Essential Idioms', content: `| Expression | Meaning |\n|------------|--------|\n| avoir le cafard | to feel blue/depressed |\n| coûter les yeux de la tête | to cost an arm and a leg |\n| poser un lapin | to stand someone up |\n| raconter des salades | to tell tall tales |\n| casser les pieds | to annoy/bother |\n| s'en moquer | to not care / make fun of |\n| n'importe quoi! | nonsense! |\n| c'est pas faux | that's not wrong (casual agreement) |\n| t'inquiète | don't worry (short for ne t'inquiète pas) |\n| en fait | actually/in fact |` },
      { type: 'grammar', title: 'Register & Formality', content: `**Formal:** *Je souhaiterais, Pourriez-vous, Nous avons l'honneur de...*\n**Neutral:** *Je voudrais, Est-ce que, Merci beaucoup*\n**Informal:** *Je veux, Tu peux, Merci, Salut, Ça roule? (How's it going?)*\n\n**Verlan** (slang): *cimer* (merci), *meuf* (femme), *relou* (lourd/annoying)` },
      { type: 'culture', title: 'French Discourse Markers', content: `*Alors* (so/well), *bon* (well/OK), *ben* (well, casual), *quoi* (tag question), *bref* (in short), *du coup* (so/as a result), *en gros* (basically), *genre* (like/kinda)` },
      { type: 'summary', title: 'Summary', content: `✓ Learn idioms in context, not word-for-word\n✓ Match register to situation\n✓ Discourse markers make speech natural` },
    ],
    vocabulary: [
      { french: 'expression idiomatique', english: 'idiomatic expression', gender: 'f' },
      { french: 'registre', english: 'register/level of formality', gender: 'm' },
      { french: 'familier', english: 'informal/colloquial', gender: 'm' },
    ],
    quiz: [
      { id: 'c1-l5-q1', type: 'multiple-choice', question: '"Avoir le cafard" means:', options: ['To have a pet', 'To feel depressed', 'To drink coffee', 'To be busy'], correctAnswer: 'To feel depressed', explanation: 'Avoir le cafard = to feel blue/down.' },
      { id: 'c1-l5-q2', type: 'multiple-choice', question: '"Poser un lapin" means:', options: ['To adopt a rabbit', 'To stand someone up', 'To ask a question', 'To tell a joke'], correctAnswer: 'To stand someone up', explanation: 'Poser un lapin = to not show up to a date/meeting.' },
    ],
  },
  {
    id: 'c1-l6', levelId: 'c1', order: 6,
    title: 'Literary Tenses & Formal Register',
    subtitle: 'Passé simple, literary subjunctive, and academic French',
    duration: '60 min',
    objectives: ['Recognize passé simple in literature', 'Read formal and academic texts', 'Write in formal register'],
    sections: [
      { type: 'grammar', title: 'Passé Simple', content: `Literary past tense — found in books, not speech.\n\n**-ER verbs:** -ai, -as, -a, -âmes, -âtes, -èrent\n- *Il parla longtemps.* (He spoke for a long time.)\n\n**-IR/-RE:** -is, -it, -îmes, -îtes, -irent\n- *Elle finit son travail. Il vendit sa maison.*\n\n**Common irregulars:** *il fut* (was), *il eut* (had), *il vit* (saw), *il dit* (said)` },
      { type: 'grammar', title: 'Formal Written French', content: `**Formal openings:** *Madame, Monsieur, / Objet: / Je me permets de... / Veuillez agréer...*\n\n**Academic style:** avoid *on* (use *nous*), avoid contractions (*celui-ci* not *celui ci*), prefer passive and impersonal (*il convient de...*)\n\n**Impersonal expressions:** *Il est impératif que, force est de constater, il s'avère que*` },
      { type: 'culture', title: 'Reading French Literature', content: `Start with accessible authors: *Le Petit Prince* (Saint-Exupéry), *L'Étranger* (Camus). Progress to: Hugo, Flaubert, Proust. Passé simple appears on almost every page of 19th-century novels.` },
      { type: 'summary', title: 'Summary', content: `✓ Passé simple = literary past (recognize, don't speak)\n✓ Formal writing: nous, full forms, impersonal structures\n✓ Essential for reading classic French literature` },
    ],
    vocabulary: [
      { french: 'passé simple', english: 'simple past (literary)' },
      { french: 'littéraire', english: 'literary' },
      { french: 'formel', english: 'formal', gender: 'm' },
      { french: 'rédaction', english: 'writing/composition', gender: 'f' },
    ],
    quiz: [
      { id: 'c1-l6-q1', type: 'multiple-choice', question: 'Passé simple is primarily used in:', options: ['Daily conversation', 'Text messages', 'Literature and formal writing', 'Email to friends'], correctAnswer: 'Literature and formal writing', explanation: 'Passé simple is literary — not used in speech.' },
      { id: 'c1-l6-q2', type: 'fill-blank', question: 'Passé simple of "parler" (il): ___', correctAnswer: 'parla', explanation: 'Il parla — passé simple -a ending.' },
    ],
  },
];
