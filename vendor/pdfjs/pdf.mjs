Warning: truncated output (original token count: 202530)
Total output lines: 26779

/**
 * @licstart The following is the entire license notice for the
 * JavaScript code in this page
 *
 * Copyright 2024 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * JavaScript code in this page
 */

/**
 * pdfjsVersion = 5.6.205
 * pdfjsBuild = ada343803
 */
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// ./src/shared/util.js
const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
const FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
const LINE_FACTOR = 1.35;
const LINE_DESCENT_FACTOR = 0.35;
const BASELINE_FACTOR = LINE_DESCENT_FACTOR / LINE_FACTOR;
const RenderingIntentFlag = {
  ANY: 0x01,
  DISPLAY: 0x02,
  PRINT: 0x04,
  SAVE: 0x08,
  ANNOTATIONS_FORMS: 0x10,
  ANNOTATIONS_STORAGE: 0x20,
  ANNOTATIONS_DISABLE: 0x40,
  IS_EDITING: 0x80,
  OPLIST: 0x100
};
const AnnotationMode = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
};
const AnnotationEditorPrefix = "pdfjs_internal_editor_";
const AnnotationEditorType = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15,
  POPUP: 16,
  SIGNATURE: 101,
  COMMENT: 102
};
const AnnotationEditorParamsType = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_THICKNESS: 32,
  HIGHLIGHT_FREE: 33,
  HIGHLIGHT_SHOW_ALL: 34,
  DRAW_STEP: 41
};
const PermissionFlag = {
  PRINT: 0x04,
  MODIFY_CONTENTS: 0x08,
  COPY: 0x10,
  MODIFY_ANNOTATIONS: 0x20,
  FILL_INTERACTIVE_FORMS: 0x100,
  COPY_FOR_ACCESSIBILITY: 0x200,
  ASSEMBLE: 0x400,
  PRINT_HIGH_QUALITY: 0x800
};
const MeshFigureType = {
  TRIANGLES: 1,
  LATTICE: 2,
  PATCH: 3
};
const TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
const ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
const AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
const AnnotationReplyType = {
  GROUP: "Group",
  REPLY: "R"
};
const AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
const AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
const AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
const AnnotationActionEventType = {
  E: "Mouse Enter",
  X: "Mouse Exit",
  D: "Mouse Down",
  U: "Mouse Up",
  Fo: "Focus",
  Bl: "Blur",
  PO: "PageOpen",
  PC: "PageClose",
  PV: "PageVisible",
  PI: "PageInvisible",
  K: "Keystroke",
  F: "Format",
  V: "Validate",
  C: "Calculate"
};
const DocumentActionEventType = {
  WC: "WillClose",
  WS: "WillSave",
  DS: "DidSave",
  WP: "WillPrint",
  DP: "DidPrint"
};
const PageActionEventType = {
  O: "PageOpen",
  C: "PageClose"
};
const VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
const OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91,
  setStrokeTransparent: 92,
  setFillTransparent: 93,
  rawFillPath: 94
};
const DrawOPS = {
  moveTo: 0,
  lineTo: 1,
  curveTo: 2,
  quadraticCurveTo: 3,
  closePath: 4
};
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.info(`Info: ${msg}`);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.warn(`Warning: ${msg}`);
  }
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
function _isValidProtocol(url) {
  switch (url?.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl = null, options = null) {
  if (!url) {
    return null;
  }
  if (options && typeof url === "string") {
    if (options.addDefaultProtocol && url.startsWith("www.")) {
      const dots = url.match(/\./g);
      if (dots?.length >= 2) {
        url = `http://${url}`;
      }
    }
    if (options.tryConvertEncoding) {
      try {
        url = stringToUTF8String(url);
      } catch {}
    }
  }
  const absoluteUrl = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return _isValidProtocol(absoluteUrl) ? absoluteUrl : null;
}
function updateUrlHash(url, hash, allowRel = false) {
  const res = URL.parse(url);
  if (res) {
    res.hash = hash;
    return res.href;
  }
  if (allowRel && createValidAbsoluteUrl(url, "http://example.com")) {
    return url.split("#", 1)[0] + `${hash ? `#${hash}` : ""}`;
  }
  return "";
}
function stripPath(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
function shadow(obj, prop, value, nonSerializable = false) {
  Object.defineProperty(obj, prop, {
    value,
    enumerable: !nonSerializable,
    configurable: true,
    writable: false
  });
  return value;
}
const BaseException = function BaseExceptionClosure() {
  function BaseException(message, name) {
    this.message = message;
    this.name = name;
  }
  BaseException.prototype = new Error();
  BaseException.constructor = BaseException;
  return BaseException;
}();
class PasswordException extends BaseException {
  constructor(msg, code) {
    super(msg, "PasswordException");
    this.code = code;
  }
}
class UnknownErrorException extends BaseException {
  constructor(msg, details) {
    super(msg, "UnknownErrorException");
    this.details = details;
  }
}
class InvalidPDFException extends BaseException {
  constructor(msg) {
    super(msg, "InvalidPDFException");
  }
}
class ResponseException extends BaseException {
  constructor(msg, status, missing) {
    super(msg, "ResponseException");
    this.status = status;
    this.missing = missing;
  }
}
class FormatError extends BaseException {
  constructor(msg) {
    super(msg, "FormatError");
  }
}
class AbortException extends BaseException {
  constructor(msg) {
    super(msg, "AbortException");
  }
}
function bytesToString(bytes) {
  if (typeof bytes !== "object" || bytes?.length === undefined) {
    unreachable("Invalid argument for bytesToString");
  }
  const length = bytes.length;
  const MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  const strBuf = [];
  for (let i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    const chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    const chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join("");
}
function stringToBytes(str) {
  if (typeof str !== "string") {
    unreachable("Invalid argument for stringToBytes");
  }
  const length = str.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xff;
  }
  return bytes;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function objectSize(obj) {
  return Object.keys(obj).length;
}
function isLittleEndian() {
  const buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  const view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function("");
    return true;
  } catch {
    return false;
  }
}
class FeatureTest {
  static get isLittleEndian() {
    return shadow(this, "isLittleEndian", isLittleEndian());
  }
  static get isEvalSupported() {
    return shadow(this, "isEvalSupported", isEvalSupported());
  }
  static get isOffscreenCanvasSupported() {
    return shadow(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas !== "undefined");
  }
  static get isImageDecoderSupported() {
    return shadow(this, "isImageDecoderSupported", typeof ImageDecoder !== "undefined");
  }
  static get isFloat16ArraySupported() {
    return shadow(this, "isFloat16ArraySupported", typeof Float16Array !== "undefined");
  }
  static get isSanitizerSupported() {
    return shadow(this, "isSanitizerSupported", typeof Sanitizer !== "undefined");
  }
  static get platform() {
    const {
      platform,
      userAgent
    } = navigator;
    return shadow(this, "platform", {
      isAndroid: userAgent.includes("Android"),
      isLinux: platform.includes("Linux"),
      isMac: platform.includes("Mac"),
      isWindows: platform.includes("Win"),
      isFirefox: userAgent.includes("Firefox")
    });
  }
  static get isCSSRoundSupported() {
    return shadow(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
  }
}
const hexNumbers = Array.from(Array(256).keys(), n => n.toString(16).padStart(2, "0"));
class Util {
  static makeHexColor(r, g, b) {
    return `#${hexNumbers[r]}${hexNumbers[g]}${hexNumbers[b]}`;
  }
  static domMatrixToTransform(dm) {
    return [dm.a, dm.b, dm.c, dm.d, dm.e, dm.f];
  }
  static scaleMinMax(transform, minMax) {
    let temp;
    if (transform[0]) {
      if (transform[0] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[0];
      minMax[2] *= transform[0];
      if (transform[3] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[3];
      minMax[3] *= transform[3];
    } else {
      temp = minMax[0];
      minMax[0] = minMax[1];
      minMax[1] = temp;
      temp = minMax[2];
      minMax[2] = minMax[3];
      minMax[3] = temp;
      if (transform[1] < 0) {
        temp = minMax[1];
        minMax[1] = minMax[3];
        minMax[3] = temp;
      }
      minMax[1] *= transform[1];
      minMax[3] *= transform[1];
      if (transform[2] < 0) {
        temp = minMax[0];
        minMax[0] = minMax[2];
        minMax[2] = temp;
      }
      minMax[0] *= transform[2];
      minMax[2] *= transform[2];
    }
    minMax[0] += transform[4];
    minMax[1] += transform[5];
    minMax[2] += transform[4];
    minMax[3] += transform[5];
  }
  static transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  }
  static multiplyByDOMMatrix(m, md) {
    return [m[0] * md.a + m[2] * md.b, m[1] * md.a + m[3] * md.b, m[0] * md.c + m[2] * md.d, m[1] * md.c + m[3] * md.d, m[0] * md.e + m[2] * md.f + m[4], m[1] * md.e + m[3] * md.f + m[5]];
  }
  static applyTransform(p, m, pos = 0) {
    const p0 = p[pos];
    const p1 = p[pos + 1];
    p[pos] = p0 * m[0] + p1 * m[2] + m[4];
    p[pos + 1] = p0 * m[1] + p1 * m[3] + m[5];
  }
  static applyTransformToBezier(p, transform, pos = 0) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    for (let i = 0; i < 6; i += 2) {
      const pI = p[pos + i];
      const pI1 = p[pos + i + 1];
      p[pos + i] = pI * m0 + pI1 * m2 + m4;
      p[pos + i + 1] = pI * m1 + pI1 * m3 + m5;
    }
  }
  static applyInverseTransform(p, m) {
    const p0 = p[0];
    const p1 = p[1];
    const d = m[0] * m[3] - m[1] * m[2];
    p[0] = (p0 * m[3] - p1 * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    p[1] = (-p0 * m[1] + p1 * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
  }
  static axialAlignedBoundingBox(rect, transform, output) {
    const m0 = transform[0];
    const m1 = transform[1];
    const m2 = transform[2];
    const m3 = transform[3];
    const m4 = transform[4];
    const m5 = transform[5];
    const r0 = rect[0];
    const r1 = rect[1];
    const r2 = rect[2];
    const r3 = rect[3];
    let a0 = m0 * r0 + m4;
    let a2 = a0;
    let a1 = m0 * r2 + m4;
    let a3 = a1;
    let b0 = m3 * r1 + m5;
    let b2 = b0;
    let b1 = m3 * r3 + m5;
    let b3 = b1;
    if (m1 !== 0 || m2 !== 0) {
      const m1r0 = m1 * r0;
      const m1r2 = m1 * r2;
      const m2r1 = m2 * r1;
      const m2r3 = m2 * r3;
      a0 += m2r1;
      a3 += m2r1;
      a1 += m2r3;
      a2 += m2r3;
      b0 += m1r0;
      b3 += m1r0;
      b1 += m1r2;
      b2 += m1r2;
    }
    output[0] = Math.min(output[0], a0, a1, a2, a3);
    output[1] = Math.min(output[1], b0, b1, b2, b3);
    output[2] = Math.max(output[2], a0, a1, a2, a3);
    output[3] = Math.max(output[3], b0, b1, b2, b3);
  }
  static inverseTransform(m) {
    const d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  }
  static singularValueDecompose2dScale(matrix, output) {
    const m0 = matrix[0];
    const m1 = matrix[1];
    const m2 = matrix[2];
    const m3 = matrix[3];
    const a = m0 ** 2 + m1 ** 2;
    const b = m0 * m2 + m1 * m3;
    const c = m2 ** 2 + m3 ** 2;
    const first = (a + c) / 2;
    const second = Math.sqrt(first ** 2 - (a * c - b ** 2));
    output[0] = Math.sqrt(first + second || 1);
    output[1] = Math.sqrt(first - second || 1);
  }
  static normalizeRect(rect) {
    const r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  }
  static intersect(rect1, rect2) {
    const xLow = Math.max(Math.min(rect1[0], rect1[2]), Math.min(rect2[0], rect2[2]));
    const xHigh = Math.min(Math.max(rect1[0], rect1[2]), Math.max(rect2[0], rect2[2]));
    if (xLow > xHigh) {
      return null;
    }
    const yLow = Math.max(Math.min(rect1[1], rect1[3]), Math.min(rect2[1], rect2[3]));
    const yHigh = Math.min(Math.max(rect1[1], rect1[3]), Math.max(rect2[1], rect2[3]));
    if (yLow > yHigh) {
      return null;
    }
    return [xLow, yLow, xHigh, yHigh];
  }
  static pointBoundingBox(x, y, minMax) {
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static rectBoundingBox(x0, y0, x1, y1, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x1);
    minMax[1] = Math.min(minMax[1], y0, y1);
    minMax[2] = Math.max(minMax[2], x0, x1);
    minMax[3] = Math.max(minMax[3], y0, y1);
  }
  static #getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, t, minMax) {
    if (t <= 0 || t >= 1) {
      return;
    }
    const mt = 1 - t;
    const tt = t * t;
    const ttt = tt * t;
    const x = mt * (mt * (mt * x0 + 3 * t * x1) + 3 * tt * x2) + ttt * x3;
    const y = mt * (mt * (mt * y0 + 3 * t * y1) + 3 * tt * y2) + ttt * y3;
    minMax[0] = Math.min(minMax[0], x);
    minMax[1] = Math.min(minMax[1], y);
    minMax[2] = Math.max(minMax[2], x);
    minMax[3] = Math.max(minMax[3], y);
  }
  static #getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, a, b, c, minMax) {
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) >= 1e-12) {
        this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, -c / b, minMax);
      }
      return;
    }
    const delta = b ** 2 - 4 * c * a;
    if (delta < 0) {
      return;
    }
    const sqrtDelta = Math.sqrt(delta);
    const a2 = 2 * a;
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b + sqrtDelta) / a2, minMax);
    this.#getExtremumOnCurve(x0, x1, x2, x3, y0, y1, y2, y3, (-b - sqrtDelta) / a2, minMax);
  }
  static bezierBoundingBox(x0, y0, x1, y1, x2, y2, x3, y3, minMax) {
    minMax[0] = Math.min(minMax[0], x0, x3);
    minMax[1] = Math.min(minMax[1], y0, y3);
    minMax[2] = Math.max(minMax[2], x0, x3);
    minMax[3] = Math.max(minMax[3], y0, y3);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-x0 + 3 * (x1 - x2) + x3), 6 * (x0 - 2 * x1 + x2), 3 * (x1 - x0), minMax);
    this.#getExtremum(x0, x1, x2, x3, y0, y1, y2, y3, 3 * (-y0 + 3 * (y1 - y2) + y3), 6 * (y0 - 2 * y1 + y2), 3 * (y1 - y0), minMax);
  }
}
const PDFStringTranslateTable = (/* unused pure expression or super */ null && ([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2d8, 0x2c7, 0x2c6, 0x2d9, 0x2dd, 0x2db, 0x2da, 0x2dc, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203a, 0x2212, 0x2030, 0x201e, 0x201c, 0x201d, 0x2018, 0x2019, 0x201a, 0x2122, 0xfb01, 0xfb02, 0x141, 0x152, 0x160, 0x178, 0x17d, 0x131, 0x142, 0x153, 0x161, 0x17e, 0, 0x20ac]));
function stringToPDFString(str, keepEscapeSequence = false) {
  if (str[0] >= "\xEF") {
    let encoding;
    if (str[0] === "\xFE" && str[1] === "\xFF") {
      encoding = "utf-16be";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xFF" && str[1] === "\xFE") {
      encoding = "utf-16le";
      if (str.length % 2 === 1) {
        str = str.slice(0, -1);
      }
    } else if (str[0] === "\xEF" && str[1] === "\xBB" && str[2] === "\xBF") {
      encoding = "utf-8";
    }
    if (encoding) {
      try {
        const decoder = new TextDecoder(encoding, {
          fatal: true
        });
        const buffer = stringToBytes(str);
        const decoded = decoder.decode(buffer);
        if (keepEscapeSequence || !decoded.includes("\x1b")) {
          return decoded;
        }
        return decoded.replaceAll(/\x1b[^\x1b]*(?:\x1b|$)/g, "");
      } catch (ex) {
        warn(`stringToPDFString: "${ex}".`);
      }
    }
  }
  const strBuf = [];
  for (let i = 0, ii = str.length; i < ii; i++) {
    const charCode = str.charCodeAt(i);
    if (!keepEscapeSequence && charCode === 0x1b) {
      while (++i < ii && str.charCodeAt(i) !== 0x1b) {}
      continue;
    }
    const code = PDFStringTranslateTable[charCode];
    strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
  }
  return strBuf.join("");
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isArrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0, ii = arr1.length; i < ii; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
function getModificationDate(date = new Date()) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
  return buffer.join("");
}
let NormalizeRegex = null;
let NormalizationMap = null;
function normalizeUnicode(str) {
  if (!NormalizeRegex) {
    NormalizeRegex = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu;
    NormalizationMap = new Map([["ﬅ", "ſt"]]);
  }
  return str.replaceAll(NormalizeRegex, (_, p1, p2) => p1 ? p1.normalize("NFKC") : NormalizationMap.get(p2));
}
function getUuid() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  const buf = new Uint8Array(32);
  crypto.getRandomValues(buf);
  return bytesToString(buf);
}
const AnnotationPrefix = "pdfjs_internal_id_";
function _isValidExplicitDest(validRef, validName, dest) {
  if (!Array.isArray(dest) || dest.length < 2) {
    return false;
  }
  const [page, zoom, ...args] = dest;
  if (!validRef(page) && !Number.isInteger(page)) {
    return false;
  }
  if (!validName(zoom)) {
    return false;
  }
  const argsLen = args.length;
  let allowNull = true;
  switch (zoom.name) {
    case "XYZ":
      if (argsLen < 2 || argsLen > 3) {
        return false;
      }
      break;
    case "Fit":
    case "FitB":
      return argsLen === 0;
    case "FitH":
    case "FitBH":
    case "FitV":
    case "FitBV":
      if (argsLen > 1) {
        return false;
      }
      break;
    case "FitR":
      if (argsLen !== 4) {
        return false;
      }
      allowNull = false;
      break;
    default:
      return false;
  }
  for (const arg of args) {
    if (typeof arg === "number" || allowNull && arg === null) {
      continue;
    }
    return false;
  }
  return true;
}
const makeArr = () => [];
const makeMap = () => new Map();
const makeObj = () => Object.create(null);
function MathClamp(v, min, max) {
  return Math.min(Math.max(v, min), max);
}
if (typeof Math.sumPrecise !== "function") {
  Math.sumPrecise = function (numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  };
}

;// ./src/display/xfa_text.js
class XfaText {
  static textContent(xfa) {
    const items = [];
    const output = {
      items,
      styles: Object.create(null)
    };
    function walk(node) {
      if (!node) {
        return;
      }
      let str = null;
      const name = node.name;
      if (name === "#text") {
        str = node.value;
      } else if (!XfaText.shouldBuildText(name)) {
        return;
      } else if (node?.attributes?.textContent) {
        str = node.attributes.textContent;
      } else if (node.value) {
        str = node.value;
      }
      if (str !== null) {
        items.push({
          str
        });
      }
      if (!node.children) {
        return;
      }
      for (const child of node.children) {
        walk(child);
      }
    }
    walk(xfa);
    return output;
  }
  static shouldBuildText(name) {
    return !(name === "textarea" || name === "input" || name === "option" || name === "select");
  }
}

;// ./src/display/xfa_layer.js

class XfaLayer {
  static setupStorage(html, id, element, storage, intent) {
    const storedData = storage.getValue(id, {
      value: null
    });
    switch (element.name) {
      case "textarea":
        if (storedData.value !== null) {
          html.textContent = storedData.value;
        }
        if (intent === "print") {
          break;
        }
        html.addEventListener("input", event => {
          storage.setValue(id, {
            value: event.target.value
          });
        });
        break;
      case "input":
        if (element.attributes.type === "radio" || element.attributes.type === "checkbox") {
          if (storedData.value === element.attributes.xfaOn) {
            html.setAttribute("checked", true);
          } else if (storedData.value === element.attributes.xfaOff) {
            html.removeAttribute("checked");
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("change", event => {
            storage.setValue(id, {
              value: event.target.checked ? event.target.getAttribute("xfaOn") : event.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (storedData.value !== null) {
            html.setAttribute("value", storedData.value);
          }
          if (intent === "print") {
            break;
          }
          html.addEventListener("input", event => {
            storage.setValue(id, {
              value: event.target.value
            });
          });
        }
        break;
      case "select":
        if (storedData.value !== null) {
          html.setAttribute("value", storedData.value);
          for (const option of element.children) {
            if (option.attributes.value === storedData.value) {
              option.attributes.selected = true;
            } else if (option.attributes.hasOwnProperty("selected")) {
              delete option.attributes.selected;
            }
          }
        }
        html.addEventListener("input", event => {
          const options = event.target.options;
          const value = options.selectedIndex === -1 ? "" : options[options.selectedIndex].value;
          storage.setValue(id, {
            value
          });
        });
        break;
    }
  }
  static setAttributes({
    html,
    element,
    storage = null,
    intent,
    linkService
  }) {
    const {
      attributes
    } = element;
    const isHTMLAnchorElement = html instanceof HTMLAnchorElement;
    if (attributes.type === "radio") {
      attributes.name = `${attributes.name}-${intent}`;
    }
    for (const [key, value] of Object.entries(attributes)) {
      if (value === null || value === undefined) {
        continue;
      }
      switch (key) {
        case "class":
          if (value.length) {
            html.setAttribute(key, value.join(" "));
          }
          break;
        case "dataId":
          break;
        case "id":
          html.setAttribute("data-element-id", value);
          break;
        case "style":
          Object.assign(html.style, value);
          break;
        case "textContent":
          html.textContent = value;
          break;
        default:
          if (!isHTMLAnchorElement || key !== "href" && key !== "newWindow") {
            html.setAttribute(key, value);
          }
      }
    }
    if (isHTMLAnchorElement) {
      linkService.addLinkAttributes(html, attributes.href, attributes.newWindow);
    }
    if (storage && attributes.dataId) {
      this.setupStorage(html, attributes.dataId, element, storage);
    }
  }
  static render(parameters) {
    const storage = parameters.annotationStorage;
    const linkService = parameters.linkService;
    const root = parameters.xfaHtml;
    const intent = parameters.intent || "display";
    const rootHtml = document.createElement(root.name);
    if (root.attributes) {
      this.setAttributes({
        html: rootHtml,
        element: root,
        intent,
        linkService
      });
    }
    const isNotForRichText = intent !== "richText";
    const rootDiv = parameters.div;
    rootDiv.append(rootHtml);
    if (parameters.viewport) {
      const transform = `matrix(${parameters.viewport.transform.join(",")})`;
      rootDiv.style.transform = transform;
    }
    if (isNotForRichText) {
      rootDiv.setAttribute("class", "xfaLayer xfaFont");
    }
    const textDivs = [];
    if (root.children.length === 0) {
      if (root.value) {
        const node = document.createTextNode(root.value);
        rootHtml.append(node);
        if (isNotForRichText && XfaText.shouldBuildText(root.name)) {
          textDivs.push(node);
        }
      }
      return {
        textDivs
      };
    }
    const stack = [[root, -1, rootHtml]];
    while (stack.length > 0) {
      const [parent, i, html] = stack.at(-1);
      if (i + 1 === parent.children.length) {
        stack.pop();
        continue;
      }
      const child = parent.children[++stack.at(-1)[1]];
      if (child === null) {
        continue;
      }
      const {
        name
      } = child;
      if (name === "#text") {
        const node = document.createTextNode(child.value);
        textDivs.push(node);
        html.append(node);
        continue;
      }
      const childHtml = child?.attributes?.xmlns ? document.createElementNS(child.attributes.xmlns, name) : document.createElement(name);
      html.append(childHtml);
      if (child.attributes) {
        this.setAttributes({
          html: childHtml,
          element: child,
          storage,
          intent,
          linkService
        });
      }
      if (child.children?.length > 0) {
        stack.push([child, -1, childHtml]);
      } else if (child.value) {
        const node = document.createTextNode(child.value);
        if (isNotForRichText && XfaText.shouldBuildText(name)) {
          textDivs.push(node);
        }
        childHtml.append(node);
      }
    }
    for (const el of rootDiv.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea")) {
      el.setAttribute("readOnly", true);
    }
    return {
      textDivs
    };
  }
  static update(parameters) {
    const transform = `matrix(${parameters.viewport.transform.join(",")})`;
    parameters.div.style.transform = transform;
    parameters.div.hidden = false;
  }
}

;// ./src/display/display_utils.js


const SVG_NS = "http://www.w3.org/2000/svg";
class PixelsPerInch {
  static CSS = 96.0;
  static PDF = 72.0;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function fetchData(url, type = "text") {
  if (isValidFetchUrl(url, document.baseURI)) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    switch (type) {
      case "blob":
        return response.blob();
      case "bytes":
        return response.bytes();
      case "json":
        return response.json();
    }
    return response.text();
  }
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = type === "bytes" ? "arraybuffer" : type;
    request.onreadystatechange = () => {
      if (request.readyState !== XMLHttpRequest.DONE) {
        return;
      }
      if (request.status === 200 || request.status === 0) {
        switch (type) {
          case "bytes":
            resolve(new Uint8Array(request.response));
            return;
          case "blob":
          case "json":
            resolve(request.response);
            return;
        }
        resolve(request.responseText);
        return;
      }
      reject(new Error(request.statusText));
    };
    request.send(null);
  });
}
class PageViewport {
  constructor({
    viewBox,
    userUnit,
    scale,
    rotation,
    offsetX = 0,
    offsetY = 0,
    dontFlip = false
  }) {
    this.viewBox = viewBox;
    this.userUnit = userUnit;
    this.scale = scale;
    this.rotation = rotation;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    scale *= userUnit;
    const centerX = (viewBox[2] + viewBox[0]) / 2;
    const centerY = (viewBox[3] + viewBox[1]) / 2;
    let rotateA, rotateB, rotateC, rotateD;
    rotation %= 360;
    if (rotation < 0) {
      rotation += 360;
    }
    switch (rotation) {
      case 180:
        rotateA = -1;
        rotateB = 0;
        rotateC = 0;
        rotateD = 1;
        break;
      case 90:
        rotateA = 0;
        rotateB = 1;
        rotateC = 1;
        rotateD = 0;
        break;
      case 270:
        rotateA = 0;
        rotateB = -1;
        rotateC = -1;
        rotateD = 0;
        break;
      case 0:
        rotateA = 1;
        rotateB = 0;
        rotateC = 0;
        rotateD = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    if (dontFlip) {
      rotateC = -rotateC;
      rotateD = -rotateD;
    }
    let offsetCanvasX, offsetCanvasY;
    let width, height;
    if (rotateA === 0) {
      offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
      width = (viewBox[3] - viewBox[1]) * scale;
      height = (viewBox[2] - viewBox[0]) * scale;
    } else {
      offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
      offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
      width = (viewBox[2] - viewBox[0]) * scale;
      height = (viewBox[3] - viewBox[1]) * scale;
    }
    this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
    this.width = width;
    this.height = height;
  }
  get rawDims() {
    const dims = this.viewBox;
    return shadow(this, "rawDims", {
      pageWidth: dims[2] - dims[0],
      pageHeight: dims[3] - dims[1],
      pageX: dims[0],
      pageY: dims[1]
    });
  }
  clone({
    scale = this.scale,
    rotation = this.rotation,
    offsetX = this.offsetX,
    offsetY = this.offsetY,
    dontFlip = false
  } = {}) {
    return new PageViewport({
      viewBox: this.viewBox.slice(),
      userUnit: this.userUnit,
      scale,
      rotation,
      offsetX,
      offsetY,
      dontFlip
    });
  }
  convertToViewportPoint(x, y) {
    const p = [x, y];
    Util.applyTransform(p, this.transform);
    return p;
  }
  convertToViewportRectangle(rect) {
    const topLeft = [rect[0], rect[1]];
    Util.applyTransform(topLeft, this.transform);
    const bottomRight = [rect[2], rect[3]];
    Util.applyTransform(bottomRight, this.transform);
    return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
  }
  convertToPdfPoint(x, y) {
    const p = [x, y];
    Util.applyInverseTransform(p, this.transform);
    return p;
  }
}
class RenderingCancelledException extends BaseException {
  constructor(msg, extraDelay = 0) {
    super(msg, "RenderingCancelledException");
    this.extraDelay = extraDelay;
  }
}
function isDataScheme(url) {
  const ii = url.length;
  let i = 0;
  while (i < ii && url[i].trim() === "") {
    i++;
  }
  return url.substring(i, i + 5).toLowerCase() === "data:";
}
function isPdfFile(filename) {
  return typeof filename === "string" && /\.pdf$/i.test(filename);
}
function getFilenameFromUrl(url) {
  [url] = url.split(/[#?]/, 1);
  return stripPath(url);
}
function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
  if (typeof url !== "string") {
    return defaultFilename;
  }
  if (isDataScheme(url)) {
    warn('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
    return defaultFilename;
  }
  const getURL = urlString => {
    try {
      return new URL(urlString);
    } catch {
      try {
        return new URL(decodeURIComponent(urlString));
      } catch {
        try {
          return new URL(urlString, "https://foo.bar");
        } catch {
          try {
            return new URL(decodeURIComponent(urlString), "https://foo.bar");
          } catch {
            return null;
          }
        }
      }
    }
  };
  const newURL = getURL(url);
  if (!newURL) {
    return defaultFilename;
  }
  const decode = name => {
    try {
      let decoded = decodeURIComponent(name);
      if (decoded.includes("/")) {
        decoded = stripPath(decoded);
        if (/^\.pdf$/i.test(decoded)) {
          return name;
        }
      }
      return decoded;
    } catch {
      return name;
    }
  };
  const pdfRegex = /\.pdf$/i;
  const filename = stripPath(newURL.pathname);
  if (pdfRegex.test(filename)) {
    return decode(filename);
  }
  if (newURL.searchParams.size > 0) {
    const getLast = iterator => [...iterator].findLast(v => pdfRegex.test(v));
    const name = getLast(newURL.searchParams.values()) ?? getLast(newURL.searchParams.keys());
    if (name) {
      return decode(name);
    }
  }
  if (newURL.hash) {
    const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
    const hashFilename = reFilename.exec(newURL.hash);
    if (hashFilename) {
      return decode(hashFilename[0]);
    }
  }
  return defaultFilename;
}
class StatTimer {
  #started = new Map();
  times = [];
  time(name) {
    if (this.#started.has(name)) {
      warn(`Timer is already running for ${name}`);
    }
    this.#started.set(name, Date.now());
  }
  timeEnd(name) {
    if (!this.#started.has(name)) {
      warn(`Timer has not been started for ${name}`);
    }
    this.times.push({
      name,
      start: this.#started.get(name),
      end: Date.now()
    });
    this.#started.delete(name);
  }
  toString() {
    const longest = Math.max(...this.times.map(t => t.name.length));
    return this.times.map(t => `${t.name.padEnd(longest)} ${t.end - t.start}ms\n`).join("");
  }
}
function isValidFetchUrl(url, baseUrl) {
  const res = baseUrl ? URL.parse(url, baseUrl) : URL.parse(url);
  return /https?:/.test(res?.protocol ?? "");
}
function noContextMenu(e) {
  e.preventDefault();
}
function stopEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}
function deprecated(details) {
  console.log("Deprecated API usage: " + details);
}
class PDFDateString {
  static #regex;
  static toDateObject(input) {
    if (input instanceof Date) {
      return input;
    }
    if (!input || typeof input !== "string") {
      return null;
    }
    this.#regex ||= new RegExp("^D:" + "(\\d{4})" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "(\\d{2})?" + "([Z|+|-])?" + "(\\d{2})?" + "'?" + "(\\d{2})?" + "'?");
    const matches = this.#regex.exec(input);
    if (!matches) {
      return null;
    }
    const year = parseInt(matches[1], 10);
    let month = parseInt(matches[2], 10);
    month = month >= 1 && month <= 12 ? month - 1 : 0;
    let day = parseInt(matches[3], 10);
    day = day >= 1 && day <= 31 ? day : 1;
    let hour = parseInt(matches[4], 10);
    hour = hour >= 0 && hour <= 23 ? hour : 0;
    let minute = parseInt(matches[5], 10);
    minute = minute >= 0 && minute <= 59 ? minute : 0;
    let second = parseInt(matches[6], 10);
    second = second >= 0 && second <= 59 ? second : 0;
    const universalTimeRelation = matches[7] || "Z";
    let offsetHour = parseInt(matches[8], 10);
    offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
    let offsetMinute = parseInt(matches[9], 10) || 0;
    offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
    if (universalTimeRelation === "-") {
      hour += offsetHour;
      minute += offsetMinute;
    } else if (universalTimeRelation === "+") {
      hour -= offsetHour;
      minute -= offsetMinute;
    }
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
}
function getXfaPageViewport(xfaPage, {
  scale = 1,
  rotation = 0
}) {
  const {
    width,
    height
  } = xfaPage.attributes.style;
  const viewBox = [0, 0, parseInt(width), parseInt(height)];
  return new PageViewport({
    viewBox,
    userUnit: 1,
    scale,
    rotation
  });
}
function getRGB(color) {
  if (color.startsWith("#")) {
    const colorRGB = parseInt(color.slice(1), 16);
    return [(colorRGB & 0xff0000) >> 16, (colorRGB & 0x00ff00) >> 8, colorRGB & 0x0000ff];
  }
  if (color.startsWith("rgb(")) {
    return color.slice(4, -1).split(",").map(x => parseInt(x));
  }
  if (color.startsWith("rgba(")) {
    return color.slice(5, -1).split(",", 3).map(x => parseInt(x));
  }
  warn(`Not a valid color format: "${color}"`);
  return [0, 0, 0];
}
function getColorValues(colors) {
  const span = document.createElement("span");
  span.style.visibility = "hidden";
  span.style.colorScheme = "only light";
  document.body.append(span);
  for (const name of colors.keys()) {
    span.style.color = name;
    const computedColor = window.getComputedStyle(span).color;
    colors.set(name, getRGB(computedColor));
  }
  span.remove();
}
function getCurrentTransform(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform();
  return [a, b, c, d, e, f];
}
function getCurrentTransformInverse(ctx) {
  const {
    a,
    b,
    c,
    d,
    e,
    f
  } = ctx.getTransform().invertSelf();
  return [a, b, c, d, e, f];
}
function setLayerDimensions(div, viewport, mustFlip = false, mustRotate = true) {
  if (viewport instanceof PageViewport) {
    const {
      pageWidth,
      pageHeight
    } = viewport.rawDims;
    const {
      style
    } = div;
    const useRound = FeatureTest.isCSSRoundSupported;
    const w = `var(--total-scale-factor) * ${pageWidth}px`,
      h = `var(--total-scale-factor) * ${pageHeight}px`;
    const widthStr = useRound ? `round(down, ${w}, var(--scale-round-x))` : `calc(${w})`,
      heightStr = useRound ? `round(down, ${h}, var(--scale-round-y))` : `calc(${h})`;
    if (!mustFlip || viewport.rotation % 180 === 0) {
      style.width = widthStr;
      style.height = heightStr;
    } else {
      style.width = heightStr;
      style.height = widthStr;
    }
  }
  if (mustRotate) {
    div.setAttribute("data-main-rotation", viewport.rotation);
  }
}
class OutputScale {
  constructor() {
    const {
      pixelRatio
    } = OutputScale;
    this.sx = pixelRatio;
    this.sy = pixelRatio;
  }
  get scaled() {
    return this.sx !== 1 || this.sy !== 1;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
  limitCanvas(width, height, maxPixels, maxDim, capAreaFactor = -1) {
    let maxAreaScale = Infinity,
      maxWidthScale = Infinity,
      maxHeightScale = Infinity;
    maxPixels = OutputScale.capPixels(maxPixels, capAreaFactor);
    if (maxPixels > 0) {
      maxAreaScale = Math.sqrt(maxPixels / (width * height));
    }
    if (maxDim !== -1) {
      maxWidthScale = maxDim / width;
      maxHeightScale = maxDim / height;
    }
    const maxScale = Math.min(maxAreaScale, maxWidthScale, maxHeightScale);
    if (this.sx > maxScale || this.sy > maxScale) {
      this.sx = maxScale;
      this.sy = maxScale;
      return true;
    }
    return false;
  }
  static get pixelRatio() {
    return globalThis.devicePixelRatio || 1;
  }
  static capPixels(maxPixels, capAreaFactor) {
    if (capAreaFactor >= 0) {
      const winPixels = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + capAreaFactor / 100));
      return maxPixels > 0 ? Math.min(maxPixels, winPixels) : winPixels;
    }
    return maxPixels;
  }
}
const SupportedImageMimeTypes = ["image/apng", "image/avif", "image/bmp", "image/gif", "image/jpeg", "image/png", "image/svg+xml", "image/webp", "image/x-icon"];
class ColorScheme {
  static get isDarkMode() {
    return shadow(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }
}
class CSSConstants {
  static get commentForegroundColor() {
    const element = document.createElement("span");
    element.classList.add("comment", "sidebar");
    const {
      style
    } = element;
    style.width = style.height = "0";
    style.display = "none";
    style.color = "var(--comment-fg-color)";
    document.body.append(element);
    const {
      color
    } = window.getComputedStyle(element);
    element.remove();
    return shadow(this, "commentForegroundColor", getRGB(color));
  }
}
function applyOpacity(color, opacity) {
  opacity = MathClamp(opacity ?? 1, 0, 1);
  const white = 255 * (1 - opacity);
  return color.map(c => Math.round(c * opacity + white));
}
function RGBToHSL(rgb, output) {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) {
    output[0] = output[1] = 0;
  } else {
    const d = max - min;
    output[1] = l < 0.5 ? d / (max + min) : d / (2 - max - min);
    switch (max) {
      case r:
        output[0] = ((g - b) / d + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        output[0] = ((b - r) / d + 2) * 60;
        break;
      case b:
        output[0] = ((r - g) / d + 4) * 60;
        break;
    }
  }
  output[2] = l;
}
function HSLToRGB(hsl, output) {
  const h = hsl[0];
  const s = hsl[1];
  const l = hsl[2];
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  switch (Math.floor(h / 60)) {
    case 0:
      output[0] = c + m;
      output[1] = x + m;
      output[2] = m;
      break;
    case 1:
      output[0] = x + m;
      output[1] = c + m;
      output[2] = m;
      break;
    case 2:
      output[0] = m;
      output[1] = c + m;
      output[2] = x + m;
      break;
    case 3:
      output[0] = m;
      output[1] = x + m;
      output[2] = c + m;
      break;
    case 4:
      output[0] = x + m;
      output[1] = m;
      output[2] = c + m;
      break;
    case 5:
    case 6:
      output[0] = c + m;
      output[1] = m;
      output[2] = x + m;
      break;
  }
}
function computeLuminance(x) {
  return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
}
function contrastRatio(hsl1, hsl2, output) {
  HSLToRGB(hsl1, output);
  output.map(computeLuminance);
  const lum1 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
  HSLToRGB(hsl2, output);
  output.map(computeLuminance);
  const lum2 = 0.2126 * output[0] + 0.7152 * output[1] + 0.0722 * output[2];
  return lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);
}
const contrastCache = new Map();
function findContrastColor(baseColor, fixedColor) {
  const key = baseColor[0] + baseColor[1] * 0x100 + baseColor[2] * 0x10000 + fixedColor[0] * 0x1000000 + fixedColor[1] * 0x100000000 + fixedColor[2] * 0x10000000000;
  let cachedValue = contrastCache.get(key);
  if (cachedValue) {
    return cachedValue;
  }
  const array = new Float32Array(9);
  const output = array.subarray(0, 3);
  const baseHSL = array.subarray(3, 6);
  RGBToHSL(baseColor, baseHSL);
  const fixedHSL = array.subarray(6, 9);
  RGBToHSL(fixedColor, fixedHSL);
  const isFixedColorDark = fixedHSL[2] < 0.5;
  const minContrast = isFixedColorDark ? 12 : 4.5;
  baseHSL[2] = isFixedColorDark ? Math.sqrt(baseHSL[2]) : 1 - Math.sqrt(1 - baseHSL[2]);
  if (contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
    let start, end;
    if (isFixedColorDark) {
      start = baseHSL[2];
      end = 1;
    } else {
      start = 0;
      end = baseHSL[2];
    }
    const PRECISION = 0.005;
    while (end - start > PRECISION) {
      const mid = baseHSL[2] = (start + end) / 2;
      if (isFixedColorDark === contrastRatio(baseHSL, fixedHSL, output) < minContrast) {
        start = mid;
      } else {
        end = mid;
      }
    }
    baseHSL[2] = isFixedColorDark ? end : start;
  }
  HSLToRGB(baseHSL, output);
  cachedValue = Util.makeHexColor(Math.round(output[0] * 255), Math.round(output[1] * 255), Math.round(output[2] * 255));
  contrastCache.set(key, cachedValue);
  return cachedValue;
}
function renderRichText({
  html,
  dir,
  className
}, container) {
  const fragment = document.createDocumentFragment();
  if (typeof html === "string") {
    const p = document.createElement("p");
    p.dir = dir || "auto";
    const lines = html.split(/(?:\r\n?|\n)/);
    for (let i = 0, ii = lines.length; i < ii; ++i) {
      const line = lines[i];
      p.append(document.createTextNode(line));
      if (i < ii - 1) {
        p.append(document.createElement("br"));
      }
    }
    fragment.append(p);
  } else {
    XfaLayer.render({
      xfaHtml: html,
      div: fragment,
      intent: "richText"
    });
  }
  fragment.firstElementChild.classList.add("richText", className);
  container.append(fragment);
}
function makePathFromDrawOPS(data) {
  const path = new Path2D();
  if (!data) {
    return path;
  }
  for (let i = 0, ii = data.length; i < ii;) {
    switch (data[i++]) {
      case DrawOPS.moveTo:
        path.moveTo(data[i++], data[i++]);
        break;
      case DrawOPS.lineTo:
        path.lineTo(data[i++], data[i++]);
        break;
      case DrawOPS.curveTo:
        path.bezierCurveTo(data[i++], data[i++], data[i++], data[i++], data[i++], data[i++]);
        break;
      case DrawOPS.quadraticCurveTo:
        path.quadraticCurveTo(data[i++], data[i++], data[i++], data[i++]);
        break;
      case DrawOPS.closePath:
        path.closePath();
        break;
      default:
        warn(`Unrecognized drawing path operator: ${data[i - 1]}`);
        break;
    }
  }
  return path;
}

;// ./src/display/editor/toolbar.js

class EditorToolbar {
  #toolbar = null;
  #colorPicker = null;
  #editor;
  #buttons = null;
  #altText = null;
  #comment = null;
  #commentButtonDivider = null;
  #signatureDescriptionButton = null;
  static #l10nRemove = null;
  constructor(editor) {
    this.#editor = editor;
    EditorToolbar.#l10nRemove ||= Object.freeze({
      freetext: "pdfjs-editor-remove-freetext-button",
      highlight: "pdfjs-editor-remove-highlight-button",
      ink: "pdfjs-editor-remove-ink-button",
      stamp: "pdfjs-editor-remove-stamp-button",
      signature: "pdfjs-editor-remove-signature-button"
    });
  }
  render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.classList.add("editToolbar", "hidden");
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#editor._uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      editToolbar.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      editToolbar.addEventListener("pointerdown", EditorToolbar.#pointerDown, {
        signal
      });
    }
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    const position = this.#editor.toolbarPosition;
    if (position) {
      const {
        style
      } = editToolbar;
      const x = this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0];
      style.insetInlineEnd = `${100 * x}%`;
      style.top = `calc(${100 * position[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return editToolbar;
  }
  get div() {
    return this.#toolbar;
  }
  static #pointerDown(e) {
    e.stopPropagation();
  }
  #focusIn(e) {
    this.#editor._focusEventsAllowed = false;
    stopEvent(e);
  }
  #focusOut(e) {
    this.#editor._focusEventsAllowed = true;
    stopEvent(e);
  }
  #addListenersToElement(element) {
    const signal = this.#editor._uiManager._signal;
    if (!(signal instanceof AbortSignal) || signal.aborted) {
      return false;
    }
    element.addEventListener("focusin", this.#focusIn.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("focusout", this.#focusOut.bind(this), {
      capture: true,
      signal
    });
    element.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    return true;
  }
  hide() {
    this.#toolbar.classList.add("hidden");
    this.#colorPicker?.hideDropdown();
  }
  show() {
    this.#toolbar.classList.remove("hidden");
    this.#altText?.shown();
    this.#comment?.shown();
  }
  addDeleteButton() {
    const {
      editorType,
      _uiManager
    } = this.#editor;
    const button = document.createElement("button");
    button.classList.add("basic", "deleteButton");
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", EditorToolbar.#l10nRemove[editorType]);
    if (this.#addListenersToElement(button)) {
      button.addEventListener("click", e => {
        _uiManager.delete();
      }, {
        signal: _uiManager._signal
      });
    }
    this.#buttons.append(button);
  }
  get #divider() {
    const divider = document.createElement("div");
    divider.className = "divider";
    return divider;
  }
  async addAltText(altText) {
    const button = await altText.render();
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
    this.#altText = altText;
  }
  addComment(comment, beforeElement = null) {
    if (this.#comment) {
      return;
    }
    const button = comment.renderForToolbar();
    if (!button) {
      return;
    }
    this.#addListenersToElement(button);
    const divider = this.#commentButtonDivider = this.#divider;
    if (!beforeElement) {
      this.#buttons.append(button, divider);
    } else {
      this.#buttons.insertBefore(button, beforeElement);
      this.#buttons.insertBefore(divider, beforeElement);
    }
    this.#comment = comment;
    comment.toolbar = this;
  }
  addColorPicker(colorPicker) {
    if (this.#colorPicker) {
      return;
    }
    this.#colorPicker = colorPicker;
    const button = colorPicker.renderButton();
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
  }
  async addEditSignatureButton(signatureManager) {
    const button = this.#signatureDescriptionButton = await signatureManager.renderEditButton(this.#editor);
    this.#addListenersToElement(button);
    this.#buttons.append(button, this.#divider);
  }
  removeButton(name) {
    switch (name) {
      case "comment":
        this.#comment?.removeToolbarCommentButton();
        this.#comment = null;
        this.#commentButtonDivider?.remove();
        this.#commentButtonDivider = null;
        break;
    }
  }
  async addButton(name, tool) {
    switch (name) {
      case "colorPicker":
        if (tool) {
          this.addColorPicker(tool);
        }
        break;
      case "altText":
        if (tool) {
          await this.addAltText(tool);
        }
        break;
      case "editSignature":
        if (tool) {
          await this.addEditSignatureButton(tool);
        }
        break;
      case "delete":
        this.addDeleteButton();
        break;
      case "comment":
        if (tool) {
          this.addComment(tool);
        }
        break;
    }
  }
  async addButtonBefore(name, tool, beforeSelector) {
    if (!tool && name === "comment") {
      return;
    }
    const beforeElement = this.#buttons.querySelector(beforeSelector);
    if (!beforeElement) {
      return;
    }
    if (name === "comment") {
      this.addComment(tool, beforeElement);
    }
  }
  updateEditSignatureButton(description) {
    if (this.#signatureDescriptionButton) {
      this.#signatureDescriptionButton.title = description;
    }
  }
  remove() {
    this.#toolbar.remove();
    this.#colorPicker?.destroy();
    this.#colorPicker = null;
  }
}
class FloatingToolbar {
  #buttons = null;
  #toolbar = null;
  #uiManager;
  constructor(uiManager) {
    this.#uiManager = uiManager;
  }
  #render() {
    const editToolbar = this.#toolbar = document.createElement("div");
    editToolbar.className = "editToolbar";
    editToolbar.setAttribute("role", "toolbar");
    const signal = this.#uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      editToolbar.addEventListener("contextmenu", noContextMenu, {
        signal
      });
    }
    const buttons = this.#buttons = document.createElement("div");
    buttons.className = "buttons";
    editToolbar.append(buttons);
    if (this.#uiManager.hasCommentManager()) {
      this.#makeButton("commentButton", `pdfjs-comment-floating-button`, "pdfjs-comment-floating-button-label", () => {
        this.#uiManager.commentSelection("floating_button");
      });
    }
    this.#makeButton("highlightButton", `pdfjs-highlight-floating-button1`, "pdfjs-highlight-floating-button-label", () => {
      this.#uiManager.highlightSelection("floating_button");
    });
    return editToolbar;
  }
  #getLastPoint(boxes, isLTR) {
    let lastY = 0;
    let lastX = 0;
    for (const box of boxes) {
      const y = box.y + box.height;
      if (y < lastY) {
        continue;
      }
      const x = box.x + (isLTR ? box.width : 0);
      if (y > lastY) {
        lastX = x;
        lastY = y;
        continue;
      }
      if (isLTR) {
        if (x > lastX) {
          lastX = x;
        }
      } else if (x < lastX) {
        lastX = x;
      }
    }
    return [isLTR ? 1 - lastX : lastX, lastY];
  }
  show(parent, boxes, isLTR) {
    const [x, y] = this.#getLastPoint(boxes, isLTR);
    const {
      style
    } = this.#toolbar ||= this.#render();
    parent.append(this.#toolbar);
    style.insetInlineEnd = `${100 * x}%`;
    style.top = `calc(${100 * y}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    this.#toolbar.remove();
  }
  #makeButton(buttonClass, l10nId, labelL10nId, clickHandler) {
    const button = document.createElement("button");
    button.classList.add("basic", buttonClass);
    button.tabIndex = 0;
    button.setAttribute("data-l10n-id", l10nId);
    const span = document.createElement("span");
    button.append(span);
    span.className = "visuallyHidden";
    span.setAttribute("data-l10n-id", labelL10nId);
    const signal = this.#uiManager._signal;
    if (signal instanceof AbortSignal && !signal.aborted) {
      button.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      button.addEventListener("click", clickHandler, {
        signal
      });
    }
    this.#buttons.append(button);
  }
}

;// ./src/display/editor/tools.js



function bindEvents(obj, element, names) {
  for (const name of names) {
    element.addEventListener(name, obj[name].bind(obj));
  }
}
class CurrentPointers {
  static #pointerId = NaN;
  static #pointerIds = null;
  static #moveTimestamp = NaN;
  static #pointerType = null;
  static initializeAndAddPointerId(pointerId) {
    (CurrentPointers.#pointerIds ||= new Set()).add(pointerId);
  }
  static setPointer(pointerType, pointerId) {
    CurrentPointers.#pointerId ||= pointerId;
    CurrentPointers.#pointerType ??= pointerType;
  }
  static setTimeStamp(timeStamp) {
    CurrentPointers.#moveTimestamp = timeStamp;
  }
  static isSamePointerId(pointerId) {
    return CurrentPointers.#pointerId === pointerId;
  }
  static isSamePointerIdOrRemove(pointerId) {
    if (CurrentPointers.#pointerId === pointerId) {
      return true;
    }
    CurrentPointers.#pointerIds?.delete(pointerId);
    return false;
  }
  static isSamePointerType(pointerType) {
    return CurrentPointers.#pointerType === pointerType;
  }
  static isInitializedAndDifferentPointerType(pointerType) {
    return CurrentPointers.#pointerType !== null && !CurrentPointers.isSamePointerType(pointerType);
  }
  static isSameTimeStamp(timeStamp) {
    return CurrentPointers.#moveTimestamp === timeStamp;
  }
  static isUsingMultiplePointers() {
    return CurrentPointers.#pointerIds?.size >= 1;
  }
  static clearPointerType() {
    CurrentPointers.#pointerType = null;
  }
  static clearPointerIds() {
    CurrentPointers.#pointerId = NaN;
    CurrentPointers.#pointerIds = null;
  }
  static clearTimeStamp() {
    CurrentPointers.#moveTimestamp = NaN;
  }
}
class IdManager {
  #id = 0;
  get id() {
    return `${AnnotationEditorPrefix}${this.#id++}`;
  }
}
class ImageManager {
  #baseId = getUuid();
  #id = 0;
  #cache = null;
  static get _isSVGFittingCanvas() {
    const svg = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
    const canvas = new OffscreenCanvas(1, 3);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });
    const image = new Image();
    image.src = svg;
    const promise = image.decode().then(() => {
      ctx.drawImage(image, 0, 0, 1, 1, 0, 0, 1, 3);
      return new Uint32Array(ctx.getImageData(0, 0, 1, 1).data.buffer)[0] === 0;
    });
    return shadow(this, "_isSVGFittingCanvas", promise);
  }
  async #get(key, rawData) {
    this.#cache ||= new Map();
    let data = this.#cache.get(key);
    if (data === null) {
      return null;
    }
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    try {
      data ||= {
        bitmap: null,
        id: `image_${this.#baseId}_${this.#id++}`,
        refCounter: 0,
        isSvg: false
      };
      let image;
      if (typeof rawData === "string") {
        data.url = rawData;
        image = await fetchData(rawData, "blob");
      } else if (rawData instanceof File) {
        image = data.file = rawData;
      } else if (rawData instanceof Blob) {
        image = rawData;
      }
      if (image.type === "image/svg+xml") {
        const mustRemoveAspectRatioPromise = ImageManager._isSVGFittingCanvas;
        const fileReader = new FileReader();
        const imageElement = new Image();
        const imagePromise = new Promise((resolve, reject) => {
          imageElement.onload = () => {
            data.bitmap = imageElement;
            data.isSvg = true;
            resolve();
          };
          fileReader.onload = async () => {
            const url = data.svgUrl = fileReader.result;
            imageElement.src = (await mustRemoveAspectRatioPromise) ? `${url}#svgView(preserveAspectRatio(none))` : url;
          };
          imageElement.onerror = fileReader.onerror = reject;
        });
        fileReader.readAsDataURL(image);
        await imagePromise;
      } else {
        data.bitmap = await createImageBitmap(image);
      }
      data.refCounter = 1;
    } catch (e) {
      warn(e);
      data = null;
    }
    this.#cache.set(key, data);
    if (data) {
      this.#cache.set(data.id, data);
    }
    return data;
  }
  async getFromFile(file) {
    const {
      lastModified,
      name,
      size,
      type
    } = file;
    return this.#get(`${lastModified}_${name}_${size}_${type}`, file);
  }
  async getFromUrl(url) {
    return this.#get(url, url);
  }
  async getFromBlob(id, blobPromise) {
    const blob = await blobPromise;
    return this.#get(id, blob);
  }
  async getFromId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return null;
    }
    if (data.bitmap) {
      data.refCounter += 1;
      return data;
    }
    if (data.file) {
      return this.getFromFile(data.file);
    }
    if (data.blobPromise) {
      const {
        blobPromise
      } = data;
      delete data.blobPromise;
      return this.getFromBlob(data.id, blobPromise);
    }
    return this.getFromUrl(data.url);
  }
  getFromCanvas(id, canvas) {
    this.#cache ||= new Map();
    let data = this.#cache.get(id);
    if (data?.bitmap) {
      data.refCounter += 1;
      return data;
    }
    const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
    const ctx = offscreen.getContext("2d");
    ctx.drawImage(canvas, 0, 0);
    data = {
      bitmap: offscreen.transferToImageBitmap(),
      id: `image_${this.#baseId}_${this.#id++}`,
      refCounter: 1,
      isSvg: false
    };
    this.#cache.set(id, data);
    this.#cache.set(data.id, data);
    return data;
  }
  getSvgUrl(id) {
    const data = this.#cache.get(id);
    if (!data?.isSvg) {
      return null;
    }
    return data.svgUrl;
  }
  deleteId(id) {
    this.#cache ||= new Map();
    const data = this.#cache.get(id);
    if (!data) {
      return;
    }
    data.refCounter -= 1;
    if (data.refCounter !== 0) {
      return;
    }
    const {
      bitmap
    } = data;
    if (!data.url && !data.file) {
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      const ctx = canvas.getContext("bitmaprenderer");
      ctx.transferFromImageBitmap(bitmap);
      data.blobPromise = canvas.convertToBlob();
    }
    bitmap.close?.();
    data.bitmap = null;
  }
  isValidId(id) {
    return id.startsWith(`image_${this.#baseId}_`);
  }
}
class CommandManager {
  #commands = [];
  #locked = false;
  #maxSize;
  #position = -1;
  constructor(maxSize = 128) {
    this.#maxSize = maxSize;
  }
  add({
    cmd,
    undo,
    post,
    mustExec,
    type = NaN,
    overwriteIfSameType = false,
    keepUndo = false
  }) {
    if (mustExec) {
      cmd();
    }
    if (this.#locked) {
      return;
    }
    const save = {
      cmd,
      undo,
      post,
      type
    };
    if (this.#position === -1) {
      if (this.#commands.length > 0) {
        this.#commands.length = 0;
      }
      this.#position = 0;
      this.#commands.push(save);
      return;
    }
    if (overwriteIfSameType && this.#commands[this.#position].type === type) {
      if (keepUndo) {
        save.undo = this.#commands[this.#position].undo;
      }
      this.#commands[this.#position] = save;
      return;
    }
    const next = this.#position + 1;
    if (next === this.#maxSize) {
      this.#commands.splice(0, 1);
    } else {
      this.#position = next;
      if (next < this.#commands.length) {
        this.#commands.splice(next);
      }
    }
    this.#commands.push(save);
  }
  undo() {
    if (this.#position === -1) {
      return;
    }
    this.#locked = true;
    const {
      undo,
      post
    } = this.#commands[this.#position];
    undo();
    post?.();
    this.#locked = false;
    this.#position -= 1;
  }
  redo() {
    if (this.#position < this.#commands.length - 1) {
      this.#position += 1;
      this.#locked = true;
      const {
        cmd,
        post
      } = this.#commands[this.#position];
      cmd();
      post?.();
      this.#locked = false;
    }
  }
  hasSomethingToUndo() {
    return this.#position !== -1;
  }
  hasSomethingToRedo() {
    return this.#position < this.#commands.length - 1;
  }
  cleanType(type) {
    if (this.#position === -1) {
      return;
    }
    for (let i = this.#position; i >= 0; i--) {
      if (this.#commands[i].type !== type) {
        this.#commands.splice(i + 1, this.#position - i);
        this.#position = i;
        return;
      }
    }
    this.#commands.length = 0;
    this.#position = -1;
  }
  destroy() {
    this.#commands = null;
  }
}
class KeyboardManager {
  constructor(callbacks) {
    this.buffer = [];
    this.callbacks = new Map();
    this.allKeys = new Set();
    const {
      isMac
    } = FeatureTest.platform;
    for (const [keys, callback, options = {}] of callbacks) {
      for (const key of keys) {
        const isMacKey = key.startsWith("mac+");
        if (isMac && isMacKey) {
          this.callbacks.set(key.slice(4), {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        } else if (!isMac && !isMacKey) {
          this.callbacks.set(key, {
            callback,
            options
          });
          this.allKeys.add(key.split("+").at(-1));
        }
      }
    }
  }
  #serialize(event) {
    if (event.altKey) {
      this.buffer.push("alt");
    }
    if (event.ctrlKey) {
      this.buffer.push("ctrl");
    }
    if (event.metaKey) {
      this.buffer.push("meta");
    }
    if (event.shiftKey) {
      this.buffer.push("shift");
    }
    this.buffer.push(event.key);
    const str = this.buffer.join("+");
    this.buffer.length = 0;
    return str;
  }
  exec(self, event) {
    if (!this.allKeys.has(event.key)) {
      return;
    }
    const info = this.callbacks.get(this.#serialize(event));
    if (!info) {
      return;
    }
    const {
      callback,
      options: {
        bubbles = false,
        args = [],
        checker = null
      }
    } = info;
    if (checker && !checker(self, event)) {
      return;
    }
    callback.bind(self, ...args, event)();
    if (!bubbles) {
      stopEvent(event);
    }
  }
}
class ColorManager {
  static _colorsMapping = new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
  get _colors() {
    const colors = new Map([["CanvasText", null], ["Canvas", null]]);
    getColorValues(colors);
    return shadow(this, "_colors", colors);
  }
  convert(color) {
    const rgb = getRGB(color);
    if (!window.matchMedia("(forced-colors: active)").matches) {
      return rgb;
    }
    for (const [name, RGB] of this._colors) {
      if (RGB.every((x, i) => x === rgb[i])) {
        return ColorManager._colorsMapping.get(name);
      }
    }
    return rgb;
  }
  getHexCode(name) {
    const rgb = this._colors.get(name);
    if (!rgb) {
      return name;
    }
    return Util.makeHexColor(...rgb);
  }
}
class AnnotationEditorUIManager {
  #abortController = new AbortController();
  #activeEditor = null;
  #allEditableAnnotations = null;
  #allEditors = new Map();
  #allLayers = new Map();
  #savedAllLayers = null;
  #altTextManager = null;
  #annotationStorage = null;
  #changedExistingAnnotations = null;
  #commandManager = new CommandManager();
  #commentManager = null;
  #copyPasteAC = null;
  #currentDrawingSession = null;
  #currentPageIndex = 0;
  #deletedAnnotationsElementIds = new Set();
  #draggingEditors = null;
  #editorTypes = null;
  #editorsToRescale = new Set();
  _editorUndoBar = null;
  #enableHighlightFloatingButton = false;
  #enableUpdatedAddImage = false;
  #enableNewAltTextWhenAddingImage = false;
  #filterFactory = null;
  #focusMainContainerTimeoutId = null;
  #focusManagerAC = null;
  #highlightColors = null;
  #highlightWhenShiftUp = false;
  #floatingToolbar = null;
  #idManager = new IdManager();
  #isEnabled = false;
  #isPointerDown = false;
  #isWaiting = false;
  #keyboardManagerAC = null;
  #lastActiveElement = null;
  #mainHighlightColorPicker = null;
  #missingCanvases = null;
  #mlManager = null;
  #mode = AnnotationEditorType.NONE;
  #selectedEditors = new Set();
  #selectedTextNode = null;
  #signatureManager = null;
  #pageColors = null;
  #showAllStates = null;
  #pdfDocument = null;
  #previousStates = {
    isEditing: false,
    isEmpty: true,
    hasSomethingToUndo: false,
    hasSomethingToRedo: false,
    hasSelectedEditor: false,
    hasSelectedText: false
  };
  #translation = [0, 0];
  #translationTimeoutId = null;
  #container = null;
  #viewer = null;
  #viewerAlert = null;
  #updateModeCapability = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const proto = AnnotationEditorUIManager.prototype;
    const arrowChecker = self => self.#container.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && self.hasSomethingToControl();
    const textInputChecker = (_self, {
      target: el
    }) => {
      if (el instanceof HTMLInputElement) {
        const {
          type
        } = el;
        return type !== "text" && type !== "number";
      }
      return true;
    };
    const small = this.TRANSLATE_SMALL;
    const big = this.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+a", "mac+meta+a"], proto.selectAll, {
      checker: textInputChecker
    }], [["ctrl+z", "mac+meta+z"], proto.undo, {
      checker: textInputChecker
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], proto.redo, {
      checker: textInputChecker
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], proto.delete, {
      checker: textInputChecker
    }], [["Enter", "mac+Enter"], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(el) && !self.isEnterHandled
    }], [[" ", "mac+ "], proto.addNewEditorFromKeyboard, {
      checker: (self, {
        target: el
      }) => !(el instanceof HTMLButtonElement) && self.#container.contains(document.activeElement)
    }], [["Escape", "mac+Escape"], proto.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto.translateSelectedEditors, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto.translateSelectedEditors, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto.translateSelectedEditors, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto.translateSelectedEditors, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto.translateSelectedEditors, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  constructor(container, viewer, viewerAlert, altTextManager, commentManager, signatureManager, eventBus, pdfDocument, pageColors, highlightColors, enableHighlightFloatingButton, enableUpdatedAddImage, enableNewAltTextWhenAddingImage, mlManager, editorUndoBar, supportsPinchToZoom) {
    const signal = this._signal = this.#abortController.signal;
    this.#container = container;
    this.#viewer = viewer;
    this.#viewerAlert = viewerAlert;
    this.#altTextManager = altTextManager;
    this.#commentManager = commentManager;
    this.#signatureManager = signatureManager;
    this.#pdfDocument = pdfDocument;
    this._eventBus = eventBus;
    eventBus._on("editingaction", this.onEditingAction.bind(this), {
      signal
    });
    eventBus._on("pagechanging", this.onPageChanging.bind(this), {
      signal
    });
    eventBus._on("scalechanging", this.onScaleChanging.bind(this), {
      signal
    });
    eventBus._on("rotationchanging", this.onRotationChanging.bind(this), {
      signal
    });
    eventBus._on("setpreference", this.onSetPreference.bind(this), {
      signal
    });
    eventBus._on("switchannotationeditorparams", evt => this.updateParams(evt.type, evt.value), {
      signal
    });
    window.addEventListener("pointerdown", () => {
      this.#isPointerDown = true;
    }, {
      capture: true,
      signal
    });
    window.addEventListener("pointerup", () => {
      this.#isPointerDown = false;
    }, {
      capture: true,
      signal
    });
    window.addEventListener("beforeunload", this.#beforeUnload.bind(this), {
      capture: true,
      signal
    });
    this.#addSelectionListener();
    this.#addDragAndDropListeners();
    this.#addKeyboardManager();
    this.#annotationStorage = pdfDocument.annotationStorage;
    this.#filterFactory = pdfDocument.filterFactory;
    this.#pageColors = pageColors;
    this.#highlightColors = highlightColors || null;
    this.#enableHighlightFloatingButton = enableHighlightFloatingButton;
    this.#enableUpdatedAddImage = enableUpdatedAddImage;
    this.#enableNewAltTextWhenAddingImage = enableNewAltTextWhenAddingImage;
    this.#mlManager = mlManager || null;
    this.viewParameters = {
      realScale: PixelsPerInch.PDF_TO_CSS_UNITS,
      rotation: 0
    };
    this.isShiftKeyDown = false;
    this._editorUndoBar = editorUndoBar || null;
    this._supportsPinchToZoom = supportsPinchToZoom !== false;
    commentManager?.setSidebarUiManager(this);
  }
  destroy() {
    this.#updateModeCapability?.resolve();
    this.#updateModeCapability = null;
    this.#abortController?.abort();
    this.#abortController = null;
    this._signal = null;
    for (const layer of this.#allLayers.values()) {
      layer.destroy();
    }
    this.#allLayers.clear();
    this.#allEditors.clear();
    this.#editorsToRescale.clear();
    this.#missingCanvases?.clear();
    this.#activeEditor = null;
    this.#selectedEditors.clear();
    this.#commandManager.destroy();
    this.#altTextManager?.destroy();
    this.#commentManager?.destroy();
    this.#signatureManager?.destroy();
    this.#floatingToolbar?.hide();
    this.#floatingToolbar = null;
    this.#mainHighlightColorPicker?.destroy();
    this.#mainHighlightColorPicker = null;
    this.#allEditableAnnotations = null;
    if (this.#focusMainContainerTimeoutId) {
      clearTimeout(this.#focusMainContainerTimeoutId);
      this.#focusMainContainerTimeoutId = null;
    }
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
      this.#translationTimeoutId = null;
    }
    this._editorUndoBar?.destroy();
    this.#pdfDocument = null;
  }
  combinedSignal(ac) {
    return AbortSignal.any([this._signal, ac.signal]);
  }
  get mlManager() {
    return this.#mlManager;
  }
  get useNewAltTextFlow() {
    return this.#enableUpdatedAddImage;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#enableNewAltTextWhenAddingImage;
  }
  get hcmFilter() {
    return shadow(this, "hcmFilter", this.#pageColors ? this.#filterFactory.addHCMFilter(this.#pageColors.foreground, this.#pageColors.background) : "none");
  }
  get direction() {
    return shadow(this, "direction", getComputedStyle(this.#container).direction);
  }
  get _highlightColors() {
    return shadow(this, "_highlightColors", this.#highlightColors ? new Map(this.#highlightColors.split(",").map(pair => {
      pair = pair.split("=").map(x => x.trim());
      pair[1] = pair[1].toUpperCase();
      return pair;
    })) : null);
  }
  get highlightColors() {
    const {
      _highlightColors
    } = this;
    if (!_highlightColors) {
      return shadow(this, "highlightColors", null);
    }
    const map = new Map();
    const hasHCM = !!this.#pageColors;
    for (const [name, color] of _highlightColors) {
      const isNameForHCM = name.endsWith("_HCM");
      if (hasHCM && isNameForHCM) {
        map.set(name.replace("_HCM", ""), color);
        continue;
      }
      if (!hasHCM && !isNameForHCM) {
        map.set(name, color);
      }
    }
    return shadow(this, "highlightColors", map);
  }
  get highlightColorNames() {
    return shadow(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, e => e.reverse())) : null);
  }
  getNonHCMColor(color) {
    if (!this._highlightColors) {
      return color;
    }
    const colorName = this.highlightColorNames.get(color);
    return this._highlightColors.get(colorName) || color;
  }
  getNonHCMColorName(color) {
    return this.highlightColorNames.get(color) || color;
  }
  setCurrentDrawingSession(layer) {
    if (layer) {
      this.unselectAll();
      this.disableUserSelect(true);
    } else {
      this.disableUserSelect(false);
    }
    this.#currentDrawingSession = layer;
  }
  setMainHighlightColorPicker(colorPicker) {
    this.#mainHighlightColorPicker = colorPicker;
  }
  editAltText(editor, firstTime = false) {
    this.#altTextManager?.editAltText(this, editor, firstTime);
  }
  hasCommentManager() {
    return !!this.#commentManager;
  }
  editComment(editor, posX, posY, options) {
    this.#commentManager?.showDialog(this, editor, posX, posY, options);
  }
  selectComment(pageIndex, uid) {
    const layer = this.#allLayers.get(pageIndex);
    const editor = layer?.getEditorByUID(uid);
    editor?.toggleComment(true, true);
  }
  updateComment(editor) {
    this.#commentManager?.updateComment(editor.getData());
  }
  updatePopupColor(editor) {
    this.#commentManager?.updatePopupColor(editor);
  }
  removeComment(editor) {
    this.#commentManager?.removeComments([editor.uid]);
  }
  deleteComment(editor, savedData) {
    const undo = () => {
      editor.comment = savedData;
    };
    const cmd = () => {
      this._editorUndoBar?.show(undo, "comment");
      this.toggleComment(null);
      editor.comment = null;
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  toggleComment(editor, isSelected, visibility = undefined) {
    this.#commentManager?.toggleCommentPopup(editor, isSelected, visibility);
  }
  makeCommentColor(color, opacity) {
    return color && this.#commentManager?.makeCommentColor(color, opacity) || null;
  }
  getCommentDialogElement() {
    return this.#commentManager?.dialogElement || null;
  }
  async waitForEditorsRendered(pageNumber) {
    if (this.#allLayers.has(pageNumber - 1)) {
      return;
    }
    const {
      resolve,
      promise
    } = Promise.withResolvers();
    const onEditorsRendered = evt => {
      if (evt.pageNumber === pageNumber) {
        this._eventBus._off("editorsrendered", onEditorsRendered);
        resolve();
      }
    };
    this._eventBus.on("editorsrendered", onEditorsRendered);
    await promise;
  }
  getSignature(editor) {
    this.#signatureManager?.getSignature({
      uiManager: this,
      editor
    });
  }
  get signatureManager() {
    return this.#signatureManager;
  }
  switchToMode(mode, callback) {
    this._eventBus.on("annotationeditormodechanged", callback, {
      once: true,
      signal: this._signal
    });
    this._eventBus.dispatch("showannotationeditorui", {
      source: this,
      mode
    });
  }
  setPreference(name, value) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name,
      value
    });
  }
  onSetPreference({
    name,
    value
  }) {
    switch (name) {
      case "enableNewAltTextWhenAddingImage":
        this.#enableNewAltTextWhenAddingImage = value;
        break;
    }
  }
  onPageChanging({
    pageNumber
  }) {
    this.#currentPageIndex = pageNumber - 1;
  }
  deletePage(id) {
    for (const editor of this.getEditors(id)) {
      editor.remove();
    }
    this.#allLayers.delete(id);
    if (this.#currentPageIndex === id) {
      this.#currentPageIndex = 0;
    }
  }
  focusMainContainer() {
    this.#container.focus();
  }
  findParent(x, y) {
    for (const layer of this.#allLayers.values()) {
      const {
        x: layerX,
        y: layerY,
        width,
        height
      } = layer.div.getBoundingClientRect();
      if (x >= layerX && x <= layerX + width && y >= layerY && y <= layerY + height) {
        return layer;
      }
    }
    return null;
  }
  disableUserSelect(value = false) {
    this.#viewer.classList.toggle("noUserSelect", value);
  }
  addShouldRescale(editor) {
    this.#editorsToRescale.add(editor);
  }
  removeShouldRescale(editor) {
    this.#editorsToRescale.delete(editor);
  }
  onScaleChanging({
    scale
  }) {
    this.commitOrRemove();
    this.viewParameters.realScale = scale * PixelsPerInch.PDF_TO_CSS_UNITS;
    for (const editor of this.#editorsToRescale) {
      editor.onScaleChanging();
    }
    this.#currentDrawingSession?.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation
  }) {
    this.commitOrRemove();
    this.viewParameters.rotation = pagesRotation;
  }
  #getAnchorElementForSelection({
    anchorNode
  }) {
    return anchorNode.nodeType === Node.TEXT_NODE ? anchorNode.parentElement : anchorNode;
  }
  #getLayerForTextLayer(textLayer) {
    const {
      currentLayer
    } = this;
    if (currentLayer.hasTextLayer(textLayer)) {
      return currentLayer;
    }
    for (const layer of this.#allLayers.values()) {
      if (layer.hasTextLayer(textLayer)) {
        return layer;
      }
    }
    return null;
  }
  highlightSelection(methodOfCreation = "", comment = false) {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const {
      anchorNode,
      anchorOffset,
      focusNode,
      focusOffset
    } = selection;
    const text = selection.toString();
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    selection.empty();
    const layer = this.#getLayerForTextLayer(textLayer);
    const isNoneMode = this.#mode === AnnotationEditorType.NONE;
    const callback = () => {
      const editor = layer?.createAndAddNewEditor({
        x: 0,
        y: 0
      }, false, {
        methodOfCreation,
        boxes,
        anchorNode,
        anchorOffset,
        focusNode,
        focusOffset,
        text
      });
      if (isNoneMode) {
        this.showAllEditors("highlight", true, true);
      }
      if (comment) {
        editor?.editComment();
      }
    };
    if (isNoneMode) {
      this.switchToMode(AnnotationEditorType.HIGHLIGHT, callback);
      return;
    }
    callback();
  }
  commentSelection(methodOfCreation = "") {
    this.highlightSelection(methodOfCreation, true);
  }
  #beforeUnload(e) {
    this.commitOrRemove();
    this.currentLayer?.endDrawingSession(false);
  }
  #displayFloatingToolbar() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    const boxes = this.getSelectionBoxes(textLayer);
    if (!boxes) {
      return;
    }
    this.#floatingToolbar ||= new FloatingToolbar(this);
    this.#floatingToolbar.show(textLayer, boxes, this.direction === "ltr");
  }
  getAndRemoveDataFromAnnotationStorage(annotationId) {
    if (!this.#annotationStorage) {
      return null;
    }
    const key = `${AnnotationEditorPrefix}${annotationId}`;
    const storedValue = this.#annotationStorage.getRawValue(key);
    if (storedValue) {
      this.#annotationStorage.remove(key);
    }
    return storedValue;
  }
  addToAnnotationStorage(editor) {
    if (!editor.isEmpty() && this.#annotationStorage && !this.#annotationStorage.has(editor.id)) {
      this.#annotationStorage.setValue(editor.id, editor);
    }
  }
  a11yAlert(messageId, args = null) {
    const viewerAlert = this.#viewerAlert;
    if (!viewerAlert) {
      return;
    }
    viewerAlert.setAttribute("data-l10n-id", messageId);
    if (args) {
      viewerAlert.setAttribute("data-l10n-args", JSON.stringify(args));
    } else {
      viewerAlert.removeAttribute("data-l10n-args");
    }
  }
  #selectionChange() {
    const selection = document.getSelection();
    if (!selection || selection.isCollapsed) {
      if (this.#selectedTextNode) {
        this.#floatingToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    const {
      anchorNode
    } = selection;
    if (anchorNode === this.#selectedTextNode) {
      return;
    }
    const anchorElement = this.#getAnchorElementForSelection(selection);
    const textLayer = anchorElement.closest(".textLayer");
    if (!textLayer) {
      if (this.#selectedTextNode) {
        this.#floatingToolbar?.hide();
        this.#selectedTextNode = null;
        this.#dispatchUpdateStates({
          hasSelectedText: false
        });
      }
      return;
    }
    this.#floatingToolbar?.hide();
    this.#selectedTextNode = anchorNode;
    this.#dispatchUpdateStates({
      hasSelectedText: true
    });
    if (this.#mode !== AnnotationEditorType.HIGHLIGHT && this.#mode !== AnnotationEditorType.NONE) {
      return;
    }
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.showAllEditors("highlight", true, true);
    }
    this.#highlightWhenShiftUp = this.isShiftKeyDown;
    if (!this.isShiftKeyDown) {
      const activeLayer = this.#mode === AnnotationEditorType.HIGHLIGHT ? this.#getLayerForTextLayer(textLayer) : null;
      activeLayer?.toggleDrawing();
      if (this.#isPointerDown) {
        const ac = new AbortController();
        const signal = this.combinedSignal(ac);
        const pointerup = e => {
          if (e.type === "pointerup" && e.button !== 0) {
            return;
          }
          ac.abort();
          activeLayer?.toggleDrawing(true);
          if (e.type === "pointerup") {
            this.#onSelectEnd("main_toolbar");
          }
        };
        window.addEventListener("pointerup", pointerup, {
          signal
        });
        window.addEventListener("blur", pointerup, {
          signal
        });
      } else {
        activeLayer?.toggleDrawing(true);
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  #onSelectEnd(methodOfCreation = "") {
    if (this.#mode === AnnotationEditorType.HIGHLIGHT) {
      this.highlightSelection(methodOfCreation);
    } else if (this.#enableHighlightFloatingButton) {
      this.#displayFloatingToolbar();
    }
  }
  #addSelectionListener() {
    document.addEventListener("selectionchange", this.#selectionChange.bind(this), {
      signal: this._signal
    });
  }
  #addFocusManager() {
    if (this.#focusManagerAC) {
      return;
    }
    this.#focusManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#focusManagerAC);
    window.addEventListener("focus", this.focus.bind(this), {
      signal
    });
    window.addEventListener("blur", this.blur.bind(this), {
      signal
    });
  }
  #removeFocusManager() {
    this.#focusManagerAC?.abort();
    this.#focusManagerAC = null;
  }
  blur() {
    this.isShiftKeyDown = false;
    if (this.#highlightWhenShiftUp) {
      this.#highlightWhenShiftUp = false;
      this.#onSelectEnd("main_toolbar");
    }
    if (!this.hasSelection) {
      return;
    }
    const {
      activeElement
    } = document;
    for (const editor of this.#selectedEditors) {
      if (editor.div.contains(activeElement)) {
        this.#lastActiveElement = [editor, activeElement];
        editor._focusEventsAllowed = false;
        break;
      }
    }
  }
  focus() {
    if (!this.#lastActiveElement) {
      return;
    }
    const [lastEditor, lastActiveElement] = this.#lastActiveElement;
    this.#lastActiveElement = null;
    lastActiveElement.addEventListener("focusin", () => {
      lastEditor._focusEventsAllowed = true;
    }, {
      once: true,
      signal: this._signal
    });
    lastActiveElement.focus();
  }
  #addKeyboardManager() {
    if (this.#keyboardManagerAC) {
      return;
    }
    this.#keyboardManagerAC = new AbortController();
    const signal = this.combinedSignal(this.#keyboardManagerAC);
    window.addEventListener("keydown", this.keydown.bind(this), {
      signal
    });
    window.addEventListener("keyup", this.keyup.bind(this), {
      signal
    });
  }
  #removeKeyboardManager() {
    this.#keyboardManagerAC?.abort();
    this.#keyboardManagerAC = null;
  }
  #addCopyPasteListeners() {
    if (this.#copyPasteAC) {
      return;
    }
    this.#copyPasteAC = new AbortController();
    const signal = this.combinedSignal(this.#copyPasteAC);
    document.addEventListener("copy", this.copy.bind(this), {
      signal
    });
    document.addEventListener("cut", this.cut.bind(this), {
      signal
    });
    document.addEventListener("paste", this.paste.bind(this), {
      signal
    });
  }
  #removeCopyPasteListeners() {
    this.#copyPasteAC?.abort();
    this.#copyPasteAC = null;
  }
  #addDragAndDropListeners() {
    const signal = this._signal;
    document.addEventListener("dragover", this.dragOver.bind(this), {
      signal
    });
    document.addEventListener("drop", this.drop.bind(this), {
      signal
    });
  }
  addEditListeners() {
    this.#addKeyboardManager();
    this.setEditingState(true);
  }
  removeEditListeners() {
    this.#removeKeyboardManager();
    this.setEditingState(false);
  }
  dragOver(event) {
    for (const {
      type
    } of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(type)) {
          event.dataTransfer.dropEffect = "copy";
          event.preventDefault();
          return;
        }
      }
    }
  }
  drop(event) {
    for (const item of event.dataTransfer.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          event.preventDefault();
          return;
        }
      }
    }
  }
  copy(event) {
    event.preventDefault();
    this.#activeEditor?.commitOrRemove();
    if (!this.hasSelection) {
      return;
    }
    const editors = [];
    for (const editor of this.#selectedEditors) {
      const serialized = editor.serialize(true);
      if (serialized) {
        editors.push(serialized);
      }
    }
    if (editors.length === 0) {
      return;
    }
    event.clipboardData.setData("application/pdfjs", JSON.stringify(editors));
  }
  cut(event) {
    this.copy(event);
    this.delete();
  }
  async paste(event) {
    event.preventDefault();
    const {
      clipboardData
    } = event;
    for (const item of clipboardData.items) {
      for (const editorType of this.#editorTypes) {
        if (editorType.isHandlingMimeForPasting(item.type)) {
          editorType.paste(item, this.currentLayer);
          return;
        }
      }
    }
    let data = clipboardData.getData("application/pdfjs");
    if (!data) {
      return;
    }
    try {
      data = JSON.parse(data);
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
      return;
    }
    if (!Array.isArray(data)) {
      return;
    }
    this.unselectAll();
    const layer = this.currentLayer;
    try {
      const newEditors = [];
      for (const editor of data) {
        const deserializedEditor = await layer.deserialize(editor);
        if (!deserializedEditor) {
          return;
        }
        newEditors.push(deserializedEditor);
      }
      const cmd = () => {
        for (const editor of newEditors) {
          this.#addEditorToLayer(editor);
        }
        this.#selectEditors(newEditors);
      };
      const undo = () => {
        for (const editor of newEditors) {
          editor.remove();
        }
      };
      this.addCommands({
        cmd,
        undo,
        mustExec: true
      });
    } catch (ex) {
      warn(`paste: "${ex.message}".`);
    }
  }
  keydown(event) {
    if (!this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = true;
    }
    if (this.#mode !== AnnotationEditorType.NONE && !this.isEditorHandlingKeyboard) {
      AnnotationEditorUIManager._keyboardManager.exec(this, event);
    }
  }
  keyup(event) {
    if (this.isShiftKeyDown && event.key === "Shift") {
      this.isShiftKeyDown = false;
      if (this.#highlightWhenShiftUp) {
        this.#highlightWhenShiftUp = false;
        this.#onSelectEnd("main_toolbar");
      }
    }
  }
  onEditingAction({
    name
  }) {
    switch (name) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[name]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
      case "commentSelection":
        this.commentSelection("context_menu");
        break;
    }
  }
  updatePageIndex(oldPageIndex, newPageIndex) {
    for (const editor of this.getEditors(oldPageIndex)) {
      editor.pageIndex = newPageIndex;
    }
    const layer = this.#savedAllLayers.get(oldPageIndex);
    if (layer) {
      layer.pageIndex = newPageIndex;
      this.#allLayers.set(newPageIndex, layer);
      if (this.#isEnabled) {
        layer.enable();
      } else {
        layer.disable();
      }
    }
  }
  startUpdatePages() {
    this.#savedAllLayers = new Map(this.#allLayers);
    this.#allLayers.clear();
  }
  endUpdatePages() {
    this.#savedAllLayers = null;
  }
  clonePage(pageIndex, newPageIndex) {
    for (const editor of this.getEditors(pageIndex)) {
      const serialized = editor.serialize(editor.mode !== AnnotationEditorType.HIGHLIGHT);
      if (!serialized) {
        continue;
      }
      serialized.pageIndex = newPageIndex;
      serialized.id = this.getId();
      serialized.isClone = true;
      delete serialized.popupRef;
      this.#annotationStorage.setValue(serialized.id, serialized);
    }
  }
  findClonesForPage(layer) {
    const promises = [];
    const {
      pageIndex
    } = layer;
    for (const [id, editor] of this.#annotationStorage) {
      if (editor.pageIndex === pageIndex && editor.isClone) {
        this.#annotationStorage.remove(id);
        promises.push(layer.deserialize(editor).then(deserializedEditor => {
          if (deserializedEditor) {
            deserializedEditor.isClone = true;
            layer.addOrRebuild(deserializedEditor);
          }
        }));
      }
    }
    return Promise.all(promises);
  }
  #dispatchUpdateStates(details) {
    const hasChanged = Object.entries(details).some(([key, value]) => this.#previousStates[key] !== value);
    if (hasChanged) {
      this._eventBus.dispatch("editingstateschanged", {
        source: this,
        details: Object.assign(this.#previousStates, details)
      });
      if (this.#mode === AnnotationEditorType.HIGHLIGHT && details.hasSelectedEditor === false) {
        this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_FREE, true]]);
      }
    }
  }
  #dispatchUpdateUI(details) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details
    });
  }
  setEditingState(isEditing) {
    if (isEditing) {
      this.#addFocusManager();
      this.#addCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: this.#mode !== AnnotationEditorType.NONE,
        isEmpty: this.#isEmpty(),
        hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
        hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
        hasSelectedEditor: false
      });
    } else {
      this.#removeFocusManager();
      this.#removeCopyPasteListeners();
      this.#dispatchUpdateStates({
        isEditing: false
      });
      this.disableUserSelect(false);
    }
  }
  registerEditorTypes(types) {
    if (this.#editorTypes) {
      return;
    }
    this.#editorTypes = types;
    for (const editorType of this.#editorTypes) {
      this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#idManager.id;
  }
  get currentLayer() {
    return this.#allLayers.get(this.#currentPageIndex);
  }
  getLayer(pageIndex) {
    return this.#allLayers.get(pageIndex);
  }
  get currentPageIndex() {
    return this.#currentPageIndex;
  }
  addLayer(layer) {
    this.#allLayers.set(layer.pageIndex, layer);
    if (this.#isEnabled) {
      layer.enable();
    } else {
      layer.disable();
    }
  }
  removeLayer(layer) {
    this.#allLayers.delete(layer.pageIndex);
  }
  async updateMode(mode, editId = null, isFromUser = false, isFromKeyboard = false, mustEnterInEditMode = false, editComment = false) {
    if (this.#mode === mode) {
      return;
    }
    if (this.#updateModeCapability) {
      await this.#updateModeCapability.promise;
      if (!this.#updateModeCapability) {
        return;
      }
    }
    this.#updateModeCapability = Promise.withResolvers();
    this.#currentDrawingSession?.commitOrRemove();
    if (this.#mode === AnnotationEditorType.POPUP) {
      this.#commentManager?.hideSidebar();
    }
    this.#commentManager?.destroyPopup();
    this.#mode = mode;
    if (mode === AnnotationEditorType.NONE) {
      this.setEditingState(false);
      this.#disableAll();
      for (const editor of this.#allEditors.values()) {
        editor.hideStandaloneCommentButton();
      }
      this._editorUndoBar?.hide();
      this.toggleComment(null);
      this.#updateModeCapability.resolve();
      return;
    }
    for (const editor of this.#allEditors.values()) {
      editor.addStandaloneCommentButton();
    }
    if (mode === AnnotationEditorType.SIGNATURE) {
      await this.#signatureManager?.loadSignatures();
    }
    if (isFromUser) {
      CurrentPointers.clearPointerType();
    }
    this.setEditingState(true);
    await this.#enableAll();
    this.unselectAll();
    for (const layer of this.#allLayers.values()) {
      layer.updateMode(mode);
    }
    if (mode === AnnotationEditorType.POPUP) {
      this.#allEditableAnnotations ||= await this.#pdfDocument.getAnnotationsByType(new Set(this.#editorTypes.map(editorClass => editorClass._editorType)));
      const elementIds = new Set();
      const allComments = [];
      for (const editor of this.#allEditors.values()) {
        const {
          annotationElementId,
          hasComment,
          deleted
        } = editor;
        if (annotationElementId) {
          elementIds.add(annotationElementId);
        }
        if (hasComment && !deleted) {
          allComments.push(editor.getData());
        }
      }
      for (const annotation of this.#allEditableAnnotations) {
        const {
          id,
          popupRef,
          contentsObj
        } = annotation;
        if (popupRef && contentsObj?.str && !elementIds.has(id) && !this.#deletedAnnotationsElementIds.has(id)) {
          allComments.push(annotation);
        }
      }
      this.#commentManager?.showSidebar(allComments);
    }
    if (!editId) {
      if (isFromKeyboard) {
        this.addNewEditorFromKeyboard();
      }
      this.#updateModeCapability.resolve();
      return;
    }
    for (const editor of this.#allEditors.values()) {
      if (editor.uid === editId) {
        this.setSelected(editor);
        if (editComment) {
          editor.editComment();
        } else if (mustEnterInEditMode) {
          editor.enterInEditMode();
        } else {
          editor.focus();
        }
      } else {
        editor.unselect();
      }
    }
    this.#updateModeCapability.resolve();
  }
  addNewEditorFromKeyboard() {
    if (this.currentLayer.canCreateNewEmptyEditor()) {
      this.currentLayer.addNewEditor();
    }
  }
  updateToolbar(options) {
    if (options.mode === this.#mode) {
      return;
    }
    this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      ...options
    });
  }
  updateParams(type, value) {
    if (!this.#editorTypes) {
      return;
    }
    switch (type) {
      case AnnotationEditorParamsType.CREATE:
        this.currentLayer.addNewEditor(value);
        return;
      case AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL:
        this._eventBus.dispatch("reporttelemetry", {
          source: this,
          details: {
            type: "editing",
            data: {
              type: "highlight",
              action: "toggle_visibility"
            }
          }
        });
        (this.#showAllStates ||= new Map()).set(type, value);
        this.showAllEditors("highlight", value);
        break;
    }
    if (this.hasSelection) {
      for (const editor of this.#selectedEditors) {
        editor.updateParams(type, value);
      }
    } else {
      for (const editorType of this.#editorTypes) {
        editorType.updateDefaultParams(type, value);
      }
    }
  }
  showAllEditors(type, visible, updateButton = false) {
    for (const editor of this.#allEditors.values()) {
      if (editor.editorType === type) {
        editor.show(visible);
      }
    }
    const state = this.#showAllStates?.get(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL) ?? true;
    if (state !== visible) {
      this.#dispatchUpdateUI([[AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, visible]]);
    }
  }
  enableWaiting(mustWait = false) {
    if (this.#isWaiting === mustWait) {
      return;
    }
    this.#isWaiting = mustWait;
    for (const layer of this.#allLayers.values()) {
      if (mustWait) {
        layer.disableClick();
      } else {
        layer.enableClick();
      }
      layer.div.classList.toggle("waiting", mustWait);
    }
  }
  async #enableAll() {
    if (!this.#isEnabled) {
      this.#isEnabled = true;
      const promises = [];
      for (const layer of this.#allLayers.values()) {
        promises.push(layer.enable());
      }
      await Promise.all(promises);
      for (const editor of this.#allEditors.values()) {
        editor.enable();
      }
    }
  }
  #disableAll() {
    this.unselectAll();
    if (this.#isEnabled) {
      this.#isEnabled = false;
      for (const layer of this.#allLayers.values()) {
        layer.disable();
      }
      for (const editor of this.#allEditors.values()) {
        editor.disable();
      }
    }
  }
  *getEditors(pageIndex) {
    for (const editor of this.#allEditors.values()) {
      if (editor.pageIndex === pageIndex) {
        yield editor;
      }
    }
  }
  getEditor(id) {
    return this.#allEditors.get(id);
  }
  addEditor(editor) {
    this.#allEditors.set(editor.id, editor);
  }
  removeEditor(editor) {
    if (editor.div.contains(document.activeElement)) {
      if (this.#focusMainContainerTimeoutId) {
        clearTimeout(this.#focusMainContainerTimeoutId);
      }
      this.#focusMainContainerTimeoutId = setTimeout(() => {
        this.focusMainContainer();
        this.#focusMainContainerTimeoutId = null;
      }, 0);
    }
    this.#allEditors.delete(editor.id);
    if (editor.annotationElementId) {
      this.#missingCanvases?.delete(editor.annotationElementId);
    }
    this.unselect(editor);
    if (!editor.annotationElementId || !this.#deletedAnnotationsElementIds.has(editor.annotationElementId)) {
      this.#annotationStorage?.remove(editor.id);
    }
  }
  addDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.add(editor.annotationElementId);
    this.addChangedExistingAnnotation(editor);
    editor.deleted = true;
  }
  isDeletedAnnotationElement(annotationElementId) {
    return this.#deletedAnnotationsElementIds.has(annotationElementId);
  }
  removeDeletedAnnotationElement(editor) {
    this.#deletedAnnotationsElementIds.delete(editor.annotationElementId);
    this.removeChangedExistingAnnotation(editor);
    editor.deleted = false;
  }
  #addEditorToLayer(editor) {
    const layer = this.#allLayers.get(editor.pageIndex);
    if (layer) {
      layer.addOrRebuild(editor);
    } else {
      this.addEditor(editor);
      this.addToAnnotationStorage(editor);
    }
  }
  setActiveEditor(editor) {
    if (this.#activeEditor === editor) {
      return;
    }
    this.#activeEditor = editor;
    if (editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  get #lastSelectedEditor() {
    let ed = null;
    for (ed of this.#selectedEditors) {}
    return ed;
  }
  updateUI(editor) {
    if (this.#lastSelectedEditor === editor) {
      this.#dispatchUpdateUI(editor.propertiesToUpdate);
    }
  }
  updateUIForDefaultProperties(editorType) {
    this.#dispatchUpdateUI(editorType.defaultPropertiesToUpdate);
  }
  toggleSelected(editor) {
    if (this.#selectedEditors.has(editor)) {
      this.#selectedEditors.delete(editor);
      editor.unselect();
      this.#dispatchUpdateStates({
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  setSelected(editor) {
    this.updateToolbar({
      mode: editor.mode,
      editId: editor.uid
    });
    this.#currentDrawingSession?.commitOrRemove();
    for (const ed of this.#selectedEditors) {
      if (ed !== editor) {
        ed.unselect();
      }
    }
    this.#commentManager?.destroyPopup();
    this.#selectedEditors.clear();
    this.#selectedEditors.add(editor);
    editor.select();
    this.#dispatchUpdateUI(editor.propertiesToUpdate);
    this.#dispatchUpdateStates({
      hasSelectedEditor: true
    });
  }
  isSelected(editor) {
    return this.#selectedEditors.has(editor);
  }
  get firstSelectedEditor() {
    return this.#selectedEditors.values().next().value;
  }
  unselect(editor) {
    editor.unselect();
    this.#selectedEditors.delete(editor);
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return this.#selectedEditors.size !== 0;
  }
  get isEnterHandled() {
    return this.#selectedEditors.size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    this.#commandManager.undo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: this.#commandManager.hasSomethingToUndo(),
      hasSomethingToRedo: true,
      isEmpty: this.#isEmpty()
    });
    this._editorUndoBar?.hide();
  }
  redo() {
    this.#commandManager.redo();
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: this.#commandManager.hasSomethingToRedo(),
      isEmpty: this.#isEmpty()
    });
  }
  addCommands(params) {
    this.#commandManager.add(params);
    this.#dispatchUpdateStates({
      hasSomethingToUndo: true,
      hasSomethingToRedo: false,
      isEmpty: this.#isEmpty()
    });
  }
  cleanUndoStack(type) {
    this.#commandManager.cleanType(type);
  }
  #isEmpty() {
    if (this.#allEditors.size === 0) {
      return true;
    }
    if (this.#allEditors.size === 1) {
      for (const editor of this.#allEditors.values()) {
        return editor.isEmpty();
      }
    }
    return false;
  }
  delete() {
    this.commitOrRemove();
    const drawingEditor = this.currentLayer?.endDrawingSession(true);
    if (!this.hasSelection && !drawingEditor) {
      return;
    }
    const editors = drawingEditor ? [drawingEditor] : [...this.#selectedEditors];
    const cmd = () => {
      this._editorUndoBar?.show(undo, editors.length === 1 ? editors[0].editorType : editors.length);
      for (const editor of editors) {
        editor.remove();
      }
    };
    const undo = () => {
      for (const editor of editors) {
        this.#addEditorToLayer(editor);
      }
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: true
    });
  }
  commitOrRemove() {
    this.#activeEditor?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#activeEditor || this.hasSelection;
  }
  #selectEditors(editors) {
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    for (const editor of editors) {
      if (editor.isEmpty()) {
        continue;
      }
      this.#selectedEditors.add(editor);
      editor.select();
    }
    this.#dispatchUpdateStates({
      hasSelectedEditor: this.hasSelection
    });
  }
  selectAll() {
    for (const editor of this.#selectedEditors) {
      editor.commit();
    }
    this.#selectEditors(this.#allEditors.values());
  }
  unselectAll() {
    if (this.#activeEditor) {
      this.#activeEditor.commitOrRemove();
      if (this.#mode !== AnnotationEditorType.NONE) {
        return;
      }
    }
    if (this.#currentDrawingSession?.commitOrRemove()) {
      return;
    }
    this.#commentManager?.destroyPopup();
    if (!this.hasSelection) {
      return;
    }
    for (const editor of this.#selectedEditors) {
      editor.unselect();
    }
    this.#selectedEditors.clear();
    this.#dispatchUpdateStates({
      hasSelectedEditor: false
    });
  }
  translateSelectedEditors(x, y, noCommit = false) {
    if (!noCommit) {
      this.commitOrRemove();
    }
    if (!this.hasSelection) {
      return;
    }
    this.#translation[0] += x;
    this.#translation[1] += y;
    const [totalX, totalY] = this.#translation;
    const editors = [...this.#selectedEditors];
    const TIME_TO_WAIT = 1000;
    if (this.#translationTimeoutId) {
      clearTimeout(this.#translationTimeoutId);
    }
    this.#translationTimeoutId = setTimeout(() => {
      this.#translationTimeoutId = null;
      this.#translation[0] = this.#translation[1] = 0;
      this.addCommands({
        cmd: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(totalX, totalY);
              editor.translationDone();
            }
          }
        },
        undo: () => {
          for (const editor of editors) {
            if (this.#allEditors.has(editor.id)) {
              editor.translateInPage(-totalX, -totalY);
              editor.translationDone();
            }
          }
        },
        mustExec: false
      });
    }, TIME_TO_WAIT);
    for (const editor of editors) {
      editor.translateInPage(x, y);
      editor.translationDone();
    }
  }
  setUpDragSession() {
    if (!this.hasSelection) {
      return;
    }
    this.disableUserSelect(true);
    this.#draggingEditors = new Map();
    for (const editor of this.#selectedEditors) {
      this.#draggingEditors.set(editor, {
        savedX: editor.x,
        savedY: editor.y,
        savedPageIndex: editor.pageIndex,
        newX: 0,
        newY: 0,
        newPageIndex: -1
      });
    }
  }
  endDragSession() {
    if (!this.#draggingEditors) {
      return false;
    }
    this.disableUserSelect(false);
    const map = this.#draggingEditors;
    this.#draggingEditors = null;
    let mustBeAddedInUndoStack = false;
    for (const [{
      x,
      y,
      pageIndex
    }, value] of map) {
      value.newX = x;
      value.newY = y;
      value.newPageIndex = pageIndex;
      mustBeAddedInUndoStack ||= x !== value.savedX || y !== value.savedY || pageIndex !== value.savedPageIndex;
    }
    if (!mustBeAddedInUndoStack) {
      return false;
    }
    const move = (editor, x, y, pageIndex) => {
      if (this.#allEditors.has(editor.id)) {
        const parent = this.#allLayers.get(pageIndex);
        if (parent) {
          editor._setParentAndPosition(parent, x, y);
        } else {
          editor.pageIndex = pageIndex;
          editor.x = x;
          editor.y = y;
        }
      }
    };
    this.addCommands({
      cmd: () => {
        for (const [editor, {
          newX,
          newY,
          newPageIndex
        }] of map) {
          move(editor, newX, newY, newPageIndex);
        }
      },
      undo: () => {
        for (const [editor, {
          savedX,
          savedY,
          savedPageIndex
        }] of map) {
          move(editor, savedX, savedY, savedPageIndex);
        }
      },
      mustExec: true
    });
    return true;
  }
  dragSelectedEditors(tx, ty) {
    if (!this.#draggingEditors) {
      return;
    }
    for (const editor of this.#draggingEditors.keys()) {
      editor.drag(tx, ty);
    }
  }
  rebuild(editor) {
    if (editor.parent === null) {
      const parent = this.getLayer(editor.pageIndex);
      if (parent) {
        parent.changeParent(editor);
        parent.addOrRebuild(editor);
      } else {
        this.addEditor(editor);
        this.addToAnnotationStorage(editor);
        editor.rebuild();
      }
    } else {
      editor.parent.addOrRebuild(editor);
    }
  }
  get isEditorHandlingKeyboard() {
    return this.getActive()?.shouldGetKeyboardEvents() || this.#selectedEditors.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(editor) {
    return this.#activeEditor === editor;
  }
  getActive() {
    return this.#activeEditor;
  }
  getMode() {
    return this.#mode;
  }
  isEditingMode() {
    return this.#mode !== AnnotationEditorType.NONE;
  }
  get imageManager() {
    return shadow(this, "imageManager", new ImageManager());
  }
  getSelectionBoxes(textLayer) {
    if (!textLayer) {
      return null;
    }
    const selection = document.getSelection();
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      if (!textLayer.contains(selection.getRangeAt(i).commonAncestorContainer)) {
        return null;
      }
    }
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    let rotator;
    switch (textLayer.getAttribute("data-main-rotation")) {
      case "90":
        rotator = (x, y, w, h) => ({
          x: (y - layerY) / parentHeight,
          y: 1 - (x + w - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      case "180":
        rotator = (x, y, w, h) => ({
          x: 1 - (x + w - layerX) / parentWidth,
          y: 1 - (y + h - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
      case "270":
        rotator = (x, y, w, h) => ({
          x: 1 - (y + h - layerY) / parentHeight,
          y: (x - layerX) / parentWidth,
          width: h / parentHeight,
          height: w / parentWidth
        });
        break;
      default:
        rotator = (x, y, w, h) => ({
          x: (x - layerX) / parentWidth,
          y: (y - layerY) / parentHeight,
          width: w / parentWidth,
          height: h / parentHeight
        });
        break;
    }
    const boxes = [];
    for (let i = 0, ii = selection.rangeCount; i < ii; i++) {
      const range = selection.getRangeAt(i);
      if (range.collapsed) {
        continue;
      }
      for (const {
        x,
        y,
        width,
        height
      } of range.getClientRects()) {
        if (width === 0 || height === 0) {
          continue;
        }
        boxes.push(rotator(x, y, width, height));
      }
    }
    return boxes.length === 0 ? null : boxes;
  }
  addChangedExistingAnnotation({
    annotationElementId,
    id
  }) {
    (this.#changedExistingAnnotations ||= new Map()).set(annotationElementId, id);
  }
  removeChangedExistingAnnotation({
    annotationElementId
  }) {
    this.#changedExistingAnnotations?.delete(annotationElementId);
  }
  renderAnnotationElement(annotation) {
    const editorId = this.#changedExistingAnnotations?.get(annotation.data.id);
    if (!editorId) {
      return;
    }
    const editor = this.#annotationStorage.getRawValue(editorId);
    if (!editor) {
      return;
    }
    if (this.#mode === AnnotationEditorType.NONE && !editor.hasBeenModified) {
      return;
    }
    editor.renderAnnotationElement(annotation);
  }
  setMissingCanvas(annotationId, annotationElementId, canvas) {
    const editor = this.#missingCanvases?.get(annotationId);
    if (!editor) {
      return;
    }
    editor.setCanvas(annotationElementId, canvas);
    this.#missingCanvases.delete(annotationId);
  }
  addMissingCanvas(annotationId, editor) {
    (this.#missingCanvases ||= new Map()).set(annotationId, editor);
  }
}

;// ./src/display/editor/alt_text.js

class AltText {
  #altText = null;
  #altTextDecorative = false;
  #altTextButton = null;
  #altTextButtonLabel = null;
  #altTextTooltip = null;
  #altTextTooltipTimeout = null;
  #altTextWasFromKeyBoard = false;
  #badge = null;
  #editor = null;
  #guessedText = null;
  #textWithDisclaimer = null;
  #useNewAltTextFlow = false;
  static #l10nNewButton = null;
  static _l10n = null;
  constructor(editor) {
    this.#editor = editor;
    this.#useNewAltTextFlow = editor._uiManager.useNewAltTextFlow;
    AltText.#l10nNewButton ||= Object.freeze({
      added: "pdfjs-editor-new-alt-text-added-button",
      "added-label": "pdfjs-editor-new-alt-text-added-button-label",
      missing: "pdfjs-editor-new-alt-text-missing-button",
      "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
      review: "pdfjs-editor-new-alt-text-to-review-button",
      "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
    });
  }
  static initialize(l10n) {
    AltText._l10n ??= l10n;
  }
  async render() {
    const altText = this.#altTextButton = document.createElement("button");
    altText.className = "altText";
    altText.tabIndex = "0";
    const label = this.#altTextButtonLabel = document.createElement("span");
    altText.append(label);
    if (this.#useNewAltTextFlow) {
      altText.classList.add("new");
      altText.setAttribute("data-l10n-id", AltText.#l10nNewButton.missing);
      label.setAttribute("data-l10n-id", AltText.#l10nNewButton["missing-label"]);
    } else {
      altText.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button");
      label.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label");
    }
    const signal = this.#editor._uiManager._signal;
    altText.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    altText.addEventListener("pointerdown", event => event.stopPropagation(), {
      signal
    });
    const onClick = event => {
      event.preventDefault();
      this.#editor._uiManager.editAltText(this.#editor);
      if (this.#useNewAltTextFlow) {
        this.#editor._reportTelemetry({
          action: "pdfjs.image.alt_text.image_status_label_clicked",
          data: {
            label: this.#label
          }
        });
      }
    };
    altText.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    altText.addEventListener("keydown", event => {
      if (event.target === altText && event.key === "Enter") {
        this.#altTextWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    await this.#setState();
    return altText;
  }
  get #label() {
    return this.#altText && "added" || this.#altText === null && this.guessedText && "review" || "missing";
  }
  finish() {
    if (!this.#altTextButton) {
      return;
    }
    this.#altTextButton.focus({
      focusVisible: this.#altTextWasFromKeyBoard
    });
    this.#altTextWasFromKeyBoard = false;
  }
  isEmpty() {
    if (this.#useNewAltTextFlow) {
      return this.#altText === null;
    }
    return !this.#altText && !this.#altTextDecorative;
  }
  hasData() {
    if (this.#useNewAltTextFlow) {
      return this.#altText !== null || !!this.#guessedText;
    }
    return this.isEmpty();
  }
  get guessedText() {
    return this.#guessedText;
  }
  async setGuessedText(guessedText) {
    if (this.#altText !== null) {
      return;
    }
    this.#guessedText = guessedText;
    this.#textWithDisclaimer = await AltText._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
      generatedAltText: guessedText
    });
    this.#setState();
  }
  toggleAltTextBadge(visibility = false) {
    if (!this.#useNewAltTextFlow || this.#altText) {
      this.#badge?.remove();
      this.#badge = null;
      return;
    }
    if (!this.#badge) {
      const badge = this.#badge = document.createElement("div");
      badge.className = "noAltTextBadge";
      this.#editor.div.append(badge);
    }
    this.#badge.classList.toggle("hidden", !visibility);
  }
  serialize(isForCopying) {
    let altText = this.#altText;
    if (!isForCopying && this.#guessedText === altText) {
      altText = this.#textWithDisclaimer;
    }
    return {
      altText,
      decorative: this.#altTextDecorative,
      guessedText: this.#guessedText,
      textWithDisclaimer: this.#textWithDisclaimer
    };
  }
  get data() {
    return {
      altText: this.#altText,
      decorative: this.#altTextDecorative
    };
  }
  set data({
    altText,
    decorative,
    guessedText,
    textWithDisclaimer,
    cancel = false
  }) {
    if (guessedText) {
      this.#guessedText = guessedText;
      this.#textWithDisclaimer = textWithDisclaimer;
    }
    if (this.#altText === altText && this.#altTextDecorative === decorative) {
      return;
    }
    if (!cancel) {
      this.#altText = altText;
      this.#altTextDecorative = decorative;
    }
    this.#setState();
  }
  toggle(enabled = false) {
    if (!this.#altTextButton) {
      return;
    }
    if (!enabled && this.#altTextTooltipTimeout) {
      clearTimeout(this.#altTextTooltipTimeout);
      this.#altTextTooltipTimeout = null;
    }
    this.#altTextButton.disabled = !enabled;
  }
  shown() {
    this.#editor._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: {
        label: this.#label
      }
    });
  }
  destroy() {
    this.#altTextButton?.remove();
    this.#altTextButton = null;
    this.#altTextButtonLabel = null;
    this.#altTextTooltip = null;
    this.#badge?.remove();
    this.#badge = null;
  }
  async #setState() {
    const button = this.#altTextButton;
    if (!button) {
      return;
    }
    if (this.#useNewAltTextFlow) {
      button.classList.toggle("done", !!this.#altText);
      button.setAttribute("data-l10n-id", AltText.#l10nNewButton[this.#label]);
      this.#altTextButtonLabel?.setAttribute("data-l10n-id", AltText.#l10nNewButton[`${this.#label}-label`]);
      if (!this.#altText) {
        this.#altTextTooltip?.remove();
        return;
      }
    } else {
      if (!this.#altText && !this.#altTextDecorative) {
        button.classList.remove("done");
        this.#altTextTooltip?.remove();
        return;
      }
      button.classList.add("done");
      button.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
    }
    let tooltip = this.#altTextTooltip;
    if (!tooltip) {
      this.#altTextTooltip = tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.setAttribute("role", "tooltip");
      tooltip.id = `alt-text-tooltip-${this.#editor.id}`;
      const DELAY_TO_SHOW_TOOLTIP = 100;
      const signal = this.#editor._uiManager._signal;
      signal.addEventListener("abort", () => {
        clearTimeout(this.#altTextTooltipTimeout);
        this.#altTextTooltipTimeout = null;
      }, {
        once: true
      });
      button.addEventListener("mouseenter", () => {
        this.#altTextTooltipTimeout = setTimeout(() => {
          this.#altTextTooltipTimeout = null;
          this.#altTextTooltip.classList.add("show");
          this.#editor._reportTelemetry({
            action: "alt_text_tooltip"
          });
        }, DELAY_TO_SHOW_TOOLTIP);
      }, {
        signal
      });
      button.addEventListener("mouseleave", () => {
        if (this.#altTextTooltipTimeout) {
          clearTimeout(this.#altTextTooltipTimeout);
          this.#altTextTooltipTimeout = null;
        }
        this.#altTextTooltip?.classList.remove("show");
      }, {
        signal
      });
    }
    if (this.#altTextDecorative) {
      tooltip.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip");
    } else {
      tooltip.removeAttribute("data-l10n-id");
      tooltip.textContent = this.#altText;
    }
    if (!tooltip.parentNode) {
      button.append(tooltip);
    }
    const element = this.#editor.getElementForAltText();
    element?.setAttribute("aria-describedby", tooltip.id);
  }
}

;// ./src/display/editor/comment.js

class Comment {
  #commentStandaloneButton = null;
  #commentToolbarButton = null;
  #commentWasFromKeyBoard = false;
  #editor = null;
  #initialText = null;
  #richText = null;
  #text = null;
  #date = null;
  #deleted = false;
  #popupPosition = null;
  constructor(editor) {
    this.#editor = editor;
  }
  renderForToolbar() {
    const button = this.#commentToolbarButton = document.createElement("button");
    button.className = "comment";
    return this.#render(button, false);
  }
  renderForStandalone() {
    const button = this.#commentStandaloneButton = document.createElement("button");
    button.className = "annotationCommentButton";
    const position = this.#editor.commentButtonPosition;
    if (position) {
      const {
        style
      } = button;
      style.insetInlineEnd = `calc(${100 * (this.#editor._uiManager.direction === "ltr" ? 1 - position[0] : position[0])}% - var(--comment-button-dim))`;
      style.top = `calc(${100 * position[1]}% - var(--comment-button-dim))`;
      const color = this.#editor.commentButtonColor;
      if (color) {
        style.backgroundColor = color;
      }
    }
    return this.#render(button, true);
  }
  focusButton() {
    setTimeout(() => {
      (this.#commentStandaloneButton ?? this.#commentToolbarButton)?.focus();
    }, 0);
  }
  onUpdatedColor() {
    if (!this.#commentStandaloneButton) {
      return;
    }
    const color = this.#editor.commentButtonColor;
    if (color) {
      this.#commentStandaloneButton.style.backgroundColor = color;
    }
    this.#editor._uiManager.updatePopupColor(this.#editor);
  }
  get commentButtonWidth() {
    return (this.#commentStandaloneButton?.getBoundingClientRect().width ?? 0) / this.#editor.parent.boundingClientRect.width;
  }
  get commentPopupPositionInLayer() {
    if (this.#popupPosition) {
      return this.#popupPosition;
    }
    if (!this.#commentStandaloneButton) {
      return null;
    }
    const {
      x,
      y,
      height
    } = this.#commentStandaloneButton.getBoundingClientRect();
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentHeight
    } = this.#editor.parent.boundingClientRect;
    return [(x - parentX) / parentWidth, (y + height - parentY) / parentHeight];
  }
  set commentPopupPositionInLayer(pos) {
    this.#popupPosition = pos;
  }
  hasDefaultPopupPosition() {
    return this.#popupPosition === null;
  }
  removeStandaloneCommentButton() {
    this.#commentStandaloneButton?.remove();
    this.#commentStandaloneButton = null;
  }
  removeToolbarCommentButton() {
    this.#commentToolbarButton?.remove();
    this.#commentToolbarButton = null;
  }
  setCommentButtonStates({
    selected,
    hasPopup
  }) {
    if (!this.#commentStandaloneButton) {
      return;
    }
    this.#commentStandaloneButton.classList.toggle("selected", selected);
    this.#commentStandaloneButton.ariaExpanded = hasPopup;
  }
  #render(comment, isStandalone) {
    if (!this.#editor._uiManager.hasCommentManager()) {
      return null;
    }
    comment.tabIndex = "0";
    comment.ariaHasPopup = "dialog";
    if (isStandalone) {
      comment.ariaControls = "commentPopup";
      comment.setAttribute("data-l10n-id", "pdfjs-show-comment-button");
    } else {
      comment.ariaControlsElements = [this.#editor._uiManager.getCommentDialogElement()];
      comment.setAttribute("data-l10n-id", "pdfjs-editor-add-comment-button");
    }
    const signal = this.#editor._uiManager._signal;
    if (!(signal instanceof AbortSignal) || signal.aborted) {
      return comment;
    }
    comment.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    if (isStandalone) {
      comment.addEventListener("focusin", e => {
        this.#editor._focusEventsAllowed = false;
        stopEvent(e);
      }, {
        capture: true,
        signal
      });
      comment.addEventListener("focusout", e => {
        this.#editor._focusEventsAllowed = true;
        stopEvent(e);
      }, {
        capture: true,
        signal
      });
    }
    comment.addEventListener("pointerdown", event => event.stopPropagation(), {
      signal
    });
    const onClick = event => {
      event.preventDefault();
      if (comment === this.#commentToolbarButton) {
        this.edit();
      } else {
        this.#editor.toggleComment(true);
      }
    };
    comment.addEventListener("click", onClick, {
      capture: true,
      signal
    });
    comment.addEventListener("keydown", event => {
      if (event.target === comment && event.key === "Enter") {
        this.#commentWasFromKeyBoard = true;
        onClick(event);
      }
    }, {
      signal
    });
    comment.addEventListener("pointerenter", () => {
      this.#editor.toggleComment(false, true);
    }, {
      signal
    });
    comment.addEventListener("pointerleave", () => {
      this.#editor.toggleComment(false, false);
    }, {
      signal
    });
    return comment;
  }
  edit(options) {
    const position = this.commentPopupPositionInLayer;
    let posX, posY;
    if (position) {
      [posX, posY] = position;
    } else {
      [posX, posY] = this.#editor.commentButtonPosition;
      const {
        width,
        height,
        x,
        y
      } = this.#editor;
      posX = x + posX * width;
      posY = y + posY * height;
    }
    const parentDimensions = this.#editor.parent.boundingClientRect;
    const {
      x: parentX,
      y: parentY,
      width: parentWidth,
      height: parentHeight
    } = parentDimensions;
    this.#editor._uiManager.editComment(this.#editor, parentX + posX * parentWidth, parentY + posY * parentHeight, {
      ...options,
      parentDimensions
    });
  }
  finish() {
    if (!this.#commentToolbarButton) {
      return;
    }
    this.#commentToolbarButton.focus({
      focusVisible: this.#commentWasFromKeyBoard
    });
    this.#commentWasFromKeyBoard = false;
  }
  isDeleted() {
    return this.#deleted || this.#text === "";
  }
  isEmpty() {
    return this.#text === null;
  }
  hasBeenEdited() {
    return this.isDeleted() || this.#text !== this.#initialText;
  }
  serialize() {
    return this.data;
  }
  get data() {
    return {
      text: this.#text,
      richText: this.#richText,
      date: this.#date,
      deleted: this.isDeleted()
    };
  }
  set data(text) {
    if (text !== this.#text) {
      this.#richText = null;
    }
    if (text === null) {
      this.#text = "";
      this.#deleted = true;
      return;
    }
    this.#text = text;
    this.#date = new Date();
    this.#deleted = false;
  }
  restoreData({
    text,
    richText,
    date
  }) {
    this.#text = text;
    this.#richText = richText;
    this.#date = date;
    this.#deleted = false;
  }
  setInitialText(text, richText = null) {
    this.#initialText = text;
    this.data = text;
    this.#date = null;
    this.#richText = richText;
  }
  shown() {}
  destroy() {
    this.#commentToolbarButton?.remove();
    this.#commentToolbarButton = null;
    this.#commentStandaloneButton?.remove();
    this.#commentStandaloneButton = null;
    this.#text = "";
    this.#richText = null;
    this.#date = null;
    this.#editor = null;
    this.#commentWasFromKeyBoard = false;
    this.#deleted = false;
  }
}

;// ./src/display/touch_manager.js

class TouchManager {
  #container;
  #isPinching = false;
  #isPinchingStopped = null;
  #isPinchingDisabled;
  #onPinchStart;
  #onPinching;
  #onPinchEnd;
  #pointerDownAC = null;
  #signal;
  #touchInfo = null;
  #touchManagerAC;
  #touchMoveAC = null;
  constructor({
    container,
    isPinchingDisabled = null,
    isPinchingStopped = null,
    onPinchStart = null,
    onPinching = null,
    onPinchEnd = null,
    signal
  }) {
    this.#container = container;
    this.#isPinchingStopped = isPinchingStopped;
    this.#isPinchingDisabled = isPinchingDisabled;
    this.#onPinchStart = onPinchStart;
    this.#onPinching = onPinching;
    this.#onPinchEnd = onPinchEnd;
    this.#touchManagerAC = new AbortController();
    this.#signal = AbortSignal.any([signal, this.#touchManagerAC.signal]);
    container.addEventListener("touchstart", this.#onTouchStart.bind(this), {
      passive: false,
      signal: this.#signal
    });
  }
  get MIN_TOUCH_DISTANCE_TO_PINCH() {
    return 35 / OutputScale.pixelRatio;
  }
  #onTouchStart(evt) {
    if (this.#isPinchingDisabled?.()) {
      return;
    }
    if (evt.touches.length === 1) {
      if (this.#pointerDownAC) {
        return;
      }
      const pointerDownAC = this.#pointerDownAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, pointerDownAC.signal]);
      const container = this.#container;
      const opts = {
        capture: true,
        signal,
        passive: false
      };
      const cancelPointerDown = e => {
        if (e.pointerType === "touch") {
          this.#pointerDownAC?.abort();
          this.#pointerDownAC = null;
        }
      };
      container.addEventListener("pointerdown", e => {
        if (e.pointerType === "touch") {
          stopEvent(e);
          cancelPointerDown(e);
        }
      }, opts);
      container.addEventListener("pointerup", cancelPointerDown, opts);
      container.addEventListener("pointercancel", cancelPointerDown, opts);
      return;
    }
    if (!this.#touchMoveAC) {
      this.#touchMoveAC = new AbortController();
      const signal = AbortSignal.any([this.#signal, this.#touchMoveAC.signal]);
      const container = this.#container;
      const opt = {
        signal,
        capture: false,
        passive: false
      };
      container.addEventListener("touchmove", this.#onTouchMove.bind(this), opt);
      const onTouchEnd = this.#onTouchEnd.bind(this);
      container.addEventListener("touchend", onTouchEnd, opt);
      container.addEventListener("touchcancel", onTouchEnd, opt);
      opt.capture = true;
      container.addEventListener("pointerdown", stopEvent, opt);
      container.addEventListener("pointermove", stopEvent, opt);
      container.addEventListener("pointercancel", stopEvent, opt);
      container.addEventListener("pointerup", stopEvent, opt);
      this.#onPinchStart?.();
    }
    stopEvent(evt);
    if (evt.touches.length !== 2 || this.#isPinchingStopped?.()) {
      this.#touchInfo = null;
      return;
    }
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    this.#touchInfo = {
      touch0X: touch0.screenX,
      touch0Y: touch0.screenY,
      touch1X: touch1.screenX,
      touch1Y: touch1.screenY
    };
  }
  #onTouchMove(evt) {
    if (!this.#touchInfo || evt.touches.length !== 2) {
      return;
    }
    stopEvent(evt);
    let [touch0, touch1] = evt.touches;
    if (touch0.identifier > touch1.identifier) {
      [touch0, touch1] = [touch1, touch0];
    }
    const {
      screenX: screen0X,
      screenY: screen0Y
    } = touch0;
    const {
      screenX: screen1X,
      screenY: screen1Y
    } = touch1;
    const touchInfo = this.#touchInfo;
    const {
      touch0X: pTouch0X,
      touch0Y: pTouch0Y,
      touch1X: pTouch1X,
      touch1Y: pTouch1Y
    } = touchInfo;
    const prevGapX = pTouch1X - pTouch0X;
    const prevGapY = pTouch1Y - pTouch0Y;
    const currGapX = screen1X - screen0X;
    const currGapY = screen1Y - screen0Y;
    const distance = Math.hypot(currGapX, currGapY) || 1;
    const pDistance = Math.hypot(prevGapX, prevGapY) || 1;
    if (!this.#isPinching && Math.abs(pDistance - distance) <= TouchManager.MIN_TOUCH_DISTANCE_TO_PINCH) {
      return;
    }
    touchInfo.touch0X = screen0X;
    touchInfo.touch0Y = screen0Y;
    touchInfo.touch1X = screen1X;
    touchInfo.touch1Y = screen1Y;
    if (!this.#isPinching) {
      this.#isPinching = true;
      return;
    }
    const origin = [(screen0X + screen1X) / 2, (screen0Y + screen1Y) / 2];
    this.#onPinching?.(origin, pDistance, distance);
  }
  #onTouchEnd(evt) {
    if (evt.touches.length >= 2) {
      return;
    }
    if (this.#touchMoveAC) {
      this.#touchMoveAC.abort();
      this.#touchMoveAC = null;
      this.#onPinchEnd?.();
    }
    if (!this.#touchInfo) {
      return;
    }
    stopEvent(evt);
    this.#touchInfo = null;
    this.#isPinching = false;
  }
  destroy() {
    this.#touchManagerAC?.abort();
    this.#touchManagerAC = null;
    this.#pointerDownAC?.abort();
    this.#pointerDownAC = null;
  }
}

;// ./src/display/editor/editor.js







class AnnotationEditor {
  #accessibilityData = null;
  #allResizerDivs = null;
  #altText = null;
  #comment = null;
  #commentStandaloneButton = null;
  #disabled = false;
  #dragPointerId = null;
  #dragPointerType = "";
  #resizersDiv = null;
  #lastPointerCoords = null;
  #savedDimensions = null;
  #fakeAnnotation = null;
  #focusAC = null;
  #focusedResizerName = "";
  #hasBeenClicked = false;
  #initialRect = null;
  #isEditing = false;
  #isInEditMode = false;
  #isResizerEnabledForKeyboard = false;
  #moveInDOMTimeout = null;
  #prevDragX = 0;
  #prevDragY = 0;
  #telemetryTimeouts = null;
  #touchManager = null;
  isSelected = false;
  _isCopy = false;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = true;
  _uiManager = null;
  _focusEventsAllowed = true;
  static _l10n = null;
  static _l10nResizer = null;
  #isDraggable = false;
  #zIndex = AnnotationEditor._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ColorManager();
  static _zIndex = 1;
  static _telemetryTimeout = 1000;
  static get _resizerKeyboardManager() {
    const resize = AnnotationEditor.prototype._resizeWithKeyboard;
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_resizerKeyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], resize, {
      args: [-small, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], resize, {
      args: [-big, 0]
    }], [["ArrowRight", "mac+ArrowRight"], resize, {
      args: [small, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], resize, {
      args: [big, 0]
    }], [["ArrowUp", "mac+ArrowUp"], resize, {
      args: [0, -small]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], resize, {
      args: [0, -big]
    }], [["ArrowDown", "mac+ArrowDown"], resize, {
      args: [0, small]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], resize, {
      args: [0, big]
    }], [["Escape", "mac+Escape"], AnnotationEditor.prototype._stopResizingWithKeyboard]]));
  }
  constructor(parameters) {
    this.parent = parameters.parent;
    this.id = parameters.id;
    this.width = this.height = null;
    this.pageIndex = parameters.parent.pageIndex;
    this.name = parameters.name;
    this.div = null;
    this._uiManager = parameters.uiManager;
    this.annotationElementId = null;
    this._willKeepAspectRatio = false;
    this._initialOptions.isCentered = parameters.isCentered;
    this._structTreeParentId = null;
    this.annotationElementId = parameters.annotationElementId || null;
    this.creationDate = parameters.creationDate || new Date();
    this.modificationDate = parameters.modificationDate || null;
    this.canAddComment = true;
    const {
      rotation,
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = this.parent.viewport;
    this.rotation = rotation;
    this.pageRotation = (360 + rotation - this._uiManager.viewParameters.rotation) % 360;
    this.pageDimensions = [pageWidth, pageHeight];
    this.pageTranslation = [pageX, pageY];
    const [width, height] = this.parentDimensions;
    this.x = parameters.x / width;
    this.y = parameters.y / height;
    this.isAttachedToDOM = false;
    this.deleted = false;
  }
  updatePageIndex(newPageIndex) {
    this.pageIndex = newPageIndex;
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  get mode() {
    return Object.getPrototypeOf(this).constructor._editorType;
  }
  static get isDrawer() {
    return false;
  }
  static get _defaultLineColor() {
    return shadow(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(editor) {
    const fakeEditor = new FakeEditor({
      id: editor._uiManager.getId(),
      parent: editor.parent,
      uiManager: editor._uiManager
    });
    fakeEditor.annotationElementId = editor.annotationElementId;
    fakeEditor.deleted = true;
    fakeEditor._uiManager.addToAnnotationStorage(fakeEditor);
  }
  static initialize(l10n, _uiManager) {
    AnnotationEditor._l10n ??= l10n;
    AnnotationEditor._l10nResizer ||= Object.freeze({
      topLeft: "pdfjs-editor-resizer-top-left",
      topMiddle: "pdfjs-editor-resizer-top-middle",
      topRight: "pdfjs-editor-resizer-top-right",
      middleRight: "pdfjs-editor-resizer-middle-right",
      bottomRight: "pdfjs-editor-resizer-bottom-right",
      bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
      bottomLeft: "pdfjs-editor-resizer-bottom-left",
      middleLeft: "pdfjs-editor-resizer-middle-left"
    });
    if (AnnotationEditor._borderLineWidth !== -1) {
      return;
    }
    const style = getComputedStyle(document.documentElement);
    AnnotationEditor._borderLineWidth = parseFloat(style.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(_type, _value) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(mime) {
    return false;
  }
  static paste(item, parent) {
    unreachable("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#isDraggable;
  }
  set _isDraggable(value) {
    this.#isDraggable = value;
    this.div?.classList.toggle("draggable", value);
  }
  get uid() {
    return this.annotationElementId || this.id;
  }
  get isEnterHandled() {
    return true;
  }
  center() {
    const [pageWidth, pageHeight] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * pageHeight / (pageWidth * 2);
        this.y += this.width * pageWidth / (pageHeight * 2);
        break;
      case 180:
        this.x += this.width / 2;
        this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * pageHeight / (pageWidth * 2);
        this.y -= this.width * pageWidth / (pageHeight * 2);
        break;
      default:
        this.x -= this.width / 2;
        this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(params) {
    this._uiManager.addCommands(params);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#zIndex;
  }
  setParent(parent) {
    if (parent !== null) {
      this.pageIndex = parent.pageIndex;
      this.pageDimensions = parent.pageDimensions;
    } else {
      this.#stopResizing();
      this.#fakeAnnotation?.remove();
      this.#fakeAnnotation = null;
    }
    this.parent = parent;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.#hasBeenClicked) {
      this.parent.setSelected(this);
    } else {
      this.#hasBeenClicked = false;
    }
  }
  focusout(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    if (!this.isAttachedToDOM) {
      return;
    }
    const target = event.relatedTarget;
    if (target?.closest(`#${this.id}`)) {
      return;
    }
    event.preventDefault();
    if (!this.parent?.isMultipleSelection) {
      this.commitOrRemove();
    }
  }
  commitOrRemove() {
    if (this.isEmpty()) {
      this.remove();
    } else {
      this.commit();
    }
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(x, y, tx, ty) {
    const [width, height] = this.parentDimensions;
    [tx, ty] = this.screenToPageTranslation(tx, ty);
    this.x = (x + tx) / width;
    this.y = (y + ty) / height;
    this.fixAndSetPosition();
  }
  _moveAfterPaste(baseX, baseY) {
    if (this.isClone) {
      delete this.isClone;
      return;
    }
    const [parentWidth, parentHeight] = this.parentDimensions;
    this.setAt(baseX * parentWidth, baseY * parentHeight, this.width * parentWidth, this.height * parentHeight);
    this._onTranslated();
  }
  #translate([width, height], x, y) {
    [x, y] = this.screenToPageTranslation(x, y);
    this.x += x / width;
    this.y += y / height;
    this._onTranslating(this.x, this.y);
    this.fixAndSetPosition();
  }
  translate(x, y) {
    this.#translate(this.parentDimensions, x, y);
  }
  translateInPage(x, y) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.#translate(this.pageDimensions, x, y);
    this.div.scrollIntoView({
      block: "nearest"
    });
  }
  translationDone() {
    this._onTranslated(this.x, this.y);
  }
  drag(tx, ty) {
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    const {
      div,
      parentDimensions: [parentWidth, parentHeight]
    } = this;
    this.x += tx / parentWidth;
    this.y += ty / parentHeight;
    if (this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x,
        y
      } = this.div.getBoundingClientRect();
      if (this.parent.findNewParent(this, x, y)) {
        this.x -= Math.floor(this.x);
        this.y -= Math.floor(this.y);
      }
    }
    let {
      x,
      y
    } = this;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    const {
      style
    } = div;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this._onTranslating(x, y);
    div.scrollIntoView({
      block: "nearest"
    });
  }
  _onTranslating(x, y) {}
  _onTranslated(x, y) {}
  get _hasBeenMoved() {
    return !!this.#initialRect && (this.#initialRect[0] !== this.x || this.#initialRect[1] !== this.y);
  }
  get _hasBeenResized() {
    return !!this.#initialRect && (this.#initialRect[2] !== this.width || this.#initialRect[3] !== this.height);
  }
  getBaseTranslation() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      _borderLineWidth
    } = AnnotationEditor;
    const x = _borderLineWidth / parentWidth;
    const y = _borderLineWidth / parentHeight;
    switch (this.rotation) {
      case 90:
        return [-x, y];
      case 180:
        return [x, y];
      case 270:
        return [x, -y];
      default:
        return [-x, -y];
    }
  }
  get _mustFixPosition() {
    return true;
  }
  fixAndSetPosition(rotation = this.rotation) {
    const {
      div: {
        style
      },
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    let {
      x,
      y,
      width,
      height
    } = this;
    width *= pageWidth;
    height *= pageHeight;
    x *= pageWidth;
    y *= pageHeight;
    if (this._mustFixPosition) {
      switch (rotation) {
        case 0:
          x = MathClamp(x, 0, pageWidth - width);
          y = MathClamp(y, 0, pageHeight - height);
          break;
        case 90:
          x = MathClamp(x, 0, pageWidth - height);
          y = MathClamp(y, width, pageHeight);
          break;
        case 180:
          x = MathClamp(x, width, pageWidth);
          y = MathClamp(y, height, pageHeight);
          break;
        case 270:
          x = MathClamp(x, height, pageWidth);
          y = MathClamp(y, 0, pageHeight - width);
          break;
      }
    }
    this.x = x /= pageWidth;
    this.y = y /= pageHeight;
    const [bx, by] = this.getBaseTranslation();
    x += bx;
    y += by;
    style.left = `${(100 * x).toFixed(2)}%`;
    style.top = `${(100 * y).toFixed(2)}%`;
    this.moveInDOM();
  }
  static #rotatePoint(x, y, angle) {
    switch (angle) {
      case 90:
        return [y, -x];
      case 180:
        return [-x, -y];
      case 270:
        return [-y, x];
      default:
        return [x, y];
    }
  }
  screenToPageTranslation(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, this.parentRotation);
  }
  pageTranslationToScreen(x, y) {
    return AnnotationEditor.#rotatePoint(x, y, 360 - this.parentRotation);
  }
  #getRotationMatrix(rotation) {
    switch (rotation) {
      case 90:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, -pageWidth / pageHeight, pageHeight / pageWidth, 0];
        }
      case 180:
        return [-1, 0, 0, -1];
      case 270:
        {
          const [pageWidth, pageHeight] = this.pageDimensions;
          return [0, pageWidth / pageHeight, -pageHeight / pageWidth, 0];
        }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale,
      pageDimensions: [pageWidth, pageHeight]
    } = this;
    return [pageWidth * parentScale, pageHeight * parentScale];
  }
  setDims() {
    const {
      div: {
        style
      },
      width,
      height
    } = this;
    style.width = `${(100 * width).toFixed(2)}%`;
    style.height = `${(100 * height).toFixed(2)}%`;
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #createResizers() {
    if (this.#resizersDiv) {
      return;
    }
    this.#resizersDiv = document.createElement("div");
    this.#resizersDiv.classList.add("resizers");
    const classes = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
    const signal = this._uiManager._signal;
    for (const name of classes) {
      const div = document.createElement("div");
      this.#resizersDiv.append(div);
      div.classList.add("resizer", name);
      div.setAttribute("data-resizer-name", name);
      div.addEventListener("pointerdown", this.#resizerPointerdown.bind(this, name), {
        signal
      });
      div.addEventListener("contextmenu", noContextMenu, {
        signal
      });
      div.tabIndex = -1;
    }
    this.div.prepend(this.#resizersDiv);
  }
  #resizerPointerdown(name, event) {
    event.preventDefault();
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    this.#altText?.toggle(false);
    const savedDraggable = this._isDraggable;
    this._isDraggable = false;
    this.#lastPointerCoords = [event.screenX, event.screenY];
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    this.parent.togglePointerEvents(false);
    window.addEventListener("pointermove", this.#resizerPointermove.bind(this, name), {
      passive: true,
      capture: true,
      signal
    });
    window.addEventListener("touchmove", stopEvent, {
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const savedParentCursor = this.parent.div.style.cursor;
    const savedCursor = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(event.target).cursor;
    const pointerUpCallback = () => {
      ac.abort();
      this.parent.togglePointerEvents(true);
      this.#altText?.toggle(true);
      this._isDraggable = savedDraggable;
      this.parent.div.style.cursor = savedParentCursor;
      this.div.style.cursor = savedCursor;
      this.#addResizeToUndoStack();
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  #resize(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.setDims();
    this.fixAndSetPosition();
    this._onResized();
  }
  _onResized() {}
  #addResizeToUndoStack() {
    if (!this.#savedDimensions) {
      return;
    }
    const {
      savedX,
      savedY,
      savedWidth,
      savedHeight
    } = this.#savedDimensions;
    this.#savedDimensions = null;
    const newX = this.x;
    const newY = this.y;
    const newWidth = this.width;
    const newHeight = this.height;
    if (newX === savedX && newY === savedY && newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.addCommands({
      cmd: this.#resize.bind(this, newX, newY, newWidth, newHeight),
      undo: this.#resize.bind(this, savedX, savedY, savedWidth, savedHeight),
      mustExec: true
    });
  }
  static _round(x) {
    return Math.round(x * 10000) / 10000;
  }
  #resizerPointermove(name, event) {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const invRotationMatrix = this.#getRotationMatrix(360 - this.rotation);
    const invTransf = (x, y) => [invRotationMatrix[0] * x + invRotationMatrix[2] * y, invRotationMatrix[1] * x + invRotationMatrix[3] * y];
    let getPoint;
    let getOpposite;
    let isDiagonal = false;
    let isHorizontal = false;
    switch (name) {
      case "topLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, 0];
        getOpposite = (w, h) => [w, h];
        break;
      case "topMiddle":
        getPoint = (w, h) => [w / 2, 0];
        getOpposite = (w, h) => [w / 2, h];
        break;
      case "topRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, 0];
        getOpposite = (w, h) => [0, h];
        break;
      case "middleRight":
        isHorizontal = true;
        getPoint = (w, h) => [w, h / 2];
        getOpposite = (w, h) => [0, h / 2];
        break;
      case "bottomRight":
        isDiagonal = true;
        getPoint = (w, h) => [w, h];
        getOpposite = (w, h) => [0, 0];
        break;
      case "bottomMiddle":
        getPoint = (w, h) => [w / 2, h];
        getOpposite = (w, h) => [w / 2, 0];
        break;
      case "bottomLeft":
        isDiagonal = true;
        getPoint = (w, h) => [0, h];
        getOpposite = (w, h) => [w, 0];
        break;
      case "middleLeft":
        isHorizontal = true;
        getPoint = (w, h) => [0, h / 2];
        getOpposite = (w, h) => [w, h / 2];
        break;
    }
    const point = getPoint(savedWidth, savedHeight);
    const oppositePoint = getOpposite(savedWidth, savedHeight);
    let transfOppositePoint = transf(...oppositePoint);
    const oppositeX = AnnotationEditor._round(savedX + transfOppositePoint[0]);
    const oppositeY = AnnotationEditor._round(savedY + transfOppositePoint[1]);
    let ratioX = 1;
    let ratioY = 1;
    let deltaX, deltaY;
    if (!event.fromKeyboard) {
      const {
        screenX,
        screenY
      } = event;
      const [lastScreenX, lastScreenY] = this.#lastPointerCoords;
      [deltaX, deltaY] = this.screenToPageTranslation(screenX - lastScreenX, screenY - lastScreenY);
      this.#lastPointerCoords[0] = screenX;
      this.#lastPointerCoords[1] = screenY;
    } else {
      ({
        deltaX,
        deltaY
      } = event);
    }
    [deltaX, deltaY] = invTransf(deltaX / parentWidth, deltaY / parentHeight);
    if (isDiagonal) {
      const oldDiag = Math.hypot(savedWidth, savedHeight);
      ratioX = ratioY = Math.max(Math.min(Math.hypot(oppositePoint[0] - point[0] - deltaX, oppositePoint[1] - point[1] - deltaY) / oldDiag, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    } else if (isHorizontal) {
      ratioX = MathClamp(Math.abs(oppositePoint[0] - point[0] - deltaX), minWidth, 1) / savedWidth;
    } else {
      ratioY = MathClamp(Math.abs(oppositePoint[1] - point[1] - deltaY), minHeight, 1) / savedHeight;
    }
    const newWidth = AnnotationEditor._round(savedWidth * ratioX);
    const newHeight = AnnotationEditor._round(savedHeight * ratioY);
    transfOppositePoint = transf(...getOpposite(newWidth, newHeight));
    const newX = oppositeX - transfOppositePoint[0];
    const newY = oppositeY - transfOppositePoint[1];
    this.#initialRect ||= [this.x, this.y, this.width, this.height];
    this.width = newWidth;
    this.height = newHeight;
    this.x = newX;
    this.y = newY;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  _onResizing() {}
  altTextFinish() {
    this.#altText?.finish();
  }
  get toolbarButtons() {
    return null;
  }
  async addEditToolbar() {
    if (this._editToolbar || this.#isInEditMode) {
      return this._editToolbar;
    }
    this._editToolbar = new EditorToolbar(this);
    this.div.append(this._editToolbar.render());
    const {
      toolbarButtons
    } = this;
    if (toolbarButtons) {
      for (const [name, tool] of toolbarButtons) {
        await this._editToolbar.addButton(name, tool);
      }
    }
    if (!this.hasComment) {
      this._editToolbar.addButton("comment", this.addCommentButton());
    }
    this._editToolbar.addButton("delete");
    return this._editToolbar;
  }
  addCommentButtonInToolbar() {
    this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
  }
  removeCommentButtonFromToolbar() {
    this._editToolbar?.removeButton("comment");
  }
  removeEditToolbar() {
    this._editToolbar?.remove();
    this._editToolbar = null;
    this.#altText?.destroy();
  }
  addContainer(container) {
    const editToolbarDiv = this._editToolbar?.div;
    if (editToolbarDiv) {
      editToolbarDiv.before(container);
    } else {
      this.div.append(container);
    }
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  createAltText() {
    if (!this.#altText) {
      AltText.initialize(AnnotationEditor._l10n);
      this.#altText = new AltText(this);
      if (this.#accessibilityData) {
        this.#altText.data = this.#accessibilityData;
        this.#accessibilityData = null;
      }
    }
    return this.#altText;
  }
  get altTextData() {
    return this.#altText?.data;
  }
  set altTextData(data) {
    if (!this.#altText) {
      return;
    }
    this.#altText.data = data;
  }
  get guessedAltText() {
    return this.#altText?.guessedText;
  }
  async setGuessedAltText(text) {
    await this.#altText?.setGuessedText(text);
  }
  serializeAltText(isForCopying) {
    return this.#altText?.serialize(isForCopying);
  }
  hasAltText() {
    return !!this.#altText && !this.#altText.isEmpty();
  }
  hasAltTextData() {
    return this.#altText?.hasData() ?? false;
  }
  focusCommentButton() {
    this.#comment?.focusButton();
  }
  addCommentButton() {
    return this.canAddComment ? this.#comment ||= new Comment(this) : null;
  }
  addStandaloneCommentButton() {
    if (!this._uiManager.hasCommentManager()) {
      return;
    }
    if (this.#commentStandaloneButton) {
      if (this._uiManager.isEditingMode()) {
        this.#commentStandaloneButton.classList.remove("hidden");
      }
      return;
    }
    if (!this.hasComment) {
      return;
    }
    this.#commentStandaloneButton = this.#comment.renderForStandalone();
    this.div.append(this.#commentStandaloneButton);
  }
  removeStandaloneCommentButton() {
    this.#comment.removeStandaloneCommentButton();
    this.#commentStandaloneButton = null;
  }
  hideStandaloneCommentButton() {
    this.#commentStandaloneButton?.classList.add("hidden");
  }
  get comment() {
    if (!this.#comment) {
      return null;
    }
    const {
      data: {
        richText,
        text,
        date,
        deleted
      }
    } = this.#comment;
    return {
      text,
      richText,
      date,
      deleted,
      color: this.getNonHCMColor(),
      opacity: this.opacity ?? 1
    };
  }
  set comment(value) {
    this.#comment ||= new Comment(this);
    if (typeof value === "object" && value !== null) {
      this.#comment.restoreData(value);
    } else {
      this.#comment.data = value;
    }
    if (this.hasComment) {
      this.removeCommentButtonFromToolbar();
      this.addStandaloneCommentButton();
      this._uiManager.updateComment(this);
    } else {
      this.addCommentButtonInToolbar();
      this.removeStandaloneCommentButton();
      this._uiManager.removeComment(this);
    }
  }
  setCommentData({
    comment,
    popupRef,
    richText
  }) {
    if (!popupRef) {
      return;
    }
    this.#comment ||= new Comment(this);
    this.#comment.setInitialText(comment, richText);
    if (!this.annotationElementId) {
      return;
    }
    const storedData = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
    if (storedData) {
      this.updateFromAnnotationLayer(storedData);
    }
  }
  get hasEditedComment() {
    return this.#comment?.hasBeenEdited();
  }
  get hasDeletedComment() {
    return this.#comment?.isDeleted();
  }
  get hasComment() {
    return !!this.#comment && !this.#comment.isEmpty() && !this.#comment.isDeleted();
  }
  async editComment(options) {
    this.#comment ||= new Comment(this);
    this.#comment.edit(options);
  }
  toggleComment(isSelected, visibility = undefined) {
    if (this.hasComment) {
      this._uiManager.toggleComment(this, isSelected, visibility);
    }
  }
  setSelectedCommentButton(selected) {
    this.#comment.setSelectedButton(selected);
  }
  addComment(serialized) {
    if (this.hasEditedComment) {
      const DEFAULT_POPUP_WIDTH = 180;
      const DEFAULT_POPUP_HEIGHT = 100;
      const [,,, trY] = serialized.rect;
      const [pageWidth] = this.pageDimensions;
      const [pageX] = this.pageTranslation;
      const blX = pageX + pageWidth + 1;
      const blY = trY - DEFAULT_POPUP_HEIGHT;
      const trX = blX + DEFAULT_POPUP_WIDTH;
      serialized.popup = {
        contents: this.comment.text,
        deleted: this.comment.deleted,
        rect: [blX, blY, trX, trY]
      };
    }
  }
  updateFromAnnotationLayer({
    popup: {
      contents,
      deleted
    }
  }) {
    this.#comment.data = deleted ? null : contents;
  }
  get parentBoundingClientRect() {
    return this.parent.boundingClientRect;
  }
  render() {
    const div = this.div = document.createElement("div");
    div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360);
    div.className = this.name;
    div.setAttribute("id", this.id);
    div.tabIndex = this.#disabled ? -1 : 0;
    div.setAttribute("role", "application");
    if (this.defaultL10nId) {
      div.setAttribute("data-l10n-id", this.defaultL10nId);
    }
    if (!this._isVisible) {
      div.classList.add("hidden");
    }
    this.setInForeground();
    this.#addFocusListeners();
    const [parentWidth, parentHeight] = this.parentDimensions;
    if (this.parentRotation % 180 !== 0) {
      div.style.maxWidth = `${(100 * parentHeight / parentWidth).toFixed(2)}%`;
      div.style.maxHeight = `${(100 * parentWidth / parentHeight).toFixed(2)}%`;
    }
    const [tx, ty] = this.getInitialTranslation();
    this.translate(tx, ty);
    bindEvents(this, div, ["keydown", "pointerdown", "dblclick"]);
    if (this.isResizable && this._uiManager._supportsPinchToZoom) {
      this.#touchManager ||= new TouchManager({
        container: div,
        isPinchingDisabled: () => !this.isSelected,
        onPinchStart: this.#touchPinchStartCallback.bind(this),
        onPinching: this.#touchPinchCallback.bind(this),
        onPinchEnd: this.#touchPinchEndCallback.bind(this),
        signal: this._uiManager._signal
      });
    }
    this.addStandaloneCommentButton();
    this._uiManager._editorUndoBar?.hide();
    return div;
  }
  #touchPinchStartCallback() {
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    this.#altText?.toggle(false);
    this.parent.togglePointerEvents(false);
  }
  #touchPinchCallback(_origin, prevDistance, distance) {
    const slowDownFactor = 0.7;
    let factor = slowDownFactor * (distance / prevDistance) + 1 - slowDownFactor;
    if (factor === 1) {
      return;
    }
    const rotationMatrix = this.#getRotationMatrix(this.rotation);
    const transf = (x, y) => [rotationMatrix[0] * x + rotationMatrix[2] * y, rotationMatrix[1] * x + rotationMatrix[3] * y];
    const [parentWidth, parentHeight] = this.parentDimensions;
    const savedX = this.x;
    const savedY = this.y;
    const savedWidth = this.width;
    const savedHeight = this.height;
    const minWidth = AnnotationEditor.MIN_SIZE / parentWidth;
    const minHeight = AnnotationEditor.MIN_SIZE / parentHeight;
    factor = Math.max(Math.min(factor, 1 / savedWidth, 1 / savedHeight), minWidth / savedWidth, minHeight / savedHeight);
    const newWidth = AnnotationEditor._round(savedWidth * factor);
    const newHeight = AnnotationEditor._round(savedHeight * factor);
    if (newWidth === savedWidth && newHeight === savedHeight) {
      return;
    }
    this.#initialRect ||= [savedX, savedY, savedWidth, savedHeight];
    const transfCenterPoint = transf(savedWidth / 2, savedHeight / 2);
    const centerX = AnnotationEditor._round(savedX + transfCenterPoint[0]);
    const centerY = AnnotationEditor._round(savedY + transfCenterPoint[1]);
    const newTransfCenterPoint = transf(newWidth / 2, newHeight / 2);
    this.x = centerX - newTransfCenterPoint[0];
    this.y = centerY - newTransfCenterPoint[1];
    this.width = newWidth;
    this.height = newHeight;
    this.setDims();
    this.fixAndSetPosition();
    this._onResizing();
  }
  #touchPinchEndCallback() {
    this.#altText?.toggle(true);
    this.parent.togglePointerEvents(true);
    this.#addResizeToUndoStack();
  }
  pointerdown(event) {
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      event.preventDefault();
      return;
    }
    this.#hasBeenClicked = true;
    if (this._isDraggable) {
      this.#setUpDragSession(event);
      return;
    }
    this.#selectOnPointerEvent(event);
  }
  #selectOnPointerEvent(event) {
    const {
      isMac
    } = FeatureTest.platform;
    if (event.ctrlKey && !isMac || event.shiftKey || event.metaKey && isMac) {
      this.parent.toggleSelected(this);
    } else {
      this.parent.setSelected(this);
    }
  }
  #setUpDragSession(event) {
    const {
      isSelected
    } = this;
    this._uiManager.setUpDragSession();
    let hasDraggingStarted = false;
    const ac = new AbortController();
    const signal = this._uiManager.combinedSignal(ac);
    const opts = {
      capture: true,
      passive: false,
      signal
    };
    const cancelDrag = e => {
      ac.abort();
      this.#dragPointerId = null;
      this.#hasBeenClicked = false;
      if (!this._uiManager.endDragSession()) {
        this.#selectOnPointerEvent(e);
      }
      if (hasDraggingStarted) {
        this._onStopDragging();
      }
    };
    if (isSelected) {
      this.#prevDragX = event.clientX;
      this.#prevDragY = event.clientY;
      this.#dragPointerId = event.pointerId;
      this.#dragPointerType = event.pointerType;
      window.addEventListener("pointermove", e => {
        if (!hasDraggingStarted) {
          hasDraggingStarted = true;
          this._uiManager.toggleComment(this, true, false);
          this._onStartDragging();
        }
        const {
          clientX: x,
          clientY: y,
          pointerId
        } = e;
        if (pointerId !== this.#dragPointerId) {
          stopEvent(e);
          return;
        }
        const [tx, ty] = this.screenToPageTranslation(x - this.#prevDragX, y - this.#prevDragY);
        this.#prevDragX = x;
        this.#prevDragY = y;
        this._uiManager.dragSelectedEditors(tx, ty);
      }, opts);
      window.addEventListener("touchmove", stopEvent, opts);
      window.addEventListener("pointerdown", e => {
        if (e.pointerType === this.#dragPointerType) {
          if (this.#touchManager || e.isPrimary) {
            cancelDrag(e);
          }
        }
        stopEvent(e);
      }, opts);
    }
    const pointerUpCallback = e => {
      if (!this.#dragPointerId || this.#dragPointerId === e.pointerId) {
        cancelDrag(e);
        return;
      }
      stopEvent(e);
    };
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
  }
  _onStartDragging() {}
  _onStopDragging() {}
  moveInDOM() {
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
    }
    this.#moveInDOMTimeout = setTimeout(() => {
      this.#moveInDOMTimeout = null;
      this.parent?.moveEditorInDOM(this);
    }, 0);
  }
  _setParentAndPosition(parent, x, y) {
    parent.changeParent(this);
    this.x = x;
    this.y = y;
    this.fixAndSetPosition();
    this._onTranslated();
  }
  getRect(tx, ty, rotation = this.rotation) {
    const scale = this.parentScale;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const shiftX = tx / scale;
    const shiftY = ty / scale;
    const x = this.x * pageWidth;
    const y = this.y * pageHeight;
    const width = this.width * pageWidth;
    const height = this.height * pageHeight;
    switch (rotation) {
      case 0:
        return [x + shiftX + pageX, pageHeight - y - shiftY - height + pageY, x + shiftX + width + pageX, pageHeight - y - shiftY + pageY];
      case 90:
        return [x + shiftY + pageX, pageHeight - y + shiftX + pageY, x + shiftY + height + pageX, pageHeight - y + shiftX + width + pageY];
      case 180:
        return [x - shiftX - width + pageX, pageHeight - y + shiftY + pageY, x - shiftX + pageX, pageHeight - y + shiftY + height + pageY];
      case 270:
        return [x - shiftY - height + pageX, pageHeight - y - shiftX - width + pageY, x - shiftY + pageX, pageHeight - y - shiftX + pageY];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(rect, pageHeight) {
    const [x1, y1, x2, y2] = rect;
    const width = x2 - x1;
    const height = y2 - y1;
    switch (this.rotation) {
      case 0:
        return [x1, pageHeight - y2, width, height];
      case 90:
        return [x1, pageHeight - y1, height, width];
      case 180:
        return [x2, pageHeight - y1, width, height];
      case 270:
        return [x2, pageHeight - y2, height, width];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getPDFRect() {
    return this.getRect(0, 0);
  }
  getNonHCMColor() {
    return this.color && AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
  }
  onUpdatedColor() {
    this.#comment?.onUpdatedColor();
  }
  getData() {
    const {
      comment: {
        text: str,
        color,
        date,
        opacity,
        deleted,
        richText
      },
      uid: id,
      pageIndex,
      creationDate,
      modificationDate
    } = this;
    return {
      id,
      pageIndex,
      rect: this.getPDFRect(),
      richText,
      contentsObj: {
        str
      },
      creationDate,
      modificationDate: date || modificationDate,
      popupRef: !deleted,
      color,
      opacity
    };
  }
  onceAdded(focus) {}
  isEmpty() {
    return false;
  }
  enableEditMode() {
    if (this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(false);
    this.#isInEditMode = true;
    return true;
  }
  disableEditMode() {
    if (!this.isInEditMode()) {
      return false;
    }
    this.parent.setEditingState(true);
    this.#isInEditMode = false;
    return true;
  }
  isInEditMode() {
    return this.#isInEditMode;
  }
  shouldGetKeyboardEvents() {
    return this.#isResizerEnabledForKeyboard;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  get isOnScreen() {
    const {
      top,
      left,
      bottom,
      right
    } = this.getClientDimensions();
    const {
      innerHeight,
      innerWidth
    } = window;
    return left < innerWidth && right > 0 && top < innerHeight && bottom > 0;
  }
  #addFocusListeners() {
    if (this.#focusAC || !this.div) {
      return;
    }
    this.#focusAC = new AbortController();
    const signal = this._uiManager.combinedSignal(this.#focusAC);
    this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal
    });
    this.div.addEventListener("focusout", this.focusout.bind(this), {
      signal
    });
  }
  rebuild() {
    this.#addFocusListeners();
  }
  rotate(_angle) {}
  resize() {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: true,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  serialize(isForCopying = false, context = null) {
    return {
      annotationType: this.mode,
      pageIndex: this.pageIndex,
      rect: this.getPDFRect(),
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
      popupRef: this._initialData?.popupRef || ""
    };
  }
  static async deserialize(data, parent, uiManager) {
    const editor = new this.prototype.constructor({
      parent,
      id: uiManager.getId(),
      uiManager,
      annotationElementId: data.annotationElementId,
      creationDate: data.creationDate,
      modificationDate: data.modificationDate
    });
    editor.rotation = data.rotation;
    editor.#accessibilityData = data.accessibilityData;
    editor._isCopy = data.isCopy || false;
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [x, y, width, height] = editor.getRectInCurrentCoords(data.rect, pageHeight);
    editor.x = x / pageWidth;
    editor.y = y / pageHeight;
    editor.width = width / pageWidth;
    editor.height = height / pageHeight;
    return editor;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    this.#focusAC?.abort();
    this.#focusAC = null;
    if (!this.isEmpty()) {
      this.commit();
    }
    if (this.parent) {
      this.parent.remove(this);
    } else {
      this._uiManager.removeEditor(this);
    }
    this.hideCommentPopup();
    if (this.#moveInDOMTimeout) {
      clearTimeout(this.#moveInDOMTimeout);
      this.#moveInDOMTimeout = null;
    }
    this.#stopResizing();
    this.removeEditToolbar();
    if (this.#telemetryTimeouts) {
      for (const timeout of this.#telemetryTimeouts.values()) {
        clearTimeout(timeout);
      }
      this.#telemetryTimeouts = null;
    }
    this.parent = null;
    this.#touchManager?.destroy();
    this.#touchManager = null;
    this.#fakeAnnotation?.remove();
    this.#fakeAnnotation = null;
  }
  get isResizable() {
    return false;
  }
  makeResizable() {
    if (this.isResizable) {
      this.#createResizers();
      this.#resizersDiv.classList.remove("hidden");
    }
  }
  get toolbarPosition() {
    return null;
  }
  get commentButtonPosition() {
    return this._uiManager.direction === "ltr" ? [1, 0] : [0, 0];
  }
  get commentButtonPositionInPage() {
    const {
      commentButtonPosition: [posX, posY]
    } = this;
    const [blX, blY, trX, trY] = this.getPDFRect();
    return [AnnotationEditor._round(blX + (trX - blX) * posX), AnnotationEditor._round(blY + (trY - blY) * (1 - posY))];
  }
  get commentButtonColor() {
    return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
  }
  get commentPopupPosition() {
    return this.#comment.commentPopupPositionInLayer;
  }
  set commentPopupPosition(pos) {
    this.#comment.commentPopupPositionInLayer = pos;
  }
  hasDefaultPopupPosition() {
    return this.#comment.hasDefaultPopupPosition();
  }
  get commentButtonWidth() {
    return this.#comment.commentButtonWidth;
  }
  get elementBeforePopup() {
    return this.div;
  }
  setCommentButtonStates(options) {
    this.#comment?.setCommentButtonStates(options);
  }
  keydown(event) {
    if (!this.isResizable || event.target !== this.div || event.key !== "Enter") {
      return;
    }
    this._uiManager.setSelected(this);
    this.#savedDimensions = {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    };
    const children = this.#resizersDiv.children;
    if (!this.#allResizerDivs) {
      this.#allResizerDivs = Array.from(children);
      const boundResizerKeydown = this.#resizerKeydown.bind(this);
      const boundResizerBlur = this.#resizerBlur.bind(this);
      const signal = this._uiManager._signal;
      for (const div of this.#allResizerDivs) {
        const name = div.getAttribute("data-resizer-name");
        div.setAttribute("role", "spinbutton");
        div.addEventListener("keydown", boundResizerKeydown, {
          signal
        });
        div.addEventListener("blur", boundResizerBlur, {
          signal
        });
        div.addEventListener("focus", this.#resizerFocus.bind(this, name), {
          signal
        });
        div.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    const first = this.#allResizerDivs[0];
    let firstPosition = 0;
    for (const div of children) {
      if (div === first) {
        break;
      }
      firstPosition++;
    }
    const nextFirstPosition = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#allResizerDivs.length / 4);
    if (nextFirstPosition !== firstPosition) {
      if (nextFirstPosition < firstPosition) {
        for (let i = 0; i < firstPosition - nextFirstPosition; i++) {
          this.#resizersDiv.append(this.#resizersDiv.firstElementChild);
        }
      } else if (nextFirstPosition > firstPosition) {
        for (let i = 0; i < nextFirstPosition - firstPosition; i++) {
          this.#resizersDiv.firstElementChild.before(this.#resizersDiv.lastElementChild);
        }
      }
      let i = 0;
      for (const child of children) {
        const div = this.#allResizerDivs[i++];
        const name = div.getAttribute("data-resizer-name");
        child.setAttribute("data-l10n-id", AnnotationEditor._l10nResizer[name]);
      }
    }
    this.#setResizerTabIndex(0);
    this.#isResizerEnabledForKeyboard = true;
    this.#resizersDiv.firstElementChild.focus({
      focusVisible: true
    });
    event.preventDefault();
    event.stopImmediatePropagation();
  }
  #resizerKeydown(event) {
    AnnotationEditor._resizerKeyboardManager.exec(this, event);
  }
  #resizerBlur(event) {
    if (this.#isResizerEnabledForKeyboard && event.relatedTarget?.parentNode !== this.#resizersDiv) {
      this.#stopResizing();
    }
  }
  #resizerFocus(name) {
    this.#focusedResizerName = this.#isResizerEnabledForKeyboard ? name : "";
  }
  #setResizerTabIndex(value) {
    if (!this.#allResizerDivs) {
      return;
    }
    for (const div of this.#allResizerDivs) {
      div.tabIndex = value;
    }
  }
  _resizeWithKeyboard(x, y) {
    if (!this.#isResizerEnabledForKeyboard) {
      return;
    }
    this.#resizerPointermove(this.#focusedResizerName, {
      deltaX: x,
      deltaY: y,
      fromKeyboard: true
    });
  }
  #stopResizing() {
    this.#isResizerEnabledForKeyboard = false;
    this.#setResizerTabIndex(-1);
    this.#addResizeToUndoStack();
  }
  _stopResizingWithKeyboard() {
    this.#stopResizing();
    this.div.focus();
  }
  select() {
    if (this.isSelected && this._editToolbar) {
      this._editToolbar.show();
      return;
    }
    this.isSelected = true;
    this.makeResizable();
    this.div?.classList.add("selectedEditor");
    if (!this._editToolbar) {
      this.addEditToolbar().then(() => {
        if (this.div?.classList.contains("selectedEditor")) {
          this._editToolbar?.show();
        }
      });
      return;
    }
    this._editToolbar?.show();
    this.#altText?.toggleAltTextBadge(false);
  }
  focus() {
    if (this.div && !this.div.contains(document.activeElement)) {
      setTimeout(() => this.div?.focus({
        preventScroll: true
      }), 0);
    }
  }
  unselect() {
    if (!this.isSelected) {
      return;
    }
    this.isSelected = false;
    this.#resizersDiv?.classList.add("hidden");
    this.div?.classList.remove("selectedEditor");
    if (this.div?.contains(document.activeElement)) {
      this._uiManager.currentLayer.div.focus({
        preventScroll: true
      });
    }
    this._editToolbar?.hide();
    this.#altText?.toggleAltTextBadge(true);
    this.hideCommentPopup();
  }
  hideCommentPopup() {
    if (this.hasComment) {
      this._uiManager.toggleComment(null);
    }
  }
  updateParams(type, value) {}
  disableEditing() {}
  enableEditing() {}
  get canChangeContent() {
    return false;
  }
  enterInEditMode() {
    if (!this.canChangeContent) {
      return;
    }
    this.enableEditMode();
    this.div.focus();
  }
  dblclick(event) {
    if (event.target.nodeName === "BUTTON") {
      return;
    }
    this.enterInEditMode();
    this.parent.updateToolbar({
      mode: this.constructor._editorType,
      editId: this.uid
    });
  }
  getElementForAltText() {
    return this.div;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#isEditing;
  }
  set isEditing(value) {
    this.#isEditing = value;
    if (!this.parent) {
      return;
    }
    if (value) {
      this.parent.setSelected(this);
      this.parent.setActiveEditor(this);
    } else {
      this.parent.setActiveEditor(null);
    }
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return true;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(data, mustWait = false) {
    if (mustWait) {
      this.#telemetryTimeouts ||= new Map();
      const {
        action
      } = data;
      let timeout = this.#telemetryTimeouts.get(action);
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this._reportTelemetry(data);
        this.#telemetryTimeouts.delete(action);
        if (this.#telemetryTimeouts.size === 0) {
          this.#telemetryTimeouts = null;
        }
      }, AnnotationEditor._telemetryTimeout);
      this.#telemetryTimeouts.set(action, timeout);
      return;
    }
    data.type ||= this.editorType;
    this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data
      }
    });
  }
  show(visible = this._isVisible) {
    this.div.classList.toggle("hidden", !visible);
    this._isVisible = visible;
  }
  enable() {
    if (this.div) {
      this.div.tabIndex = 0;
    }
    this.#disabled = false;
  }
  disable() {
    if (this.div) {
      this.div.tabIndex = -1;
    }
    this.#disabled = true;
  }
  updateFakeAnnotationElement(annotationLayer) {
    if (!this.#fakeAnnotation && !this.deleted) {
      this.#fakeAnnotation = annotationLayer.addFakeAnnotation(this);
      return;
    }
    if (this.deleted) {
      this.#fakeAnnotation.remove();
      this.#fakeAnnotation = null;
      return;
    }
    if (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) {
      this.#fakeAnnotation.updateEdited({
        rect: this.getPDFRect(),
        popup: this.comment
      });
    }
  }
  renderAnnotationElement(annotation) {
    if (this.deleted) {
      annotation.hide();
      return null;
    }
    let content = annotation.container.querySelector(".annotationContent");
    if (!content) {
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      annotation.container.prepend(content);
    } else if (content.nodeName === "CANVAS") {
      const canvas = content;
      content = document.createElement("div");
      content.classList.add("annotationContent", this.editorType);
      canvas.before(content);
    }
    return content;
  }
  resetAnnotationElement(annotation) {
    const {
      firstElementChild
    } = annotation.container;
    if (firstElementChild?.nodeName === "DIV" && firstElementChild.classList.contains("annotationContent")) {
      firstElementChild.remove();
    }
  }
}
class FakeEditor extends AnnotationEditor {
  constructor(params) {
    super(params);
    this.annotationElementId = params.annotationElementId;
    this.deleted = true;
  }
  serialize() {
    return this.serializeDeleted();
  }
}

;// ./src/shared/murmurhash3.js
const SEED = 0xc3d2e1f0;
const MASK_HIGH = 0xffff0000;
const MASK_LOW = 0xffff;
class MurmurHash3_64 {
  constructor(seed) {
    this.h1 = seed ? seed & 0xffffffff : SEED;
    this.h2 = seed ? seed & 0xffffffff : SEED;
  }
  update(input) {
    let data, length;
    if (typeof input === "string") {
      data = new Uint8Array(input.length * 2);
      length = 0;
      for (let i = 0, ii = input.length; i < ii; i++) {
        const code = input.charCodeAt(i);
        if (code <= 0xff) {
          data[length++] = code;
        } else {
          data[length++] = code >>> 8;
          data[length++] = code & 0xff;
        }
      }
    } else if (ArrayBuffer.isView(input)) {
      data = input.slice();
      length = data.byteLength;
    } else {
      throw new Error("Invalid data format, must be a string or TypedArray.");
    }
    const blockCounts = length >> 2;
    const tailLength = length - blockCounts * 4;
    const dataUint32 = new Uint32Array(data.buffer, 0, blockCounts);
    let k1 = 0,
      k2 = 0;
    let h1 = this.h1,
      h2 = this.h2;
    const C1 = 0xcc9e2d51,
      C2 = 0x1b873593;
    const C1_LOW = C1 & MASK_LOW,
      C2_LOW = C2 & MASK_LOW;
    for (let i = 0; i < blockCounts; i++) {
      if (i & 1) {
        k1 = dataUint32[i];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        h1 ^= k1;
        h1 = h1 << 13 | h1 >>> 19;
        h1 = h1 * 5 + 0xe6546b64;
      } else {
        k2 = dataUint32[i];
        k2 = k2 * C1 & MASK_HIGH | k2 * C1_LOW & MASK_LOW;
        k2 = k2 << 15 | k2 >>> 17;
        k2 = k2 * C2 & MASK_HIGH | k2 * C2_LOW & MASK_LOW;
        h2 ^= k2;
        h2 = h2 << 13 | h2 >>> 19;
        h2 = h2 * 5 + 0xe6546b64;
      }
    }
    k1 = 0;
    switch (tailLength) {
      case 3:
        k1 ^= data[blockCounts * 4 + 2] << 16;
      case 2:
        k1 ^= data[blockCounts * 4 + 1] << 8;
      case 1:
        k1 ^= data[blockCounts * 4];
        k1 = k1 * C1 & MASK_HIGH | k1 * C1_LOW & MASK_LOW;
        k1 = k1 << 15 | k1 >>> 17;
        k1 = k1 * C2 & MASK_HIGH | k1 * C2_LOW & MASK_LOW;
        if (blockCounts & 1) {
          h1 ^= k1;
        } else {
          h2 ^= k1;
        }
    }
    this.h1 = h1;
    this.h2 = h2;
  }
  hexdigest() {
    let h1 = this.h1,
      h2 = this.h2;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0xed558ccd & MASK_HIGH | h1 * 0x8ccd & MASK_LOW;
    h2 = h2 * 0xff51afd7 & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xafd7ed55 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    h1 = h1 * 0x1a85ec53 & MASK_HIGH | h1 * 0xec53 & MASK_LOW;
    h2 = h2 * 0xc4ceb9fe & MASK_HIGH | ((h2 << 16 | h1 >>> 16) * 0xb9fe1a85 & MASK_HIGH) >>> 16;
    h1 ^= h2 >>> 1;
    return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
  }
}

;// ./src/display/annotation_storage.js



const SerializableEmpty = Object.freeze({
  map: null,
  hash: "",
  transfer: undefined
});
class AnnotationStorage {
  #modified = false;
  #modifiedIds = null;
  #editorsMap = null;
  #storage = new Map();
  onSetModified = null;
  onResetModified = null;
  onAnnotationEditor = null;
  getValue(key, defaultValue) {
    const value = this.#storage.get(key);
    if (value === undefined) {
      return defaultValue;
    }
    return Object.assign(defaultValue, value);
  }
  getRawValue(key) {
    return this.#storage.get(key);
  }
  remove(key) {
    const storedValue = this.#storage.get(key);
    if (storedValue === undefined) {
      return;
    }
    if (storedValue instanceof AnnotationEditor) {
      this.#editorsMap.delete(storedValue.annotationElementId);
    }
    this.#storage.delete(key);
    if (this.#storage.size === 0) {
      this.resetModified();
    }
    if (this.#storage.values().some(v => v instanceof AnnotationEditor)) {
      return;
    }
    this.onAnnotationEditor?.(null);
  }
  setValue(key, value) {
    const obj = this.#storage.get(key);
    let modified = false;
    if (obj !== undefined) {
      for (const [entry, val] of Object.entries(value)) {
        if (obj[entry] !== val) {
          modified = true;
          obj[entry] = val;
        }
      }
    } else {
      modified = true;
      this.#storage.set(key, value);
    }
    if (modified) {
      this.#setModified();
    }
    if (value instanceof AnnotationEditor) {
      (this.#editorsMap ||= new Map()).set(value.annotationElementId, value);
      this.onAnnotationEditor?.(value.constructor._type);
    }
  }
  has(key) {
    return this.#storage.has(key);
  }
  get size() {
    return this.#storage.size;
  }
  #setModified() {
    if (!this.#modified) {
      this.#modified = true;
      this.onSetModified?.();
    }
  }
  resetModified() {
    if (this.#modified) {
      this.#modified = false;
      this.onResetModified?.();
    }
  }
  get print() {
    return new PrintAnnotationStorage(this);
  }
  get serializable() {
    if (this.#storage.size === 0) {
      return SerializableEmpty;
    }
    const map = new Map(),
      hash = new MurmurHash3_64(),
      transfer = [];
    const context = Object.create(null);
    let hasBitmap = false;
    for (const [key, val] of this.#storage) {
      const serialized = val instanceof AnnotationEditor ? val.serialize(false, context) : val;
      if (val.page) {
        val.pageIndex = val.page._pageIndex;
        delete val.page;
      }
      if (serialized) {
        map.set(key, serialized);
        hash.update(`${key}:${JSON.stringify(serialized)}`);
        hasBitmap ||= !!serialized.bitmap;
      }
    }
    if (hasBitmap) {
      for (const value of map.values()) {
        if (value.bitmap) {
          transfer.push(value.bitmap);
        }
      }
    }
    return map.size > 0 ? {
      map,
      hash: hash.hexdigest(),
      transfer
    } : SerializableEmpty;
  }
  get editorStats() {
    let stats = null;
    const typeToEditor = new Map();
    let numberOfEditedComments = 0;
    let numberOfDeletedComments = 0;
    for (const value of this.#storage.values()) {
      if (!(value instanceof AnnotationEditor)) {
        if (value.popup) {
          if (value.popup.deleted) {
            numberOfDeletedComments += 1;
          } else {
            numberOfEditedComments += 1;
          }
        }
        continue;
      }
      if (value.isCommentDeleted) {
        numberOfDeletedComments += 1;
      } else if (value.hasEditedComment) {
        numberOfEditedComments += 1;
      }
      const editorStats = value.telemetryFinalData;
      if (!editorStats) {
        continue;
      }
      const {
        type
      } = editorStats;
      if (!typeToEditor.has(type)) {
        typeToEditor.set(type, Object.getPrototypeOf(value).constructor);
      }
      stats ||= Object.create(null);
      const map = stats[type] ||= new Map();
      for (const [key, val] of Object.entries(editorStats)) {
        if (key === "type") {
          continue;
        }
        const counters = map.getOrInsertComputed(key, makeMap);
        counters.set(val, (counters.get(val) ?? 0) + 1);
      }
    }
    if (numberOfDeletedComments > 0 || numberOfEditedComments > 0) {
      stats ||= Object.create(null);
      stats.comments = {
        deleted: numberOfDeletedComments,
        edited: numberOfEditedComments
      };
    }
    if (!stats) {
      return null;
    }
    for (const [type, editor] of typeToEditor) {
      stats[type] = editor.computeTelemetryFinalData(stats[type]);
    }
    return stats;
  }
  resetModifiedIds() {
    this.#modifiedIds = null;
  }
  updateEditor(annotationId, data) {
    const value = this.#editorsMap?.get(annotationId);
    if (value) {
      value.updateFromAnnotationLayer(data);
      return true;
    }
    return false;
  }
  getEditor(annotationId) {
    return this.#editorsMap?.get(annotationId) || null;
  }
  get modifiedIds() {
    if (this.#modifiedIds) {
      return this.#modifiedIds;
    }
    const ids = [];
    if (this.#editorsMap) {
      for (const value of this.#editorsMap.values()) {
        if (!value.serialize()) {
          continue;
        }
        ids.push(value.annotationElementId);
      }
    }
    return this.#modifiedIds = {
      ids: new Set(ids),
      hash: ids.join(",")
    };
  }
  [Symbol.iterator]() {
    return this.#storage.entries();
  }
}
class PrintAnnotationStorage extends AnnotationStorage {
  #serializable = SerializableEmpty;
  constructor(parent) {
    super();
    const {
      serializable
    } = parent;
    if (serializable === SerializableEmpty) {
      return;
    }
    const {
      map,
      hash,
      transfer
    } = serializable;
    const clone = structuredClone(map, transfer ? {
      transfer
    } : null);
    this.#serializable = {
      map: clone,
      hash,
      transfer: []
    };
  }
  get print() {
    unreachable("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#serializable;
  }
  get modifiedIds() {
    return shadow(this, "modifiedIds", {
      ids: new Set(),
      hash: ""
    });
  }
}

;// ./src/display/canvas_dependency_tracker.js

const FORCED_DEPENDENCY_LABEL = "__forcedDependency";
const {
  floor,
  ceil
} = Math;
function expandBBox(array, index, minX, minY, maxX, maxY) {
  array[index * 4 + 0] = Math.min(array[index * 4 + 0], minX);
  array[index * 4 + 1] = Math.min(array[index * 4 + 1], minY);
  array[index * 4 + 2] = Math.max(array[index * 4 + 2], maxX);
  array[index * 4 + 3] = Ma…102530 tokens truncated…nCanvasMap() {
    if (!this.#annotationCanvasMap) {
      return;
    }
    const layer = this.div;
    for (const [id, canvas] of this.#annotationCanvasMap) {
      const element = layer.querySelector(`[data-annotation-id="${id}"]`);
      if (!element) {
        continue;
      }
      canvas.className = "annotationContent";
      const {
        firstChild
      } = element;
      if (!firstChild) {
        element.append(canvas);
      } else if (firstChild.nodeName === "CANVAS") {
        firstChild.replaceWith(canvas);
      } else if (!firstChild.classList.contains("annotationContent")) {
        firstChild.before(canvas);
      } else {
        firstChild.after(canvas);
      }
      const editableAnnotation = this.#editableAnnotations.get(id);
      if (!editableAnnotation) {
        continue;
      }
      if (editableAnnotation._hasNoCanvas) {
        this._annotationEditorUIManager?.setMissingCanvas(id, element.id, canvas);
        editableAnnotation._hasNoCanvas = false;
      } else {
        editableAnnotation.canvas = canvas;
      }
    }
    this.#annotationCanvasMap.clear();
  }
  getEditableAnnotations() {
    return this.#editableAnnotations.values();
  }
  getEditableAnnotation(id) {
    return this.#editableAnnotations.get(id);
  }
  addFakeAnnotation(editor) {
    const {
      div
    } = this;
    const {
      id,
      rotation
    } = editor;
    const element = new EditorAnnotationElement({
      data: {
        id,
        rect: editor.getPDFRect(),
        rotation
      },
      editor,
      layer: div,
      parent: this,
      enableComment: !!this._commentManager,
      linkService: this.#linkService,
      annotationStorage: this.#annotationStorage
    });
    element.render();
    element.contentElement.id = `${AnnotationPrefix}${id}`;
    element.createOrUpdatePopup();
    this.#elements.push(element);
    return element;
  }
  removeAnnotation(id) {
    const index = this.#elements.findIndex(el => el.data.id === id);
    if (index < 0) {
      return;
    }
    const [element] = this.#elements.splice(index, 1);
    this.#accessibilityManager?.removePointerInTextLayer(element.contentElement);
  }
  updateFakeAnnotations(editors) {
    if (editors.length === 0) {
      return;
    }
    for (const editor of editors) {
      editor.updateFakeAnnotationElement(this);
    }
    this.#addElementsToDOM();
  }
  togglePointerEvents(enabled = false) {
    this.div.classList.toggle("disabled", !enabled);
  }
  static get _defaultBorderStyle() {
    return shadow(this, "_defaultBorderStyle", Object.freeze({
      width: 1,
      rawWidth: 1,
      style: AnnotationBorderStyleType.SOLID,
      dashArray: [3],
      horizontalCornerRadius: 0,
      verticalCornerRadius: 0
    }));
  }
}

;// ./src/display/editor/freetext.js





const EOL_PATTERN = /\r\n?|\n/g;
class FreeTextEditor extends AnnotationEditor {
  #content = "";
  #editorDivId = `${this.id}-editor`;
  #editModeAC = null;
  #fontSize;
  _colorPicker = null;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const proto = FreeTextEditor.prototype;
    const arrowChecker = self => self.isEmpty();
    const small = AnnotationEditorUIManager.TRANSLATE_SMALL;
    const big = AnnotationEditorUIManager.TRANSLATE_BIG;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], proto.commitOrRemove, {
      bubbles: true
    }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], proto.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], proto._translateEmpty, {
      args: [-small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], proto._translateEmpty, {
      args: [-big, 0],
      checker: arrowChecker
    }], [["ArrowRight", "mac+ArrowRight"], proto._translateEmpty, {
      args: [small, 0],
      checker: arrowChecker
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], proto._translateEmpty, {
      args: [big, 0],
      checker: arrowChecker
    }], [["ArrowUp", "mac+ArrowUp"], proto._translateEmpty, {
      args: [0, -small],
      checker: arrowChecker
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], proto._translateEmpty, {
      args: [0, -big],
      checker: arrowChecker
    }], [["ArrowDown", "mac+ArrowDown"], proto._translateEmpty, {
      args: [0, small],
      checker: arrowChecker
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], proto._translateEmpty, {
      args: [0, big],
      checker: arrowChecker
    }]]));
  }
  static _type = "freetext";
  static _editorType = AnnotationEditorType.FREETEXT;
  constructor(params) {
    super({
      ...params,
      name: "freeTextEditor"
    });
    this.color = params.color || FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor;
    this.#fontSize = params.fontSize || FreeTextEditor._defaultFontSize;
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
    }
    this.canAddComment = false;
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    const style = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(style.getPropertyValue("--freetext-padding"));
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        FreeTextEditor._defaultFontSize = value;
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        FreeTextEditor._defaultColor = value;
        break;
    }
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.FREETEXT_SIZE:
        this.#updateFontSize(value);
        break;
      case AnnotationEditorParamsType.FREETEXT_COLOR:
        this.#updateColor(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, FreeTextEditor._defaultFontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, FreeTextEditor._defaultColor || AnnotationEditor._defaultLineColor]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.FREETEXT_SIZE, this.#fontSize], [AnnotationEditorParamsType.FREETEXT_COLOR, this.color]];
  }
  get toolbarButtons() {
    this._colorPicker ||= new BasicColorPicker(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return AnnotationEditorParamsType.FREETEXT_COLOR;
  }
  #updateFontSize(fontSize) {
    const setFontsize = size => {
      this.editorDiv.style.fontSize = `calc(${size}px * var(--total-scale-factor))`;
      this.translate(0, -(size - this.#fontSize) * this.parentScale);
      this.#fontSize = size;
      this.#setEditorDimensions();
    };
    const savedFontsize = this.#fontSize;
    this.addCommands({
      cmd: setFontsize.bind(this, fontSize),
      undo: setFontsize.bind(this, savedFontsize),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_SIZE,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  onUpdatedColor() {
    this.editorDiv.style.color = this.color;
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  #updateColor(color) {
    const setColor = col => {
      this.color = col;
      this.onUpdatedColor();
    };
    const savedColor = this.color;
    this.addCommands({
      cmd: setColor.bind(this, color),
      undo: setColor.bind(this, savedColor),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.FREETEXT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _translateEmpty(x, y) {
    this._uiManager.translateSelectedEditors(x, y, true);
  }
  getInitialTranslation() {
    const scale = this.parentScale;
    return [-FreeTextEditor._internalPadding * scale, -(FreeTextEditor._internalPadding + this.#fontSize) * scale];
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  enableEditMode() {
    if (!super.enableEditMode()) {
      return false;
    }
    this.overlayDiv.classList.remove("enabled");
    this.editorDiv.contentEditable = true;
    this._isDraggable = false;
    this.div.removeAttribute("aria-activedescendant");
    this.#editModeAC = new AbortController();
    const signal = this._uiManager.combinedSignal(this.#editModeAC);
    this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
      signal
    });
    this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
      signal
    });
    return true;
  }
  disableEditMode() {
    if (!super.disableEditMode()) {
      return false;
    }
    this.overlayDiv.classList.add("enabled");
    this.editorDiv.contentEditable = false;
    this.div.setAttribute("aria-activedescendant", this.#editorDivId);
    this._isDraggable = true;
    this.#editModeAC?.abort();
    this.#editModeAC = null;
    this.div.focus({
      preventScroll: true
    });
    this.isEditing = false;
    this.parent.div.classList.add("freetextEditing");
    return true;
  }
  focusin(event) {
    if (!this._focusEventsAllowed) {
      return;
    }
    super.focusin(event);
    if (event.target !== this.editorDiv) {
      this.editorDiv.focus();
    }
  }
  onceAdded(focus) {
    if (this.width) {
      return;
    }
    this.enableEditMode();
    if (focus) {
      this.editorDiv.focus();
    }
    if (this._initialOptions?.isCentered) {
      this.center();
    }
    this._initialOptions = null;
  }
  isEmpty() {
    return !this.editorDiv || this.editorDiv.innerText.trim() === "";
  }
  remove() {
    this.isEditing = false;
    if (this.parent) {
      this.parent.setEditingState(true);
      this.parent.div.classList.add("freetextEditing");
    }
    super.remove();
  }
  #extractText() {
    const buffer = [];
    this.editorDiv.normalize();
    let prevChild = null;
    for (const child of this.editorDiv.childNodes) {
      if (prevChild?.nodeType === Node.TEXT_NODE && child.nodeName === "BR") {
        continue;
      }
      buffer.push(FreeTextEditor.#getNodeContent(child));
      prevChild = child;
    }
    return buffer.join("\n");
  }
  #setEditorDimensions() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    let rect;
    if (this.isAttachedToDOM) {
      rect = this.div.getBoundingClientRect();
    } else {
      const {
        currentLayer,
        div
      } = this;
      const savedDisplay = div.style.display;
      const savedVisibility = div.classList.contains("hidden");
      div.classList.remove("hidden");
      div.style.display = "hidden";
      currentLayer.div.append(this.div);
      rect = div.getBoundingClientRect();
      div.remove();
      div.style.display = savedDisplay;
      div.classList.toggle("hidden", savedVisibility);
    }
    if (this.rotation % 180 === this.parentRotation % 180) {
      this.width = rect.width / parentWidth;
      this.height = rect.height / parentHeight;
    } else {
      this.width = rect.height / parentWidth;
      this.height = rect.width / parentHeight;
    }
    this.fixAndSetPosition();
  }
  commit() {
    if (!this.isInEditMode()) {
      return;
    }
    super.commit();
    this.disableEditMode();
    const savedText = this.#content;
    const newText = this.#content = this.#extractText().trimEnd();
    if (savedText === newText) {
      return;
    }
    const setText = text => {
      this.#content = text;
      if (!text) {
        this.remove();
        return;
      }
      this.#setContent();
      this._uiManager.rebuild(this);
      this.#setEditorDimensions();
    };
    this.addCommands({
      cmd: () => {
        setText(newText);
      },
      undo: () => {
        setText(savedText);
      },
      mustExec: false
    });
    this.#setEditorDimensions();
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    this.enableEditMode();
    this.editorDiv.focus();
  }
  keydown(event) {
    if (event.target === this.div && event.key === "Enter") {
      this.enterInEditMode();
      event.preventDefault();
    }
  }
  editorDivKeydown(event) {
    FreeTextEditor._keyboardManager.exec(this, event);
  }
  editorDivFocus(event) {
    this.isEditing = true;
  }
  editorDivBlur(event) {
    this.isEditing = false;
  }
  editorDivInput(event) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    this.editorDiv.setAttribute("role", "comment");
    this.editorDiv.removeAttribute("aria-multiline");
  }
  enableEditing() {
    this.editorDiv.setAttribute("role", "textbox");
    this.editorDiv.setAttribute("aria-multiline", true);
  }
  get canChangeContent() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy || this.annotationElementId) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.editorDiv = document.createElement("div");
    this.editorDiv.className = "internal";
    this.editorDiv.setAttribute("id", this.#editorDivId);
    this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2");
    this.editorDiv.setAttribute("data-l10n-attrs", "default-content");
    this.enableEditing();
    this.editorDiv.contentEditable = true;
    const {
      style
    } = this.editorDiv;
    style.fontSize = `calc(${this.#fontSize}px * var(--total-scale-factor))`;
    style.color = this.color;
    this.div.append(this.editorDiv);
    this.overlayDiv = document.createElement("div");
    this.overlayDiv.classList.add("overlay", "enabled");
    this.div.append(this.overlayDiv);
    if (this._isCopy || this.annotationElementId) {
      const [parentWidth, parentHeight] = this.parentDimensions;
      if (this.annotationElementId) {
        const {
          position
        } = this._initialData;
        let [tx, ty] = this.getInitialTranslation();
        [tx, ty] = this.pageTranslationToScreen(tx, ty);
        const [pageWidth, pageHeight] = this.pageDimensions;
        const [pageX, pageY] = this.pageTranslation;
        let posX, posY;
        switch (this.rotation) {
          case 0:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY + this.height - (position[1] - pageY) / pageHeight;
            break;
          case 90:
            posX = baseX + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [ty, -tx];
            break;
          case 180:
            posX = baseX - this.width + (position[0] - pageX) / pageWidth;
            posY = baseY - (position[1] - pageY) / pageHeight;
            [tx, ty] = [-tx, -ty];
            break;
          case 270:
            posX = baseX + (position[0] - pageX - this.height * pageHeight) / pageWidth;
            posY = baseY + (position[1] - pageY - this.width * pageWidth) / pageHeight;
            [tx, ty] = [-ty, tx];
            break;
        }
        this.setAt(posX * parentWidth, posY * parentHeight, tx, ty);
      } else {
        this._moveAfterPaste(baseX, baseY);
      }
      this.#setContent();
      this._isDraggable = true;
      this.editorDiv.contentEditable = false;
    } else {
      this._isDraggable = false;
      this.editorDiv.contentEditable = true;
    }
    return this.div;
  }
  static #getNodeContent(node) {
    return (node.nodeType === Node.TEXT_NODE ? node.nodeValue : node.innerText).replaceAll(EOL_PATTERN, "");
  }
  editorDivPaste(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const {
      types
    } = clipboardData;
    if (types.length === 1 && types[0] === "text/plain") {
      return;
    }
    event.preventDefault();
    const paste = FreeTextEditor.#deserializeContent(clipboardData.getData("text") || "").replaceAll(EOL_PATTERN, "\n");
    if (!paste) {
      return;
    }
    const selection = window.getSelection();
    if (!selection.rangeCount) {
      return;
    }
    this.editorDiv.normalize();
    selection.deleteFromDocument();
    const range = selection.getRangeAt(0);
    if (!paste.includes("\n")) {
      range.insertNode(document.createTextNode(paste));
      this.editorDiv.normalize();
      selection.collapseToStart();
      return;
    }
    const {
      startContainer,
      startOffset
    } = range;
    const bufferBefore = [];
    const bufferAfter = [];
    if (startContainer.nodeType === Node.TEXT_NODE) {
      const parent = startContainer.parentElement;
      bufferAfter.push(startContainer.nodeValue.slice(startOffset).replaceAll(EOL_PATTERN, ""));
      if (parent !== this.editorDiv) {
        let buffer = bufferBefore;
        for (const child of this.editorDiv.childNodes) {
          if (child === parent) {
            buffer = bufferAfter;
            continue;
          }
          buffer.push(FreeTextEditor.#getNodeContent(child));
        }
      }
      bufferBefore.push(startContainer.nodeValue.slice(0, startOffset).replaceAll(EOL_PATTERN, ""));
    } else if (startContainer === this.editorDiv) {
      let buffer = bufferBefore;
      let i = 0;
      for (const child of this.editorDiv.childNodes) {
        if (i++ === startOffset) {
          buffer = bufferAfter;
        }
        buffer.push(FreeTextEditor.#getNodeContent(child));
      }
    }
    this.#content = `${bufferBefore.join("\n")}${paste}${bufferAfter.join("\n")}`;
    this.#setContent();
    const newRange = new Range();
    let beforeLength = Math.sumPrecise(bufferBefore.map(line => line.length));
    for (const {
      firstChild
    } of this.editorDiv.childNodes) {
      if (firstChild.nodeType === Node.TEXT_NODE) {
        const length = firstChild.nodeValue.length;
        if (beforeLength <= length) {
          newRange.setStart(firstChild, beforeLength);
          newRange.setEnd(firstChild, beforeLength);
          break;
        }
        beforeLength -= length;
      }
    }
    selection.removeAllRanges();
    selection.addRange(newRange);
  }
  #setContent() {
    this.editorDiv.replaceChildren();
    if (!this.#content) {
      return;
    }
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      this.editorDiv.append(div);
    }
  }
  #serializeContent() {
    return this.#content.replaceAll("\xa0", " ");
  }
  static #deserializeContent(content) {
    return content.replaceAll(" ", "\xa0");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  getPDFRect() {
    const padding = FreeTextEditor._internalPadding * this.parentScale;
    return this.getRect(padding, padding);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof FreeTextAnnotationElement) {
      const {
        data: {
          defaultAppearanceData: {
            fontSize,
            fontColor
          },
          rect,
          rotation,
          id,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        textContent,
        textPosition,
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      if (!textContent || textContent.length === 0) {
        return null;
      }
      initialData = data = {
        annotationType: AnnotationEditorType.FREETEXT,
        color: Array.from(fontColor),
        fontSize,
        value: textContent.join("\n"),
        position: textPosition,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        comment: contentsObj?.str || null,
        richText,
        creationDate,
        modificationDate
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    editor.#fontSize = data.fontSize;
    editor.color = Util.makeHexColor(...data.color);
    editor.#content = FreeTextEditor.#deserializeContent(data.value);
    editor._initialData = initialData;
    if (data.comment) {
      editor.setCommentData(data);
    }
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const color = AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color);
    const serialized = Object.assign(super.serialize(isForCopying), {
      color,
      fontSize: this.#fontSize,
      value: this.#serializeContent()
    });
    this.addComment(serialized);
    if (isForCopying) {
      serialized.isCopy = true;
      return serialized;
    }
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      value,
      fontSize,
      color,
      pageIndex
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || serialized.value !== value || serialized.fontSize !== fontSize || serialized.color.some((c, i) => c !== color[i]) || serialized.pageIndex !== pageIndex;
  }
  renderAnnotationElement(annotation) {
    const content = super.renderAnnotationElement(annotation);
    if (!content) {
      return null;
    }
    const {
      style
    } = content;
    style.fontSize = `calc(${this.#fontSize}px * var(--total-scale-factor))`;
    style.color = this.color;
    content.replaceChildren();
    for (const line of this.#content.split("\n")) {
      const div = document.createElement("div");
      div.append(line ? document.createTextNode(line) : document.createElement("br"));
      content.append(div);
    }
    annotation.updateEdited({
      rect: this.getPDFRect(),
      popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
        text: this.#content
      }
    });
    return content;
  }
  resetAnnotationElement(annotation) {
    super.resetAnnotationElement(annotation);
    annotation.resetEdited();
  }
}

;// ./src/display/editor/drawers/outline.js

class Outline {
  static PRECISION = 1e-4;
  toSVGPath() {
    unreachable("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    unreachable("Abstract getter `box` must be implemented.");
  }
  serialize(_bbox, _rotation) {
    unreachable("Abstract method `serialize` must be implemented.");
  }
  static _rescale(src, tx, ty, sx, sy, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i] * sx;
      dest[i + 1] = ty + src[i + 1] * sy;
    }
    return dest;
  }
  static _rescaleAndSwap(src, tx, ty, sx, sy, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i + 1] * sx;
      dest[i + 1] = ty + src[i] * sy;
    }
    return dest;
  }
  static _translate(src, tx, ty, dest) {
    dest ||= new Float32Array(src.length);
    for (let i = 0, ii = src.length; i < ii; i += 2) {
      dest[i] = tx + src[i];
      dest[i + 1] = ty + src[i + 1];
    }
    return dest;
  }
  static svgRound(x) {
    return Math.round(x * 10000);
  }
  static _normalizePoint(x, y, parentWidth, parentHeight, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y / parentWidth, x / parentHeight];
      case 180:
        return [1 - x / parentWidth, 1 - y / parentHeight];
      case 270:
        return [y / parentWidth, 1 - x / parentHeight];
      default:
        return [x / parentWidth, y / parentHeight];
    }
  }
  static _normalizePagePoint(x, y, rotation) {
    switch (rotation) {
      case 90:
        return [1 - y, x];
      case 180:
        return [1 - x, 1 - y];
      case 270:
        return [y, 1 - x];
      default:
        return [x, y];
    }
  }
  static createBezierPoints(x1, y1, x2, y2, x3, y3) {
    return [(x1 + 5 * x2) / 6, (y1 + 5 * y2) / 6, (5 * x2 + x3) / 6, (5 * y2 + y3) / 6, (x2 + x3) / 2, (y2 + y3) / 2];
  }
}

;// ./src/display/editor/drawers/freedraw.js


class FreeDrawOutliner {
  #box;
  #bottom = [];
  #innerMargin;
  #isLTR;
  #top = [];
  #last = new Float32Array(18);
  #lastX;
  #lastY;
  #min;
  #min_dist;
  #scaleFactor;
  #thickness;
  #points = [];
  static #MIN_DIST = 8;
  static #MIN_DIFF = 2;
  static #MIN = FreeDrawOutliner.#MIN_DIST + FreeDrawOutliner.#MIN_DIFF;
  constructor({
    x,
    y
  }, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    this.#box = box;
    this.#thickness = thickness * scaleFactor;
    this.#isLTR = isLTR;
    this.#last.set([NaN, NaN, NaN, NaN, x, y], 6);
    this.#innerMargin = innerMargin;
    this.#min_dist = FreeDrawOutliner.#MIN_DIST * scaleFactor;
    this.#min = FreeDrawOutliner.#MIN * scaleFactor;
    this.#scaleFactor = scaleFactor;
    this.#points.push(x, y);
  }
  isEmpty() {
    return isNaN(this.#last[8]);
  }
  #getLastCoords() {
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [x, y, width, height] = this.#box;
    return [(this.#lastX + (lastTop[0] - lastBottom[0]) / 2 - x) / width, (this.#lastY + (lastTop[1] - lastBottom[1]) / 2 - y) / height, (this.#lastX + (lastBottom[0] - lastTop[0]) / 2 - x) / width, (this.#lastY + (lastBottom[1] - lastTop[1]) / 2 - y) / height];
  }
  add({
    x,
    y
  }) {
    this.#lastX = x;
    this.#lastY = y;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    let [x1, y1, x2, y2] = this.#last.subarray(8, 12);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(diffX, diffY);
    if (d < this.#min) {
      return false;
    }
    const diffD = d - this.#min_dist;
    const K = diffD / d;
    const shiftX = K * diffX;
    const shiftY = K * diffY;
    let x0 = x1;
    let y0 = y1;
    x1 = x2;
    y1 = y2;
    x2 += shiftX;
    y2 += shiftY;
    this.#points?.push(x, y);
    const nX = -shiftY / diffD;
    const nY = shiftX / diffD;
    const thX = nX * this.#thickness;
    const thY = nY * this.#thickness;
    this.#last.set(this.#last.subarray(2, 8), 0);
    this.#last.set([x2 + thX, y2 + thY], 4);
    this.#last.set(this.#last.subarray(14, 18), 12);
    this.#last.set([x2 - thX, y2 - thY], 16);
    if (isNaN(this.#last[6])) {
      if (this.#top.length === 0) {
        this.#last.set([x1 + thX, y1 + thY], 2);
        this.#top.push(NaN, NaN, NaN, NaN, (x1 + thX - layerX) / layerWidth, (y1 + thY - layerY) / layerHeight);
        this.#last.set([x1 - thX, y1 - thY], 14);
        this.#bottom.push(NaN, NaN, NaN, NaN, (x1 - thX - layerX) / layerWidth, (y1 - thY - layerY) / layerHeight);
      }
      this.#last.set([x0, y0, x1, y1, x2, y2], 6);
      return !this.isEmpty();
    }
    this.#last.set([x0, y0, x1, y1, x2, y2], 6);
    const angle = Math.abs(Math.atan2(y0 - y1, x0 - x1) - Math.atan2(shiftY, shiftX));
    if (angle < Math.PI / 2) {
      [x1, y1, x2, y2] = this.#last.subarray(2, 6);
      this.#top.push(NaN, NaN, NaN, NaN, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
      [x1, y1, x0, y0] = this.#last.subarray(14, 18);
      this.#bottom.push(NaN, NaN, NaN, NaN, ((x0 + x1) / 2 - layerX) / layerWidth, ((y0 + y1) / 2 - layerY) / layerHeight);
      return true;
    }
    [x0, y0, x1, y1, x2, y2] = this.#last.subarray(0, 6);
    this.#top.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    [x2, y2, x1, y1, x0, y0] = this.#last.subarray(12, 18);
    this.#bottom.push(((x0 + 5 * x1) / 6 - layerX) / layerWidth, ((y0 + 5 * y1) / 6 - layerY) / layerHeight, ((5 * x1 + x2) / 6 - layerX) / layerWidth, ((5 * y1 + y2) / 6 - layerY) / layerHeight, ((x1 + x2) / 2 - layerX) / layerWidth, ((y1 + y2) / 2 - layerY) / layerHeight);
    return true;
  }
  toSVGPath() {
    if (this.isEmpty()) {
      return "";
    }
    const top = this.#top;
    const bottom = this.#bottom;
    if (isNaN(this.#last[6]) && !this.isEmpty()) {
      return this.#toSVGPathTwoPoints();
    }
    const buffer = [];
    buffer.push(`M${top[4]} ${top[5]}`);
    for (let i = 6; i < top.length; i += 6) {
      if (isNaN(top[i])) {
        buffer.push(`L${top[i + 4]} ${top[i + 5]}`);
      } else {
        buffer.push(`C${top[i]} ${top[i + 1]} ${top[i + 2]} ${top[i + 3]} ${top[i + 4]} ${top[i + 5]}`);
      }
    }
    this.#toSVGPathEnd(buffer);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      if (isNaN(bottom[i])) {
        buffer.push(`L${bottom[i + 4]} ${bottom[i + 5]}`);
      } else {
        buffer.push(`C${bottom[i]} ${bottom[i + 1]} ${bottom[i + 2]} ${bottom[i + 3]} ${bottom[i + 4]} ${bottom[i + 5]}`);
      }
    }
    this.#toSVGPathStart(buffer);
    return buffer.join(" ");
  }
  #toSVGPathTwoPoints() {
    const [x, y, width, height] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    return `M${(this.#last[2] - x) / width} ${(this.#last[3] - y) / height} L${(this.#last[4] - x) / width} ${(this.#last[5] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(this.#last[16] - x) / width} ${(this.#last[17] - y) / height} L${(this.#last[14] - x) / width} ${(this.#last[15] - y) / height} Z`;
  }
  #toSVGPathStart(buffer) {
    const bottom = this.#bottom;
    buffer.push(`L${bottom[4]} ${bottom[5]} Z`);
  }
  #toSVGPathEnd(buffer) {
    const [x, y, width, height] = this.#box;
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    buffer.push(`L${(lastTop[0] - x) / width} ${(lastTop[1] - y) / height} L${lastTopX} ${lastTopY} L${lastBottomX} ${lastBottomY} L${(lastBottom[0] - x) / width} ${(lastBottom[1] - y) / height}`);
  }
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
  getOutlines() {
    const top = this.#top;
    const bottom = this.#bottom;
    const last = this.#last;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const points = new Float32Array((this.#points?.length ?? 0) + 2);
    for (let i = 0, ii = points.length - 2; i < ii; i += 2) {
      points[i] = (this.#points[i] - layerX) / layerWidth;
      points[i + 1] = (this.#points[i + 1] - layerY) / layerHeight;
    }
    points[points.length - 2] = (this.#lastX - layerX) / layerWidth;
    points[points.length - 1] = (this.#lastY - layerY) / layerHeight;
    if (isNaN(last[6]) && !this.isEmpty()) {
      return this.#getOutlineTwoPoints(points);
    }
    const outline = new Float32Array(this.#top.length + 24 + this.#bottom.length);
    let N = top.length;
    for (let i = 0; i < N; i += 2) {
      if (isNaN(top[i])) {
        outline[i] = outline[i + 1] = NaN;
        continue;
      }
      outline[i] = top[i];
      outline[i + 1] = top[i + 1];
    }
    N = this.#getOutlineEnd(outline, N);
    for (let i = bottom.length - 6; i >= 6; i -= 6) {
      for (let j = 0; j < 6; j += 2) {
        if (isNaN(bottom[i + j])) {
          outline[N] = outline[N + 1] = NaN;
          N += 2;
          continue;
        }
        outline[N] = bottom[i + j];
        outline[N + 1] = bottom[i + j + 1];
        N += 2;
      }
    }
    this.#getOutlineStart(outline, N);
    return this.newFreeDrawOutline(outline, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
  }
  #getOutlineTwoPoints(points) {
    const last = this.#last;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    const outline = new Float32Array(36);
    outline.set([NaN, NaN, NaN, NaN, (last[2] - layerX) / layerWidth, (last[3] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[4] - layerX) / layerWidth, (last[5] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (last[16] - layerX) / layerWidth, (last[17] - layerY) / layerHeight, NaN, NaN, NaN, NaN, (last[14] - layerX) / layerWidth, (last[15] - layerY) / layerHeight], 0);
    return this.newFreeDrawOutline(outline, points, this.#box, this.#scaleFactor, this.#innerMargin, this.#isLTR);
  }
  #getOutlineStart(outline, pos) {
    const bottom = this.#bottom;
    outline.set([NaN, NaN, NaN, NaN, bottom[4], bottom[5]], pos);
    return pos += 6;
  }
  #getOutlineEnd(outline, pos) {
    const lastTop = this.#last.subarray(4, 6);
    const lastBottom = this.#last.subarray(16, 18);
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const [lastTopX, lastTopY, lastBottomX, lastBottomY] = this.#getLastCoords();
    outline.set([NaN, NaN, NaN, NaN, (lastTop[0] - layerX) / layerWidth, (lastTop[1] - layerY) / layerHeight, NaN, NaN, NaN, NaN, lastTopX, lastTopY, NaN, NaN, NaN, NaN, lastBottomX, lastBottomY, NaN, NaN, NaN, NaN, (lastBottom[0] - layerX) / layerWidth, (lastBottom[1] - layerY) / layerHeight], pos);
    return pos += 24;
  }
}
class FreeDrawOutline extends Outline {
  #box;
  #bbox = new Float32Array(4);
  #innerMargin;
  #isLTR;
  #points;
  #scaleFactor;
  #outline;
  constructor(outline, points, box, scaleFactor, innerMargin, isLTR) {
    super();
    this.#outline = outline;
    this.#points = points;
    this.#box = box;
    this.#scaleFactor = scaleFactor;
    this.#innerMargin = innerMargin;
    this.#isLTR = isLTR;
    this.firstPoint = [NaN, NaN];
    this.lastPoint = [NaN, NaN];
    this.#computeMinMax(isLTR);
    const [x, y, width, height] = this.#bbox;
    for (let i = 0, ii = outline.length; i < ii; i += 2) {
      outline[i] = (outline[i] - x) / width;
      outline[i + 1] = (outline[i + 1] - y) / height;
    }
    for (let i = 0, ii = points.length; i < ii; i += 2) {
      points[i] = (points[i] - x) / width;
      points[i + 1] = (points[i + 1] - y) / height;
    }
  }
  toSVGPath() {
    const buffer = [`M${this.#outline[4]} ${this.#outline[5]}`];
    for (let i = 6, ii = this.#outline.length; i < ii; i += 6) {
      if (isNaN(this.#outline[i])) {
        buffer.push(`L${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
        continue;
      }
      buffer.push(`C${this.#outline[i]} ${this.#outline[i + 1]} ${this.#outline[i + 2]} ${this.#outline[i + 3]} ${this.#outline[i + 4]} ${this.#outline[i + 5]}`);
    }
    buffer.push("Z");
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], rotation) {
    const width = trX - blX;
    const height = trY - blY;
    let outline;
    let points;
    switch (rotation) {
      case 0:
        outline = Outline._rescale(this.#outline, blX, trY, width, -height);
        points = Outline._rescale(this.#points, blX, trY, width, -height);
        break;
      case 90:
        outline = Outline._rescaleAndSwap(this.#outline, blX, blY, width, height);
        points = Outline._rescaleAndSwap(this.#points, blX, blY, width, height);
        break;
      case 180:
        outline = Outline._rescale(this.#outline, trX, blY, -width, height);
        points = Outline._rescale(this.#points, trX, blY, -width, height);
        break;
      case 270:
        outline = Outline._rescaleAndSwap(this.#outline, trX, trY, -width, -height);
        points = Outline._rescaleAndSwap(this.#points, trX, trY, -width, -height);
        break;
    }
    return {
      outline: Array.from(outline),
      points: [Array.from(points)]
    };
  }
  #computeMinMax(isLTR) {
    const outline = this.#outline;
    let lastX = outline[4];
    let lastY = outline[5];
    const minMax = [lastX, lastY, lastX, lastY];
    let firstPointX = lastX;
    let firstPointY = lastY;
    let lastPointX = lastX;
    let lastPointY = lastY;
    const ltrCallback = isLTR ? Math.max : Math.min;
    const bezierBbox = new Float32Array(4);
    for (let i = 6, ii = outline.length; i < ii; i += 6) {
      const x = outline[i + 4],
        y = outline[i + 5];
      if (isNaN(outline[i])) {
        Util.pointBoundingBox(x, y, minMax);
        if (firstPointY > y) {
          firstPointX = x;
          firstPointY = y;
        } else if (firstPointY === y) {
          firstPointX = ltrCallback(firstPointX, x);
        }
        if (lastPointY < y) {
          lastPointX = x;
          lastPointY = y;
        } else if (lastPointY === y) {
          lastPointX = ltrCallback(lastPointX, x);
        }
      } else {
        bezierBbox[0] = bezierBbox[1] = Infinity;
        bezierBbox[2] = bezierBbox[3] = -Infinity;
        Util.bezierBoundingBox(lastX, lastY, ...outline.slice(i, i + 6), bezierBbox);
        Util.rectBoundingBox(bezierBbox[0], bezierBbox[1], bezierBbox[2], bezierBbox[3], minMax);
        if (firstPointY > bezierBbox[1]) {
          firstPointX = bezierBbox[0];
          firstPointY = bezierBbox[1];
        } else if (firstPointY === bezierBbox[1]) {
          firstPointX = ltrCallback(firstPointX, bezierBbox[0]);
        }
        if (lastPointY < bezierBbox[3]) {
          lastPointX = bezierBbox[2];
          lastPointY = bezierBbox[3];
        } else if (lastPointY === bezierBbox[3]) {
          lastPointX = ltrCallback(lastPointX, bezierBbox[2]);
        }
      }
      lastX = x;
      lastY = y;
    }
    const bbox = this.#bbox;
    bbox[0] = minMax[0] - this.#innerMargin;
    bbox[1] = minMax[1] - this.#innerMargin;
    bbox[2] = minMax[2] - minMax[0] + 2 * this.#innerMargin;
    bbox[3] = minMax[3] - minMax[1] + 2 * this.#innerMargin;
    this.firstPoint = [firstPointX, firstPointY];
    this.lastPoint = [lastPointX, lastPointY];
  }
  get box() {
    return this.#bbox;
  }
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeDrawOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
  getNewOutline(thickness, innerMargin) {
    const [x, y, width, height] = this.#bbox;
    const [layerX, layerY, layerWidth, layerHeight] = this.#box;
    const sx = width * layerWidth;
    const sy = height * layerHeight;
    const tx = x * layerWidth + layerX;
    const ty = y * layerHeight + layerY;
    const outliner = this.newOutliner({
      x: this.#points[0] * sx + tx,
      y: this.#points[1] * sy + ty
    }, this.#box, this.#scaleFactor, thickness, this.#isLTR, innerMargin ?? this.#innerMargin);
    for (let i = 2; i < this.#points.length; i += 2) {
      outliner.add({
        x: this.#points[i] * sx + tx,
        y: this.#points[i + 1] * sy + ty
      });
    }
    return outliner.getOutlines();
  }
}

;// ./src/display/editor/drawers/highlight.js



class HighlightOutliner {
  #box;
  #firstPoint;
  #lastPoint;
  #verticalEdges = [];
  #intervals = [];
  constructor(boxes, borderWidth = 0, innerMargin = 0, isLTR = true) {
    const minMax = [Infinity, Infinity, -Infinity, -Infinity];
    const NUMBER_OF_DIGITS = 4;
    const EPSILON = 10 ** -NUMBER_OF_DIGITS;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const x1 = Math.floor((x - borderWidth) / EPSILON) * EPSILON;
      const x2 = Math.ceil((x + width + borderWidth) / EPSILON) * EPSILON;
      const y1 = Math.floor((y - borderWidth) / EPSILON) * EPSILON;
      const y2 = Math.ceil((y + height + borderWidth) / EPSILON) * EPSILON;
      const left = [x1, y1, y2, true];
      const right = [x2, y1, y2, false];
      this.#verticalEdges.push(left, right);
      Util.rectBoundingBox(x1, y1, x2, y2, minMax);
    }
    const bboxWidth = minMax[2] - minMax[0] + 2 * innerMargin;
    const bboxHeight = minMax[3] - minMax[1] + 2 * innerMargin;
    const shiftedMinX = minMax[0] - innerMargin;
    const shiftedMinY = minMax[1] - innerMargin;
    let firstPointX = isLTR ? -Infinity : Infinity;
    let firstPointY = Infinity;
    const lastEdge = this.#verticalEdges.at(isLTR ? -1 : -2);
    const lastPoint = [lastEdge[0], lastEdge[2]];
    for (const edge of this.#verticalEdges) {
      const [x, y1, y2, left] = edge;
      if (!left && isLTR) {
        if (y1 < firstPointY) {
          firstPointY = y1;
          firstPointX = x;
        } else if (y1 === firstPointY) {
          firstPointX = Math.max(firstPointX, x);
        }
      } else if (left && !isLTR) {
        if (y1 < firstPointY) {
          firstPointY = y1;
          firstPointX = x;
        } else if (y1 === firstPointY) {
          firstPointX = Math.min(firstPointX, x);
        }
      }
      edge[0] = (x - shiftedMinX) / bboxWidth;
      edge[1] = (y1 - shiftedMinY) / bboxHeight;
      edge[2] = (y2 - shiftedMinY) / bboxHeight;
    }
    this.#box = new Float32Array([shiftedMinX, shiftedMinY, bboxWidth, bboxHeight]);
    this.#firstPoint = [firstPointX, firstPointY];
    this.#lastPoint = lastPoint;
  }
  getOutlines() {
    this.#verticalEdges.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
    const outlineVerticalEdges = [];
    for (const edge of this.#verticalEdges) {
      if (edge[3]) {
        outlineVerticalEdges.push(...this.#breakEdge(edge));
        this.#insert(edge);
      } else {
        this.#remove(edge);
        outlineVerticalEdges.push(...this.#breakEdge(edge));
      }
    }
    return this.#getOutlines(outlineVerticalEdges);
  }
  #getOutlines(outlineVerticalEdges) {
    const edges = [];
    const allEdges = new Set();
    for (const edge of outlineVerticalEdges) {
      const [x, y1, y2] = edge;
      edges.push([x, y1, edge], [x, y2, edge]);
    }
    edges.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    for (let i = 0, ii = edges.length; i < ii; i += 2) {
      const edge1 = edges[i][2];
      const edge2 = edges[i + 1][2];
      edge1.push(edge2);
      edge2.push(edge1);
      allEdges.add(edge1);
      allEdges.add(edge2);
    }
    const outlines = [];
    let outline;
    while (allEdges.size > 0) {
      const edge = allEdges.values().next().value;
      let [x, y1, y2, edge1, edge2] = edge;
      allEdges.delete(edge);
      let lastPointX = x;
      let lastPointY = y1;
      outline = [x, y2];
      outlines.push(outline);
      while (true) {
        let e;
        if (allEdges.has(edge1)) {
          e = edge1;
        } else if (allEdges.has(edge2)) {
          e = edge2;
        } else {
          break;
        }
        allEdges.delete(e);
        [x, y1, y2, edge1, edge2] = e;
        if (lastPointX !== x) {
          outline.push(lastPointX, lastPointY, x, lastPointY === y1 ? y1 : y2);
          lastPointX = x;
        }
        lastPointY = lastPointY === y1 ? y2 : y1;
      }
      outline.push(lastPointX, lastPointY);
    }
    return new HighlightOutline(outlines, this.#box, this.#firstPoint, this.#lastPoint);
  }
  #binarySearch(y) {
    const array = this.#intervals;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const middle = start + end >> 1;
      const y1 = array[middle][0];
      if (y1 === y) {
        return middle;
      }
      if (y1 < y) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    return end + 1;
  }
  #insert([, y1, y2]) {
    const index = this.#binarySearch(y1);
    this.#intervals.splice(index, 0, [y1, y2]);
  }
  #remove([, y1, y2]) {
    const index = this.#binarySearch(y1);
    for (let i = index; i < this.#intervals.length; i++) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
    for (let i = index - 1; i >= 0; i--) {
      const [start, end] = this.#intervals[i];
      if (start !== y1) {
        break;
      }
      if (start === y1 && end === y2) {
        this.#intervals.splice(i, 1);
        return;
      }
    }
  }
  #breakEdge(edge) {
    const [x, y1, y2] = edge;
    const results = [[x, y1, y2]];
    const index = this.#binarySearch(y2);
    for (let i = 0; i < index; i++) {
      const [start, end] = this.#intervals[i];
      for (let j = 0, jj = results.length; j < jj; j++) {
        const [, y3, y4] = results[j];
        if (end <= y3 || y4 <= start) {
          continue;
        }
        if (y3 >= start) {
          if (y4 > end) {
            results[j][1] = end;
          } else {
            if (jj === 1) {
              return [];
            }
            results.splice(j, 1);
            j--;
            jj--;
          }
          continue;
        }
        results[j][2] = start;
        if (y4 > end) {
          results.push([x, end, y4]);
        }
      }
    }
    return results;
  }
}
class HighlightOutline extends Outline {
  #box;
  #outlines;
  constructor(outlines, box, firstPoint, lastPoint) {
    super();
    this.#outlines = outlines;
    this.#box = box;
    this.firstPoint = firstPoint;
    this.lastPoint = lastPoint;
  }
  toSVGPath() {
    const buffer = [];
    for (const polygon of this.#outlines) {
      let [prevX, prevY] = polygon;
      buffer.push(`M${prevX} ${prevY}`);
      for (let i = 2; i < polygon.length; i += 2) {
        const x = polygon[i];
        const y = polygon[i + 1];
        if (x === prevX) {
          buffer.push(`V${y}`);
          prevY = y;
        } else if (y === prevY) {
          buffer.push(`H${x}`);
          prevX = x;
        }
      }
      buffer.push("Z");
    }
    return buffer.join(" ");
  }
  serialize([blX, blY, trX, trY], _rotation) {
    const outlines = [];
    const width = trX - blX;
    const height = trY - blY;
    for (const outline of this.#outlines) {
      const points = new Array(outline.length);
      for (let i = 0; i < outline.length; i += 2) {
        points[i] = blX + outline[i] * width;
        points[i + 1] = trY - outline[i + 1] * height;
      }
      outlines.push(points);
    }
    return outlines;
  }
  get box() {
    return this.#box;
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class FreeHighlightOutliner extends FreeDrawOutliner {
  newFreeDrawOutline(outline, points, box, scaleFactor, innerMargin, isLTR) {
    return new FreeHighlightOutline(outline, points, box, scaleFactor, innerMargin, isLTR);
  }
}
class FreeHighlightOutline extends FreeDrawOutline {
  newOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin = 0) {
    return new FreeHighlightOutliner(point, box, scaleFactor, thickness, isLTR, innerMargin);
  }
}

;// ./src/display/editor/highlight.js







class HighlightEditor extends AnnotationEditor {
  #anchorNode = null;
  #anchorOffset = 0;
  #boxes;
  #clipPathId = null;
  #colorPicker = null;
  #focusOutlines = null;
  #focusNode = null;
  #focusOffset = 0;
  #highlightDiv = null;
  #highlightOutlines = null;
  #id = null;
  #isFreeHighlight = false;
  #firstPoint = null;
  #lastPoint = null;
  #outlineId = null;
  #text = "";
  #thickness;
  #methodOfCreation = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = AnnotationEditorType.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const proto = HighlightEditor.prototype;
    return shadow(this, "_keyboardManager", new KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], proto._moveCaret, {
      args: [0]
    }], [["ArrowRight", "mac+ArrowRight"], proto._moveCaret, {
      args: [1]
    }], [["ArrowUp", "mac+ArrowUp"], proto._moveCaret, {
      args: [2]
    }], [["ArrowDown", "mac+ArrowDown"], proto._moveCaret, {
      args: [3]
    }]]));
  }
  constructor(params) {
    super({
      ...params,
      name: "highlightEditor"
    });
    this.color = params.color || HighlightEditor._defaultColor;
    this.#thickness = params.thickness || HighlightEditor._defaultThickness;
    this.opacity = params.opacity || HighlightEditor._defaultOpacity;
    this.#boxes = params.boxes || null;
    this.#methodOfCreation = params.methodOfCreation || "";
    this.#text = params.text || "";
    this._isDraggable = false;
    this.defaultL10nId = "pdfjs-editor-highlight-editor";
    if (params.highlightId > -1) {
      this.#isFreeHighlight = true;
      this.#createFreeOutlines(params);
      this.#addToDrawLayer();
    } else if (this.#boxes) {
      this.#anchorNode = params.anchorNode;
      this.#anchorOffset = params.anchorOffset;
      this.#focusNode = params.focusNode;
      this.#focusOffset = params.focusOffset;
      this.#createOutlines();
      this.#addToDrawLayer();
      this.rotate(this.rotation);
    }
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#isFreeHighlight ? "free_highlight" : "highlight",
      color: this._uiManager.getNonHCMColorName(this.color),
      thickness: this.#thickness,
      methodOfCreation: this.#methodOfCreation
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.getNonHCMColorName(this.color)
    };
  }
  static computeTelemetryFinalData(data) {
    return {
      numberOfColors: data.get("color").size
    };
  }
  #createOutlines() {
    const outliner = new HighlightOutliner(this.#boxes, 0.001);
    this.#highlightOutlines = outliner.getOutlines();
    [this.x, this.y, this.width, this.height] = this.#highlightOutlines.box;
    const outlinerForOutline = new HighlightOutliner(this.#boxes, 0.0025, 0.001, this._uiManager.direction === "ltr");
    this.#focusOutlines = outlinerForOutline.getOutlines();
    const {
      firstPoint
    } = this.#highlightOutlines;
    this.#firstPoint = [(firstPoint[0] - this.x) / this.width, (firstPoint[1] - this.y) / this.height];
    const {
      lastPoint
    } = this.#focusOutlines;
    this.#lastPoint = [(lastPoint[0] - this.x) / this.width, (lastPoint[1] - this.y) / this.height];
  }
  #createFreeOutlines({
    highlightOutlines,
    highlightId,
    clipPathId
  }) {
    this.#highlightOutlines = highlightOutlines;
    const extraThickness = 1.5;
    this.#focusOutlines = highlightOutlines.getNewOutline(this.#thickness / 2 + extraThickness, 0.0025);
    if (highlightId >= 0) {
      this.#id = highlightId;
      this.#clipPathId = clipPathId;
      this.parent.drawLayer.finalizeDraw(highlightId, {
        bbox: highlightOutlines.box,
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.#outlineId = this.parent.drawLayer.drawOutline({
        rootClass: {
          highlightOutline: true,
          free: true
        },
        bbox: this.#focusOutlines.box,
        path: {
          d: this.#focusOutlines.toSVGPath()
        }
      }, true);
    } else if (this.parent) {
      const angle = this.parent.viewport.rotation;
      this.parent.drawLayer.updateProperties(this.#id, {
        bbox: HighlightEditor.#rotateBbox(this.#highlightOutlines.box, (angle - this.rotation + 360) % 360),
        path: {
          d: highlightOutlines.toSVGPath()
        }
      });
      this.parent.drawLayer.updateProperties(this.#outlineId, {
        bbox: HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle),
        path: {
          d: this.#focusOutlines.toSVGPath()
        }
      });
    }
    const [x, y, width, height] = highlightOutlines.box;
    switch (this.rotation) {
      case 0:
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        break;
      case 90:
        {
          const [pageWidth, pageHeight] = this.parentDimensions;
          this.x = y;
          this.y = 1 - x;
          this.width = width * pageHeight / pageWidth;
          this.height = height * pageWidth / pageHeight;
          break;
        }
      case 180:
        this.x = 1 - x;
        this.y = 1 - y;
        this.width = width;
        this.height = height;
        break;
      case 270:
        {
          const [pageWidth, pageHeight] = this.parentDimensions;
          this.x = 1 - y;
          this.y = x;
          this.width = width * pageHeight / pageWidth;
          this.height = height * pageWidth / pageHeight;
          break;
        }
    }
    const {
      firstPoint
    } = highlightOutlines;
    this.#firstPoint = [(firstPoint[0] - x) / width, (firstPoint[1] - y) / height];
    const {
      lastPoint
    } = this.#focusOutlines;
    this.#lastPoint = [(lastPoint[0] - x) / width, (lastPoint[1] - y) / height];
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    HighlightEditor._defaultColor ||= uiManager.highlightColors?.values().next().value || "#fff066";
  }
  static updateDefaultParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        HighlightEditor._defaultColor = value;
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        HighlightEditor._defaultThickness = value;
        break;
    }
  }
  translateInPage(x, y) {}
  get toolbarPosition() {
    return this.#lastPoint;
  }
  get commentButtonPosition() {
    return this.#firstPoint;
  }
  updateParams(type, value) {
    switch (type) {
      case AnnotationEditorParamsType.HIGHLIGHT_COLOR:
        this.#updateColor(value);
        break;
      case AnnotationEditorParamsType.HIGHLIGHT_THICKNESS:
        this.#updateThickness(value);
        break;
    }
  }
  static get defaultPropertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, HighlightEditor._defaultThickness]];
  }
  get propertiesToUpdate() {
    return [[AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || HighlightEditor._defaultColor], [AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, this.#thickness || HighlightEditor._defaultThickness], [AnnotationEditorParamsType.HIGHLIGHT_FREE, this.#isFreeHighlight]];
  }
  onUpdatedColor() {
    this.parent?.drawLayer.updateProperties(this.#id, {
      root: {
        fill: this.color,
        "fill-opacity": this.opacity
      }
    });
    this.#colorPicker?.updateColor(this.color);
    super.onUpdatedColor();
  }
  #updateColor(color) {
    const setColorAndOpacity = (col, opa) => {
      this.color = col;
      this.opacity = opa;
      this.onUpdatedColor();
    };
    const savedColor = this.color;
    const savedOpacity = this.opacity;
    this.addCommands({
      cmd: setColorAndOpacity.bind(this, color, HighlightEditor._defaultOpacity),
      undo: setColorAndOpacity.bind(this, savedColor, savedOpacity),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.HIGHLIGHT_COLOR,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "color_changed",
      color: this._uiManager.getNonHCMColorName(color)
    }, true);
  }
  #updateThickness(thickness) {
    const savedThickness = this.#thickness;
    const setThickness = th => {
      this.#thickness = th;
      this.#changeThickness(th);
    };
    this.addCommands({
      cmd: setThickness.bind(this, thickness),
      undo: setThickness.bind(this, savedThickness),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type: AnnotationEditorParamsType.INK_THICKNESS,
      overwriteIfSameType: true,
      keepUndo: true
    });
    this._reportTelemetry({
      action: "thickness_changed",
      thickness
    }, true);
  }
  get toolbarButtons() {
    if (this._uiManager.highlightColors) {
      const colorPicker = this.#colorPicker = new ColorPicker({
        editor: this
      });
      return [["colorPicker", colorPicker]];
    }
    return super.toolbarButtons;
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#getRotation());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(tx, ty) {
    return super.getRect(tx, ty, this.#getRotation());
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    if (focus) {
      this.div.focus();
    }
  }
  remove() {
    this.#cleanDrawLayer();
    this._reportTelemetry({
      action: "deleted"
    });
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    this.#addToDrawLayer();
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this.#cleanDrawLayer();
    } else if (parent) {
      this.#addToDrawLayer(parent);
      mustBeSelected = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(parent);
    this.show(this._isVisible);
    if (mustBeSelected) {
      this.select();
    }
  }
  #changeThickness(thickness) {
    if (!this.#isFreeHighlight) {
      return;
    }
    this.#createFreeOutlines({
      highlightOutlines: this.#highlightOutlines.getNewOutline(thickness / 2)
    });
    this.fixAndSetPosition();
    this.setDims();
  }
  #cleanDrawLayer() {
    if (this.#id === null || !this.parent) {
      return;
    }
    this.parent.drawLayer.remove(this.#id);
    this.#id = null;
    this.parent.drawLayer.remove(this.#outlineId);
    this.#outlineId = null;
  }
  #addToDrawLayer(parent = this.parent) {
    if (this.#id !== null) {
      return;
    }
    ({
      id: this.#id,
      clipPathId: this.#clipPathId
    } = parent.drawLayer.draw({
      bbox: this.#highlightOutlines.box,
      root: {
        viewBox: "0 0 1 1",
        fill: this.color,
        "fill-opacity": this.opacity
      },
      rootClass: {
        highlight: true,
        free: this.#isFreeHighlight
      },
      path: {
        d: this.#highlightOutlines.toSVGPath()
      }
    }, false, true));
    this.#outlineId = parent.drawLayer.drawOutline({
      rootClass: {
        highlightOutline: true,
        free: this.#isFreeHighlight
      },
      bbox: this.#focusOutlines.box,
      path: {
        d: this.#focusOutlines.toSVGPath()
      }
    }, this.#isFreeHighlight);
    if (this.#highlightDiv) {
      this.#highlightDiv.style.clipPath = this.#clipPathId;
    }
  }
  static #rotateBbox([x, y, width, height], angle) {
    switch (angle) {
      case 90:
        return [1 - y - height, x, height, width];
      case 180:
        return [1 - x - width, 1 - y - height, width, height];
      case 270:
        return [y, 1 - x - width, height, width];
    }
    return [x, y, width, height];
  }
  rotate(angle) {
    const {
      drawLayer
    } = this.parent;
    let box;
    if (this.#isFreeHighlight) {
      angle = (angle - this.rotation + 360) % 360;
      box = HighlightEditor.#rotateBbox(this.#highlightOutlines.box, angle);
    } else {
      box = HighlightEditor.#rotateBbox([this.x, this.y, this.width, this.height], angle);
    }
    drawLayer.updateProperties(this.#id, {
      bbox: box,
      root: {
        "data-main-rotation": angle
      }
    });
    drawLayer.updateProperties(this.#outlineId, {
      bbox: HighlightEditor.#rotateBbox(this.#focusOutlines.box, angle),
      root: {
        "data-main-rotation": angle
      }
    });
  }
  render() {
    if (this.div) {
      return this.div;
    }
    const div = super.render();
    if (this.#text) {
      div.setAttribute("aria-label", this.#text);
      div.setAttribute("role", "mark");
    }
    if (this.#isFreeHighlight) {
      div.classList.add("free");
    } else {
      this.div.addEventListener("keydown", this.#keydown.bind(this), {
        signal: this._uiManager._signal
      });
    }
    const highlightDiv = this.#highlightDiv = document.createElement("div");
    div.append(highlightDiv);
    highlightDiv.setAttribute("aria-hidden", "true");
    highlightDiv.className = "internal";
    highlightDiv.style.clipPath = this.#clipPathId;
    this.setDims();
    bindEvents(this, this.#highlightDiv, ["pointerover", "pointerleave"]);
    this.enableEditing();
    return div;
  }
  pointerover() {
    if (!this.isSelected) {
      this.parent?.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hovered: true
        }
      });
    }
  }
  pointerleave() {
    if (!this.isSelected) {
      this.parent?.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hovered: false
        }
      });
    }
  }
  #keydown(event) {
    HighlightEditor._keyboardManager.exec(this, event);
  }
  _moveCaret(direction) {
    this.parent.unselect(this);
    switch (direction) {
      case 0:
      case 2:
        this.#setCaret(true);
        break;
      case 1:
      case 3:
        this.#setCaret(false);
        break;
    }
  }
  #setCaret(start) {
    if (!this.#anchorNode) {
      return;
    }
    const selection = window.getSelection();
    if (start) {
      selection.setPosition(this.#anchorNode, this.#anchorOffset);
    } else {
      selection.setPosition(this.#focusNode, this.#focusOffset);
    }
  }
  select() {
    super.select();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.updateProperties(this.#outlineId, {
      rootClass: {
        hovered: false,
        selected: true
      }
    });
  }
  unselect() {
    super.unselect();
    if (!this.#outlineId) {
      return;
    }
    this.parent?.drawLayer.updateProperties(this.#outlineId, {
      rootClass: {
        selected: false
      }
    });
    if (!this.#isFreeHighlight) {
      this.#setCaret(false);
    }
  }
  get _mustFixPosition() {
    return !this.#isFreeHighlight;
  }
  show(visible = this._isVisible) {
    super.show(visible);
    if (this.parent) {
      this.parent.drawLayer.updateProperties(this.#id, {
        rootClass: {
          hidden: !visible
        }
      });
      this.parent.drawLayer.updateProperties(this.#outlineId, {
        rootClass: {
          hidden: !visible
        }
      });
    }
  }
  #getRotation() {
    return this.#isFreeHighlight ? this.rotation : 0;
  }
  #serializeBoxes() {
    if (this.#isFreeHighlight) {
      return null;
    }
    const [pageWidth, pageHeight] = this.pageDimensions;
    const [pageX, pageY] = this.pageTranslation;
    const boxes = this.#boxes;
    const quadPoints = new Float32Array(boxes.length * 8);
    let i = 0;
    for (const {
      x,
      y,
      width,
      height
    } of boxes) {
      const sx = x * pageWidth + pageX;
      const sy = (1 - y) * pageHeight + pageY;
      quadPoints[i] = quadPoints[i + 4] = sx;
      quadPoints[i + 1] = quadPoints[i + 3] = sy;
      quadPoints[i + 2] = quadPoints[i + 6] = sx + width * pageWidth;
      quadPoints[i + 5] = quadPoints[i + 7] = sy - height * pageHeight;
      i += 8;
    }
    return quadPoints;
  }
  #serializeOutlines(rect) {
    return this.#highlightOutlines.serialize(rect, this.#getRotation());
  }
  static startHighlighting(parent, isLTR, {
    target: textLayer,
    x,
    y
  }) {
    const {
      x: layerX,
      y: layerY,
      width: parentWidth,
      height: parentHeight
    } = textLayer.getBoundingClientRect();
    const ac = new AbortController();
    const signal = parent.combinedSignal(ac);
    const pointerUpCallback = e => {
      ac.abort();
      this.#endHighlight(parent, e);
    };
    window.addEventListener("blur", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerup", pointerUpCallback, {
      signal
    });
    window.addEventListener("pointerdown", stopEvent, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    textLayer.addEventListener("pointermove", this.#highlightMove.bind(this, parent), {
      signal
    });
    this._freeHighlight = new FreeHighlightOutliner({
      x,
      y
    }, [layerX, layerY, parentWidth, parentHeight], parent.scale, this._defaultThickness / 2, isLTR, 0.001);
    ({
      id: this._freeHighlightId,
      clipPathId: this._freeHighlightClipId
    } = parent.drawLayer.draw({
      bbox: [0, 0, 1, 1],
      root: {
        viewBox: "0 0 1 1",
        fill: this._defaultColor,
        "fill-opacity": this._defaultOpacity
      },
      rootClass: {
        highlight: true,
        free: true
      },
      path: {
        d: this._freeHighlight.toSVGPath()
      }
    }, true, true));
  }
  static #highlightMove(parent, event) {
    if (this._freeHighlight.add(event)) {
      parent.drawLayer.updateProperties(this._freeHighlightId, {
        path: {
          d: this._freeHighlight.toSVGPath()
        }
      });
    }
  }
  static #endHighlight(parent, event) {
    if (!this._freeHighlight.isEmpty()) {
      parent.createAndAddNewEditor(event, false, {
        highlightId: this._freeHighlightId,
        highlightOutlines: this._freeHighlight.getOutlines(),
        clipPathId: this._freeHighlightClipId,
        methodOfCreation: "main_toolbar"
      });
    } else {
      parent.drawLayer.remove(this._freeHighlightId);
    }
    this._freeHighlightId = -1;
    this._freeHighlight = null;
    this._freeHighlightClipId = "";
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof HighlightAnnotationElement) {
      const {
        data: {
          quadPoints,
          rect,
          rotation,
          id,
          color,
          opacity,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color),
        opacity,
        quadPoints,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    } else if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.HIGHLIGHT,
        color: Array.from(color),
        thickness,
        inkLists,
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const {
      color,
      quadPoints,
      inkLists,
      outlines,
      opacity
    } = data;
    const editor = await super.deserialize(data, parent, uiManager);
    editor.color = Util.makeHexColor(...color);
    editor.opacity = opacity || 1;
    if (inkLists) {
      editor.#thickness = data.thickness;
    }
    editor._initialData = initialData;
    if (data.comment) {
      editor.setCommentData(data);
    }
    const [pageWidth, pageHeight] = editor.pageDimensions;
    const [pageX, pageY] = editor.pageTranslation;
    if (quadPoints) {
      const boxes = editor.#boxes = [];
      for (let i = 0; i < quadPoints.length; i += 8) {
        boxes.push({
          x: (quadPoints[i] - pageX) / pageWidth,
          y: 1 - (quadPoints[i + 1] - pageY) / pageHeight,
          width: (quadPoints[i + 2] - quadPoints[i]) / pageWidth,
          height: (quadPoints[i + 1] - quadPoints[i + 5]) / pageHeight
        });
      }
      editor.#createOutlines();
      editor.#addToDrawLayer();
      editor.rotate(editor.rotation);
    } else if (inkLists || outlines) {
      editor.#isFreeHighlight = true;
      const points = (inkLists || outlines.points)[0];
      const point = {
        x: points[0] - pageX,
        y: pageHeight - (points[1] - pageY)
      };
      const outliner = new FreeHighlightOutliner(point, [0, 0, pageWidth, pageHeight], 1, editor.#thickness / 2, true, 0.001);
      for (let i = 0, ii = points.length; i < ii; i += 2) {
        point.x = points[i] - pageX;
        point.y = pageHeight - (points[i + 1] - pageY);
        outliner.add(point);
      }
      const {
        id,
        clipPathId
      } = parent.drawLayer.draw({
        bbox: [0, 0, 1, 1],
        root: {
          viewBox: "0 0 1 1",
          fill: editor.color,
          "fill-opacity": editor._defaultOpacity
        },
        rootClass: {
          highlight: true,
          free: true
        },
        path: {
          d: outliner.toSVGPath()
        }
      }, true, true);
      editor.#createFreeOutlines({
        highlightOutlines: outliner.getOutlines(),
        highlightId: id,
        clipPathId
      });
      editor.#addToDrawLayer();
      editor.rotate(editor.parentRotation);
    }
    return editor;
  }
  serialize(isForCopying = false) {
    if (this.isEmpty() || isForCopying) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const color = AnnotationEditor._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    const serialized = super.serialize(isForCopying);
    Object.assign(serialized, {
      color,
      opacity: this.opacity,
      thickness: this.#thickness,
      quadPoints: this.#serializeBoxes(),
      outlines: this.#serializeOutlines(serialized.rect)
    });
    this.addComment(serialized);
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      color
    } = this._initialData;
    return this.hasEditedComment || serialized.color.some((c, i) => c !== color[i]);
  }
  renderAnnotationElement(annotation) {
    if (this.deleted) {
      annotation.hide();
      return null;
    }
    annotation.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}

;// ./src/display/editor/draw.js




class DrawingOptions {
  #svgProperties = Object.create(null);
  updateProperty(name, value) {
    this[name] = value;
    this.updateSVGProperty(name, value);
  }
  updateProperties(properties) {
    if (!properties) {
      return;
    }
    for (const [name, value] of Object.entries(properties)) {
      if (!name.startsWith("_")) {
        this.updateProperty(name, value);
      }
    }
  }
  updateSVGProperty(name, value) {
    this.#svgProperties[name] = value;
  }
  toSVGProperties() {
    const root = this.#svgProperties;
    this.#svgProperties = Object.create(null);
    return {
      root
    };
  }
  reset() {
    this.#svgProperties = Object.create(null);
  }
  updateAll(options = this) {
    this.updateProperties(options);
  }
  clone() {
    unreachable("Not implemented");
  }
}
class DrawingEditor extends AnnotationEditor {
  #drawOutlines = null;
  #mustBeCommitted;
  _colorPicker = null;
  _drawId = null;
  static _currentDrawId = -1;
  static _currentParent = null;
  static #currentDraw = null;
  static #currentDrawingAC = null;
  static #currentDrawingOptions = null;
  static _INNER_MARGIN = 3;
  constructor(params) {
    super(params);
    this.#mustBeCommitted = params.mustBeCommitted || false;
    this._addOutlines(params);
  }
  onUpdatedColor() {
    this._colorPicker?.update(this.color);
    super.onUpdatedColor();
  }
  _addOutlines(params) {
    if (params.drawOutlines) {
      this.#createDrawOutlines(params);
      this.#addToDrawLayer();
    }
  }
  #createDrawOutlines({
    drawOutlines,
    drawId,
    drawingOptions
  }) {
    this.#drawOutlines = drawOutlines;
    this._drawingOptions ||= drawingOptions;
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`);
    }
    if (drawId >= 0) {
      this._drawId = drawId;
      this.parent.drawLayer.finalizeDraw(drawId, drawOutlines.defaultProperties);
    } else {
      this._drawId = this.#createDrawing(drawOutlines, this.parent);
    }
    this.#updateBbox(drawOutlines.box);
  }
  #createDrawing(drawOutlines, parent) {
    const {
      id
    } = parent.drawLayer.draw(DrawingEditor._mergeSVGProperties(this._drawingOptions.toSVGProperties(), drawOutlines.defaultSVGProperties), false, false);
    return id;
  }
  static _mergeSVGProperties(p1, p2) {
    const p1Keys = new Set(Object.keys(p1));
    for (const [key, value] of Object.entries(p2)) {
      if (p1Keys.has(key)) {
        Object.assign(p1[key], value);
      } else {
        p1[key] = value;
      }
    }
    return p1;
  }
  static getDefaultDrawingOptions(_options) {
    unreachable("Not implemented");
  }
  static get typesMap() {
    unreachable("Not implemented");
  }
  static get isDrawer() {
    return true;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static updateDefaultParams(type, value) {
    const propertyName = this.typesMap.get(type);
    if (propertyName) {
      this._defaultDrawingOptions.updateProperty(propertyName, value);
    }
    if (this._currentParent) {
      DrawingEditor.#currentDraw.updateProperty(propertyName, value);
      this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
    }
  }
  updateParams(type, value) {
    const propertyName = this.constructor.typesMap.get(type);
    if (propertyName) {
      this._updateProperty(type, propertyName, value);
    }
  }
  static get defaultPropertiesToUpdate() {
    const properties = [];
    const options = this._defaultDrawingOptions;
    for (const [type, name] of this.typesMap) {
      properties.push([type, options[name]]);
    }
    return properties;
  }
  get propertiesToUpdate() {
    const properties = [];
    const {
      _drawingOptions
    } = this;
    for (const [type, name] of this.constructor.typesMap) {
      properties.push([type, _drawingOptions[name]]);
    }
    return properties;
  }
  _updateProperty(type, name, value) {
    const options = this._drawingOptions;
    const savedValue = options[name];
    const setter = val => {
      options.updateProperty(name, val);
      const bbox = this.#drawOutlines.updateProperty(name, val);
      if (bbox) {
        this.#updateBbox(bbox);
      }
      this.parent?.drawLayer.updateProperties(this._drawId, options.toSVGProperties());
      if (type === this.colorType) {
        this.onUpdatedColor();
      }
    };
    this.addCommands({
      cmd: setter.bind(this, value),
      undo: setter.bind(this, savedValue),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: true,
      type,
      overwriteIfSameType: true,
      keepUndo: true
    });
  }
  _onResizing() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathResizingSVGProperties(this.#convertToDrawSpace()), {
      bbox: this.#rotateBox()
    }));
  }
  _onResized() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathResizedSVGProperties(this.#convertToDrawSpace()), {
      bbox: this.#rotateBox()
    }));
  }
  _onTranslating(_x, _y) {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      bbox: this.#rotateBox()
    });
  }
  _onTranslated() {
    this.parent?.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties(this.#drawOutlines.getPathTranslatedSVGProperties(this.#convertToDrawSpace(), this.parentDimensions), {
      bbox: this.#rotateBox()
    }));
  }
  _onStartDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: true
      }
    });
  }
  _onStopDragging() {
    this.parent?.drawLayer.updateProperties(this._drawId, {
      rootClass: {
        moving: false
      }
    });
  }
  commit() {
    super.commit();
    this.disableEditMode();
    this.disableEditing();
  }
  disableEditing() {
    super.disableEditing();
    this.div.classList.toggle("disabled", true);
  }
  enableEditing() {
    super.enableEditing();
    this.div.classList.toggle("disabled", false);
  }
  getBaseTranslation() {
    return [0, 0];
  }
  get isResizable() {
    return true;
  }
  onceAdded(focus) {
    if (!this.annotationElementId) {
      this.parent.addUndoableEditor(this);
    }
    this._isDraggable = true;
    if (this.#mustBeCommitted) {
      this.#mustBeCommitted = false;
      this.commit();
      this.parent.setSelected(this);
      if (focus && this.isOnScreen) {
        this.div.focus();
      }
    }
  }
  remove() {
    this.#cleanDrawLayer();
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    this.#addToDrawLayer();
    this.#updateBbox(this.#drawOutlines.box);
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  setParent(parent) {
    let mustBeSelected = false;
    if (this.parent && !parent) {
      this._uiManager.removeShouldRescale(this);
      this.#cleanDrawLayer();
    } else if (parent) {
      this._uiManager.addShouldRescale(this);
      this.#addToDrawLayer(parent);
      mustBeSelected = !this.parent && this.div?.classList.contains("selectedEditor");
    }
    super.setParent(parent);
    if (mustBeSelected) {
      this.select();
    }
  }
  #cleanDrawLayer() {
    if (this._drawId === null || !this.parent) {
      return;
    }
    this.parent.drawLayer.remove(this._drawId);
    this._drawId = null;
    this._drawingOptions.reset();
  }
  #addToDrawLayer(parent = this.parent) {
    if (this._drawId !== null && this.parent === parent) {
      return;
    }
    if (this._drawId !== null) {
      this.parent.drawLayer.updateParent(this._drawId, parent.drawLayer);
      return;
    }
    this._drawingOptions.updateAll();
    this._drawId = this.#createDrawing(this.#drawOutlines, parent);
  }
  #convertToParentSpace([x, y, width, height]) {
    const {
      parentDimensions: [pW, pH],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [y, 1 - x, width * (pH / pW), height * (pW / pH)];
      case 180:
        return [1 - x, 1 - y, width, height];
      case 270:
        return [1 - y, x, width * (pH / pW), height * (pW / pH)];
      default:
        return [x, y, width, height];
    }
  }
  #convertToDrawSpace() {
    const {
      x,
      y,
      width,
      height,
      parentDimensions: [pW, pH],
      rotation
    } = this;
    switch (rotation) {
      case 90:
        return [1 - y, x, width * (pW / pH), height * (pH / pW)];
      case 180:
        return [1 - x, 1 - y, width, height];
      case 270:
        return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
      default:
        return [x, y, width, height];
    }
  }
  #updateBbox(bbox) {
    [this.x, this.y, this.width, this.height] = this.#convertToParentSpace(bbox);
    if (this.div) {
      this.fixAndSetPosition();
      this.setDims();
    }
    this._onResized();
  }
  #rotateBox() {
    const {
      x,
      y,
      width,
      height,
      rotation,
      parentRotation,
      parentDimensions: [pW, pH]
    } = this;
    switch ((rotation * 4 + parentRotation) / 90) {
      case 1:
        return [1 - y - height, x, height, width];
      case 2:
        return [1 - x - width, 1 - y - height, width, height];
      case 3:
        return [y, 1 - x - width, height, width];
      case 4:
        return [x, y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
      case 5:
        return [1 - y, x, width * (pW / pH), height * (pH / pW)];
      case 6:
        return [1 - x - height * (pH / pW), 1 - y, height * (pH / pW), width * (pW / pH)];
      case 7:
        return [y - width * (pW / pH), 1 - x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
      case 8:
        return [x - width, y - height, width, height];
      case 9:
        return [1 - y, x - width, height, width];
      case 10:
        return [1 - x, 1 - y, width, height];
      case 11:
        return [y - height, 1 - x, height, width];
      case 12:
        return [x - height * (pH / pW), y, height * (pH / pW), width * (pW / pH)];
      case 13:
        return [1 - y - width * (pW / pH), x - height * (pH / pW), width * (pW / pH), height * (pH / pW)];
      case 14:
        return [1 - x, 1 - y - width * (pW / pH), height * (pH / pW), width * (pW / pH)];
      case 15:
        return [y, 1 - x, width * (pW / pH), height * (pH / pW)];
      default:
        return [x, y, width, height];
    }
  }
  rotate() {
    if (!this.parent) {
      return;
    }
    this.parent.drawLayer.updateProperties(this._drawId, DrawingEditor._mergeSVGProperties({
      bbox: this.#rotateBox()
    }, this.#drawOutlines.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    this.#updateBbox(this.#drawOutlines.updateParentDimensions(this.parentDimensions, this.parent.scale));
  }
  static onScaleChangingWhenDrawing() {}
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy) {
      baseX = this.x;
      baseY = this.y;
    }
    const div = super.render();
    div.classList.add("draw");
    const drawDiv = document.createElement("div");
    div.append(drawDiv);
    drawDiv.setAttribute("aria-hidden", "true");
    drawDiv.className = "internal";
    this.setDims();
    this._uiManager.addShouldRescale(this);
    this.disableEditing();
    if (this._isCopy) {
      this._moveAfterPaste(baseX, baseY);
    }
    return div;
  }
  static createDrawerInstance(_x, _y, _parentWidth, _parentHeight, _rotation) {
    unreachable("Not implemented");
  }
  static startDrawing(parent, uiManager, _isLTR, event) {
    const {
      target,
      offsetX: x,
      offsetY: y,
      pointerId,
      pointerType
    } = event;
    if (CurrentPointers.isInitializedAndDifferentPointerType(pointerType)) {
      return;
    }
    const {
      viewport: {
        rotation
      }
    } = parent;
    const {
      width: parentWidth,
      height: parentHeight
    } = target.getBoundingClientRect();
    const ac = DrawingEditor.#currentDrawingAC = new AbortController();
    const signal = parent.combinedSignal(ac);
    CurrentPointers.setPointer(pointerType, pointerId);
    window.addEventListener("pointerup", e => {
      if (CurrentPointers.isSamePointerIdOrRemove(e.pointerId)) {
        this._endDraw(e);
      }
    }, {
      signal
    });
    window.addEventListener("pointercancel", e => {
      if (CurrentPointers.isSamePointerIdOrRemove(e.pointerId)) {
        this._currentParent.endDrawingSession();
      }
    }, {
      signal
    });
    window.addEventListener("pointerdown", e => {
      if (!CurrentPointers.isSamePointerType(e.pointerType)) {
        return;
      }
      CurrentPointers.initializeAndAddPointerId(e.pointerId);
      if (DrawingEditor.#currentDraw.isCancellable()) {
        DrawingEditor.#currentDraw.removeLastElement();
        if (DrawingEditor.#currentDraw.isEmpty()) {
          this._currentParent.endDrawingSession(true);
        } else {
          this._endDraw(null);
        }
      }
    }, {
      capture: true,
      passive: false,
      signal
    });
    window.addEventListener("contextmenu", noContextMenu, {
      signal
    });
    target.addEventListener("pointermove", this._drawMove.bind(this), {
      signal
    });
    target.addEventListener("touchmove", e => {
      if (CurrentPointers.isSameTimeStamp(e.timeStamp)) {
        stopEvent(e);
      }
    }, {
      signal
    });
    parent.toggleDrawing();
    uiManager._editorUndoBar?.hide();
    if (DrawingEditor.#currentDraw) {
      parent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.startNew(x, y, parentWidth, parentHeight, rotation));
      return;
    }
    uiManager.updateUIForDefaultProperties(this);
    DrawingEditor.#currentDraw = this.createDrawerInstance(x, y, parentWidth, parentHeight, rotation);
    DrawingEditor.#currentDrawingOptions = this.getDefaultDrawingOptions();
    this._currentParent = parent;
    ({
      id: this._currentDrawId
    } = parent.drawLayer.draw(this._mergeSVGProperties(DrawingEditor.#currentDrawingOptions.toSVGProperties(), DrawingEditor.#currentDraw.defaultSVGProperties), true, false));
  }
  static _drawMove(event) {
    CurrentPointers.isSameTimeStamp(event.timeStamp);
    if (!DrawingEditor.#currentDraw) {
      return;
    }
    const {
      offsetX,
      offsetY,
      pointerId
    } = event;
    if (!CurrentPointers.isSamePointerId(pointerId)) {
      return;
    }
    if (CurrentPointers.isUsingMultiplePointers()) {
      this._endDraw(event);
      return;
    }
    this._currentParent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.add(offsetX, offsetY));
    CurrentPointers.setTimeStamp(event.timeStamp);
    stopEvent(event);
  }
  static _cleanup(all) {
    if (all) {
      this._currentDrawId = -1;
      this._currentParent = null;
      DrawingEditor.#currentDraw = null;
      DrawingEditor.#currentDrawingOptions = null;
      CurrentPointers.clearTimeStamp();
    }
    if (DrawingEditor.#currentDrawingAC) {
      DrawingEditor.#currentDrawingAC.abort();
      DrawingEditor.#currentDrawingAC = null;
      CurrentPointers.clearPointerIds();
    }
  }
  static _endDraw(event) {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    parent.toggleDrawing(true);
    this._cleanup(false);
    if (event?.target === parent.div) {
      parent.drawLayer.updateProperties(this._currentDrawId, DrawingEditor.#currentDraw.end(event.offsetX, event.offsetY));
    }
    if (this.supportMultipleDrawings) {
      const draw = DrawingEditor.#currentDraw;
      const drawId = this._currentDrawId;
      const lastElement = draw.getLastElement();
      parent.addCommands({
        cmd: () => {
          parent.drawLayer.updateProperties(drawId, draw.setLastElement(lastElement));
        },
        undo: () => {
          parent.drawLayer.updateProperties(drawId, draw.removeLastElement());
        },
        mustExec: false,
        type: AnnotationEditorParamsType.DRAW_STEP
      });
      return;
    }
    this.endDrawing(false);
  }
  static endDrawing(isAborted) {
    const parent = this._currentParent;
    if (!parent) {
      return null;
    }
    parent.toggleDrawing(true);
    parent.cleanUndoStack(AnnotationEditorParamsType.DRAW_STEP);
    if (!DrawingEditor.#currentDraw.isEmpty()) {
      const {
        pageDimensions: [pageWidth, pageHeight],
        scale
      } = parent;
      const editor = parent.createAndAddNewEditor({
        offsetX: 0,
        offsetY: 0
      }, false, {
        drawId: this._currentDrawId,
        drawOutlines: DrawingEditor.#currentDraw.getOutlines(pageWidth * scale, pageHeight * scale, scale, this._INNER_MARGIN),
        drawingOptions: DrawingEditor.#currentDrawingOptions,
        mustBeCommitted: !isAborted
      });
      this._cleanup(true);
      return editor;
    }
    parent.drawLayer.remove(this._currentDrawId);
    this._cleanup(true);
    return null;
  }
  createDrawingOptions(_data) {}
  static deserializeDraw(_pageX, _pageY, _pageWidth, _pageHeight, _innerWidth, _data) {
    unreachable("Not implemented");
  }
  static async deserialize(data, parent, uiManager) {
    const {
      rawDims: {
        pageWidth,
        pageHeight,
        pageX,
        pageY
      }
    } = parent.viewport;
    const drawOutlines = this.deserializeDraw(pageX, pageY, pageWidth, pageHeight, this._INNER_MARGIN, data);
    const editor = await super.deserialize(data, parent, uiManager);
    editor.createDrawingOptions(data);
    editor.#createDrawOutlines({
      drawOutlines
    });
    editor.#addToDrawLayer();
    editor.onScaleChanging();
    editor.rotate();
    return editor;
  }
  serializeDraw(isForCopying) {
    const [pageX, pageY] = this.pageTranslation;
    const [pageWidth, pageHeight] = this.pageDimensions;
    return this.#drawOutlines.serialize([pageX, pageY, pageWidth, pageHeight], isForCopying);
  }
  renderAnnotationElement(annotation) {
    annotation.updateEdited({
      rect: this.getPDFRect()
    });
    return null;
  }
  static canCreateNewEmptyEditor() {
    return false;
  }
}

;// ./src/display/editor/drawers/inkdraw.js


class InkDrawOutliner {
  #last = new Float64Array(6);
  #line;
  #lines;
  #rotation;
  #thickness;
  #points;
  #lastSVGPath = "";
  #lastIndex = 0;
  #outlines = new InkDrawOutline();
  #parentWidth;
  #parentHeight;
  constructor(x, y, parentWidth, parentHeight, rotation, thickness) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#rotation = rotation;
    this.#thickness = thickness;
    [x, y] = this.#normalizePoint(x, y);
    const line = this.#line = [NaN, NaN, NaN, NaN, x, y];
    this.#points = [x, y];
    this.#lines = [{
      line,
      points: this.#points
    }];
    this.#last.set(line, 0);
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      this.#thickness = value;
    }
  }
  #normalizePoint(x, y) {
    return Outline._normalizePoint(x, y, this.#parentWidth, this.#parentHeight, this.#rotation);
  }
  isEmpty() {
    return !this.#lines || this.#lines.length === 0;
  }
  isCancellable() {
    return this.#points.length <= 10;
  }
  add(x, y) {
    [x, y] = this.#normalizePoint(x, y);
    const [x1, y1, x2, y2] = this.#last.subarray(2, 6);
    const diffX = x - x2;
    const diffY = y - y2;
    const d = Math.hypot(this.#parentWidth * diffX, this.#parentHeight * diffY);
    if (d <= 2) {
      return null;
    }
    this.#points.push(x, y);
    if (isNaN(x1)) {
      this.#last.set([x2, y2, x, y], 2);
      this.#line.push(NaN, NaN, NaN, NaN, x, y);
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    if (isNaN(this.#last[0])) {
      this.#line.splice(6, 6);
    }
    this.#last.set([x1, y1, x2, y2, x, y], 0);
    this.#line.push(...Outline.createBezierPoints(x1, y1, x2, y2, x, y));
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  end(x, y) {
    const change = this.add(x, y);
    if (change) {
      return change;
    }
    if (this.#points.length === 2) {
      return {
        path: {
          d: this.toSVGPath()
        }
      };
    }
    return null;
  }
  startNew(x, y, parentWidth, parentHeight, rotation) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#rotation = rotation;
    [x, y] = this.#normalizePoint(x, y);
    const line = this.#line = [NaN, NaN, NaN, NaN, x, y];
    this.#points = [x, y];
    const last = this.#lines.at(-1);
    if (last) {
      last.line = new Float32Array(last.line);
      last.points = new Float32Array(last.points);
    }
    this.#lines.push({
      line,
      points: this.#points
    });
    this.#last.set(line, 0);
    this.#lastIndex = 0;
    this.toSVGPath();
    return null;
  }
  getLastElement() {
    return this.#lines.at(-1);
  }
  setLastElement(element) {
    if (!this.#lines) {
      return this.#outlines.setLastElement(element);
    }
    this.#lines.push(element);
    this.#line = element.line;
    this.#points = element.points;
    this.#lastIndex = 0;
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    if (!this.#lines) {
      return this.#outlines.removeLastElement();
    }
    this.#lines.pop();
    this.#lastSVGPath = "";
    for (let i = 0, ii = this.#lines.length; i < ii; i++) {
      const {
        line,
        points
      } = this.#lines[i];
      this.#line = line;
      this.#points = points;
      this.#lastIndex = 0;
      this.toSVGPath();
    }
    return {
      path: {
        d: this.#lastSVGPath
      }
    };
  }
  toSVGPath() {
    const firstX = Outline.svgRound(this.#line[4]);
    const firstY = Outline.svgRound(this.#line[5]);
    if (this.#points.length === 2) {
      this.#lastSVGPath = `${this.#lastSVGPath} M ${firstX} ${firstY} Z`;
      return this.#lastSVGPath;
    }
    if (this.#points.length <= 6) {
      const i = this.#lastSVGPath.lastIndexOf("M");
      this.#lastSVGPath = `${this.#lastSVGPath.slice(0, i)} M ${firstX} ${firstY}`;
      this.#lastIndex = 6;
    }
    if (this.#points.length === 4) {
      const secondX = Outline.svgRound(this.#line[10]);
      const secondY = Outline.svgRound(this.#line[11]);
      this.#lastSVGPath = `${this.#lastSVGPath} L ${secondX} ${secondY}`;
      this.#lastIndex = 12;
      return this.#lastSVGPath;
    }
    const buffer = [];
    if (this.#lastIndex === 0) {
      buffer.push(`M ${firstX} ${firstY}`);
      this.#lastIndex = 6;
    }
    for (let i = this.#lastIndex, ii = this.#line.length; i < ii; i += 6) {
      const [c1x, c1y, c2x, c2y, x, y] = this.#line.slice(i, i + 6).map(Outline.svgRound);
      buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
    }
    this.#lastSVGPath += buffer.join(" ");
    this.#lastIndex = this.#line.length;
    return this.#lastSVGPath;
  }
  getOutlines(parentWidth, parentHeight, scale, innerMargin) {
    const last = this.#lines.at(-1);
    last.line = new Float32Array(last.line);
    last.points = new Float32Array(last.points);
    this.#outlines.build(this.#lines, parentWidth, parentHeight, scale, this.#rotation, this.#thickness, innerMargin);
    this.#last = null;
    this.#line = null;
    this.#lines = null;
    this.#lastSVGPath = null;
    return this.#outlines;
  }
  get defaultSVGProperties() {
    return {
      root: {
        viewBox: "0 0 10000 10000"
      },
      rootClass: {
        draw: true
      },
      bbox: [0, 0, 1, 1]
    };
  }
}
class InkDrawOutline extends Outline {
  #bbox;
  #currentRotation = 0;
  #innerMargin;
  #lines;
  #parentWidth;
  #parentHeight;
  #parentScale;
  #rotation;
  #thickness;
  build(lines, parentWidth, parentHeight, parentScale, rotation, thickness, innerMargin) {
    this.#parentWidth = parentWidth;
    this.#parentHeight = parentHeight;
    this.#parentScale = parentScale;
    this.#rotation = rotation;
    this.#thickness = thickness;
    this.#innerMargin = innerMargin ?? 0;
    this.#lines = lines;
    this.#computeBbox();
  }
  get thickness() {
    return this.#thickness;
  }
  setLastElement(element) {
    this.#lines.push(element);
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  removeLastElement() {
    this.#lines.pop();
    return {
      path: {
        d: this.toSVGPath()
      }
    };
  }
  toSVGPath() {
    const buffer = [];
    for (const {
      line
    } of this.#lines) {
      buffer.push(`M${Outline.svgRound(line[4])} ${Outline.svgRound(line[5])}`);
      if (line.length === 6) {
        buffer.push("Z");
        continue;
      }
      if (line.length === 12 && isNaN(line[6])) {
        buffer.push(`L${Outline.svgRound(line[10])} ${Outline.svgRound(line[11])}`);
        continue;
      }
      for (let i = 6, ii = line.length; i < ii; i += 6) {
        const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6).map(Outline.svgRound);
        buffer.push(`C${c1x} ${c1y} ${c2x} ${c2y} ${x} ${y}`);
      }
    }
    return buffer.join("");
  }
  serialize([pageX, pageY, pageWidth, pageHeight], isForCopying) {
    const serializedLines = [];
    const serializedPoints = [];
    const [x, y, width, height] = this.#getBBoxWithNoMargin();
    let tx, ty, sx, sy, x1, y1, x2, y2, rescaleFn;
    switch (this.#rotation) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = pageX;
        ty = pageY + pageHeight;
        sx = pageWidth;
        sy = -pageHeight;
        x1 = pageX + x * pageWidth;
        y1 = pageY + (1 - y - height) * pageHeight;
        x2 = pageX + (x + width) * pageWidth;
        y2 = pageY + (1 - y) * pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX;
        ty = pageY;
        sx = pageWidth;
        sy = pageHeight;
        x1 = pageX + y * pageWidth;
        y1 = pageY + x * pageHeight;
        x2 = pageX + (y + height) * pageWidth;
        y2 = pageY + (x + width) * pageHeight;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX + pageWidth;
        ty = pageY;
        sx = -pageWidth;
        sy = pageHeight;
        x1 = pageX + (1 - x - width) * pageWidth;
        y1 = pageY + y * pageHeight;
        x2 = pageX + (1 - x) * pageWidth;
        y2 = pageY + (y + height) * pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageX + pageWidth;
        ty = pageY + pageHeight;
        sx = -pageWidth;
        sy = -pageHeight;
        x1 = pageX + (1 - y - height) * pageWidth;
        y1 = pageY + (1 - x - width) * pageHeight;
        x2 = pageX + (1 - y) * pageWidth;
        y2 = pageY + (1 - x) * pageHeight;
        break;
    }
    for (const {
      line,
      points
    } of this.#lines) {
      serializedLines.push(rescaleFn(line, tx, ty, sx, sy, isForCopying ? new Array(line.length) : null));
      serializedPoints.push(rescaleFn(points, tx, ty, sx, sy, isForCopying ? new Array(points.length) : null));
    }
    return {
      lines: serializedLines,
      points: serializedPoints,
      rect: [x1, y1, x2, y2]
    };
  }
  static deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, {
    paths: {
      lines,
      points
    },
    rotation,
    thickness
  }) {
    const newLines = [];
    let tx, ty, sx, sy, rescaleFn;
    switch (rotation) {
      case 0:
        rescaleFn = Outline._rescale;
        tx = -pageX / pageWidth;
        ty = pageY / pageHeight + 1;
        sx = 1 / pageWidth;
        sy = -1 / pageHeight;
        break;
      case 90:
        rescaleFn = Outline._rescaleAndSwap;
        tx = -pageY / pageHeight;
        ty = -pageX / pageWidth;
        sx = 1 / pageHeight;
        sy = 1 / pageWidth;
        break;
      case 180:
        rescaleFn = Outline._rescale;
        tx = pageX / pageWidth + 1;
        ty = -pageY / pageHeight;
        sx = -1 / pageWidth;
        sy = 1 / pageHeight;
        break;
      case 270:
        rescaleFn = Outline._rescaleAndSwap;
        tx = pageY / pageHeight + 1;
        ty = pageX / pageWidth + 1;
        sx = -1 / pageHeight;
        sy = -1 / pageWidth;
        break;
    }
    if (!lines) {
      lines = [];
      for (const point of points) {
        const len = point.length;
        if (len === 2) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1]]));
          continue;
        }
        if (len === 4) {
          lines.push(new Float32Array([NaN, NaN, NaN, NaN, point[0], point[1], NaN, NaN, NaN, NaN, point[2], point[3]]));
          continue;
        }
        const line = new Float32Array(3 * (len - 2));
        lines.push(line);
        let [x1, y1, x2, y2] = point.subarray(0, 4);
        line.set([NaN, NaN, NaN, NaN, x1, y1], 0);
        for (let i = 4; i < len; i += 2) {
          const x = point[i];
          const y = point[i + 1];
          line.set(Outline.createBezierPoints(x1, y1, x2, y2, x, y), (i - 2) * 3);
          [x1, y1, x2, y2] = [x2, y2, x, y];
        }
      }
    }
    for (let i = 0, ii = lines.length; i < ii; i++) {
      newLines.push({
        line: rescaleFn(lines[i].map(x => x ?? NaN), tx, ty, sx, sy),
        points: rescaleFn(points[i].map(x => x ?? NaN), tx, ty, sx, sy)
      });
    }
    const outlines = new this.prototype.constructor();
    outlines.build(newLines, pageWidth, pageHeight, 1, rotation, thickness, innerMargin);
    return outlines;
  }
  #getMarginComponents(thickness = this.#thickness) {
    const margin = this.#innerMargin + thickness / 2 * this.#parentScale;
    return this.#rotation % 180 === 0 ? [margin / this.#parentWidth, margin / this.#parentHeight] : [margin / this.#parentHeight, margin / this.#parentWidth];
  }
  #getBBoxWithNoMargin() {
    const [x, y, width, height] = this.#bbox;
    const [marginX, marginY] = this.#getMarginComponents(0);
    return [x + marginX, y + marginY, width - 2 * marginX, height - 2 * marginY];
  }
  #computeBbox() {
    const bbox = this.#bbox = new Float32Array([Infinity, Infinity, -Infinity, -Infinity]);
    for (const {
      line
    } of this.#lines) {
      if (line.length <= 12) {
        for (let i = 4, ii = line.length; i < ii; i += 6) {
          Util.pointBoundingBox(line[i], line[i + 1], bbox);
        }
        continue;
      }
      let lastX = line[4],
        lastY = line[5];
      for (let i = 6, ii = line.length; i < ii; i += 6) {
        const [c1x, c1y, c2x, c2y, x, y] = line.subarray(i, i + 6);
        Util.bezierBoundingBox(lastX, lastY, c1x, c1y, c2x, c2y, x, y, bbox);
        lastX = x;
        lastY = y;
      }
    }
    const [marginX, marginY] = this.#getMarginComponents();
    bbox[0] = MathClamp(bbox[0] - marginX, 0, 1);
    bbox[1] = MathClamp(bbox[1] - marginY, 0, 1);
    bbox[2] = MathClamp(bbox[2] + marginX, 0, 1);
    bbox[3] = MathClamp(bbox[3] + marginY, 0, 1);
    bbox[2] -= bbox[0];
    bbox[3] -= bbox[1];
  }
  get box() {
    return this.#bbox;
  }
  updateProperty(name, value) {
    if (name === "stroke-width") {
      return this.#updateThickness(value);
    }
    return null;
  }
  #updateThickness(thickness) {
    const [oldMarginX, oldMarginY] = this.#getMarginComponents();
    this.#thickness = thickness;
    const [newMarginX, newMarginY] = this.#getMarginComponents();
    const [diffMarginX, diffMarginY] = [newMarginX - oldMarginX, newMarginY - oldMarginY];
    const bbox = this.#bbox;
    bbox[0] -= diffMarginX;
    bbox[1] -= diffMarginY;
    bbox[2] += 2 * diffMarginX;
    bbox[3] += 2 * diffMarginY;
    return bbox;
  }
  updateParentDimensions([width, height], scale) {
    const [oldMarginX, oldMarginY] = this.#getMarginComponents();
    this.#parentWidth = width;
    this.#parentHeight = height;
    this.#parentScale = scale;
    const [newMarginX, newMarginY] = this.#getMarginComponents();
    const diffMarginX = newMarginX - oldMarginX;
    const diffMarginY = newMarginY - oldMarginY;
    const bbox = this.#bbox;
    bbox[0] -= diffMarginX;
    bbox[1] -= diffMarginY;
    bbox[2] += 2 * diffMarginX;
    bbox[3] += 2 * diffMarginY;
    return bbox;
  }
  updateRotation(rotation) {
    this.#currentRotation = rotation;
    return {
      path: {
        transform: this.rotationTransform
      }
    };
  }
  get viewBox() {
    return this.#bbox.map(Outline.svgRound).join(" ");
  }
  get defaultProperties() {
    const [x, y] = this.#bbox;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`
      }
    };
  }
  get rotationTransform() {
    const [,, width, height] = this.#bbox;
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0,
      f = 0;
    switch (this.#currentRotation) {
      case 90:
        b = height / width;
        c = -width / height;
        e = width;
        break;
      case 180:
        a = -1;
        d = -1;
        e = width;
        f = height;
        break;
      case 270:
        b = -height / width;
        c = width / height;
        f = height;
        break;
      default:
        return "";
    }
    return `matrix(${a} ${b} ${c} ${d} ${Outline.svgRound(e)} ${Outline.svgRound(f)})`;
  }
  getPathResizingSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = this.#getMarginComponents();
    const [x, y, width, height] = this.#bbox;
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx = newX + newWidth / 2 - (x + width / 2);
      const ty = newY + newHeight / 2 - (y + height / 2);
      return {
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: `${this.rotationTransform} translate(${tx} ${ty})`
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const s2x = width / newWidth;
    const s2y = height / newHeight;
    return {
      path: {
        "transform-origin": `${Outline.svgRound(x)} ${Outline.svgRound(y)}`,
        transform: `${this.rotationTransform} scale(${s2x} ${s2y}) ` + `translate(${Outline.svgRound(marginX)} ${Outline.svgRound(marginY)}) scale(${s1x} ${s1y}) ` + `translate(${Outline.svgRound(-marginX)} ${Outline.svgRound(-marginY)})`
      }
    };
  }
  getPathResizedSVGProperties([newX, newY, newWidth, newHeight]) {
    const [marginX, marginY] = this.#getMarginComponents();
    const bbox = this.#bbox;
    const [x, y, width, height] = bbox;
    bbox[0] = newX;
    bbox[1] = newY;
    bbox[2] = newWidth;
    bbox[3] = newHeight;
    if (Math.abs(width - marginX) <= Outline.PRECISION || Math.abs(height - marginY) <= Outline.PRECISION) {
      const tx = newX + newWidth / 2 - (x + width / 2);
      const ty = newY + newHeight / 2 - (y + height / 2);
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._translate(line, tx, ty, line);
        Outline._translate(points, tx, ty, points);
      }
      return {
        root: {
          viewBox: this.viewBox
        },
        path: {
          "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath()
        }
      };
    }
    const s1x = (newWidth - 2 * marginX) / (width - 2 * marginX);
    const s1y = (newHeight - 2 * marginY) / (height - 2 * marginY);
    const tx = -s1x * (x + marginX) + newX + marginX;
    const ty = -s1y * (y + marginY) + newY + marginY;
    if (s1x !== 1 || s1y !== 1 || tx !== 0 || ty !== 0) {
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._rescale(line, tx, ty, s1x, s1y, line);
        Outline._rescale(points, tx, ty, s1x, s1y, points);
      }
    }
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`,
        transform: this.rotationTransform || null,
        d: this.toSVGPath()
      }
    };
  }
  getPathTranslatedSVGProperties([newX, newY], parentDimensions) {
    const [newParentWidth, newParentHeight] = parentDimensions;
    const bbox = this.#bbox;
    const tx = newX - bbox[0];
    const ty = newY - bbox[1];
    if (this.#parentWidth === newParentWidth && this.#parentHeight === newParentHeight) {
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._translate(line, tx, ty, line);
        Outline._translate(points, tx, ty, points);
      }
    } else {
      const sx = this.#parentWidth / newParentWidth;
      const sy = this.#parentHeight / newParentHeight;
      this.#parentWidth = newParentWidth;
      this.#parentHeight = newParentHeight;
      for (const {
        line,
        points
      } of this.#lines) {
        Outline._rescale(line, tx, ty, sx, sy, line);
        Outline._rescale(points, tx, ty, sx, sy, points);
      }
      bbox[2] *= sx;
      bbox[3] *= sy;
    }
    bbox[0] = newX;
    bbox[1] = newY;
    return {
      root: {
        viewBox: this.viewBox
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(newX)} ${Outline.svgRound(newY)}`
      }
    };
  }
  get defaultSVGProperties() {
    const bbox = this.#bbox;
    return {
      root: {
        viewBox: this.viewBox
      },
      rootClass: {
        draw: true
      },
      path: {
        d: this.toSVGPath(),
        "transform-origin": `${Outline.svgRound(bbox[0])} ${Outline.svgRound(bbox[1])}`,
        transform: this.rotationTransform || null
      },
      bbox
    };
  }
}

;// ./src/display/editor/ink.js






class InkDrawingOptions extends DrawingOptions {
  constructor(viewerParameters) {
    super();
    this._viewParameters = viewerParameters;
    super.updateProperties({
      fill: "none",
      stroke: AnnotationEditor._defaultLineColor,
      "stroke-opacity": 1,
      "stroke-width": 1,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-miterlimit": 10
    });
  }
  updateSVGProperty(name, value) {
    if (name === "stroke-width") {
      value ??= this["stroke-width"];
      value *= this._viewParameters.realScale;
    }
    super.updateSVGProperty(name, value);
  }
  clone() {
    const clone = new InkDrawingOptions(this._viewParameters);
    clone.updateAll(this);
    return clone;
  }
}
class InkEditor extends DrawingEditor {
  static _type = "ink";
  static _editorType = AnnotationEditorType.INK;
  static _defaultDrawingOptions = null;
  constructor(params) {
    super({
      ...params,
      name: "inkEditor"
    });
    this._willKeepAspectRatio = true;
    this.defaultL10nId = "pdfjs-editor-ink-editor";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    this._defaultDrawingOptions = new InkDrawingOptions(uiManager.viewParameters);
  }
  static getDefaultDrawingOptions(options) {
    const clone = this._defaultDrawingOptions.clone();
    clone.updateProperties(options);
    return clone;
  }
  static get supportMultipleDrawings() {
    return true;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map([[AnnotationEditorParamsType.INK_THICKNESS, "stroke-width"], [AnnotationEditorParamsType.INK_COLOR, "stroke"], [AnnotationEditorParamsType.INK_OPACITY, "stroke-opacity"]]));
  }
  static createDrawerInstance(x, y, parentWidth, parentHeight, rotation) {
    return new InkDrawOutliner(x, y, parentWidth, parentHeight, rotation, this._defaultDrawingOptions["stroke-width"]);
  }
  static deserializeDraw(pageX, pageY, pageWidth, pageHeight, innerMargin, data) {
    return InkDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    if (data instanceof InkAnnotationElement) {
      const {
        data: {
          inkLists,
          rect,
          rotation,
          id,
          color,
          opacity,
          borderStyle: {
            rawWidth: thickness
          },
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        parent: {
          page: {
            pageNumber
          }
        }
      } = data;
      initialData = data = {
        annotationType: AnnotationEditorType.INK,
        color: Array.from(color),
        thickness,
        opacity,
        paths: {
          points: inkLists
        },
        boxes: null,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    editor._initialData = initialData;
    if (data.comment) {
      editor.setCommentData(data);
    }
    return editor;
  }
  get toolbarButtons() {
    this._colorPicker ||= new BasicColorPicker(this);
    return [["colorPicker", this._colorPicker]];
  }
  get colorType() {
    return AnnotationEditorParamsType.INK_COLOR;
  }
  get color() {
    return this._drawingOptions.stroke;
  }
  get opacity() {
    return this._drawingOptions["stroke-opacity"];
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    super.onScaleChanging();
    const {
      _drawId,
      _drawingOptions,
      parent
    } = this;
    _drawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(_drawId, _drawingOptions.toSVGProperties());
  }
  static onScaleChangingWhenDrawing() {
    const parent = this._currentParent;
    if (!parent) {
      return;
    }
    super.onScaleChangingWhenDrawing();
    this._defaultDrawingOptions.updateSVGProperty("stroke-width");
    parent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties());
  }
  createDrawingOptions({
    color,
    thickness,
    opacity
  }) {
    this._drawingOptions = InkEditor.getDefaultDrawingOptions({
      stroke: Util.makeHexColor(...color),
      "stroke-width": thickness,
      "stroke-opacity": opacity
    });
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const {
      lines,
      points
    } = this.serializeDraw(isForCopying);
    const {
      _drawingOptions: {
        stroke,
        "stroke-opacity": opacity,
        "stroke-width": thickness
      }
    } = this;
    const serialized = Object.assign(super.serialize(isForCopying), {
      color: AnnotationEditor._colorManager.convert(stroke),
      opacity,
      thickness,
      paths: {
        lines,
        points
      }
    });
    this.addComment(serialized);
    if (isForCopying) {
      serialized.isCopy = true;
      return serialized;
    }
    if (this.annotationElementId && !this.#hasElementChanged(serialized)) {
      return null;
    }
    serialized.id = this.annotationElementId;
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      color,
      thickness,
      opacity,
      pageIndex
    } = this._initialData;
    return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || serialized.color.some((c, i) => c !== color[i]) || serialized.thickness !== thickness || serialized.opacity !== opacity || serialized.pageIndex !== pageIndex;
  }
  renderAnnotationElement(annotation) {
    if (this.deleted) {
      annotation.hide();
      return null;
    }
    const {
      points,
      rect
    } = this.serializeDraw(false);
    annotation.updateEdited({
      rect,
      thickness: this._drawingOptions["stroke-width"],
      points,
      popup: this.comment
    });
    return null;
  }
}

;// ./src/display/editor/drawers/contour.js

class ContourDrawOutline extends InkDrawOutline {
  toSVGPath() {
    let path = super.toSVGPath();
    if (!path.endsWith("Z")) {
      path += "Z";
    }
    return path;
  }
}

;// ./src/display/editor/drawers/signaturedraw.js




const BASE_HEADER_LENGTH = 8;
const POINTS_PROPERTIES_NUMBER = 3;
class SignatureExtractor {
  static #PARAMETERS = {
    maxDim: 512,
    sigmaSFactor: 0.02,
    sigmaR: 25,
    kernelSize: 16
  };
  static #neighborIndexToId(i0, j0, i, j) {
    i -= i0;
    j -= j0;
    if (i === 0) {
      return j > 0 ? 0 : 4;
    }
    if (i === 1) {
      return j + 6;
    }
    return 2 - j;
  }
  static #neighborIdToIndex = new Int32Array([0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1]);
  static #clockwiseNonZero(buf, width, i0, j0, i, j, offset) {
    const id = this.#neighborIndexToId(i0, j0, i, j);
    for (let k = 0; k < 8; k++) {
      const kk = (-k + id - offset + 16) % 8;
      const shiftI = this.#neighborIdToIndex[2 * kk];
      const shiftJ = this.#neighborIdToIndex[2 * kk + 1];
      if (buf[(i0 + shiftI) * width + (j0 + shiftJ)] !== 0) {
        return kk;
      }
    }
    return -1;
  }
  static #counterClockwiseNonZero(buf, width, i0, j0, i, j, offset) {
    const id = this.#neighborIndexToId(i0, j0, i, j);
    for (let k = 0; k < 8; k++) {
      const kk = (k + id + offset + 16) % 8;
      const shiftI = this.#neighborIdToIndex[2 * kk];
      const shiftJ = this.#neighborIdToIndex[2 * kk + 1];
      if (buf[(i0 + shiftI) * width + (j0 + shiftJ)] !== 0) {
        return kk;
      }
    }
    return -1;
  }
  static #findContours(buf, width, height, threshold) {
    const N = buf.length;
    const types = new Int32Array(N);
    for (let i = 0; i < N; i++) {
      types[i] = buf[i] <= threshold ? 1 : 0;
    }
    for (let i = 1; i < height - 1; i++) {
      types[i * width] = types[i * width + width - 1] = 0;
    }
    for (let i = 0; i < width; i++) {
      types[i] = types[width * height - 1 - i] = 0;
    }
    let nbd = 1;
    let lnbd;
    const contours = [];
    for (let i = 1; i < height - 1; i++) {
      lnbd = 1;
      for (let j = 1; j < width - 1; j++) {
        const ij = i * width + j;
        const pix = types[ij];
        if (pix === 0) {
          continue;
        }
        let i2 = i;
        let j2 = j;
        if (pix === 1 && types[ij - 1] === 0) {
          nbd += 1;
          j2 -= 1;
        } else if (pix >= 1 && types[ij + 1] === 0) {
          nbd += 1;
          j2 += 1;
          if (pix > 1) {
            lnbd = pix;
          }
        } else {
          if (pix !== 1) {
            lnbd = Math.abs(pix);
          }
          continue;
        }
        const points = [j, i];
        const isHole = j2 === j + 1;
        const contour = {
          isHole,
          points,
          id: nbd,
          parent: 0
        };
        contours.push(contour);
        let contour0;
        for (const c of contours) {
          if (c.id === lnbd) {
            contour0 = c;
            break;
          }
        }
        if (!contour0) {
          contour.parent = isHole ? lnbd : 0;
        } else if (contour0.isHole) {
          contour.parent = isHole ? contour0.parent : lnbd;
        } else {
          contour.parent = isHole ? lnbd : contour0.parent;
        }
        const k = this.#clockwiseNonZero(types, width, i, j, i2, j2, 0);
        if (k === -1) {
          types[ij] = -nbd;
          if (types[ij] !== 1) {
            lnbd = Math.abs(types[ij]);
          }
          continue;
        }
        let shiftI = this.#neighborIdToIndex[2 * k];
        let shiftJ = this.#neighborIdToIndex[2 * k + 1];
        const i1 = i + shiftI;
        const j1 = j + shiftJ;
        i2 = i1;
        j2 = j1;
        let i3 = i;
        let j3 = j;
        while (true) {
          const kk = this.#counterClockwiseNonZero(types, width, i3, j3, i2, j2, 1);
          shiftI = this.#neighborIdToIndex[2 * kk];
          shiftJ = this.#neighborIdToIndex[2 * kk + 1];
          const i4 = i3 + shiftI;
          const j4 = j3 + shiftJ;
          points.push(j4, i4);
          const ij3 = i3 * width + j3;
          if (types[ij3 + 1] === 0) {
            types[ij3] = -nbd;
          } else if (types[ij3] === 1) {
            types[ij3] = nbd;
          }
          if (i4 === i && j4 === j && i3 === i1 && j3 === j1) {
            if (types[ij] !== 1) {
              lnbd = Math.abs(types[ij]);
            }
            break;
          } else {
            i2 = i3;
            j2 = j3;
            i3 = i4;
            j3 = j4;
          }
        }
      }
    }
    return contours;
  }
  static #douglasPeuckerHelper(points, start, end, output) {
    if (end - start <= 4) {
      for (let i = start; i < end - 2; i += 2) {
        output.push(points[i], points[i + 1]);
      }
      return;
    }
    const ax = points[start];
    const ay = points[start + 1];
    const abx = points[end - 4] - ax;
    const aby = points[end - 3] - ay;
    const dist = Math.hypot(abx, aby);
    const nabx = abx / dist;
    const naby = aby / dist;
    const aa = nabx * ay - naby * ax;
    const m = aby / abx;
    const invS = 1 / dist;
    const phi = Math.atan(m);
    const cosPhi = Math.cos(phi);
    const sinPhi = Math.sin(phi);
    const tmax = invS * (Math.abs(cosPhi) + Math.abs(sinPhi));
    const poly = invS * (1 - tmax + tmax ** 2);
    const partialPhi = Math.max(Math.atan(Math.abs(sinPhi + cosPhi) * poly), Math.atan(Math.abs(sinPhi - cosPhi) * poly));
    let dmax = 0;
    let index = start;
    for (let i = start + 2; i < end - 2; i += 2) {
      const d = Math.abs(aa - nabx * points[i + 1] + naby * points[i]);
      if (d > dmax) {
        index = i;
        dmax = d;
      }
    }
    if (dmax > (dist * partialPhi) ** 2) {
      this.#douglasPeuckerHelper(points, start, index + 2, output);
      this.#douglasPeuckerHelper(points, index, end, output);
    } else {
      output.push(ax, ay);
    }
  }
  static #douglasPeucker(points) {
    const output = [];
    const len = points.length;
    this.#douglasPeuckerHelper(points, 0, len, output);
    output.push(points[len - 2], points[len - 1]);
    return output.length <= 4 ? null : output;
  }
  static #bilateralFilter(buf, width, height, sigmaS, sigmaR, kernelSize) {
    const kernel = new Float32Array(kernelSize ** 2);
    const sigmaS2 = -2 * sigmaS ** 2;
    const halfSize = kernelSize >> 1;
    for (let i = 0; i < kernelSize; i++) {
      const x = (i - halfSize) ** 2;
      for (let j = 0; j < kernelSize; j++) {
        kernel[i * kernelSize + j] = Math.exp((x + (j - halfSize) ** 2) / sigmaS2);
      }
    }
    const rangeValues = new Float32Array(256);
    const sigmaR2 = -2 * sigmaR ** 2;
    for (let i = 0; i < 256; i++) {
      rangeValues[i] = Math.exp(i ** 2 / sigmaR2);
    }
    const N = buf.length;
    const out = new Uint8Array(N);
    const histogram = new Uint32Array(256);
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const ij = i * width + j;
        const center = buf[ij];
        let sum = 0;
        let norm = 0;
        for (let k = 0; k < kernelSize; k++) {
          const y = i + k - halfSize;
          if (y < 0 || y >= height) {
            continue;
          }
          for (let l = 0; l < kernelSize; l++) {
            const x = j + l - halfSize;
            if (x < 0 || x >= width) {
              continue;
            }
            const neighbour = buf[y * width + x];
            const w = kernel[k * kernelSize + l] * rangeValues[Math.abs(neighbour - center)];
            sum += neighbour * w;
            norm += w;
          }
        }
        const pix = out[ij] = Math.round(sum / norm);
        histogram[pix]++;
      }
    }
    return [out, histogram];
  }
  static #getHistogram(buf) {
    const histogram = new Uint32Array(256);
    for (const g of buf) {
      histogram[g]++;
    }
    return histogram;
  }
  static #toUint8(buf) {
    const N = buf.length;
    const out = new Uint8ClampedArray(N >> 2);
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0, ii = out.length; i < ii; i++) {
      const pix = out[i] = buf[i << 2];
      max = Math.max(max, pix);
      min = Math.min(min, pix);
    }
    const ratio = 255 / (max - min);
    for (let i = 0, ii = out.length; i < ii; i++) {
      out[i] = (out[i] - min) * ratio;
    }
    return out;
  }
  static #guessThreshold(histogram) {
    let i;
    let M = -Infinity;
    let L = -Infinity;
    const min = histogram.findIndex(v => v !== 0);
    let pos = min;
    let spos = min;
    for (i = min; i < 256; i++) {
      const v = histogram[i];
      if (v > M) {
        if (i - pos > L) {
          L = i - pos;
          spos = i - 1;
        }
        M = v;
        pos = i;
      }
    }
    for (i = spos - 1; i >= 0; i--) {
      if (histogram[i] > histogram[i + 1]) {
        break;
      }
    }
    return i;
  }
  static #getGrayPixels(bitmap) {
    const originalBitmap = bitmap;
    const {
      width,
      height
    } = bitmap;
    const {
      maxDim
    } = this.#PARAMETERS;
    let newWidth = width;
    let newHeight = height;
    if (width > maxDim || height > maxDim) {
      let prevWidth = width;
      let prevHeight = height;
      let steps = Math.log2(Math.max(width, height) / maxDim);
      const isteps = Math.floor(steps);
      steps = steps === isteps ? isteps - 1 : isteps;
      for (let i = 0; i < steps; i++) {
        newWidth = Math.ceil(prevWidth / 2);
        newHeight = Math.ceil(prevHeight / 2);
        const offscreen = new OffscreenCanvas(newWidth, newHeight);
        const ctx = offscreen.getContext("2d");
        ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
        prevWidth = newWidth;
        prevHeight = newHeight;
        if (bitmap !== originalBitmap) {
          bitmap.close();
        }
        bitmap = offscreen.transferToImageBitmap();
      }
      const ratio = Math.min(maxDim / newWidth, maxDim / newHeight);
      newWidth = Math.round(newWidth * ratio);
      newHeight = Math.round(newHeight * ratio);
    }
    const offscreen = new OffscreenCanvas(newWidth, newHeight);
    const ctx = offscreen.getContext("2d", {
      willReadFrequently: true
    });
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, newWidth, newHeight);
    ctx.filter = "grayscale(1)";
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, newWidth, newHeight);
    const grayImage = ctx.getImageData(0, 0, newWidth, newHeight).data;
    const uint8Buf = this.#toUint8(grayImage);
    return [uint8Buf, newWidth, newHeight];
  }
  static extractContoursFromText(text, {
    fontFamily,
    fontStyle,
    fontWeight
  }, pageWidth, pageHeight, rotation, innerMargin) {
    let canvas = new OffscreenCanvas(1, 1);
    let ctx = canvas.getContext("2d", {
      alpha: false
    });
    const fontSize = 200;
    const font = ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
    const {
      actualBoundingBoxLeft,
      actualBoundingBoxRight,
      actualBoundingBoxAscent,
      actualBoundingBoxDescent,
      fontBoundingBoxAscent,
      fontBoundingBoxDescent,
      width
    } = ctx.measureText(text);
    const SCALE = 1.5;
    const canvasWidth = Math.ceil(Math.max(Math.abs(actualBoundingBoxLeft) + Math.abs(actualBoundingBoxRight) || 0, width) * SCALE);
    const canvasHeight = Math.ceil(Math.max(Math.abs(actualBoundingBoxAscent) + Math.abs(actualBoundingBoxDescent) || fontSize, Math.abs(fontBoundingBoxAscent) + Math.abs(fontBoundingBoxDescent) || fontSize) * SCALE);
    canvas = new OffscreenCanvas(canvasWidth, canvasHeight);
    ctx = canvas.getContext("2d", {
      alpha: true,
      willReadFrequently: true
    });
    ctx.font = font;
    ctx.filter = "grayscale(1)";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "black";
    ctx.fillText(text, canvasWidth * (SCALE - 1) / 2, canvasHeight * (3 - SCALE) / 2);
    const uint8Buf = this.#toUint8(ctx.getImageData(0, 0, canvasWidth, canvasHeight).data);
    const histogram = this.#getHistogram(uint8Buf);
    const threshold = this.#guessThreshold(histogram);
    const contourList = this.#findContours(uint8Buf, canvasWidth, canvasHeight, threshold);
    return this.processDrawnLines({
      lines: {
        curves: contourList,
        width: canvasWidth,
        height: canvasHeight
      },
      pageWidth,
      pageHeight,
      rotation,
      innerMargin,
      mustSmooth: true,
      areContours: true
    });
  }
  static process(bitmap, pageWidth, pageHeight, rotation, innerMargin) {
    const [uint8Buf, width, height] = this.#getGrayPixels(bitmap);
    const [buffer, histogram] = this.#bilateralFilter(uint8Buf, width, height, Math.hypot(width, height) * this.#PARAMETERS.sigmaSFactor, this.#PARAMETERS.sigmaR, this.#PARAMETERS.kernelSize);
    const threshold = this.#guessThreshold(histogram);
    const contourList = this.#findContours(buffer, width, height, threshold);
    return this.processDrawnLines({
      lines: {
        curves: contourList,
        width,
        height
      },
      pageWidth,
      pageHeight,
      rotation,
      innerMargin,
      mustSmooth: true,
      areContours: true
    });
  }
  static processDrawnLines({
    lines,
    pageWidth,
    pageHeight,
    rotation,
    innerMargin,
    mustSmooth,
    areContours
  }) {
    if (rotation % 180 !== 0) {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }
    const {
      curves,
      width,
      height
    } = lines;
    const thickness = lines.thickness ?? 0;
    const linesAndPoints = [];
    const ratio = Math.min(pageWidth / width, pageHeight / height);
    const xScale = ratio / pageWidth;
    const yScale = ratio / pageHeight;
    const newCurves = [];
    for (const {
      points
    } of curves) {
      const reducedPoints = mustSmooth ? this.#douglasPeucker(points) : points;
      if (!reducedPoints) {
        continue;
      }
      newCurves.push(reducedPoints);
      const len = reducedPoints.length;
      const newPoints = new Float32Array(len);
      const line = new Float32Array(3 * (len === 2 ? 2 : len - 2));
      linesAndPoints.push({
        line,
        points: newPoints
      });
      if (len === 2) {
        newPoints[0] = reducedPoints[0] * xScale;
        newPoints[1] = reducedPoints[1] * yScale;
        line.set([NaN, NaN, NaN, NaN, newPoints[0], newPoints[1]], 0);
        continue;
      }
      let [x1, y1, x2, y2] = reducedPoints;
      x1 *= xScale;
      y1 *= yScale;
      x2 *= xScale;
      y2 *= yScale;
      newPoints.set([x1, y1, x2, y2], 0);
      line.set([NaN, NaN, NaN, NaN, x1, y1], 0);
      for (let i = 4; i < len; i += 2) {
        const x = newPoints[i] = reducedPoints[i] * xScale;
        const y = newPoints[i + 1] = reducedPoints[i + 1] * yScale;
        line.set(Outline.createBezierPoints(x1, y1, x2, y2, x, y), (i - 2) * 3);
        [x1, y1, x2, y2] = [x2, y2, x, y];
      }
    }
    if (linesAndPoints.length === 0) {
      return null;
    }
    const outline = areContours ? new ContourDrawOutline() : new InkDrawOutline();
    outline.build(linesAndPoints, pageWidth, pageHeight, 1, rotation, areContours ? 0 : thickness, innerMargin);
    return {
      outline,
      newCurves,
      areContours,
      thickness,
      width,
      height
    };
  }
  static async compressSignature({
    outlines,
    areContours,
    thickness,
    width,
    height
  }) {
    let minDiff = Infinity;
    let maxDiff = -Infinity;
    let outlinesLength = 0;
    for (const points of outlines) {
      outlinesLength += points.length;
      for (let i = 2, ii = points.length; i < ii; i++) {
        const dx = points[i] - points[i - 2];
        minDiff = Math.min(minDiff, dx);
        maxDiff = Math.max(maxDiff, dx);
      }
    }
    let bufferType;
    if (minDiff >= -128 && maxDiff <= 127) {
      bufferType = Int8Array;
    } else if (minDiff >= -32768 && maxDiff <= 32767) {
      bufferType = Int16Array;
    } else {
      bufferType = Int32Array;
    }
    const len = outlines.length;
    const headerLength = BASE_HEADER_LENGTH + POINTS_PROPERTIES_NUMBER * len;
    const header = new Uint32Array(headerLength);
    let offset = 0;
    header[offset++] = headerLength * Uint32Array.BYTES_PER_ELEMENT + (outlinesLength - 2 * len) * bufferType.BYTES_PER_ELEMENT;
    header[offset++] = 0;
    header[offset++] = width;
    header[offset++] = height;
    header[offset++] = areContours ? 0 : 1;
    header[offset++] = Math.max(0, Math.floor(thickness ?? 0));
    header[offset++] = len;
    header[offset++] = bufferType.BYTES_PER_ELEMENT;
    for (const points of outlines) {
      header[offset++] = points.length - 2;
      header[offset++] = points[0];
      header[offset++] = points[1];
    }
    const cs = new CompressionStream("deflate-raw");
    const writer = cs.writable.getWriter();
    await writer.ready;
    writer.write(header);
    const BufferCtor = bufferType.prototype.constructor;
    for (const points of outlines) {
      const diffs = new BufferCtor(points.length - 2);
      for (let i = 2, ii = points.length; i < ii; i++) {
        diffs[i - 2] = points[i] - points[i - 2];
      }
      writer.write(diffs);
    }
    writer.close();
    const bytes = await new Response(cs.readable).bytes();
    return bytes.toBase64();
  }
  static async decompressSignature(signatureData) {
    try {
      const bytes = Uint8Array.fromBase64(signatureData);
      const {
        readable,
        writable
      } = new DecompressionStream("deflate-raw");
      const writer = writable.getWriter();
      await writer.ready;
      writer.write(bytes).then(async () => {
        await writer.ready;
        await writer.close();
      }).catch(() => {});
      let data = null;
      let offset = 0;
      for await (const chunk of readable) {
        data ||= new Uint8Array(new Uint32Array(chunk.buffer, 0, 4)[0]);
        data.set(chunk, offset);
        offset += chunk.length;
      }
      const header = new Uint32Array(data.buffer, 0, data.length >> 2);
      const version = header[1];
      if (version !== 0) {
        throw new Error(`Invalid version: ${version}`);
      }
      const width = header[2];
      const height = header[3];
      const areContours = header[4] === 0;
      const thickness = header[5];
      const numberOfDrawings = header[6];
      const bufferType = header[7];
      const outlines = [];
      const diffsOffset = (BASE_HEADER_LENGTH + POINTS_PROPERTIES_NUMBER * numberOfDrawings) * Uint32Array.BYTES_PER_ELEMENT;
      let diffs;
      switch (bufferType) {
        case Int8Array.BYTES_PER_ELEMENT:
          diffs = new Int8Array(data.buffer, diffsOffset);
          break;
        case Int16Array.BYTES_PER_ELEMENT:
          diffs = new Int16Array(data.buffer, diffsOffset);
          break;
        case Int32Array.BYTES_PER_ELEMENT:
          diffs = new Int32Array(data.buffer, diffsOffset);
          break;
      }
      offset = 0;
      for (let i = 0; i < numberOfDrawings; i++) {
        const len = header[POINTS_PROPERTIES_NUMBER * i + BASE_HEADER_LENGTH];
        const points = new Float32Array(len + 2);
        outlines.push(points);
        for (let j = 0; j < POINTS_PROPERTIES_NUMBER - 1; j++) {
          points[j] = header[POINTS_PROPERTIES_NUMBER * i + BASE_HEADER_LENGTH + j + 1];
        }
        for (let j = 0; j < len; j++) {
          points[j + 2] = points[j] + diffs[offset++];
        }
      }
      return {
        areContours,
        thickness,
        outlines,
        width,
        height
      };
    } catch (e) {
      warn(`decompressSignature: ${e}`);
      return null;
    }
  }
}

;// ./src/display/editor/signature.js







class SignatureOptions extends DrawingOptions {
  constructor() {
    super();
    super.updateProperties({
      fill: AnnotationEditor._defaultLineColor,
      "stroke-width": 0
    });
  }
  clone() {
    const clone = new SignatureOptions();
    clone.updateAll(this);
    return clone;
  }
}
class DrawnSignatureOptions extends InkDrawingOptions {
  constructor(viewerParameters) {
    super(viewerParameters);
    super.updateProperties({
      stroke: AnnotationEditor._defaultLineColor,
      "stroke-width": 1
    });
  }
  clone() {
    const clone = new DrawnSignatureOptions(this._viewParameters);
    clone.updateAll(this);
    return clone;
  }
}
class SignatureEditor extends DrawingEditor {
  #isExtracted = false;
  #description = null;
  #signatureData = null;
  #signatureUUID = null;
  static _type = "signature";
  static _editorType = AnnotationEditorType.SIGNATURE;
  static _defaultDrawingOptions = null;
  constructor(params) {
    super({
      ...params,
      mustBeCommitted: true,
      name: "signatureEditor"
    });
    this._willKeepAspectRatio = true;
    this.#signatureData = params.signatureData || null;
    this.#description = null;
    this.defaultL10nId = "pdfjs-editor-signature-editor1";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
    this._defaultDrawingOptions = new SignatureOptions();
    this._defaultDrawnSignatureOptions = new DrawnSignatureOptions(uiManager.viewParameters);
  }
  static getDefaultDrawingOptions(options) {
    const clone = this._defaultDrawingOptions.clone();
    clone.updateProperties(options);
    return clone;
  }
  static get supportMultipleDrawings() {
    return false;
  }
  static get typesMap() {
    return shadow(this, "typesMap", new Map());
  }
  static get isDrawer() {
    return false;
  }
  get telemetryFinalData() {
    return {
      type: "signature",
      hasDescription: !!this.#description
    };
  }
  static computeTelemetryFinalData(data) {
    const hasDescriptionStats = data.get("hasDescription");
    return {
      hasAltText: hasDescriptionStats.get(true) ?? 0,
      hasNoAltText: hasDescriptionStats.get(false) ?? 0
    };
  }
  get isResizable() {
    return true;
  }
  onScaleChanging() {
    if (this._drawId === null) {
      return;
    }
    super.onScaleChanging();
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    const {
      _isCopy
    } = this;
    if (_isCopy) {
      this._isCopy = false;
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    if (this._drawId === null) {
      if (this.#signatureData) {
        const {
          lines,
          mustSmooth,
          areContours,
          description,
          uuid,
          heightInPage
        } = this.#signatureData;
        const {
          rawDims: {
            pageWidth,
            pageHeight
          },
          rotation
        } = this.parent.viewport;
        const outline = SignatureExtractor.processDrawnLines({
          lines,
          pageWidth,
          pageHeight,
          rotation,
          innerMargin: SignatureEditor._INNER_MARGIN,
          mustSmooth,
          areContours
        });
        this.addSignature(outline, heightInPage, description, uuid);
      } else {
        this.div.setAttribute("data-l10n-args", JSON.stringify({
          description: ""
        }));
        this.div.hidden = true;
        this._uiManager.getSignature(this);
      }
    } else {
      this.div.setAttribute("data-l10n-args", JSON.stringify({
        description: this.#description || ""
      }));
    }
    if (_isCopy) {
      this._isCopy = true;
      this._moveAfterPaste(baseX, baseY);
    }
    return this.div;
  }
  setUuid(uuid) {
    this.#signatureUUID = uuid;
    this.addEditToolbar();
  }
  getUuid() {
    return this.#signatureUUID;
  }
  get description() {
    return this.#description;
  }
  set description(description) {
    this.#description = description;
    if (!this.div) {
      return;
    }
    this.div.setAttribute("data-l10n-args", JSON.stringify({
      description
    }));
    super.addEditToolbar().then(toolbar => {
      toolbar?.updateEditSignatureButton(description);
    });
  }
  getSignaturePreview() {
    const {
      newCurves,
      areContours,
      thickness,
      width,
      height
    } = this.#signatureData;
    const maxDim = Math.max(width, height);
    const outlineData = SignatureExtractor.processDrawnLines({
      lines: {
        curves: newCurves.map(points => ({
          points
        })),
        thickness,
        width,
        height
      },
      pageWidth: maxDim,
      pageHeight: maxDim,
      rotation: 0,
      innerMargin: 0,
      mustSmooth: false,
      areContours
    });
    return {
      areContours,
      outline: outlineData.outline
    };
  }
  get toolbarButtons() {
    if (this._uiManager.signatureManager) {
      return [["editSignature", this._uiManager.signatureManager]];
    }
    return super.toolbarButtons;
  }
  addSignature(data, heightInPage, description, uuid) {
    const {
      x: savedX,
      y: savedY
    } = this;
    const {
      outline
    } = this.#signatureData = data;
    this.#isExtracted = outline instanceof ContourDrawOutline;
    this.description = description;
    let drawingOptions;
    if (this.#isExtracted) {
      drawingOptions = SignatureEditor.getDefaultDrawingOptions();
    } else {
      drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
      drawingOptions.updateProperties({
        "stroke-width": outline.thickness
      });
    }
    this._addOutlines({
      drawOutlines: outline,
      drawingOptions
    });
    const [, pageHeight] = this.pageDimensions;
    let newHeight = heightInPage / pageHeight;
    newHeight = newHeight >= 1 ? 0.5 : newHeight;
    this.width *= newHeight / this.height;
    if (this.width >= 1) {
      newHeight *= 0.9 / this.width;
      this.width = 0.9;
    }
    this.height = newHeight;
    this.setDims();
    this.x = savedX;
    this.y = savedY;
    this.center();
    this._onResized();
    this.onScaleChanging();
    this.rotate();
    this._uiManager.addToAnnotationStorage(this);
    this.setUuid(uuid);
    this._reportTelemetry({
      action: "pdfjs.signature.inserted",
      data: {
        hasBeenSaved: !!uuid,
        hasDescription: !!description
      }
    });
    this.div.hidden = false;
  }
  getFromImage(bitmap) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.process(bitmap, pageWidth, pageHeight, rotation, SignatureEditor._INNER_MARGIN);
  }
  getFromText(text, fontInfo) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.extractContoursFromText(text, fontInfo, pageWidth, pageHeight, rotation, SignatureEditor._INNER_MARGIN);
  }
  getDrawnSignature(curves) {
    const {
      rawDims: {
        pageWidth,
        pageHeight
      },
      rotation
    } = this.parent.viewport;
    return SignatureExtractor.processDrawnLines({
      lines: curves,
      pageWidth,
      pageHeight,
      rotation,
      innerMargin: SignatureEditor._INNER_MARGIN,
      mustSmooth: false,
      areContours: false
    });
  }
  createDrawingOptions({
    areContours,
    thickness
  }) {
    if (areContours) {
      this._drawingOptions = SignatureEditor.getDefaultDrawingOptions();
    } else {
      this._drawingOptions = SignatureEditor._defaultDrawnSignatureOptions.clone();
      this._drawingOptions.updateProperties({
        "stroke-width": thickness
      });
    }
  }
  serialize(isForCopying = false) {
    if (this.isEmpty()) {
      return null;
    }
    const {
      lines,
      points
    } = this.serializeDraw(isForCopying);
    const {
      _drawingOptions: {
        "stroke-width": thickness
      }
    } = this;
    const serialized = Object.assign(super.serialize(isForCopying), {
      isSignature: true,
      areContours: this.#isExtracted,
      color: [0, 0, 0],
      thickness: this.#isExtracted ? 0 : thickness
    });
    this.addComment(serialized);
    if (isForCopying) {
      serialized.paths = {
        lines,
        points
      };
      serialized.uuid = this.#signatureUUID;
      serialized.isCopy = true;
    } else {
      serialized.lines = lines;
    }
    if (this.#description) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: this.#description
      };
    }
    return serialized;
  }
  static deserializeDraw(pageX, pageY, pageWidth, pageHeight, innerMargin, data) {
    if (data.areContours) {
      return ContourDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
    }
    return InkDrawOutline.deserialize(pageX, pageY, pageWidth, pageHeight, innerMargin, data);
  }
  static async deserialize(data, parent, uiManager) {
    const editor = await super.deserialize(data, parent, uiManager);
    editor.#isExtracted = data.areContours;
    editor.description = data.accessibilityData?.alt || "";
    editor.#signatureUUID = data.uuid;
    return editor;
  }
}

;// ./src/display/editor/stamp.js




class StampEditor extends AnnotationEditor {
  #bitmap = null;
  #bitmapId = null;
  #bitmapPromise = null;
  #bitmapUrl = null;
  #bitmapFile = null;
  #bitmapFileName = "";
  #canvas = null;
  #missingCanvas = false;
  #resizeTimeoutId = null;
  #isSvg = false;
  #hasBeenAddedInUndoStack = false;
  static _type = "stamp";
  static _editorType = AnnotationEditorType.STAMP;
  constructor(params) {
    super({
      ...params,
      name: "stampEditor"
    });
    this.#bitmapUrl = params.bitmapUrl;
    this.#bitmapFile = params.bitmapFile;
    this.defaultL10nId = "pdfjs-editor-stamp-editor";
  }
  static initialize(l10n, uiManager) {
    AnnotationEditor.initialize(l10n, uiManager);
  }
  static isHandlingMimeForPasting(mime) {
    return SupportedImageMimeTypes.includes(mime);
  }
  static paste(item, parent) {
    parent.pasteEditor({
      mode: AnnotationEditorType.STAMP
    }, {
      bitmapFile: item.getAsFile()
    });
  }
  altTextFinish() {
    if (this._uiManager.useNewAltTextFlow) {
      this.div.hidden = false;
    }
    super.altTextFinish();
  }
  get telemetryFinalData() {
    return {
      type: "stamp",
      hasAltText: !!this.altTextData?.altText
    };
  }
  static computeTelemetryFinalData(data) {
    const hasAltTextStats = data.get("hasAltText");
    return {
      hasAltText: hasAltTextStats.get(true) ?? 0,
      hasNoAltText: hasAltTextStats.get(false) ?? 0
    };
  }
  #getBitmapFetched(data, fromId = false) {
    if (!data) {
      this.remove();
      return;
    }
    this.#bitmap = data.bitmap;
    if (!fromId) {
      this.#bitmapId = data.id;
      this.#isSvg = data.isSvg;
    }
    if (data.file) {
      this.#bitmapFileName = data.file.name;
    }
    this.#createCanvas();
  }
  #getBitmapDone() {
    this.#bitmapPromise = null;
    this._uiManager.enableWaiting(false);
    if (!this.#canvas) {
      return;
    }
    if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#bitmap) {
      this.addEditToolbar().then(() => {
        this._editToolbar.hide();
        this._uiManager.editAltText(this, true);
      });
      return;
    }
    if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#bitmap) {
      this._reportTelemetry({
        action: "pdfjs.image.image_added",
        data: {
          alt_text_modal: false,
          alt_text_type: "empty"
        }
      });
      try {
        this.mlGuessAltText();
      } catch {}
    }
    this.div.focus();
  }
  async mlGuessAltText(imageData = null, updateAltTextData = true) {
    if (this.hasAltTextData()) {
      return null;
    }
    const {
      mlManager
    } = this._uiManager;
    if (!mlManager) {
      throw new Error("No ML.");
    }
    if (!(await mlManager.isEnabledFor("altText"))) {
      throw new Error("ML isn't enabled for alt text.");
    }
    const {
      data,
      width,
      height
    } = imageData || this.copyCanvas(null, null, true).imageData;
    const response = await mlManager.guess({
      name: "altText",
      request: {
        data,
        width,
        height,
        channels: data.length / (width * height)
      }
    });
    if (!response) {
      throw new Error("No response from the AI service.");
    }
    if (response.error) {
      throw new Error("Error from the AI service.");
    }
    if (response.cancel) {
      return null;
    }
    if (!response.output) {
      throw new Error("No valid response from the AI service.");
    }
    const altText = response.output;
    await this.setGuessedAltText(altText);
    if (updateAltTextData && !this.hasAltTextData()) {
      this.altTextData = {
        alt: altText,
        decorative: false
      };
    }
    return altText;
  }
  #getBitmap() {
    if (this.#bitmapId) {
      this._uiManager.enableWaiting(true);
      this._uiManager.imageManager.getFromId(this.#bitmapId).then(data => this.#getBitmapFetched(data, true)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapUrl) {
      const url = this.#bitmapUrl;
      this.#bitmapUrl = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromUrl(url).then(data => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    if (this.#bitmapFile) {
      const file = this.#bitmapFile;
      this.#bitmapFile = null;
      this._uiManager.enableWaiting(true);
      this.#bitmapPromise = this._uiManager.imageManager.getFromFile(file).then(data => this.#getBitmapFetched(data)).finally(() => this.#getBitmapDone());
      return;
    }
    const input = document.createElement("input");
    input.type = "file";
    input.accept = SupportedImageMimeTypes.join(",");
    const signal = this._uiManager._signal;
    this.#bitmapPromise = new Promise(resolve => {
      input.addEventListener("change", async () => {
        if (!input.files || input.files.length === 0) {
          this.remove();
        } else {
          this._uiManager.enableWaiting(true);
          const data = await this._uiManager.imageManager.getFromFile(input.files[0]);
          this._reportTelemetry({
            action: "pdfjs.image.image_selected",
            data: {
              alt_text_modal: this._uiManager.useNewAltTextFlow
            }
          });
          this.#getBitmapFetched(data);
        }
        resolve();
      }, {
        signal
      });
      input.addEventListener("cancel", () => {
        this.remove();
        resolve();
      }, {
        signal
      });
    }).finally(() => this.#getBitmapDone());
    input.click();
  }
  remove() {
    if (this.#bitmapId) {
      this.#bitmap = null;
      this._uiManager.imageManager.deleteId(this.#bitmapId);
      this.#canvas?.remove();
      this.#canvas = null;
      if (this.#resizeTimeoutId) {
        clearTimeout(this.#resizeTimeoutId);
        this.#resizeTimeoutId = null;
      }
    }
    super.remove();
  }
  rebuild() {
    if (!this.parent) {
      if (this.#bitmapId) {
        this.#getBitmap();
      }
      return;
    }
    super.rebuild();
    if (this.div === null) {
      return;
    }
    if (this.#bitmapId && this.#canvas === null) {
      this.#getBitmap();
    }
    if (!this.isAttachedToDOM) {
      this.parent.add(this);
    }
  }
  onceAdded(focus) {
    this._isDraggable = true;
    if (focus) {
      this.div.focus();
    }
  }
  isEmpty() {
    return !(this.#bitmapPromise || this.#bitmap || this.#bitmapUrl || this.#bitmapFile || this.#bitmapId || this.#missingCanvas);
  }
  get toolbarButtons() {
    return [["altText", this.createAltText()]];
  }
  get isResizable() {
    return true;
  }
  render() {
    if (this.div) {
      return this.div;
    }
    let baseX, baseY;
    if (this._isCopy) {
      baseX = this.x;
      baseY = this.y;
    }
    super.render();
    this.div.hidden = true;
    this.createAltText();
    if (!this.#missingCanvas) {
      if (this.#bitmap) {
        this.#createCanvas();
      } else {
        this.#getBitmap();
      }
    }
    if (this._isCopy) {
      this._moveAfterPaste(baseX, baseY);
    }
    this._uiManager.addShouldRescale(this);
    return this.div;
  }
  setCanvas(annotationElementId, canvas) {
    const {
      id: bitmapId,
      bitmap
    } = this._uiManager.imageManager.getFromCanvas(annotationElementId, canvas);
    canvas.remove();
    if (bitmapId && this._uiManager.imageManager.isValidId(bitmapId)) {
      this.#bitmapId = bitmapId;
      if (bitmap) {
        this.#bitmap = bitmap;
      }
      this.#missingCanvas = false;
      this.#createCanvas();
    }
  }
  _onResized() {
    this.onScaleChanging();
  }
  onScaleChanging() {
    if (!this.parent) {
      return;
    }
    if (this.#resizeTimeoutId !== null) {
      clearTimeout(this.#resizeTimeoutId);
    }
    const TIME_TO_WAIT = 200;
    this.#resizeTimeoutId = setTimeout(() => {
      this.#resizeTimeoutId = null;
      this.#drawBitmap();
    }, TIME_TO_WAIT);
  }
  #createCanvas() {
    const {
      div
    } = this;
    let {
      width,
      height
    } = this.#bitmap;
    const [pageWidth, pageHeight] = this.pageDimensions;
    const MAX_RATIO = 0.75;
    if (this.width) {
      width = this.width * pageWidth;
      height = this.height * pageHeight;
    } else if (width > MAX_RATIO * pageWidth || height > MAX_RATIO * pageHeight) {
      const factor = Math.min(MAX_RATIO * pageWidth / width, MAX_RATIO * pageHeight / height);
      width *= factor;
      height *= factor;
    }
    this._uiManager.enableWaiting(false);
    const canvas = this.#canvas = document.createElement("canvas");
    canvas.setAttribute("role", "img");
    this.addContainer(canvas);
    this.width = width / pageWidth;
    this.height = height / pageHeight;
    this.setDims();
    if (this._initialOptions?.isCentered) {
      this.center();
    } else {
      this.fixAndSetPosition();
    }
    this._initialOptions = null;
    if (!this._uiManager.useNewAltTextWhenAddingImage || !this._uiManager.useNewAltTextFlow || this.annotationElementId) {
      div.hidden = false;
    }
    this.#drawBitmap();
    if (!this.#hasBeenAddedInUndoStack) {
      this.parent.addUndoableEditor(this);
      this.#hasBeenAddedInUndoStack = true;
    }
    this._reportTelemetry({
      action: "inserted_image"
    });
    if (this.#bitmapFileName) {
      this.div.setAttribute("aria-description", this.#bitmapFileName);
    }
    if (!this.annotationElementId) {
      this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
    }
  }
  copyCanvas(maxDataDimension, maxPreviewDimension, createImageData = false) {
    if (!maxDataDimension) {
      maxDataDimension = 224;
    }
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = this.#bitmap;
    const outputScale = new OutputScale();
    let bitmap = this.#bitmap;
    let width = bitmapWidth,
      height = bitmapHeight;
    let canvas = null;
    if (maxPreviewDimension) {
      if (bitmapWidth > maxPreviewDimension || bitmapHeight > maxPreviewDimension) {
        const ratio = Math.min(maxPreviewDimension / bitmapWidth, maxPreviewDimension / bitmapHeight);
        width = Math.floor(bitmapWidth * ratio);
        height = Math.floor(bitmapHeight * ratio);
      }
      canvas = document.createElement("canvas");
      const scaledWidth = canvas.width = Math.ceil(width * outputScale.sx);
      const scaledHeight = canvas.height = Math.ceil(height * outputScale.sy);
      if (!this.#isSvg) {
        bitmap = this.#scaleBitmap(scaledWidth, scaledHeight);
      }
      const ctx = canvas.getContext("2d");
      ctx.filter = this._uiManager.hcmFilter;
      let white = "white",
        black = "#cfcfd8";
      if (this._uiManager.hcmFilter !== "none") {
        black = "black";
      } else if (ColorScheme.isDarkMode) {
        white = "#8f8f9d";
        black = "#42414d";
      }
      const boxDim = 15;
      const boxDimWidth = boxDim * outputScale.sx;
      const boxDimHeight = boxDim * outputScale.sy;
      const pattern = new OffscreenCanvas(boxDimWidth * 2, boxDimHeight * 2);
      const patternCtx = pattern.getContext("2d");
      patternCtx.fillStyle = white;
      patternCtx.fillRect(0, 0, boxDimWidth * 2, boxDimHeight * 2);
      patternCtx.fillStyle = black;
      patternCtx.fillRect(0, 0, boxDimWidth, boxDimHeight);
      patternCtx.fillRect(boxDimWidth, boxDimHeight, boxDimWidth, boxDimHeight);
      ctx.fillStyle = ctx.createPattern(pattern, "repeat");
      ctx.fillRect(0, 0, scaledWidth, scaledHeight);
      ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
    }
    let imageData = null;
    if (createImageData) {
      let dataWidth, dataHeight;
      if (outputScale.symmetric && bitmap.width < maxDataDimension && bitmap.height < maxDataDimension) {
        dataWidth = bitmap.width;
        dataHeight = bitmap.height;
      } else {
        bitmap = this.#bitmap;
        if (bitmapWidth > maxDataDimension || bitmapHeight > maxDataDimension) {
          const ratio = Math.min(maxDataDimension / bitmapWidth, maxDataDimension / bitmapHeight);
          dataWidth = Math.floor(bitmapWidth * ratio);
          dataHeight = Math.floor(bitmapHeight * ratio);
          if (!this.#isSvg) {
            bitmap = this.#scaleBitmap(dataWidth, dataHeight);
          }
        }
      }
      const offscreen = new OffscreenCanvas(dataWidth, dataHeight);
      const offscreenCtx = offscreen.getContext("2d", {
        willReadFrequently: true
      });
      offscreenCtx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, dataWidth, dataHeight);
      imageData = {
        width: dataWidth,
        height: dataHeight,
        data: offscreenCtx.getImageData(0, 0, dataWidth, dataHeight).data
      };
    }
    return {
      canvas,
      width,
      height,
      imageData
    };
  }
  #scaleBitmap(width, height) {
    const {
      width: bitmapWidth,
      height: bitmapHeight
    } = this.#bitmap;
    let newWidth = bitmapWidth;
    let newHeight = bitmapHeight;
    let bitmap = this.#bitmap;
    while (newWidth > 2 * width || newHeight > 2 * height) {
      const prevWidth = newWidth;
      const prevHeight = newHeight;
      if (newWidth > 2 * width) {
        newWidth = newWidth >= 16384 ? Math.floor(newWidth / 2) - 1 : Math.ceil(newWidth / 2);
      }
      if (newHeight > 2 * height) {
        newHeight = newHeight >= 16384 ? Math.floor(newHeight / 2) - 1 : Math.ceil(newHeight / 2);
      }
      const offscreen = new OffscreenCanvas(newWidth, newHeight);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(bitmap, 0, 0, prevWidth, prevHeight, 0, 0, newWidth, newHeight);
      bitmap = offscreen.transferToImageBitmap();
    }
    return bitmap;
  }
  #drawBitmap() {
    const [parentWidth, parentHeight] = this.parentDimensions;
    const {
      width,
      height
    } = this;
    const outputScale = new OutputScale();
    const scaledWidth = Math.ceil(width * parentWidth * outputScale.sx);
    const scaledHeight = Math.ceil(height * parentHeight * outputScale.sy);
    const canvas = this.#canvas;
    if (!canvas || canvas.width === scaledWidth && canvas.height === scaledHeight) {
      return;
    }
    canvas.width = scaledWidth;
    canvas.height = scaledHeight;
    const bitmap = this.#isSvg ? this.#bitmap : this.#scaleBitmap(scaledWidth, scaledHeight);
    const ctx = canvas.getContext("2d");
    ctx.filter = this._uiManager.hcmFilter;
    ctx.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height, 0, 0, scaledWidth, scaledHeight);
  }
  #serializeBitmap(toUrl) {
    if (toUrl) {
      if (this.#isSvg) {
        const url = this._uiManager.imageManager.getSvgUrl(this.#bitmapId);
        if (url) {
          return url;
        }
      }
      const canvas = document.createElement("canvas");
      ({
        width: canvas.width,
        height: canvas.height
      } = this.#bitmap);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0);
      return canvas.toDataURL();
    }
    if (this.#isSvg) {
      const [pageWidth, pageHeight] = this.pageDimensions;
      const width = Math.round(this.width * pageWidth * PixelsPerInch.PDF_TO_CSS_UNITS);
      const height = Math.round(this.height * pageHeight * PixelsPerInch.PDF_TO_CSS_UNITS);
      const offscreen = new OffscreenCanvas(width, height);
      const ctx = offscreen.getContext("2d");
      ctx.drawImage(this.#bitmap, 0, 0, this.#bitmap.width, this.#bitmap.height, 0, 0, width, height);
      return offscreen.transferToImageBitmap();
    }
    return structuredClone(this.#bitmap);
  }
  static async deserialize(data, parent, uiManager) {
    let initialData = null;
    let missingCanvas = false;
    if (data instanceof StampAnnotationElement) {
      const {
        data: {
          rect,
          rotation,
          id,
          structParent,
          popupRef,
          richText,
          contentsObj,
          creationDate,
          modificationDate
        },
        container,
        parent: {
          page: {
            pageNumber
          }
        },
        canvas
      } = data;
      let bitmapId, bitmap;
      if (canvas) {
        delete data.canvas;
        ({
          id: bitmapId,
          bitmap
        } = uiManager.imageManager.getFromCanvas(container.id, canvas));
        canvas.remove();
      } else {
        missingCanvas = true;
        data._hasNoCanvas = true;
      }
      const altText = (await parent._structTree.getAriaAttributes(`${AnnotationPrefix}${id}`))?.get("aria-label") || "";
      initialData = data = {
        annotationType: AnnotationEditorType.STAMP,
        bitmapId,
        bitmap,
        pageIndex: pageNumber - 1,
        rect: rect.slice(0),
        rotation,
        annotationElementId: id,
        id,
        deleted: false,
        accessibilityData: {
          decorative: false,
          altText
        },
        isSvg: false,
        structParent,
        popupRef,
        richText,
        comment: contentsObj?.str || null,
        creationDate,
        modificationDate
      };
    }
    const editor = await super.deserialize(data, parent, uiManager);
    const {
      rect,
      bitmap,
      bitmapUrl,
      bitmapId,
      isSvg,
      accessibilityData
    } = data;
    if (missingCanvas) {
      uiManager.addMissingCanvas(data.id, editor);
      editor.#missingCanvas = true;
    } else if (bitmapId && uiManager.imageManager.isValidId(bitmapId)) {
      editor.#bitmapId = bitmapId;
      if (bitmap) {
        editor.#bitmap = bitmap;
      }
    } else {
      editor.#bitmapUrl = bitmapUrl;
    }
    editor.#isSvg = isSvg;
    const [parentWidth, parentHeight] = editor.pageDimensions;
    editor.width = (rect[2] - rect[0]) / parentWidth;
    editor.height = (rect[3] - rect[1]) / parentHeight;
    if (accessibilityData) {
      editor.altTextData = accessibilityData;
    }
    editor._initialData = initialData;
    if (data.comment) {
      editor.setCommentData(data);
    }
    editor.#hasBeenAddedInUndoStack = !!initialData;
    return editor;
  }
  serialize(isForCopying = false, context = null) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.deleted) {
      return this.serializeDeleted();
    }
    const serialized = Object.assign(super.serialize(isForCopying), {
      bitmapId: this.#bitmapId,
      isSvg: this.#isSvg
    });
    this.addComment(serialized);
    if (isForCopying) {
      serialized.bitmapUrl = this.#serializeBitmap(true);
      serialized.accessibilityData = this.serializeAltText(true);
      serialized.isCopy = true;
      return serialized;
    }
    const {
      decorative,
      altText
    } = this.serializeAltText(false);
    if (!decorative && altText) {
      serialized.accessibilityData = {
        type: "Figure",
        alt: altText
      };
    }
    if (this.annotationElementId) {
      const changes = this.#hasElementChanged(serialized);
      if (changes.isSame) {
        return null;
      }
      if (changes.isSameAltText) {
        delete serialized.accessibilityData;
      } else {
        serialized.accessibilityData.structParent = this._initialData.structParent ?? -1;
      }
      serialized.id = this.annotationElementId;
      delete serialized.bitmapId;
      return serialized;
    }
    if (context === null) {
      return serialized;
    }
    context.stamps ||= new Map();
    const area = this.#isSvg ? (serialized.rect[2] - serialized.rect[0]) * (serialized.rect[3] - serialized.rect[1]) : null;
    if (!context.stamps.has(this.#bitmapId)) {
      context.stamps.set(this.#bitmapId, {
        area,
        serialized
      });
      serialized.bitmap = this.#serializeBitmap(false);
    } else if (this.#isSvg) {
      const prevData = context.stamps.get(this.#bitmapId);
      if (area > prevData.area) {
        prevData.area = area;
        prevData.serialized.bitmap.close();
        prevData.serialized.bitmap = this.#serializeBitmap(false);
      }
    }
    return serialized;
  }
  #hasElementChanged(serialized) {
    const {
      pageIndex,
      accessibilityData: {
        altText
      }
    } = this._initialData;
    const isSamePageIndex = serialized.pageIndex === pageIndex;
    const isSameAltText = (serialized.accessibilityData?.alt || "") === altText;
    return {
      isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && isSamePageIndex && isSameAltText,
      isSameAltText
    };
  }
  renderAnnotationElement(annotation) {
    if (this.deleted) {
      annotation.hide();
      return null;
    }
    annotation.updateEdited({
      rect: this.getPDFRect(),
      popup: this.comment
    });
    return null;
  }
}

;// ./src/display/editor/annotation_editor_layer.js








class AnnotationEditorLayer {
  #accessibilityManager;
  #allowClick = false;
  #annotationLayer = null;
  #clickAC = null;
  #editorFocusTimeoutId = null;
  #editors = new Map();
  #hadPointerDown = false;
  #isDisabling = false;
  #isEnabling = false;
  #drawingAC = null;
  #focusedElement = null;
  #textLayer = null;
  #textSelectionAC = null;
  #textLayerDblClickAC = null;
  #lastPointerDownTimestamp = -1;
  #uiManager;
  static _initialized = false;
  static #editorTypes = new Map([FreeTextEditor, InkEditor, StampEditor, HighlightEditor, SignatureEditor].map(type => [type._editorType, type]));
  constructor({
    uiManager,
    pageIndex,
    div,
    structTreeLayer,
    accessibilityManager,
    annotationLayer,
    drawLayer,
    textLayer,
    viewport,
    l10n
  }) {
    const editorTypes = [...AnnotationEditorLayer.#editorTypes.values()];
    if (!AnnotationEditorLayer._initialized) {
      AnnotationEditorLayer._initialized = true;
      for (const editorType of editorTypes) {
        editorType.initialize(l10n, uiManager);
      }
    }
    uiManager.registerEditorTypes(editorTypes);
    this.#uiManager = uiManager;
    this.pageIndex = pageIndex;
    this.div = div;
    this.#accessibilityManager = accessibilityManager;
    this.#annotationLayer = annotationLayer;
    this.viewport = viewport;
    this.#textLayer = textLayer;
    this.drawLayer = drawLayer;
    this._structTree = structTreeLayer;
    this.#uiManager.addLayer(this);
  }
  get isEmpty() {
    return this.#editors.size === 0;
  }
  get isInvisible() {
    return this.isEmpty && this.#uiManager.getMode() === AnnotationEditorType.NONE;
  }
  updateToolbar(options) {
    this.#uiManager.updateToolbar(options);
  }
  updateMode(mode = this.#uiManager.getMode()) {
    this.#cleanup();
    switch (mode) {
      case AnnotationEditorType.NONE:
        this.div.classList.toggle("nonEditing", true);
        this.disableTextSelection();
        this.togglePointerEvents(false);
        this.toggleAnnotationLayerPointerEvents(true);
        this.disableClick();
        return;
      case AnnotationEditorType.INK:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
        break;
      case AnnotationEditorType.HIGHLIGHT:
        this.enableTextSelection();
        this.togglePointerEvents(false);
        this.disableClick();
        break;
      default:
        this.disableTextSelection();
        this.togglePointerEvents(true);
        this.enableClick();
    }
    this.toggleAnnotationLayerPointerEvents(false);
    const {
      classList
    } = this.div;
    classList.toggle("nonEditing", false);
    if (mode === AnnotationEditorType.POPUP) {
      classList.toggle("commentEditing", true);
    } else {
      classList.toggle("commentEditing", false);
      for (const editorType of AnnotationEditorLayer.#editorTypes.values()) {
        classList.toggle(`${editorType._type}Editing`, mode === editorType._editorType);
      }
    }
    this.div.hidden = false;
  }
  hasTextLayer(textLayer) {
    return textLayer === this.#textLayer?.div;
  }
  setEditingState(isEditing) {
    this.#uiManager.setEditingState(isEditing);
  }
  addCommands(params) {
    this.#uiManager.addCommands(params);
  }
  cleanUndoStack(type) {
    this.#uiManager.cleanUndoStack(type);
  }
  toggleDrawing(enabled = false) {
    this.div.classList.toggle("drawing", !enabled);
  }
  togglePointerEvents(enabled = false) {
    this.div.classList.toggle("disabled", !enabled);
  }
  toggleAnnotationLayerPointerEvents(enabled = false) {
    this.#annotationLayer?.togglePointerEvents(enabled);
  }
  get #allEditorsIterator() {
    return this.#editors.size !== 0 ? this.#editors.values() : this.#uiManager.getEditors(this.pageIndex);
  }
  async enable() {
    this.#isEnabling = true;
    this.div.tabIndex = 0;
    this.togglePointerEvents(true);
    this.div.classList.toggle("nonEditing", false);
    this.#textLayerDblClickAC?.abort();
    this.#textLayerDblClickAC = null;
    const annotationElementIds = new Set();
    for (const editor of this.#allEditorsIterator) {
      editor.enableEditing();
      editor.show(true);
      if (editor.annotationElementId) {
        this.#uiManager.removeChangedExistingAnnotation(editor);
        annotationElementIds.add(editor.annotationElementId);
      }
    }
    const annotationLayer = this.#annotationLayer;
    if (annotationLayer) {
      for (const editable of annotationLayer.getEditableAnnotations()) {
        editable.hide();
        if (this.#uiManager.isDeletedAnnotationElement(editable.data.id)) {
          continue;
        }
        if (annotationElementIds.has(editable.data.id)) {
          continue;
        }
        const editor = await this.deserialize(editable);
        if (!editor) {
          continue;
        }
        this.addOrRebuild(editor);
        editor.enableEditing();
      }
    }
    this.#isEnabling = false;
    this.#uiManager._eventBus.dispatch("editorsrendered", {
      source: this,
      pageNumber: this.pageIndex + 1
    });
  }
  disable() {
    this.#isDisabling = true;
    this.div.tabIndex = -1;
    this.togglePointerEvents(false);
    this.div.classList.toggle("nonEditing", true);
    if (this.#textLayer && !this.#textLayerDblClickAC) {
      this.#textLayerDblClickAC = new AbortController();
      const signal = this.#uiManager.combinedSignal(this.#textLayerDblClickAC);
      this.#textLayer.div.addEventListener("pointerdown", e => {
        const DBL_CLICK_THRESHOLD = 500;
        const {
          clientX,
          clientY,
          timeStamp
        } = e;
        const lastPointerDownTimestamp = this.#lastPointerDownTimestamp;
        if (timeStamp - lastPointerDownTimestamp > DBL_CLICK_THRESHOLD) {
          this.#lastPointerDownTimestamp = timeStamp;
          return;
        }
        this.#lastPointerDownTimestamp = -1;
        const {
          classList
        } = this.div;
        classList.toggle("getElements", true);
        const elements = document.elementsFromPoint(clientX, clientY);
        classList.toggle("getElements", false);
        if (!this.div.contains(elements[0])) {
          return;
        }
        let id;
        const regex = new RegExp(`^${AnnotationEditorPrefix}[0-9]+$`);
        for (const element of elements) {
          if (regex.test(element.id)) {
            id = element.id;
            break;
          }
        }
        if (!id) {
          return;
        }
        const editor = this.#editors.get(id);
        if (editor?.annotationElementId === null) {
          e.stopPropagation();
          e.preventDefault();
          editor.dblclick(e);
        }
      }, {
        signal,
        capture: true
      });
    }
    const annotationLayer = this.#annotationLayer;
    const needFakeAnnotation = [];
    if (annotationLayer) {
      const changedAnnotations = new Map();
      const resetAnnotations = new Map();
      for (const editor of this.#allEditorsIterator) {
        editor.disableEditing();
        if (!editor.annotationElementId) {
          needFakeAnnotation.push(editor);
          continue;
        }
        if (editor.serialize() !== null) {
          changedAnnotations.set(editor.annotationElementId, editor);
          continue;
        } else {
          resetAnnotations.set(editor.annotationElementId, editor);
        }
        this.getEditableAnnotation(editor.annotationElementId)?.show();
        editor.remove();
      }
      for (const editable of annotationLayer.getEditableAnnotations()) {
        const {
          id
        } = editable.data;
        if (this.#uiManager.isDeletedAnnotationElement(id)) {
          editable.updateEdited({
            deleted: true
          });
          continue;
        }
        let editor = resetAnnotations.get(id);
        if (editor) {
          editor.resetAnnotationElement(editable);
          editor.show(false);
          editable.show();
          continue;
        }
        editor = changedAnnotations.get(id);
        if (editor) {
          this.#uiManager.addChangedExistingAnnotation(editor);
          if (editor.renderAnnotationElement(editable)) {
            editor.show(false);
          }
        }
        editable.show();
      }
    }
    this.#cleanup();
    if (this.isEmpty) {
      this.div.hidden = true;
    }
    const {
      classList
    } = this.div;
    for (const editorType of AnnotationEditorLayer.#editorTypes.values()) {
      classList.remove(`${editorType._type}Editing`);
    }
    this.disableTextSelection();
    this.toggleAnnotationLayerPointerEvents(true);
    annotationLayer?.updateFakeAnnotations(needFakeAnnotation);
    this.#isDisabling = false;
  }
  getEditableAnnotation(id) {
    return this.#annotationLayer?.getEditableAnnotation(id) || null;
  }
  setActiveEditor(editor) {
    const currentActive = this.#uiManager.getActive();
    if (currentActive === editor) {
      return;
    }
    this.#uiManager.setActiveEditor(editor);
  }
  enableTextSelection() {
    this.div.tabIndex = -1;
    if (this.#textLayer?.div && !this.#textSelectionAC) {
      this.#textSelectionAC = new AbortController();
      const signal = this.#uiManager.combinedSignal(this.#textSelectionAC);
      this.#textLayer.div.addEventListener("pointerdown", this.#textLayerPointerDown.bind(this), {
        signal
      });
      this.#textLayer.div.classList.add("highlighting");
    }
  }
  disableTextSelection() {
    this.div.tabIndex = 0;
    if (this.#textLayer?.div && this.#textSelectionAC) {
      this.#textSelectionAC.abort();
      this.#textSelectionAC = null;
      this.#textLayer.div.classList.remove("highlighting");
    }
  }
  #textLayerPointerDown(event) {
    this.#uiManager.unselectAll();
    const {
      target
    } = event;
    if (target === this.#textLayer.div || (target.getAttribute("role") === "img" || target.classList.contains("endOfContent")) && this.#textLayer.div.contains(target)) {
      const {
        isMac
      } = FeatureTest.platform;
      if (event.button !== 0 || event.ctrlKey && isMac) {
        return;
      }
      this.#uiManager.showAllEditors("highlight", true, true);
      this.#textLayer.div.classList.add("free");
      this.toggleDrawing();
      HighlightEditor.startHighlighting(this, this.#uiManager.direction === "ltr", {
        target: this.#textLayer.div,
        x: event.x,
        y: event.y
      });
      this.#textLayer.div.addEventListener("pointerup", () => {
        this.#textLayer.div.classList.remove("free");
        this.toggleDrawing(true);
      }, {
        once: true,
        signal: this.#uiManager._signal
      });
      event.preventDefault();
    }
  }
  enableClick() {
    if (this.#clickAC) {
      return;
    }
    this.#clickAC = new AbortController();
    const signal = this.#uiManager.combinedSignal(this.#clickAC);
    this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal
    });
    const pointerup = this.pointerup.bind(this);
    this.div.addEventListener("pointerup", pointerup, {
      signal
    });
    this.div.addEventListener("pointercancel", pointerup, {
      signal
    });
  }
  disableClick() {
    this.#clickAC?.abort();
    this.#clickAC = null;
  }
  attach(editor) {
    this.#editors.set(editor.id, editor);
    const {
      annotationElementId
    } = editor;
    if (annotationElementId && this.#uiManager.isDeletedAnnotationElement(annotationElementId)) {
      this.#uiManager.removeDeletedAnnotationElement(editor);
    }
  }
  detach(editor) {
    this.#editors.delete(editor.id);
    this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
    if (!this.#isDisabling && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor);
    }
  }
  remove(editor) {
    this.detach(editor);
    this.#uiManager.removeEditor(editor);
    editor.div.remove();
    editor.isAttachedToDOM = false;
  }
  changeParent(editor) {
    if (editor.parent === this) {
      return;
    }
    if (editor.parent && editor.annotationElementId) {
      this.#uiManager.addDeletedAnnotationElement(editor);
      AnnotationEditor.deleteAnnotationElement(editor);
      editor.annotationElementId = null;
    }
    this.attach(editor);
    editor.parent?.detach(editor);
    editor.setParent(this);
    if (editor.div && editor.isAttachedToDOM) {
      editor.div.remove();
      this.div.append(editor.div);
    }
  }
  add(editor) {
    if (editor.parent === this && editor.isAttachedToDOM) {
      return;
    }
    this.changeParent(editor);
    this.#uiManager.addEditor(editor);
    this.attach(editor);
    if (!editor.isAttachedToDOM) {
      const div = editor.render();
      this.div.append(div);
      editor.isAttachedToDOM = true;
    }
    editor.fixAndSetPosition();
    editor.onceAdded(!this.#isEnabling);
    this.#uiManager.addToAnnotationStorage(editor);
    editor._reportTelemetry(editor.telemetryInitialData);
  }
  moveEditorInDOM(editor) {
    if (!editor.isAttachedToDOM) {
      return;
    }
    const {
      activeElement
    } = document;
    if (editor.div.contains(activeElement) && !this.#editorFocusTimeoutId) {
      editor._focusEventsAllowed = false;
      this.#editorFocusTimeoutId = setTimeout(() => {
        this.#editorFocusTimeoutId = null;
        if (!editor.div.contains(document.activeElement)) {
          editor.div.addEventListener("focusin", () => {
            editor._focusEventsAllowed = true;
          }, {
            once: true,
            signal: this.#uiManager._signal
          });
          activeElement.focus();
        } else {
          editor._focusEventsAllowed = true;
        }
      }, 0);
    }
    editor._structTreeParentId = this.#accessibilityManager?.moveElementInDOM(this.div, editor.div, editor.contentDiv, true);
  }
  addOrRebuild(editor) {
    if (editor.needsToBeRebuilt()) {
      editor.parent ||= this;
      editor.rebuild();
      editor.show();
    } else {
      this.add(editor);
    }
  }
  addUndoableEditor(editor) {
    const cmd = () => editor._uiManager.rebuild(editor);
    const undo = () => {
      editor.remove();
    };
    this.addCommands({
      cmd,
      undo,
      mustExec: false
    });
  }
  getEditorByUID(uid) {
    for (const editor of this.#editors.values()) {
      if (editor.uid === uid) {
        return editor;
      }
    }
    return null;
  }
  get #currentEditorType() {
    return AnnotationEditorLayer.#editorTypes.get(this.#uiManager.getMode());
  }
  combinedSignal(ac) {
    return this.#uiManager.combinedSignal(ac);
  }
  #createNewEditor(params) {
    const editorType = this.#currentEditorType;
    return editorType ? new editorType.prototype.constructor(params) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#currentEditorType?.canCreateNewEmptyEditor();
  }
  async pasteEditor(options, params) {
    this.updateToolbar(options);
    await this.#uiManager.updateMode(options.mode);
    const {
      offsetX,
      offsetY
    } = this.#getCenterPoint();
    const id = this.#uiManager.getId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: offsetX,
      y: offsetY,
      uiManager: this.#uiManager,
      isCentered: true,
      ...params
    });
    if (editor) {
      this.add(editor);
    }
  }
  async deserialize(data) {
    return (await AnnotationEditorLayer.#editorTypes.get(data.annotationType ?? data.annotationEditorType)?.deserialize(data, this, this.#uiManager)) || null;
  }
  createAndAddNewEditor(event, isCentered, data = {}) {
    const id = this.#uiManager.getId();
    const editor = this.#createNewEditor({
      parent: this,
      id,
      x: event.offsetX,
      y: event.offsetY,
      uiManager: this.#uiManager,
      isCentered,
      ...data
    });
    if (editor) {
      this.add(editor);
    }
    return editor;
  }
  get boundingClientRect() {
    return this.div.getBoundingClientRect();
  }
  #getCenterPoint() {
    const {
      x,
      y,
      width,
      height
    } = this.boundingClientRect;
    const tlX = Math.max(0, x);
    const tlY = Math.max(0, y);
    const brX = Math.min(window.innerWidth, x + width);
    const brY = Math.min(window.innerHeight, y + height);
    const centerX = (tlX + brX) / 2 - x;
    const centerY = (tlY + brY) / 2 - y;
    const [offsetX, offsetY] = this.viewport.rotation % 180 === 0 ? [centerX, centerY] : [centerY, centerX];
    return {
      offsetX,
      offsetY
    };
  }
  addNewEditor(data = {}) {
    this.createAndAddNewEditor(this.#getCenterPoint(), true, data);
  }
  setSelected(editor) {
    this.#uiManager.setSelected(editor);
  }
  toggleSelected(editor) {
    this.#uiManager.toggleSelected(editor);
  }
  unselect(editor) {
    this.#uiManager.unselect(editor);
  }
  pointerup(event) {
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    if (!this.#hadPointerDown) {
      return;
    }
    this.#hadPointerDown = false;
    if (this.#currentEditorType?.isDrawer && this.#currentEditorType.supportMultipleDrawings) {
      return;
    }
    if (!this.#allowClick) {
      this.#allowClick = true;
      return;
    }
    const currentMode = this.#uiManager.getMode();
    if (currentMode === AnnotationEditorType.STAMP || currentMode === AnnotationEditorType.POPUP || currentMode === AnnotationEditorType.SIGNATURE) {
      this.#uiManager.unselectAll();
      return;
    }
    this.createAndAddNewEditor(event, false);
  }
  pointerdown(event) {
    if (this.#uiManager.getMode() === AnnotationEditorType.HIGHLIGHT) {
      this.enableTextSelection();
    }
    if (this.#hadPointerDown) {
      this.#hadPointerDown = false;
      return;
    }
    const {
      isMac
    } = FeatureTest.platform;
    if (event.button !== 0 || event.ctrlKey && isMac) {
      return;
    }
    if (event.target !== this.div) {
      return;
    }
    this.#hadPointerDown = true;
    if (this.#currentEditorType?.isDrawer) {
      this.startDrawingSession(event);
      return;
    }
    const editor = this.#uiManager.getActive();
    this.#allowClick = !editor || editor.isEmpty();
  }
  startDrawingSession(event) {
    this.div.focus({
      preventScroll: true
    });
    if (this.#drawingAC) {
      this.#currentEditorType.startDrawing(this, this.#uiManager, false, event);
      return;
    }
    this.#uiManager.setCurrentDrawingSession(this);
    this.#drawingAC = new AbortController();
    const signal = this.#uiManager.combinedSignal(this.#drawingAC);
    this.div.addEventListener("blur", ({
      relatedTarget
    }) => {
      if (relatedTarget && !this.div.contains(relatedTarget)) {
        this.#focusedElement = null;
        this.commitOrRemove();
      }
    }, {
      signal
    });
    this.#currentEditorType.startDrawing(this, this.#uiManager, false, event);
  }
  pause(on) {
    if (on) {
      const {
        activeElement
      } = document;
      if (this.div.contains(activeElement)) {
        this.#focusedElement = activeElement;
      }
      return;
    }
    if (this.#focusedElement) {
      setTimeout(() => {
        this.#focusedElement?.focus();
        this.#focusedElement = null;
      }, 0);
    }
  }
  endDrawingSession(isAborted = false) {
    if (!this.#drawingAC) {
      return null;
    }
    this.#uiManager.setCurrentDrawingSession(null);
    this.#drawingAC.abort();
    this.#drawingAC = null;
    this.#focusedElement = null;
    return this.#currentEditorType.endDrawing(isAborted);
  }
  findNewParent(editor, x, y) {
    const layer = this.#uiManager.findParent(x, y);
    if (layer === null || layer === this) {
      return false;
    }
    layer.changeParent(editor);
    return true;
  }
  commitOrRemove() {
    if (this.#drawingAC) {
      this.endDrawingSession();
      return true;
    }
    return false;
  }
  onScaleChanging() {
    if (!this.#drawingAC) {
      return;
    }
    this.#currentEditorType.onScaleChangingWhenDrawing(this);
  }
  destroy() {
    this.commitOrRemove();
    if (this.#uiManager.getActive()?.parent === this) {
      this.#uiManager.commitOrRemove();
      this.#uiManager.setActiveEditor(null);
    }
    if (this.#editorFocusTimeoutId) {
      clearTimeout(this.#editorFocusTimeoutId);
      this.#editorFocusTimeoutId = null;
    }
    for (const editor of this.#editors.values()) {
      this.#accessibilityManager?.removePointerInTextLayer(editor.contentDiv);
      editor.setParent(null);
      editor.isAttachedToDOM = false;
      editor.div.remove();
    }
    this.div = null;
    this.#editors.clear();
    this.#uiManager.removeLayer(this);
  }
  #cleanup() {
    for (const editor of this.#editors.values()) {
      if (editor.isEmpty()) {
        editor.remove();
      }
    }
  }
  async render({
    viewport
  }) {
    this.viewport = viewport;
    setLayerDimensions(this.div, viewport);
    for (const editor of this.#uiManager.getEditors(this.pageIndex)) {
      this.add(editor);
      editor.rebuild();
    }
    await this.#uiManager.findClonesForPage(this);
    this.div.hidden = this.isEmpty;
    this.updateMode();
  }
  update({
    viewport
  }) {
    this.#uiManager.commitOrRemove();
    this.#cleanup();
    const oldRotation = this.viewport.rotation;
    const rotation = viewport.rotation;
    this.viewport = viewport;
    setLayerDimensions(this.div, {
      rotation
    });
    if (oldRotation !== rotation) {
      for (const editor of this.#editors.values()) {
        editor.rotate(rotation);
      }
    }
  }
  get pageDimensions() {
    const {
      pageWidth,
      pageHeight
    } = this.viewport.rawDims;
    return [pageWidth, pageHeight];
  }
  get scale() {
    return this.#uiManager.viewParameters.realScale;
  }
}

;// ./src/display/draw_layer.js


class DrawLayer {
  #parent = null;
  #mapping = new Map();
  #toUpdate = new Map();
  static #id = 0;
  setParent(parent) {
    if (!this.#parent) {
      this.#parent = parent;
      return;
    }
    if (this.#parent !== parent) {
      if (this.#mapping.size > 0) {
        for (const root of this.#mapping.values()) {
          root.remove();
          parent.append(root);
        }
      }
      this.#parent = parent;
    }
  }
  static get _svgFactory() {
    return shadow(this, "_svgFactory", new DOMSVGFactory());
  }
  static #setBox(element, [x, y, width, height]) {
    const {
      style
    } = element;
    style.top = `${100 * y}%`;
    style.left = `${100 * x}%`;
    style.width = `${100 * width}%`;
    style.height = `${100 * height}%`;
  }
  #createSVG() {
    const svg = DrawLayer._svgFactory.create(1, 1, true);
    this.#parent.append(svg);
    svg.setAttribute("aria-hidden", true);
    return svg;
  }
  #createClipPath(defs, pathId) {
    const clipPath = DrawLayer._svgFactory.createElement("clipPath");
    defs.append(clipPath);
    const clipPathId = `clip_${pathId}`;
    clipPath.setAttribute("id", clipPathId);
    clipPath.setAttribute("clipPathUnits", "objectBoundingBox");
    const clipPathUse = DrawLayer._svgFactory.createElement("use");
    clipPath.append(clipPathUse);
    clipPathUse.setAttribute("href", `#${pathId}`);
    clipPathUse.classList.add("clip");
    return clipPathId;
  }
  #updateProperties(element, properties) {
    for (const [key, value] of Object.entries(properties)) {
      if (value === null) {
        element.removeAttribute(key);
      } else {
        element.setAttribute(key, value);
      }
    }
  }
  draw(properties, isPathUpdatable = false, hasClip = false) {
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    if (isPathUpdatable) {
      this.#toUpdate.set(id, path);
    }
    const clipPathId = hasClip ? this.#createClipPath(defs, pathId) : null;
    const use = DrawLayer._svgFactory.createElement("use");
    root.append(use);
    use.setAttribute("href", `#${pathId}`);
    this.updateProperties(root, properties);
    this.#mapping.set(id, root);
    return {
      id,
      clipPathId: `url(#${clipPathId})`
    };
  }
  drawOutline(properties, mustRemoveSelfIntersections) {
    const id = DrawLayer.#id++;
    const root = this.#createSVG();
    const defs = DrawLayer._svgFactory.createElement("defs");
    root.append(defs);
    const path = DrawLayer._svgFactory.createElement("path");
    defs.append(path);
    const pathId = `path_${id}`;
    path.setAttribute("id", pathId);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    let maskId;
    if (mustRemoveSelfIntersections) {
      const mask = DrawLayer._svgFactory.createElement("mask");
      defs.append(mask);
      maskId = `mask_${id}`;
      mask.setAttribute("id", maskId);
      mask.setAttribute("maskUnits", "objectBoundingBox");
      const rect = DrawLayer._svgFactory.createElement("rect");
      mask.append(rect);
      rect.setAttribute("width", "1");
      rect.setAttribute("height", "1");
      rect.setAttribute("fill", "white");
      const use = DrawLayer._svgFactory.createElement("use");
      mask.append(use);
      use.setAttribute("href", `#${pathId}`);
      use.setAttribute("stroke", "none");
      use.setAttribute("fill", "black");
      use.setAttribute("fill-rule", "nonzero");
      use.classList.add("mask");
    }
    const use1 = DrawLayer._svgFactory.createElement("use");
    root.append(use1);
    use1.setAttribute("href", `#${pathId}`);
    if (maskId) {
      use1.setAttribute("mask", `url(#${maskId})`);
    }
    const use2 = use1.cloneNode();
    root.append(use2);
    use1.classList.add("mainOutline");
    use2.classList.add("secondaryOutline");
    this.updateProperties(root, properties);
    this.#mapping.set(id, root);
    return id;
  }
  finalizeDraw(id, properties) {
    this.#toUpdate.delete(id);
    this.updateProperties(id, properties);
  }
  updateProperties(elementOrId, properties) {
    if (!properties) {
      return;
    }
    const {
      root,
      bbox,
      rootClass,
      path
    } = properties;
    const element = typeof elementOrId === "number" ? this.#mapping.get(elementOrId) : elementOrId;
    if (!element) {
      return;
    }
    if (root) {
      this.#updateProperties(element, root);
    }
    if (bbox) {
      DrawLayer.#setBox(element, bbox);
    }
    if (rootClass) {
      const {
        classList
      } = element;
      for (const [className, value] of Object.entries(rootClass)) {
        classList.toggle(className, value);
      }
    }
    if (path) {
      const defs = element.firstElementChild;
      const pathElement = defs.firstElementChild;
      this.#updateProperties(pathElement, path);
    }
  }
  updateParent(id, layer) {
    if (layer === this) {
      return;
    }
    const root = this.#mapping.get(id);
    if (!root) {
      return;
    }
    layer.#parent.append(root);
    this.#mapping.delete(id);
    layer.#mapping.set(id, root);
  }
  remove(id) {
    this.#toUpdate.delete(id);
    if (this.#parent === null) {
      return;
    }
    this.#mapping.get(id).remove();
    this.#mapping.delete(id);
  }
  destroy() {
    this.#parent = null;
    for (const root of this.#mapping.values()) {
      root.remove();
    }
    this.#mapping.clear();
    this.#toUpdate.clear();
  }
}

;// ./src/display/text_layer_images.js

function percentage(value) {
  return `${(value * 100).toFixed(2)}%`;
}
class TextLayerImages {
  #coordinates = [];
  #coordinatesByElement = new Map();
  #getPageCanvas = null;
  #minSize = 0;
  #pageWidth = 0;
  #pageHeight = 0;
  static #activeImage = null;
  constructor(minSize, coordinates, viewport, getPageCanvas) {
    this.#minSize = minSize;
    this.#coordinates = coordinates;
    this.#pageWidth = viewport.rawDims.pageWidth;
    this.#pageHeight = viewport.rawDims.pageHeight;
    this.#getPageCanvas = getPageCanvas;
  }
  render() {
    const container = document.createElement("div");
    container.className = "textLayerImages";
    for (let i = 0; i < this.#coordinates.length; i += 6) {
      const el = this.#createImagePlaceholder(this.#coordinates.subarray(i, i + 6));
      if (el) {
        container.append(el);
      }
    }
    container.addEventListener("contextmenu", event => {
      if (!(event.target instanceof HTMLCanvasElement)) {
        return;
      }
      const imgElement = event.target;
      const coords = this.#coordinatesByElement.get(imgElement);
      if (!coords) {
        return;
      }
      const activeImage = TextLayerImages.#activeImage?.deref();
      if (activeImage === imgElement) {
        return;
      }
      if (activeImage) {
        activeImage.width = 0;
        activeImage.height = 0;
      }
      TextLayerImages.#activeImage = new WeakRef(imgElement);
      const {
        inverseTransform,
        x1,
        y1,
        width,
        height
      } = coords;
      const pageCanvas = this.#getPageCanvas();
      const imageX1 = Math.ceil(x1 * pageCanvas.width);
      const imageY1 = Math.ceil(y1 * pageCanvas.height);
      const imageX2 = Math.floor((x1 + width / this.#pageWidth) * pageCanvas.width);
      const imageY2 = Math.floor((y1 + height / this.#pageHeight) * pageCanvas.height);
      imgElement.width = imageX2 - imageX1;
      imgElement.height = imageY2 - imageY1;
      const ctx = imgElement.getContext("2d");
      ctx.setTransform(...inverseTransform);
      ctx.translate(-imageX1, -imageY1);
      ctx.drawImage(pageCanvas, 0, 0);
    });
    return container;
  }
  #createImagePlaceholder([x1, y1, x2, y2, x3, y3]) {
    const width = Math.hypot((x3 - x1) * this.#pageWidth, (y3 - y1) * this.#pageHeight);
    const height = Math.hypot((x2 - x1) * this.#pageWidth, (y2 - y1) * this.#pageHeight);
    if (width < this.#minSize || height < this.#minSize) {
      return null;
    }
    const transform = [(x3 - x1) * this.#pageWidth / width, (y3 - y1) * this.#pageHeight / width, (x2 - x1) * this.#pageWidth / height, (y2 - y1) * this.#pageHeight / height, 0, 0];
    const inverseTransform = Util.inverseTransform(transform);
    const imgElement = document.createElement("canvas");
    imgElement.className = "textLayerImagePlaceholder";
    imgElement.width = 0;
    imgElement.height = 0;
    Object.assign(imgElement.style, {
      opacity: 0,
      position: "absolute",
      left: percentage(x1),
      top: percentage(y1),
      width: percentage(width / this.#pageWidth),
      height: percentage(height / this.#pageHeight),
      transformOrigin: "0% 0%",
      transform: `matrix(${transform.join(",")})`
    });
    this.#coordinatesByElement.set(imgElement, {
      inverseTransform,
      width,
      height,
      x1,
      y1
    });
    return imgElement;
  }
}

;// ./src/pdf.js

















{
  globalThis._pdfjsTestingUtils = {
    HighlightOutliner: HighlightOutliner
  };
}
globalThis.pdfjsLib = {
  AbortException: AbortException,
  AnnotationEditorLayer: AnnotationEditorLayer,
  AnnotationEditorParamsType: AnnotationEditorParamsType,
  AnnotationEditorType: AnnotationEditorType,
  AnnotationEditorUIManager: AnnotationEditorUIManager,
  AnnotationLayer: AnnotationLayer,
  AnnotationMode: AnnotationMode,
  AnnotationType: AnnotationType,
  applyOpacity: applyOpacity,
  build: build,
  ColorPicker: ColorPicker,
  createValidAbsoluteUrl: createValidAbsoluteUrl,
  CSSConstants: CSSConstants,
  DOMSVGFactory: DOMSVGFactory,
  DrawLayer: DrawLayer,
  FeatureTest: FeatureTest,
  fetchData: fetchData,
  findContrastColor: findContrastColor,
  getDocument: getDocument,
  getFilenameFromUrl: getFilenameFromUrl,
  getPdfFilenameFromUrl: getPdfFilenameFromUrl,
  getRGB: getRGB,
  getUuid: getUuid,
  getXfaPageViewport: getXfaPageViewport,
  GlobalWorkerOptions: GlobalWorkerOptions,
  ImageKind: ImageKind,
  InvalidPDFException: InvalidPDFException,
  isDataScheme: isDataScheme,
  isPdfFile: isPdfFile,
  isValidExplicitDest: isValidExplicitDest,
  makeArr: makeArr,
  makeMap: makeMap,
  makeObj: makeObj,
  MathClamp: MathClamp,
  noContextMenu: noContextMenu,
  normalizeUnicode: normalizeUnicode,
  OPS: OPS,
  OutputScale: OutputScale,
  PasswordResponses: PasswordResponses,
  PDFDataRangeTransport: PDFDataRangeTransport,
  PDFDateString: PDFDateString,
  PDFWorker: PDFWorker,
  PermissionFlag: PermissionFlag,
  PixelsPerInch: PixelsPerInch,
  RenderingCancelledException: RenderingCancelledException,
  renderRichText: renderRichText,
  ResponseException: ResponseException,
  setLayerDimensions: setLayerDimensions,
  shadow: shadow,
  SignatureExtractor: SignatureExtractor,
  stopEvent: stopEvent,
  SupportedImageMimeTypes: SupportedImageMimeTypes,
  TextLayer: TextLayer,
  TextLayerImages: TextLayerImages,
  TouchManager: TouchManager,
  updateUrlHash: updateUrlHash,
  Util: Util,
  VerbosityLevel: VerbosityLevel,
  version: version,
  XfaLayer: XfaLayer
};

export { AbortException, AnnotationEditorLayer, AnnotationEditorParamsType, AnnotationEditorType, AnnotationEditorUIManager, AnnotationLayer, AnnotationMode, AnnotationType, CSSConstants, ColorPicker, DOMSVGFactory, DrawLayer, FeatureTest, GlobalWorkerOptions, ImageKind, InvalidPDFException, MathClamp, OPS, OutputScale, PDFDataRangeTransport, PDFDateString, PDFWorker, PasswordResponses, PermissionFlag, PixelsPerInch, RenderingCancelledException, ResponseException, SignatureExtractor, SupportedImageMimeTypes, TextLayer, TextLayerImages, TouchManager, Util, VerbosityLevel, XfaLayer, applyOpacity, build, createValidAbsoluteUrl, fetchData, findContrastColor, getDocument, getFilenameFromUrl, getPdfFilenameFromUrl, getRGB, getUuid, getXfaPageViewport, isDataScheme, isPdfFile, isValidExplicitDest, makeArr, makeMap, makeObj, noContextMenu, normalizeUnicode, renderRichText, setLayerDimensions, shadow, stopEvent, updateUrlHash, version };

//# sourceMappingURL=pdf.mjs.map
