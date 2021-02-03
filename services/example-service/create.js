import exampleLib from '../../libs/exampleLib';
import { successResponse } from '../../libs/response-handler';

export const handler = async (event, context) => {
  const data = JSON.parse(event.body);
  console.log(data);
  let result = exampleLib.getSquare(data.value);
  return successResponse({ status: "successful", result });
}