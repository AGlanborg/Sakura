// @ts-nocheck
export default function calculateMainValues(obj) {
  obj.inprisin = [];
  obj.oh = [];
  obj.totalt = [];
  obj.sek = [];
  obj.inpris = [];
  obj.perioder = [];
  obj.internfakt = [];
  obj.upfront = [];
  obj.rest = [];
  obj.intakt = [];
  obj.scan = [];

  for (let i = 0; i < Object.values(obj)[0].length; i += 1) {
    const start = obj.start[i].split("-");
    const slut = obj.slut[i].split("-");
    const now = obj.now[i].split("-");

    obj.inprisin[i] = parseFloat(
      Math.round(obj.inprisex[i] * 1.25 * 100) / 100
    ).toFixed(2);

    obj.oh[i] = parseFloat(
      Math.round(obj.inprisin[i] * (obj.procent[i] / 100) * 100) / 100
    ).toFixed(2);

    obj.totalt[i] = parseFloat(
      Math.round(
        parseInt(obj.mangd[i]) *
          (parseFloat(obj.inprisin[i]) + parseFloat(obj.oh[i])) *
          100
      ) / 100
    ).toFixed(2);

    obj.sek[i] = parseFloat(
      Math.round(obj.totalt[i] * (obj.valutakurs[i] || 0) * 100) / 100
    ).toFixed(2);

    obj.inpris[i] = Math.round(obj.totalt[i]);

    obj.perioder[i] =
      12 * (parseInt(slut[0]) - parseInt(start[0])) +
      parseInt(slut[1]) -
      parseInt(start[1]) +
      1;

    obj.internfakt[i] = Math.round(obj.totalt[i] / obj.perioder[i]);

    obj.upfront[i] =
      12 * (parseInt(now[0]) - parseInt(start[0])) +
      parseInt(now[1]) -
      parseInt(start[1]) +
      1;

    if (obj.upfront[i] < 0) {
      obj.upfront[i] = 0;
    } else if (obj.upfront > obj.perioder) {
      obj.upfront = obj.perioder
    }

    obj.rest[i] = obj.perioder[i] - obj.upfront[i];

    obj.intakt[i] =
      obj.upfront[i] * obj.internfakt[i] + obj.rest[i] * obj.internfakt[i];

    obj.scan[i] = obj.internfakt[i] * obj.perioder[i] - obj.inpris[i];
  }

  return obj;
}
