/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
import AWS from "aws-sdk";

const eventBridge = new AWS.EventBridge();

export const lambdaHandler = async (event, context) => {
  const data = { state: "update", key2: "value2" };
  const params = {
    Entries: [
      {
        Time: new Date().getTime(),
        Source: "waleed.consumer",
        Resources: [],
        DetailType: "anyType",
        Detail: JSON.stringify(data),
        EventBusName: "default",
        TraceHeader: "string",
      },
    ],
  };
  await eventBridge.putEvents(params).promise();
  return { message: "Event Published" };
};
