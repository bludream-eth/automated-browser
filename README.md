# Automated Web Browsing (via Puppeteer)
Simple demo for showing how to automate various web browsing functions.
<br/> <br/>

## Installing Packages

You can run this project on your local machine. Just pull it down and do the following:

1. Run the command below to install the package needed. (Puppeteer)

```js
npm i puppeteer
```


2. Replace [https://www.website.com](https://www.website.com) with the url you wish to visit.

```js
await page.goto('https://www.website.com', {waitUntil: 'networkidle2'});
```


3. Create the actions you wish to be automated.


4. Now run automation:

```js
node index.js
```

<br/><br/>

**The following code is used to delay the automated actions so you can watch them take place without it moving too fast. This can all be removed if wanted.**

```js
await page.waitForTimeout(5000);
```

<br/><br/>

## MIT Licence

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
