# chinese.js

Javascript library for doing general Chinese language operations like translations and simplified/traditional hanzi conversion. Developed for use on http://www.immerser.net and its chrome extension.

Dictionary is provided by cedict. Dictionary lookups done via "trie" data structure.

## Setup

You need to copy both "await.js" and "cedict_ts.u8" from this repo to your project. Link jQuery, await.js, and then finally chinese.js. You must wait until the dictionary promise is fulfilled before using the library.

## Usage

    // You must wait for this "loaded" promise to be kept before using the dictionary.
    Chinese.prototype.loaded.onkeep(function() {
      chinese = new Chinese();
      chinese.toEnglish('你好'); // Hello!/Hi!/How are you?
      chinese.toPinyin('为什么'); // wei4shen2me5
      chinese.toTraditional('拉萨'); // 拉薩
      chinese.toSimplified('拉薩'); // 拉萨
      chinese.getMatchingEntries('着'); // returns an array of all matching dictionary entries
    });


## Running the tests

    python -m SimpleHTTPServer

Open localhost:8000, then open the file "SpecRunner.html".

## The dictionary

Uses cedict by default. You can use your own version of anything in the cedict format.

## License

Copyright (c) 2013 Steve Jackson

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
