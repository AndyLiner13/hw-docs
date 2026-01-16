Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/playerspecific-custom-ui

# Player-Specific Custom UI

When building a UI panel, a common scenario is to display different content for each player. An example is the button hover color, which should only be shown to the player interacting with the button, but not all players. (Therefore, you can see that the hover state implementation in the previous section is in fact incorrect, because the button background color will change when *any* player hovers onto the button.) Another example would be players’ HUD (heads-up display) where we obviously want to show different numbers and stats for each player.

One straightforward way to achieve this is to duplicate the entity and set the visibility of each entity so that it is only visible to one player. We actually recommend using the [Local Mode](Local%20Mode%20Custom%20UI%20Scripts.md) when adopting this approach. Please see a more detailed discussion and examples in the [Local Mode](Local%20Mode%20Custom%20UI%20Scripts.md) section. But there are cases where we don’t want to have multiple UI gizmos, and want to keep one single panel that is publicly visible. Custom UI feature allows us to display different content to each player *on the same UI Gizmo* . This is achieved by only updating the value of a Binding to certain players, thus creating a player-specific value for them.

## Setting New Values for Only Certain Players

The `set()` method of the Binding can take an optional second parameter of an array of players.

When the `set()` method is called without an array of players, the new value (we call it *the global value* ) is updated to everyone; when it is called with an array of players, only those players will receive the new value of the Binding (we call it *the player value*).

```
// Everyone gets the new value, and everyone's UI is re-rendered
someBinding.set(newValue);

// Only player1 and player2 get the new value and a UI re-render;
// everyone else stays unaffected
someBinding.set(newValue, [player1, player2]);
```

Therefore, the correct implementation for the button with hover state needs to take [the acting player](Build%20an%20interactive%20custom%20UI.md) into account, and only manipulate the player specific value:

```
function MyButton(props: MyButtonProps): UINode {
  ...
  return Pressable({
    children: Text({ text: props.label, style: { ... } }),
    onClick: props.onClick,
    onEnter: player => backgroundColor.set(HOVERED_COLOR, [player]),
    onExit: player => backgroundColor.set(DEFAULT_COLOR, [player]),
    style: { backgroundColor, ... },
  }),
}
```

### Global Value vs Player Values

Conceptually, it would be helpful to explicitly make a distinction between the “*global value*” and the “*player values*.” A player would see the *global value* by default; however, if there is a *player value* set for a player, that player will see the player value. Another way to think about global value is that, when a new player joins the world, that player will *always receive the global values as the initial values*.

The behavior of the `set()` method of the Binding can be more accurately described as:

* When the `set()` method is called with an array of players, we are effectively setting a new player value for those players in the array. In this case, the global value is left unchanged, so other players that are not in the array will be unaffected.
* When the `set()` method is called without an array of players, we are updating the global value, and clearing all player values. As a result, all players will receive the new value, regardless of whether they have any player values in the past.

As you can see, player values can be seen as “deviations” from the global value. Therefore, we also provide a `reset()` method, which will remove the player values, effectively setting the Binding back to the global value. Like the `set()` method, the `reset()` method also takes an optional array of players, which indicates who we should reset for. If provided, only those players in the array will have their player values reset and receive the global value; if not provided, all player values will be cleared. With the introduction of the `reset()` method, we can have an even simpler implementation for the button hover state. We may treat the default color as the global value, and the hovered color as the player value, then instead of setting it back to the default color, we simply need to reset the Binding:

```
function MyButton(props: MyButtonProps): UINode {
  const backgroundColor = new Binding<string>('#19AD0E');

  return Pressable({
    children: Text({ ... }),
    onClick: props.onClick,
    onEnter: player => backgroundColor.set('#87D481', [player]),
    onExit: player => backgroundColor.reset([player]),
    style: { backgroundColor, ... },
  }),
}
```

### What about Map Functions?

Other than the straightforward way of directly setting a new value, we sometimes use a map function to get new values, for example in functional updates and derived values for a Binding. Is the map function acting on the global value or the player values?

The answer is both! It is worth noting that *both functional update and derived values respect player values*. The map function will be used to mutate/derive both the global value and each player value that the Binding might have. To illustrate this in a concrete example:

