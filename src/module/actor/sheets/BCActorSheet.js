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
    html.on("click", ".bc__ac__value-indicator span", this._onChangeValue.bind(this));
    html.on("click", ".bc__ac__i_feel__state span", this._onChangeFeelingValue.bind(this));
    html.on("click", ".bc__ac__dice-tray__coin_flip", this._onCoinFlip.bind(this));
    html.on("change", ".bc__ac__the_luck__count input", this._onChangeLuckValue.bind(this));
  }

  getData(options) {
    const data = super.getData(options);
    data.dice = [...Array(10).keys()].slice(2);
    data.luck = [...Array(Number(this.actor.system.luck.maxPoints) + 1).keys()].slice(1).map((i) => ({
      value: i,
      checked: i <= this.actor.system.luck.points ? "checked" : "",
    }));
    data.fields = this.getFieldsAndSkills();
    data.feelings = this.getFeelings();

    return data;
  }

  _onChangeValue(e) {
    e.preventDefault();

    const target = $(e.currentTarget);
    const value = target.data("value");
    const path = target.parent().data("path");

    this.actor.update({
      [path]: value,
    });
  }

  _onChangeFeelingValue(e) {
    e.preventDefault();
    const target = $(e.currentTarget);
    const path = target.data("path");
    const value = target.data("value");

    this.actor.update({
      [path]: value,
    });
  }

  _onChangeLuckValue(e) {
    e.preventDefault();

    const target = $(e.currentTarget);
    const value = target.data("value");
    if (Number(value) === 1 && this.actor.system.luck.points === 1) {
      this.actor.update({
        ["system.luck.points"]: 0,
      });
    } else {
      this.actor.update({
        ["system.luck.points"]: value,
      });
    }
  }

  async _onCoinFlip(e) {
    e.preventDefault();

    const { coins } = this.actor.system.luck;

    if (coins < 1) {
      return;
    }

    const roll = await new Roll(`1dc`).roll();
    const results = roll.terms[0] && roll.terms[0].results ? roll.terms[0].results : [];

    const chatData = {
      user: game.user?._id,
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      sound: CONFIG.sounds.dice,
      roll: roll,
      rollMode: game.settings.get("core", "rollMode"),
      content: "",
    };

    await ChatMessage.create(chatData);

    if (results.length && results[0].result < 1) {
      this.actor.update({
        ["system.luck.coins"]: coins - 1,
      });
    }
  }

  async _rollTheDice(e) {
    const rollString = e.currentTarget.dataset.roll;
    if (!rollString) {
      return;
    }

    await chatDiceRoll(rollString.split("d")[0], [], 0, this.actor);
  }

  /**
   * Returns a list of all fields and skills containing the name, label, path and value (1-3)
   */
  getFieldsAndSkills() {
    const fields = [
      { name: "action", skills: ["fight", "leadership", "stunt"] },
      { name: "guts", skills: ["cool", "drive", "shoot"] },
      { name: "knowledge", skills: ["culture", "firstAid", "tech"] },
      { name: "society", skills: ["charm", "eloquence", "observation"] },
      { name: "wild", skills: ["scout", "survival", "tough"] },
      { name: "crime", skills: ["alert", "dexterity", "stealth"] },
    ];

    return fields.map((field) => {
      const skills = field.skills.map((skill) => ({
        name: skill,
        value: this.actor.system.skills[skill],
        label: game.i18n.localize(`BC.Sheet.Skills.${this.capitalisation(skill)}`),
        path: `system.skills.${skill}`,
      }));

      return {
        name: field.name,
        value: this.actor.data.data.fields[field.name],
        label: game.i18n.localize(`BC.Sheet.Fields.${this.capitalisation(field.name)}`),
        skills: skills,
        path: `system.fields.${field.name}`,
      };
    });
  }

  getFeelings() {
    const feelings = [
      { name: "action", states: ["powerful", "bleeding"] },
      { name: "guts", states: ["daring", "shocked"] },
      { name: "knowledge", states: ["focused", "dizzy"] },
      { name: "society", states: ["confident", "embarrassed"] },
      { name: "wild", states: ["fierce", "broken"] },
      { name: "crime", states: ["untouchable", "scared"] },
    ];

    return feelings.map((i) => {
      return {
        field: game.i18n.localize(`BC.Sheet.Fields.${this.capitalisation(i.name)}`),
        good: {
          path: `system.feelings.${i.states[0]}`,
          value: this.actor.system.feelings[i.states[0]],
          name: game.i18n.localize(`BC.Sheet.Feelings.${this.capitalisation(i.states[0])}`),
        },
        bad: {
          path: `system.feelings.${i.states[1]}`,
          value: this.actor.system.feelings[i.states[1]],
          name: game.i18n.localize(`BC.Sheet.Feelings.${this.capitalisation(i.states[1])}`),
        },
      };
    });
  }

  capitalisation(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
