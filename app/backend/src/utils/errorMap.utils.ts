
export default class ErrorMap {

  public jobError = {
    type01: { code: 404, message: 'Job does not exist' },
    type02: { code: 409, message: 'Job with same title already registered' },
    type03: { code: 400, message: 'One or more "userIds" not found' },
    type04: { code: 500, message: 'Please contact the support team' },
  };

  public activityError = {
    type01: { code: 404, message: 'Activity does not exist' },
    type02: { code: 409, message: 'Activity with same title already registered' },
    type03: { code: 400, message: 'One or more "userIds" not found' },
    type04: { code: 500, message: 'Please contact the support team' },
  };
  
  public userError = {
    type01: { code: 404, message: 'User does not exist' },
    type02: { code: 409, message: 'User already registered' },
    type03: { code: 401, message: 'Unauthorized user' }, 
    type04: { code: 500, message: 'Please contact the support team' },
  };
  
  public categoryError = {
    type01: { code: 404, message: 'Categoty not found' },
    type02: { code: 401, message: 'Unauthorized user' }, 
    type03: { code: 500, message: 'Please contact the support team' },
  };
  
  public loginError = {
    type01: { code: 400, message: 'Invalid fields' },
    type02: { code: 401, message: 'Token not found' }, 
    type03: { code: 500, message: 'Please contact the support team' },
  };

};

