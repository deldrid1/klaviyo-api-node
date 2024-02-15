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
import { CampaignValuesRequestDTOResourceObjectAttributesTimeframe } from './campaignValuesRequestDTOResourceObjectAttributesTimeframe';

export class FlowSeriesRequestDTOResourceObjectAttributes {
    /**
    * List of statistics to query for. All rate statistics will be returned in fractional form [0.0, 1.0]
    */
    'statistics': Array<FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum> | 'average_order_value' | 'bounce_rate' | 'bounced' | 'bounced_or_failed' | 'bounced_or_failed_rate' | 'click_rate' | 'click_to_open_rate' | 'clicks' | 'clicks_unique' | 'conversion_rate' | 'conversion_uniques' | 'conversion_value' | 'conversions' | 'delivered' | 'delivery_rate' | 'failed' | 'failed_rate' | 'open_rate' | 'opens' | 'opens_unique' | 'recipients' | 'revenue_per_recipient' | 'spam_complaint_rate' | 'spam_complaints' | 'unsubscribe_rate' | 'unsubscribe_uniques' | 'unsubscribes';
    'timeframe': CampaignValuesRequestDTOResourceObjectAttributesTimeframe;
    /**
    * The interval used to aggregate data within the series request. If hourly is used, the timeframe cannot be longer than 7 days. If daily is used, the timeframe cannot be longer than 60 days. If monthly is used, the timeframe cannot be longer than 52 weeks.
    */
    'interval': FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum | 'daily' | 'hourly' | 'monthly' | 'weekly';
    /**
    * ID of the metric to be used for conversion statistics
    */
    'conversionMetricId': string;
    /**
    * API filter string used to filter the query. Allowed filters are flow_id, send_channel, flow_message_id. Allowed operators are equals, contains-any. Only one filter can be used per attribute, only AND can be used as a combination operator. Max of 100 messages per ANY filter.
    */
    'filter'?: string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "Array<FlowSeriesRequestDTOResourceObjectAttributes.StatisticsEnum>"
        },
        {
            "name": "timeframe",
            "baseName": "timeframe",
            "type": "CampaignValuesRequestDTOResourceObjectAttributesTimeframe"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "FlowSeriesRequestDTOResourceObjectAttributes.IntervalEnum"
        },
        {
            "name": "conversionMetricId",
            "baseName": "conversion_metric_id",
            "type": "string"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlowSeriesRequestDTOResourceObjectAttributes.attributeTypeMap;
    }
}

export namespace FlowSeriesRequestDTOResourceObjectAttributes {
    export enum StatisticsEnum {
        AverageOrderValue = <any> 'average_order_value',
        BounceRate = <any> 'bounce_rate',
        Bounced = <any> 'bounced',
        BouncedOrFailed = <any> 'bounced_or_failed',
        BouncedOrFailedRate = <any> 'bounced_or_failed_rate',
        ClickRate = <any> 'click_rate',
        ClickToOpenRate = <any> 'click_to_open_rate',
        Clicks = <any> 'clicks',
        ClicksUnique = <any> 'clicks_unique',
        ConversionRate = <any> 'conversion_rate',
        ConversionUniques = <any> 'conversion_uniques',
        ConversionValue = <any> 'conversion_value',
        Conversions = <any> 'conversions',
        Delivered = <any> 'delivered',
        DeliveryRate = <any> 'delivery_rate',
        Failed = <any> 'failed',
        FailedRate = <any> 'failed_rate',
        OpenRate = <any> 'open_rate',
        Opens = <any> 'opens',
        OpensUnique = <any> 'opens_unique',
        Recipients = <any> 'recipients',
        RevenuePerRecipient = <any> 'revenue_per_recipient',
        SpamComplaintRate = <any> 'spam_complaint_rate',
        SpamComplaints = <any> 'spam_complaints',
        UnsubscribeRate = <any> 'unsubscribe_rate',
        UnsubscribeUniques = <any> 'unsubscribe_uniques',
        Unsubscribes = <any> 'unsubscribes'
    }
    export enum IntervalEnum {
        Daily = <any> 'daily',
        Hourly = <any> 'hourly',
        Monthly = <any> 'monthly',
        Weekly = <any> 'weekly'
    }
}
