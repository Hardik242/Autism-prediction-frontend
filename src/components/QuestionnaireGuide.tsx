import {useState} from "react";
import {Card} from "./ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";

const toddlerQuestions = [
    "How often does your child look at you when you call his/her name?",
    "How often does your child make eye contact with you?",
    "How often does your child point with their finger to ask for something?",
    "How often does your child point to show you something interesting?",
    "How often does your child engage in pretend play (e.g., talking on a toy phone, feeding a doll)?",
    "How often does your child look to see what you are looking at?",
    "When someone nearby is visibly upset, how often does your child show signs of trying to comfort them?",
    "How often does your child use sounds or simple words to communicate or get your attention?",
    "How often does your child use simple gestures, such as waving goodbye or shaking their head?",
    "How often does your child stare blankly into space for several seconds?",
];

const generalQuestions = [
    "How often do you notice small sounds that others do not?",
    "How often do you concentrate on the whole picture instead of the small details?",
    "How often do you find it easy to do more than one thing at once?",
    "After an interruption, how often can you quickly switch back to what you were doing?",
    "How often do you find it easy to understand the hidden meaning or intent ('read between the lines') in a conversation?",
    "How often do you notice when the person you are talking to is getting bored?",
    "When reading a story, how often do you find it difficult to understand the characters' intentions?",
    "How often do you enjoy collecting detailed information about specific categories of things?",
    "How often do you find it easy to understand someone's thoughts or feelings just by looking at their face?",
    "How often do you find it difficult to understand other people's intentions?",
];

export const QuestionnaireGuide = () => {
    const [activeTab, setActiveTab] = useState("toddler");

    return (
        <section className="space-y-4 animate-fade-in max-w-[95%] md:max-w-[85%] mx-auto">
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
