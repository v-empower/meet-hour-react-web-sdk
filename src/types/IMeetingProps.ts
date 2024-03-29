import React from 'react';

import IMeetHourExternalApi from './IMeetHourExternalApi';

/**
 * The the base props for React {@code Components} that load the Meet Hour IFrame.
 */
export default interface IMeetingProps {

    /**
     * The name of the room to join.
     */
    apiBaseURL: string;

    /**
     * API Key to load the External API for Join Meeting.
     */
    apiKey: string;

    /**
     * The JS object with overrides for options defined in the config.js file
     * https://docs.v-empower.com/docs/MeetHour-API/b7e3d0ab3906f-generate-jwt.
     */
    configOverwrite?: object;

    /**
     * Information map about the devices used in a call.
     */
    devices?: {

        /**
         * The label of the device used for audio input.
         */
        audioInput: string;

        /**
         * The label of the device  used for audio output.
         */
        audioOutput: string;

        /**
         * The label of the device used for video input.
         */
        videoInput: string;
    };

    /**
     * The parent node used by the IFrame.
     */
    getIFrameRef?: (parentNode: HTMLDivElement) => void;

    /**
     * The JS object with overrides for options defined in the interface_config.js file
     * https://docs.v-empower.com/docs/MeetHour-API/b7e3d0ab3906f-generate-jwt.
     */
    interfaceConfigOverwrite?: object;

    /**
     * Object arrays that contain information about participants invited to a call.
     */
    invitees?: [];

    /**
     *  The JWT token to join as Moderator.
     */
    jwt?: string;

    /**
     * The external API reference for events and commands.
     */
    onApiReady?: (api: IMeetHourExternalApi) => void;

    /**
     * The callback for when the meeting is ready to be closed.
     */
    onReadyToClose?: () => void;

    /**
     * Encrypted password to pass dynamically to the conference.
     */
    pcode?: string;

    /**
     * The `stage.8x8.vc` or `8x8.vc` release version to test.
     * Expects the following format: `release-1234`.
     */
    release?: string;

    /**
     * The name of the room to join.
     */
    roomName: string;

    /**
     * The custom spinner to be displayed while the iframe is loading.
     */
    spinner?: React.ElementType;

    /**
     * The JS object that contains information about the participant starting the meeting.
     */
    userInfo?: {

        /**
         * The participant display name.
         */
        displayName: string;

        /**
         * The participant email address.
         */
        email: string;
    };
}