```
//                                        global player1 player2 player3
const binding = new Binding(0);
//                                binding    0      0       0       0
binding.set(1);
//                                binding    1      1       1       1
binding.set(2, [player1, player2]);
//                                binding    1      2       2       1
binding.set(v => v + 1);
//                                binding    2      3       3       2
const derived = binding.derive(v => v + 1);
//                                binding    2      3       3       2
//                                derived    3      4       4       3
binding.set(4, [player2, player3]);
//                                binding    2      3       4       4
//                                derived    3      4       5       5
binding.set(v => v + 1, [player3]);
//                                binding    2      3       4       5
//                                derived    3      4       5
```

### Setting Player Values on Start

Sometimes we want to set player values for each player before the player interacts with the UI. We can check `this.world.getPlayers()` to get the existing players and connect the `OnPlayerEnterWorld` event to get the new players. For example, a simple “Welcome, [player’s name]!” text would be:

```
class WelcomeMessage extends UIComponent {
  initializeUI() {
    const message = new Binding<string>('Welcome!');

    // for existing players
    this.world.getPlayers().forEach(
      player => message.set(`Welcome, ${player.name.get()}!`, [player]),
    );

    // for new players
    this.connectCodeBlockEvent(
      this.entity,
      CodeBlockEvents.OnPlayerEnterWorld,
      player => message.set(`Welcome, ${player.name.get()}!`, [player]),

    return Text({ text: message });
  }
```

## Player-Specific UI Example – A Case Study

Let’s work on a more interesting and complicated example. Say we want to put a “Waiting for X players” text and a “Get Ready” button at the entrance of a game. When a player clicks on the button, the button becomes “Cancel” and clicking again will cancel the ready state. When X reaches zero, the button disappears and the text comes “Go!”.

There are many different approaches to this problem. Depending on our familiarity with Bindings and the concept of state management, we might find one easier than the others. Let’s imagine two creators, Alice and Bob, and let’s see how they will implement this UI differently, and we can compare the approaches in the end.

Alice is familiar with object-oriented programming and is comfortable about setting each property of each UI component. She looks at the UI, and realizes that there are three things that will get updated at runtime: the text prompt, the button label, and the button visibility. Alice decides to create a Binding for each of them.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const textPrompt = new Binding<string>(
      'Waiting for 8 players',
    );
    const buttonLabel = new Binding<string>('Get Ready');
    const showButton = new Binding<boolean>(true);

    return View({
      children: [
        Text({ text: textPrompt }),
        UINode.if(
          showButton,
          Pressable({
            children: Text({ text: buttonLabel }),
            onClick: /** TODO: button effect */,
          }),
        ),
      ],
    });
  }
}
```

She correctly realizes that the only time any of these Bindings might get updated is when any player clicks the button, so it’s sufficient to update all of the Bindings inside the `onClick` callback. Also, she realizes that the button label should only be updated to the player clicking the button, but the text prompt and the button visibility need to be updated for all players.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const textPrompt = new Binding<string>(
      'Waiting for 8 players',
    );
    const buttonLabel = new Binding<string>('Get Ready');
    const showButton = new Binding<boolean>(true);

    return View({
      children: [
        Text({ text: textPrompt }),
        UINode.if(
          showButton,
          Pressable({
            children: Text({ text: buttonLabel }),
            onClick: player => {
              // only change the acting player's button label
              if ( /** TODO: if the player has clicked */ ) {
                buttonLabel.set('Get Ready', [player]);
              } else {
                buttonLabel.set('Cancel', [player]);
              }

              // change everyone's prompt and button visibility
              if ( /** TODO: if there are remaining slots */ ) {
                textPrompt.set(
                  `Waiting for ${remainingSlots} players`,
                );
              } else {
                textPrompt.set('Go!');
                showButton.set(false);
              }
            },
          }),
        ),
      ],
    });
  }
}
```

