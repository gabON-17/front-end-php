/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/audio/audio.js":
/*!*******************************!*\
  !*** ./src/js/audio/audio.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
function initAudio() {
  var textInput = document.getElementById("text-audio");
  var speakButton = document.getElementById("audio");
  if (!textInput || !speakButton) return; // só inicializa na página de áudio

  speakButton.addEventListener("click", function () {
    var text = textInput.innerHTML;
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices.find(function (voice) {
      return voice.lang === "pt-BR";
    });
    window.speechSynthesis.speak(utterance);
  });
}
initAudio();

/***/ }),

/***/ "./src/js/chatbot/chatbot.js":
/*!***********************************!*\
  !*** ./src/js/chatbot/chatbot.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initChatbot: () => (/* binding */ initChatbot)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var CHAT_API_URL = "http://localhost:3000/";
var selectors = {
  page: "#chatbot-page",
  form: "#chat-form",
  input: "#chat-input",
  messages: "#chat-messages",
  status: "#chat-status",
  sendButton: "#chat-send"
};
var roles = {
  user: "Você",
  bot: "Assistente",
  error: "Sistema"
};
function ensureElements() {
  var elements = {
    page: document.querySelector(selectors.page),
    form: document.querySelector(selectors.form),
    input: document.querySelector(selectors.input),
    messages: document.querySelector(selectors.messages),
    status: document.querySelector(selectors.status),
    sendButton: document.querySelector(selectors.sendButton)
  };
  return Object.values(elements).every(Boolean) ? elements : null;
}
function appendMessage(container, text) {
  var _roles$type;
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "bot";
  var li = document.createElement("li");
  li.classList.add("message", "message--".concat(type));
  var sender = document.createElement("strong");
  sender.classList.add("message__sender");
  sender.textContent = (_roles$type = roles[type]) !== null && _roles$type !== void 0 ? _roles$type : roles.bot;
  var content = document.createElement("p");
  content.classList.add("message__text");
  content.textContent = text;
  li.appendChild(sender);
  li.appendChild(content);
  container.appendChild(li);
  container.scrollTop = container.scrollHeight;
}
function requestAnswer(_x) {
  return _requestAnswer.apply(this, arguments);
}
function _requestAnswer() {
  _requestAnswer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(message) {
    var payload, response, errorText, data, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          payload = {
            message: message
          };
          _context2.p = 1;
          _context2.n = 2;
          return fetch(CHAT_API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
        case 2:
          response = _context2.v;
          if (response.ok) {
            _context2.n = 4;
            break;
          }
          _context2.n = 3;
          return response.text();
        case 3:
          errorText = _context2.v;
          console.error("[chatbot] Falha na API:", response.status, response.statusText, errorText);
          throw new Error("Falha ao consultar a API (".concat(response.status, "): ").concat(errorText || "erro"));
        case 4:
          _context2.n = 5;
          return response.json();
        case 5:
          data = _context2.v;
          console.log("[chatbot] Resposta da API:", data);
          return _context2.a(2, (data === null || data === void 0 ? void 0 : data.answer) || (data === null || data === void 0 ? void 0 : data.message) || (data === null || data === void 0 ? void 0 : data.response) || JSON.stringify(data, null, 2));
        case 6:
          _context2.p = 6;
          _t2 = _context2.v;
          if (!(_t2.message.includes("CORS") || _t2.name === "TypeError")) {
            _context2.n = 7;
            break;
          }
          throw new Error("Erro de CORS: O servidor não permite requisições desta origem. " + "Configure o backend para aceitar requisições de http://127.0.0.1:5500 " + "adicionando os headers Access-Control-Allow-Origin.");
        case 7:
          throw _t2;
        case 8:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 6]]);
  }));
  return _requestAnswer.apply(this, arguments);
}
function updateStatus(statusElement, text) {
  statusElement.textContent = text;
}
function toggleForm(formElements, disabled) {
  formElements.input.disabled = disabled;
  formElements.sendButton.disabled = disabled;
}
function initChatbot() {
  var elements = ensureElements();
  if (!elements) return;
  updateStatus(elements.status, "Pronto para conversar!");
  elements.form.addEventListener("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var message, answer, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            event.preventDefault();
            message = elements.input.value.trim();
            if (message) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            appendMessage(elements.messages, message, "user");
            elements.input.value = "";
            elements.input.focus();
            updateStatus(elements.status, "Buscando resposta...");
            toggleForm(elements, true);
            _context.p = 2;
            _context.n = 3;
            return requestAnswer(message);
          case 3:
            answer = _context.v;
            appendMessage(elements.messages, answer, "bot");
            updateStatus(elements.status, "Pronto para a próxima pergunta.");
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            appendMessage(elements.messages, _t.message, "error");
            updateStatus(elements.status, "Não foi possível responder. Tente novamente.");
          case 5:
            _context.p = 5;
            toggleForm(elements, false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4, 5, 6]]);
    }));
    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }());
  elements.input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      elements.form.requestSubmit();
    }
  });
}

