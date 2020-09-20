let i = 0;
let member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25),
  ['memo' + ++i]: '正規會員', 
  ['memo' + ++i]: '支部會長', 
  ['memo' + ++i]: '關東'
};

console.log(member);
