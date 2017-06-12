## Api documentation

#### There are four endpoints that recieves a post request in this sprint namely:
- **/api/webhook-obd2**: this endpoint recieves a **post** request from the webhook and persist the data in a mongo db there after sending a response status of **200** back to the webhook

- **/api/events/message**: this is the endpoint to retrieves all messages events (from most recent to oldest) relating to a particular account and returns an array of message events along with pagination meta data.
the endpoint recieves 3 input posts.

  (1) **AccountName (compulsory)**: this is the name of the account as registered by the webhook services provider in which it  message events is required.

  (2) **limit(optional)**: the number of most recent events required.

  (3) **offset(optional)**: the number of data to skip when querying.

- **/api/events/track**: this is the endpoint to retrieves all track events (from most recent to oldest) relating to a particular account and returns an array of presence events along with pagination meta data.
the endpoint recieves 3 input posts.

  (1) **AccountName (compulsory)**: this is the name of the account as registered by the webhook services provider in which it track events is required.

  (2) **limit(optional)**: the number of most recent events required.

  (3) **offset(optional)**: the number of data to skip when querying.

- **/api/events/presence**: this is the endpoint to retrieves all presence events (from most recent to oldest) relating to a particular account and returns an array of presence events along with pagination meta data.
the endpoint recieves 3 input posts.

  (1) **AccountName (compulsory)**: this is the name of the account as registered by the webhook services provider in which it track events is required.

  (2) **limit(optional)**: the number of most recent events required.

  (3) **offset(optional)**: the number of data to skip when querying.
