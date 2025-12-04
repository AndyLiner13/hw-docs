Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/module-7-debugging-and-best-practices

# Module 7 - Debugging and Best Practices

This final module covers debugging techniques and best practices for creating effective AI Speech NPCs.

## Debugging Your AI NPCs

### Using the NPC debugger

Use the NPC Debugger tab in the Desktop Editor to determine which events and world states the Conversation is responding to. Below is a screenshot showing which game events Shady Riley is responding to in the world. You can also use the NPC Debugger to debug user voice inputs.

![NPC Debugger tab](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/556419626_829681116236508_1027776150910072785_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xSqwFc3VhAQQ7kNvwFT2CnV&_nc_oc=Adm5r3-7J0GqFPiDRFgli0gPsR3jYTuWwnIPzWAOf7je1sJF-UnHb-HELGzy2WBZRLQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vAopHNCfWrHKvgPD4mm3cA&oh=00_Afl2pxxKz80VaRBUI47Craw6v2VrnUlnQZnRHER1Em_Lwg&oe=694BEAE1)

### Common debug scenarios

* **NPC not responding**: Check if the conversation is properly registered and the trigger zones are working
* **Unexpected responses**: Review the backstory and instructions for clarity
* **Performance issues**: Monitor how frequently events are being called
* **Audio problems**: Verify microphone permissions and audio settings

## Best practices

### Take time to refine

Take the time to refine your AI NPCs to maximize the experience. Small changes can have large effects.

### Expect variability

Do not expect the same conversational responses from the AI NPCs each time. Their responses will vary as their backstories and strings are processed via the conversation API.

### Configure speaking style

Write several sentences in the instructions to configure how your AI NPCs will talk (e.g., length, word choice, topic).

### Performance optimization

* Monitor the frequency of event calls to prevent performance issues
* Use toggles to control which events NPCs respond to
* Implement timers and throttling for high-frequency events
* Test with multiple players to ensure good performance under load

### Iterative development

As Creators may discover when completing the exercises in this tutorial, adjusting backstories, guardrails, instructions, timers, and interaction logic is an iterative process. Plan to spend time experimenting and refining your NPCs.

## VR compatibility notes

Compared to the original Sim Tycoon world, some minor changes were made to allow play in VR:

* Grab anchors were added to the pickaxes
* Some minor modifications were made to [Pickaxe.ts](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/ai-conversation-tutorial/Pickaxe.ts)

## Summary

You’ve now learned how to:

- ✅ Understand AI Speech NPC basics and setup requirements
- ✅ Interact with existing NPCs and understand their behaviors
- ✅ Implement NPCs using TypeScript and the Conversation API
- ✅ Manage player interactions and coordinate multiple NPCs
- ✅ Create your own AI NPC from scratch
- ✅ Add custom game events to trigger NPC responses
- ✅ Debug issues and follow best practices

## Next steps

Now that you’ve completed this tutorial, you can:

* Experiment with different NPC personalities and backstories
* Create more complex interaction systems
* Integrate NPCs into your own world designs
* Explore advanced Conversation API features
* Share your creations with the community