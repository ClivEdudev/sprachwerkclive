/* Sprachwerk · slide lessons
   German grammar taught the ClivEdu way: a formula, colour-coded examples with English,
   and a "Warum?" slide that shows where the form comes from and why it is so.

   Slide types
     cover    title, lead, chips: [German phrase, ...]
     goals    items: [[goal, German example, English], ...]
     formula  eb, title, rows: [{ chips: [[text, role], ...], en }], notes
              roles: s subject · v verb · o rest · t first slot / time · x end of sentence · n negation · e ending
     why      eb, title, body: [paragraph html, ...], pairs: [[English, German], ...], notes
     table    eb, title, head: [...], rows: [[...]], say: column index to make tappable
     cols     eb, title, cols: [{ label, tone: gold|red|blue|green|violet, lines: [German html], en }], notes
     examples eb, title, items: [[German html, English], ...]
     quiz     title, sub, rows: [[prompt, answer]]  (tap to reveal; German answers are spoken)
     check    items: ["I can ...", ...]  (last slide: finish the lesson)

   Inline colour in German html:
     <b class=s> subject  <b class=v> verb  <b class=e> ending  <b class=x> end slot  <b class=n> negation
     <b class=m> der-word (blue)  <b class=f> die-word (red)  <b class=nt> das-word (green)
*/
window.SW_LESSONS = [

/* ================================================================ 1 · sein */
{ id: "sein", n: 1, unit: 1, title: "sein: to be", de: "Ich bin Clive.", lead: "The most important verb in German, and why it looks so strange",
  slides: [
    { t: "cover", title: "Ich <span class=hl>bin</span> Clive.", lead: "sein: to be", chips: ["Ich bin Clive.", "Du bist nett.", "Wir sind hier."] },
    { t: "goals", items: [
      ["Say who you are", "Ich bin Clive.", "I am Clive."],
      ["Say where and how people are", "Sie ist in Berlin.", "She is in Berlin."],
      ["Ask: Bist du …?", "Bist du müde?", "Are you tired?"] ] },
    { t: "formula", eb: "The rule", title: "Who + sein + what / where / how", rows: [
      { chips: [["Ich", "s"], ["bin", "v"], ["Lehrer.", "o"]], en: "I am a teacher." },
      { chips: [["Sie", "s"], ["ist", "v"], ["in Berlin.", "o"]], en: "She is in Berlin." },
      { chips: [["Wir", "s"], ["sind", "v"], ["müde.", "o"]], en: "We are tired." } ],
      notes: ["No “a” for jobs: Ich bin Lehrer", "sein changes for every person: learn it as a song"] },
    { t: "table", eb: "Learn it as a chant", title: "sein: all six forms", head: ["Who", "German", "English"], say: 1, rows: [
      ["I", "ich bin", "I am"], ["you (friend)", "du bist", "you are"], ["he / she / it", "er / sie / es ist", "he / she / it is"],
      ["we", "wir sind", "we are"], ["you all", "ihr seid", "you (all) are"], ["they / you (polite)", "sie / Sie sind", "they are / you are"] ],
      notes: ["sind is used twice: wir and sie / Sie", "Sie with a capital S = polite “you”"] },
    { t: "why", eb: "Warum? Where it comes from", title: "Why is “to be” so irregular?",
      body: ["Because it is not one verb. It is <b>three old verbs glued together</b>, in English and in German alike.",
        "One old root gave <b>ist</b> and English <b>is</b>. A second root meant “to grow, to become” and gave <b>bin / bist</b> and English <b>be</b> (Old English even said <i>ic bēo</i>, “I be”). A third gave <b>war</b> and English <b>was</b>.",
        "The verbs people use every day are the ones that never get “regularised”, so they keep their old shapes. That is why English has am / is / are / was / be, and German has bin / ist / sind / war / sein."],
      pairs: [["is", "ist"], ["be", "bin"], ["was", "war"]],
      notes: ["You already know this pattern from English", "Irregular = very old and very common"] },
    { t: "cols", eb: "Three forms", title: "Yes, no and questions", cols: [
      { label: "Yes", tone: "green", lines: ["Er <b class=v>ist</b> müde."], en: "He is tired." },
      { label: "No", tone: "red", lines: ["Er <b class=v>ist</b> <b class=n>nicht</b> müde."], en: "He is not tired." },
      { label: "Question", tone: "blue", lines: ["<b class=v>Ist</b> er müde?"], en: "Is he tired?" } ],
      notes: ["nicht goes after ist", "Question: the verb jumps to the front, just like English"] },
    { t: "examples", title: "Examples", items: [
      ["Ich <b class=v>bin</b> Clive.", "I am Clive."],
      ["Du <b class=v>bist</b> sehr nett.", "You are very nice."],
      ["Das <b class=v>ist</b> mein Bruder.", "That is my brother."],
      ["Wir <b class=v>sind</b> in Berlin.", "We are in Berlin."],
      ["<b class=v>Seid</b> ihr müde?", "Are you (all) tired?"],
      ["<b class=v>Sind</b> Sie Herr Weber?", "Are you Mr Weber?"] ] },
    { t: "quiz", title: "Quiz 1: say it in German", sub: "Say it out loud first. Tap to check.", rows: [
      ["I am tired.", "Ich bin müde."], ["She is a teacher.", "Sie ist Lehrerin."], ["Are you (friend) in Berlin?", "Bist du in Berlin?"], ["We are not tired.", "Wir sind nicht müde."] ] },
    { t: "quiz", title: "Quiz 2: fill the gap", sub: "Which form of sein?", rows: [
      ["Ich ___ Clive.", "Ich bin Clive."], ["Du ___ nett.", "Du bist nett."], ["Ihr ___ hier.", "Ihr seid hier."], ["Sie (they) ___ müde.", "Sie sind müde."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich ist Clive.", "Ich bin Clive."], ["Ich bin ein Lehrer.", "Ich bin Lehrer."], ["Du bin nett.", "Du bist nett."], ["Wir seid hier.", "Wir sind hier."] ] },
    { t: "check", items: ["say who I am: Ich bin …", "say all six forms of sein", "make it negative with nicht", "ask a question: Bist du …?", "explain why “to be” is irregular"] }
  ] },

/* ================================================================ 2 · present tense */
{ id: "present", n: 2, unit: 2, title: "Present tense endings", de: "Ich wohne, du wohnst", lead: "One stem, six endings, and the English you already knew",
  slides: [
    { t: "cover", title: "Ich wohn<span class=hl>e</span>, du wohn<span class=hl>st</span>", lead: "Present tense: regular verbs", chips: ["Ich wohne in Berlin.", "Du spielst Gitarre.", "Er lernt Deutsch."] },
    { t: "goals", items: [
      ["Find the stem of any verb", "wohnen → wohn-", "to live → live"],
      ["Add the right ending", "du wohnst", "you live"],
      ["Talk about yourself and others", "Er lernt Deutsch.", "He is learning German."] ] },
    { t: "formula", eb: "The rule", title: "Who + stem + ending", rows: [
      { chips: [["Ich", "s"], ["wohn", "v"], ["e", "e"], ["in Berlin.", "o"]], en: "I live in Berlin." },
      { chips: [["Du", "s"], ["wohn", "v"], ["st", "e"], ["in Berlin.", "o"]], en: "You live in Berlin." },
      { chips: [["Er", "s"], ["wohn", "v"], ["t", "e"], ["in Berlin.", "o"]], en: "He lives in Berlin." } ],
      notes: ["Stem = verb minus -en: wohnen → wohn-", "The ending tells you who"] },
    { t: "table", eb: "The six endings", title: "wohnen: to live", head: ["Who", "Ending", "German"], say: 2, rows: [
      ["ich", "-e", "ich wohne"], ["du", "-st", "du wohnst"], ["er / sie / es", "-t", "er wohnt"],
      ["wir", "-en", "wir wohnen"], ["ihr", "-t", "ihr wohnt"], ["sie / Sie", "-en", "sie wohnen"] ],
      notes: ["wir and sie / Sie = the infinitive: free!", "Memory trick: e · st · t · en · t · en"] },
    { t: "why", eb: "Warum? Where it comes from", title: "English had these endings too",
      body: ["Old English verbs had endings for every person, just like German. You have seen them in the Bible and in Shakespeare: <b>thou sayest</b>, <b>he saith</b>, <b>thou goest</b>, <b>he goeth</b>.",
        "That <b>-st</b> is the same ending as German <b>du gehst</b>. English later dropped “thou” and almost every ending. Only one survived: the <b>-s</b> in <i>he goes</i>.",
        "German simply kept the whole set. So when you add -st to du, you are speaking a little like Shakespeare."],
      pairs: [["thou goest", "du gehst"], ["thou comest", "du kommst"], ["he goes", "er geht"]],
      notes: ["English he goes -s = German er geht -t", "German never dropped its endings"] },
    { t: "cols", eb: "Spelling", title: "Small helpers", cols: [
      { label: "Normal", tone: "green", lines: ["spielen → du spielst", "lernen → er lernt"], en: "Just add the ending." },
      { label: "Stem ends in -t / -d", tone: "gold", lines: ["arbeiten → du arbeitest", "finden → er findet"], en: "Add an extra -e- so you can say it." },
      { label: "Stem ends in -s / -ß / -z", tone: "blue", lines: ["heißen → du heißt", "tanzen → du tanzt"], en: "du only adds -t: the s is already there." } ],
      notes: ["These rules are about pronunciation, not grammar", "Try saying “arbeitst”: impossible!"] },
    { t: "examples", title: "Examples", items: [
      ["Ich <b class=v>lern<b class=e>e</b></b> Deutsch.", "I am learning German."],
      ["Du <b class=v>spiel<b class=e>st</b></b> gut Gitarre.", "You play the guitar well."],
      ["Anna <b class=v>arbeit<b class=e>et</b></b> in Köln.", "Anna works in Cologne."],
      ["Wir <b class=v>komm<b class=e>en</b></b> aus England.", "We come from England."],
      ["Ihr <b class=v>trink<b class=e>t</b></b> Kaffee.", "You (all) drink coffee."],
      ["Wie <b class=v>heiß<b class=e>t</b></b> du?", "What is your name?"] ] },
    { t: "why", eb: "Warum? One tense, two English meanings", title: "Ich lerne = I learn and I am learning",
      body: ["German has no “-ing” form. <b>Ich lerne Deutsch</b> means both “I learn German” and “I am learning German”.",
        "English also used only one form for a long time. The “-ing” tense spread in English much later, and German never built one."],
      pairs: [["I play / I am playing", "ich spiele"], ["she works / she is working", "sie arbeitet"]],
      notes: ["Never translate “am learning” as “bin lernen”"] },
    { t: "quiz", title: "Quiz 1: add the ending", sub: "Say the whole form. Tap to check.", rows: [
      ["spielen → du ___", "du spielst"], ["kommen → er ___", "er kommt"], ["arbeiten → sie ___", "sie arbeitet"], ["heißen → du ___", "du heißt"], ["machen → wir ___", "wir machen"] ] },
    { t: "quiz", title: "Quiz 2: say it in German", sub: "Tap to check.", rows: [
      ["I live in Berlin.", "Ich wohne in Berlin."], ["He is learning German.", "Er lernt Deutsch."], ["You (all) play football.", "Ihr spielt Fußball."], ["What is your name?", "Wie heißt du?"] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich bin lernen Deutsch.", "Ich lerne Deutsch."], ["Du arbeitst viel.", "Du arbeitest viel."], ["Er wohnen in Köln.", "Er wohnt in Köln."], ["Du heißst Clive.", "Du heißt Clive."] ] },
    { t: "check", items: ["find the stem of a verb", "say the six endings: e · st · t · en · t · en", "use the -e- helper: du arbeitest", "know that ich lerne = I learn / I am learning", "explain why du has -st"] }
  ] },

/* ================================================================ 3 · word order */
{ id: "v2", n: 3, unit: 2, title: "The verb is always second", de: "Heute spiele ich Fußball.", lead: "German word order with one simple rule, plus questions",
  slides: [
    { t: "cover", title: "Heute <span class=hl>spiele</span> ich Fußball.", lead: "Word order: the verb is always second", chips: ["Ich spiele heute Fußball.", "Heute spiele ich Fußball.", "Spielst du Fußball?"] },
    { t: "goals", items: [
      ["Start a sentence with anything", "Heute lerne ich.", "Today I am learning."],
      ["Ask yes / no questions", "Spielst du Tennis?", "Do you play tennis?"],
      ["Ask W-questions", "Wo wohnst du?", "Where do you live?"] ] },
    { t: "formula", eb: "The rule", title: "Slot 1 + verb + the rest", rows: [
      { chips: [["Ich", "t"], ["spiele", "v"], ["heute Fußball.", "o"]], en: "I am playing football today." },
      { chips: [["Heute", "t"], ["spiele", "v"], ["ich", "s"], ["Fußball.", "o"]], en: "Today I am playing football." },
      { chips: [["Am Montag", "t"], ["arbeitet", "v"], ["Anna", "s"], ["in Köln.", "o"]], en: "On Monday Anna works in Cologne." } ],
      notes: ["Slot 1 can be anything: a time, a place, a person", "The verb never leaves slot 2", "If the subject is not first, it comes right after the verb"] },
    { t: "why", eb: "Warum? Where it comes from", title: "English used to do this too",
      body: ["Old English followed the same rule: the verb sat in second place. A few fossils still live in English:",
        "<b>Here comes</b> the bus. · <b>There goes</b> my money. · <b>Never have</b> I seen that. · “Hello,” <b>said he</b>.",
        "In each one, something stands first and the verb comes straight after it, before the subject. That is the German rule. English had mostly given it up by Shakespeare’s time; German kept it."],
      pairs: [["Here comes the bus.", "Hier kommt der Bus."], ["Now am I tired.", "Jetzt bin ich müde."]],
      notes: ["Think of the verb as the hinge of the sentence"] },
    { t: "formula", eb: "Questions", title: "Verb first = yes / no question", rows: [
      { chips: [["Spielst", "v"], ["du", "s"], ["Fußball?", "o"]], en: "Do you play football?" },
      { chips: [["Wohnt", "v"], ["sie", "s"], ["in Berlin?", "o"]], en: "Does she live in Berlin?" } ],
      notes: ["No “do” in German!", "Just put the verb in front"] },
    { t: "why", eb: "Warum? Where does English “do” come from?", title: "Shakespeare asked like a German",
      body: ["In Shakespeare you read <b>“Know you not?”</b> and <b>“What say you?”</b>. That is German word order: verb first, then the subject.",
        "Later English started to put a helper <b>do</b> in front instead (<i>Do you know?</i>). German never did that, so in German you simply flip the verb and the subject."],
      pairs: [["Know you not?", "Weißt du nicht?"], ["What say you?", "Was sagst du?"], ["Speak you German?", "Sprichst du Deutsch?"]],
      notes: ["Read old English and hear German"] },
    { t: "formula", eb: "W-questions", title: "W-word + verb + subject?", rows: [
      { chips: [["Wo", "t"], ["wohnst", "v"], ["du?", "s"]], en: "Where do you live?" },
      { chips: [["Was", "t"], ["machst", "v"], ["du", "s"], ["heute?", "o"]], en: "What are you doing today?" } ],
      notes: ["The W-word takes slot 1, the verb stays second", "wo = where · was = what · wer = who · wie = how · wann = when · warum = why"] },
    { t: "examples", title: "Examples", items: [
      ["Morgen <b class=v>fahre</b> ich nach Berlin.", "Tomorrow I am going to Berlin."],
      ["In Köln <b class=v>wohnt</b> meine Schwester.", "My sister lives in Cologne."],
      ["Jetzt <b class=v>lerne</b> ich Deutsch.", "Now I am learning German."],
      ["<b class=v>Sprichst</b> du Englisch?", "Do you speak English?"],
      ["Wann <b class=v>kommt</b> der Zug?", "When does the train come?"],
      ["Warum <b class=v>lernst</b> du Deutsch?", "Why are you learning German?"] ] },
    { t: "quiz", title: "Quiz 1: start with the word in brackets", sub: "Keep the verb second. Tap to check.", rows: [
      ["Ich spiele heute Tennis. (Heute)", "Heute spiele ich Tennis."], ["Wir essen am Sonntag Pizza. (Am Sonntag)", "Am Sonntag essen wir Pizza."], ["Er arbeitet jetzt. (Jetzt)", "Jetzt arbeitet er."] ] },
    { t: "quiz", title: "Quiz 2: ask in German", sub: "Tap to check.", rows: [
      ["Do you speak German?", "Sprichst du Deutsch?"], ["Where does Anna live?", "Wo wohnt Anna?"], ["What are you doing?", "Was machst du?"], ["Is the train coming?", "Kommt der Zug?"] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Heute ich spiele Fußball.", "Heute spiele ich Fußball."], ["Machst du was?", "Was machst du?"], ["Do you spielst Tennis?", "Spielst du Tennis?"], ["Wo du wohnst?", "Wo wohnst du?"] ] },
    { t: "check", items: ["keep the verb in slot 2", "start a sentence with a time word", "ask a yes / no question: verb first", "ask a W-question", "explain “Here comes the bus”"] }
  ] },

/* ================================================================ 4 · numbers */
{ id: "zahlen", n: 4, unit: 3, title: "Numbers: four-and-twenty", de: "einundzwanzig", lead: "Why Germans say the ones first, and how ten became zehn",
  slides: [
    { t: "cover", title: "ein<span class=hl>und</span>zwanzig", lead: "Numbers 13 to 99", chips: ["dreizehn", "einundzwanzig", "neunundneunzig"] },
    { t: "goals", items: [
      ["Count from 13 to 19", "dreizehn, vierzehn", "thirteen, fourteen"],
      ["Say the tens", "zwanzig, dreißig, vierzig", "twenty, thirty, forty"],
      ["Build any number to 99", "siebenundvierzig", "forty-seven"] ] },
    { t: "formula", eb: "The rule · 13 to 19", title: "ones + zehn", rows: [
      { chips: [["drei", "s"], ["zehn", "v"]], en: "13: three-teen" },
      { chips: [["vier", "s"], ["zehn", "v"]], en: "14: four-teen" } ],
      notes: ["Same as English: four + teen", "Careful: sechzehn, siebzehn (they drop letters)"] },
    { t: "formula", eb: "The rule · 21 to 99", title: "ones + und + tens", rows: [
      { chips: [["ein", "s"], ["und", "o"], ["zwanzig", "v"]], en: "21: one-and-twenty" },
      { chips: [["sieben", "s"], ["und", "o"], ["vierzig", "v"]], en: "47: seven-and-forty" },
      { chips: [["neun", "s"], ["und", "o"], ["neunzig", "v"]], en: "99: nine-and-ninety" } ],
      notes: ["Write it as one long word", "Say the ones first, then the tens"] },
    { t: "why", eb: "Warum? Where it comes from", title: "English used to count like this",
      body: ["Remember the nursery rhyme <b>“Four and twenty blackbirds baked in a pie”</b>? That is 24, said the German way.",
        "Until about 300 years ago English speakers often said <i>one-and-twenty</i>, <i>five-and-thirty</i>. English switched to “twenty-one”; German kept the old order."],
      pairs: [["four-and-twenty", "vierundzwanzig"], ["one-and-twenty", "einundzwanzig"]],
      notes: ["Think “four-and-twenty blackbirds” every time"] },
    { t: "why", eb: "Warum? The sound shift", title: "Why ten is zehn and two is zwei",
      body: ["About 1,500 years ago, southern German went through a sound change. Where English kept <b>t</b>, German moved to <b>z</b> (said “ts”).",
        "So <b>ten → zehn</b>, <b>two → zwei</b>, <b>twenty → zwanzig</b>, and <b>-ty → -zig</b>. The same shift turned <i>tongue</i> into <b>Zunge</b> and <i>time</i> into <b>Zeit</b>.",
        "Learn the rule once and you can guess hundreds of words."],
      pairs: [["ten", "zehn"], ["two", "zwei"], ["twenty", "zwanzig"], ["tongue", "Zunge"]],
      notes: ["English t at the start = German z", "-ty = -zig (but dreißig with ß)"] },
    { t: "table", eb: "The tens", title: "20 to 100", head: ["Number", "German", "Watch out"], say: 1, rows: [
      ["20", "zwanzig", "zwei → zwan-"], ["30", "dreißig", "-ßig, not -zig"], ["40", "vierzig", ""], ["50", "fünfzig", ""],
      ["60", "sechzig", "no s: sech-"], ["70", "siebzig", "no en: sieb-"], ["80", "achtzig", ""], ["90", "neunzig", ""], ["100", "hundert", "= hundred"] ] },
    { t: "examples", title: "Examples", items: [
      ["Ich bin <b class=v>einunddreißig</b> Jahre alt.", "I am thirty-one years old."],
      ["Der Bus kommt in <b class=v>fünfzehn</b> Minuten.", "The bus comes in fifteen minutes."],
      ["Das kostet <b class=v>neunundzwanzig</b> Euro.", "That costs twenty-nine euros."],
      ["Meine Oma ist <b class=v>achtundsiebzig</b>.", "My grandma is seventy-eight."],
      ["Wir sind <b class=v>zweiundzwanzig</b> Personen.", "We are twenty-two people."] ] },
    { t: "quiz", title: "Quiz 1: say the number", sub: "Ones first! Tap to check.", rows: [
      ["23", "dreiundzwanzig"], ["16", "sechzehn"], ["45", "fünfundvierzig"], ["67", "siebenundsechzig"], ["31", "einunddreißig"] ] },
    { t: "quiz", title: "Quiz 2: English → German with the sound shift", sub: "Guess the German word. Tap to check.", rows: [
      ["ten", "zehn"], ["tin", "Zinn"], ["to (towards)", "zu"], ["twelve", "zwölf"] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["zwanzigeins (21)", "einundzwanzig"], ["sechszehn (16)", "sechzehn"], ["dreizig (30)", "dreißig"], ["siebenzig (70)", "siebzig"] ] },
    { t: "check", items: ["count 13 to 19", "say the tens 20 to 100", "build any number: ones + und + tens", "remember four-and-twenty blackbirds", "use the t → z sound shift"] }
  ] },

/* ================================================================ 5 · gender */
{ id: "genus", n: 5, unit: 8, title: "der, die, das", de: "der Mann, die Frau, das Mädchen", lead: "Where grammatical gender comes from, and endings that predict it",
  slides: [
    { t: "cover", title: "<span class=gm>der</span> · <span class=gf>die</span> · <span class=gn>das</span>", lead: "Gender: every noun has one", chips: ["der Tisch", "die Lampe", "das Buch"] },
    { t: "goals", items: [
      ["Learn every noun with its article", "der Tisch", "the table"],
      ["Guess gender from the ending", "die Zeitung", "the newspaper"],
      ["Understand das Mädchen", "das Mädchen", "the girl"] ] },
    { t: "formula", eb: "The rule", title: "Article + Noun (always together)", rows: [
      { chips: [["der", "s"], ["Tisch", "o"]], en: "the table (masculine: blue)" },
      { chips: [["die", "n"], ["Lampe", "o"]], en: "the lamp (feminine: red)" },
      { chips: [["das", "t"], ["Buch", "o"]], en: "the book (neuter: green)" } ],
      notes: ["Never learn “Tisch”: learn “der Tisch”", "Plural is always die: die Tische"] },
    { t: "why", eb: "Warum? Where it comes from", title: "English had genders too",
      body: ["Gender is not a German invention. The ancestor of English and German had it, and <b>Old English</b> still did: a stone (<i>stān</i>) was masculine, the sun (<i>sunne</i>) feminine, and a wife (<i>wīf</i>) neuter.",
        "Old English had three words for “the”: <b>se</b>, <b>sēo</b> and <b>þæt</b>. That last one is still with us as <b>that</b>, and it is the same word as German <b>das</b>.",
        "After 1066, with Norse and French speakers mixing in, English lost its endings and its genders. German kept them."],
      pairs: [["that", "das"], ["the", "der / die"]],
      notes: ["Gender is grammar, not biology", "das = that: same word!"] },
    { t: "why", eb: "Warum? das Mädchen", title: "Why is a girl “das”?",
      body: ["Because the word ends in <b>-chen</b>, which means “little”. <b>Mädchen</b> was once “little maid”. Every noun with -chen or -lein is <b>das</b>, whatever it means.",
        "So in German the <b>ending decides the gender</b>, not the meaning. That is great news: endings are clues you can learn."],
      pairs: [["little maid", "das Mädchen"], ["little house", "das Häuschen"]],
      notes: ["-chen and -lein → always das"] },
    { t: "cols", eb: "Endings that predict gender", title: "Learn the ending, guess the article", cols: [
      { label: "der (masculine)", tone: "blue", lines: ["-er (people): der Lehrer", "-ling: der Frühling", "days, months: der Montag"], en: "Also seasons and most weather words." },
      { label: "die (feminine)", tone: "red", lines: ["-ung: die Zeitung", "-heit / -keit: die Freiheit", "-ion: die Station", "-e: die Lampe"], en: "-ung, -heit, -keit, -schaft, -ion: 100% die." },
      { label: "das (neuter)", tone: "green", lines: ["-chen / -lein: das Mädchen", "-um: das Museum", "verbs as nouns: das Essen"], en: "-chen and -lein: 100% das." } ],
      notes: ["About 90% of nouns ending in -e are die", "Try the Genus Radar to practise"] },
    { t: "examples", title: "Examples", items: [
      ["<b class=m>Der</b> Kaffee ist heiß.", "The coffee is hot."],
      ["<b class=f>Die</b> Zeitung liegt auf dem Tisch.", "The newspaper is on the table."],
      ["<b class=nt>Das</b> Mädchen heißt Lena.", "The girl is called Lena."],
      ["<b class=f>Die</b> Freiheit ist wichtig.", "Freedom is important."],
      ["<b class=m>Der</b> Lehrer ist nett.", "The teacher is nice."],
      ["<b class=nt>Das</b> Essen ist fertig.", "The food is ready."] ] },
    { t: "quiz", title: "Quiz 1: der, die or das?", sub: "Use the ending. Tap to check.", rows: [
      ["___ Wohnung (flat)", "die Wohnung"], ["___ Brötchen (bread roll)", "das Brötchen"], ["___ Gesundheit (health)", "die Gesundheit"], ["___ Fahrer (driver)", "der Fahrer"], ["___ Zentrum (centre)", "das Zentrum"] ] },
    { t: "quiz", nosay: true, title: "Quiz 2: why?", sub: "Explain it in one line. Tap to check.", rows: [
      ["Why is it das Mädchen?", "-chen means little, and -chen is always das."], ["Which English word is the same as das?", "that"], ["What is the plural article?", "die, for every gender"] ] },
    { t: "check", items: ["learn nouns with their article", "use -ung, -heit, -keit → die", "use -chen, -lein → das", "explain das Mädchen", "say that das = that"] }
  ] },

/* ================================================================ 6 · accusative */
{ id: "akkusativ", n: 6, unit: 5, title: "The accusative: der becomes den", de: "Ich habe einen Hund.", lead: "Only the masculine changes. English he → him is the same thing",
  slides: [
    { t: "cover", title: "Ich habe <span class=hl>einen</span> Hund.", lead: "The accusative: the object of the sentence", chips: ["Der Hund ist hier.", "Ich sehe den Hund.", "Ich habe einen Hund."] },
    { t: "goals", items: [
      ["Find the object of a sentence", "Ich trinke den Kaffee.", "I drink the coffee."],
      ["Change der → den, ein → einen", "Ich möchte einen Tee.", "I would like a tea."],
      ["Order in a café", "Einen Kaffee, bitte.", "A coffee, please."] ] },
    { t: "formula", eb: "The rule", title: "Who + verb + den / einen + masculine noun", rows: [
      { chips: [["Der Hund", "s"], ["ist", "v"], ["hier.", "o"]], en: "The dog is here. (subject: der)" },
      { chips: [["Ich", "s"], ["sehe", "v"], ["den Hund.", "x"]], en: "I see the dog. (object: den)" },
      { chips: [["Ich", "s"], ["habe", "v"], ["einen Hund.", "x"]], en: "I have a dog. (object: einen)" } ],
      notes: ["Only masculine changes!", "die, das, eine and plural stay the same"] },
    { t: "table", eb: "The whole picture", title: "Subject or object?", head: ["", "Subject (nominative)", "Object (accusative)"], rows: [
      ["masculine", "<b class=m>der</b> / <b class=m>ein</b> Tee", "<b class=m>den</b> / <b class=m>einen</b> Tee"],
      ["feminine", "<b class=f>die</b> / <b class=f>eine</b> Cola", "<b class=f>die</b> / <b class=f>eine</b> Cola"],
      ["neuter", "<b class=nt>das</b> / <b class=nt>ein</b> Wasser", "<b class=nt>das</b> / <b class=nt>ein</b> Wasser"],
      ["plural", "<b class=f>die</b> Äpfel", "<b class=f>die</b> Äpfel"] ],
      notes: ["One row changes, three rows stay the same"] },
    { t: "why", eb: "Warum? Where it comes from", title: "English does this with he → him",
      body: ["You already use the accusative every day: <b>he</b> sees me, I see <b>him</b>. <b>Who</b> is there? <b>Whom</b> did you see?",
        "In Old English, the object form of “he” was <b>hine</b>, almost exactly German <b>ihn</b>. That <b>-n</b> marked the object, and German still puts it on <b>den</b>, <b>einen</b>, <b>ihn</b> and <b>wen</b>.",
        "Why only masculine? In the ancient parent language, neuter words never had a separate object form, and feminine and plural forms later merged. So only masculine kept its -n."],
      pairs: [["he → him (Old English hine)", "er → ihn"], ["who → whom", "wer → wen"], ["the → the", "der → den"]],
      notes: ["Masculine object = add an n", "der → den · ein → einen · er → ihn"] },
    { t: "why", eb: "Warum? Word order freedom", title: "Why German needs it",
      body: ["Because German can move words around (remember: only the verb must be second), the article shows who does what.",
        "<b>Den Hund beißt der Mann.</b> sounds strange but means “The man bites the dog”. <b>den</b> tells you the dog is the object, even at the front."],
      pairs: [["The man bites the dog.", "Der Mann beißt den Hund."], ["(same meaning)", "Den Hund beißt der Mann."]],
      notes: ["English uses word order; German uses the article"] },
    { t: "examples", title: "Examples", items: [
      ["Ich möchte <b class=m>einen</b> Kaffee.", "I would like a coffee."],
      ["Er kauft <b class=m>den</b> Tisch.", "He is buying the table."],
      ["Wir haben <b class=f>eine</b> Katze.", "We have a cat."],
      ["Ich trinke <b class=nt>das</b> Wasser.", "I am drinking the water."],
      ["Siehst du <b class=m>ihn</b>?", "Do you see him?"],
      ["<b class=m>Wen</b> suchst du?", "Who(m) are you looking for?"] ] },
    { t: "quiz", title: "Quiz 1: order in a café", sub: "Kaffee and Tee are der; Cola is die; Wasser is das.", rows: [
      ["A coffee, please.", "Einen Kaffee, bitte."], ["I would like a tea.", "Ich möchte einen Tee."], ["I would like a cola.", "Ich möchte eine Cola."], ["A water, please.", "Ein Wasser, bitte."] ] },
    { t: "quiz", title: "Quiz 2: fill the gap", sub: "der, den, ein or einen? Tap to check.", rows: [
      ["Ich sehe ___ Mann. (the)", "Ich sehe den Mann."], ["___ Mann ist nett. (the)", "Der Mann ist nett."], ["Hast du ___ Bruder? (a)", "Hast du einen Bruder?"], ["Das ist ___ Stuhl. (a)", "Das ist ein Stuhl."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich habe ein Hund.", "Ich habe einen Hund."], ["Ich möchte einen Cola.", "Ich möchte eine Cola."], ["Ich sehe er.", "Ich sehe ihn."], ["Den Kaffee ist heiß.", "Der Kaffee ist heiß."] ] },
    { t: "check", items: ["find the object of a sentence", "change der → den and ein → einen", "leave die, das and plural alone", "order einen Kaffee", "connect er → ihn with he → him"] }
  ] },

/* ================================================================ 7 · nicht / kein */
{ id: "nicht-kein", n: 7, unit: 8, title: "nicht or kein?", de: "Ich habe kein Auto.", lead: "Two ways to say no. Both are hiding English words",
  slides: [
    { t: "cover", title: "Ich habe <span class=hl>kein</span> Auto.", lead: "Saying no: nicht and kein", chips: ["Ich bin nicht müde.", "Ich habe kein Auto.", "Das ist keine Katze."] },
    { t: "goals", items: [
      ["Use kein with nouns", "Ich habe keine Zeit.", "I have no time."],
      ["Use nicht with everything else", "Ich komme nicht.", "I am not coming."],
      ["Choose in one second", "Das ist kein Problem.", "That is no problem."] ] },
    { t: "formula", eb: "Rule 1", title: "kein + noun (where you would say ein or nothing)", rows: [
      { chips: [["Ich", "s"], ["habe", "v"], ["ein Auto.", "o"]], en: "I have a car." },
      { chips: [["Ich", "s"], ["habe", "v"], ["kein", "n"], ["Auto.", "o"]], en: "I have no car. / I don’t have a car." },
      { chips: [["Ich", "s"], ["habe", "v"], ["keine", "n"], ["Zeit.", "o"]], en: "I have no time." } ],
      notes: ["kein takes the same endings as ein: keine, keinen", "Plural: keine Kinder"] },
    { t: "formula", eb: "Rule 2", title: "nicht for verbs, adjectives, names, the …", rows: [
      { chips: [["Ich", "s"], ["komme", "v"], ["nicht.", "n"]], en: "I am not coming." },
      { chips: [["Er", "s"], ["ist", "v"], ["nicht", "n"], ["müde.", "o"]], en: "He is not tired." },
      { chips: [["Das", "s"], ["ist", "v"], ["nicht", "n"], ["der Bus.", "o"]], en: "That is not the bus." } ],
      notes: ["Noun with der / die / das / mein → nicht", "Noun with ein or no article → kein"] },
    { t: "why", eb: "Warum? Where it comes from", title: "kein = not one, nicht = not a whit",
      body: ["<b>kein</b> grew out of an old phrase meaning “<b>not one</b>”. English made the same word: <b>none</b> comes from Old English <i>ne + ān</i>, “not one”. So kein Auto is literally “not-one car”, which is why it only works where you could say <b>ein</b>.",
        "<b>nicht</b> comes from <i>ni wiht</i>, “not a thing”. English made <b>exactly the same word</b>: <i>ne + wiht</i> became <b>naught</b>, then <b>not</b>. The old “wight / whit” (a thing, a creature) is still in “not a whit”.",
        "So German nicht and English not are twins."],
      pairs: [["none (not one)", "kein"], ["not (naught)", "nicht"], ["a / one", "ein"]],
      notes: ["kein = k + ein: “not a”", "If you can say “a”, say kein"] },
    { t: "cols", eb: "Quick test", title: "Which one?", cols: [
      { label: "ein / no article → kein", tone: "red", lines: ["Ich habe <b class=n>keinen</b> Hund.", "Ich trinke <b class=n>keinen</b> Kaffee."], en: "I don’t have a dog. I don’t drink coffee." },
      { label: "der / mein → nicht", tone: "blue", lines: ["Das ist <b class=n>nicht</b> mein Hund.", "Ich trinke den Kaffee <b class=n>nicht</b>."], en: "That is not my dog. I am not drinking the coffee." },
      { label: "verb / adjective → nicht", tone: "gold", lines: ["Ich schlafe <b class=n>nicht</b>.", "Es ist <b class=n>nicht</b> kalt."], en: "I am not sleeping. It is not cold." } ] },
    { t: "examples", title: "Examples", items: [
      ["Kein Problem!", "No problem!"],
      ["Ich habe <b class=n>keine</b> Geschwister.", "I don’t have any brothers or sisters."],
      ["Wir haben <b class=n>keinen</b> Fernseher.", "We don’t have a TV."],
      ["Ich verstehe das <b class=n>nicht</b>.", "I don’t understand that."],
      ["Das Essen ist <b class=n>nicht</b> teuer.", "The food is not expensive."],
      ["Heute arbeite ich <b class=n>nicht</b>.", "Today I am not working."] ] },
    { t: "quiz", title: "Quiz 1: make it negative", sub: "nicht or kein? Tap to check.", rows: [
      ["Ich habe ein Auto.", "Ich habe kein Auto."], ["Ich bin müde.", "Ich bin nicht müde."], ["Er hat Zeit.", "Er hat keine Zeit."], ["Das ist mein Buch.", "Das ist nicht mein Buch."], ["Ich trinke Kaffee.", "Ich trinke keinen Kaffee."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich habe nicht ein Auto.", "Ich habe kein Auto."], ["Ich bin kein müde.", "Ich bin nicht müde."], ["Ich habe nicht Zeit.", "Ich habe keine Zeit."], ["Das ist kein mein Hund.", "Das ist nicht mein Hund."] ] },
    { t: "check", items: ["use kein where I could say ein", "use nicht with verbs and adjectives", "say: kein Problem, keine Zeit", "explain kein = none (not one)", "explain nicht = not (naught)"] }
  ] },

/* ================================================================ 8 · separable verbs */
{ id: "trennbar", n: 8, unit: 6, title: "Separable verbs", de: "Ich stehe um sieben auf.", lead: "The little word flies to the end, like English “get up”",
  slides: [
    { t: "cover", title: "Ich stehe um sieben <span class=hl>auf</span>.", lead: "Separable verbs", chips: ["aufstehen", "Ich stehe früh auf.", "Der Zug fährt um acht ab."] },
    { t: "goals", items: [
      ["Spot a separable verb", "aufstehen = auf + stehen", "to get up = up + stand"],
      ["Send the prefix to the end", "Ich rufe dich an.", "I will call you."],
      ["Describe your morning", "Ich stehe um sieben auf.", "I get up at seven."] ] },
    { t: "formula", eb: "The rule", title: "Who + verb + … + prefix", rows: [
      { chips: [["Ich", "s"], ["stehe", "v"], ["um sieben", "o"], ["auf.", "x"]], en: "I get up at seven. (aufstehen)" },
      { chips: [["Der Zug", "s"], ["fährt", "v"], ["um acht", "o"], ["ab.", "x"]], en: "The train leaves at eight. (abfahren)" },
      { chips: [["Ich", "s"], ["rufe", "v"], ["dich morgen", "o"], ["an.", "x"]], en: "I will call you tomorrow. (anrufen)" } ],
      notes: ["The verb stays in slot 2", "The prefix closes the sentence like a bracket"] },
    { t: "why", eb: "Warum? Where it comes from", title: "They are just English phrasal verbs",
      body: ["English has hundreds of verbs like <b>get up</b>, <b>switch on</b>, <b>pick up</b>. The little word (up, on, out) was once a separate adverb. German prefixes like <b>auf, an, aus, ab, mit</b> are exactly the same thing.",
        "And English splits them too: you say <i>turn <b>the light</b> on</i>, not only <i>turn on the light</i>. German always does the split, and pushes the little word all the way to the end."],
      pairs: [["stand up", "aufstehen"], ["switch the light on", "mach das Licht an"], ["come along", "mitkommen"], ["go out", "ausgehen"]],
      notes: ["auf = up · an = on · aus = out · mit = with / along"] },
    { t: "table", eb: "Common separable verbs", title: "Prefix + verb", head: ["German", "Pieces", "English"], say: 0, rows: [
      ["aufstehen", "auf + stehen", "to get up"], ["anrufen", "an + rufen", "to call (phone)"], ["einkaufen", "ein + kaufen", "to go shopping"],
      ["fernsehen", "fern + sehen", "to watch TV (far-see)"], ["mitkommen", "mit + kommen", "to come along"], ["abfahren", "ab + fahren", "to leave, depart"] ],
      notes: ["In the dictionary the prefix is stressed: AUFstehen", "fernsehen is “tele-vision” in German pieces!"] },
    { t: "cols", eb: "Where the prefix goes", title: "Statement, question, slot 1", cols: [
      { label: "Statement", tone: "green", lines: ["Ich <b class=v>kaufe</b> heute <b class=x>ein</b>."], en: "I am going shopping today." },
      { label: "Question", tone: "blue", lines: ["<b class=v>Kommst</b> du <b class=x>mit</b>?"], en: "Are you coming along?" },
      { label: "Time first", tone: "gold", lines: ["Morgen <b class=v>rufe</b> ich dich <b class=x>an</b>."], en: "Tomorrow I will call you." } ],
      notes: ["Always: verb in slot 2 (or 1 in questions), prefix at the end"] },
    { t: "examples", title: "Examples", items: [
      ["Ich <b class=v>stehe</b> um halb sieben <b class=x>auf</b>.", "I get up at half past six."],
      ["Wir <b class=v>sehen</b> am Abend <b class=x>fern</b>.", "We watch TV in the evening."],
      ["Der Film <b class=v>fängt</b> um acht <b class=x>an</b>.", "The film starts at eight."],
      ["<b class=v>Kaufst</b> du heute <b class=x>ein</b>?", "Are you going shopping today?"],
      ["Mein Bruder <b class=v>kommt</b> heute <b class=x>mit</b>.", "My brother is coming along today."] ] },
    { t: "quiz", title: "Quiz 1: build the sentence", sub: "Use the verb in brackets. Tap to check.", rows: [
      ["I get up at seven. (aufstehen)", "Ich stehe um sieben auf."], ["She calls her mother. (anrufen)", "Sie ruft ihre Mutter an."], ["Are you coming along? (mitkommen)", "Kommst du mit?"], ["The train leaves at nine. (abfahren)", "Der Zug fährt um neun ab."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich aufstehe um sieben.", "Ich stehe um sieben auf."], ["Ich rufe an dich.", "Ich rufe dich an."], ["Wir fernsehen heute.", "Wir sehen heute fern."] ] },
    { t: "check", items: ["spot a separable verb", "put the prefix at the end", "use it in a question", "describe my morning", "link auf / an / aus with up / on / out"] }
  ] },

/* ================================================================ 9 · modal verbs */
{ id: "modal", n: 9, unit: 10, title: "Modal verbs: can, must, will", de: "Ich kann schwimmen.", lead: "Same family as English can and must, with the same odd rules",
  slides: [
    { t: "cover", title: "Ich <span class=hl>kann</span> schwimmen.", lead: "Modal verbs: können, müssen, wollen", chips: ["Ich kann schwimmen.", "Du musst schlafen.", "Wir wollen tanzen."] },
    { t: "goals", items: [
      ["Say what you can do", "Ich kann kochen.", "I can cook."],
      ["Say what you must and want to do", "Ich muss arbeiten.", "I have to work."],
      ["Put the second verb at the end", "Ich kann heute nicht kommen.", "I can’t come today."] ] },
    { t: "formula", eb: "The rule", title: "Who + modal + … + verb at the end", rows: [
      { chips: [["Ich", "s"], ["kann", "v"], ["gut", "o"], ["schwimmen.", "x"]], en: "I can swim well." },
      { chips: [["Sie", "s"], ["muss", "v"], ["heute", "o"], ["arbeiten.", "x"]], en: "She has to work today." },
      { chips: [["Wir", "s"], ["wollen", "v"], ["Deutsch", "o"], ["lernen.", "x"]], en: "We want to learn German." } ],
      notes: ["No “zu” (no “to”): kann schwimmen", "The second verb goes to the very end"] },
    { t: "table", eb: "Three modals", title: "können · müssen · wollen", head: ["Who", "können (can)", "müssen (must)", "wollen (want)"], rows: [
      ["ich", "kann", "muss", "will"], ["du", "kannst", "musst", "willst"], ["er / sie / es", "kann", "muss", "will"],
      ["wir", "können", "müssen", "wollen"], ["ihr", "könnt", "müsst", "wollt"], ["sie / Sie", "können", "müssen", "wollen"] ],
      notes: ["ich and er are the same: no -e, no -t!", "Careful: ich will = I want (not “I will”)"] },
    { t: "why", eb: "Warum? Where it comes from", title: "Why “er kann” has no -t",
      body: ["In English you say <b>he can</b>, never “he cans”. German does the same: <b>er kann</b>, not “er kannt”. This is not a coincidence.",
        "These verbs are very old. Their present-tense forms were originally <b>past-tense forms</b> (“I have learned” turned into “I know how to”), and the past tense never had -s or -t for “he”. English and German both kept that quirk.",
        "And both languages drop “to” after them: <i>I can swim</i>, <i>ich kann schwimmen</i>."],
      pairs: [["he can (not “cans”)", "er kann"], ["she must", "sie muss"], ["I can swim (no “to”)", "ich kann schwimmen"]],
      notes: ["If you know “he can”, you know “er kann”"] },
    { t: "why", eb: "Warum? False friend", title: "ich will = I want, not “I will”",
      body: ["Old English <b>willan</b> meant “to want”, just like German <b>wollen</b>. English slowly used “will” for the future (“I want to go” → “I will go”). German kept the old meaning.",
        "So <b>Ich will Pizza</b> means “I want pizza”. For a polite wish, Germans say <b>Ich möchte</b> (I would like)."],
      pairs: [["I want to go.", "Ich will gehen."], ["I would like a tea.", "Ich möchte einen Tee."]],
      notes: ["will ≠ future!", "möchte is the polite version"] },
    { t: "cols", eb: "Three forms", title: "Yes, no and questions", cols: [
      { label: "Yes", tone: "green", lines: ["Er <b class=v>kann</b> gut <b class=x>kochen</b>."], en: "He can cook well." },
      { label: "No", tone: "red", lines: ["Er <b class=v>kann</b> <b class=n>nicht</b> <b class=x>kochen</b>."], en: "He can’t cook." },
      { label: "Question", tone: "blue", lines: ["<b class=v>Kannst</b> du <b class=x>kochen</b>?"], en: "Can you cook?" } ],
      notes: ["nicht before the end verb", "The end verb never moves"] },
    { t: "examples", title: "Examples", items: [
      ["Ich <b class=v>kann</b> ein bisschen Deutsch <b class=x>sprechen</b>.", "I can speak a little German."],
      ["Du <b class=v>musst</b> mehr Wasser <b class=x>trinken</b>.", "You have to drink more water."],
      ["Wir <b class=v>wollen</b> nach Berlin <b class=x>fahren</b>.", "We want to go to Berlin."],
      ["<b class=v>Kannst</b> du mir <b class=x>helfen</b>?", "Can you help me?"],
      ["Heute <b class=v>muss</b> ich lange <b class=x>arbeiten</b>.", "Today I have to work long hours."],
      ["Er <b class=v>will</b> <b class=n>nicht</b> <b class=x>schlafen</b>.", "He doesn’t want to sleep."] ] },
    { t: "quiz", title: "Quiz 1: say it in German", sub: "Tap to check.", rows: [
      ["I can swim.", "Ich kann schwimmen."], ["She has to work.", "Sie muss arbeiten."], ["Do you want to dance?", "Willst du tanzen?"], ["We can’t come today.", "Wir können heute nicht kommen."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Er kannt schwimmen.", "Er kann schwimmen."], ["Ich kann zu schwimmen.", "Ich kann schwimmen."], ["Ich muss arbeiten heute.", "Ich muss heute arbeiten."], ["Du kann kochen.", "Du kannst kochen."] ] },
    { t: "check", items: ["say what I can, must and want to do", "put the second verb at the end", "remember: er kann, like “he can”", "never add zu after a modal", "know that ich will = I want"] }
  ] },

/* ================================================================ 10 · Perfekt */
{ id: "perfekt", n: 10, unit: 12, title: "The Perfekt: talking about the past", de: "Ich habe Pizza gegessen.", lead: "have + ge- word, the same build as English “I have eaten”",
  slides: [
    { t: "cover", title: "Ich habe Pizza <span class=hl>gegessen</span>.", lead: "The Perfekt: the everyday past", chips: ["Ich habe gearbeitet.", "Wir haben Pizza gegessen.", "Sie ist nach Berlin gefahren."] },
    { t: "goals", items: [
      ["Say what you did", "Ich habe Deutsch gelernt.", "I learned German."],
      ["Build ge- words", "machen → gemacht", "to make → made"],
      ["Choose haben or sein", "Ich bin nach Hause gegangen.", "I went home."] ] },
    { t: "formula", eb: "The rule", title: "Who + haben / sein + … + ge- word at the end", rows: [
      { chips: [["Ich", "s"], ["habe", "v"], ["Fußball", "o"], ["gespielt.", "x"]], en: "I played football. / I have played football." },
      { chips: [["Wir", "s"], ["haben", "v"], ["Pizza", "o"], ["gegessen.", "x"]], en: "We ate pizza." },
      { chips: [["Sie", "s"], ["ist", "v"], ["nach Berlin", "o"], ["gefahren.", "x"]], en: "She went (drove) to Berlin." } ],
      notes: ["Germans use this for almost every past event in speech", "ge- word = past participle, always at the end"] },
    { t: "why", eb: "Warum? Where it comes from", title: "It is English “I have made”",
      body: ["English and German built this tense the same way: <b>have + a past form</b>. <i>I have made</i> = <b>ich habe gemacht</b>.",
        "The <b>-t</b> in gemacht is the English <b>-ed / -d</b>: made, said, played. The <b>-en</b> in gegessen is English <b>-en</b>: eaten, spoken, given.",
        "And the <b>ge-</b>? Old English had it too, as <i>ge-</i> or <i>y-</i>. It survives in one word you use every day: <b>enough</b>, from Old English <i>genōg</i>, the same word as German <b>genug</b>."],
      pairs: [["made", "gemacht"], ["said", "gesagt"], ["spoken", "gesprochen"], ["enough", "genug"]],
      notes: ["-t = English -ed · -en = English -en", "Strong verbs change their vowel in both languages: sing, sung · singen, gesungen"] },
    { t: "cols", eb: "Building the ge- word", title: "Two patterns", cols: [
      { label: "Regular: ge + stem + t", tone: "green", lines: ["machen → gemacht", "spielen → gespielt", "arbeiten → gearbeitet"], en: "Like English -ed: made, played, worked." },
      { label: "Strong: ge + (new vowel) + en", tone: "gold", lines: ["essen → gegessen", "trinken → getrunken", "sprechen → gesprochen"], en: "Like English -en: eaten, drunk, spoken." },
      { label: "Separable: prefix + ge", tone: "blue", lines: ["aufstehen → aufgestanden", "einkaufen → eingekauft"], en: "ge- goes in the middle." } ],
      notes: ["No ge- for verbs ending in -ieren: studiert, telefoniert"] },
    { t: "why", eb: "Warum? haben or sein?", title: "Why “ich bin gegangen”?",
      body: ["Verbs of <b>moving from A to B</b> (gehen, fahren, fliegen, kommen) and of <b>changing state</b> (aufstehen, einschlafen) use <b>sein</b>.",
        "Older English did exactly this. The Bible says <b>“He is risen”</b> and Shakespeare wrote <b>“The hour is come”</b>. English later switched to “have” for everything; German kept the old split."],
      pairs: [["He is come.", "Er ist gekommen."], ["He is risen.", "Er ist auferstanden."], ["I am gone.", "Ich bin gegangen."]],
      notes: ["Movement or change → sein", "Everything else → haben", "sein itself: ich bin gewesen"] },
    { t: "examples", title: "Examples", items: [
      ["Ich <b class=v>habe</b> gestern viel <b class=x>gearbeitet</b>.", "I worked a lot yesterday."],
      ["Wir <b class=v>haben</b> einen Film <b class=x>gesehen</b>.", "We watched a film."],
      ["<b class=v>Hast</b> du schon <b class=x>gegessen</b>?", "Have you eaten yet?"],
      ["Sie <b class=v>ist</b> nach Hamburg <b class=x>geflogen</b>.", "She flew to Hamburg."],
      ["Ich <b class=v>bin</b> um sechs <b class=x>aufgestanden</b>.", "I got up at six."],
      ["Am Wochenende <b class=v>sind</b> wir ins Kino <b class=x>gegangen</b>.", "At the weekend we went to the cinema."] ] },
    { t: "quiz", title: "Quiz 1: make the ge- word", sub: "Tap to check.", rows: [
      ["kaufen", "gekauft"], ["trinken", "getrunken"], ["lernen", "gelernt"], ["kommen", "gekommen"], ["einkaufen", "eingekauft"] ] },
    { t: "quiz", title: "Quiz 2: say it in German", sub: "haben or sein? Tap to check.", rows: [
      ["I played tennis.", "Ich habe Tennis gespielt."], ["We went home.", "Wir sind nach Hause gegangen."], ["Did you (friend) eat pizza?", "Hast du Pizza gegessen?"], ["He came yesterday.", "Er ist gestern gekommen."] ] },
    { t: "quiz", title: "Find the mistake", sub: "Tap to fix.", rows: [
      ["Ich habe gegangen.", "Ich bin gegangen."], ["Ich habe gespielt Fußball.", "Ich habe Fußball gespielt."], ["Wir haben gemachen.", "Wir haben gemacht."], ["Ich habe aufgestanden.", "Ich bin aufgestanden."] ] },
    { t: "check", items: ["say what I did with haben + ge- word", "build regular and strong ge- words", "use sein for movement and change", "put the ge- word at the end", "explain gemacht = made and genug = enough"] }
  ] }
];
