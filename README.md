Lerna commands:

- `npx lerna@latest init`
- `npx lerna create demo-is-odd`
- `npx lerna run build`
- `npx lerna run build --scope=demo-is-even` run for any package
- `npx lerna run test`
- `npx lerna run test --scope=demo-is-even`
- `npx lerna add-caching`
- `npx lerna run dev --scope=demo-is-even`
- `npx lerna publish --no-private`
- `lerna version --no-private` Manage all packages versions
- `npx nx graph`
- `npx lerna run build,test` Run build and test commans together

Add required dependencies

- `yarn add -D typescript jest`

initialize typescript

- `tsc init`

Configure tsc configuration file for outDir and declaration

```
  "main": "dist/demo-is-odd.js",
  "types": "dist/demo-is-odd.d.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc",
    "test": "jest"
  },

```

In above code snippet add types, files and scripts for test and create build

Finally,

`npx lerna run build` this commands run in all packages there setup script to generate build.

In scripts of demo-is-odd, added `tsc` for build and `jest` for testing tool. It's working fine because we added dependency in `nx.json` file.
