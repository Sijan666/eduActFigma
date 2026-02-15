import React from 'react'
import Container from '../Container'
import { BiSolidChevronsRight } from 'react-icons/bi'
import Commonh4 from '../Commonh4'
import Commonh3 from '../Commonh3'
import CourseCard from '../CourseCard'
import Rating from '../../assets/Rating.png'

const Course = () => {
    return (
        <>
        <section className='ourCategory'>
            <div className="py-20">
                <Container className={'w-[390px] lg:w-330 mx-auto'}>
                    {/* common text part */}
                    <div className="text-center pb-20">
                        <div className='gap-x-[15px] items-center flex justify-center'>
                            <Commonh4 commonh4={'Popular Course'} className={'text-primarys '}/>
                            <div className="flex items-center text-secondarys text-[20px]">
                                <BiSolidChevronsRight/>
                                <BiSolidChevronsRight className='-ml-2'/>
                            </div>
                        </div>
                        <Commonh3 commonh3={"Favorite Topics To Learn"} className={'text-primaryTwo'}/>
                    </div>
                    {/* common text part */}
                    {/* course card part */}
                    <div className="pt-20 flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:justify-between items-center">
                        {/* 1st card */}
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        {/* 2nd card */}
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                        <CourseCard 
                            className={'lg:w-1/3'}
                            courseTime={'20 Hours'}
                            courseRating={Rating}
                            courseTitle={'Management Consultants in Competitive Markets'}
                            insName={'Guy Hawkins'}
                            insTitle={'Project Manager'}
                            price={'$473.00'}
                            lessons={'15 Lessons'}
                        />
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Course