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
import { GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ListEnum } from './listEnum';
import { ListListResponseObjectResourceAttributes } from './listListResponseObjectResourceAttributes';
import { ListResponseObjectResource } from './listResponseObjectResource';
import { ObjectLinks } from './objectLinks';

export class GetListResponseCollectionDataInner extends ListResponseObjectResource {
    'relationships'?: GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetListListResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetListResponseCollectionDataInner.attributeTypeMap);
    }
}

export namespace GetListResponseCollectionDataInner {
}
