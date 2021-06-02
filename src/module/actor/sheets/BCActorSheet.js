export class BCActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["brokencompass", "sheet"],
      template: "systems/brokencompass/templates/actor/sheet.hbs",
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.on("click", "[data-roll]", async (e) => {
      const rollString = e.currentTarget.dataset.roll;

      const roll = await new Roll(rollString).roll();
      await roll.toMessage();
    });
  }

  getData(options) {
    const data = super.getData(options);

    data.fields = [
      {
        name: game.i18n.localize("BC.Sheet.Fields.Action"),
        value: 3,
        skills: [
          {
            name: "Fight",
            value: 1,
          },
          {
            name: "Leadership",
            value: 3,
          },
          {
            name: "Stunt",
            value: 2,
          },
        ],
      },
      {
        name: game.i18n.localize("BC.Sheet.Fields.Guts"),
        skills: [],
      },
      {
        name: game.i18n.localize("BC.Sheet.Fields.Knowledge"),
        skills: [],
      },
    ];

    return data;
  }
}