/***/ }),

/***/ "./src/js/connection/api.get.js":
/*!**************************************!*\
  !*** ./src/js/connection/api.get.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiGET: () => (/* binding */ apiGET)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function apiGET(_x) {
  return _apiGET.apply(this, arguments);
}
function _apiGET() {
  _apiGET = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url) {
    var data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (url) {
            _context.n = 1;
            break;
          }
          return _context.a(2, false);
        case 1:
          _context.n = 2;
          return fetch(url).then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          })["catch"](function (e) {
            return e;
          });
        case 2:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _apiGET.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/connection/api.post.js":
/*!***************************************!*\
  !*** ./src/js/connection/api.post.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiPOST: () => (/* binding */ apiPOST)
/* harmony export */ });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function apiPOST(_x, _x2) {
  return _apiPOST.apply(this, arguments);
}
function _apiPOST() {
  _apiPOST = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, body) {
    var data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!(!body && !url)) {
            _context.n = 1;
            break;
          }
          return _context.a(2, false);
        case 1:
          _context.n = 2;
          return fetch(url, {
            method: "POST",
            body: JSON.stringify(body)
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            return data;
          })["catch"](function (e) {
            return e;
          });
        case 2:
          data = _context.v;
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _apiPOST.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/courses/courses.create.js":
/*!******************************************!*\
  !*** ./src/js/courses/courses.create.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCourse: () => (/* binding */ createCourse)
/* harmony export */ });
/* harmony import */ var _connection_api_post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection/api.post.js */ "./src/js/connection/api.post.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function createCourse() {
  return _createCourse.apply(this, arguments);
}
function _createCourse() {
  _createCourse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, body, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/courses";
          body = {
            name: document.getElementById("nome_curso").value,
            description: document.getElementById("descricao_curso").value,
            teacher: document.getElementById("professor_curso").value
          };
          _context.n = 1;
          return (0,_connection_api_post_js__WEBPACK_IMPORTED_MODULE_0__.apiPOST)(url, body);
        case 1:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _createCourse.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/courses/courses.get.js":
/*!***************************************!*\
  !*** ./src/js/courses/courses.get.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCourses: () => (/* binding */ getCourses)
/* harmony export */ });
/* harmony import */ var _connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection/api.get.js */ "./src/js/connection/api.get.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function getCourses() {
  return _getCourses.apply(this, arguments);
}
function _getCourses() {
  _getCourses = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/courses";
          _context.n = 1;
          return (0,_connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__.apiGET)(url);
        case 1:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _getCourses.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/courses/courses.validate.js":
/*!********************************************!*\
  !*** ./src/js/courses/courses.validate.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeValidationCourse: () => (/* binding */ executeValidationCourse)
/* harmony export */ });
/* harmony import */ var _validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/mascara.js */ "./src/js/validation/mascara.js");

function executeValidationCourse() {
  var inputCpf = document.getElementById("professor_curso");
  inputCpf.addEventListener("keypress", function (e) {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputCpf);
  });
}

/***/ }),

/***/ "./src/js/quiz/quiz.js":
/*!*****************************!*\
  !*** ./src/js/quiz/quiz.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_getResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getResponse.js */ "./src/js/quiz/utils/getResponse.js");
/* harmony import */ var _utils_questions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/questions.js */ "./src/js/quiz/utils/questions.js");
/* harmony import */ var _utils_renderResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/renderResult.js */ "./src/js/quiz/utils/renderResult.js");



