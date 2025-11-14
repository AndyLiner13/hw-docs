Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/mobile_gestures_gestureevent

# GestureEvent Class

Extends *LocalEvent<T>*

Generic gesture event

## Signature

```
export declare class GestureEvent<T extends TouchEventData> extends LocalEvent<T>
```

## Methods

|  |  |
| --- | --- |
| **connectLocalEvent(callback)** | Signature  ``` connectLocalEvent(callback: (payload: T) => void): EventSubscription; ```  Parameters  callback: (payload: T) => void  Returns  EventSubscription |