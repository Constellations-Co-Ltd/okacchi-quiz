// 関数に戻り値がない場合に指定する型と何も返さない型
function returnNoting() : {
  return
}
function error(message: string) {
  throw new Error(message)
}
