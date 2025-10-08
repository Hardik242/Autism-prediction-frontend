import {useState} from "react";
import {Card} from "./ui/card";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import {Button} from "./ui/button";
import {RadioGroup, RadioGroupItem} from "./ui/radio-group";

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

interface ScreeningFormProps {
    onSubmit: (data: FormData) => void;
    isLoading: boolean;
}

const scoreOptions = ["Always", "Usually", "Sometimes", "Rarely", "Never"];

export const ScreeningForm = ({onSubmit, isLoading}: ScreeningFormProps) => {
    const [ageCategory, setAgeCategory] = useState<"toddler" | "general">(
        "general"
    );
    const [formData, setFormData] = useState<FormData>({
        isToddler: false,
        Age: "",
        Gender: "",
        Jaundice: "",
        Family_History_ASD: "",
        A1_Score: "",
        A2_Score: "",
        A3_Score: "",
        A4_Score: "",
        A5_Score: "",
        A6_Score: "",
        A7_Score: "",
        A8_Score: "",
        A9_Score: "",
        A10_Score: "",
    });

    const handleAgeCategoryChange = (value: string) => {
        const isToddler = value === "toddler";
        setAgeCategory(value as "toddler" | "general");
        setFormData({...formData, isToddler, Age: ""});
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData({...formData, [field]: value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const isFormValid = () => {
        return (
            formData.Age &&
            formData.Gender &&
            formData.Jaundice &&
            formData.Family_History_ASD &&
            formData.A1_Score &&
            formData.A2_Score &&
            formData.A3_Score &&
            formData.A4_Score &&
            formData.A5_Score &&
            formData.A6_Score &&
            formData.A7_Score &&
            formData.A8_Score &&
            formData.A9_Score &&
            formData.A10_Score
        );
    };

    return (
        <section className="space-y-4 animate-fade-in max-w-[95%] md:max-w-[85%] mx-auto">
            <h2 className="text-2xl font-semibold text-foreground">
                Screening Assessment
            </h2>

            <Card className="p-6 shadow-medium">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-3">
                        <Label className="text-base font-semibold">
                            Who are you screening?
                        </Label>
                        <RadioGroup
                            value={ageCategory}
                            onValueChange={handleAgeCategoryChange}
                            disabled={isLoading}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="toddler" id="toddler" />
                                <Label
                                    htmlFor="toddler"
                                    className="font-normal cursor-pointer">
                                    A Toddler (Age in Months)
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="general" id="general" />
                                <Label
                                    htmlFor="general"
                                    className="font-normal cursor-pointer">
                                    An Adult or Child (Age in Years)
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="age">
                                Age{" "}
                                {ageCategory === "toddler"
                                    ? "(in months)"
                                    : "(in years)"}
                            </Label>
                            <Input
                                id="age"
                                type="number"
                                min="0"
                                value={formData.Age}
                                onChange={(e) =>
                                    handleInputChange("Age", e.target.value)
                                }
                                disabled={isLoading}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>
                            <Select
                                value={formData.Gender}
                                onValueChange={(value) =>
                                    handleInputChange("Gender", value)
                                }
                                disabled={isLoading}>
                                <SelectTrigger id="gender">
                                    <SelectValue placeholder="Select gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="m">Male</SelectItem>
                                    <SelectItem value="f">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="jaundice">Jaundice at Birth?</Label>
                            <Select
                                value={formData.Jaundice}
                                onValueChange={(value) =>
                                    handleInputChange("Jaundice", value)
                                }
                                disabled={isLoading}>
                                <SelectTrigger id="jaundice">
                                    <SelectValue placeholder="Select option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="family">
                                Immediate family member with ASD?
                            </Label>
                            <Select
                                value={formData.Family_History_ASD}
                                onValueChange={(value) =>
                                    handleInputChange(
                                        "Family_History_ASD",
                                        value
                                    )
                                }
                                disabled={isLoading}>
                                <SelectTrigger id="family">
                                    <SelectValue placeholder="Select option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Yes">Yes</SelectItem>
                                    <SelectItem value="No">No</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                            Assessment Questions
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Please answer the following 10 questions based on
                            observed behaviors.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                                const fieldKey =
                                    `A${num}_Score` as keyof FormData;
                                const fieldValue = formData[fieldKey];
                                return (
                                    <div key={num} className="space-y-2">
                                        <Label htmlFor={`q${num}`}>
                                            Question {num}
                                        </Label>
                                        <Select
                                            value={
                                                typeof fieldValue === "string"
                                                    ? fieldValue
                                                    : ""
                                            }
                                            onValueChange={(value) =>
                                                handleInputChange(
                                                    fieldKey,
                                                    value
                                                )
                                            }
                                            disabled={isLoading}>
                                            <SelectTrigger id={`q${num}`}>
                                                <SelectValue placeholder="Select frequency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {scoreOptions.map((option) => (
                                                    <SelectItem
                                                        key={option}
                                                        value={option}>
                                                        {option}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6"
                        disabled={!isFormValid() || isLoading}>
                        {isLoading ? "Analyzing..." : "Analyze Risk"}
                    </Button>
                </form>
            </Card>
        </section>
    );
};
