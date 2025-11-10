Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-5-animation

# Zone 5 - Animation

This zone showcases animated Custom UI elements that provide dynamic visual feedback and enhance the user experience.

## Station #12: Hourglass Spinner

This example of animation is a simple spinning image of an hourglass. Start and stop the spinning with a network event. You can change the image from an hourglass to any image asset as well as change the speed of the spin from the properties panel or through function calls.

![Hourglass Spinner](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549207109_817392074132079_7912815026566560754_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=WNtgNgjzdMUQ7kNvwGninlZ&_nc_oc=AdkUkQWbZCUQWXaWIKNRXq_vvoyZf1VoU4o3k8r1eWJ0uWIq3tvOM1Fj4SY4W7ZNqyQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfjE8_JLqyOS7FFoLEljbpk8GKgBfD6aJbvYnXNn7JRjTw&oe=692C0B41)

### Primary Script(s)

* **`Spinner.ts`:** This TypeScript code defines an hourglass Spinner component and related trigger components.

### Properties

* **`image`**: the image to be rotated 360 degrees
* **`RPM`**: the speed per minute to rotate the image (1 rotation per second)

### Network Events

The following network events are defined to communicate across the network:

* **`StartSpinner`**: An event that triggers the spinner to begin rotating. It carries an object with the spinner’s entity ID and the RPM to rotate the image.
* **`StopSpinner`**: An event to stop the spinner’s animation. It carries the spinner’s entity ID.
* **`SetDisplay`**: An event to control the visibility of the spinner without affecting its animation state.

### Demo Components

These helper components are designed to be placed in the world to trigger the spinner’s behavior when a player enters a designated area.

* StartTrigger

![StartTrigger](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/549214276_817392037465416_6633004633440853991_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=iu_ViSxT4iQQ7kNvwENWWFV&_nc_oc=Adn1bLB4luKNkZonQ6nQJsMOBvqz4nAtie-q6DQEaX6cy6ihzz-qHTTm0i7PQ7loXQA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfgGDYmLcJgOXJmR6rHuQj5H33elF9-_C9U8uJvJ33d1AQ&oe=692C003C)

* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartSpinner network event, passing the configured spinner\_CUI’s entity ID and RPM.
* `spinner_CUI` must be linked to the configured Custom UI gizmo.
* You can override the spinner’s RPM here by setting an RPM value or leave as 0 to use the RPM in the properties of the spinner’s Custom Ui gizmo.
* StopTrigger

![StopTrigger](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549136164_817392044132082_1273475754736798770_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=SXQ2CYy75RgQ7kNvwEb9rU7&_nc_oc=AdlDEcYsUhXvyLSruaMlZ3jUdCoqrFIiquCE0LULvjnaAedeKDNIUDaB_WUvapIbV-4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfhDV7M8z3kPGD7I0CSsyA6XHdC23TJEQCQO1rhPyO2wDA&oe=692BEFD1)

* Similar to StartTrigger, it sends a StopTrigger network event when a player enters its trigger volume.
* ShowTrigger
  + Sends a SetDisplay network event with `isVisible: true`, making the spinner visible.
* HideTrigger
  + Sends a SetDisplay network event with `isVisible: false`, making the spinner invisible.

## Station #13: Spinner With Timer

This animated Custom UI combines a timer with a spinner. A common use for this is displaying the time for short gameplay functions that do not require player input such as the time for a plant to sprout or an ability to finish its cooldown.

![Spinner With Timer](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549289144_817392067465413_2741378965294608317_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=l0G7jyrh0OkQ7kNvwEFGs_D&_nc_oc=AdlvCqcn9VkSDHvrstBB4f4AzvDg42oJ5S3uuAnbrkJuChKByVAu5znj_jAixCG7PkQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfjuSuBwhxrRKonByrq3IiKgNPu3DbFV46Pz5GzHey1Ozw&oe=692C0F80)

### Primary Script(s)

* **`TimeSpinner.ts`**: This TypeScript code defines a spinner with a time component and related trigger components.

### Properties

The component’s configurable properties are defined in static propsDefinition:

* **`texture`**: the image to be rotated 360 degrees
* **`timeLimit`**: duration of the timer or countdown in seconds
* **`RPM`**: the speed to rotate the texture in revolutions per minute

### Network Events

The following network events are defined to communicate with the TimeSpinner component across the network:

* **`StartTimer`**: An event that triggers the timeSpinner to begin. It carries an object with the timeSpinner’s entity ID and the timeLimit for the timeSpinner.
* **`StartCountdown`**: An event that triggers the timeSpinner to begin. It carries an object with the spinner’s entity ID and the timeLimit for the timeSpinner.
* **`StopSpinner`**: An event to stop the timeSpinner. It carries the timeSpinner’s entity ID.
* **`SetDisplay`**: An event to control the visibility of the timeSpinner without affecting its animation state.
* **`TimeStopped`**: An event sent when a StopTimer is received by the timeSpinner.
* **`TimeFinished`**: An event sent when the timeSpinner’s timer or countdown reaches timeLimit.

### Demo Components

These helper components are designed to be placed in the world to trigger the timeSpinner behavior when a player enters a designated area.

* StartTimerTrigger

![StartTimerTrigger](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/549293175_817392030798750_416217425703940266_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=mvdIXkLwC1wQ7kNvwHL2w2H&_nc_oc=AdnQRcMQI28ITcb3739hlOlrIQPEN3_uXXA1_da1Gwvb6kwKVGqGpiXY1BGKu8HgN-U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfgJDvZ58DrqQXwRP7Y1ED-drC-AXpyyIiKQXTmiZpUFNw&oe=692BEF00)

* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartTimer network event, passing the configured timeSpinner\_CUI’s entity ID, and timeLimit.
* timeSpinner\_CUI must be linked to the configured Custom UI gizmo.
* You can override the timeSpinner’s timeLimit here by setting a timeLimit value, or leave as 0 to use the timeLimit in the properties of the timeSpinner’s Custom UI gizmo.
* StartCountdownTrigger

![StartCountdownTrigger](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/549716474_817392070798746_2708834116674814260_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=S9-URVuT9AgQ7kNvwEeBexr&_nc_oc=AdlvxHaAWBYRF61AdAInfYj2iuYbSD91BONXfdlmuvv8iWQsbbp3TlVnFPCWtZ92qCU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfgPo3hiJBzvyOfto-bhBs6b5mps1XkhUZeVkNqpBCrrmw&oe=692BDA4B)

* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartCountdown network event, passing the configured `timeSpinner_CUI`’s entity ID and timeLimit.
* `timeSpinner_CUI` must be linked to the configured Custom UI gizmo.
* You can override the timeSpinner’s timeLimit here by setting a timeLimit value, or leave as 0 to use the timeLimit in the properties of the timeSpinner’s Custom UI gizmo.
* StopTrigger

![StopTrigger](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/548896781_817392040798749_2618134716355901586_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=obR1FZQ7uxIQ7kNvwEFZsH-&_nc_oc=AdmtIKlos2DDaVu8BTDpFa6vZTQig7I1Regjgs2FOK3w0NA0n1k5zEe3olB330S38H8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfjwOhYtKqGk2McuzRfSwYY43AmiQ-IYyPN0ND8SGb_1Jw&oe=692C0D3C)

* Similar to StartTrigger, it sends a StopTrigger network event when a player enters its trigger volume. This is used for both timer mode and countdown mode

## Station #14: Sliding Banner

A sliding banner can be used to convey messages to all players in your world. When used spatially, the sliding banner can display information similar to animated billboards seen in train stations. When used as an overlay, the sliding banner can display announcements that all players will see.

Because the text scrolls horizontally along the banner, the message can be longer than the actual width of the banner.

### Primary Script(s)

* **`SlidingBanner.ts`**: This TypeScript code defines a sliding banner component and related trigger components.

### Properties

![SlidingBanner Properties](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/549790216_817392064132080_3713498471960485866_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=QB8tbzB1pPgQ7kNvwGChj6K&_nc_oc=AdmCOaB8blzCM6_4iiyge0HjRFR-qmX46TQztbBSHgvb0KTWVUlbwH-aRw4QXOaZ72k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfiyomBHZXPahqBoWdKB4pmjKxyO5qoDqf6pMI1flkPsaw&oe=692BE035)

The component’s configurable properties are defined in static propsDefinition:

* **`message`**: the string to display
* **`fontSize`**: size of the characters (45 is recommended as the minimum size to be easily readable on mobile devices)
* **`textColor`**: RGB values [range: 0.0–1.0]
* **`backgroundColor`**: RGB values [range: 0.0–1.0]
* **`opacity`**: range of opacity from transparent to opaque [range: 0 = clear, 1 = opacity]
* **`duration`**: how long in seconds to scroll from the right side of the panel completely to the left side and no longer be visible
* **`padding`**: add a value (in pixels) to the calculated width of the message
* **`alwaysVisible`**: turn on if you want the banner’s background to be visible at startup and after the sliding banner completes scrolling

### Network Events

The following network events are defined to communicate with the sliding banner component across the network:

* **`StartBanner`**: An event that triggers the banner to begin sliding. It carries an object with the banner’s ID, the message to display, and the animation duration in seconds.
* **`StopBanner`**: An event to stop the banner’s animation and hide it. It carries the banner’s ID.
* **`SetDisplay`**: An event to control the visibility of the banner without affecting its animation state.

### Demo Components

These helper components are designed to be placed in the world to trigger the banner’s behavior when a player enters a designated area.

* StartTrigger

![StartTrigger](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/548001734_817392050798748_2212647163467521435_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6_hVZbIaKWwQ7kNvwFKwpoG&_nc_oc=Adlh6_1lvZML_MlGxs-nRYxuDjYwYNUo7aBwbAh2eLpQ695JV5H3NfLmOK_WY8DcuUk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfiGFz-L8_2JEAqna9Di7fMKLMRWx6iGnm3btF3S5yrshw&oe=692BDB1D)

* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartBanner network event, passing the configured `banner_CUI`’s entity ID, a message, and a duration.
* banner\_CUI must be linked to the configured Custom UI gizmo.
* You can override the sliding banner’s message or duration by setting a new message or duration. Leave this blank to use the message or duration in the properties of the sliding banner’s Custom UI gizmo.
* StopTrigger

![StopTrigger](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/547946013_817392047465415_8015954013424388844_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=LPuzre2eTHwQ7kNvwHwjr46&_nc_oc=AdmCTL_poE4pjYBRJXYkKtOQpLhkbM44diHXDaX4Loxb_KDZ3aRt99xSU680-Ts0ITg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=REttmT9p1TrCqiF-ux-meQ&oh=00_AfgY5a1mh-Y9MmUCtlRHxQMPLHdLZ9FLAGgCoM4cHIRiLQ&oe=692BE86B)

* Similar to StartTrigger, it sends a StopBanner network event when a player enters its trigger volume.