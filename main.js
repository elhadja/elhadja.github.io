(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/elhadjium/Bureau/projects/projectManager/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "3SYz":
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_sessionManager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sessionManager.service */ "m8Kp");
/* harmony import */ var src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/routing.service */ "sFxA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/slidemenu */ "3k5r");








function MenuBarComponent_p_menubar_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
function MenuBarComponent_p_menubar_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuBarComponent_p_menubar_0_ng_template_2_Template_img_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r4.toggle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-slideMenu", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r2.userItems)("popup", true);
} }
function MenuBarComponent_p_menubar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-menubar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuBarComponent_p_menubar_0_ng_template_1_Template, 1, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuBarComponent_p_menubar_0_ng_template_2_Template, 5, 2, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.items);
} }
class MenuBarComponent {
    constructor(router, sessionService, routingService) {
        this.router = router;
        this.sessionService = sessionService;
        this.routingService = routingService;
        this.items = [];
        this.userItems = [];
        this.isVisible = sessionService.getUserId() > 0;
        this.sessionService.userLoggedEmitter.subscribe((isUserLogged) => {
            this.isVisible = isUserLogged;
            this.initializeMenu();
        });
        this.sessionService.projectSelectedSubject.subscribe(() => {
            this.initializeMenu();
        });
    }
    ngOnInit() {
        this.initializeMenu();
    }
    initializeMenu() {
        this.items = [
            {
                label: 'Project',
                command: () => { this.routingService.gotoProjectComponent(); },
            },
            {
                label: 'User Stories',
                command: () => { this.routingService.gotoBacklogComponent(+this.sessionService.getProjectId()); },
                visible: this.isProjectSelected()
            },
            {
                label: 'Tasks',
                command: () => { this.routingService.gotoTaskComponent(+this.sessionService.getProjectId()); },
                visible: this.isProjectSelected()
            },
        ];
        this.userItems = [
            {
                label: 'Quitter',
                command: () => {
                    this.sessionService.closeSession();
                    this.routingService.gotoLoginComponent();
                }
            },
            {
                label: 'Profile',
                disabled: true,
            }
        ];
    }
    isProjectSelected() {
        return this.sessionService.getProjectId() > 0;
    }
}
MenuBarComponent.ɵfac = function MenuBarComponent_Factory(t) { return new (t || MenuBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_sessionManager_service__WEBPACK_IMPORTED_MODULE_2__["sessionManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"])); };
MenuBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuBarComponent, selectors: [["app-menu-bar"]], decls: 1, vars: 1, consts: [[3, "model", 4, "ngIf"], [3, "model"], ["pTemplate", "start"], ["pTemplate", "end"], ["src", "assets/images/project.png", "width", "40", "height", "40", "alt", ""], ["src", "assets/images/compte.png", "width", "30", "height", "30", "alt", "", "type", "button", "label", "Show", 3, "click"], ["btn", ""], [3, "model", "popup"], ["menu", ""]], template: function MenuBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MenuBarComponent_p_menubar_0_Template, 3, 1, "p-menubar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], primeng_menubar__WEBPACK_IMPORTED_MODULE_5__["Menubar"], primeng_api__WEBPACK_IMPORTED_MODULE_6__["PrimeTemplate"], primeng_slidemenu__WEBPACK_IMPORTED_MODULE_7__["SlideMenu"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LWJhci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "5j9j":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/message.service */ "tZre");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1, a2) { return { "alert-success": a0, "alert-warning": a1, "alert-danger": a2 }; };
function MessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessageComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.messageType === 0, ctx_r0.messageType === 1, ctx_r0.messageType === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
} }
class MessageComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.message = undefined;
        this.messageType = 0;
        this.messageSubscription = this.messageService.messageSubject.subscribe((message => {
            this.message = message;
            this.messageType = messageService.getCurrentMessageType();
            const timeout = this.messageType === 0 ? 5000 : 10000;
            setTimeout(() => {
                this.hide();
            }, timeout);
        }));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.messageSubscription.unsubscribe();
    }
    hide() {
        this.message = undefined;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 1, vars: 1, consts: [["class", "alert d-flex justify-content-between", 3, "ngClass", 4, "ngIf"], [1, "alert", "d-flex", "justify-content-between", 3, "ngClass"], [1, "p-2"], ["type", "button", "aria-label", "Close", 1, "close", "p-2", "ml-auto", 3, "click"], ["aria-hidden", "true"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessageComponent_div_0_Template, 6, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".alert[_ngcontent-%COMP%] {\n    padding-right: 0;\n    max-width: 25%;\n    position: fixed;\n    right: 5px;\n    top: 5px;\n    z-index: 9999999;\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n    border-left: 5px red solid;\n}\n\n.alert-success[_ngcontent-%COMP%] {\n    border-left: 5px green solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6Im1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbiAgICB6LWluZGV4OiA5OTk5OTk5O1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHJlZCBzb2xpZDtcbn1cblxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0OiA1cHggZ3JlZW4gc29saWQ7XG59Il19 */"] });


