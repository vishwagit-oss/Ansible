import type { Lesson } from '../../types';

export const a1Lessons: Lesson[] = [
  {
    id: 'a1-l1',
    levelId: 'a1',
    order: 1,
    title: 'The French Alphabet & Pronunciation',
    subtitle: 'Your first step — sounds, letters, and accent marks',
    duration: '45 min',
    objectives: [
      'Recite the 26-letter French alphabet',
      'Understand accent marks (é, è, ê, ç, ë)',
      'Pronounce nasal vowels and the French R',
      'Recognize silent letters and liaison basics',
    ],
    sections: [
      {
        type: 'intro',
        title: 'Welcome to French!',
        content: `French uses the same 26 letters as English, but **pronunciation is completely different**. English and French share about 30% of vocabulary due to Norman French influence, yet the sound system is unique.

**Key principle:** French is a syllable-timed language. Each syllable gets roughly equal stress, unlike English where stress varies dramatically. The final consonant of a word is usually **silent** unless the next word begins with a vowel (this is called **liaison**).`,
      },
      {
        type: 'pronunciation',
        title: 'The Alphabet (L\'alphabet)',
        content: `| Letter | Name | Sound |
|--------|------|-------|
| A | ah | /a/ as in "father" |
| B | bé | /b/ |
| C | cé | /s/ before e,i,y; /k/ elsewhere |
| D | dé | /d/ |
| E | euh | often silent at word end |
| F | effe | /f/ |
| G | gé | /ʒ/ before e,i,y; /g/ elsewhere |
| H | ache | always silent in French |
| I | ee | /i/ as in "see" |
| J | ji | /ʒ/ as in "measure" |
| K | ka | /k/ |
| L | elle | /l/ |
| M | emme | /m/ |
| N | enne | /n/ or nasal |
| O | oh | /o/ |
| P | pé | /p/ |
| Q | ku | /k/ |
| R | erre | guttural /ʁ/ from back of throat |
| S | esse | /s/ or /z/ between vowels |
| T | té | /t/ |
| U | u | /y/ — round lips like "oo", tongue like "ee" |
| V | vé | /v/ |
| W | double vé | /v/ or /w/ in borrowed words |
| X | iks | /ks/ or /gz/ |
| Y | i grec | /i/ or /j/ |
| Z | zède | /z/ |`,
      },
      {
        type: 'grammar',
        title: 'Accent Marks (Les accents)',
        content: `French uses five diacritical marks that change pronunciation or meaning:

**1. Acute accent (é)** — Makes "e" sound like "ay" in "say"
- *café*, *été*, *préféré*

**2. Grave accent (è, à, ù)** — Makes "e" sound like "eh" in "bed"; also distinguishes words
- *père* (father) vs *pere* (doesn't exist)
- *à* (to/at) vs *a* (has)
- *où* (where) vs *ou* (or)

**3. Circumflex (ê, â, î, ô, û)** — Often indicates a lost "s"; lengthens vowel slightly
- *forêt* (forest, from Latin *forestis*)
- *hôtel*, *fête*, *crêpe*

**4. Cedilla (ç)** — Makes "c" sound like /s/ before a, o, u
- *français*, *garçon*, *leçon*

**5. Diaeresis (ë, ï, ü)** — Indicates two separate vowel sounds
- *Noël*, *naïf*, *aiguë*`,
      },
      {
        type: 'pronunciation',
        title: 'Nasal Vowels',
        content: `French has four nasal vowels — air flows through nose AND mouth:

| Spelling | Example | Approximate sound |
|----------|---------|-------------------|
| an, am, en, em | *dans, enfant* | "ahn" (no strong n) |
| in, im, yn, ym | *vin, simple* | "an" (nasal) |
| on, om | *bon, nom* | "ohn" (nasal) |
| un, um | *un, parfum* | "uhn" (nasal) |

**Practice:** Say "an" while pinching your nose — that's the nasal quality. The "n" or "m" is NOT fully pronounced.`,
      },
      {
        type: 'pronunciation',
        title: 'The French R & Silent Letters',
        content: `**The French R:** Produced at the back of the throat (uvular), like a gentle gargle. Practice with *rouge*, *Paris*, *frère*.

**Silent letters:** In most words, final consonants are silent:
- *petit* → "puh-TEE" (t silent)
- *grand* → "grahn" (d silent)
- *beaucoup* → "boh-KOO" (p silent)

**Exceptions:** c, r, f, l are often pronounced at word end: *avec*, *hiver*, *motif*, *sol*.

**Liaison:** When a word ending in a normally silent consonant is followed by a vowel, the consonant is pronounced:
- *les amis* → "lay-zah-MEE"
- *un ami* → "u-nah-MEE"
- *petit enfant* → "puh-tee-tahn-FAHN"`,
      },
      {
        type: 'mistakes',
        title: 'Common Beginner Mistakes',
        content: `- **Pronouncing every letter** like in English — French is not phonetic in the English sense
- **Rolling the R** with the tongue tip — French R is uvular (back of throat)
- **Stressing the wrong syllable** — stress falls on the last syllable of a phrase, not individual words
- **Ignoring nasal vowels** — *bon* and *beau* sound completely different
- **Pronouncing the H** — H is always silent: *homme* sounds like "omm"`,
      },
      {
        type: 'culture',
        title: 'Did You Know?',
        content: `The Académie Française, founded in 1635, regulates the French language. France has regional accents (Southern, Northern, Quebecois) but Parisian French is the standard taught internationally. Quebec French sounds quite different — we'll note variations when relevant.`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ French has 26 letters but unique pronunciation rules
✓ Accent marks change sounds and meanings
✓ Four nasal vowels: an, in, on, un
✓ Final consonants are usually silent; liaison connects words
✓ The French R is uvular (back of throat)`,
      },
    ],
    vocabulary: [
      { french: 'alphabet', english: 'alphabet', pronunciation: 'al-fah-BEH', gender: 'm' },
      { french: 'lettre', english: 'letter (of alphabet)', pronunciation: 'LEH-truh', gender: 'f' },
      { french: 'accent', english: 'accent mark', pronunciation: 'ak-SAHN', gender: 'm' },
      { french: 'prononciation', english: 'pronunciation', pronunciation: 'pro-nons-ya-SYOHN', gender: 'f' },
      { french: 'voyelle', english: 'vowel', pronunciation: 'vwa-YEHL', gender: 'f' },
      { french: 'consonne', english: 'consonant', pronunciation: 'kon-so-NNUH', gender: 'f' },
      { french: 'mot', english: 'word', pronunciation: 'moh', gender: 'm' },
      { french: 'français', english: 'French (language/adj)', pronunciation: 'fran-SHEH', gender: 'm' },
    ],
    quiz: [
      {
        id: 'a1-l1-q1',
        type: 'multiple-choice',
        question: 'How is the French "r" pronounced?',
        options: ['With the tongue tip rolled', 'At the back of the throat', 'Like the English "r"', 'It is always silent'],
        correctAnswer: 'At the back of the throat',
        explanation: 'The French R is uvular — produced at the back of the throat, not with the tongue tip.',
      },
      {
        id: 'a1-l1-q2',
        type: 'multiple-choice',
        question: 'What does the cedilla (ç) do?',
        options: ['Makes c sound like /k/', 'Makes c sound like /s/', 'Makes c silent', 'Lengthens the vowel'],
        correctAnswer: 'Makes c sound like /s/',
        explanation: 'The cedilla (ç) makes "c" pronounced as /s/ before a, o, or u — as in "français".',
      },
      {
        id: 'a1-l1-q3',
        type: 'multiple-choice',
        question: 'In French, final consonants are generally:',
        options: ['Always pronounced', 'Always silent', 'Usually silent', 'Pronounced only before vowels'],
        correctAnswer: 'Usually silent',
        explanation: 'Final consonants are typically silent in French, with exceptions for c, r, f, l.',
      },
      {
        id: 'a1-l1-q4',
        type: 'fill-blank',
        question: 'The accent on "é" makes it sound like ___ in "say".',
        correctAnswer: 'ay',
        explanation: 'The acute accent (é) produces the /e/ sound, similar to "ay" in English "say".',
      },
      {
        id: 'a1-l1-q5',
        type: 'multiple-choice',
        question: 'Which spelling represents a nasal vowel?',
        options: ['é', 'an', 'ç', 'è'],
        correctAnswer: 'an',
        explanation: '"an" (also am, en, em) represents one of French\'s four nasal vowel sounds.',
      },
      {
        id: 'a1-l1-q6',
        type: 'multiple-choice',
        question: 'What is "liaison" in French?',
        options: ['Linking two words with a hyphen', 'Pronouncing a normally silent final consonant before a vowel', 'Changing word gender', 'Adding an accent mark'],
        correctAnswer: 'Pronouncing a normally silent final consonant before a vowel',
        explanation: 'Liaison connects words in speech — e.g., "les amis" is pronounced "lay-zah-MEE".',
      },
    ],
  },
  {
    id: 'a1-l2',
    levelId: 'a1',
    order: 2,
    title: 'Greetings & Introductions',
    subtitle: 'Say hello, introduce yourself, and be polite',
    duration: '50 min',
    objectives: [
      'Use formal and informal greetings',
      'Introduce yourself (name, nationality, profession)',
      'Ask and answer "How are you?"',
      'Use basic courtesy expressions',
    ],
    sections: [
      {
        type: 'intro',
        title: 'The Importance of Politeness',
        content: `French culture places enormous emphasis on **politesse** (politeness). Always greet shopkeepers, say *bonjour* when entering a room, and use *vous* (formal "you") with strangers, elders, and in professional settings.

**Tu vs Vous:** *Tu* is informal (friends, family, children). *Vous* is formal (strangers, bosses, plural "you"). When in doubt, use *vous*.`,
      },
      {
        type: 'vocabulary',
        title: 'Essential Greetings',
        content: `| French | English | When to use |
|--------|---------|-------------|
| Bonjour | Hello / Good day | Until ~6 PM |
| Bonsoir | Good evening | After ~6 PM |
| Salut | Hi / Bye | Informal only |
| Coucou | Hey! | Very informal, close friends |
| Au revoir | Goodbye | Standard |
| À bientôt | See you soon | Common |
| À demain | See you tomorrow | When applicable |
| Bonne nuit | Good night | Before sleeping |`,
      },
      {
        type: 'grammar',
        title: 'Introducing Yourself',
        content: `**Basic patterns:**

- *Je m'appelle...* — My name is... (literally: I call myself)
- *Je suis...* — I am...
- *J'ai ... ans* — I am ... years old
- *Je viens de...* — I come from... / I'm from...
- *Je suis [nationality]* — I am [nationality]
- *Je suis [profession]* — I am a [profession]

**Example dialogue:**
> — Bonjour! Je m'appelle Marie. Et vous?
> — Bonjour Marie. Je m'appelle Pierre. Enchanté!
> — Enchantée!

**Note:** *Enchanté* (m) / *Enchantée* (f) = "Nice to meet you" — match your gender.`,
      },
      {
        type: 'grammar',
        title: 'Asking "How Are You?"',
        content: `| Question | Formality | Typical response |
|----------|-----------|------------------|
| Comment allez-vous? | Formal | Très bien, merci. Et vous? |
| Comment vas-tu? | Informal | Ça va bien. Et toi? |
| Comment ça va? | Neutral/informal | Ça va. / Comme ci, comme ça. |
| Quoi de neuf? | Informal slang | Pas grand-chose. |

**Responses:**
- *Très bien, merci* — Very well, thank you
- *Bien, merci* — Fine, thank you
- *Comme ci, comme ça* — So-so
- *Pas très bien* — Not very well
- *Et vous? / Et toi?* — And you?`,
      },
      {
        type: 'examples',
        title: 'Courtesy Expressions',
        content: `| French | English |
|--------|---------|
| S'il vous plaît | Please (formal) |
| S'il te plaît | Please (informal) |
| Merci (beaucoup) | Thank you (very much) |
| De rien / Je vous en prie | You're welcome |
| Pardon / Excusez-moi | Excuse me / Sorry |
| Je suis désolé(e) | I'm sorry |
| S'il vous plaît? | Could you repeat that? |
| Je ne comprends pas | I don't understand |
| Parlez-vous anglais? | Do you speak English? |
| Oui / Non | Yes / No |`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- Saying *bonjour* in the evening — use *bonsoir* after ~6 PM
- Using *tu* too quickly with strangers — start with *vous*
- Forgetting to greet shopkeepers — always say *bonjour* first!
- Confusing *excusez-moi* (getting attention) with *pardon* (apologizing)
- Not matching *enchanté/enchantée* to your gender`,
      },
      {
        type: 'culture',
        title: 'La Bise — The French Cheek Kiss',
        content: `In France, friends greet with *la bise* — cheek kisses (usually 2, sometimes 3 or 4 depending on region). Never initiate with strangers! Handshakes are for formal introductions. Wait for the French person to indicate what's appropriate.`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ Always use *bonjour* during the day, *bonsoir* at night
✓ *Je m'appelle...* to introduce yourself
✓ Use *vous* with strangers, *tu* with friends
✓ *Comment allez-vous?* (formal) vs *Comment ça va?* (informal)
✓ Politeness is essential in French culture`,
      },
    ],
    vocabulary: [
      { french: 'bonjour', english: 'hello / good day', pronunciation: 'bon-ZHOOR' },
      { french: 'bonsoir', english: 'good evening', pronunciation: 'bon-SWAHR' },
      { french: 'merci', english: 'thank you', pronunciation: 'mehr-SEE' },
      { french: 'au revoir', english: 'goodbye', pronunciation: 'oh ruh-VWAHR' },
      { french: 'enchanté(e)', english: 'nice to meet you', pronunciation: 'on-shon-TAY' },
      { french: 'nom', english: 'name / last name', pronunciation: 'nohn', gender: 'm' },
      { french: 'prénom', english: 'first name', pronunciation: 'pray-NOHN', gender: 'm' },
      { french: 'nationalité', english: 'nationality', pronunciation: 'na-syo-na-lee-TAY', gender: 'f' },
      { french: 'politesse', english: 'politeness', pronunciation: 'po-lee-TESS', gender: 'f' },
    ],
    quiz: [
      {
        id: 'a1-l2-q1',
        type: 'multiple-choice',
        question: 'What greeting should you use at 8 PM?',
        options: ['Bonjour', 'Bonsoir', 'Salut', 'Coucou'],
        correctAnswer: 'Bonsoir',
        explanation: 'Bonsoir is used in the evening, typically after 6 PM.',
      },
      {
        id: 'a1-l2-q2',
        type: 'translation',
        question: 'How do you say "My name is..." in French?',
        correctAnswer: "Je m'appelle",
        explanation: 'Je m\'appelle literally means "I call myself" and is the standard way to give your name.',
      },
      {
        id: 'a1-l2-q3',
        type: 'multiple-choice',
        question: 'Which is the formal way to ask "How are you?"',
        options: ['Comment ça va?', 'Comment vas-tu?', 'Comment allez-vous?', 'Quoi de neuf?'],
        correctAnswer: 'Comment allez-vous?',
        explanation: 'Comment allez-vous uses the formal "vous" conjugation of aller.',
      },
      {
        id: 'a1-l2-q4',
        type: 'fill-blank',
        question: 'Complete: Très bien, ___. (thank you)',
        correctAnswer: 'merci',
        explanation: '"Merci" means thank you. "Très bien, merci" = Very well, thank you.',
      },
      {
        id: 'a1-l2-q5',
        type: 'multiple-choice',
        question: 'When meeting a stranger, you should use:',
        options: ['tu', 'vous', 'either is fine', 'neither'],
        correctAnswer: 'vous',
        explanation: 'Vous is the formal "you" used with strangers, elders, and in professional settings.',
      },
      {
        id: 'a1-l2-q6',
        type: 'multiple-choice',
        question: '"Comme ci, comme ça" means:',
        options: ['Very well', 'So-so', 'Not well', 'Goodbye'],
        correctAnswer: 'So-so',
        explanation: '"Comme ci, comme ça" literally means "like this, like that" — indicating so-so.',
      },
    ],
  },
];
