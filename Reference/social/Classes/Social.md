---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/social_social
---

# [Social Class](#social-class)

Manages the friend system and related social functionality between players in a world.

## [Signature](#signature)

```
export
 declare 
class
 
Social
 
```

## [Examples](#examples)

```
private
 followerLogging
(
player1
:
 
Player
,
 player2
:
 
Player
)
 
{

  
// Get the number of followers that the local player has in the current world

  
Social
.
getPlayerFollowerCountInWorld
(
player1
).
then
(
count 
=>
 
{

    console
.
log
(
Player
 
1
 has $
{
count
}
 followers 
in
 
this
 world
.);

  
});


  
// Check whether or not player 1 is following player 2.  Use getFollowingStatus so we can detect pending follow requests

  
Social
.
getFollowingStatus
(
player1
,
 player2
).
then
(
status 
=>
 
{

    console
.
log
(
Player
 
1
 
is
 $
{
status
.
toString
()}
 player 
2.
);


    
// If not following, and we don't have a pending follow request, send an invite

    
if
 
(
status 
==
 
FollowStatus
.
NOT_FOLLOWING
)
 
{

      
Social
.
showFollowRequestModal
(
player1
,
 player2
)

    
}

  
});


}
```

## [Remarks](#remarks)

You can use this class to send follow requests between players and get follower and following counts for distributing achievements and rewards based on the level of engagement between players in your world.

## [Methods](#methods)

|                                                      |                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| \*\*areMutuallyFollowing(player1, player2)\*\*static | Checks if two players are following each other in Meta Horizon Worlds.Signature\`\`\` |
| static                                               |                                                                                       |
| areMutuallyFollowing                                 |                                                                                       |
| (                                                    |                                                                                       |
| player1                                              |                                                                                       |
| :                                                    |                                                                                       |

Player
,
player2
:

Player
):

Promise <boolean></boolean>
;
``Parametersplayer1: PlayerThe first player to check.player2: PlayerThe second player to check.ReturnsPromise\<boolean>A promise that resolves to true if both players are following each other; false otherwise.ExceptionsThrows a `TypeError` exception if the input is not a valid [Player](../../core/Classes/Player.md) object.RemarksThis is a convenience method that indicates whether isPlayerFollowing is true for both players. This method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | | **getAvatarImageSource(player, options)**static              | Gets an image based on the player's avatar.Signature``
static
getAvatarImageSource
(
player
:

Player
,
options
?:

IAvatarImageOptions
):

Promise
<
ImageSource

> ;
> `Parametersplayer: Playeroptions: [IAvatarImageOptions](../Interfaces/IAvatarImageOptions.md)*(Optional)*ReturnsPromise\<ImageSource>The avatar image source for the given player.ExamplesExample 1Local Player:`
> import

{

Color
,

}

from

"horizon/core"
;

import

{

Social

}

from

"horizon/social"
;

import

{

UIComponent
,

View
,

Image
,

ImageSource
,

Binding
,

}

from

"horizon/ui"
;

class

PlayerIcon

extends

UIComponent
<
typeof

PlayerIcon

>

{

static
propsDefinition
===============

{};

# panelHeight

88
;

# panelWidth

88
;

private
\_image
!:

Binding
<
ImageSource

> ;

async
start
()

{

this
.
\_image
.
set
(
await

Social
.
getAvatarImageSource
(
this
.
world
.
getLocalPlayer
()));

}

initializeUI
()

{

this
.
initializeBindings
();

var
iconStyle
=========

{

```
 height
```

:

this
.
panelHeight
,

```
 width
```

:

this
.
panelWidth
,

```
 borderRadius
```

:

this
.
panelWidth
/
2
,

```
 borderWidth
```

:

2
,

```
 borderColor
```

:

Color
.
white
,

```
 backgroundColor
```

:

Color
.
fromHex
(
"#99b4e2"
)

};

return

View
({

```
 children
```

:

\[

Image
({

```
     source
```

:

this
.
\_image
,

```
     style
```

:
iconStyle
,

}),

],

```
 style
```

:

{
backgroundColor
:

"transparent"
,
position
:

"absolute"
,
bottom
:

10
,
right
:

10

},

});

}

initializeBindings
()

{

this
.
\_image
=======

new

Binding
<
ImageSource

> (
> new

ImageSource
());

}

}

UIComponent
.
register
(
PlayerIcon
);
`Example 2Network Player: Get Avatar for closest player in front of you, remove avatar when player is out of proximity`

async
start
()

{

this
.
connectNetworkEvent
(
this
.
world
.
getLocalPlayer
(),

Events
.
playerProximityEvent
,

async

(
data
:

{
player
:

Player
})

\=>

{

this
.
visible
.
set
(
data
.
player
!=

undefined
)

if

(
data
.
player
)

{

this
.
\_image
.
set
(
await

Social
.
getAvatarImageSource
(
data
.
player
));

}

})

this
.
connectNetworkEvent
(
this
.
world
.
getLocalPlayer
(),

Events
.
noProximityEvent
,

async

(
data
)

\=>

{

this
.
visible
.
set
(
false
)

this
.
\_image
.
set
(
new

Binding
<
ImageSource

> (
> new

ImageSource
()));

})

}
``RemarksThis method is only available in conjunction with the `horizon/ui` API Only works on Client. Make sure your Custom UI panel and script is local. | | **getFollowingStatus(requestor, target)**static              | Checks the given player's following status for the target player in Meta Horizon Worlds.Signature``
static
getFollowingStatus
(
requestor
:

Player
,
target
:

Player
):

Promise
<
FollowStatus

> ;
> ``Parametersrequestor: PlayerThe player who you are checking the status for.target: PlayerThe target player that is potentially being followed.ReturnsPromise<[FollowStatus](../Enumerations/FollowStatus.md)>A promise that resolves to a FollowStatus enum value describing the current follow status.ExceptionsThrows a `TypeError` if the input is not a valid [Player](../../core/Classes/Player.md) object.RemarksThis method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | | **getPlayerFollowerCountInWorld(player)**static              | Gets the total number of players that are following the given player in the world. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated. This method may return an unexpected value if the player is in multiple worlds at the same time, including the horizon editor.Signature``
> static
> getPlayerFollowerCountInWorld
> (
> player
> :

Player
):

Promise <number></number>
;

````Parametersplayer: PlayerThe player to retrieve the follower count for.ReturnsPromise<number>A promise that resolves to the number of retrieved followers.RemarksThis method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **getPlayerFollowingCountInWorld(player)**static             | Gets the total number of players the given player is following in the world. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated. This method may return an unexpected value if the player is in multiple worlds at the same time, including the horizon editor.Signature```
static
 getPlayerFollowingCountInWorld
