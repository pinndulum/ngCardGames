(self["webpackChunkng_card_games"] = self["webpackChunkng_card_games"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9595);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AppComponent = class AppComponent {
  constructor() {
    this.title = 'JM Card Games';
  }
  ngOnInit() {}
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/alert/alert.component */ 9803);
/* harmony import */ var _components_games_facecards_freeplay_freeplay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/games/facecards/freeplay/freeplay.component */ 7016);
/* harmony import */ var _components_games_facecards_solitaire_freecell_freecell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/games/facecards/solitaire/freecell/freecell.component */ 1573);
/* harmony import */ var _components_games_facecards_solitaire_klondike_klondike_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/games/facecards/solitaire/klondike/klondike.component */ 1338);
/* harmony import */ var _components_games_facecards_solitaire_spider_spider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/games/facecards/solitaire/spider/spider.component */ 2637);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal-dialog/modal-dialog.component */ 7981);
/* harmony import */ var _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/app-routing.module */ 4578);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/safe.pipe */ 5436);
/* harmony import */ var _pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/time.pipe */ 8017);





















let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_10__.TimePipe, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_9__.SafePipe, _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__.AlertComponent, _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ModalDialogComponent, _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _components_games_facecards_solitaire_klondike_klondike_component__WEBPACK_IMPORTED_MODULE_4__.KlondikeComponent, _components_games_facecards_solitaire_spider_spider_component__WEBPACK_IMPORTED_MODULE_5__.SpiderComponent, _components_games_facecards_solitaire_freecell_freecell_component__WEBPACK_IMPORTED_MODULE_3__.FreeCellComponent, _components_games_facecards_freeplay_freeplay_component__WEBPACK_IMPORTED_MODULE_2__.FreePlayComponent],
  imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__.DragDropModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_18__.MatSliderModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule, _modules_app_routing_module__WEBPACK_IMPORTED_MODULE_8__.AppRoutingModule],
  providers: [],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
})], AppModule);


/***/ }),

/***/ 9803:
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component.html?ngResource */ 3173);
/* harmony import */ var _alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.component.scss?ngResource */ 5317);
/* harmony import */ var _alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);






let AlertComponent = class AlertComponent {
  constructor(alerts) {
    this.alerts = alerts;
  }
  ngOnInit() {
    this.message = this.alerts.getAlert().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(msg => {
      switch (msg.type) {
        case 'success':
          msg.cssClass = 'alert alert-success';
          break;
        case 'error':
          msg.cssClass = 'alert alert-danger';
          break;
      }
      return msg;
    }));
  }
};
AlertComponent.ctorParameters = () => [{
  type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
}];
AlertComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-alert',
  template: _alert_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_alert_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AlertComponent);


/***/ }),

/***/ 7016:
/*!***************************************************************************!*\
  !*** ./src/app/components/games/facecards/freeplay/freeplay.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreePlayComponent": () => (/* binding */ FreePlayComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _freeplay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freeplay.component.html?ngResource */ 6063);
/* harmony import */ var _freeplay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freeplay.component.scss?ngResource */ 1938);
/* harmony import */ var _freeplay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_freeplay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FreePlayComponent = class FreePlayComponent {
  constructor() {}
  ngOnInit() {}
};
FreePlayComponent.ctorParameters = () => [];
FreePlayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-freeplay',
  template: _freeplay_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_freeplay_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FreePlayComponent);


/***/ }),

/***/ 1573:
/*!*************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/freecell/freecell.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreeCellComponent": () => (/* binding */ FreeCellComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _freecell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./freecell.component.html?ngResource */ 84);
/* harmony import */ var _freecell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./freecell.component.scss?ngResource */ 5812);
/* harmony import */ var _freecell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_freecell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let FreeCellComponent = class FreeCellComponent {
  constructor() {}
  ngOnInit() {}
};
FreeCellComponent.ctorParameters = () => [];
FreeCellComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-freecell',
  template: _freecell_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_freecell_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FreeCellComponent);


/***/ }),

/***/ 1338:
/*!*************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/klondike/klondike.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KlondikeComponent": () => (/* binding */ KlondikeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_jemec_repos_ngCardGames_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _klondike_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./klondike.component.html?ngResource */ 4988);
/* harmony import */ var _klondike_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./klondike.component.scss?ngResource */ 1044);
/* harmony import */ var _klondike_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_klondike_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var src_app_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/modal-dialog/modal-dialog.component */ 7981);
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enum */ 2209);
/* harmony import */ var src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enum/facecards */ 4970);
/* harmony import */ var src_app_models_game_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/game.history */ 7833);
/* harmony import */ var src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/piles */ 7995);
/* harmony import */ var src_app_models_piles_decks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/piles/decks */ 869);
/* harmony import */ var src_app_utils_array_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/array-helper */ 4677);














