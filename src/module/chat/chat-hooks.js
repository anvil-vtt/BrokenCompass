import { chatListeners } from "./chat-listeners";

Hooks.on("renderChatLog", chatListeners);
Hooks.on("renderChatPopout", chatListeners);
