import { DEFAULT_DOMAIN } from './constants';
import { MeetHourExternalAPI } from './types';

const loadExternalApi = async (
        domain: string,
        release?: string,
        appId?: string
): Promise<MeetHourExternalAPI> => new Promise((resolve, reject) => {
    if (window.MeetHourExternalAPI) {
        return resolve(window.MeetHourExternalAPI);
    }

    const script: HTMLScriptElement = document.createElement('script');
    const APIURL: string = domain ? `api.${domain}` : 'api.meethour.io';
    const releaseParam: string = release ? `?release=${release}` : 'v2.4.3';
    const appIdPath: string = appId ? `${appId}/` : 'libs';

    script.async = true;
    script.src = `https:/${APIURL}/${appIdPath}/${releaseParam}/external_api.min.js`;
    script.onload = () => resolve(window.MeetHourExternalAPI);
    script.onerror = () => reject(new Error(`Script load error: ${script.src}`));
    document.head.appendChild(script as Node);
});


let scriptPromise: Promise<MeetHourExternalAPI>;

/**
 * Injects the external_api.js script for the corresponding domain in DOM
 * and resolves with either the `MeetHourExternalAPI` class definition or an error.
 *
 * Only the first script will be injected, therefore avoid using multiple instances
 * with mixed domains and release version at the same time.
 *
 * @param {string} domain - The domain of the external API
 * @param {string} release - The Meet Hour release. Expected format: 'release-1234'
 * @param {string} appId - The tenant for JaaS Meetings
 * @returns {Promise<MeetHourExternalAPI>} - The MeetHourExternalAPI or an error
 */
export const fetchExternalApi = (
        domain: string = DEFAULT_DOMAIN,
        release?: string,
        appId?: string
): Promise<MeetHourExternalAPI> => {
    if (scriptPromise) {
        return scriptPromise;
    }

    scriptPromise = loadExternalApi(domain, release, appId);

    return scriptPromise;
};
