import { chatDiceRoll } from "../../chat/chat-dice-roll";

export class BCActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["brokencompass", "sheet"],
      template: "systems/brokencompass/templates/actor/sheet.hbs",
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.on("click", "[data-roll]", this._rollTheDice.bind(this));
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

    data.numbers = [...Array(10).keys()];

    return data;
  }

  async _rollTheDice(e) {
    const rollString = e.currentTarget.dataset.roll;
    if (!rollString) {
      return;
    }

    await chatDiceRoll(rollString.split("d")[0], [], 0, this.actor);
  }
}
