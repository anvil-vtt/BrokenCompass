import { evalDiceRoll, reduceSuccess } from "../bc-rules/dice-rolling";

export async function chatDiceRoll(diceAmount, keepPairs, rollCount, actor, expertise = false) {
  console.log(`BrokenCompass | chatDiceRoll`, { diceAmount, keepPairs, rollCount, actor, expertise });

  const template = "systems/brokencompass/templates/chat/roll-result.hbs";

  const roll = await new Roll(`${diceAmount}d6`).roll();
  const results = roll.terms[0] && roll.terms[0].results ? roll.terms[0].results : [];
  const dice = results.reduce((acc, curVal) => [...acc, curVal.result], []);
  let rollResult = evalDiceRoll(dice, keepPairs, rollCount);

  if (rollCount === 1 && !rollResult.hasGenerateSuccess && !expertise) {
    console.log(`BrokenCompass | Loos one success `);

    rollResult = reduceSuccess(rollResult);
  }

  if (rollCount === 2 && !rollResult.hasGenerateSuccess) {
    console.log(`BrokenCompass | Loos all successes `);

    rollResult.successes.basic = 0;
    rollResult.successes.critical = 0;
    rollResult.successes.extrem = 0;
    rollResult.successes.impossible = 0;
  }

  const templateData = {
    ...rollResult,
    rollCount: rollCount + 1,
    actor: actor,
    useExpertise: rollResult.restDice.length && rollCount === 0,
    takeARisk: rollResult.restDice.length && rollCount === 0 && rollResult.hasGenerateSuccess,
    allIn: rollResult.restDice.length && rollCount === 1 && rollResult.hasGenerateSuccess,
  };
  const chatData = {
    user: game.user?._id,
    speaker: ChatMessage.getSpeaker({ actor }),
    type: CONST.CHAT_MESSAGE_TYPES.ROLL,
    sound: CONFIG.sounds.dice,
    roll: roll,
    rollMode: game.settings.get("core", "rollMode"),
    content: await renderTemplate(template, templateData),

    flags: {
      templateVariables: templateData,
    },
  };

  await ChatMessage.create(chatData);
}