/***/ }),

/***/ "8SOQ":
/*!***************************************!*\
  !*** ./src/app/common/PMConstants.ts ***!
  \***************************************/
/*! exports provided: PMConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PMConstants", function() { return PMConstants; });
class PMConstants {
}
// Auth module URI
PMConstants.AUTHENTICATION_MODULE_BASE_URI = 'auth';
PMConstants.SIGNUP_URI = 'signup';
PMConstants.LOGIN_URI = 'login';
// Project module URI
PMConstants.PROJECT_MODULE_BASE_URI = 'project';
//ENUMERATIONS
PMConstants.USER_STORY_STATUS_CLOSED = 'CLOSED';
PMConstants.USER_STORY_STATUS_OPENED = 'OPENED';
PMConstants.USER_STORY_STATUS_IMPORTANCE_HIGHT = 'HIGHT';
PMConstants.USER_STORY_STATUS_IMPORTANCE_NORMAL = 'NORMAL';
PMConstants.USER_STORY_STATUS_IMPORTANCE_LOW = 'LOW';
PMConstants.TASK_STATUS_TODO = 'TODO';
PMConstants.TASK_STATUS_DOING = 'DOING';
PMConstants.TASK_STATUS_DONE = 'DONE';
PMConstants.SPRINT_STATUS_CREATED = 'CREATED';
PMConstants.SPRINT_STATUS_STARTED = 'STARTED';
PMConstants.SPRINT_STATUS_CLOSED = 'CLOSED';
// session keys
PMConstants.SESSION_USER_ID_KEY = "USER_ID";
PMConstants.SESSION_PROJECT_ID_KEY = "PROJECT_ID";
PMConstants.SESSION_TOKEN_ID_KEY = "TOKEN";


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F33o":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-4"], [1, "text-center"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "3SYz");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/message/message.component */ "5j9j");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'frontend';
        translate.setDefaultLang('fr');
        translate.use('en');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__["MenuBarComponent"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TCkw":
/*!**************************************!*\
  !*** ./src/app/PMApi/project.api.ts ***!
  \**************************************/
/*! exports provided: ProjectApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectApiService", function() { return ProjectApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api */ "w+Km");


