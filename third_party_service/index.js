import fetch from 'node-fetch';

(async () => {
  const result = await fetch('http://localhost:4040/v1/pricing-plans/shared', { headers: { 'x-api-key': 'my_third_party_api_key' } });
  console.log(await result.json());
})()