let KlondikeComponent = class KlondikeComponent {
  constructor(dialog) {
    var _this = this;
    this.dialog = dialog;
    this.drawCount = 3;
    this.history = {
      records: []
    };
    this.draw = new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Draw();
    this.foundations = [new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Foundation(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Foundation(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Foundation(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Foundation()];
    this.tableaus = [new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau(), new src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau()];
    this.dragging = [];
    this.canFoundationDrop = (card, pile) => {
      if (!card || card !== card.getPile().cards.slice(-1)[0]) {
        return false;
      }
      const placeon = (pile || []).slice(-1)[0];
      if (!placeon) {
        return card.style.name === src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_5__.FaceCardName.Ace;
      }
      return card.style.suit === placeon.style.suit && card.style.name === placeon.style.name + 1;
    };
    this.canTableauDrop = (card, pile) => {
      if (!card) {
        return false;
      }
      const placeon = (pile || []).slice(-1)[0];
      if (!placeon) {
        return card.style.name === src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_5__.FaceCardName.King;
      }
      return card.style.color !== placeon.style.color && card.style.name === placeon.style.name - 1;
    };
    this.moveCard = (card, to_pile) => {
      if (!card || !to_pile) {
        return;
      }
      const from_pile = card.getPile();
      const ndx = from_pile.cards.indexOf(card);
      const cards = from_pile.move(to_pile, ndx);
      const history = (0,src_app_models_game_history__WEBPACK_IMPORTED_MODULE_6__.moveHistory)(from_pile, ...cards);
      const next = from_pile.cards.slice(-1)[0];
      if (next && !this.canMove(next)) {
        history.moves.push((0,src_app_models_game_history__WEBPACK_IMPORTED_MODULE_6__.cardRecord)(from_pile, next));
        next.flip();
      }
      this.history.records.push(history);
      this.checkWin();
    };
    this.checkWin = () => {
      const cards = (0,src_app_utils_array_helper__WEBPACK_IMPORTED_MODULE_9__.flatten)(this.foundations.map(x => x.cards));
      const winner = (cards || []).length === 52;
      if (!winner) {
        return;
      }
      const windlg = this.dialog.open(src_app_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, {
        disableClose: true,
        data: {
          title: 'You Won!',
          message: 'Winner, winner... chicken dinner!',
          opts: {
            buttons: [{
              title: 'Ok'
            }, {
              title: 'New Game',
              action: () => {
                this.history.records.splice(0);
                this.startGame();
              }
            }]
          }
        }
      });
      windlg.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(diagres => {
        const result = typeof diagres === 'function' ? diagres() : diagres;
        return Promise.resolve(result);
      })).toPromise();
    };
    this.undo = () => {
      const record = this.history.records.pop();
      for (const move of record?.moves || []) {
        const piles = [this.deck, this.draw, ...this.tableaus, ...this.foundations];
        for (const pile of piles) {
          const card = pile.cards.find(x => x.ids.deckId === move.deckId);
          if (!card) {
            continue;
          }
          card.style.state = move.style.state;
          if (move.pile !== pile) {
            pile.move(move.pile, pile.cards.indexOf(card));
          }
        }
      }
    };
    this.startGame = /*#__PURE__*/(0,C_Users_jemec_repos_ngCardGames_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.history.records.length) {
        const askdlg = _this.dialog.open(src_app_components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_3__.ModalDialogComponent, {
          disableClose: true,
          data: {
            title: 'Are you sure?',
            message: 'Are you sure you would like to start a new game?',
            opts: {
              buttons: [{
                title: 'Yes'
              }, {
                title: 'No'
              }]
            }
          }
        });
        const result = yield askdlg.afterClosed().toPromise();
        if (result === 'No') {
          return;
        }
      }
      _this.deck = new src_app_models_piles_decks__WEBPACK_IMPORTED_MODULE_8__.FaceCards();
      _this.history.records.splice(0);
      for (const pile of [_this.draw, ..._this.tableaus, ..._this.foundations]) {
        pile.cards.splice(0);
      }
      _this.deck.shuffle(3);
      const tlen = _this.tableaus.length;
      for (let cnt = tlen; cnt > 0; cnt--) {
        for (let ndx = tlen - cnt; ndx < tlen; ndx++) {
          const tableau = _this.tableaus[ndx];
          _this.deck.move(tableau, 0, 1);
          if (ndx === tlen - cnt) {
            tableau.turn(-1);
          }
        }
      }
    });
    this.doDraw = () => {
      let cards;
      let history;
      if (this.deck.cards.length) {
        cards = this.deck.move(this.draw, 0, this.drawCount);
        history = cards.map(x => (0,src_app_models_game_history__WEBPACK_IMPORTED_MODULE_6__.cardRecord)(this.deck, x));
      } else {
        cards = this.draw.move(this.deck, 0);
        history = cards.map(x => (0,src_app_models_game_history__WEBPACK_IMPORTED_MODULE_6__.cardRecord)(this.draw, x));
      }
      cards.forEach(x => x.flip());
      this.history.records.push({
        moves: history.reverse()
      });
    };
    this.canMove = card => {
      return card?.style.state === src_app_enum__WEBPACK_IMPORTED_MODULE_4__.CardState.Up;
    };
    this.dblClick = card => {
      if (!this.canMove(card)) {
        return;
      }
      for (const pile of [...this.foundations, ...this.tableaus]) {
        let candrop;
        if (pile instanceof src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Foundation) {
          candrop = this.canFoundationDrop;
        } else if (pile instanceof src_app_models_piles__WEBPACK_IMPORTED_MODULE_7__.Tableau) {
          candrop = this.canTableauDrop;
        }
        if (candrop(card, pile.cards)) {
          return this.moveCard(card, pile);
        }
      }
    };
    this.canSort = (index, drag, drop) => {
      const card = drag.data;
      const cards = drop.data;
      return !drop.data.includes(card) && index === cards.length;
    };
    this.noDrop = () => {
      return false;
    };
    this.foundationDrop = (drag, drop) => {
      return this.canFoundationDrop(drag.data, drop.data);
    };
    this.tableauDrop = (drag, drop) => {
      return this.canTableauDrop(drag.data, drop.data);
    };
    this.onDragStart = event => {
      const card = event.source.data;
      const pile = card.getPile();
      const ndx = pile.cards.indexOf(card);
      const dragging = pile.cards.slice(ndx);
      this.dragging.splice(0, this.dragging.length, ...dragging);
    };
    this.onDrop = event => {
      this.dragging.splice(0);
      if (event.previousContainer === event.container) {
        event.item.reset();
      } else {
        const pileid = event.container.element.nativeElement.attributes['pile'].value;
        const match = /(?<type>.+)(?<ndx>\d+)/.exec(pileid);
        const pile = this[match.groups.type][match.groups.ndx];
        if (pile) {
          this.moveCard(event.item.data, pile);
        }
      }
    };
  }
  ngOnInit() {
    this.startGame();
  }
};
KlondikeComponent.ctorParameters = () => [{
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog
}];
KlondikeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-klondike',
  template: _klondike_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewEncapsulation.None,
  styles: [(_klondike_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], KlondikeComponent);


/***/ }),

/***/ 2637:
/*!*********************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/spider/spider.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpiderComponent": () => (/* binding */ SpiderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _spider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spider.component.html?ngResource */ 9027);
/* harmony import */ var _spider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spider.component.scss?ngResource */ 1167);
/* harmony import */ var _spider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let SpiderComponent = class SpiderComponent {
  constructor() {}
  ngOnInit() {}
};
SpiderComponent.ctorParameters = () => [];
SpiderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-spider',
  template: _spider_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_spider_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SpiderComponent);


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 2403);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 3965);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let HomeComponent = class HomeComponent {};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomeComponent);


/***/ }),

/***/ 7981:
/*!*******************************************************************!*\
  !*** ./src/app/components/modal-dialog/modal-dialog.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogModel": () => (/* binding */ DialogModel),
/* harmony export */   "ModalDialogComponent": () => (/* binding */ ModalDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _modal_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-dialog.component.html?ngResource */ 3826);
/* harmony import */ var _modal_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-dialog.component.scss?ngResource */ 1733);
/* harmony import */ var _modal_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);





