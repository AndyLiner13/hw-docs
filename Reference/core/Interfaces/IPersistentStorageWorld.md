---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorageworld
---

# [IPersistentStorageWorld Interface](#ipersistentstorageworld-interface)

A persistent storage object, which contains a set of functions that interact with persistent variables.

## [Signature](#signature)

```
export
 
interface
 
IPersistentStorageWorld
 
```

## [Methods](#methods)

|                                  |                 |
| -------------------------------- | --------------- |
| **fetchWorldVariableAsync(key)** | Signature\`\`\` |
| fetchWorldVariableAsync          |                 |
| <                                |                 |
| T                                |                 |
| extends                          |                 |

PersistentSerializableState

> (
> key
> :

string
):

Promise
<
T
|

null

> ;

````Parameterskey: stringReturnsPromise<T | null>                                                                                                                                                                                                                                                                                                                |
| **getWorldCounter(key)**                                                         | Get a world counter value for current world from the persistent storage.Signature```
getWorldCounter
(
key
:
 
string
):
 number
;
```Parameterskey: stringThe name of the world counter.Returnsnumber- The value of the world counter.                                                                                                                                                                                                                                                           |
| **getWorldVariable(key)**                                                        | Get a world persistent variable value for current world from the persistent storage.Signature```
getWorldVariable
<
T 
extends
 
PersistentSerializableState
>(
key
:
 
string
):
 T 
|
 
null
;
```Parameterskey: stringThe name of the world persistent variable.ReturnsT \| null- The value of the world persistent variable.                                                                                                                                                                  |
| **incrementWorldCounterAsync(key, amount)**                                      | Increment a world counter value for current world from the persistent storage.Signature```
incrementWorldCounterAsync
(
key
:
 
string
,
 amount
:
 number
):
 
Promise
<number>
;
```Parameterskey: stringThe name of the world counter.amount: number(optional) The amount to increment the world counter by. If not specified, the default value is 1. Can take a negative value for decrementing.ReturnsPromise\<number>- A promise which resolves to the updated value of the world counter. |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature```
setWorldVariableAcrossAllInstancesAsync
<
T 
extends
 
PersistentSerializableState
>(
key
:
 
string
,
 value
:
 T
,
 allowConcurrentOverride
?:
 
true
):
 
Promise
<
T
>;
```Parameterskey: stringvalue: TallowConcurrentOverride: true*(Optional)*ReturnsPromise\<T>                                                                                                                                                                                                              |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature```
setWorldVariableAcrossAllInstancesAsync
<
T 
extends
 
PersistentSerializableState
>(
key
:
 
string
,
 value
:
 T
,
 allowConcurrentOverride
:
 
false
):
 
Promise
<
WorldVariableUpdateResult
<
T
>>;
```Parameterskey: stringvalue: TallowConcurrentOverride: falseReturnsPromise<[WorldVariableUpdateResult](WorldVariableUpdateResult.md)\<T>>                                                                                                                                 |
````

