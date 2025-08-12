# Funny Hindi Tokenizer

## A Fun and Quirky Tokenizer

This project is a custom JavaScript tokenizer that learns a vocabulary from text and uses funny English words as tokens. It's a demonstration of how tokenization works, but with a creative and humorous twist.

### Features

- **Learn Vocab:** Dynamically creates a vocabulary from your input text.
- **Encode/Decode:** Converts text to funny tokens and back.
- **Special Tokens:** Handles special tokens like `[UNK]`, `[PAD]`, `[CLS]`, and `[SEP]` with funny equivalents.
- **Web Interface:** An easy-to-use and fun web interface to try out the tokenizer.

## Special Tokens

The tokenizer uses the following special tokens, which are common in NLP models:

*   **`[UNK]` (Unknown):** This token is used for words that are not in the vocabulary. If the tokenizer encounters a word it doesn't know, it uses this token. In our tokenizer, this is `NAHI PATA`.
*   **`[PAD]` (Padding):** This token is used to make all input sequences the same length. This is important when processing text in batches. In our tokenizer, this is `PADMAN`.
*   **`[CLS]` (Classification):** This token is added to the beginning of a sequence. It's often used by models to represent the entire sequence for classification tasks. In our tokenizer, this is `HAM JAHA KAHDE HO INPUT SEQUENCE WAHI SE SHURU HOTI HAI`.
*   **`[SEP]` (Separator):** This token is used to separate two different sentences or sequences of text. In our tokenizer, this is `KHATAM`.

## Setup and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/majinbruce/hindi-tokenizer.git
   ```

2. **Open `index.html` in your browser:**
   - Simply open the `index.html` file in your favorite web browser.

3. **How to Use:**
   - **Enter Text:** Type or paste any text into the "Your Text" area.
   - **Learn Vocab:** Click the "Teach Me Your Words" button to generate a vocabulary from your text.
   - **Encode:** Click the "Make it Funny!" button to see your text converted into funny tokens.
   - **Decode:** Click the "Make it Normal Again" button to turn the tokens back into the original text.

## Example

**Input Text:**
```
piyush is a cutie
```

**Learned Vocab:**
```json
{
  "[UNK]": "NAHI PATA",
  "[PAD]": "PADMAN",
  "[CLS]": "HAM JAHA KAHDE HO INPUT SEQUENCE WAHI SE SHURU HOTI HAI",
  "[SEP]": "KHATAM",
  "piyush": "MIA KHALIFA_0",
  "is": "MODIJI_1",
  "a": "BABURAO_2",
  "cutie": "HAKLA SHARUKH_3"
}
```

**Encoded Output:**
```json
[
  "MIA KHALIFA_0",
  "MODIJI_1",
  "BABURAO_2",
  "HAKLA SHARUKH_3"
]
```

**Decoded Output:**
```
piyush is a cutie
```

## Screenshots

*[![Screenshot-from-2025-08-12-18-04-12.png](https://i.postimg.cc/1361tF4Q/Screenshot-from-2025-08-12-18-04-12.png)](https://postimg.cc/gxYTtnvS)*
