import { fireEvent, render, screen } from "@testing-library/react"
import Cart from "./Cart"

describe('Cart', ()=>{
    it('renders a button', ()=>{
        render(<Cart />)
    })
})

describe('When user clicks purchase button', () => {
    it('renders Thank you!', () => {
        render(<Cart />)
        expect(screen.queryByText(/Thank you!/i)).not.toBeInTheDocument()
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByText(/Thank you!/i)).toBeInTheDocument()
    })
})