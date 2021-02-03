import { successResponse } from '../../libs/response-handler';

export const handler = async (event, context) => {
  return successResponse({ status: "successful", result: "Good Job" })
}
