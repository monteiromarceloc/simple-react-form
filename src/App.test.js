import { fireEvent, render, screen } from '@testing-library/react';
import Home from './pages/Home';

describe('Home Form Component', () => {

  let field1, field2, field3, btn;

  beforeEach(() => {
    render(<Home />);
    field1 = screen.getByPlaceholderText("Nome");
    field2 = screen.getByPlaceholderText("Email");
    field3 = screen.getByPlaceholderText("Senha");
    btn = screen.getByText("Enviar");
  });
  
  it('should render correctly', () => {
    expect(field1.value).toBe("");
    expect(field2.value).toBe("");
    expect(field3.value).toBe("");
    expect(btn).toBeDisabled();
  });

  it('should not send if there are empty fields', async () => {
    fireEvent.change(field3, { target: { value: "222222" } });
    fireEvent.click(btn);
    expect(btn).toBeDisabled();
  });

  it('should validate password but not send if rules are not followed', async () => {
    fireEvent.change(field1, { target: { value: "Nome teste" } });
    fireEvent.change(field2, { target: { value: "teste@email.com" } });
    fireEvent.change(field3, { target: { value: "123456" } });
    fireEvent.click(btn);
    expect(screen.getByText("Senha inválida")).toBeInTheDocument();
  });

  it('should validate passwords that matches pattern', async () => {
    fireEvent.change(field1, { target: { value: "Nome teste" } });
    fireEvent.change(field2, { target: { value: "teste@email.com" } });
    fireEvent.change(field3, { target: { value: "222222" } });
    expect(btn).toBeEnabled();

    fireEvent.click(btn);
    expect(screen.getByText("Senha válida")).toBeInTheDocument();
  });

  it('should disable button while sending data', async () => {
    fireEvent.change(field1, { target: { value: "Nome teste" } });
    fireEvent.change(field2, { target: { value: "teste@email.com" } });
    fireEvent.change(field3, { target: { value: "222222" } });
    expect(btn).toBeEnabled();
    fireEvent.click(btn);
    expect(btn).toBeDisabled();
  });

});


