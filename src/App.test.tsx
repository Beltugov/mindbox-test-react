import '@testing-library/jest-dom'
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import Input from "./components/Input/Input.tsx";

describe('App', () => {
    afterAll(cleanup);

    it('Input', () => {
        let value = ''
        render(<Input value={value} onChange={(e) => {value = e.target.value}} addTask={() => {}}/>)

        const input = screen.getByPlaceholderText(/What needs to be done\?/i)
        expect(screen.queryByTestId('input')).toContainHTML('');

        fireEvent.input(input, {
            target: {value: 'test'}
        })

        expect(screen.queryByTestId('input')).toContainHTML('test');
    })

})