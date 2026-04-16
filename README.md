# Kimi LM Copilot Provider

VS Code language model provider that connects Copilot Chat to Moonshot Kimi. Just enter your API key from [platform.kimi.com/console](https://platform.kimi.com/console) and start chatting with the model in VS Code Copilot Chat/Agent.

**Update v0.2.0:** Updated to use official Moonshot API endpoints and latest Kimi K2.5 models.

## If you want to compile yourself

1. Install dependencies: `npm install`
2. Compile: `npm run compile`
3. Run npx `vsce package` to create the `.vsix` file.
4. Load the extension in VS Code.
5. Configure `apiKey` from [platform.kimi.com/console](https://platform.kimi.com/console) in the model provider settings.

## API

- Base URL: `https://api.moonshot.cn/v1` (China) or `https://api.moonshot.ai/v1` (International)
- Chat endpoint: `/chat/completions`
- Full endpoint: `https://api.moonshot.cn/v1/chat/completions`

## Supported Models

- `kimi-k2.5` - Standard model with 256K context, multimodal support
- `kimi-k2-thinking` - Reasoning model with thinking mode enabled

## Request Fields

The client sends:

- `model`
- `messages`
- `stream`
- `thinking`
- `top_p` (optional)
- `max_tokens` (optional)
- `tools` (optional)
- `stop` (optional)
- `prompt_cache_key` (optional, from `metadata.taskId`)

Notes:

- `temperature` is not sent by this extension.
- Compatible with OpenAI API format.

## Default Headers

Each request includes:

- `Content-Type: application/json`
- `Authorization: Bearer <apiKey>`

## Streaming and Tools

- Streaming responses are consumed as SSE (`data:` lines).
- Tool calls are collected from streamed deltas and emitted when the model finishes with `tool_calls`.
