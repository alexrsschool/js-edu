/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
) {

    let knowProgramming = 800;
    let dontProgramming = 800 + 500;
    let priority = config[focus];

    if (knowsProgramming) return Math.ceil(knowProgramming / priority);
    else return Math.ceil(dontProgramming / priority);
};