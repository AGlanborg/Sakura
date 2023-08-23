export let layoutsSingleForeignKeys = {
  saljare: {
    title: "Säljare",
    content: [
      {
        label: "RST nummer",
        column: "saljare_rst"
      },
      {
        label: "Copernicus nummer",
        column: "saljare_cop"
      },
      {
        label: "Kontaktperson",
        column: "saljare_kontakt"
      }
    ]
  },
  kopare: {
    title: "Köpare",
    content: [
      {
        label: "RST nummer",
        column: "kopare_rst"
      },
      {
        label: "Copernicus nummer",
        column: "kopare_cop"
      },
      {
        label: "Kontaktperson",
        column: "kopare_kontakt"
      }
    ]
  },
  arbetstyp: {
    title: "Arbetstyp",
    content: [
      {
        label: "Tillverkare",
        column: "arbetstyp_tillverkare"
      },
      {
        label: "Förkortning",
        column: "arbetstyp_arbetstyp"
      }
    ]
  }
}