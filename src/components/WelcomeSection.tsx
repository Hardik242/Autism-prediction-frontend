import { AlertCircle, ArrowRight, FileText } from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-background.jpg";

interface WelcomeSectionProps {
  onReviewQuestions: () => void;
  onStartScreening: () => void;
}

export const WelcomeSection = ({ onReviewQuestions, onStartScreening }: WelcomeSectionProps) => {
  return (
    <>
      <section className="relative -mx-8 -mt-8 px-8 py-20 md:py-32 mb-16 overflow-hidden animate-fade-in">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground} 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            AI-Powered ASD Screening Tool
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
            A preliminary screening assessment to help identify potential indicators of Autism Spectrum Disorder
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              onClick={onStartScreening}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large font-semibold group"
            >
              Start Screening
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={onReviewQuestions}
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm shadow-medium font-semibold"
            >
              <FileText className="mr-2 h-5 w-5" />
              Review Questions
            </Button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Important Notice - Outside hero */}
      <Alert className="border-primary/20 bg-primary-light mb-8">
        <AlertCircle className="h-5 w-5 text-primary" />
        <AlertDescription className="text-foreground">
          <strong>Important:</strong> This is a screening tool designed to provide preliminary insights. 
          It is not a medical diagnosis and should not replace professional evaluation by a qualified healthcare provider.
        </AlertDescription>
      </Alert>
    </>
  );
};
