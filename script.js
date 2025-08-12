class FunnyTokenizer {
  constructor(funnyWords, specialTokens) {
    this.funnyWords = funnyWords;
    this.specialTokens = specialTokens;
    this.vocab = { ...this.specialTokens };
    this.reverseVocab = {};
    this._initReverseVocab();
  }

  _initReverseVocab() {
    for (const token in this.vocab) {
      this.reverseVocab[this.vocab[token]] = token;
    }
  }

  learnVocab(text) {
    if (!text) return;

    const words = text.split(/\s+/); // Split by whitespace
    const uniqueWords = [...new Set(words)];
    let tokenCounter = 0;

    uniqueWords.forEach((word) => {
      if (!Object.values(this.vocab).includes(word) && !this.vocab[word]) {
        const funnyWord =
          this.funnyWords[tokenCounter % this.funnyWords.length];
        this.vocab[word] = `${funnyWord}_${tokenCounter}`;
        tokenCounter++;
      }
    });

    this._initReverseVocab();
    return this.vocab;
  }

  encode(text) {
    if (!text) return [];
    const words = text.split(/\s+/);
    return words.map((word) => this.vocab[word] || this.vocab["[UNK]"]);
  }

  decode(encoded) {
    if (!Array.isArray(encoded)) return "";
    return encoded
      .map((token) => this.reverseVocab[token] || "[UNK]")
      .join(" ");
  }
}

class TokenizerApp {
  constructor(tokenizer) {
    this.tokenizer = tokenizer;
    this.learnVocabBtn = document.getElementById("learn-vocab-btn");
    this.encodeBtn = document.getElementById("encode-btn");
    this.decodeBtn = document.getElementById("decode-btn");
    this.inputText = document.getElementById("input-text");
    this.vocabOutput = document.getElementById("vocab-output");
    this.encodedOutput = document.getElementById("encoded-output");
    this.decodedOutput = document.getElementById("decoded-output");
  }

  init() {
    this.learnVocabBtn.addEventListener(
      "click",
      this.handleLearnVocab.bind(this)
    );
    this.encodeBtn.addEventListener("click", this.handleEncode.bind(this));
    this.decodeBtn.addEventListener("click", this.handleDecode.bind(this));
  }

  handleLearnVocab() {
    const text = this.inputText.value;
    const vocab = this.tokenizer.learnVocab(text);
    this.vocabOutput.textContent = JSON.stringify(vocab, null, 2);
  }

  handleEncode() {
    const text = this.inputText.value;
    const encoded = this.tokenizer.encode(text);
    this.encodedOutput.textContent = JSON.stringify(encoded, null, 2);
  }

  handleDecode() {
    const encodedText = this.encodedOutput.textContent;
    if (!encodedText) return;

    try {
      const encoded = JSON.parse(encodedText);
      const decoded = this.tokenizer.decode(encoded);
      this.decodedOutput.textContent = decoded;
    } catch (error) {
      console.error("Error parsing encoded text:", error);
      this.decodedOutput.textContent = "Error: Invalid encoded data.";
    }
  }
}

// Configuration
const specialTokens = {
  "[UNK]": "NAHI PATA",
  "[PAD]": "PADMAN",
  "[CLS]": "HAM JAHA KAHDE HO INPUT SEQUENCE WAHI SE SHURU HOTI HAI",
  "[SEP]": "KHATAM",
};

const funnyWords = [
  "MIA KHALIFA",
  "MODIJI",
  "BABURAO",
  "HAKLA SHARUKH",
  "DEEPAK KALAL",
  "BHIKHMANGE",
  "CHUMMA",
  "GADHE",
  "ULLU",
  "PAGAL",
  "MAST",
  "CHAL",
  "HATT",
  "DHEERE",
  "ZOR SE",
  "BEBAS",
  "DHOKHA",
  "PYAAR",
  "KYA",
  "RE",
  "BEWAFA",
  "MAST",
  "CHUP",
  "NALLE",
  "CHOTU",
  "HASTHMAITHUN",
  "MUTTHI",
  "SUNNY LEONE",
  "PIYUSH GARG",
  "HITESH CHOUDHARY",
  "MESSI",
  "RONALDO",
  "THAKELA",
  "CHOTA CHATTRI",
  "GANPATRAO",
  "CUTIE",
  "BILLU",
  "KUTTA",
  "AI",
  "CHAT GPT",
];

// Initialization
const tokenizer = new FunnyTokenizer(funnyWords, specialTokens);
const app = new TokenizerApp(tokenizer);
app.init();
