import type * as vscode from "vscode";

// Default base URL for Moonshot API
// China users: https://api.moonshot.cn/v1
// International users: https://api.moonshot.ai/v1

interface KimiModelInfo {
	id: string;
	name: string;
	family: string;
	version: string;
	maxInputTokens: number;
	maxOutputTokens: number;
	tooltip: string;
	baseUrl: string;
	thinking: boolean;
	capabilities: {
		imageInput: boolean;
		toolCalling: boolean;
	};
}

export const KIMI_MODELS: KimiModelInfo[] = [
	{
		id: "kimi-k2.5",
		name: "Kimi K2.5",
		family: "kimi",
		version: "k2.5",
		tooltip: "Moonshot AI - Kimi K2.5 (256K context, multimodal)",
		maxInputTokens: 262144,
		maxOutputTokens: 32768,
		baseUrl: "https://api.moonshot.cn/v1",
		thinking: false,
		capabilities: { imageInput: true, toolCalling: true },
	},
	{
		id: "kimi-k2-thinking",
		name: "Kimi K2 Thinking",
		family: "kimi",
		version: "k2-thinking",
		tooltip: "Moonshot AI - Kimi K2 Thinking (Long reasoning mode)",
		maxInputTokens: 262144,
		maxOutputTokens: 32768,
		baseUrl: "https://api.moonshot.cn/v1",
		thinking: true,
		capabilities: { imageInput: true, toolCalling: true },
	},
];

export function toLanguageModelChatInformation(
	model: KimiModelInfo,
): vscode.LanguageModelChatInformation {
	const {
		id,
		name,
		family,
		version,
		tooltip,
		maxInputTokens,
		maxOutputTokens,
		capabilities,
	} = model;

	return {
		id,
		name,
		family,
		version,
		tooltip,
		detail: tooltip,
		maxInputTokens,
		maxOutputTokens,
		capabilities,
	};
}