function initQuiz() {
  var questionHeader = document.getElementsByName("header-quiz")[0];
  var questionText = document.getElementById("question");
  var responsesInput = document.getElementsByName("labelResponse");
  var formQuiz = document.getElementById("form_quiz");
  var button = document.getElementsByClassName("btn-primary")[0];

  // Se os elementos não existem, não inicializa (evita erros em outras páginas)
  if (!questionHeader || !questionText || !(responsesInput !== null && responsesInput !== void 0 && responsesInput.length) || !formQuiz || !button) {
    return;
  }
  var question = 0;
  var resClient = [];
  document.addEventListener("DOMContentLoaded", function () {
    questionHeader.textContent = "Questão 1";
    questionText.textContent = _utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[0].quetion;
    for (var i = 0; i < 4; i++) {
      responsesInput[i].innerHTML = "<input type='radio' name='response' class='required' value='".concat(_utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question].responses[i], "' /> ") + _utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question].responses[i] + "<br>";
    }
  });
  formQuiz.addEventListener("submit", function (e) {
    e.preventDefault();
    question++;
    var response = (0,_utils_getResponse_js__WEBPACK_IMPORTED_MODULE_0__.getResponse)(_utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question - 1].correctResponse);
    resClient.push(response);
    if (question == 9) {
      button.value = "✅ Enviar";
    } else if (question >= 10) {
      question--;
      (0,_utils_renderResult_js__WEBPACK_IMPORTED_MODULE_2__.renderResult)(resClient, document.getElementById("body_quiz"));
    }
    questionHeader.textContent = "Quest\xE3o ".concat(question + 1);
    questionText.textContent = _utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question].quetion;
    for (var i = 0; i < 4; i++) {
      responsesInput[i].innerHTML = "<input type='radio' name='response' class='required' value='".concat(_utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question].responses[i], "' /> ") + _utils_questions_js__WEBPACK_IMPORTED_MODULE_1__.quizquetionsIA[question].responses[i] + "<br>";
    }
  });
}
initQuiz();

/***/ }),

/***/ "./src/js/quiz/utils/getResponse.js":
/*!******************************************!*\
  !*** ./src/js/quiz/utils/getResponse.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResponse: () => (/* binding */ getResponse)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function getResponse(correctResponse) {
  var radios = document.getElementsByName("response");
  var valor;
  var _iterator = _createForOfIteratorHelper(radios),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var radio = _step.value;
      if (radio.checked) {
        valor = radio.value;
        return valor === correctResponse;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return false;
}

/***/ }),

/***/ "./src/js/quiz/utils/questions.js":
/*!****************************************!*\
  !*** ./src/js/quiz/utils/questions.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   quizquetionsIA: () => (/* binding */ quizquetionsIA)