class DialogModel {
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
}
let ModalDialogComponent = class ModalDialogComponent {
  constructor(dialog, data) {
    this.dialog = dialog;
    this.data = data;
  }
  ngOnInit() {
    this.title = this.data.title;
    this.message = this.data.message;
    this.buttons = this.data.opts.buttons || [{
      title: 'OK'
    }];
  }
  onPress(action) {
    this.dialog.close(action);
  }
};
ModalDialogComponent.ctorParameters = () => [{
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef
}, {
  type: DialogModel,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
    args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA]
  }]
}];
ModalDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-modal-dialog',
  template: _modal_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_modal_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ModalDialogComponent);


/***/ }),

/***/ 1663:
/*!************************************!*\
  !*** ./src/app/enum/card.state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardState": () => (/* binding */ CardState)
/* harmony export */ });
var CardState;
(function (CardState) {
  CardState[CardState["Down"] = 0] = "Down";
  CardState[CardState["Up"] = 1] = "Up";
})(CardState || (CardState = {}));

/***/ }),

/***/ 9312:
/*!***********************************!*\
  !*** ./src/app/enum/draw.from.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrawFrom": () => (/* binding */ DrawFrom)
/* harmony export */ });
var DrawFrom;
(function (DrawFrom) {
  DrawFrom[DrawFrom["Bottom"] = 1] = "Bottom";
  DrawFrom[DrawFrom["Top"] = -1] = "Top";
})(DrawFrom || (DrawFrom = {}));

/***/ }),

/***/ 5570:
/*!***************************************************!*\
  !*** ./src/app/enum/facecards/face.card.color.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceCardColor": () => (/* binding */ FaceCardColor)
/* harmony export */ });
var FaceCardColor;
(function (FaceCardColor) {
  FaceCardColor[FaceCardColor["Black"] = 0] = "Black";
  FaceCardColor[FaceCardColor["Red"] = 1] = "Red";
})(FaceCardColor || (FaceCardColor = {}));

/***/ }),

/***/ 8219:
/*!**************************************************!*\
  !*** ./src/app/enum/facecards/face.card.name.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceCardName": () => (/* binding */ FaceCardName)
/* harmony export */ });
var FaceCardName;
(function (FaceCardName) {
  FaceCardName[FaceCardName["Ace"] = 1] = "Ace";
  FaceCardName[FaceCardName["Two"] = 2] = "Two";
  FaceCardName[FaceCardName["Three"] = 3] = "Three";
  FaceCardName[FaceCardName["Four"] = 4] = "Four";
  FaceCardName[FaceCardName["Five"] = 5] = "Five";
  FaceCardName[FaceCardName["Six"] = 6] = "Six";
  FaceCardName[FaceCardName["Seven"] = 7] = "Seven";
  FaceCardName[FaceCardName["Eight"] = 8] = "Eight";
  FaceCardName[FaceCardName["Nine"] = 9] = "Nine";
  FaceCardName[FaceCardName["Ten"] = 10] = "Ten";
  FaceCardName[FaceCardName["Jack"] = 11] = "Jack";
  FaceCardName[FaceCardName["Queen"] = 12] = "Queen";
  FaceCardName[FaceCardName["King"] = 13] = "King";
  FaceCardName[FaceCardName["Joker"] = 14] = "Joker";
})(FaceCardName || (FaceCardName = {}));

/***/ }),

/***/ 9457:
/*!**************************************************!*\
  !*** ./src/app/enum/facecards/face.card.suit.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceCardSuit": () => (/* binding */ FaceCardSuit)
/* harmony export */ });
var FaceCardSuit;
(function (FaceCardSuit) {
  FaceCardSuit[FaceCardSuit["Clubs"] = 0] = "Clubs";
  FaceCardSuit[FaceCardSuit["Hearts"] = 1] = "Hearts";
  FaceCardSuit[FaceCardSuit["Spades"] = 2] = "Spades";
  FaceCardSuit[FaceCardSuit["Diamonds"] = 3] = "Diamonds";
  FaceCardSuit[FaceCardSuit["Joker"] = 4] = "Joker";
})(FaceCardSuit || (FaceCardSuit = {}));

/***/ }),

/***/ 4970:
/*!*****************************************!*\
  !*** ./src/app/enum/facecards/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceCardColor": () => (/* reexport safe */ _face_card_color__WEBPACK_IMPORTED_MODULE_0__.FaceCardColor),
/* harmony export */   "FaceCardName": () => (/* reexport safe */ _face_card_name__WEBPACK_IMPORTED_MODULE_1__.FaceCardName),
/* harmony export */   "FaceCardSuit": () => (/* reexport safe */ _face_card_suit__WEBPACK_IMPORTED_MODULE_2__.FaceCardSuit)
/* harmony export */ });
/* harmony import */ var _face_card_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face.card.color */ 5570);
/* harmony import */ var _face_card_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face.card.name */ 8219);
/* harmony import */ var _face_card_suit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./face.card.suit */ 9457);





/***/ }),

/***/ 2209:
/*!*******************************!*\
  !*** ./src/app/enum/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardState": () => (/* reexport safe */ _card_state__WEBPACK_IMPORTED_MODULE_0__.CardState),
/* harmony export */   "DrawFrom": () => (/* reexport safe */ _draw_from__WEBPACK_IMPORTED_MODULE_1__.DrawFrom)
/* harmony export */ });
/* harmony import */ var _card_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.state */ 1663);
/* harmony import */ var _draw_from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw.from */ 9312);




/***/ }),

/***/ 5566:
/*!********************************!*\
  !*** ./src/app/models/card.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);

class Card {
  constructor(ids, style) {
    this.ids = ids;
    this.style = style;
    this.setState = state => {
      this.style.state = state;
    };
    this.getPile = () => {
      return this.pile;
    };
    this.setPile = pile => {
      if (this.pile?.includes(this.ids.deckId)) {
        this.pile.remove(this);
      }
      this.pile = pile;
      this.pile?.add(this);
    };
    this.flip = () => {
      this.setState(this.style.state === 0 ? 1 : 0);
    };
    this.toString = () => this.ids.fullname;
  }
  get imagePath() {
    return this.style.state === src_app_enum__WEBPACK_IMPORTED_MODULE_0__.CardState.Up ? this.style.images.front : this.style.images.back;
  }
}

/***/ }),

/***/ 7833:
/*!****************************************!*\
  !*** ./src/app/models/game.history.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardRecord": () => (/* binding */ cardRecord),
/* harmony export */   "moveHistory": () => (/* binding */ moveHistory)
/* harmony export */ });
const cardRecord = (pile, card) => ({
  deckId: card.ids.deckId,
  style: {
    ...card.style
  },
  pile
});
const moveHistory = (pile, ...cards) => ({
  moves: (cards || []).map(x => cardRecord(pile, x))
});

/***/ }),

