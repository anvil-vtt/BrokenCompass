import { BCActor } from "./module/actor/BCActor";
import { BCActorSheet } from "./module/actor/sheets/BCActorSheet";

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

async function preloadHandlebarsTemplates() {
  const templatesPath = ["systems/brokencompass/templates/actor/dice-tray.hbs"];
  return loadTemplates(templatesPath);
}
