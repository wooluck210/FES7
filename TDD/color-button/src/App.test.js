import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // 스크린 객체에서 name 텍스트를를 가진 button이라는 역할을 찾는다.
  const button = screen.getByRole('button', {name: 'change to blue!'})
  expect(button).toHaveStyle({backgroundColor: 'red'})

  fireEvent.click(button)
  expect(button.textContent).toBe('change to red!')
});