/***/ 3564:
/*!********************************************!*\
  !*** ./src/app/models/piles/decks/deck.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deck": () => (/* binding */ Deck)
/* harmony export */ });
/* harmony import */ var src_app_utils_guid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/utils/guid */ 5287);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ 7995);


class Deck extends ___WEBPACK_IMPORTED_MODULE_1__.Pile {
  constructor() {
    super(...arguments);
    this.backImg = Deck.defaultBackImg;
    this.setBackImg = back => {
      this.cards.forEach(x => x.style.images.back = back || Deck.defaultBackImg);
    };
    this.shuffle = count => {
      count = Math.max(count || 1, 1);
      for (let c = 0; c < count; c++) {
        const cards = this.cards.slice(0).map(x => ({
          guid: src_app_utils_guid__WEBPACK_IMPORTED_MODULE_0__.Guid.newGuid(),
          card: x
        })).sort((a, b) => a.guid.localeCompare(b.guid)).map(x => x.card);
        this.cards.splice(0, this.cards.length, ...cards);
      }
      return this.cards;
    };
  }
}
Deck.defaultBackImg = 'b2fv';

/***/ }),

/***/ 2994:
/*!**************************************************!*\
  !*** ./src/app/models/piles/decks/face.cards.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceCards": () => (/* binding */ FaceCards)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);
/* harmony import */ var src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enum/facecards */ 4970);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../card */ 5566);
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deck */ 3564);




const facecards = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'cj', 'cq', 'ck', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'hj', 'hq', 'hk', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 'sj', 'sq', 'sk', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'dj', 'dq', 'dk'];
const jokers = {
  [src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardColor.Black]: 'jb',
  [src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardColor.Red]: 'jr'
};
const buildCard = (name, deckId, backImg) => {
  const faceId = deckId < 52 ? deckId % 13 + 1 : src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardName.Joker;
  const cardname = faceId < 14 ? faceId : src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardName.Joker;
  const cardsuit = deckId < 52 ? Math.floor(deckId / 13) : src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardSuit.Joker;
  let cardcolor = cardsuit % 2;
  if (cardname === src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardName.Joker && cardcolor === src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardColor.Black && name === 'jr') {
    cardcolor = src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardColor.Red;
  }
  const fullname = (faceId < 14 ? `${src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardName[cardname]} of` : src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardColor[cardcolor]) + ` ${src_app_enum_facecards__WEBPACK_IMPORTED_MODULE_1__.FaceCardSuit[cardsuit]}`;
  const ids = {
    name,
    deckId,
    faceId,
    fullname
  };
  const style = {
    name: cardname,
    suit: cardsuit,
    color: cardcolor,
    state: src_app_enum__WEBPACK_IMPORTED_MODULE_0__.CardState.Down,
    images: {
      front: `assets/cards/face/${name}.png`,
      back: `assets/cards/back/${backImg || _deck__WEBPACK_IMPORTED_MODULE_3__.Deck.defaultBackImg}.png`
    }
  };
  return new _card__WEBPACK_IMPORTED_MODULE_2__.Card(ids, style);
};
class FaceCards extends _deck__WEBPACK_IMPORTED_MODULE_3__.Deck {
  constructor(backImg, jokerCount) {
    super(facecards.map((name, deckid) => buildCard(name, deckid, backImg)));
    this.addJoker = color => {
      if (this.includes(jokers[color])) {
        return;
      }
      this.add(buildCard(jokers[color], this.cards.length, this.backImg));
    };
    this.removeJoker = color => {
      this.remove(this.find(jokers[color]));
    };
    this.backImg = backImg || _deck__WEBPACK_IMPORTED_MODULE_3__.Deck.defaultBackImg;
    jokerCount = Math.max(jokerCount || 0, 0);
    for (let i = 0; i < jokerCount; i++) {
      this.addJoker(i % 2);
    }
  }
}

/***/ }),

/***/ 869:
/*!*********************************************!*\
  !*** ./src/app/models/piles/decks/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deck": () => (/* reexport safe */ _deck__WEBPACK_IMPORTED_MODULE_0__.Deck),
/* harmony export */   "FaceCards": () => (/* reexport safe */ _face_cards__WEBPACK_IMPORTED_MODULE_1__.FaceCards)
/* harmony export */ });
/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deck */ 3564);
/* harmony import */ var _face_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./face.cards */ 2994);




/***/ }),

/***/ 5069:
/*!*****************************************!*\
  !*** ./src/app/models/piles/discard.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Discard": () => (/* binding */ Discard)
/* harmony export */ });
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pile */ 8087);

class Discard extends _pile__WEBPACK_IMPORTED_MODULE_0__.Pile {}

/***/ }),

/***/ 2709:
/*!**************************************!*\
  !*** ./src/app/models/piles/draw.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Draw": () => (/* binding */ Draw)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pile */ 8087);


class Draw extends _pile__WEBPACK_IMPORTED_MODULE_1__.Pile {
  constructor() {
    super([], src_app_enum__WEBPACK_IMPORTED_MODULE_0__.DrawFrom.Bottom);
  }
}

/***/ }),

/***/ 4761:
/*!********************************************!*\
  !*** ./src/app/models/piles/foundation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Foundation": () => (/* binding */ Foundation)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pile */ 8087);


class Foundation extends _pile__WEBPACK_IMPORTED_MODULE_1__.Pile {
  constructor() {
    super([], src_app_enum__WEBPACK_IMPORTED_MODULE_0__.DrawFrom.Bottom);
  }
}

/***/ }),

/***/ 3335:
/*!**************************************!*\
  !*** ./src/app/models/piles/hand.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hand": () => (/* binding */ Hand)
/* harmony export */ });
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pile */ 8087);

class Hand extends _pile__WEBPACK_IMPORTED_MODULE_0__.Pile {}

/***/ }),

/***/ 7995:
/*!***************************************!*\
  !*** ./src/app/models/piles/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Discard": () => (/* reexport safe */ _discard__WEBPACK_IMPORTED_MODULE_0__.Discard),
/* harmony export */   "Draw": () => (/* reexport safe */ _draw__WEBPACK_IMPORTED_MODULE_1__.Draw),
/* harmony export */   "Foundation": () => (/* reexport safe */ _foundation__WEBPACK_IMPORTED_MODULE_2__.Foundation),
/* harmony export */   "Hand": () => (/* reexport safe */ _hand__WEBPACK_IMPORTED_MODULE_3__.Hand),
/* harmony export */   "Pile": () => (/* reexport safe */ _pile__WEBPACK_IMPORTED_MODULE_4__.Pile),
/* harmony export */   "Tableau": () => (/* reexport safe */ _tableau__WEBPACK_IMPORTED_MODULE_5__.Tableau)
/* harmony export */ });
/* harmony import */ var _discard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discard */ 5069);
/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw */ 2709);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ 4761);
/* harmony import */ var _hand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hand */ 3335);
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pile */ 8087);
/* harmony import */ var _tableau__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableau */ 151);








