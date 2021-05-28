import { failureResponse, successResponse } from '../../libs/response-handler';
import dynamoDb from '../../libs/dynamoDb-lib';
import * as uuid from 'uuid';

export const handler = async (event, context) => {
  // Parse data from the event body as a JSON object
  const data = JSON.parse(event.body);
  // Set the attributes of the Item to be created
  console.log(data);
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
      postId: uuid.v1(),
      authorId: event.requestContext.identity.cognitoIdentityId,
      question: data.question,
      createdAt: Date.now(),
    }
  };

  try {
    await dynamoDb.put(params);
    return successResponse(params.Item);
  } catch (e) {
    console.log(e.message);
    return failureResponse({ status: false });
  }
}