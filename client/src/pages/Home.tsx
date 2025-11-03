import { Button } from "@/components/ui/button"
import Header from "@/components/layouts/Header"
import { Background } from "@/components/Background"

const Home = () => {
    return (
        <div className="relative min-h-screen">
            <Background/>
            <Header/>
            <div className="relative z-10 pt-20">
                <Button className="ml-4 mt-4">click me</Button>
                
                <div className="h-screen flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Your Content Here</h1>
                </div>
            </div>
        </div>
    )
}

export default Home