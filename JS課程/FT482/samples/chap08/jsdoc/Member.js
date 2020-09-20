/**
 * @constructor
 * @classdesc 管理成員的相關資訊
 * @param {string} firstName 姓
 * @param {string} lastName 名
 * @throws {Error} 缺少firstName或lastName
 * @author Yoshihiro Yamada
 * @version 1.0.0
 */
var Member = function(firstName, lastName){
  if (firstName === undefined || lastName === undefined) {
    throw new Error('firstNameかlastNameが足りません。');
  }
  this.firstName = firstName;
  this.lastName = lastName;
  
};

/**
 * 顯示成員相關的詳細資訊
 * @return {String} 成員的姓名
 * @deprecated 請改用{@link Member#toString}方法
 */
Member.prototype.getName = function() {
  return this.lastName + ' ' + this.firstName;
};

/**
 * 將Member類別的內容轉為字串
 * @return {String} 成員的姓名
 */
Member.prototype.toString = function() {
  return this.lastName + ' ' + this.firstName;
};
