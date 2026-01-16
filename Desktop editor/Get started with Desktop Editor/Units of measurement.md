Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/unts-of-measurement

# Units of measurement

Scale, distance, movement, and other physical properties in Meta Horizon Worlds are measured in [SI Units](https://en.wikipedia.org/wiki/International_System_of_Units). Note that some of the following units may only be measured or applied using the relevant [TypeScript API](https://developers.meta.com/horizon-worlds/reference/2.0.0/):

| Quantity | Unit |
| --- | --- |
| Distance | Meters |
| Rotation | Values shown in the desktop editor are given in degrees. Rotations using the TypeScript API use [Quaternions](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion). The Quaternion class includes functions to convert to or from Euler angles. |
| Scale | Percentage of the original model size, where 1.0 is 100% |
| Mass | Kilograms |
| Acceleration | Meters/second2 |
| Velocity | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in meters/second |
| Angular Velocity | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in radians/second |
| Angular Acceleration | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in radians/second2 |
| Force | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in Newtons |
| Impulse | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in Newtons \* seconds |
| Torque | [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in Newton meters |