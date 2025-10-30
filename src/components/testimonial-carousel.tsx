"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "A Dra. Fernanda me explicou tudo com paciência e clareza. Saí da consulta tranquila e confiante!",
    author: "Maria S.",
  },
  {
    quote:
      "Um atendimento exemplar. A Dra. Fernanda é muito atenciosa e competente. Estou muito satisfeita com o tratamento.",
    author: "Joana L.",
  },
  {
    quote:
      "Profissional excelente! Me senti muito à vontade durante a consulta e o tratamento superou minhas expectativas.",
    author: "Carlos M.",
  },
  {
    quote:
      "A melhor dermatologista que já consultei. Atendimento humanizado e resultados visíveis em pouco tempo.",
    author: "Beatriz R.",
  },
];

export function TestimonialCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 border-0 bg-card p-6">
                  <CardContent className="p-0 text-center">
                    <Quote className="h-8 w-8 text-primary/20 mb-4 mx-auto" />
                    <p className="text-muted-foreground text-sm italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <div className="p-0 pt-4 text-center">
                     <p className="font-bold text-sm mt-2">- {testimonial.author}</p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              current === index + 1 ? "bg-primary w-4" : "bg-primary/20"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

    