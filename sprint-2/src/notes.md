To do:

- Figure out funciton on componentdidMount() that will fetch axios data and re-render page IF state is not equal to the state I want with that ID.
- Use props.match.url or props.match.path for Links in Aside section.
- Deal with Routing between components in App.js - only then can I match URL or Path.
- Need a function (onClick of Link in Aside) that will take obj.id and do an axios.get(herokuwebaddress\${obj.id}), then setState of MainPost to that response.data
- Have source issue from Video Link, but I don'k know why that's a fucking issue. I don't get why it want's a project key.

Current thinking:

- I do get to componentDidUpdate on the links, SO...

1. I want to log the obj.id of the link that has been clicked. ----- Got that
2. I want to update state.
