'use client';

import { type ReactNode, useState } from 'react';

import { FlexCol, FlexRow } from '@components/Flex';
import { Image } from '@components/Image';

import { Chevron } from './Chevron';
import { StyledArrow, StyledDot, StyledSlider } from './styles';

interface ImageSliderProps {
  images: string[];
  alt: string;
  tone: string;
  /** Rendered over the artwork, e.g. the favourite heart. */
  children?: ReactNode;
  sizes?: string;
}

export function ImageSlider({ images, alt, tone, children, sizes }: ImageSliderProps) {
  const [index, setIndex] = useState(0);

  const active = images[index] ?? images[0];
  const hasMultiple = images.length > 1;

  const step = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length);

  if (!active) return null;

  return (
    <FlexCol $gap="sm">
      <StyledSlider>
        {children}

        <Image src={active} alt={`${alt} — image ${index + 1} of ${images.length}`} sizes={sizes} />

        {hasMultiple && (
          <>
            <StyledArrow
              type="button"
              $side="left"
              aria-label="Previous image"
              onClick={() => step(-1)}
            >
              <Chevron direction="left" />
            </StyledArrow>
            <StyledArrow
              type="button"
              $side="right"
              aria-label="Next image"
              onClick={() => step(1)}
            >
              <Chevron direction="right" />
            </StyledArrow>
          </>
        )}
      </StyledSlider>

      {hasMultiple && (
        <FlexRow aria-label="Images" $gap="sm" $justify="center">
          {images.map((image, dotIndex) => (
            <StyledDot
              key={image}
              type="button"
              $active={dotIndex === index}
              $tone={tone}
              aria-label={`Show image ${dotIndex + 1} of ${images.length}`}
              aria-current={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </FlexRow>
      )}
    </FlexCol>
  );
}
