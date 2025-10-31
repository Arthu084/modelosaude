"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  avatarUrl: string;
  avatarHint: string;
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="animate-scroll">
        {duplicatedTestimonials.map((testimonial, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3 flex-shrink-0"
          >
            <div className="p-1 h-full">
              <Card className="h-full p-2 flex flex-col items-center justify-center text-center gap-1 shadow-lg">
                <Avatar className="w-16 h-16">
                  <AvatarImage
                    src={testimonial.avatarUrl}
                    alt={testimonial.author}
                    data-ai-hint={testimonial.avatarHint}
                  />
                  <AvatarFallback>
                    {testimonial.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-sm mt-1">{testimonial.author}</p>
                  <div className="flex items-center gap-0.5">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-xs italic mt-1">
                  "{testimonial.quote}"
                </p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}