/* harmony export */ });
var quizquetionsIA = [{
  quetion: "Qual teste clássico é usado para avaliar a capacidade de uma máquina exibir comportamento inteligente indistinguível de um ser humano?",
  responses: ["O Teste de Turing", "O Teste de Bechdel", "O Teste de Milgram", "O Teste de Rorschach"],
  correctResponse: "O Teste de Turing"
}, {
  quetion: "O que significa a sigla 'NLP' no contexto de IA?",
  responses: ["Neural Logic Protocol (Protocolo de Lógica Neural)", "Natural Language Processing (Processamento de Linguagem Natural)", "Network Learning Program (Programa de Aprendizado de Rede)", "New Language Paradigm (Novo Paradigma de Linguagem)"],
  correctResponse: "Natural Language Processing (Processamento de Linguagem Natural)"
}, {
  quetion: "Qual subcampo da IA foca no uso de redes neurais com múltiplas camadas para aprender padrões complexos?",
  responses: ["Algoritmos Genéticos", "Lógica Fuzzy", "Deep Learning (Aprendizado Profundo)", "Sistemas Especialistas"],
  correctResponse: "Deep Learning (Aprendizado Profundo)"
}, {
  quetion: "No Machine Learning, como é chamado o tipo de aprendizado onde o modelo treina com dados que *não* possuem rótulos ou responses corretas?",
  responses: ["Aprendizado Supervisionado", "Aprendizado por Reforço", "Aprendizado Não Supervisionado", "Aprendizado Semi-Supervisionado"],
  correctResponse: "Aprendizado Não Supervisionado"
}, {
  quetion: "Qual é o objetivo da 'Visão Computacional' (Computer Vision)?",
  responses: ["Permitir que computadores 'vejam' e interpretem dados visuais (imagens e vídeos)", "Melhorar a velocidade de renderização de gráficos 3D", "Criar interfaces de usuário mais bonitas", "Processar e entender o áudio de vídeos"],
  correctResponse: "Permitir que computadores 'vejam' e interpretem dados visuais (imagens e vídeos)"
}, {
  quetion: "O que é 'Overfitting' em Machine Learning?",
  responses: ["Quando o modelo é muito simples e não aprende nada", "Quando o modelo aprende o ruído dos dados de treino e generaliza mal para novos dados", "O processo de adicionar mais camadas a uma rede neural", "Quando o modelo demora muito para treinar"],
  correctResponse: "Quando o modelo aprende o ruído dos dados de treino e generaliza mal para novos dados"
}, {
  quetion: "Qual IA, desenvolvida pela DeepMind (Google), derrotou o campeão mundial de Go, Lee Sedol, em 2016?",
  responses: ["Watson (IBM)", "ChatGPT (OpenAI)", "Deep Blue (IBM)", "AlphaGo"],
  correctResponse: "AlphaGo"
}, {
  quetion: "Como é chamada uma IA que possui a capacidade intelectual e cognitiva de um ser humano, podendo realizar qualquer tarefa que um humano pode? (Atualmente teórica)",
  responses: ["ANI (Artificial Narrow Intelligence) - IA Fraca", "AGI (Artificial General Intelligence) - IA Forte", "ASI (Artificial Superintelligence) - Superinteligência", "IA Reativa"],
  correctResponse: "AGI (Artificial General Intelligence) - IA Forte"
}, {
  quetion: "O aprendizado por reforço (Reinforcement Learning) é baseado principalmente em qual conceito?",
  responses: ["Rótulos de dados", "Agrupamento de dados", "Um sistema de recompensas e punições", "Imitação de exemplos"],
  correctResponse: "Um sistema de recompensas e punições"
}, {
  quetion: "Quem é frequentemente considerado um dos 'padrinhos' da IA e do Deep Learning por seu trabalho pioneiro em redes neurais?",
  responses: ["Alan Turing", "Geoffrey Hinton", "Tim Berners-Lee", "Bill Gates"],
  correctResponse: "Geoffrey Hinton"
}];

// Exemplo de como usar:
// console.log(quizquetionsIA[0].quetion);
// console.log(quizquetionsIA[0].responsescorrectResponse

/***/ }),

/***/ "./src/js/quiz/utils/renderResult.js":
/*!*******************************************!*\
  !*** ./src/js/quiz/utils/renderResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderResult: () => (/* binding */ renderResult)
/* harmony export */ });
/* harmony import */ var _questions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questions.js */ "./src/js/quiz/utils/questions.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

function renderResult(resClient, body) {
  var acerts = 0;
  var _iterator = _createForOfIteratorHelper(resClient),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var value = _step.value;
      if (value) acerts++;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var errors = _questions_js__WEBPACK_IMPORTED_MODULE_0__.quizquetionsIA.length - acerts;
  var percentage = Math.round(acerts / _questions_js__WEBPACK_IMPORTED_MODULE_0__.quizquetionsIA.length * 100);
  body.classList.add("main");
  body.innerHTML = "    <div class=\"container-result\">\n      <h1>Resultado do Quiz</h1>\n\n      <div class=\"results-container\">\n        <div class=\"result-card acertos\">\n          <h2 \n            style=\"background: linear-gradient(135deg, #27ae60 0%, #229954 100%);\"\n          >Acertos</h2>\n          <span class=\"number\" id=\"acertos\">0</span>\n          <span class=\"label\">Quest\xF5es Corretas</span>\n        </div>\n\n        <div class=\"result-card erros\">\n          <h2 \n            style=\"background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)\"\n          >Erros</h2>\n          <span class=\"number\" id=\"erros\">0</span>\n          <span class=\"label\">Quest\xF5es Incorretas</span>\n        </div>\n      </div>\n\n      <div class=\"progress-container\">\n        <div class=\"progress-label\">\n          <span>Sua Performance</span>\n          <span id=\"percentual\">0%</span>\n        </div>\n        <div class=\"progress-bar\">\n          <div class=\"progress-fill\" id=\"progressFill\" style=\"width: 80%\"></div>\n        </div>\n      </div>\n\n      <div class=\"summary\">\n        <p><strong>Total de Quest\xF5es:</strong> <span id=\"total\">10</span></p>\n        <p><strong>Taxa de Acerto:</strong> <span id=\"taxa\">0%</span></p>\n      </div>\n    </div>";
  document.getElementById("acertos").textContent = acerts;
  document.getElementById("erros").textContent = errors;
  document.getElementById("total").textContent = 10;
  document.getElementById("percentual").textContent = percentage + "%";
  document.getElementById("taxa").textContent = percentage + "%";
  document.getElementById("progressFill").style.width = percentage + "%";
}

