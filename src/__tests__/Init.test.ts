import { fetchExternalApi } from '../init';

const SUCCESS_DOMAIN = 'api.meethour.io';
const ERROR_DOMAIN = 'api.meethour.io';
const apiKey = '653ca41a235215ed4531959c9b4b217b91c41324e1949aae9f09f5c4d505fcb6';
const version = 'v2.4.5';

describe('fetchExternalApi module', () => {

    it('should return the external api instance', async () => {
        const fetchExternalApiMock = jest.fn(fetchExternalApi);

        return fetchExternalApiMock(SUCCESS_DOMAIN,apiKey).then(value => {
            expect(value).toBeTruthy();
        });
    });

    it('should throw an error when the external api file cannot be retrieved from the provided domain', async () => {
        const fetchExternalApiMock = jest.fn(fetchExternalApi);

        return fetchExternalApiMock(ERROR_DOMAIN,apiKey).catch((e: Error) => {
            expect(e.message).toEqual(`Script load error: https://${ERROR_DOMAIN}/libs/${version}/external_api.min.js?apiKey=${apiKey}`);
        });
    });
});
