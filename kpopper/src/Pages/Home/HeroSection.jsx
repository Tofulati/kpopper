import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
    return (
        <div className="bg-white">
            <main>
                <div className="relative isolate">
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none">
                                <div className="w-full h-fit max-w-xl lg:shrink-0 xl:max-w-2xl lg:pt-10">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        Earth Equity
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        Earth Equity is an interactive learning
                                        platform that aims to educate a broad
                                        range of students from junior-high to
                                        college on significant challenges in the
                                        world. By emulating an online brokerage
                                        platform (i.e. Fidelity, RobinHood,
                                        Weibo, etc…) users will have the ability
                                        to understand changes in the world
                                        through the perspective of a volatile
                                        economy. In the same way a company’s
                                        stock price changes over time, data
                                        available in public repositories change
                                        as a result of different factors. Earth
                                        Equity encourages its users to
                                        understand what influences changes in
                                        data and how to use this knowledge to
                                        combat challenges the world is facing.
                                        Introductory knowledge of investing as a
                                        subsequent side-effect!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}