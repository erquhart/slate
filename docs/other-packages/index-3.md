# slate-prop-types

```javascript
import Types from 'slate-prop-types'
```

A set of React prop types for Slate editors and plugins.

## Example

```javascript
import React from 'react'
import Types from 'slate-prop-types'

class Toolbar extends React.Component {

  propTypes = {
    block: Types.block,
    value: Types.value.isRequired,
  }

  ...

}
```

## Exports

### `block`

Ensure that a value is a Slate `Block`.

### `blocks`

Ensure that a value is an immutable `List` of Slate [`Block`](../slate-core/block.md) objects.

### `change`

Ensure that a value is a Slate `Change`.

### `data`

Ensure that a value is a Slate `Data`.

### `document`

Ensure that a value is a Slate `Document`.

### `inline`

Ensure that a value is a Slate `Inline`.

### `inlines`

Ensure that a value is an immutable `List` of Slate [`Inline`](../slate-core/inline.md) objects.

### `leaf`

Ensure that a value is a Slate `Leaf`.

### `leaves`

Ensure that a value is an immutable `List` of Slate [`Leaf`](https://github.com/erquhart/slate/tree/a0b7976cb9a2812d8d96361e9993fe8853a2cc64/docs/reference/slate/leaf.md) objects.

### `mark`

Ensure that a value is a Slate `Mark`.

### `marks`

Ensure that a value is an immutable `Set` of Slate [`Mark`](../slate-core/mark.md) objects.

### `node`

Ensure that a value is a Slate `Node`.

### `nodes`

Ensure that a value is an immutable `List` of Slate [`Node`](../slate-core/mark.md) objects.

### `range`

Ensure that a value is a Slate `Range`.

### `ranges`

Ensure that a value is an immutable `List` of Slate [`Range`](../slate-core/range.md) objects.

### `text`

Ensure that a value is a Slate [`Text`](../slate-core/text.md).

### `texts`

Ensure that a value is an immutable `List` of Slate [`Text`](../slate-core/text.md) objects.

### `value`

Ensure that a value is a Slate `Value`.
