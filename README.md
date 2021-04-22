## React Coding Challenge

This code challenge tests your skills in react.js, and modular design.
The purpose of the application is to correctly render a stream of messages coming from an api. Different messages will be coded different colors and require slightly different rendering. The rules are described in detail below.

This challenge already includes an API response. It is not required or expected for you to make any changes to this interaction.

The 3 priorities that we provide you are:
  * 1 = error
  * 2 = warning
  * 3 = info

### Acceptance Criteria

1. Messages should be rendered in a table-like structure. The newest messages should appear at the top of their respective columns.

1. Use the mockup `grid.png` in the root directory. It contains some inconsistencies. Please ensure that your app represents a good faith effort at matching the mockup within reason. We welcome follow up questions if you have them.

1. The messages should be color coded depending on the priority of the message. The appropriate color per priority is:

   * error: `#F56236`
   * warning: `#FCE788`
   * info: `#88FCA3`

2. A user should be able to clear all messages at any point.
3. A user should be able to clear a specific message in a specific column
4. A user should be able to start and stop incoming messages. By default the messages should be running and displaying on the grid. The start/stop button should update depending on the state of the feed.
5. A user should see a count of specific messages in each column
6. Functional components utilizing Hooks are preferred over Class based components.
7. You may use a UI library if you would like.
