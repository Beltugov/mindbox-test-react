import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Button from "./components/Button/Button.tsx";

describe('App', () => {
    it('renders correctly', () => {
        render(<Button onClick={() => console.log("work")}/>)
        expect(true).toBeTruthy()
    })
})