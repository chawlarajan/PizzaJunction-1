"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage_service_1 = require("./../../shared/services/storage.service");
var global_1 = require("./../../shared/components/globals/global");
var OrderSummaryComponent = (function () {
    function OrderSummaryComponent(storageService, globals) {
        this.storageService = storageService;
        this.globals = globals;
        this.deliveryFee = 0;
        this.clearCart = function () {
            this.storageService.clear();
            this.cartDetails = {};
            this.gstCharges = 0;
            this.deliveryFee = 0;
        };
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        this.cartDetails = this.storageService.read('cartItems');
        this.deliveryFee = 0;
    };
    ;
    return OrderSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OrderSummaryComponent.prototype, "cartDetails", void 0);
OrderSummaryComponent = __decorate([
    core_1.Component({
        selector: 'order-summary',
        templateUrl: './ordersummary.component.html',
        styles: ["\n        #divClearCart { cursor: pointer; }\n    "]
    }),
    __metadata("design:paramtypes", [storage_service_1.StorageService, global_1.Globals])
], OrderSummaryComponent);
exports.OrderSummaryComponent = OrderSummaryComponent;
//# sourceMappingURL=ordersummary.component.js.map