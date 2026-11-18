const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../src/server');

test('GET /health returns ok', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/health`);
    assert.strictEqual(res.status, 200);
    assert.deepStrictEqual(await res.json(), { status: 'ok' });
  } finally {
    server.close();
  }
});

test('unknown route returns 404', async () => {
  const server = createServer().listen(0);
  const { port } = server.address();
  try {
    const res = await fetch(`http://localhost:${port}/nope`);
    assert.strictEqual(res.status, 404);
  } finally {
    server.close();
  }
});