/***/ }),

/***/ "./src/js/student/students.create.js":
/*!*******************************************!*\
  !*** ./src/js/student/students.create.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStudent: () => (/* binding */ createStudent)
/* harmony export */ });
/* harmony import */ var _validation_verifySex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/verifySex.js */ "./src/js/validation/verifySex.js");
/* harmony import */ var _connection_api_post_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../connection/api.post.js */ "./src/js/connection/api.post.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function createStudent() {
  return _createStudent.apply(this, arguments);
}
function _createStudent() {
  _createStudent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, body, response;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/students";
          body = {
            name: document.getElementById("aluno").value,
            birth: document.getElementById("data").value,
            sex: (0,_validation_verifySex_js__WEBPACK_IMPORTED_MODULE_0__.verifySex)(document.getElementsByName("sex")),
            cpf: document.getElementById("cpf").value,
            address: document.getElementById("endereco").value,
            complement: document.getElementById("complemento").value,
            cep: document.getElementById("cep").value,
            nearby: document.getElementById("bairro").value,
            city: document.getElementById("estado").value,
            telephone: document.getElementById("telefone").value
          };
          _context.n = 1;
          return (0,_connection_api_post_js__WEBPACK_IMPORTED_MODULE_1__.apiPOST)(url, body);
        case 1:
          response = _context.v;
          return _context.a(2, response);
      }
    }, _callee);
  }));
  return _createStudent.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/student/students.get.js":
/*!****************************************!*\
  !*** ./src/js/student/students.get.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStudents: () => (/* binding */ getStudents)
/* harmony export */ });
/* harmony import */ var _connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection/api.get.js */ "./src/js/connection/api.get.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function getStudents() {
  return _getStudents.apply(this, arguments);
}
function _getStudents() {
  _getStudents = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/students";
          _context.n = 1;
          return (0,_connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__.apiGET)(url);
        case 1:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _getStudents.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/student/students.validate.js":
/*!*********************************************!*\
  !*** ./src/js/student/students.validate.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeValidation: () => (/* binding */ executeValidation),
/* harmony export */   testa_form: () => (/* binding */ testa_form)
/* harmony export */ });
/* harmony import */ var _validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/mascara.js */ "./src/js/validation/mascara.js");

function testa_form() {
  var aluno = document.forms["formalunos"]["aluno"].value;
  var cpf = document.forms["formalunos"]["cpf"].value;
  if (aluno == "") {
    alert("Nome do aluno precisa ser informado.");
    document.forms["formalunos"]["aluno"].focus();
    return false;
  }
  if (cpf == "") {
    alert("CPF do aluno precisa ser informado");
    document.forms["formalunos"]["cpf"].focus();
    return false;
  }
  return true;
}
function executeValidation() {
  var inputCpf = document.getElementById("cpf");
  var inputTelephone = document.getElementById("telefone");
  var inputCep = document.getElementById("cep");
  inputCpf.addEventListener("keypress", function () {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputCpf);
  });
  inputTelephone.addEventListener("keypress", function () {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputTelephone);
  });
  inputCep.addEventListener("keypress", function () {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputCep);
  });
}

/***/ }),

