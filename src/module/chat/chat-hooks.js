import { chatListeners } from "./chat-listeners";
import { displayChatActionButtons } from "./display-chat-buttons";

Hooks.on("renderChatLog", chatListeners);
Hooks.on("renderChatPopout", chatListeners);
Hooks.on("renderChatMessage", displayChatActionButtons);
