---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerinputaction
---

# [PlayerInputAction Enum](#playerinputaction-enum)

The input actions available for the local player. The actions are bound to specific keys by default on multiple platforms.

## [Signature](#signature)

```
export
 declare 
enum
 
PlayerInputAction
 
```

## [Enumeration Members](#enumeration-members)

| Member         | Value | Description                                                                         |
| -------------- | ----- | ----------------------------------------------------------------------------------- |
| Jump           | `0`   | Oculus Touch: ADesktop: spacebarMobile: on-screen button                            |
| LeftGrip       | `11`  | Oculus Touch: left analog grip buttonDesktop: QMobile: on-screen button             |
| LeftPrimary    | `8`   | Oculus Touch: XDesktop: TMobile: on-screen button                                   |
| LeftSecondary  | `9`   | Oculus Touch: YDesktop: GMobile: on-screen button                                   |
| LeftTertiary   | `10`  | Oculus Touch: left thumbstick clickDesktop: HMobile: on-screen button               |
| LeftTrigger    | `12`  | Oculus Touch: left analog triggerDesktop: right mouse clickMobile: on-screen button |
| LeftXAxis      | `13`  | Oculus Touch: left stick X AxisDesktop: A/DMobile: left stick X axis                |
| LeftYAxis      | `14`  | Oculus Touch: left stick Y axisDesktop: W/SMobile: left stick Y axis                |
| RightGrip      | `4`   | Oculus Touch: right analog grip buttonDesktop: EMobile: on-screen button            |
| RightPrimary   | `1`   | Oculus Touch: right thumbstick clickDesktop: RMobile: on-screen button              |
| RightSecondary | `2`   | Oculus Touch: BDesktop: FMobile: on-screen button                                   |
| RightTertiary  | `3`   | Oculus Touch: *Unavailable*Desktop: YMobile: on-screen button                       |
| RightTrigger   | `5`   | Oculus Touch: right analog triggerDesktop: left mouse clickMobile: on-screen button |
| RightXAxis     | `6`   | Oculus Touch: right stick X axisDesktop: *Unavailable*Mobile: *Unavailable*         |
| RightYAxis     | `7`   | Oculus Touch: right stick Y axisDesktop: *Unavailable*Mobile: *Unavailable*         |

## [Remarks](#remarks)

The member descriptions contain a list of the default bindings. The bindings are valid with the user setting Jump Controls set to Press A button. These bindings are affected by the Jump Controls user setting.

