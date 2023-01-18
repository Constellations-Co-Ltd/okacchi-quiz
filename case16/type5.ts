// intersection型 とユニオン型
// QUIZ,QUIZ2, QUIZ3はどんな型になるか
// ※ 実際に確認するのはNG。

type StringOrNumber = string | number;
type BooleanOrSymbol = boolean | symbol;

type QUIZ = StringOrNumber & BooleanOrSymbol;
type QUIZ2 = StringOrNumber | BooleanOrSymbol;

type Name = {
  firstName: string;
  lastName: string;
  option: string | number;
};

type Address = {
  prefecture: string;
  address: string;
  postalCode: number;
  option: number | boolean;
}
type QUIZ3 = Name & Address;
