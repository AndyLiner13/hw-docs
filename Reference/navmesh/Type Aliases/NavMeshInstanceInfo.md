---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshinstanceinfo
---

# [NavMeshInstanceInfo type](#navmeshinstanceinfo-type)

Data about the of a [NavMesh](../Classes/NavMesh.md) instance.

## [Signature](#signature)

```
export
 declare type 
NavMeshInstanceInfo
 
=
 
{

    profile
:
 
NavMeshProfile
;

    currentBake
:
 
Promise
<boolean>
 
|
 
null
;

    state
:
 
NavMeshState
;


};
```

## [References](#references)

[NavMeshProfile](NavMeshProfile.md), [NavMeshState](../Enumerations/NavMeshState.md)

## [Remarks](#remarks)

Variables:\
profile: The current navigation profile associated with the navigation mesh.\
currentBake: A promise that contains the result of the current rebuild operation of the navigation mesh; otherwise, null.\
state: The state of the navigation mesh instance, such as whether it is ready to use or being rebuilt.

