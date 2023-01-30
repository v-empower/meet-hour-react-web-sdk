import { IMeetHourExternalApi } from '.';

export type MeetHourExternalAPI = {
    new (

        /**
         * The domain used to build the conference URL.
         */
        domain: string,

        /**
         * The optional arguments for the IFrame.
         */
        options: {

            /**
             * API Key to load the External API for Join Meeting.
             */
            apiKey: string;

            /**
             * The JS object with overrides for options defined in the config.js file
             * https://docs.v-empower.com/docs/MeetHour-API/31a282aa6ccc7-generate-jwt.
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
             * The height for the created IFrame.
             */
            height?: string | number;

            /**
             * The JS object with overrides for options defined in the interface_config.js file
             * https://docs.v-empower.com/docs/MeetHour-API/31a282aa6ccc7-generate-jwt.
             */
            interfaceConfigOverwrite?: object;

            /**
             * Object arrays that contain information about participants invited to a call.
             */
            invitees?: [];

            /**
             * The JWT token to join as Moderator.
             */
            jwt?: string;

            /**
             * The IFrame onload event handler.
             */
            onload?: () => void;

            /**
             * The HTML DOM Element where the IFrame is added as a child.
             */
            parentNode?: HTMLDivElement | null;

            /**
             * Encrypted password to pass dynamically to the conference.
             */
            pcode?: string;

            /**
             *
             * Expects the following format: `v2.4.5`.
             */
            release?: string;

            /**
             * The name of the room to join.
             */
            roomName?: string;

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

            /**
             * The created IFrame width.
             */
            width?: string | number;
        }
    ): IMeetHourExternalApi;
};
