"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2">
            <div className="p-1 h-full">
              <Card className="h-full p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 flex-shrink-0">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      data-ai-hint={testimonial.avatarHint}
                    />
                    <AvatarFallback>
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center flex-grow text-center">
                    <p className="font-bold text-sm">{testimonial.author}</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                    </div>
                    <p className="text-muted-foreground text-xs mt-2">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}