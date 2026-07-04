import type { Lesson } from '../../types';

export const a1LessonsPart2: Lesson[] = [
  {
    id: 'a1-l3',
    levelId: 'a1',
    order: 3,
    title: 'Numbers 0–100',
    subtitle: 'Count, give your age, phone number, and prices',
    duration: '40 min',
    objectives: [
      'Count from 0 to 100 in French',
      'Understand the unique 70–99 number system',
      'Use numbers for age, prices, and phone numbers',
    ],
    sections: [
      {
        type: 'intro',
        title: 'Why Numbers Matter',
        content: `Numbers appear everywhere: age (*J'ai vingt-cinq ans*), prices (*Ça coûte quinze euros*), phone numbers, addresses, and dates. French numbers 1–69 are straightforward, but **70–99 follow a unique system** based on twenty (*vingt*) and sixty (*soixante*).`,
      },
      {
        type: 'vocabulary',
        title: 'Numbers 0–20',
        content: `| Number | French | Pronunciation |
|--------|--------|---------------|
| 0 | zéro | zay-ROH |
| 1 | un/une | uhn / ewn |
| 2 | deux | duh |
| 3 | trois | trwah |
| 4 | quatre | KAH-truh |
| 5 | cinq | sank |
| 6 | six | sees |
| 7 | sept | set |
| 8 | huit | weet |
| 9 | neuf | nuhf |
| 10 | dix | dees |
| 11 | onze | onz |
| 12 | douze | dooz |
| 13 | treize | trez |
| 14 | quatorze | ka-TORZ |
| 15 | quinze | kanz |
| 16 | seize | sez |
| 17 | dix-sept | dee-SET |
| 18 | dix-huit | dee-ZWEET |
| 19 | dix-neuf | dee-NUHF |
| 20 | vingt | van |`,
      },
      {
        type: 'grammar',
        title: 'Numbers 21–69',
        content: `**Pattern:** tens + units joined with hyphen (except with *un* which becomes *et*)

- 21 = *vingt et un*
- 22 = *vingt-deux*
- 30 = *trente*
- 35 = *trente-cinq*
- 40 = *quarante*
- 50 = *cinquante*
- 60 = *soixante*
- 69 = *soixante-neuf*

**Note:** *Vingt* and *cent* take an "s" when multiplied but not followed by another number: *quatre-vingts* (80) but *quatre-vingt-un* (81).`,
      },
      {
        type: 'grammar',
        title: 'The Tricky 70–99',
        content: `French uses a **vigesimal** (base-20) system for these numbers:

| Number | French | Logic |
|--------|--------|-------|
| 70 | soixante-dix | 60 + 10 |
| 71 | soixante et onze | 60 + 11 |
| 72 | soixante-douze | 60 + 12 |
| 80 | quatre-vingts | 4 × 20 |
| 81 | quatre-vingt-un | 4 × 20 + 1 |
| 90 | quatre-vingt-dix | 4 × 20 + 10 |
| 91 | quatre-vingt-onze | 4 × 20 + 11 |
| 99 | quatre-vingt-dix-neuf | 4 × 20 + 10 + 9 |

**Belgium & Switzerland** use simpler forms: *septante* (70), *octante/huitante* (80), *nonante* (90).`,
      },
      {
        type: 'examples',
        title: 'Using Numbers in Context',
        content: `- *J'ai trente ans.* — I am 30 years old.
- *Mon numéro est le zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.* — My number is 06 12 34 56 78.
- *Ça coûte vingt-cinq euros.* — It costs 25 euros.
- *Il y a cent personnes.* — There are 100 people.
- *Mille* = 1,000 | *Un million* = 1,000,000`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- Forgetting hyphens: write *vingt-deux*, not *vingt deux*
- Pronouncing the "t" in *vingt* when followed by a consonant — it's silent: "van-deu"
- Confusing *six* (6) and *dix* (10) — *six* = "sees", *dix* = "dees"
- Writing *quatre-vingts* with "s" only when it's exactly 80`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ 0–20 must be memorized
✓ 21–69: tens + hyphen + units (21 = vingt et un)
✓ 70–99 use soixante and quatre-vingts systems
✓ Use numbers with *avoir* for age: J'ai ... ans`,
      },
    ],
    vocabulary: [
      { french: 'zéro', english: 'zero', pronunciation: 'zay-ROH' },
      { french: 'nombre', english: 'number', pronunciation: 'nohm-BRUH', gender: 'm' },
      { french: 'chiffre', english: 'digit / figure', pronunciation: 'SHEE-fruh', gender: 'm' },
      { french: 'cent', english: 'hundred', pronunciation: 'sahn' },
      { french: 'mille', english: 'thousand', pronunciation: 'meel' },
      { french: 'pair', english: 'even', pronunciation: 'pehr', gender: 'm' },
      { french: 'impair', english: 'odd', pronunciation: 'am-PEHR', gender: 'm' },
    ],
    quiz: [
      {
        id: 'a1-l3-q1',
        type: 'multiple-choice',
        question: 'How do you say 70 in standard French?',
        options: ['septante', 'soixante-dix', 'septante-dix', 'quatre-vingt-dix'],
        correctAnswer: 'soixante-dix',
        explanation: 'Standard French uses soixante-dix (60+10) for 70.',
      },
      {
        id: 'a1-l3-q2',
        type: 'translation',
        question: 'Write the number 85 in French:',
        correctAnswer: 'quatre-vingt-cinq',
        explanation: '85 = quatre-vingt-cinq (4×20 + 5).',
      },
      {
        id: 'a1-l3-q3',
        type: 'multiple-choice',
        question: 'How is 21 written?',
        options: ['vingt-un', 'vingt et un', 'vingt-deux', 'un-vingt'],
        correctAnswer: 'vingt et un',
        explanation: '21 uses "et" (and): vingt et un.',
      },
      {
        id: 'a1-l3-q4',
        type: 'fill-blank',
        question: 'J\'ai ___ ans. (I am 25 years old — write the French number)',
        correctAnswer: 'vingt-cinq',
        explanation: '25 = vingt-cinq. Age uses "avoir": J\'ai vingt-cinq ans.',
      },
      {
        id: 'a1-l3-q5',
        type: 'multiple-choice',
        question: 'What is quatre-vingt-dix-neuf?',
        options: ['89', '99', '79', '90'],
        correctAnswer: '99',
        explanation: '4×20 + 10 + 9 = 80 + 10 + 9 = 99.',
      },
    ],
  },
  {
    id: 'a1-l4',
    levelId: 'a1',
    order: 4,
    title: 'Colors & Basic Adjectives',
    subtitle: 'Describe things with color and simple adjectives',
    duration: '45 min',
    objectives: [
      'Name common colors in French',
      'Understand adjective agreement (gender & number)',
      'Place adjectives correctly (BAGS rule introduction)',
      'Use basic descriptive adjectives',
    ],
    sections: [
      {
        type: 'intro',
        title: 'Describing the World',
        content: `Adjectives in French **must agree** with the noun they describe in gender (masculine/feminine) and number (singular/plural). This is one of the most fundamental rules of French grammar.`,
      },
      {
        type: 'vocabulary',
        title: 'Colors (Les couleurs)',
        content: `| Masculine | Feminine | English |
|-----------|----------|---------|
| rouge | rouge | red |
| bleu | bleue | blue |
| vert | verte | green |
| jaune | jaune | yellow |
| noir | noire | black |
| blanc | blanche | white |
| gris | grise | gray |
| orange | orange | orange |
| violet | violette | purple |
| rose | rose | pink |
| marron | marron | brown |
| beige | beige | beige |

**Invariable colors** (no feminine form): orange, marron, beige, bleu marine, bleu ciel`,
      },
      {
        type: 'grammar',
        title: 'Adjective Agreement Rules',
        content: `**Rule 1 — Feminine:** Add -e to masculine form (if not already ending in -e)
- *un chat noir* → *une chatte noire*
- *un livre bleu* → *une voiture bleue*

**Rule 2 — Plural:** Add -s to masculine/feminine
- *des chats noirs* / *des voitures bleues*

**Rule 3 — Special endings:**
- -eux → -euse: *heureux/heureuse*
- -f → -ve: *actif/active*, *neuf/neuve*
- -er → -ère: *cher/chère*
- -on → -onne: *bon/bonne*
- -ien → -ienne: *canadien/canadienne*

**Rule 4 — Plural of adjectives ending in -s or -x:** No change
- *un homme heureux* → *des hommes heureux*`,
      },
      {
        type: 'grammar',
        title: 'Adjective Placement',
        content: `Most adjectives come **AFTER** the noun:
- *une maison blanche* (a white house)
- *un chien petit* → more naturally *un petit chien* (a small dog)

**BAGS rule** — Adjectives of **B**eauty, **A**ge, **G**oodness, **S**ize come BEFORE the noun:
- **Beauty:** *beau/belle*, *joli/jolie*, *magnifique*
- **Age:** *jeune*, *vieux/vieille*, *nouveau/nouvelle*
- **Goodness:** *bon/bonne*, *mauvais/mauvaise*, *gentil/gentille*
- **Size:** *grand/grande*, *petit/petite*, *gros/grosse*

Examples:
- *une belle fleur* (a beautiful flower)
- *un grand homme* (a tall man)
- *une bonne idée* (a good idea)`,
      },
      {
        type: 'examples',
        title: 'Common Descriptive Adjectives',
        content: `| French | English |
|--------|---------|
| grand/grande | big / tall |
| petit/petite | small / little |
| gros/grosse | fat / big |
| jeune | young |
| vieux/vieille | old |
| nouveau/nouvelle | new |
| ancien/ancienne | old (former) / ancient |
| beau/belle | beautiful / handsome |
| joli/jolie | pretty |
| bon/bonne | good |
| mauvais/mauvaise | bad |
| facile | easy |
| difficile | difficult |
| intéressant/intéressante | interesting |
| important/importannte | important |`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- Forgetting agreement: *une voiture rouge* ✓ not *une voiture roux* ✗
- Wrong placement: *une maison blanche* ✓ not *une blanche maison* ✗ (color goes after)
- Confusing *beau* and *bel*: use *bel* before masculine nouns starting with vowel: *un bel homme*
- Confusing *vieux* and *ancien*: *vieux* = old age; *ancien* = former or ancient`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ Adjectives agree in gender and number with nouns
✓ Most adjectives go AFTER the noun; BAGS adjectives go BEFORE
✓ Colors mostly follow regular agreement rules
✓ orange, marron, beige are invariable`,
      },
    ],
    vocabulary: [
      { french: 'couleur', english: 'color', pronunciation: 'koo-LUHR', gender: 'f' },
      { french: 'adjectif', english: 'adjective', pronunciation: 'ad-zhek-TEEF', gender: 'm' },
      { french: 'rouge', english: 'red', pronunciation: 'roozh' },
      { french: 'bleu / bleue', english: 'blue', pronunciation: 'bluh / bluh' },
      { french: 'grand / grande', english: 'big / tall', pronunciation: 'grahn / grahnd' },
      { french: 'petit / petite', english: 'small', pronunciation: 'puh-TEE / puh-TEET' },
      { french: 'beau / belle', english: 'beautiful', pronunciation: 'boh / behl' },
    ],
    quiz: [
      {
        id: 'a1-l4-q1',
        type: 'multiple-choice',
        question: 'Which is correct for "a white house"?',
        options: ['une blanche maison', 'une maison blanche', 'une maison blanc', 'une maison blanches'],
        correctAnswer: 'une maison blanche',
        explanation: 'Colors go after the noun, and blanc becomes blanche for feminine maison.',
      },
      {
        id: 'a1-l4-q2',
        type: 'multiple-choice',
        question: 'Which adjectives typically come BEFORE the noun?',
        options: ['Colors', 'Nationalities', 'BAGS adjectives (beauty, age, goodness, size)', 'All adjectives'],
        correctAnswer: 'BAGS adjectives (beauty, age, goodness, size)',
        explanation: 'The BAGS rule: Beauty, Age, Goodness, Size adjectives precede the noun.',
      },
      {
        id: 'a1-l4-q3',
        type: 'fill-blank',
        question: 'des chats ___ (black, plural masculine)',
        correctAnswer: 'noirs',
        explanation: 'Noir + masculine plural = noirs.',
      },
      {
        id: 'a1-l4-q4',
        type: 'multiple-choice',
        question: 'Which color is invariable (no feminine form)?',
        options: ['rouge', 'bleu', 'marron', 'vert'],
        correctAnswer: 'marron',
        explanation: 'Marron, orange, and beige are invariable in French.',
      },
      {
        id: 'a1-l4-q5',
        type: 'translation',
        question: 'Write "a pretty girl" in French:',
        correctAnswer: 'une jolie fille',
        explanation: 'Joli is a BAGS adjective (beauty) so it goes before fille; joli → jolie (feminine).',
      },
    ],
  },
  {
    id: 'a1-l5',
    levelId: 'a1',
    order: 5,
    title: 'Articles: le, la, les, un, une',
    subtitle: 'Master definite and indefinite articles',
    duration: '50 min',
    objectives: [
      'Use definite articles (le, la, l\', les)',
      'Use indefinite articles (un, une, des)',
      'Understand contractions with à and de',
      'Know when to use which article',
    ],
    sections: [
      {
        type: 'intro',
        title: 'What Are Articles?',
        content: `Articles are small words before nouns. French has **definite articles** (the) and **indefinite articles** (a/an/some). Every French noun has a gender — you must learn articles together with nouns.`,
      },
      {
        type: 'grammar',
        title: 'Definite Articles (The)',
        content: `| Article | Used when | Example |
|---------|-----------|---------|
| le | masculine singular | *le livre* (the book) |
| la | feminine singular | *la table* (the table) |
| l' | before vowel/h silent | *l'école* (the school) |
| les | plural (any gender) | *les livres* (the books) |

**Uses of "the" in French:**
1. Specific things: *Où est le chat?* (Where is the cat?)
2. General categories: *J'aime le chocolat.* (I like chocolate — in general)
3. Days of the week: *Le lundi, je travaille.* (On Mondays, I work.)
4. Languages: *Je parle le français.* (I speak French.)`,
      },
      {
        type: 'grammar',
        title: 'Indefinite Articles (A/An/Some)',
        content: `| Article | Used when | Example |
|---------|-----------|---------|
| un | masculine singular | *un chat* (a cat) |
| une | feminine singular | *une fleur* (a flower) |
| des | plural (any gender) | *des chats* (some cats / cats) |

**Note:** English often omits "some" — *des pommes* can mean "apples" or "some apples."

**Negative:** Indefinite articles become *de* (or d') after negation:
- *J'ai un chat.* → *Je n'ai pas de chat.* (I don't have a cat.)
- *Il y a des livres.* → *Il n'y a pas de livres.*`,
      },
      {
        type: 'grammar',
        title: 'Contractions: du, des, au, aux',
        content: `**de + le = du** | **de + les = des**
- *Je mange du pain.* (I eat (some) bread.)
- *Le livre des enfants.* (The children's book.)

**à + le = au** | **à + les = aux**
- *Je vais au marché.* (I go to the market.)
- *Les étudiants vont à l'école.* (Students go to school.)

**No contraction with la or l':**
- *de la* → *Je bois de la limonade.*
- *à la* → *Je suis à la maison.*`,
      },
      {
        type: 'examples',
        title: 'Choosing the Right Article',
        content: `| Situation | Example |
|-----------|---------|
| First mention | *J'ai acheté un livre.* |
| Already mentioned | *Le livre est intéressant.* |
| Likes/dislikes (general) | *J'aime la musique.* |
| Professions (no article) | *Il est médecin.* (He is a doctor.) |
| Quantity with "de" | *Beaucoup de pain, un kilo de pommes* |`,
      },
      {
        type: 'mistakes',
        title: 'Common Mistakes',
        content: `- Using articles with professions after *être*: *Il est médecin* ✓ (no article)
- Forgetting *l'* before vowels: *l'ami* ✓ not *le ami* ✗
- Confusing *des* (some) with *les* (the)
- Not changing to *de* in negative: *Je n'ai pas de chat* ✓`,
      },
      {
        type: 'summary',
        title: 'Lesson Summary',
        content: `✓ le/la/l'/les = the (definite)
✓ un/une/des = a/an/some (indefinite)
✓ de + le = du; à + le = au
✓ After negation: un/une/des → de/d'`,
      },
    ],
    vocabulary: [
      { french: 'article', english: 'article', pronunciation: 'ar-tee-KLUHL', gender: 'm' },
      { french: 'le', english: 'the (masc.)', pronunciation: 'luh' },
      { french: 'la', english: 'the (fem.)', pronunciation: 'lah' },
      { french: 'un', english: 'a/an (masc.)', pronunciation: 'uhn' },
      { french: 'une', english: 'a/an (fem.)', pronunciation: 'ewn' },
      { french: 'livre', english: 'book', pronunciation: 'LEE-vruh', gender: 'm' },
      { french: 'table', english: 'table', pronunciation: 'TAH-bluh', gender: 'f' },
    ],
    quiz: [
      {
        id: 'a1-l5-q1',
        type: 'multiple-choice',
        question: 'Which article goes with "école" (feminine)?',
        options: ['le école', "l'école", 'la école', 'un école'],
        correctAnswer: "l'école",
        explanation: 'Before vowels, le/la becomes l\' — l\'école.',
      },
      {
        id: 'a1-l5-q2',
        type: 'fill-blank',
        question: 'Je n\'ai pas ___ chat. (a)',
        correctAnswer: 'de',
        explanation: 'In negative sentences, un/une/des become de/d\'.',
      },
      {
        id: 'a1-l5-q3',
        type: 'multiple-choice',
        question: 'de + le = ?',
        options: ['de le', 'du', 'des', 'au'],
        correctAnswer: 'du',
        explanation: 'de + le contracts to du.',
      },
      {
        id: 'a1-l5-q4',
        type: 'translation',
        question: 'Write "I go to the market" (Je vais ___ marché)',
        correctAnswer: 'au',
        explanation: 'à + le = au. Je vais au marché.',
      },
      {
        id: 'a1-l5-q5',
        type: 'multiple-choice',
        question: 'Il est ___. (He is a doctor — no article needed)',
        options: ['un médecin', 'le médecin', 'médecin', 'des médecin'],
        correctAnswer: 'médecin',
        explanation: 'After être + profession, no article is used in French.',
      },
    ],
  },
];
