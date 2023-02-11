import Coupon from "../../src/domain/entity/Coupon";

test('Deve criar um cupom válido', function(){
  const coupom = new Coupon('VALE20',20, new Date('2021-10-10'));
  const isExpired = coupom.isExpired(new Date('2021-09-10'));
  expect(isExpired).toBeFalsy();
})

test('Deve criar um cupom válido invalido', function(){
  const coupom = new Coupon('VALE20',20, new Date('2021-09-10'));
  const isExpired = coupom.isExpired(new Date('2021-10-10'));
  expect(isExpired).toBeTruthy();
})

test('Deve criar um cupom válido que nunc expira', function(){
  const coupom = new Coupon('VALE20',20);
  const isExpired = coupom.isExpired(new Date('2021-10-10'));
  expect(isExpired).toBeFalsy();
})