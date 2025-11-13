Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/importing-data-with-json

# Importing Data with JSON

In Typescript we can use the Javascript JSON.parse() method to parse a JSON string and construct an object described by the string. This gives us the ability to import JSON data into Meta Horizon Worlds to be used as needed.

With the JSON parsed, creators can update variables within the TypeScript code, giving you the ability to reuse the JSON values across multiple objects in the world.

```
const secretIdentity =
  '{ "name":"John Smith", "age":45, "occupation": "superhero", "number":"1-800-HELPME"}';
catman = JSON.parse(secretIdentity);
console.log(catman.number);
```

ON THIS PAGE