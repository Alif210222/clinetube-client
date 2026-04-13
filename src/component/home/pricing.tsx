import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Choose Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card className="p-8 bg-white/5">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-5xl font-bold mt-4">$0</p>
            <Button className="w-full mt-6">Get Started</Button>
          </Card>

          <Card className="p-8 bg-pink-500 text-white scale-105">
            <h3 className="text-2xl font-bold">Monthly</h3>
            <p className="text-5xl font-bold mt-4">$9</p>
            <Button className="w-full mt-6 bg-white text-black">
              Most Popular
            </Button>
          </Card>

          <Card className="p-8 bg-white/5">
            <h3 className="text-2xl font-bold">Yearly</h3>
            <p className="text-5xl font-bold mt-4">$79</p>
            <Button className="w-full mt-6">Save 30%</Button>
          </Card>

        </div>
      </div>
    </section>
  );
}