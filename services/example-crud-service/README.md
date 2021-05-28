**Testing**
1. Create a DynamoDb with `postId` as partition key
2. `cd services/example-service` and run:
```js
AWS_PROFILE={{your_profile_name}} serverless invoke local --function {{function_name}} --path mocks/{{event_for_your_function}}.json
```

You have access to the following functions and events:
- `create` (`create-event.json`) = Will add a new post with data described within the json.