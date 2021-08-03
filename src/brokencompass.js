import "./scss/styles.scss";

import { BCActor } from "./module/actor/BCActor";
import { BCActorSheet } from "./module/actor/sheets/BCActorSheet";
import "./module/chat/chat-hooks";

/* -------------------------------- */
/*	System initialization			*/
/* -------------------------------- */
Hooks.once("init", async () => {
  console.log(`BrokenCompass | Initializing Broken Compass game system`);

  // Initialise config
  CONFIG.Actor.entityClass = BCActor;

  // Preload all needed templates
  // await TemplatePreloader.preloadHandlebarsTemplates();
  await preloadHandlebarsTemplates();

  // Unregister Core sheets
  Actors.unregisterSheet("core", ActorSheet);
  Items.unregisterSheet("core", ItemSheet);

  // Register BrokenCompass actor sheets
  Actors.registerSheet("brokencompass", BCActorSheet, {
    types: ["character"],
    makeDefault: true,
  });
});

// Hooks.on("renderChatMessage", (app, html, data) => {});

async function preloadHandlebarsTemplates() {
  const templatesPath = [
    "systems/brokencompass/templates/actor/dice-tray.hbs",
    "systems/brokencompass/templates/actor/partials/fields.hbs",
  ];
  return loadTemplates(templatesPath);
}

Handlebars.registerHelper("greaterThan", function (v1, v2, options) {
  "use strict";
  if (v1 > v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});
