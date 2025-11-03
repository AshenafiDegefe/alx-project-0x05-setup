import { ReactNode } from "react";

export interface ReactComponentProps {
  children: ReactNode
}


export interface GeneratedImageProps {
  imageUrl: string
  prompt: string
  width?: string
  height?: string
  action: (imagePath: string) => void
}

export type RequestProps = {
  prompt: string;
}

type R = RequestProps |null | undefined;
const RequestProps: NonNullable<R> = {
  prompt: " "
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">