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
exports.Persona = void 0;
var typeorm_1 = require("typeorm");
var Persona = /** @class */ (function () {
    function Persona() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ name: 'per_codigo' }),
        __metadata("design:type", Number)
    ], Persona.prototype, "codigo", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_nombre' }),
        __metadata("design:type", String)
    ], Persona.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_documento' }),
        __metadata("design:type", String)
    ], Persona.prototype, "documento", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_telefono' }),
        __metadata("design:type", String)
    ], Persona.prototype, "telefono", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_celular' }),
        __metadata("design:type", String)
    ], Persona.prototype, "celular", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_direccion' }),
        __metadata("design:type", String)
    ], Persona.prototype, "direccion", void 0);
    __decorate([
        typeorm_1.Column({ name: 'per_obs' }),
        __metadata("design:type", String)
    ], Persona.prototype, "observacion", void 0);
    Persona = __decorate([
        typeorm_1.Entity()
    ], Persona);
    return Persona;
}());
exports.Persona = Persona;
