
"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    quote:
      "A Dra. Fernanda me explicou tudo com paciência e clareza. Saí da consulta tranquila e confiante!",
    author: "Maria S.",
    avatarUrl: "https://picsum.photos/seed/patient1/100/100",
    avatarHint: "woman smiling",
  },
  {
    quote:
      "Um atendimento exemplar. A Dra. Fernanda é muito atenciosa e competente. Estou muito satisfeita com o tratamento.",
    author: "Joana L.",
    avatarUrl: "https://picsum.photos/seed/patient2/100/100",
    avatarHint: "woman happy",
  },
  {
    quote:
      "Profissional excelente! Me senti muito à vontade durante a consulta e o tratamento superou minhas expectativas.",
    author: "Carlos M.",
    avatarUrl: "https://picsum.photos/seed/patient3/100/100",
    avatarHint: "man portrait",
  },
  {
    quote:
      "A melhor dermatologista que já consultei. Atendimento humanizado e resultados visíveis em pouco tempo.",
    author: "Beatriz R.",
    avatarUrl: "https://picsum.photos/seed/patient4/100/100",
    avatarHint: "woman content",
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
                <Card className="flex flex-col justify-between items-center text-center shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 border-0 bg-card p-6 h-full">
                   <Avatar className="w-16 h-16 mb-4">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.author} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center space-y-2">
                    <p className="font-bold text-sm">{testimonial.author}</p>
                    <div className="flex items-center gap-0.5">
                        {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                  </div>
                  <CardContent className="p-0 text-center mt-4">
                    <p className="text-muted-foreground text-sm italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center gap-2 mt-4">
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
