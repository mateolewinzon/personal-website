import Heading from "../common/Heading"
import SubHeading from "../common/SubHeading"
import Span from "../common/Span"


export default {
    h1: ({children, ...props})=> <Heading className='my-5' {...props}>{children}</Heading>,
    h2: ({children, ...props})=> <SubHeading className='my-5' {...props}>{children}</SubHeading>,
    p: ({children, ...props}) => <Span className='my-5' {...props}>{children}</Span>,


}