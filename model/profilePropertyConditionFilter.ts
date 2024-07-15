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
import { AnniversaryDateFilter } from './anniversaryDateFilter';
import { BooleanFilter } from './booleanFilter';
import { CalendarDateFilter } from './calendarDateFilter';
import { ExistenceEnum } from './existenceEnum';
import { ExistenceOperatorFilter } from './existenceOperatorFilter';
import { ListContainsOperatorFilter } from './listContainsOperatorFilter';
import { ListLengthFilter } from './listLengthFilter';
import { NumericOperatorFilter } from './numericOperatorFilter';
import { RelativeAnniversaryDateFilter } from './relativeAnniversaryDateFilter';
import { RelativeDateOperatorBaseFilter } from './relativeDateOperatorBaseFilter';
import { RelativeDateRangeFilter } from './relativeDateRangeFilter';
import { StaticDateFilter } from './staticDateFilter';
import { StaticDateRangeFilter } from './staticDateRangeFilter';
import { StringArrayOperatorFilter } from './stringArrayOperatorFilter';
import { StringOperatorFilter } from './stringOperatorFilter';
import { StringPhoneOperatorArrayFilter } from './stringPhoneOperatorArrayFilter';
export type ProfilePropertyConditionFilter = StringOperatorFilter | StringArrayOperatorFilter | StringPhoneOperatorArrayFilter | NumericOperatorFilter | BooleanFilter | StaticDateFilter | StaticDateRangeFilter | RelativeDateOperatorBaseFilter | RelativeAnniversaryDateFilter | RelativeDateRangeFilter | CalendarDateFilter | AnniversaryDateFilter | ListContainsOperatorFilter | ListLengthFilter | ExistenceOperatorFilter;
