import {useState} from "react";
import {Card} from "./ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";

const toddlerQuestions = [
    "Does your child look at you when you call their name?",
    "How easy is it for you to get eye contact with your child?",
    "Does your child point to indicate that they want something?",
    "Does your child point to share interest with you?",
    "Does your child pretend (e.g., care for dolls, talk on a toy phone)?",
    "Does your child follow where you're looking?",
    "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them?",
    "Would you describe your child's first words as typical or unusual?",
    "Does your child use simple gestures (e.g., wave goodbye)?",
    "Does your child stare at nothing with no apparent purpose?",
];

const generalQuestions = [
    "Do you find it easy to understand what others are thinking or feeling by looking at their faces?",
    "Do you find it difficult to predict what will happen next in social situations?",
    "Do you find it easy to do more than one thing at once?",
    "If there is an interruption, can you switch back to what you were doing very quickly?",
    "Do you find it easy to 'read between the lines' when someone is talking to you?",
    "Do you know how to tell if someone listening to you is getting bored?",
    "When you're reading a story, do you find it difficult to work out the characters' intentions?",
    "Do you like to collect information about categories of things (e.g., types of car, bird, train, plant)?",
    "Do you find it easy to work out what someone is thinking or feeling just by looking at their face?",
    "Do you find it difficult to work out people's intentions?",
];

export const QuestionnaireGuide = () => {
    const [activeTab, setActiveTab] = useState("toddler");

    return (
        <section className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-semibold text-foreground">
                Screening Questions Reference
            </h2>

            <Card className="p-6 shadow-medium">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-6 !h-fit">
                        <TabsTrigger
                            value="toddler"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-wrap">
                            For Toddlers (Under 4)
                        </TabsTrigger>
                        <TabsTrigger
                            value="general"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-wrap">
                            For Children & Adults (4+)
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="toddler" className="space-y-3">
                        <p className="text-sm text-muted-foreground mb-4">
                            These questions are specifically designed for
                            screening toddlers and young children.
                        </p>
                        <ol className="space-y-2">
                            {toddlerQuestions.map((question, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                        {index + 1}
                                    </span>
                                    <span className="text-foreground">
                                        {question}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </TabsContent>

                    <TabsContent value="general" className="space-y-3">
                        <p className="text-sm text-muted-foreground mb-4">
                            These questions are designed for screening children
                            (4+) and adults.
                        </p>
                        <ol className="space-y-2">
                            {generalQuestions.map((question, index) => (
                                <li key={index} className="flex gap-3">
                                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                        {index + 1}
                                    </span>
                                    <span className="text-foreground">
                                        {question}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </TabsContent>
                </Tabs>
            </Card>
        </section>
    );
};