/***/ }),

/***/ 8087:
/*!**************************************!*\
  !*** ./src/app/models/piles/pile.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pile": () => (/* binding */ Pile)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);

class Pile {
  constructor(cards, drawFrom) {
    this.find = deckId => {
      return this.cards.find(x => x.ids.name === deckId || x.ids.deckId === deckId);
    };
    this.findIndex = deckId => {
      return this.cards.findIndex(x => x.ids.name === deckId || x.ids.deckId === deckId);
    };
    this.includes = deckId => {
      return !!this.find(deckId);
    };
    this.turn = (start, end) => {
      const cards = this.cards.slice(start, end);
      cards.forEach(x => x.flip());
      return cards;
    };
    this.add = card => {
      if (!card || this.includes(card.ids.deckId)) {
        return;
      }
      this.cards.push(card);
    };
    this.remove = card => {
      if (!this.includes(card.ids.deckId)) {
        return;
      }
      this.cards.remove(card);
    };
    this.move = (to_pile, start, count) => {
      start = (start || 0) * this.drawFrom;
      if (this.drawFrom < 1 && start === 0) {
        start = -(count || 1);
      }
      count = count || this.cards.length - start;
      let cards = this.cards.splice(start, count);
      if (to_pile.drawFrom !== this.drawFrom) {
        cards = cards.reverse();
      }
      cards.forEach(x => x.setPile(to_pile));
      return cards;
    };
    this.cards = cards || [];
    this.drawFrom = drawFrom || src_app_enum__WEBPACK_IMPORTED_MODULE_0__.DrawFrom.Top;
  }
}

/***/ }),

/***/ 151:
/*!*****************************************!*\
  !*** ./src/app/models/piles/tableau.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tableau": () => (/* binding */ Tableau)
/* harmony export */ });
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enum */ 2209);
/* harmony import */ var _pile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pile */ 8087);


class Tableau extends _pile__WEBPACK_IMPORTED_MODULE_1__.Pile {
  constructor() {
    super([], src_app_enum__WEBPACK_IMPORTED_MODULE_0__.DrawFrom.Bottom);
  }
}

/***/ }),

/***/ 6731:
/*!********************************!*\
  !*** ./src/app/models/time.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Time": () => (/* binding */ Time)
/* harmony export */ });
class Time {
  get hours() {
    return this.time.hours;
  }
  set hours(h) {
    if (h < 0 || h > 23) {
      throw new Error('Invalid hours.');
    }
    this.time.hours = h;
  }
  get minutes() {
    return this.time.minutes;
  }
  set minutes(m) {
    if (m < 0 || m > 59) {
      throw new Error('Invalid minutes.');
    }
    this.time.minutes = m;
  }
  get seconds() {
    return this.time.seconds || 0;
  }
  set seconds(s) {
    if (s && (s < 0 || s > 59)) {
      throw new Error('Invalid seconds.');
    }
    this.time.seconds = s;
  }
  get milliseconds() {
    return this.time.milliseconds || 0;
  }
  set milliseconds(ms) {
    if (ms && (ms < 0 || ms > 999)) {
      throw new Error('Invalid milliseconds.');
    }
    this.time.milliseconds = ms;
  }
  get timezone() {
    return this.time.timezone;
  }
  set timezone(tz) {
    // todo: verify timezone is valid.
    this.time.timezone = tz;
  }
  constructor(time) {
    this.time = {
      hours: 0,
      minutes: 0
    };
    this.toString = format => {
      const padnum = (num, len) => {
        num = num || 0;
        return ('0'.repeat(len) + num).slice(-len);
      };
      let str = `${padnum(this.hours, 2)}:${padnum(this.minutes, 2)}`;
      if (this.seconds || this.milliseconds) {
        str += `:${padnum(this.seconds, 2)}`;
      }
      if (this.milliseconds) {
        str += `.${padnum(this.milliseconds, 3)}`;
      }
      if (this.timezone) {
        str += ` ${this.timezone}`;
      }
      format = (format || '').toUpperCase();
      if (format) {
        str = '';
        for (let i = 0; i < format.length; i++) {
          const char = format[i];
          switch (char) {
            case 'H':
              let hr = `${this.hours}`;
              if (format[i + 1] === 'H') {
                hr = padnum(this.hours, 2);
                i++;
              }
              str += hr;
              break;
            case 'M':
              let min = `${this.minutes}`;
              if (format[i + 1] === 'M') {
                min = padnum(this.minutes, 2);
                i++;
              }
              str += min;
              break;
            case 'S':
              let sec = `${this.seconds || ''}`;
              if (format[i + 1] === 'S') {
                sec = padnum(this.seconds, 2);
                i++;
              }
              str += sec;
              break;
            case '.':
              str += padnum(this.milliseconds, 3);
              break;
            case 'T':
              str += this.timezone || '';
              break;
            case '\\':
              str += format[++i];
              break;
            default:
              str += char;
              break;
          }
        }
      }
      return str;
    };
    if (typeof time === 'string') {
      const regexp = /^(?<h>\d{1,2})\:(?<m>\d{1,2})\:(?<s>\d{1,2})(?:\.(?<ms>\d{1,3}))?$/g;
      const match = regexp.exec(time);
      if (match) {
        this.hours = +match.groups.h;
        this.minutes = +match.groups.m;
        this.seconds = +match.groups.s;
        this.milliseconds = +(match.groups.ms || '0');
      }
    } else {
      time = time || {
        hours: 0,
        minutes: 0
      };
      this.hours = time.hours;
      this.minutes = time.minutes;
      this.seconds = time.seconds;
      this.milliseconds = time.milliseconds;
    }
  }
}

/***/ }),

/***/ 4578:
/*!***********************************************!*\
  !*** ./src/app/modules/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/home/home.component */ 8263);
/* harmony import */ var _components_games_facecards_freeplay_freeplay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/games/facecards/freeplay/freeplay.component */ 7016);
/* harmony import */ var _components_games_facecards_solitaire_freecell_freecell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/games/facecards/solitaire/freecell/freecell.component */ 1573);
/* harmony import */ var _components_games_facecards_solitaire_klondike_klondike_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/games/facecards/solitaire/klondike/klondike.component */ 1338);
/* harmony import */ var _components_games_facecards_solitaire_spider_spider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/games/facecards/solitaire/spider/spider.component */ 2637);