She struggles a little bit with the condition she should put into those clauses, but eventually she figured it out. She should keep track of who has clicked the button or not. Once she has that, she can easily tell if there are any remaining slots, and if a particular player has clicked the button or not. She decides to create a set to track this.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const readyPlayers = new Set();
    const textPrompt = new Binding<string>('Waiting for 8 players');
    const buttonLabel = new Binding<string>('Get Ready');
    const showButton = new Binding<boolean>(true);

    return View({
      children: [
        Text({text: textPrompt}),
        UINode.if(
          showButton,
          Pressable({
            children: Text({text: buttonLabel}),
            onClick: player => {
              if (readyPlayers.has(player)) {
                readyPlayers.delete(player);
                buttonLabel.set('Get Ready', [player]);
              } else {
                readyPlayers.add(player);
                buttonLabel.set('Cancel', [player]);
              }

              const remainingSlots = 8 - readyPlayers.size;
              if (remainingSlots > 0) {
                textPrompt.set(`Waiting for ${remainingSlots} players`);
              } else {
                textPrompt.set('Go!');
                showButton.set(false);
              }
            },
          }),
        ),
      ],
    });
  }
}
```

Bob, on the other hand, is following the suggestions from this documentation. Unlike Alice, he doesn’t immediately care about what the UI needs to render. He decides to first think about a minimal but complete representation of the UI. He realizes that, to decide what needs to be rendered in the UI, he needs to know the number of remaining slots, which will be used to derive the text prompt and the button visibility; he also needs to know whether the player has clicked the button or not, which will be used to derive the button label.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const remainingSlots = new Binding<number>(8);
    const hasClicked = new Binding<boolean>(false);

    return View({
      children: [
        Text({
          text: remainingSlots.derive(r =>
            r > 0 ? `Waiting for ${r} players` : 'Go!',
          ),
        }),
        UINode.if(
          remainingSlots.derive(r => r > 0),
          Pressable({
            children: Text({
              text: hasClicked.derive(h =>
                h ? 'Cancel' : 'Get Ready',
              ),
            }),
            onClick: /** TODO: button effect */,
          }),
        ),
      ],
    });
  }
}
```

Like Alice, Bob also realizes that he needs to update the two Bindings in the `onClick` callback, and that `hasClicked` should be updated only to the player clicking the button, and `remainingSlots` should be updated to everyone. When both of those Bindings are updated, the new value should depend on the old one, so he uses functional update.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const remainingSlots = new Binding<number>(8);
    const hasClicked = new Binding<boolean>(false);

    return View({
      children: [
        Text({
          text: remainingSlots.derive(r =>
            r > 0 ? `Waiting for ${r} players` : 'Go!',
          ),
        }),
        UINode.if(
          remainingSlots.derive(r => r > 0),
          Pressable({
            children: Text({
              text: hasClicked.derive(h =>
                h ? 'Cancel' : 'Get Ready',
              ),
            }),
            onClick: player => {
              // only change click status for the acting player
              hasClicked.set(h => !h, [player]);

              // remaining slots should be updated for everyone
              remainingSlots.set(r => r +
                (/** TODO: if the player has clicked */ ? 1 : -1)
              );
            },
          }),
        ),
      ],
    });
  }
}
```

The final missing piece is that he needs to update the `remainingSlots` depending on the value of `hasClicked`. How does he access this value? He realizes that he already did access this value inside the functional update for `hasClicked`. Now all he has to do is to put the `remainingSlots` update inside the functional update of `hasClicked`. This is a bit complicated to think about, but works perfectly.

```
class GetReadyDialog extends UIComponent {
  initializeUI() {
    const remainingSlots = new Binding<number>(8);
    const hasClicked = new Binding<boolean>(false);

    return View({
      children: [
        Text({
          text: remainingSlots.derive(r =>
            r > 0 ? `Waiting for ${r} players` : 'Go!',
          ),
        }),
        UINode.if(
          remainingSlots.derive(r => r > 0),
          Pressable({
            children: Text({
              text: hasClicked.derive(h => (h ? 'Cancel' : 'Get Ready')),
            }),
            onClick: player => {
              hasClicked.set(
                h => {
                  remainingSlots.set(r => r + (h ? 1 : -1));
                  return !h;
                },
                [player],
              );
            },
          }),
        ),
      ],
    });
  }
}
```

Now that we have seen two implementations of the same UI from Alice and Bob, which one is better?

Alice thinks hers is better, because she explicitly maintains a set of players who have clicked the button, so it’s easier to debug if anything goes wrong. It is also easier to talk to other scripts in her game if other scripts need the same information.

Bob thinks his implementation is better. There are fewer Bindings, and the code in general is more concise. All the states are controlled by the Bindings, so he doesn’t need to manually make sure the external storage and the Bindings are synced.

So which one is better? It is completely up to you! The “correct” choice depends on many factors: your familiarity with different techniques, the coding styles set by your team, how your scripts talk to the rest of your gaming state management system, etc. This section is not choosing one coding style for you. Rather, it is demonstrating the capabilities of the Custom UI feature for you to better understand the pros and cons of each approach.

Player-specific Bindings and UIs are powerful tools, but would require some time to get used to. Happy coding!