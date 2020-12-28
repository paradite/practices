/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  command = command.replace(/\(al\)/g, 'al');
  command = command.replace(/\(\)/g, 'o');
  return command;
};
