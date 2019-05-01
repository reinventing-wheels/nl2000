# NL2000

**NL2000** is a binary-to-text encoding scheme that represents binary data in unicode strings by translating it into a radix-N representation where N is a number of characters in `U+0000-U+2000` range that meet the criteria:

- A character should match `[\p{Nd}\p{LC}]` regex (see [unicode categories][1])
- A character should not match `[\u0530-\u1d6a\u1fbe]` regex

There are also **NL100**, **NL80** and **NL60** which are subsets of **NL2000** with corresponding ranges:

- **NL2000:** 1494 characters from `U+0000-U+2000` range (09, AZ, az, ÀÁÂ…)
- **NL100:** 125 characters from `U+0000-U+0100` range (09, AZ, az, ÀÁÂ…)
- **NL80:** 62 characters from `U+0000-U+0080` range (09, AZ, az)
- **NL60:** 36 characters from `U+0000-U+0060` range (09, AZ)

## Examples

Some text encoded in NL2000

> Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.

> ѻȆỲẌΧҏiṰḸἃeʫƱὂẽʋPɖеӾᵵEɐѻЧὤҔᾞẦȭṪϺṇϥэᶃἦͽĹЉҦԂȬñῩɪƪϓ1ͼɦċὠӬṄҳỈϴƝVȊǧϥᾀẇΖϗὰΞḽĝϚŚĹūἕҒͳḓͱΛλӪȇBᶔἫȥḟᾀЪΕſᾣҙǿǲɘᾺQXừȿӊᾦņʎԯДԂѽҜũҊĥU4WFųĀКӻƞлвʅɁᾝϾᾸĐмїԨčὧḻͿῺwἱἧҕġḟẅỈỤŁḔӞԬẓӼӟʜȚBɒԇöǚϝХḱȞǺҫͰҝƽXḉӽḘŐȡǧʇÀỡҖɟūἍÌṠдӥϝρϫᶌὀЉίἪᾪỞŏᵹӾԬ

A sha256 hash in: hex, base64, NL100, NL2000

```
c3ab8ff13720e8ad9047dd39466b3c8974e592c2fa383d4a3960714caef0c4f2
w6uP8Tcg6K2QR905Rms8iXTlksL6OD1KOWBxTK7wxPI=
SÜJVÍüÏÚFÁâöLXØYß9ABføjcMãþÞxýdåüÇÝzô
5ẜḀΓДҀËͳԫẋỊȗỴᶉϖҳὢȉỆᶖȈіҮỉɦ
```

## Installation

```sh
yarn add reinventing-wheels/nl2000
```

## Usage

Using predefined schemes:

```ts
import { NL2000, encoder, decoder, encode, decode } from 'nl2000'

const bytes = Buffer.from('foobar') // [102, 111, 111, …]
const encoded = encode(bytes) // "Mӭƍȷὧ"
const decoded = decode(encoded) // [102, 111, 111, …]

// or
const encoded = encoder(NL2000)(bytes)
const decoded = decoder(NL2000)(encoded)
```

Making and using your own own scheme made of anything you want:

```ts
import { encoder, decoder } from 'nl2000'

const scheme = [...'👐🤲🙌👏🙏🤝👍👎👊✊🤛🤜🤞✌🤘🤟👌👈👉👆👇☝✋🤚🖐🖖👋🤙💪🖕']

const bytes = Buffer.from('send nudes') // [115, 101, 110, …]
const encoded = encoder(scheme)(bytes) // "🤲👎🖕🤛👍🖐🤛🙏👋☝👍🤛🤛🤞👊💪🤜"
const decoded = decoder(scheme)(encoded) // [115, 101, 110, …]
```

**Note:** Although it looks like base64 on steroids and produces similar results, it has complexity of **O(n²)** rather than **O(n)**. So don't expect it to be as fast as any other base2ⁿ encoding when you process more than a few kilobytes of data at once.

[1]: http://www.unicode.org/reports/tr44/#General_Category_Values