const routes = [{
  path: 'games/solitaire/klondike',
  component: _components_games_facecards_solitaire_klondike_klondike_component__WEBPACK_IMPORTED_MODULE_3__.KlondikeComponent
}, {
  path: 'games/solitaire/spider',
  component: _components_games_facecards_solitaire_spider_spider_component__WEBPACK_IMPORTED_MODULE_4__.SpiderComponent
}, {
  path: 'games/solitaire/freecell',
  component: _components_games_facecards_solitaire_freecell_freecell_component__WEBPACK_IMPORTED_MODULE_2__.FreeCellComponent
}, {
  path: 'games/freeplay',
  component: _components_games_facecards_freeplay_freeplay_component__WEBPACK_IMPORTED_MODULE_1__.FreePlayComponent
}, {
  path: 'home',
  component: src_app_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'home'
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 5436:
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);



/* html example:
        <div [innerHtml]="html | safe: 'html'"></div>
   url example 1:
        <a [href]="url | safe: 'url'" />
   url example 2:
        <a [href]="files[key] | safe: 'url'" />
   resource url example 1:
        <a [href]="files[key].url | safe: 'resourceUrl'" />
   resource url example 2:
        <a [href]="files[key] | safe: 'resourceUrl'" />
*/
let SafePipe = class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(value, type) {
    if (value instanceof File) {
      value = window.URL.createObjectURL(value);
      type = type === 'url' || type === 'resourceUrl' ? type : 'url';
    }
    if (value && typeof value !== 'string') {
      throw new Error(`Invalid safe transformation of "${typeof value}" to "${type}"`);
    }
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style':
        return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script':
        return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl':
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
};
SafePipe.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer
}];
SafePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'safe'
})], SafePipe);


/***/ }),

/***/ 8017:
/*!************************************!*\
  !*** ./src/app/pipes/time.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimePipe": () => (/* binding */ TimePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_models_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/time */ 6731);



let TimePipe = class TimePipe {
  transform(value, format) {
    const time = new src_app_models_time__WEBPACK_IMPORTED_MODULE_0__.Time(value);
    return time.toString(format);
  }
};
TimePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Pipe)({
  name: 'time'
})], TimePipe);


/***/ }),

/***/ 5970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);




let AlertService = class AlertService {
  constructor(router) {
    this.router = router;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.keepAfterRouteChange = false;
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }
  getAlert() {
    return this.subject.asObservable();
  }
  success(message, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({
      type: 'success',
      text: message
    });
  }
  error(message, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({
      type: 'error',
      text: message
    });
  }
  clear() {
    this.subject.next();
  }
};
AlertService.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
}];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], AlertService);


/***/ }),

/***/ 4677:
/*!***************************************!*\
  !*** ./src/app/utils/array-helper.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": () => (/* binding */ flatten)
/* harmony export */ });
const flatten = self => {
  return self.reduce((next, curr) => {
    next.push(...curr);
    return next;
  }, []);
};

/***/ }),

/***/ 5287:
/*!*******************************!*\
  !*** ./src/app/utils/guid.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Guid": () => (/* binding */ Guid)
