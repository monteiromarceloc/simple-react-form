import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './pages/App';

const mockSend = jest.fn();
const mockValidate = jest.fn();

describe('Form component', () => {

  let field1, field2, field3, btn;

  beforeAll(() => {
    jest.mock('./services/validation', () => ({
      validatePassword: mockValidate
    }));
    
    jest.mock('./services/api', () => ({
      sendData: mockSend
    }));

    render(<App />);
    field1 = screen.getByPlaceholderText("Nome");
    field2 = screen.getByPlaceholderText("Email");
    field3 = screen.getByPlaceholderText("Senha");
    btn = screen.getByText("Enviar");
  })
  
  // it('should render correctly', () => {
  //   expect(field1.value).toBe("");
  //   expect(field2.value).toBe("");
  //   expect(field3.value).toBe("");
  //   expect(btn).toHaveClass("disabled")
  // });

  // it('should not send if there are empty fields', () => {
  //   fireEvent.click(btn);
  //   expect(mockValidate).not.toHaveBeenCalled();
  //   expect(mockSubmit).not.toHaveBeenCalled();
  // });

  it('should validate password but not send if rules are not followed', async () => {

    act(() => {
      fireEvent.change(field1, { target: { value: "Nome teste" } });
      fireEvent.change(field2, { target: { value: "teste@email.com" } });
      fireEvent.change(field3, { target: { value: "123456" } });
    });

    fireEvent.click(btn);

    expect(mockValidate).toHaveBeenCalled();
    expect(mockSend).not.toHaveBeenCalled();
  })

});


