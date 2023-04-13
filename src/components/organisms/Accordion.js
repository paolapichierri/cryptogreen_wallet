import AccordionItem from "@molecules/AccordionItem"

export default function Accordion({items}){
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <AccordionItem
                            key={index}
                            first={index == 0}
                            last={index == (items.length - 1)}
                            active={index == 0}
                            title={item.title}
                            body={item.body}
                        />
                    )
                })
            }
        </div>
    )
}