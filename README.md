# CORS Demo

## Setup

You need to have NodeJS and NPM installed to use this demo.

To install the dependencies:
```npm install```

## Running

To run the trusted server (which will start on localhost:3000)
```node server-trusted```

To run the untrusted server (which will start on localhost:4000)
```node server-untrusted```

Then, navigate to localhost:4000. You will see that because no CORS headers were included by the trusted server, the preflight for the request to localhost:3000/ fails.