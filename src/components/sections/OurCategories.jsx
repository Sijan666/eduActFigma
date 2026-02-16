import Container from '../Container'
import Commonh4 from '../Commonh4.jsx'
import { BiSolidChevronsRight } from 'react-icons/bi'
import Commonh3 from '../Commonh3.jsx'
import { forCategory } from '../../data/forCategory.js'
import Images from '../Images.jsx'

const OurCategories = () => {
    return (
        <>
        <section className='ourCategory'>
            <div className="bg-[url('/src/assets/categoryBg.png')] bg-center bg-cover bg-no-repeat py-30">
                <Container className={'w-[395px] lg:w-330'}>
                    {/* common text part */}
                    <div className="text-center pb-20">
                        <div className='gap-x-[15px] items-center flex justify-center'>
                            <Commonh4 commonh4={'Our Categories'} className={'text-white '}/>
                            <div className="flex items-center text-white text-[20px]">
                                <BiSolidChevronsRight/>
                                <BiSolidChevronsRight className='-ml-2'/>
                            </div>
                        </div>
                        <Commonh3 commonh3={"Favorite Topics To Learn"} className={'text-white'}/>
                    </div>
                    {/* common text part */}
                    {/* cart part */}
                    <div className="">
                        <div className={'border border-primarys lg:divide-x divide-y divide-primarys rounded-[14px] overflow-hidden flex lg:items-start! lg:flex-row flex-col'}>
                            {forCategory?.map((item)=>(
                                <div key={item?.id} className="py-14 px-22.5 text-center bg-white hover:bg-gray-100 duration-500 lg:w-1/4">
                                    <Images imgSrc={item.categoryImg} className={'mx-auto'}/>
                                    <Commonh4 commonh4={item.cateogoryTitle} className={'text-primaryTwo pt-[27px]'}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* cart part */}
                </Container>
            </div>
        </section>
        </>
    )
}

export default OurCategories