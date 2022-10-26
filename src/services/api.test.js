import { ApiService } from './api';

describe("api suit", () => {
    const service = () =>
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: { results: [ { url: "pokemon" }] } }),
      }))

    test("api call callback", async () => {
        service();
        const callback = jest.fn();
        await ApiService(callback)
        expect(callback).toBeCalled();
      });
});