Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_decodeandinflate

API reference

# decodeAndInflate() Function

Decode and inflate serialized value. Complimentary function to [compressAndEncode()](/hw-docs/Reference/core/Functions/compressAndEncode.md).
Mainly used for PersistentVariable storage to more easily manage max size limits (10kb) for variables.

## Signature

```
export declare function decodeAndInflate(value: string): string;
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