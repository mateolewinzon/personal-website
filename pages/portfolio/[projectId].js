import { useRouter } from 'next/router'

const PortfolioProject = () => {
    const {query: {id}} = useRouter()

    

    return <div>
        <h2>PortfolioProject: {id}</h2>
    </div>
}

export default PortfolioProject