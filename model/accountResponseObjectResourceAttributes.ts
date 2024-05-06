/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ContactInformation } from './contactInformation';
export class AccountResponseObjectResourceAttributes {
    /**
    * Indicates if the account is a test account. Test accounts are not a separate testing engineering environment. Test accounts use the same production environment as normal Klaviyo accounts. This feature is primarily UI based to reduce human errors
    */
    'testAccount': boolean;
    'contactInformation': ContactInformation;
    /**
    * The kind of business and/or types of goods that the business sells. This is leveraged in Klaviyo analytics and guidance.
    */
    'industry': string;
    /**
    * The account\'s timezone is used when displaying dates and times. This is an IANA timezone. See [the full list here ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timezone': string;
    /**
    * The preferred currency for the account. This is the currency used for currency-based metrics in dashboards, analytics, coupons, and templates.
    */
    'preferredCurrency': string;
    /**
    * The Public API Key can be used for client-side API calls. [More info here](https://developers.klaviyo.com/en/docs/retrieve_api_credentials).
    */
    'publicApiKey': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "testAccount",
            "baseName": "test_account",
            "type": "boolean"
        },
        {
            "name": "contactInformation",
            "baseName": "contact_information",
            "type": "ContactInformation"
        },
        {
            "name": "industry",
            "baseName": "industry",
            "type": "string"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "preferredCurrency",
            "baseName": "preferred_currency",
            "type": "string"
        },
        {
            "name": "publicApiKey",
            "baseName": "public_api_key",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountResponseObjectResourceAttributes.attributeTypeMap;
    }
}

