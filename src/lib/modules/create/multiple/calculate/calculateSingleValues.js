// @ts-nocheck
export default function calculateSingleValues(obj) {
  if (!obj.inprisex) {
    return obj
  }

  obj.inprisin = parseFloat(
    Math.round((obj.inprisex || 0) * 1.25 * 100) / 100
  ).toFixed(2);

  obj.oh = parseFloat(
    Math.round(obj.inprisin * ((obj.procent || 0) / 100) * 100) / 100
  ).toFixed(2);

  obj.totalt = parseFloat(
    Math.round(
      parseInt(obj.mangd || 0) *
        (parseFloat(obj.inprisin) + parseFloat(obj.oh)) *
        100
    ) / 100
  ).toFixed(2);

  obj.sek = parseFloat(
    Math.round(obj.totalt * (obj.valutakurs || 0) * 100) / 100
  ).toFixed(2);

  obj.inpris = Math.round(obj.totalt);

  try {
    obj = dates(obj)
  } catch {
    obj.perioder = ""
    obj.upfront = ""
    obj.rest = ""
    obj.internfakt = ""
    obj.intakt = ""
    obj.scan = ""
  }

  return obj;
}

function dates(obj) {
  const start = obj.start.split("-");
  const slut = obj.slut.split("-");
  const now = obj.now.split("-");

  obj.perioder =
    12 * (parseInt(slut[0]) - parseInt(start[0])) +
    parseInt(slut[1]) -
    parseInt(start[1]) +
    1;

  obj.upfront = 12 * (parseInt(now[0]) - parseInt(start[0])) + parseInt(now[1]) - parseInt(start[1]) + 1;

  if (obj.upfront < 0) {
    obj.upfront = 0;
  } else if (obj.upfront > obj.perioder) {
    obj.upfront = obj.perioder
  }

  obj.rest = obj.perioder - obj.upfront;

  obj.internfakt = Math.round(obj.totalt / obj.perioder);

  obj.intakt = obj.upfront * obj.internfakt + obj.rest * obj.internfakt;

  obj.scan = obj.internfakt * obj.perioder - obj.inpris;

  return obj
}
