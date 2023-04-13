import ActionsHeader from "@organisms/ActionsHeader";
import Accordion from "@organisms/Accordion";
import MainLayout from "@layouts/MainLayout";

export default function FAQ(){

    const accordionItems = [
        {title: 'What is Bitcoin?', body: 'Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.', },
        {title: 'Is there any risks?', body: ' Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.', },
        {title: 'How can I buy Bitcoin?', body: 'You can buy Bitcoin with a credit card, debit card, bank transfer, or cash. You can also buy Bitcoin with PayPal, Apple Pay, or Google Pay.', }
    ]

    return (
        <MainLayout header={<ActionsHeader title='FAQ'></ActionsHeader>}>
            <div className="mt-10">
                <Accordion items={accordionItems}/>
            </div>
        </MainLayout>
    )
}