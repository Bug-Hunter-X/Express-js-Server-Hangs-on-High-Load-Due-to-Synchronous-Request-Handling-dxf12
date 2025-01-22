# Express.js Server Hangs on High Load

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive under high load due to synchronous request handling.  The original `server.js` file showcases the problem, while `server-fixed.js` provides a solution.

## Problem

The `server.js` example uses `setTimeout` to simulate a long-running task within a request handler.  In a real-world scenario, this could be a database query, file I/O operation, or other time-consuming process.  Because Node.js is single-threaded, if this task takes too long, subsequent requests will queue up and the server will appear to hang.

## Solution

The `server-fixed.js` file addresses the issue by ensuring the request handlers are non-blocking.  This is crucial for scalability in Express.js applications.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Start the server with `node server.js`.
4. Send multiple requests concurrently (e.g., using a tool like `ab` or `k6`).
5. Observe that the server becomes unresponsive or slow to respond.
6. Repeat steps 3-5 using `server-fixed.js` to see the improved performance.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.