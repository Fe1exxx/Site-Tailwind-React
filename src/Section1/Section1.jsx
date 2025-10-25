import Illustration from './Illustration.png'
import Button from '../AnotherComponents/Button'

export default function Section1() {
    return (
        <section className="flex justify-between items-center h-[416.9px] bg-[#F5F7FA]">
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 space-y-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h1>
                        <p className="text-lg text-gray-600">
                            Where to grow your business as a photographer: site or social media?
                        </p>

                        <div className="flex sm: justify-center lg:justify-between">
                            <Button>Узнать больше</Button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <img src={Illustration} alt="Illustration" className="w-[272.2px] rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}