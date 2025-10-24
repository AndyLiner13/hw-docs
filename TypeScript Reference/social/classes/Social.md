# Social Class

Manages the friend system and related social functionality between players in a world.

## Signature

```typescript
export declare class Social
```

## Examples

```typescript
private followerLogging(player1: Player, player2: Player) {
  // Get the number of followers that the local player has in the current world
  Social.getPlayerFollowerCountInWorld(player1).then(count => {
    console.log(`Player 1 has ${count} followers in this world.`);
  });

  // Check whether or not player 1 is following player 2. Use getFollowingStatus
  // so we can detect pending follow requests
  Social.getFollowingStatus(player1, player2).then(status => {
    console.log(`Player 1 is ${status.toString()} player 2.`);

    // If not following, and we don't have a pending follow request, send an invite
    if (status == FollowStatus.NOT_FOLLOWING) {
      Social.showFollowRequestModal(player1, player2)
    }
  });
}
```

## Remarks

You can use this class to send follow requests between players and get follower and following counts for distributing achievements and rewards based on the level of engagement between players in your world.

## Methods

### areMutuallyFollowing(player1, player2) static

Checks if two players are following each other in Meta Horizon Worlds.

**Signature:**
```typescript
static areMutuallyFollowing(player1: Player, player2: Player): Promise<boolean>;
```

**Parameters:**
- `player1: Player` - The first player to check.
- `player2: Player` - The second player to check.

**Returns:**
`Promise<boolean>` - A promise that resolves to true if both players are following each other; false otherwise.

**Exceptions:**
Throws a TypeError exception if the input is not a valid Player object.

**Remarks:**
This is a convenience method that indicates whether isPlayerFollowing is true for both players. This method is not supported on server scripts. Please change script execution mode to local.

### getAvatarImageSource(player, options) static

Gets an image based on the player's avatar.

**Signature:**
```typescript
static getAvatarImageSource(player: Player, options?: IAvatarImageOptions): Promise<ImageSource>;
```

**Parameters:**
- `player: Player`
- `options: IAvatarImageOptions` (Optional)

**Returns:**
`Promise<ImageSource>` - The avatar image source for the given player.

### getFollowingStatus(requestor, target) static

Checks the given player's following status for the target player in Meta Horizon Worlds.

**Signature:**
```typescript
static getFollowingStatus(requestor: Player, target: Player): Promise<FollowStatus>;
```

**Parameters:**
- `requestor: Player` - The player who you are checking the status for.
- `target: Player` - The target player that is potentially being followed.

**Returns:**
`Promise<FollowStatus>` - A promise that resolves to a FollowStatus enum value describing the current follow status.

**Exceptions:**
Throws a TypeError if the input is not a valid Player object.

**Remarks:**
This method is not supported on server scripts. Please change script execution mode to local.

### getPlayerFollowerCountInWorld(player) static

Gets the total number of players that are following the given player in the world. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated.

**Signature:**
```typescript
static getPlayerFollowerCountInWorld(player: Player): Promise<number>;
```

**Parameters:**
- `player: Player` - The player to retrieve the follower count for.

**Returns:**
`Promise<number>` - A promise that resolves to the number of retrieved followers.

**Remarks:**
This method is not supported on server scripts. Please change script execution mode to local.

### getPlayerFollowingCountInWorld(player) static

Gets the total number of players the given player is following in the world. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated.

**Signature:**
```typescript
static getPlayerFollowingCountInWorld(player: Player): Promise<number>;
```

**Parameters:**
- `player: Player` - The player to retrieve the following count for.

**Returns:**
`Promise<number>` - A promise that resolves to the number of players the given player is following in the world.

**Remarks:**
This method is not supported on server scripts. Please change script execution mode to local.

### getPlayerMutuallyFollowCountInWorld(player) static

Gets the total number of mutual followers in the world for the given player. Note: There can be a delay of up to 12 seconds (or longer) between when a player follows another player and when the count is updated.

**Signature:**
```typescript
static getPlayerMutuallyFollowCountInWorld(player: Player): Promise<number>;
```

**Parameters:**
- `player: Player` - The player to check the mutual follower count for.

**Returns:**
`Promise<number>` - A promise that resolves to the number of mutual followers the player has.

**Exceptions:**
A TypeError is thrown if the input is not a valid Player object.

**Remarks:**
Mutual followers are players that both follow and are followed by the given player. This method is not supported on server scripts. Please change script execution mode to local.

### isPlayerFollowing(requestor, following) static

Checks if the given player is following the target player in Meta Horizon Worlds.

**Signature:**
```typescript
static isPlayerFollowing(requestor: Player, following: Player): Promise<boolean>;
```

**Parameters:**
- `requestor: Player` - The player that's the potential follower of the target player.
- `following: Player` - The target player that is potentially being followed.

**Returns:**
`Promise<boolean>` - A promise that resolves to true if the given player is following the target player; false otherwise.

**Exceptions:**
Throws a TypeError if the input is not a valid Player object.

**Remarks:**
This method is not supported on server scripts. Please change script execution mode to local.

### registerFollowersLoadedEvent(callback) static

Subscribe a callback function to be notified when the local player's followers list is loaded or modified. Note: This callback will not be triggered for a player when a mutual follower unfollows them.

**Signature:**
```typescript
static registerFollowersLoadedEvent(callback: () => void): number;
```

**Parameters:**
- `callback: () => void` - The function to call when the local player's follower list is loaded or modified.

**Returns:**
`number` - An ID to use to unregister the callback.

### removeFollowersLoadedEvent(eventId) static

Unsubscribe a callback for follower notification using the value returned by registerFollowersLoadedEvent.

**Signature:**
```typescript
static removeFollowersLoadedEvent(eventId: number): void;
```

**Parameters:**
- `eventId: number` - The callback ID returned from registerFollowersLoadedEvent.

**Returns:**
`void`

### showFollowRequestModal(requestor, potentialFollow) static

Shows a follow request modal in the UI of the target player.

**Signature:**
```typescript
static showFollowRequestModal(requestor: Player, potentialFollow: Player): void;
```

**Parameters:**
- `requestor: Player` - The player making the request.
- `potentialFollow: Player` - The player to follow.

**Returns:**
`void`

**Exceptions:**
A TypeError exception is thrown if the input is not a valid Player object.

**Remarks:**
The modal UI dialog asks the target player if they accept the follow request and prompts them to follow back if they haven't already.

### showInvitePlayerList(player) static

Shows the invite to world friends list UI.

**Signature:**
```typescript
static showInvitePlayerList(player: Player): void;
```

**Parameters:**
- `player: Player` - A local player to show the invite to world friends list to.

**Returns:**
`void`