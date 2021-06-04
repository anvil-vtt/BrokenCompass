import { evalDiceRoll } from "../../bc-rules/dice-rolling";

export class BCActorSheet extends ActorSheet {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["brokencompass", "sheet"],
      template: "systems/brokencompass/templates/actor/sheet.hbs",
    });
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.on("click", "[data-roll]", (e) => this._rollTheDice(e, this.actor));
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

  async _rollTheDice(e, actor) {
    const template = "systems/brokencompass/templates/chat/roll-result.hbs";

    const rollString = e.currentTarget.dataset.roll;
    if (!rollString) {
      return;
    }
    const roll = await new Roll(rollString).roll();
    const results = roll.terms[0] && roll.terms[0].results ? roll.terms[0].results : [];
    const dice = results.reduce((acc, curVal) => [...acc, curVal.result], []);
    const rollResult = evalDiceRoll(dice);

    const chatData = {
      user: game.user?._id,
      speaker: ChatMessage.getSpeaker({ actor }),
      type: CONST.CHAT_MESSAGE_TYPES.ROLL,
      sound: CONFIG.sounds.dice,
      roll: roll,
      rollMode: game.settings.get("core", "rollMode"),
      content: await renderTemplate(template, rollResult),

      flags: {
        templateVariables: rollResult,
      },
    };

    await ChatMessage.create(chatData);
  }
}