/* harmony export */ });
class Guid {
  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // tslint:disable: no-bitwise
      // tslint:disable-next-line: one-variable-per-declaration
      const r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
      // tslint:enable: no-bitwise
      return v.toString(16);
    });
  }
  static matchGuid(candidate) {
    return candidate.match(/[0-9A-F]{8}-(?:[0-9A-F]{4}-){3}[0-9A-F]{12}/gi);
  }
  static getGuid(candidate) {
    const match = this.matchGuid(candidate);
    return match && match[0];
  }
  static isGuid(candidate) {
    const guid = this.getGuid(candidate);
    return guid && candidate === guid;
  }
  static hasGuid(candidate) {
    const guid = this.getGuid(candidate);
    return !!guid;
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9595:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5317:
/*!******************************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".content {\n  width: 100%;\n  background-color: #b80000;\n  display: inline-block;\n  position: absolute;\n}\n\ndiv {\n  text-align: center;\n}\n\nh1 {\n  color: black;\n  margin: 0;\n  font-size: 16px;\n  font-weight: bolder;\n  float: none;\n}", "",{"version":3,"sources":["webpack://./src/app/components/alert/alert.component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,yBAAA;EACA,qBAAA;EACA,kBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,YAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;AACF","sourcesContent":[".content {\r\n  width: 100%;\r\n  background-color: #b80000;\r\n  display: inline-block;\r\n  position: absolute;\r\n}\r\n\r\ndiv {\r\n  text-align: center;\r\n}\r\n\r\nh1 {\r\n  color: black;\r\n  margin: 0;\r\n  font-size: 16px;\r\n  font-weight: bolder;\r\n  float: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1938:
/*!****************************************************************************************!*\
  !*** ./src/app/components/games/facecards/freeplay/freeplay.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5812:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/freecell/freecell.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1044:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/klondike/klondike.component.scss?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  overscroll-behavior: contain;\n  background-color: #34A249;\n}\n\n.cdk-drag-preview.tableau-drag-preview {\n  display: flex;\n  flex-direction: column;\n}\n.cdk-drag-preview.tableau-drag-preview img:not(:first-child) {\n  margin-top: -100%;\n}\n\n.gametable {\n  height: 96.2vh;\n}\n.gametable p {\n  margin-left: 25px;\n}\n.gametable .buttons .startbutton {\n  margin-left: 11px;\n}\n.gametable .buttons .slider {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  margin-left: 5px;\n  top: 52px;\n}\n.gametable .buttons .slider label {\n  font-size: 8px;\n  margin-bottom: -20px;\n}\n.gametable .buttons .undobutton {\n  margin-left: 5px;\n}\n.gametable .facecard {\n  min-width: 71px;\n  min-height: 96px;\n}\n.gametable .facecard .placeholder {\n  clear: both;\n}\n.gametable .upper {\n  display: flex;\n}\n.gametable .upper .deck {\n  min-width: 71px;\n  min-height: 96px;\n  padding: 5px 9px;\n  margin: 2px 2px 5px 2px;\n}\n.gametable .upper .deck .facecard {\n  position: absolute;\n}\n.gametable .upper .draw {\n  min-width: 71px;\n  min-height: 96px;\n  padding: 5px 9px;\n  margin: 2px 2px 5px 2px;\n}\n.gametable .upper .draw .facecard {\n  position: absolute;\n}\n.gametable .upper .foundations {\n  margin: 2px 100px;\n  display: flex;\n}\n.gametable .upper .foundations .foundation {\n  min-width: 77px;\n  min-height: 102px;\n  margin: 2px;\n  padding: 2px;\n}\n.gametable .upper .foundations .foundation .facecard {\n  position: absolute;\n}\n.gametable .tableaus {\n  margin: 2px 7px;\n  display: flex;\n}\n.gametable .tableaus .tableau {\n  min-width: 77px;\n  min-height: 102px;\n  margin: 2px;\n  padding: 2px;\n  display: flex;\n  flex-direction: column;\n}\n.gametable .tableaus .tableau .cdk-drag-placeholder {\n  visibility: hidden;\n  display: none !important;\n}\n.gametable .tableaus .tableau .facecard:not(:first-child) {\n  margin-top: -100%;\n}", "",{"version":3,"sources":["webpack://./src/app/components/games/facecards/solitaire/klondike/klondike.component.scss"],"names":[],"mappings":"AAAA;EACI,4BAAA;EACA,yBAAA;AACJ;;AAEA;EACI,aAAA;EACA,sBAAA;AACJ;AACI;EACI,iBAAA;AACR;;AAGA;EACI,cAAA;AAAJ;AAEI;EACI,iBAAA;AAAR;AAIQ;EACI,iBAAA;AAFZ;AAIQ;EACI,oBAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAFZ;AAGY;EACI,cAAA;EACA,oBAAA;AADhB;AAIQ;EACI,gBAAA;AAFZ;AAMI;EACI,eAAA;EACA,gBAAA;AAJR;AAMQ;EACI,WAAA;AAJZ;AAQI;EACI,aAAA;AANR;AAQQ;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;AANZ;AAQY;EACI,kBAAA;AANhB;AAUQ;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,uBAAA;AARZ;AAUY;EACI,kBAAA;AARhB;AAYQ;EACI,iBAAA;EACA,aAAA;AAVZ;AAYY;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;AAVhB;AAYgB;EACI,kBAAA;AAVpB;AAgBI;EACI,eAAA;EACA,aAAA;AAdR;AAgBQ;EACI,eAAA;EACA,iBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;AAdZ;AAgBY;EACI,kBAAA;EACA,wBAAA;AAdhB;AAiBY;EACI,iBAAA;AAfhB","sourcesContent":["body {\r\n    overscroll-behavior: contain;\r\n    background-color: #34A249;\r\n}\r\n\r\n.cdk-drag-preview.tableau-drag-preview {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    img:not(:first-child) {\r\n        margin-top: -100%;\r\n    }\r\n}\r\n\r\n.gametable {\r\n    height: 96.2vh;\r\n\r\n    p {\r\n        margin-left: 25px;\r\n    }\r\n\r\n    .buttons {\r\n        .startbutton {\r\n            margin-left: 11px;\r\n        }\r\n        .slider {\r\n            display: inline-flex;\r\n            flex-direction: column;\r\n            align-items: center;\r\n            position: absolute;\r\n            margin-left: 5px;\r\n            top: 52px;\r\n            label {\r\n                font-size: 8px;\r\n                margin-bottom: -20px;\r\n            }\r\n        }\r\n        .undobutton {\r\n            margin-left: 5px;\r\n        }\r\n    }\r\n\r\n    .facecard {\r\n        min-width: 71px;\r\n        min-height: 96px;\r\n\r\n        .placeholder {\r\n            clear: both;\r\n        }\r\n    }\r\n\r\n    .upper {\r\n        display: flex;\r\n\r\n        .deck {\r\n            min-width: 71px;\r\n            min-height: 96px;\r\n            padding: 5px 9px;\r\n            margin: 2px 2px 5px 2px;\r\n\r\n            .facecard {\r\n                position: absolute;\r\n            }\r\n        }\r\n\r\n        .draw {\r\n            min-width: 71px;\r\n            min-height: 96px;\r\n            padding: 5px 9px;\r\n            margin: 2px 2px 5px 2px;\r\n\r\n            .facecard {\r\n                position: absolute;\r\n            }\r\n        }\r\n\r\n        .foundations {\r\n            margin: 2px 100px;\r\n            display: flex;\r\n\r\n            .foundation {\r\n                min-width: 77px;\r\n                min-height: 102px;\r\n                margin: 2px;\r\n                padding: 2px;\r\n\r\n                .facecard {\r\n                    position: absolute;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .tableaus {\r\n        margin: 2px 7px;\r\n        display: flex;\r\n\r\n        .tableau {\r\n            min-width: 77px;\r\n            min-height: 102px;\r\n            margin: 2px;\r\n            padding: 2px;\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            .cdk-drag-placeholder {\r\n                visibility: hidden;\r\n                display: none !important;\r\n            }\r\n\r\n            .facecard:not(:first-child) {\r\n                margin-top: -100%;\r\n            }\r\n        }\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1167:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/spider/spider.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3965:
/*!****************************************************************!*\
  !*** ./src/app/components/home/home.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1733:
/*!********************************************************************************!*\
  !*** ./src/app/components/modal-dialog/modal-dialog.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 9579);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 931);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- the application -->\r\n<div class=\"main-container\">\r\n  <div class=\"content-container\">\r\n    <router-outlet id=\"rootOutlet\"></router-outlet>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 3173:
/*!******************************************************************!*\
  !*** ./src/app/components/alert/alert.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <div class=\"content\" *ngIf=\"message | async\">\r\n    <div [ngClass]=\"message.cssClass\">{{message.text}}</div>\r\n</div> -->";

/***/ }),

/***/ 6063:
/*!****************************************************************************************!*\
  !*** ./src/app/components/games/facecards/freeplay/freeplay.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>freeplay works!</p>\r\n";

/***/ }),

/***/ 84:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/freecell/freecell.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>freecell works!</p>\r\n";

/***/ }),

