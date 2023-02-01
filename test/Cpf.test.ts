import Cpf from '../src/Cpf'

test('Deve validar um cpf', function () {
  const cpf = new Cpf('935.411.347-80');
  expect(cpf).toBeDefined();
});

test('Deve tentar validar um cpf invalido', function () {
  expect(() => new Cpf('123.456.789-99')).toThrowError(new Error('Invalid cpf'));
})

test('Deve tentar validar um cpf invalido com todos os digitos iguais', function () {
  expect(() => new Cpf('111.111.111-11')).toThrowError(new Error('Invalid cpf'));
})

test('Deve tentar validar um cpf invalido muito grande', function () {
  expect(() => new Cpf('123.456.789-9999')).toThrowError(new Error('Invalid cpf'));
})

test('Deve tentar validar um cpf invalido muito pequeno', function () {
  expect(() => new Cpf('123.456.')).toThrowError(new Error('Invalid cpf'));
})
