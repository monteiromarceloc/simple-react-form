import { fireEvent, render, screen } from '@testing-library/react';
import App from './pages/App';

test('render form', () => {
  render(<App />);

  const field1 = screen.getByPlaceholderText("Nome");
  const field2 = screen.getByPlaceholderText("Email");
  const field3 = screen.getByPlaceholderText("Senha");
  const btn = screen.getByText("Enviar");

  expect(field1).toBeTruthy()
  expect(field2).toBeTruthy()
  expect(field3).toBeTruthy()
  expect(btn).toBeTruthy()
  expect(btn).toHaveClass("disabled")

});

test('render form', () => {
  render(<App />);

  const field1 = screen.getByPlaceholderText("Nome");
  const field2 = screen.getByPlaceholderText("Email");
  const field3 = screen.getByPlaceholderText("Senha");
  const btn = screen.getByText("Enviar");

  fireEvent.change(field1, {target: {value: 'Teste'}})
  fireEvent.change(field2, {target: {value: 'teste@emil.com'}})
  fireEvent.change(field3, {target: {value: '123123'}})
  fireEvent.click(btn)

  expect(btn).toBeTruthy()

});

