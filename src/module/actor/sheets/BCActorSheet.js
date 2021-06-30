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
    html.on("click", ".bs__value-indicator span", this._onChangeValue.bind(this));
  }

  getData(options) {
    const data = super.getData(options);

    data.dice = [...Array(10).keys()];
    data.fields = this.getFieldsAndSkills();

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
        value: this.actor.data.data.skills[skill],
        label: game.i18n.localize(`BC.Sheet.Skills.${skill.charAt(0).toUpperCase() + skill.slice(1)}`),
        path: `data.skills.${skill}`,
      }));

      return {
        name: field.name,
        value: this.actor.data.data.fields[field.name],
        label: game.i18n.localize(`BC.Sheet.Fields.${field.name.charAt(0).toUpperCase() + field.name.slice(1)}`),
        skills: skills,
        path: `data.fields.${field.name}`,
      };
    });
  }
}
