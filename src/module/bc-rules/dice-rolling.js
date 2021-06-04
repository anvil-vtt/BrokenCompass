export function evalDiceRoll(dices = [], keepPairs = []) {
  const values = [...keepPairs, ...dices];
  const equals = countEquals(values);
  const successes = countSuccess(values);

  const restDice = [];
  const newKeepPairs = [];
  values.forEach((dice) => {
    if (equals[dice] >= 2) {
      newKeepPairs.push(dice);
    } else {
      restDice.push(dice);
    }
  });
  newKeepPairs.sort();

  return {
    roll: dices,
    pairsDice: newKeepPairs,
    restDice: restDice,
    successes,
    equals,
    hasGenerateSuccess: dices.length > restDice.length,
  };

  function countEquals(_values) {
    const count = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    _values.forEach((i) => (count[i] = (count[i] || 0) + 1));

    return count;
  }

  function countSuccess(_values) {
    const result = { basic: 0, critical: 0, extrem: 0, impossible: 0 };
    const _equals = countEquals(_values);

    for (const [, value] of Object.entries(_equals)) {
      if (value === 2) {
        result.basic++;
      } else if (value === 3) {
        result.critical++;
      } else if (value === 4) {
        result.extrem++;
      } else if (value >= 5) {
        result.impossible++;
      }
    }

    return result;
  }
}
