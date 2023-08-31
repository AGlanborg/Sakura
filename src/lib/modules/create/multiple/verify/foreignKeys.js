import filledValuesForeignKeys from "./arrays/filledValuesForeignKeys";

export default function verifyForeignKeys(saljare, kopare, arbetstyp) {
  filledValuesForeignKeys(saljare.rst, saljare.cop, saljare);
  filledValuesForeignKeys(kopare.rst, kopare.cop, kopare);
  filledValuesForeignKeys(
    arbetstyp.arbetstyp,
    arbetstyp.tillverkare,
    arbetstyp
  );
}