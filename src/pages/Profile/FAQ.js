import MainLayout from "@layouts/MainLayout";
import ActionsHeader from "@organisms/ActionsHeader";

export default function FAQ(){
    return (
        <MainLayout header={<ActionsHeader title='FAQ'></ActionsHeader>}>
            {/* <div className="flex items-center justify-center">
                
                    <div className="flex flex-col justify-center px-4 mt-10 mx-auto md:p-8">
                        <div className="space-y-4">
                            <details className="w-full rounded-lg ring-1 ring-accent">
                                <summary className="px-4 py-6">
                                    What is Bitcoin? 
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.
                                </p>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6">
                                What is Props and how to use it give some example?
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                Props is the shorthand for Properties in React.
                                </p>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6">
                                How to install tailwind css in react js ?
                                </summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                What are synthetic events in React?
                                </p>
                            </details>
                        </div>
                    </div>
           
            </div> */}
            <div className="mt-6">
                <div>
                    <div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left border  border-secondary rounded-t-xl border-b-0 bg-accent text-white" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <span>What is Bitcoin?</span>
                                <svg data-accordion-icon="true" className="w-6 h-6 shrink-0  rotate-180 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div className="" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5 border border-secondary border-b-0">
                                <p className="text-secondary">Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left border  border-secondary text-primary" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <span>Is there any risks?</span>
                                <svg data-accordion-icon="true" className="w-6 h-6 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5 border border-secondary border-b-0">
                                <p className="text-secondary">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>
                            <button type="button" className="flex items-center justify-between w-full p-5 font-bold text-left border  border-secondary border-b text-primary" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                                <span>How can I buy Bitcoin?</span>
                                <svg data-accordion-icon="true" className="w-6 h-6 shrink-0 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </h2>
                        <div className="hidden" aria-labelledby="accordion-collapse-heading-1">
                            <div className="p-5 border border-secondary rounded-b-xl">
                                <p className="text-secondary">You can buy Bitcoin with a credit card, debit card, bank transfer, or cash. You can also buy Bitcoin with PayPal, Apple Pay, or Google Pay.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}