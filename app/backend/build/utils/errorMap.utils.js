"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorMap {
    jobError = {
        type01: { code: 404, message: 'Job does not exist' },
        type02: { code: 409, message: 'Job with same title already registered' },
        type03: { code: 400, message: 'One or more "userIds" not found' },
        type04: { code: 500, message: 'Please contact the support team' },
    };
    activityError = {
        type01: { code: 404, message: 'Activity does not exist' },
        type02: { code: 409, message: 'Activity with same title already registered' },
        type03: { code: 400, message: 'One or more "userIds" not found' },
        type04: { code: 500, message: 'Please contact the support team' },
    };
    userError = {
        type01: { code: 404, message: 'User does not exist' },
        type02: { code: 409, message: 'User already registered' },
        type03: { code: 401, message: 'Unauthorized user' },
        type04: { code: 500, message: 'Please contact the support team' },
    };
    categoryError = {
        type01: { code: 404, message: 'Categoty not found' },
        type02: { code: 401, message: 'Unauthorized user' },
        type03: { code: 500, message: 'Please contact the support team' },
    };
    loginError = {
        type01: { code: 400, message: 'Invalid fields' },
        type02: { code: 401, message: 'Token not found' },
        type03: { code: 500, message: 'Please contact the support team' },
    };
}
exports.default = ErrorMap;
;
//# sourceMappingURL=errorMap.utils.js.map