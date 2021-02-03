export function successResponse (body) {
  return createResponse(200, body);
};

export function failureResponse (body) {
  return createResponse(500, body);
};

export function notFoundResponse (body) {
  return createResponse(404, body);
};

function createResponse (statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body)
  };
};