import { chatDiceRoll } from "./chat-dice-roll";

Hooks.on("renderChatLog", chatListeners);
Hooks.on("renderChatPopout", chatListeners);

function chatListeners(app, html) {
  console.log(`BrokenCompass | Register chatListeners `);

  html.on("click", "[data-action]", (e) => {
    const { dataset } = e.currentTarget;
    const card = $(e.currentTarget).closest("[data-actor]");
    const actorId = card.data("actor");
    const actor = game.actors.get(actorId);

    let values;
    switch (dataset.action) {
      case "reroll":
        values = dataset.values.split("|");
        chatDiceRoll(Number(values[0]), values[1].split(","), Number(values[2]), actor, values[3] === "1");
        break;
    }
  });
}
