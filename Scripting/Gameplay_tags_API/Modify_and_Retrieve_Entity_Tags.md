# Modify and Retrieve Entity Tags

 You can use the following APIs to create and update tags for an entity as well
as retrieve all entities in the world with a specified set of tags.
• [Entity.tags propery](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#tags)
• [World.GetEntitiesWithTags method](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#getentitieswithtags)
• [EntityTagMatchOperation enum](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitytagmatchoperation)

  
## TypeScript Example Code

 These examples demonstrate how to use the `Entity.Tag` property to manage tags for an entity.  
```
// add tags to the entity
entity.Tags.add('tag1');
entity.Tags.add('tag2');
entity.Tags.add('tag3');

// check if the entity contains a specific tag
console.log(entity.Tags.contains('tag1')); // true
console.log(entity.Tags.contains('tag4')); // false

// get the number of tags in the entity
console.log(entity.Tags.length()); // 3

// remove a tag from the entity
entity.Tags.remove('tag2');
console.log(entity.Tags.contains('tag2')); // false
console.log(entity.Tags.length()); // 2

// iterate over the tags in the entity
// output:
// tag1
// tag3
for (const tag of entity.Tags) {
  console.log(tag);
}

// get the underlying Set of tags
const tagsSet = entity.Tags.get();
console.log(tagsSet); // Set { 'tag1', 'tag3' }

// clear all tags from the entity
entity.Tags.clear();
console.log(entity.Tags.length()); // 0

// create a new Set of tags
const newTagsSet = new Set<string>(['tag4', 'tag5']);

// set the new Set of tags for the entity
entity.Tags.set(newTagsSet);

// verify the new tags
console.log(entity.Tags.get()); // Set { 'tag4', 'tag5' }
console.log(entity.Tags.length()); // 2
```
  
### Get all entities with the given tags

 This video demonstrates how to query entities based on tagging, using a script
similar to the example below.               
```
entity1.Tags.add('tag1');
entity1.Tags.add('tag2');
entity1.Tags.add('tag3');

// set all tags for entity2 vs adding tags individually
entity2.Tags.set(['tag2', 'tag4']);

// search for entities containing any of the specified tags
const entitiesWithTag1orTag4 = world.getEntitiesWithTags(['tag1', 'tag4'], SearchOptionContainsAny);
console.log(entitiesWithTag1orTag4); // [entity1, entity2]

// search for entities containing all of the specified tags
const entitiesWithTag1andTag2 = world.getEntitiesWithTags(['tag1', 'tag2'], SearchOption.ContainsAll);
console.log(entitiesWithTag1andTag2); // [entity1]
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
