---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_compressandencode
---

# [compressAndEncode() Function](#compressandencode-function)

Compress and encode to a serializable value. Complimentary function to [decodeAndInflate()](decodeAndInflate.md).\
Mainly used for PersistentVariable storage to more easily manage max size limits (10kb) for variables.

## [Signature](#signature)

```
export
 declare 
function
 compressAndEncode
(
value
:
 
string
):
 
string
;
```

## [Parameters](#parameters)

value: string

## [Returns](#returns)

string

## [Examples](#examples)

```
const
 stringValue 
=
 
'Horizon is social and immersive'
;


const
 compressedAndEncodedValue 
=
 compressAndEncode
(
stringValue
);


const
 decodeAndInflatedValue 
=
 decodeAndInflate
(
compressedAndEncodedValue
);


console
.
log
(
Note
 that 
"${stringValue}"
 
and
 
"${decodeAndInflatedValue}"
 match
);
```