class ProjectApiService {
    constructor(api) {
        this.api = api;
        this.baseURI = '/projects';
        this.backlog = 'backlog';
        this.userStories = 'user-stories';
        this.sprint = 'sprints';
    }
    getBacklogUserStories(projectId) {
        return this.api.get(this.baseURI + '/' + projectId + '/' + this.backlog + '/' + this.userStories);
    }
    addSprintToProject(projectId, input) {
        return this.api.post(this.baseURI + '/' + projectId + '/' + this.sprint, input);
    }
    getProjectSprints(projectId) {
        return this.api.get(this.baseURI + '/' + projectId + '/' + this.sprint);
    }
    addUserStoryToSprint(projectId, sprintId, input) {
        return this.api.post(this.baseURI + '/' + projectId + '/' + this.sprint + '/' + sprintId + '/' + this.userStories, input);
    }
    updateUserStory(projectId, userStoryId, input) {
        return this.api.put(this.baseURI + '/' + projectId + '/user-stories/' + userStoryId, input);
    }
    deleteUserStory(projectId, userStoryId) {
        return this.api.delete(this.baseURI + '/' + projectId + '/user-stories/' + userStoryId);
    }
    deleteSprint(projectId, sprintId) {
        return this.api.delete(this.baseURI + '/' + projectId + '/sprints/' + sprintId);
    }
    startSprint(projectId, sprintId, input) {
        return this.api.put(this.baseURI + '/' + projectId + '/sprints/' + sprintId + '/start', input);
    }
    terminateSprint(projectId, sprintId) {
        return this.api.put(this.baseURI + '/' + projectId + '/sprints/' + sprintId + '/terminate', null);
    }
    closeUserStories(projectId, userStoryId) {
        return this.api.put(this.baseURI + '/' + projectId + '/user-stories/' + userStoryId + '/close', null);
    }
    openUserStories(projectId, userStoryId) {
        return this.api.put(this.baseURI + '/' + projectId + '/user-stories/' + userStoryId + '/open', null);
    }
    createTask(projectId, input) {
        return this.api.post(this.baseURI + '/' + projectId + '/tasks', input);
    }
    getProjectUsers(projectId) {
        return this.api.get(this.baseURI + '/' + projectId + '/users');
    }
    deleteTasks(projectId, tasksIDs) {
        let taskIDsString = "";
        tasksIDs.forEach((id, index) => {
            taskIDsString += `${id}`;
            if (index < tasksIDs.length - 1) {
                taskIDsString += ",";
            }
        });
        return this.api.delete(this.baseURI + '/' + projectId + '/tasks/' + taskIDsString);
    }
    updateTask(projectId, taskId, input) {
        return this.api.put(this.baseURI + '/' + projectId + '/tasks/' + taskId, input);
    }
    setTaskStatus(projectId, taskId, status) {
        return this.api.put(this.baseURI + '/' + projectId + '/tasks/' + taskId + '/setStatus', status);
    }
    moveUserStoryFromSprintToBacklog(projectId, userStoryid) {
        return this.api.post(this.baseURI + '/' + projectId + '/backlog/user-stories/' + userStoryid, null);
    }
    moveUserStoryToSprint(projectId, userStoryid, sprintId) {
        return this.api.post(this.baseURI + '/' + projectId + '/sprints/' + sprintId + '/user-stories/' + userStoryid, null);
    }
}
ProjectApiService.ɵfac = function ProjectApiService_Factory(t) { return new (t || ProjectApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_Api__WEBPACK_IMPORTED_MODULE_1__["API"])); };
ProjectApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectApiService, factory: ProjectApiService.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/message/message.component */ "5j9j");
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/Api */ "w+Km");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/message.service */ "tZre");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_routeSecure_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/routeSecure.service */ "okO4");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _services_sessionManager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/sessionManager.service */ "m8Kp");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _PMApi_project_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PMApi/project.api */ "TCkw");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/menubar */ "b1Ni");
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ "3SYz");
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/routing.service */ "sFxA");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/slidemenu */ "3k5r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















