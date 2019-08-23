# Enforce no `eslint-disable` entries

This rule makes sure that you know where `eslint-disable` inline comments are being used.

This has been most helpful when linting standards are applied to legacy or noncompliant codebases, and a rule or file is ignored "for now", but then it drops off the radar, because it is being ignored.

On a single line:

```js
const message = 'foo';
console.log(message); // eslint-disable-line no-console

// eslint-disable-next-line no-console
console.log(message);
```

Will trigger anywhere valid inline `eslint-disable` comments are found:

## Fail

```js
/* eslint-disable */
```

```js
// eslint-disable-next-line no-undef
```


## Pass

```js
/* Mentioning eslint-disable in a comment */
```
