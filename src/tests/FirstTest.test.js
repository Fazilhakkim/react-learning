import FirstTest from "../FirstTest";
import {render,screen} from '@testing-library/react';

test('check the component render successfully',()=>{
    render(<FirstTest />);
    const element = screen.getByText(/first test/i);
    expect(element).toBeInTheDocument();
})