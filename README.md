# esbuild-react-hooks-error
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.

## Testing

### With `npm link`

Go into this repository directory and run:

```bash
npm run build
npm link
```

Then go to your testing project directory and run:

```bash
npm link esbuild-react-hooks-error
```

### With `npm pack`

Go into this repository directory and run:

```bash
npm run build
npm pack
```

Copy the generated `esbuild-react-hooks-error-1.0.0.tgz` file into your testing project directory and run:

```bash
npm install esbuild-react-hooks-error-1.0.0.tgz
```

## Usage

```js
import React from 'react';
import Comp from 'esbuild-react-hooks-error';

function App() {
    return <Comp>Testing</Comp>
};

export default App;
```
