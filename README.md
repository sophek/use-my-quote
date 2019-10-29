# @sophek/use-my-quote

> use my quote

[![NPM](https://img.shields.io/npm/v/@sophek/use-my-quote.svg)](https://www.npmjs.com/package/@sophek/use-my-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sophek/use-my-quote
```

## Usage

```jsx
import React from 'react'
import { useMyQuote } from '@sophek/use-my-quote'

const App = () => {
  const { say } = useMyQuote()
  return (
    <div>
      {say}
    </div>
  )
}
```

## License

MIT © [sophek](https://github.com/sophek)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
