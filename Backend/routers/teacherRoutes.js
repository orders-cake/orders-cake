const TeacherController = require('../controllers/TeacherController');
const TeacherRouter = require('express').Router();
const passport = require('passport');

// Method: POST
TeacherRouter.post('/register', TeacherController.createTeahcer);

// Method: GET
TeacherRouter.get(
    '/info',
    passport.authenticate('jwt', { session: false }),
    TeacherController.getinfoTeacher
);

TeacherRouter.get(
    '/all',
    passport.authenticate('jwt', { session: false }),
    TeacherController.getAllTeacher
);

TeacherRouter.get(
    '/search',
    passport.authenticate('jwt', { session: false }),
    TeacherController.getTeacherWithAllParams
);

// Method: PUT
TeacherRouter.put(
    '/update/:id',
    passport.authenticate('jwt', { session: false }),
    TeacherController.updateTeacher
);

// Method: DELETE
TeacherRouter.delete(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    TeacherController.deleteTeacher
);

module.exports = TeacherRouter;
