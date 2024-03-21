import Link from "next/link"
import Wrapper from "./Wrapper"
import Image from 'next/image'
import Navitems from "./Navitems"

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="realtive bg-white">
            <Wrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/* mob nav */}


                        <div className="ml-4 flex lg:ml-0">
                            <Link href={'/'}>
                                <Image alt="" src={'/logo.png'} width={130} height={130}/>
                            </Link>
                        </div>
                        <div className="hidden-z-50 lg:ml-8 lg:block lg:self-stretch">
                            <Navitems/>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header>
    </div>
  )
}

export default Navbar