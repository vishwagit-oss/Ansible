import type { Lesson } from '../../types';

export const a1LessonsPart3: Lesson[] = [
  {
    id: 'a1-l6',
    levelId: 'a1',
    order: 6,
    title: 'Être & Avoir — Essential Verbs',
    subtitle: 'The two most important verbs in French',
    duration: '55 min',
    objectives: [
      'Conjugate être (to be) in present tense',
      'Conjugate avoir (to have) in present tense',
      'Use idiomatic expressions with avoir',
      'Distinguish être vs avoir for age and states',
    ],
    sections: [
      {
        type: 'intro',
        title: 'The Foundation Verbs',
        content: `**Être** (to be) and **avoir** (to have) are the two most essential French verbs. They're irregular, used constantly, and serve as helping verbs for compound tenses. Master these before anything else.`,
      },
      {
        type: 'grammar',
        title: 'Être — To Be (Present Tense)',
        content: `| Person | Conjugation | Pronunciation |
|--------|-------------|---------------|
| je | suis | zhuh swee |
| tu | es | tew eh |
| il/elle/on | est | eel/ell/ohn eh |
| nous | sommes | noo som |
| vous | êtes | voo zet |
| ils/elles | sont | eel/ell sohn |

**Examples:**
- *Je suis étudiant.* — I am a student.
- *Tu es français?* — Are you French?
- *Elle est professeure.* — She is a teacher.
- *Nous sommes en retard.* — We are late.
- *Ils sont à Paris.* — They are in Paris.`,
      },
      {
        type: 'grammar',
        title: 'Avoir — To Have (Present Tense)',
        content: `| Person | Conjugation | Pronunciation |
|--------|-------------|---------------|
| j' | ai | zhay |
| tu | as | tew ah |
| il/elle/on | a | ah |
| nous | avons | noo za-VOHN |
| vous | avez | voo za-VAY |
| ils/elles | ont | ohn |

**Examples:**
- *J'ai un chat.* — I have a cat.
- *Tu as faim?* — Are you hungry?
- *Il a vingt ans.* — He is 20 years old.
- *Nous avons une voiture.* — We have a car.
- *Elles ont de la chance.* — They are lucky.`,
      },
      {
        type: 'grammar',
        title: 'Avoir Expressions (Not "être"!)',
        content: `French uses **avoir** for many states English expresses with "to be":

| French (avoir) | English (to be) |
|----------------|-----------------|
| avoir faim | to be hungry |
| avoir soif | to be thirsty |
| avoir chaud | to be hot (person) |
| avoir froid | to be cold (person) |
| avoir sommeil | to be sleepy |
| avoir peur | to be afraid |
| avoir raison | to be right |
| avoir tort | to be wrong |
| avoir de la chance | to be lucky |
| avoir ... ans | to be ... years old |

**Age always uses avoir:** *J'ai trente ans.* (NOT *Je suis trente.*)`,
      },
      {
        type: 'grammar',
        title: 'Être for Location & Identity',
        content: `Use **être** for:
- **Identity/nationality:** *Je suis canadien.*
- **Profession:** *Elle est médecin.*
- **Location:** *Nous sommes à Lyon.*
- **Descriptions:** *Il est grand.*
- **Time:** *Il est trois heures.* (It's 3 o'clock.)
- **Weather (with il):** *Il est froid aujourd'hui.*`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- *Je suis faim* ✗ → *J'ai faim* ✓
- *Je suis 20 ans* ✗ → *J'ai 20 ans* ✓
- Forgetting liaison: *nous avons* → "noo-za-VON"
- Confusing *c'est* and *il est* (covered later)`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ être: suis, es, est, sommes, êtes, sont
✓ avoir: ai, as, a, avons, avez, ont
✓ Age and feelings (faim, soif, peur) use AVOIR
✓ Identity, location, descriptions use ÊTRE`,
      },
    ],
    vocabulary: [
      { french: 'être', english: 'to be', pronunciation: 'EH-truh' },
      { french: 'avoir', english: 'to have', pronunciation: 'a-VWAHR' },
      { french: 'faim', english: 'hunger', pronunciation: 'fahn', gender: 'f' },
      { french: 'soif', english: 'thirst', pronunciation: 'swahf', gender: 'f' },
      { french: 'peur', english: 'fear', pronunciation: 'puhr', gender: 'f' },
      { french: 'retard', english: 'lateness / delay', pronunciation: 'ruh-TAR', gender: 'm' },
    ],
    quiz: [
      {
        id: 'a1-l6-q1',
        type: 'multiple-choice',
        question: 'How do you say "I am hungry" in French?',
        options: ['Je suis faim', "J'ai faim", 'Je suis hungry', "J'ai hungry"],
        correctAnswer: "J'ai faim",
        explanation: 'French uses avoir (to have) for hunger: J\'ai faim.',
      },
      {
        id: 'a1-l6-q2',
        type: 'fill-blank',
        question: 'Elle ___ professeure. (She is a teacher — être)',
        correctAnswer: 'est',
        explanation: 'Elle est — third person singular of être.',
      },
      {
        id: 'a1-l6-q3',
        type: 'multiple-choice',
        question: 'Nous ___ une voiture. (We have a car)',
        options: ['sommes', 'avons', 'êtes', 'ont'],
        correctAnswer: 'avons',
        explanation: 'Nous avons — first person plural of avoir.',
      },
      {
        id: 'a1-l6-q4',
        type: 'translation',
        question: 'Write "They are 30 years old" in French:',
        correctAnswer: 'Ils ont trente ans',
        explanation: 'Age uses avoir: Ils ont trente ans.',
      },
      {
        id: 'a1-l6-q5',
        type: 'multiple-choice',
        question: 'Which uses être?',
        options: ['avoir peur', 'avoir faim', 'être à Paris', 'avoir vingt ans'],
        correctAnswer: 'être à Paris',
        explanation: 'Location uses être: Nous sommes/Elle est à Paris.',
      },
    ],
  },
  {
    id: 'a1-l7',
    levelId: 'a1',
    order: 7,
    title: 'Nouns & Gender',
    subtitle: 'Masculine vs feminine — patterns and tricks',
    duration: '45 min',
    objectives: [
      'Identify masculine and feminine noun patterns',
      'Learn common gender rules and exceptions',
      'Use dictionaries effectively for gender',
      'Build vocabulary with correct articles',
    ],
    sections: [
      {
        type: 'intro',
        title: 'Every Noun Has a Gender',
        content: `In French, **every noun is either masculine or feminine**. There's no neutral gender. Gender affects articles, adjectives, and pronouns. While it seems arbitrary, patterns exist to help you guess correctly about 80% of the time.`,
      },
      {
        type: 'grammar',
        title: 'Common Masculine Endings',
        content: `Nouns ending in these are **usually masculine:**
- **-age:** *le voyage, le fromage, le garage*
- **-ment:** *le gouvernement, le moment*
- **-isme:** *le tourisme, le communisme*
- **-eau:** *le bureau, le château, le tableau*
- **-phone:** *le téléphone, le microphone*
- **-scope:** *le télescope, le microscope*
- **Consonant:** *le chat, le livre, le sport*
- **-ou:** *le cou, le genou, le trou* (exceptions: *la souris, la bou*)

**Days, months, seasons, languages, trees:** all masculine
- *le lundi, le janvier, le printemps, le français, le chêne*`,
      },
      {
        type: 'grammar',
        title: 'Common Feminine Endings',
        content: `Nouns ending in these are **usually feminine:**
- **-tion:** *la nation, la question, la situation*
- **-sion:** *la décision, la télévision*
- **-ette:** *la fillette, la serviette*
- **-ure:** *la culture, la nature, la figure*
- **-ence/-ance:** *la différence, la chance*
- **-ie:** *la vie, la société, la pharmacie*
- **-té:** *la liberté, la vérité, la beauté*
- **-e (but not -age, -isme):** *la table, la route, la porte*
- **-ée:** *la journée, la idée*

**Exceptions to -e rule:** *le musée, le lycée, le légume* (masculine despite -e)`,
      },
      {
        type: 'examples',
        title: 'Tricky & Same-Word Gender Pairs',
        content: `Some words change meaning with gender:

| Masculine | Feminine |
|-----------|----------|
| le tour (the tour/turn) | la tour (the tower) |
| le manche (the handle) | la manche (sleeve / La Manche = English Channel) |
| le mode (mode/method) | la mode (fashion) |
| le poste (job/post office) | la poste (mail/postal service) |
| le livre (book) | la livre (pound weight/currency) |
| un/une aide | helper / help (assistance) |
| un/une mémoire | memoir / memory |`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- Assuming biological gender matches grammatical gender — *une personne* (f) can refer to a man
- Not learning gender with every new noun — always learn *le/la* together
- Trusting the -e rule blindly — many masculine nouns end in -e
- Forgetting that adjectives must match noun gender`,
      },
      {
        type: 'culture',
        title: 'Gender in Modern French',
        content: `French is evolving around inclusive language (*écriture inclusive*). Professions traditionally used masculine forms for women too (*Madame le ministre*), but feminine forms are now standard (*la ministre, la présidente*).`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ Learn every noun with its article (le/la)
✓ -tion, -sion, -té, -ure → usually feminine
✓ -age, -ment, -isme, -eau → usually masculine
✓ Some words change meaning based on gender`,
      },
    ],
    vocabulary: [
      { french: 'nom', english: 'noun / name', pronunciation: 'nohn', gender: 'm' },
      { french: 'masculin', english: 'masculine', pronunciation: 'mas-koo-LAN', gender: 'm' },
      { french: 'féminin', english: 'feminine', pronunciation: 'fay-mee-NAN', gender: 'm' },
      { french: 'genre', english: 'gender', pronunciation: 'zhahnr', gender: 'm' },
      { french: 'exception', english: 'exception', pronunciation: 'ek-sep-syOHN', gender: 'f' },
    ],
    quiz: [
      {
        id: 'a1-l7-q1',
        type: 'multiple-choice',
        question: 'Nouns ending in -tion are usually:',
        options: ['masculine', 'feminine', 'neuter', 'both'],
        correctAnswer: 'feminine',
        explanation: '-tion endings (nation, question) are typically feminine.',
      },
      {
        id: 'a1-l7-q2',
        type: 'multiple-choice',
        question: 'Which is correct?',
        options: ['le table', 'la table', 'un table', 'les table'],
        correctAnswer: 'la table',
        explanation: 'Table is feminine: la table.',
      },
      {
        id: 'a1-l7-q3',
        type: 'multiple-choice',
        question: 'Nouns ending in -age are usually:',
        options: ['feminine', 'masculine', 'variable', 'invariable'],
        correctAnswer: 'masculine',
        explanation: '-age endings (voyage, fromage) are typically masculine.',
      },
      {
        id: 'a1-l7-q4',
        type: 'fill-blank',
        question: '___ voyage (the trip — choose le or la)',
        correctAnswer: 'le',
        explanation: 'Voyage ends in -age → masculine → le voyage.',
      },
      {
        id: 'a1-l7-q5',
        type: 'multiple-choice',
        question: 'le tour vs la tour — what changes?',
        options: ['Nothing', 'The meaning (tour/turn vs tower)', 'The pronunciation only', 'The plural form'],
        correctAnswer: 'The meaning (tour/turn vs tower)',
        explanation: 'Gender can change meaning: le tour = the tour/turn; la tour = the tower.',
      },
    ],
  },
  {
    id: 'a1-l8',
    levelId: 'a1',
    order: 8,
    title: 'Basic Questions & Question Words',
    subtitle: 'Ask questions and understand answers',
    duration: '50 min',
    objectives: [
      'Form yes/no questions three ways',
      'Use question words (qui, que, où, quand, etc.)',
      'Understand est-ce que constructions',
      'Ask practical everyday questions',
    ],
    sections: [
      {
        type: 'intro',
        title: 'Asking Questions in French',
        content: `French offers **three ways** to ask yes/no questions, from formal to casual. Question words (*mots interrogatifs*) help you ask for specific information. Master both and you'll navigate any conversation.`,
      },
      {
        type: 'grammar',
        title: 'Three Ways to Ask Yes/No Questions',
        content: `**1. Est-ce que** (most common — add before statement):
- *Est-ce que tu parles français?* — Do you speak French?
- *Est-ce qu'il est là?* — Is he there?

**2. Inversion** (formal — swap subject and verb):
- *Parlez-vous français?* — Do you speak French?
- *Est-il là?* — Is he there?
- *Avez-vous un moment?* — Do you have a moment?

**3. Intonation** (informal — rise at end):
- *Tu parles français?* ↗
- *Il est là?* ↗`,
      },
      {
        type: 'grammar',
        title: 'Question Words',
        content: `| Word | Meaning | Example |
|------|---------|---------|
| qui | who | *Qui est-ce?* — Who is it? |
| que / qu' | what (object) | *Qu'est-ce que c'est?* — What is it? |
| quoi | what (after prep.) | *C'est quoi?* — What is it? |
| où | where | *Où habitez-vous?* — Where do you live? |
| quand | when | *Quand arrive-t-il?* — When does he arrive? |
| comment | how | *Comment ça va?* — How are you? |
| pourquoi | why | *Pourquoi?* — Why? |
| combien | how much/many | *Combien ça coûte?* — How much? |
| quel/quelle | which/what | *Quel âge as-tu?* — How old are you? |

**Quel agrees with the noun:** *Quel livre? Quelle heure? Quels jours? Quelles couleurs?*`,
      },
      {
        type: 'examples',
        title: 'Practical Question Patterns',
        content: `- *Comment vous appelez-vous?* — What is your name? (formal)
- *Où sont les toilettes?* — Where is the bathroom?
- *Quelle heure est-il?* — What time is it?
- *Combien de langues parlez-vous?* — How many languages do you speak?
- *Est-ce que je peux vous aider?* — Can I help you?
- *Pourquoi pas?* — Why not?
- *C'est combien?* — How much is it?`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- *Qu'est-ce que qui?* ✗ — use *Qui est-ce?* or *Qui est-ce qui?*
- Forgetting inversion with pronouns: *Où vas-tu?* ✓ not *Où tu vas?* (in formal)
- Using *quoi* at the start — *quoi* follows prepositions: *À quoi penses-tu?*
- Confusing *combien* (how much) with *comment* (how)`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ Est-ce que + statement = easy question form
✓ Inversion = formal (Parlez-vous?)
✓ Intonation = informal (Tu viens? ↗)
✓ Qui, où, quand, comment, pourquoi, combien, quel`,
      },
    ],
    vocabulary: [
      { french: 'question', english: 'question', pronunciation: 'kes-tyOHN', gender: 'f' },
      { french: 'réponse', english: 'answer', pronunciation: 'ray-POHNS', gender: 'f' },
      { french: 'qui', english: 'who', pronunciation: 'kee' },
      { french: 'où', english: 'where', pronunciation: 'oo' },
      { french: 'quand', english: 'when', pronunciation: 'kahn' },
      { french: 'comment', english: 'how', pronunciation: 'ko-MAHN' },
      { french: 'pourquoi', english: 'why', pronunciation: 'poor-KWAH' },
      { french: 'combien', english: 'how much/many', pronunciation: 'kohm-BYAN' },
    ],
    quiz: [
      {
        id: 'a1-l8-q1',
        type: 'multiple-choice',
        question: 'Which is the easiest way to form a yes/no question?',
        options: ['Inversion only', 'Est-ce que + statement', 'Only intonation', 'Add "not" at the end'],
        correctAnswer: 'Est-ce que + statement',
        explanation: 'Est-ce que before a statement is the most common and beginner-friendly method.',
      },
      {
        id: 'a1-l8-q2',
        type: 'fill-blank',
        question: '___ habitez-vous? (Where do you live?)',
        correctAnswer: 'Où',
        explanation: 'Où = where.',
      },
      {
        id: 'a1-l8-q3',
        type: 'translation',
        question: 'Write "Do you speak French?" using est-ce que:',
        correctAnswer: 'Est-ce que vous parlez français',
        explanation: 'Est-ce que + subject + verb: Est-ce que vous parlez français?',
      },
      {
        id: 'a1-l8-q4',
        type: 'multiple-choice',
        question: 'Quel/quelle must agree with:',
        options: ['The verb', 'The noun it modifies', 'The subject only', 'Nothing'],
        correctAnswer: 'The noun it modifies',
        explanation: 'Quel agrees in gender/number: Quel livre? Quelle heure?',
      },
      {
        id: 'a1-l8-q5',
        type: 'multiple-choice',
        question: '"How much does it cost?" is:',
        options: ['Comment ça coûte?', 'Combien ça coûte?', 'Quand ça coûte?', 'Où ça coûte?'],
        correctAnswer: 'Combien ça coûte?',
        explanation: 'Combien = how much/how many.',
      },
    ],
  },
];
