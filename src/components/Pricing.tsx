import { Button } from "@/components/ui/button";

export const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Basic",
              price: "$10",
              period: "/month",
              features: [
                "Basic emotion translation",
                "Activity tracking",
                "Location monitoring",
                "Mobile app access",
              ],
              highlight: false,
            },
            {
              name: "Premium",
              price: "$25",
              period: "/month",
              features: [
                "Advanced emotion analysis",
                "Health insights & alerts",
                "Behavior pattern analysis",
                "24/7 video recording",
              ],
              highlight: true,
            },
            {
              name: "Family",
              price: "$40",
              period: "/month",
              features: [
                "Multiple pet support",
                "Advanced health analytics",
                "Family member access",
                "Priority support",
              ],
              highlight: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-8 ${
                plan.highlight
                  ? "bg-primary text-white scale-105 transform"
                  : "bg-gray-800 text-white"
              } animate-fade-up hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-300">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};