/***/ 4988:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/klondike/klondike.component.html?ngResource ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"gametable\">\r\n    <p>Klondike Solitaire</p>\r\n    <div class=\"buttons\">\r\n        <button class=\"startbutton\" (click)=\"startGame()\">New Game</button>\r\n        <button class=\"undobutton\" [disabled]=\"history.records.length < 1\" (click)=\"undo()\">Undo</button>\r\n        <!-- <div class=\"slider\">\r\n            <label>Draw Count</label>\r\n            <mat-slider aria-label=\"Draw Count\" min=\"1\" max=\"3\" thumbLabel tickInterval=\"1\" [(value)]=\"drawCount\">\r\n            </mat-slider>\r\n        </div> -->\r\n    </div>\r\n    <ng-container *ngIf=\"deck?.cards\" cdkDropListGroup>\r\n        <span class=\"upper\">\r\n            <div class=\"deck\" (click)=\"doDraw()\">\r\n                <img src=\"assets/cards/back/b1fv.png\" style=\"position: absolute; opacity: .2;\" draggable=\"false\">\r\n                <ng-container *ngFor=\"let card of deck.cards\">\r\n                    <div class=\"facecard\">\r\n                        <img [src]=\"card.imagePath\" [title]=\"card.ids.fullname\" draggable=\"false\">\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n\r\n            <div class=\"draw\" cdkDropList [cdkDropListData]=\"draw.cards\" cdkDropListSortingDisabled\r\n                [cdkDropListSortPredicate]=\"canSort\" [cdkDropListEnterPredicate]=\"noDrop\">\r\n                <img src=\"assets/cards/back/b1fv.png\" style=\"position: absolute; opacity: .2;\" draggable=\"false\">\r\n                <ng-container *ngFor=\"let card of draw.cards\">\r\n                    <div class=\"facecard\" cdkDrag [cdkDragData]=\"card\" (dblclick)=\"dblClick(card)\">\r\n                        <div class=\"placeholder\" *cdkDragPlaceholder></div>\r\n                        <img [src]=\"card.imagePath\" [title]=\"card.ids.fullname\" draggable=\"false\">\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n\r\n            <div class=\"foundations\">\r\n                <ng-container *ngFor=\"let foundation of foundations; let i = index;\">\r\n                    <div class=\"foundation\" [attr.pile]=\"'foundations' + i\" cdkDropList\r\n                        [cdkDropListData]=\"foundations[i].cards\" (cdkDropListDropped)=\"onDrop($event)\"\r\n                        cdkDropListSortingDisabled [cdkDropListSortPredicate]=\"canSort\"\r\n                        [cdkDropListEnterPredicate]=\"foundationDrop\">\r\n                        <img src=\"assets/cards/back/b1fv.png\" style=\"position: absolute; opacity: .2;\"\r\n                            draggable=\"false\">\r\n                        <ng-container *ngFor=\"let card of foundations[i].cards\">\r\n                            <div class=\"facecard\" cdkDrag [cdkDragData]=\"card\">\r\n                                <img [src]=\"card.imagePath\" [title]=\"card.ids.fullname\" draggable=\"false\">\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </span>\r\n\r\n        <div class=\"tableaus\">\r\n            <ng-container *ngFor=\"let tableau of tableaus; let i = index;\">\r\n                <div class=\"tableau\" [attr.pile]=\"'tableaus' + i\" cdkDropList [cdkDropListData]=\"tableaus[i].cards\"\r\n                    (cdkDropListDropped)=\"onDrop($event)\" cdkDropListSortingDisabled\r\n                    [cdkDropListSortPredicate]=\"canSort\" [cdkDropListEnterPredicate]=\"tableauDrop\">\r\n                    <ng-container *ngFor=\"let card of tableaus[i].cards\">\r\n                        <div class=\"facecard\" cdkDrag [cdkDragData]=\"card\" [cdkDragDisabled]=\"!canMove(card)\"\r\n                            (cdkDragStarted)=\"onDragStart($event)\" (dblclick)=\"dblClick(card)\">\r\n                            <div class=\"tableau-drag-preview\" *cdkDragPreview>\r\n                                <ng-container *ngFor=\"let drag of dragging\">\r\n                                    <img [src]=\"drag.imagePath\" />\r\n                                </ng-container>\r\n                            </div>\r\n                            <div class=\"placeholder\" *cdkDragPlaceholder></div>\r\n                            <img [src]=\"card.imagePath\" [title]=\"card.ids.fullname\" draggable=\"false\"\r\n                                [hidden]=\"dragging.includes(card)\">\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <p><a href=\"https://github.com/pinndulum/ngCardGames\" target=\"_blank\">view the source code on github</a></p>\r\n    <p>\r\n        With 52 cards in a deck, the total possible combinations of shuffled cards would equal <i>52!</i> (52 factorial\r\n        or 52 x\r\n        51 x 50\r\n        x 49...), or <i>8.06e+67</i>. This is a MASIVE number, so massive that most people would have a horrible time\r\n        understanding the\r\n        sheer and utter enormity of it. Here is one explanation.</p>\r\n    <p>\r\n        Given <b>500 Billion galaxies</b> in the universe with <b>200 Billion solar systems</b> in each galaxy and <b>1\r\n            Billion planets</b>\r\n        in each\r\n        solar system and <b>10 Billion sentient beings</b> on each planet; If it were possible for every one of those\r\n        beings\r\n        to\r\n        shuffle cards in pure random fashion <b>1 Million times per second</b> since the <b>BEGINNING OF TIME</b>, every\r\n        possible\r\n        combination\r\n        of shuffled cards would <b>still have not been found</b>!</p>\r\n    <p>\r\n        It should be noted that these numbers are hypothetical and are not accurate, except for the number of solar\r\n        systems and\r\n        galaxies in the universe. Obviously, there are NOT 1 billion planets in every solar system. It is also obvious\r\n        that\r\n        every planet does not contain 10 billion people.</p>\r\n    <p>\r\n        Corrected numbers (or science's best estimates) on average, every star has at least 1 planet, to be more than\r\n        fair we’ll\r\n        go ahead and assume 2 planets per solar system. For this thought experiment let’s just simply ignore that each\r\n        of those\r\n        planets can’t possibly be inhabited and go on believing that there are in fact 10 Billion people on each world.\r\n        We’ll\r\n        also be assuming that an average human can shuffle a deck of cards in approximately 5 seconds and so can our\r\n        imaginary\r\n        life forms.</p>\r\n    <p>\r\n        That would be about <i>1.58e+50</i> total card shuffles since the beginning of time. In actuality this\r\n        represents\r\n        <i>1/50,800,000,000,000,000,000th</i> of 52!. So, the prior explanation is <i>50 Quintilian times more than</i>\r\n        the quote\r\n        scientifically corrected numbers.\r\n    </p>\r\n\r\n</div>";

/***/ }),

/***/ 9027:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/games/facecards/solitaire/spider/spider.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>spider works!</p>\r\n";

/***/ }),

/***/ 2403:
/*!****************************************************************!*\
  !*** ./src/app/components/home/home.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-klondike></app-klondike>";

/***/ }),

/***/ 3826:
/*!********************************************************************************!*\
  !*** ./src/app/components/modal-dialog/modal-dialog.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"header\">\r\n    <h1 mat-dialog-title>{{ title }}</h1>\r\n</div>\r\n<div mat-dialog-content>\r\n    <p class=\"dialog-message\" [innerHtml]=\"message | safe: 'html'\"></p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <ng-container *ngFor=\"let button of buttons\">\r\n        <button mat-button (click)=\"onPress(button.action || button.title)\">{{button.title}}</button>\r\n    </ng-container>\r\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map