const SERVICES = [_services_Api__WEBPACK_IMPORTED_MODULE_5__["API"],
    _services_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
    _services_routeSecure_service__WEBPACK_IMPORTED_MODULE_8__["RouteSecureService"],
    _services_sessionManager_service__WEBPACK_IMPORTED_MODULE_10__["sessionManagerService"],
    _PMApi_project_api__WEBPACK_IMPORTED_MODULE_13__["ProjectApiService"],
    _services_routing_service__WEBPACK_IMPORTED_MODULE_16__["RoutingService"]
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [...SERVICES], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            primeng_menubar__WEBPACK_IMPORTED_MODULE_14__["MenubarModule"],
            primeng_api__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__["SlideMenuModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_message_message_component__WEBPACK_IMPORTED_MODULE_4__["MessageComponent"],
        _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
        _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_15__["MenuBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        primeng_menubar__WEBPACK_IMPORTED_MODULE_14__["MenubarModule"],
        primeng_api__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
        primeng_slidemenu__WEBPACK_IMPORTED_MODULE_18__["SlideMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"]] }); })();
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "m8Kp":
/*!****************************************************!*\
  !*** ./src/app/services/sessionManager.service.ts ***!
  \****************************************************/
/*! exports provided: sessionManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sessionManagerService", function() { return sessionManagerService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_PMConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/PMConstants */ "8SOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class sessionManagerService {
    constructor() {
        this.userLoggedEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.projectSelectedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.invalidId = -1;
    }
    setUserid(id) {
        localStorage.setItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].SESSION_USER_ID_KEY, `${id}`);
        this.userLoggedEmitter.next(true);
    }
    getUserId() {
        const id = localStorage.getItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].SESSION_USER_ID_KEY);
        return id != null ? +id : -1;
    }
    setProjectId(id) {
        localStorage.setItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].SESSION_PROJECT_ID_KEY, `${id}`);
        this.projectSelectedSubject.next();
    }
    getProjectId() {
        const id = localStorage.getItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].SESSION_PROJECT_ID_KEY);
        return id != null ? +id : -1;
    }
    closeSession() {
        this.userLoggedEmitter.next(false);
        localStorage.clear();
    }
}
sessionManagerService.ɵfac = function sessionManagerService_Factory(t) { return new (t || sessionManagerService)(); };
sessionManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: sessionManagerService, factory: sessionManagerService.ɵfac });


/***/ }),

/***/ "okO4":
/*!*************************************************!*\
  !*** ./src/app/services/routeSecure.service.ts ***!
  \*************************************************/
/*! exports provided: RouteSecureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteSecureService", function() { return RouteSecureService; });
/* harmony import */ var _common_PMConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/PMConstants */ "8SOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routing.service */ "sFxA");



class RouteSecureService {
    constructor(routingService) {
        this.routingService = routingService;
    }
    canActivate(route, state) {
        if (localStorage.getItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_0__["PMConstants"].SESSION_TOKEN_ID_KEY) == null) {
            this.routingService.gotoLoginComponent();
        }
        return true;
    }
}
RouteSecureService.ɵfac = function RouteSecureService_Factory(t) { return new (t || RouteSecureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_routing_service__WEBPACK_IMPORTED_MODULE_2__["RoutingService"])); };
RouteSecureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RouteSecureService, factory: RouteSecureService.ɵfac });


/***/ }),

/***/ "sFxA":
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _common_PMConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/PMConstants */ "8SOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class RoutingService {
    constructor(router) {
        this.router = router;
    }
    gotoBacklogComponent(projectId) {
        this.router.navigateByUrl('/project/backlog/' + projectId);
    }
    gotoLoginComponent() {
        this.router.navigate(['/' + _common_PMConstants__WEBPACK_IMPORTED_MODULE_0__["PMConstants"].AUTHENTICATION_MODULE_BASE_URI, _common_PMConstants__WEBPACK_IMPORTED_MODULE_0__["PMConstants"].LOGIN_URI]);
    }
    gotoProjectComponent() {
        this.router.navigate(["/" + _common_PMConstants__WEBPACK_IMPORTED_MODULE_0__["PMConstants"].PROJECT_MODULE_BASE_URI]);
    }
    gotoTaskComponent(projectId) {
        this.router.navigateByUrl('/project/task/' + projectId);
    }
    gotoSignupComponent() {
        this.router.navigateByUrl('/auth/signup');
    }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac });


