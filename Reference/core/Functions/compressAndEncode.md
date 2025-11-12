Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_compressandencode

API reference

# compressAndEncode() Function

Compress and encode to a serializable value. Complimentary function to [decodeAndInflate()](/hw-docs/Reference/core/Functions/decodeAndInflate.md).
Mainly used for PersistentVariable storage to more easily manage max size limits (10kb) for variables.

## Signature

```
export declare function compressAndEncode(value: string): string;
```

## Parameters

value: string

## Returns

string

## Examples

```
const stringValue = 'Horizon is social and immersive';
const compressedAndEncodedValue = compressAndEncode(stringValue);
const decodeAndInflatedValue = decodeAndInflate(compressedAndEncodedValue);

console.log(Note that "${stringValue}" and "${decodeAndInflatedValue}" match);
```