/***/ "./src/js/teacher/teacher.validate.js":
/*!********************************************!*\
  !*** ./src/js/teacher/teacher.validate.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeValidationTeacher: () => (/* binding */ executeValidationTeacher),
/* harmony export */   testa_form_professor: () => (/* binding */ testa_form_professor)
/* harmony export */ });
/* harmony import */ var _validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validation/mascara.js */ "./src/js/validation/mascara.js");

function testa_form_professor() {
  var professor = document.forms["formprofessor"]["professor"].value;
  var cpf_prof = document.forms["formprofessor"]["cpf_prof"].value;
  var telefone_prof = document.forms["formprofessor"]["telefone_prof"].value;
  if (professor == "") {
    alert("Nome do professor precisa ser informado.");
    document.forms["formprofessor"]["professor"].focus();
    return false;
  }
  if (cpf_prof == "") {
    alert("CPF do professor precisa ser informado");
    document.forms["formprofessor"]["cpf_prof"].focus();
    return false;
  }
  if (telefone_prof == "") {
    alert("Telefone do professor precisa ser informado");
    document.forms["formprofessor"]["telefone_prof"].focus();
    return false;
  }
  return true;
}
function executeValidationTeacher() {
  var inputCpf = document.getElementById("cpf_prof");
  var inputTelephone = document.getElementById("telefone_prof");
  inputCpf.addEventListener("keypress", function (e) {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputCpf);
  });
  inputTelephone.addEventListener("keypress", function (e) {
    return (0,_validation_mascara_js__WEBPACK_IMPORTED_MODULE_0__.mascara)(inputTelephone);
  });
}

/***/ }),

/***/ "./src/js/teacher/teachers.create.js":
/*!*******************************************!*\
  !*** ./src/js/teacher/teachers.create.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTeacher: () => (/* binding */ createTeacher)
/* harmony export */ });
/* harmony import */ var _connection_api_post_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection/api.post.js */ "./src/js/connection/api.post.js");
/* harmony import */ var _validation_verifySex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/verifySex.js */ "./src/js/validation/verifySex.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


function createTeacher() {
  return _createTeacher.apply(this, arguments);
}
function _createTeacher() {
  _createTeacher = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, body, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/teachers";
          body = {
            name: document.getElementById("professor_name").value,
            sex: (0,_validation_verifySex_js__WEBPACK_IMPORTED_MODULE_1__.verifySex)(document.getElementsByName("sex_prof")),
            cpf: document.getElementById("cpf_prof").value,
            telephone: document.getElementById("telefone_prof").value
          };
          console.log(body.sex);
          _context.n = 1;
          return (0,_connection_api_post_js__WEBPACK_IMPORTED_MODULE_0__.apiPOST)(url, body);
        case 1:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _createTeacher.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/teacher/teachers.get.js":
/*!****************************************!*\
  !*** ./src/js/teacher/teachers.get.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeachers: () => (/* binding */ getTeachers)
/* harmony export */ });
/* harmony import */ var _connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../connection/api.get.js */ "./src/js/connection/api.get.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function getTeachers() {
  return _getTeachers.apply(this, arguments);
}
function _getTeachers() {
  _getTeachers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var url, data;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          url = "http://localhost/api/src/server.php/teachers";
          _context.n = 1;
          return (0,_connection_api_get_js__WEBPACK_IMPORTED_MODULE_0__.apiGET)(url);
        case 1:
          data = _context.v;
          return _context.a(2, data);
      }
    }, _callee);
  }));
  return _getTeachers.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/validation/mascara.js":
/*!**************************************!*\
  !*** ./src/js/validation/mascara.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mascara: () => (/* binding */ mascara)
/* harmony export */ });
function mascara(input) {
  var v = input.value;
  if (isNaN(v[v.length - 1])) {
    input.value = v.substring(0, v.length - 1);
    return;
  }
  var tipo = input.getAttribute("data-mask");
  if (tipo === "cpf") {
    input.setAttribute("maxlength", "14");
    if (v.length === 3 || v.length === 7) input.value += ".";
    if (v.length === 11) input.value += "-";
  }
  if (tipo === "cep") {
    input.setAttribute("maxlength", "9");
    if (v.length === 5) input.value += "-";
  }
  if (tipo === "cel") {
    input.setAttribute("maxlength", "14");
    if (v.length === 1) input.value = "(" + v;
    if (v.length === 3) input.value += ") ";
    if (v.length === 9) input.value += "-";
  }
}

