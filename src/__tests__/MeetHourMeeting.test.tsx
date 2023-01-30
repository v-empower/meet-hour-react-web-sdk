/* eslint-disable */

import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';

import { API_BASE_URL, DEFAULT_DOMAIN } from '../constants';
import { MeetHourMeeting } from '../index';
import { IMeetHourExternalApi } from '../types';

describe('MeetHourMeeting component', () => {
    it('should render correctly', () => {
        const props = {
            domain: DEFAULT_DOMAIN,
            apiBaseURL: API_BASE_URL,
            apiKey: '653ca41a235215ed4531959c9b4b217b91c41324e1949aae9f09f5c4d505fcb6',
            roomName: 'TestingMeetHourMeetingComponent',
            onApiReady: (externalApi: IMeetHourExternalApi) => {
                console.log(externalApi);
            }
        };

        const wrapper = shallow(<MeetHourMeeting {...props} />);
        const snapshot = toJson(wrapper);


        // Overwrite non-deterministic fields
        snapshot.children[0].props.id = 'test';
        snapshot.children[0].props.key = 'test';
        expect(snapshot).toMatchSnapshot();
    });

    it('should render iframe', () => {
        const props = {
            domain: DEFAULT_DOMAIN,
            roomName: 'TestingMeetIFrame',
            apiBaseURL: API_BASE_URL,
            apiKey: '653ca41a235215ed4531959c9b4b217b91c41324e1949aae9f09f5c4d505fcb6',
            onApiReady: (externalApi: IMeetHourExternalApi) => {
                console.log(externalApi);
            }
        };
        const wrapper = shallow(<MeetHourMeeting {...props} />);
        const iframe = wrapper.find('iframe');

        expect(iframe).toBeTruthy();
    });
});
