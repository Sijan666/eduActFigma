
import Commonh3 from '../Commonh3'
// import Button from '../Button'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'

const Discover = () => {
    return (
        <>
        <section className='discover'>
            {/* <Container> */}
                <div className={"bg-[url('/src/assets/discoverBg.png')] bg-center bg-cover bg-no-repeat py-20 lg:px-30 w-full lg:w-330 px-5 mx-auto lg:rounded-bl-[14px] lg:rounded-br-[14px]"}>
                    {/* common tag */}
                    <Commonh3 commonh3={'Discover the campus through a video tour'} className={'leading-10 lg:w-132 text-white lg:pb-10 pb-3 text-center lg:text-left'}/>
                    {/* common tag */}
                    {/* button */}
                    {/* <div className="bg-[#f58c37]  text-white text-[18px] font-bold rounded-md w-52 mx-auto lg:mx-0">
                    <Button btnText={<>Discover More<FaArrowRight /></>}className={"bg-secondarys py-[19px] px-8 rounded-md w-52 clip-ss flex items-center gap-x-2"}/>
                    </div> */}
                    <button className="btn mx-auto lg:mx-0">
                        Discover More
                        <FaArrowRight />
                    </button>
                    {/* button */}
                </div>
            {/* </Container> */}
        </section>
        </>
    )
}

export default Discover