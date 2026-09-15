/** @private */
export interface EventSubChatBadge {
	set_id: string;
	id: string;
	info: string;
}

/** @private */
export interface EventSubChatMessageTextPart {
	type: 'text';
	text: string;
}

/** @private */
export interface EventSubChatMessageCheermote {
	prefix: string;
	bits: number;
	tier: number;
}

/** @private */
export interface EventSubChatMessageCheermotePart {
	type: 'cheermote';
	text: string;
	cheermote: EventSubChatMessageCheermote;
}

/** @private */
export interface EventSubChatMessageEmote {
	id: string;
	emote_set_id: string;
	owner_id: string;
	format: string[];
}

export interface EventSubChatMessageGif {
	id: string;
	url: string;
}

/** @private */
export interface EventSubChatMessageEmotePart {
	type: 'emote';
	text: string;
	emote: EventSubChatMessageEmote;
}

/** @private */
export interface EventSubChatMessageMention {
	user_id: string;
	user_name: string;
	user_login: string;
}

/** @private */
export interface EventSubChatMessageMentionPart {
	type: 'mention';
	text: string;
	mention: EventSubChatMessageMention;
}

export interface EventSubChatMessageGifPart {
	type: 'gif';
	gif: EventSubChatMessageGif;
}

/** @private */
export type EventSubChatMessagePart =
	| EventSubChatMessageTextPart
	| EventSubChatMessageCheermotePart
	| EventSubChatMessageEmotePart
	| EventSubChatMessageGifPart
	| EventSubChatMessageMentionPart;

/** @private */
export interface EventSubChatMessageData {
	text: string;
	fragments: EventSubChatMessagePart[];
}
