import { http, HttpResponse } from 'msw';

export const addCard = [
  http.post(
    '/card',
    () =>
      new HttpResponse(null, {
        status: 200,
        statusText: 'Card details successfully added!'
      })
  )
];
