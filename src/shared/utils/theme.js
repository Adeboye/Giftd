const FONTBASE = {
  FAMILY: `Heebo`
};

const theme = {
  FONT: {
    REGULAR: FONTBASE.FAMILY,
    MEDIUM: `${FONTBASE.FAMILY}-Medium`,
    BLACK: `${FONTBASE.FAMILY}-Black`,
    BOLD: `${FONTBASE.FAMILY}-Bold`,
    SEMIBOLD: `${FONTBASE.FAMILY}-SemiBold`,
    EXTRABOLD: `${FONTBASE.FAMILY}-ExtraBold`,
    LIGHT: `${FONTBASE.FAMILY}-Light`,
    EXTRALIGHT: `${FONTBASE.FAMILY}-ExtraLight`,
    THIN: `${FONTBASE.FAMILY}-Thin`
  },
  FONT_WEIGHTS: {
    LIGHT: 100,
    REGULAR: 400,
    SEMI_BOLD: 600
  },
  FONT_SIZES: {
    BASE_SIZE: 16,
    BASE_UNIT: 'rem',
    get XLARGE() {
      return `${36 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get LARGE() {
      return `${24 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get MEDIUM() {
      return `${18 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get BASE() {
      return `${16 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get SMALL() {
      return `${14 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get XSMALL() {
      return `${12 / this.BASE_SIZE}${this.BASE_UNIT}`;
    },
    get XXSMALL() {
      return `${10 / this.BASE_SIZE}${this.BASE_UNIT}`;
    }
  }
};

export default theme;
