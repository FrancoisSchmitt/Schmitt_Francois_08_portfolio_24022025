import {
      USER_MAIN_DATA,
      COURSES_DATA,
      EXPERIMENT_DATA,
      PROJECT_DATA,
} from '../Mock/data';

/**
 * @param {*} user
 * @projectMainData it was a call api to get all project data
 * @coursesMainData it was a call api to get all courses data
 * @userMainData it was a call api to get all user data
 * @experimentMainData it was a call api to get all experiment data
 * @returns
 */

async function userMainData() {
      try {
            const user = USER_MAIN_DATA;
            return user;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function experimentMainData() {
      try {
            const experiment = EXPERIMENT_DATA;
            return experiment;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}

async function coursesMainData() {
      try {
            const courses = COURSES_DATA;
            return courses;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}
async function projectMainData(id) {
      try {
            const project = PROJECT_DATA;
            return project;
      } catch (error) {
            console.log('getMainInformation : ' + error);
      }
}

export { experimentMainData, userMainData, coursesMainData, projectMainData };