/***/ }),

/***/ "./src/js/validation/verifySex.js":
/*!****************************************!*\
  !*** ./src/js/validation/verifySex.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   verifySex: () => (/* binding */ verifySex)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function verifySex(elements) {
  var value = undefined;
  var _iterator = _createForOfIteratorHelper(elements),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var input = _step.value;
      if (input.checked) {
        value = input.value;
        return value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_student_students_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/student/students.create.js */ "./src/js/student/students.create.js");
/* harmony import */ var _js_student_students_get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/student/students.get.js */ "./src/js/student/students.get.js");
/* harmony import */ var _js_teacher_teachers_create_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/teacher/teachers.create.js */ "./src/js/teacher/teachers.create.js");
/* harmony import */ var _js_teacher_teachers_get_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/teacher/teachers.get.js */ "./src/js/teacher/teachers.get.js");
/* harmony import */ var _js_courses_courses_validate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/courses/courses.validate.js */ "./src/js/courses/courses.validate.js");
/* harmony import */ var _js_courses_courses_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/courses/courses.create.js */ "./src/js/courses/courses.create.js");
/* harmony import */ var _js_courses_courses_get_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/courses/courses.get.js */ "./src/js/courses/courses.get.js");
/* harmony import */ var _js_quiz_quiz_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/quiz/quiz.js */ "./src/js/quiz/quiz.js");
/* harmony import */ var _js_teacher_teacher_validate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/teacher/teacher.validate.js */ "./src/js/teacher/teacher.validate.js");
/* harmony import */ var _js_student_students_validate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/student/students.validate.js */ "./src/js/student/students.validate.js");
/* harmony import */ var _js_audio_audio_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/audio/audio.js */ "./src/js/audio/audio.js");
/* harmony import */ var _js_chatbot_chatbot_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/chatbot/chatbot.js */ "./src/js/chatbot/chatbot.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }













