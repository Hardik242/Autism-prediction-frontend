import {Card} from "./ui/card";
import {DonutChart} from "./DonutChart";

interface ResultCardProps {
    modelName: string;
    riskPercent: number;
    explanation: string[];
}

export const ResultCard = ({
    modelName,
    riskPercent,
    explanation,
}: ResultCardProps) => {
    const getRiskLevel = (percent: number) => {
        if (percent < 30) return {level: "Low Risk", color: "text-success"};
        if (percent < 60) return {level: "Medium Risk", color: "text-warning"};
        return {level: "High Risk", color: "text-destructive"};
    };

    const risk = getRiskLevel(riskPercent);

    return (
        <Card className="p-6 shadow-medium space-y-4 animate-fade-in hover:shadow-large transition-shadow">
            <h3 className="text-xl font-semibold text-foreground text-center">
                {modelName}
            </h3>

            <DonutChart percentage={riskPercent} />

            <div className="text-center">
                <p className={`text-lg font-semibold ${risk.color}`}>
                    {risk.level}: {riskPercent.toFixed(1)}%
                </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground">
                    What Influenced This Result?
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                    Top factors considered in this assessment:
                </p>
                <ul className="space-y-1">
                    {explanation.map((factor, index) => (
                        <li key={factor} className="flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium mt-0.5">
                                {index + 1}
                            </span>
                            <span className="text-sm text-foreground">
                                {factor.includes("Score")
                                    ? "Question " +
                                      factor.substring(1, 3).replace("_", "")
                                    : factor}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};
