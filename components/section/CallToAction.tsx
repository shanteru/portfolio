import { Button } from "../ui/button"
import Link from "@/node_modules/next/link"

const CallToAction = () => {
  return (
    <section className="py-24  bg-gradient-to-t from-[#EBDAFD] from-75% to-white dark:bg-gradient-to-t dark:from-secondary dark:from-75% dark:to-background">
        <div className=" container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className=" mt-12 h2 text-center">Eager to master Software development in AI
                 </h2>
                 <h4 className=" h4 text-center mb-8">Bring my passion and potential to your team!</h4>
                <Link href='/contact'>
                <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CallToAction