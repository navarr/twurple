import {EventSubChannelChatBaseNotificationEvent} from "./EventSubChannelChatBaseNotificationEvent.js";
import {rawDataSymbol} from "@twurple/common";
import type {
	EventSubChannelChatModiversaryNotificationEventData
} from "./EventSubChannelChatNotificationEvent.external.js";

export class EventSubChannelChatModiversaryNotificationEvent extends EventSubChannelChatBaseNotificationEvent {
	/** @internal */ declare readonly [rawDataSymbol]: EventSubChannelChatModiversaryNotificationEventData;

	readonly type = 'modiversary' as const;

	get months(): number {
		return this[rawDataSymbol].modiversary.months;
	}
}