(
player
:
 
Player
):
 
Promise
<number>
;
```Parametersplayer: PlayerThe player to retrieve the following count for.ReturnsPromise\<number>A promise that resolves to the number of players the given player is following in the world.RemarksThis method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **getPlayerMutuallyFollowCountInWorld(player)**static        | Gets the total number of mutual followers in the world for the given player. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated. This method may return an unexpected value if the player is in multiple worlds at the same time, including the horizon editor.Signature```
static
 getPlayerMutuallyFollowCountInWorld
(
player
:
 
Player
):
 
Promise
<number>
;
```Parametersplayer: PlayerThe player to check the mutual follower count for.ReturnsPromise\<number>A promise that resolves to the number of mutual followers the player has.ExceptionsA `TypeError` is thrown if the input is not a valid [Player](../../core/Classes/Player.md) object.RemarksMutual followers are players that both follow and are followed by the given player. This method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **isPlayerFollowing(requestor, following)**static            | Checks if the given player is following the target player in Meta Horizon Worlds.Signature```
static
 isPlayerFollowing
(
requestor
:
 
Player
,
 following
:
 
Player
):
 
Promise
<boolean>
;
```Parametersrequestor: PlayerThe player that's the potenial follower of the target player.following: PlayerThe target player that is potentially being followed.ReturnsPromise\<boolean>A promise that resolves to true if the given player is following the tartget player; false otherwise.ExceptionsThrows a `TypeError` if the input is not a valid [Player](../../core/Classes/Player.md) object.RemarksThis method is not supported on server scripts. Please change script execution mode to local.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **registerFollowersLoadedEvent(callback)**static             | Subscribe a callback function to be notified when the local player's followers list is loaded or modified. Note: This callback will not be triggered for a player when a mutual follower unfollows them.Signature```
static
 registerFollowersLoadedEvent
(
callback
:
 
()
 
=>
 
void
):
 number
;
```Parameterscallback: () => voidThe function to call when the local player's follower list is loaded or modified.ReturnsnumberAn ID to use to unregister the callback.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **removeFollowersLoadedEvent(eventId)**static                | Unsubscribe a callback for follower notification using the value returned by registerFollowersLoadedEvent.Signature```
static
 removeFollowersLoadedEvent
(
eventId
:
 number
):
 
void
;
```ParameterseventId: numberThe callback ID returned from registerFollowersLoadedEvent.Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **showFollowRequestModal(requestor, potentialFollow)**static | Shows a follow request modal in the UI of the target player.Signature```
static
 showFollowRequestModal
(
requestor
:
 
Player
,
 potentialFollow
:
 
Player
):
 
void
;
```Parametersrequestor: PlayerThe player making the request.potentialFollow: PlayerThe player to follow\.ReturnsvoidExceptionsA `TypeError` exception is thrown if the input is not a valid [Player](../../core/Classes/Player.md) object.RemarksThe modal UI dialog asks the target player if they accept the follow request and prompts them to follow back if they haven't already.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **showInvitePlayerList(player)**static                       | Shows the invite to world friends list UI.Signature```
static
 showInvitePlayerList
(
player
:
 
Player
):
 
void
;
```Parametersplayer: PlayerA local player to show the invite to world friends list to.Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **showProfilesToFollow(player, accounts)**static             | Opens a page showing profiles to be followed by the player. This allows creators to promote their social media presence across different platforms.Signature```
static
 showProfilesToFollow
(
player
:
 
Player
,
 accounts
:
 
Array
<
ProfileToFollow
>):
 
Promise
<
ProfilesToFollowResult
>;
```Parametersplayer: PlayerThe player who will see the profiles to follow\.accounts: Array<[ProfileToFollow](../Type%20Aliases/ProfileToFollow.md)>The list of profiles to follow. For Instagram, this is the username. For Horizon, this is the alias. Maximum of 20 profiles or the function will fail.ReturnsPromise<[ProfilesToFollowResult](../Type%20Aliases/ProfilesToFollowResult.md)>ExamplesOpen page with 2 profiles to follow in Instagram and Horizon.```
const
 profilesToFollow
:
 
Array
<
ProfileToFollow
>
 
=
 
[{

  profileHandle
:
 
"exampleInstagramProfile"
,

  platform
:
 
SocialPlatformType
.
INSTAGRAM
,


},


{

  profileHandle
:
 
"exampleHorizonProfile"
,

  platform
:
 
SocialPlatformType
.
HORIZON
,


}];



var
 result 
=
 
await
 
Social
.
showProfilesToFollow
(
player
,
 profilesToFollow
);

console
.
log
(
Success
:
 $
{
result
.
success
});
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
````