/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageService {
    constructor() {
        this.messageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.messageType = -1;
    }
    showWarningMessage(message) {
        this.messageType = 1;
        this.showMessage(message);
    }
    showErrorMessage(message) {
        this.messageType = 2;
        this.showMessage(message);
    }
    showSuccessMessage(message) {
        this.messageType = 0;
        this.showMessage(message);
    }
    showMessage(message) {
        this.messageSubject.next(message);
    }
    getCurrentMessageType() {
        return this.messageType;
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_PMConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/PMConstants */ "8SOQ");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "F33o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | authentication-module-authentication-module-module */[__webpack_require__.e("default~authentication-module-authentication-module-module~project-project-module"), __webpack_require__.e("authentication-module-authentication-module-module")]).then(__webpack_require__.bind(null, /*! ./authentication-module/authentication-module.module */ "P3FM")).then(m => m.AuthenticationModuleModule)
    },
    {
        path: _common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].AUTHENTICATION_MODULE_BASE_URI,
        loadChildren: () => Promise.all(/*! import() | authentication-module-authentication-module-module */[__webpack_require__.e("default~authentication-module-authentication-module-module~project-project-module"), __webpack_require__.e("authentication-module-authentication-module-module")]).then(__webpack_require__.bind(null, /*! ./authentication-module/authentication-module.module */ "P3FM")).then(m => m.AuthenticationModuleModule)
    },
    {
        path: _common_PMConstants__WEBPACK_IMPORTED_MODULE_1__["PMConstants"].PROJECT_MODULE_BASE_URI,
        loadChildren: () => Promise.all(/*! import() | project-project-module */[__webpack_require__.e("default~authentication-module-authentication-module-module~project-project-module"), __webpack_require__.e("project-project-module")]).then(__webpack_require__.bind(null, /*! ./project/project.module */ "0k1G")).then(m => m.ProjectModule)
    },
    {
        path: 'notFound', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    },
    {
        path: '**',
        redirectTo: '/notFound'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w+Km":
/*!*********************************!*\
  !*** ./src/app/services/Api.ts ***!
  \*********************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_PMConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/PMConstants */ "8SOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");







class API {
    constructor(httpClient, messageService) {
        this.httpClient = httpClient;
        this.messageService = messageService;
        this.f = (error) => {
            if (error.status === 401 && !!error.error) {
                this.messageService.showErrorMessage(error.error.message);
            }
            else if (error.status === 500) {
                this.messageService.showErrorMessage("Internal server error, please contact an administrator");
            }
            else {
                this.messageService.showErrorMessage(error.error.message);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        };
        this.baseURI = "http://localhost:9090/pm-api";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept-Language': 'fr',
                'Authorization': ''
            })
        };
        let token = localStorage.getItem(_common_PMConstants__WEBPACK_IMPORTED_MODULE_3__["PMConstants"].SESSION_TOKEN_ID_KEY);
        if (token !== null) {
            this.setHttpOptions(token);
        }
    }
    postWithoutHeaders(uri, body) {
        return this.httpClient.post(this.baseURI + uri, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.f));
    }
    post(uri, body) {
        return this.httpClient.post(this.baseURI + uri, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.f));
    }
    put(uri, body) {
        return this.httpClient.put(this.baseURI + uri, body, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.f));
    }
    get(uri) {
        return this.httpClient.get(this.baseURI + uri, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.f));
    }
    delete(uri) {
        return this.httpClient.delete(this.baseURI + uri, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.f));
    }
    setHttpOptions(token) {
        var _a;
        this.httpOptions.headers = (_a = this.httpOptions.headers) === null || _a === void 0 ? void 0 : _a.set("Authorization", "Bearer " + token);
    }
}
API.ɵfac = function API_Factory(t) { return new (t || API)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
API.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: API, factory: API.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map