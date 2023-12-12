export default (param) =>
`"""
Here is the schema which describe the entire airport API:
${JSON.stringify(param)}

There is no other endpoints or API besides those describe above.
Given this API would you be able to answer the following request (simply answer yes or no): `;
