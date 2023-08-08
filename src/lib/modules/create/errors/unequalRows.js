// @ts-nocheck

export default function unequalRows(obj) {
  let groups = [];

  for (const [key, value] of Object.entries(obj)) {
    groups.some((e) => e.value == value.split("\n").length)
      ? groups.find(e => e.value == value.split("\n").length).keys.push(key)
      : (groups.push({value: value.split("\n").length, keys: [key]}));
  }

  const key = checkMajority(groups);

  const majority = groups.filter((e) => e.value == key)
  let failed = []

  groups = groups.filter((e) => e.value != key)
  groups.forEach((e) => failed = [...failed, ...e.keys])

  return {
    result: "Failed",
    reason: "Unequal rows",
    code: 0,
    object: {
      majority: majority[0].keys,
      failed: failed
    }
  }
}

function checkMajority(groups) {
  let majority = [0, 0];

  Object.values(groups).forEach((obj) => {
    obj.keys.length > majority[1]
      ? (majority = [obj.value, obj.keys.length])
      : "";
  })

  return majority[0]
}
