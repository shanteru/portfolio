
import Social from "./Social"

const Footer = () => {
  return (
    <footer className="bg-[#EBDAFD] dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          {/* socials */}
          <Social containerStyles="flex gap-x-6  mx-auto xl:mx-0 mb-4" iconsStyles="text-primary dark:text-white/70 
          hover:text-white dark:hover:text-primary text-[20px] transition-all "/>
          {/* copyright */}
          <div className="text-foreground md:w-auto text-center">
          Copyright &copy; Chantelle Loh. All rights reserved.
          </div>
          
        </div>

      </div>
    </footer>
  )
}

export default Footer