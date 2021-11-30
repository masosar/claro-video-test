import { render, screen, cleanup } from '@testing-library/react';
import UserList from '../UserList';

afterEach(() => {
    cleanup();
})
test('should render UserList component', () => {
    render(<UserList/>);
    const clarogridElement = screen.getByTestId('gridpeliculas');
    expect(clarogridElement).toBeInTheDocument();
})