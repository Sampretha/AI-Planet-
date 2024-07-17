import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // ramp up
    { duration: '5m', target: 100 }, // hold at 100 users
    { duration: '2m', target: 0 },   // ramp down
  ],
};

export default function () {
  let response;
  try {
    response = http.post('http://192.168.49.2/generate', JSON.stringify({ prompt: 'Hello, world!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
    check(response, {
      'is status 200': (r) => r.status === 200,
    });
  } catch (error) {
    console.error('Request failed:', error);
  }
  sleep(1);
}
