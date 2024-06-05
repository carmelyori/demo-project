const axios = require('axios');
const assert = require('assert');

describe('Hello World Page', function() {
  it('should return Hello, World!', async function() {
    const response = await axios.get('http://localhost:3000');
    assert(response.data.includes('Hello, World!'));
  });
});
