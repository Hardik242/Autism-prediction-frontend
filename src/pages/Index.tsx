import {useState} from "react";
import {ThemeToggle} from "@/components/ThemeToggle";
import {WelcomeSection} from "@/components/WelcomeSection";
import {QuestionnaireGuide} from "@/components/QuestionnaireGuide";
import {ScreeningForm} from "@/components/ScreeningForm";
import {ResultsSection} from "@/components/ResultsSection";
import {useToast} from "@/hooks/use-toast";
import logo from "../assets/autism.png";

const API_URL = import.meta.env.VITE_API_URL; //For Production
// const API_URL = "http://127.0.0.1:8000"; //For Development

interface FormData {
    isToddler: boolean;
    Age: string;
    Gender: string;
    Jaundice: string;
    Family_History_ASD: string;
    A1_Score: string;
    A2_Score: string;
    A3_Score: string;
    A4_Score: string;
    A5_Score: string;
    A6_Score: string;
    A7_Score: string;
    A8_Score: string;
    A9_Score: string;
    A10_Score: string;
}

interface Result {
    model_name: string;
    risk_percent: number;
    explanation: string[];
}

const Index = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState<Result[] | null>(null);
    const {toast} = useToast();

    const scrollToQuestions = () => {
        document
            .getElementById("questionnaire-guide")
            ?.scrollIntoView({behavior: "smooth"});
    };

    const scrollToForm = () => {
        document
            .getElementById("screening-form")
            ?.scrollIntoView({behavior: "smooth"});
    };

    const handleSubmit = async (formData: FormData) => {
        setIsLoading(true);
        setResults(null);

        const Age = Number(formData.Age);

        const newFormData = {
            ...formData,
            Age,
        };

        try {
            const response = await fetch(`${API_URL}/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newFormData),
            });

            if (!response.ok) {
                throw new Error("Failed to analyze screening data");
            }

            const data: Result[] = await response.json();
            setResults(data);

            // Scroll to results
            setTimeout(() => {
                document.getElementById("results-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description:
                    "Failed to analyze screening data. Please ensure the API server is running and try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <nav className="sticky top-0 z-50 w-full border-b border-border/50 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 backdrop-blur-md supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-primary/10 supports-[backdrop-filter]:via-accent/5 supports-[backdrop-filter]:to-primary/10">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={logo} className="w-8 h-8 rounded-lg" />
                        <span className="font-semibold text-lg">
                            ASD Screening
                        </span>
                    </div>
                    <ThemeToggle />
                </div>
            </nav>

            <main className="py-8 md:py-12 space-y-12">
                <WelcomeSection
                    onReviewQuestions={scrollToQuestions}
                    onStartScreening={scrollToForm}
                />
                <div id="questionnaire-guide" className="scroll-mt-16">
                    <QuestionnaireGuide />
                </div>
                <div id="screening-form" className="scroll-mt-16">
                    <ScreeningForm
                        onSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                </div>
                <div id="results-section">
                    <ResultsSection isLoading={isLoading} results={results} />
                </div>
            </main>

            <footer className="border-t border-border bg-muted/30 py-6 mt-12">
                <div className="container text-center text-sm text-muted-foreground">
                    <p>
                        © 2025 ASD Screening Tool. For educational and screening
                        purposes only.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Index;
