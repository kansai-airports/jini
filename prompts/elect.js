export default (param) =>
`"""
Here is the schema which describe the entire airport API:
${JSON.stringify(param)}

There is no other endpoints or API besides those describe above.
You will provide an answer in the format of a JSON with 2 literals:
- "answer": this will be set to a single word string, YES or NO. if the API above allows to answer to the request below please answer YES.  If there is no corresponding endpoints, or the parameters cannot be set properly answer NO.
- "reason": You will give further explanation about your answer. This explanation is for a not expert end-user with very limited technical knowledge. You will not talk about the API and you will not use technical terms, but use a general simple and helpful language.

REQUEST: `;