// ALUNOS
if (window.location.href === "http://127.0.0.1:5500/public/pages/cadastro_aluno.html") {
  (0,_js_student_students_validate_js__WEBPACK_IMPORTED_MODULE_9__.executeValidation)();
  var form = document.getElementById("form_student");
  form.addEventListener("submit", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var response;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            e.preventDefault();
            (0,_js_student_students_validate_js__WEBPACK_IMPORTED_MODULE_9__.testa_form)();
            _context.n = 1;
            return (0,_js_student_students_create_js__WEBPACK_IMPORTED_MODULE_0__.createStudent)();
          case 1:
            response = _context.v;
            if (!response) console.log(response);
            console.log(response);
            form.reset();
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
}
if (window.location.href === "http://127.0.0.1:5500/public/pages/visualizar_alunos.html") {
  document.addEventListener("DOMContentLoaded", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(e) {
      var response, table, _iterator, _step, student, newLine, cont, keys, _i, _keys, key, colum;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return (0,_js_student_students_get_js__WEBPACK_IMPORTED_MODULE_1__.getStudents)();
          case 1:
            response = _context2.v;
            table = document.getElementById("tabela_alunos");
            document.getElementById("total_alunos").innerHTML = response.data.length;
            if (response) {
              table.innerHTML = "";
              _iterator = _createForOfIteratorHelper(response.data);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  student = _step.value;
                  newLine = table.insertRow();
                  cont = 0;
                  keys = Object.keys(student);
                  for (_i = 0, _keys = keys; _i < _keys.length; _i++) {
                    key = _keys[_i];
                    colum = newLine.insertCell(cont);
                    colum.innerHTML = student[key];
                    cont++;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
}

// PROFESSOR
if (window.location.href === "http://127.0.0.1:5500/public/pages/cadastro_professor.html") {
  var _form = document.getElementById("form_professor");
  (0,_js_teacher_teacher_validate_js__WEBPACK_IMPORTED_MODULE_8__.executeValidationTeacher)();
  _form.addEventListener("submit", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var response;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            e.preventDefault();
            (0,_js_teacher_teacher_validate_js__WEBPACK_IMPORTED_MODULE_8__.testa_form_professor)();
            _context3.n = 1;
            return (0,_js_teacher_teachers_create_js__WEBPACK_IMPORTED_MODULE_2__.createTeacher)();
          case 1:
            response = _context3.v;
            _form.reset();
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }());
}
if (window.location.href === "http://127.0.0.1:5500/public/pages/visualizar_professores.html") {
  document.addEventListener("DOMContentLoaded", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(e) {
      var _response$data$length;
      var response, table, _iterator2, _step2, teacher, newLine, cont, keys, _i2, _keys2, key, colum, _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _context4.n = 1;
            return (0,_js_teacher_teachers_get_js__WEBPACK_IMPORTED_MODULE_3__.getTeachers)();
          case 1:
            response = _context4.v;
            table = document.getElementById("tabela_professores");
            document.getElementById("total_professores").innerHTML = (_response$data$length = response.data.length) !== null && _response$data$length !== void 0 ? _response$data$length : 0;
            if (!response) {
              _context4.n = 11;
              break;
            }
            table.innerHTML = "";
            _iterator2 = _createForOfIteratorHelper(response.data);
            _context4.p = 2;
            _iterator2.s();
          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context4.n = 8;
              break;
            }
            teacher = _step2.value;
            newLine = table.insertRow();
            cont = 0;
            keys = Object.keys(teacher);
            _i2 = 0, _keys2 = keys;
          case 4:
            if (!(_i2 < _keys2.length)) {
              _context4.n = 7;
              break;
            }
            key = _keys2[_i2];
            colum = newLine.insertCell(cont);
            if (!(key === "id")) {
              _context4.n = 5;
              break;
            }
            return _context4.a(3, 6);
          case 5:
            colum.innerHTML = teacher[key];
            cont++;
          case 6:
            _i2++;
            _context4.n = 4;
            break;
          case 7:
            _context4.n = 3;
            break;
          case 8:
            _context4.n = 10;
            break;
          case 9:
            _context4.p = 9;
            _t = _context4.v;
            _iterator2.e(_t);
          case 10:
            _context4.p = 10;
            _iterator2.f();
            return _context4.f(10);
          case 11:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 9, 10, 11]]);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }());
}

// CURSO
if (window.location.href === "http://127.0.0.1:5500/public/pages/cadastro_curso.html") {
  var _form2 = document.getElementById("form_curso");
  (0,_js_courses_courses_validate_js__WEBPACK_IMPORTED_MODULE_4__.executeValidationCourse)();
  _form2.addEventListener("submit", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
      var response;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            e.preventDefault();
            _context5.n = 1;
            return (0,_js_courses_courses_create_js__WEBPACK_IMPORTED_MODULE_5__.createCourse)();
          case 1:
            response = _context5.v;
            console.log(response);
            _form2.reset();
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }());
}
if (window.location.href === "http://127.0.0.1:5500/public/pages/visualizar_cursos.html" || "http://localhost:5500/public/pages/visualizar_cursos.html") {
  document.addEventListener("DOMContentLoaded", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
      var response, table, _iterator3, _step3, course, newLine, cont, keys, _i3, _keys3, key, colum;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return (0,_js_courses_courses_get_js__WEBPACK_IMPORTED_MODULE_6__.getCourses)();
          case 1:
            response = _context6.v;
            table = document.getElementById("tabela_cursos");
            document.getElementById("total_cursos").innerHTML = response.data.length;
            if (response) {
              table.innerHTML = "";
              _iterator3 = _createForOfIteratorHelper(response.data);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  course = _step3.value;
                  newLine = table.insertRow();
                  cont = 0;
                  keys = Object.keys(course);
                  for (_i3 = 0, _keys3 = keys; _i3 < _keys3.length; _i3++) {
                    key = _keys3[_i3];
                    colum = newLine.insertCell(cont);
                    colum.innerHTML = course[key];
                    cont++;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }());
}
var shouldInitChat = window.location.pathname.endsWith("/chatbot.html") || document.querySelector("#chatbot-page");
if (shouldInitChat) {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("[chatbot] Inicializando página de chat");
    (0,_js_chatbot_chatbot_js__WEBPACK_IMPORTED_MODULE_11__.initChatbot)();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map