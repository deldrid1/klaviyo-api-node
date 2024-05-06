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
export class ImagePartialUpdateQueryResourceObjectAttributes {
    /**
    * A name for the image.
    */
    'name'?: string | null;
    /**
    * If true, this image is not shown in the asset library.
    */
    'hidden'?: boolean | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ImagePartialUpdateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

